// Орбіта — пробна версія рушія. Усе зберігається на телефоні (localStorage).
// У робочій версії правила нижче (rules) повторить сервер (Apps Script) і буде єдиним джерелом правди.
"use strict";

const GAMES = window.GAMES || {};
const LG = window.OrbitaLogic;
let G = null; // поточна гра
const gameOf = levelId => Object.values(GAMES).find(g => g.levels.some(l => l.id === levelId));
const KEY = "orbita.v1";
const $app = document.getElementById("app");
const IC = c => `assets/openmoji/${c}.svg`;

// ---------- правила економіки (дизайн §8, §13a) ----------
const rules = {
  chargeMax: 5,
  hintCost: 2,
  dailyCap: 25,
  perTask: 1,
  flawlessBonus: 4,
  repeatPay: 1,
  repeatPerDay: 3,
  newbieLevels: 3,
  stars(errors) { return errors <= 1 ? 3 : errors <= 3 ? 2 : 1; }
};

const ACH = [
  { id: "perfect", icon: "1F527", title: "Ідеальний шов", how: "Пройди рівень без жодної помилки" },
  { id: "boss", icon: "1F3C6", title: "Бос-ремонтник", how: "Переможи боса з першої спроби" },
  { id: "sector", icon: "1F6F0", title: "Інженер сектору", how: "Усі рівні сектору на ★★★" },
  { id: "nevergiveup", icon: "1F4AA", title: "Не здаюсь", how: "Пройди рівень після підзарядки" },
  { id: "pot", icon: "1F372", title: "Шолом-каструля", how: "Попроси підказку з Землі" },
  { id: "drained", icon: "1FAAB", title: "Розряджений", how: "Розрядись, а потім візьми ★★★ на тому ж рівні" },
  { id: "blackhole", icon: "1F573", title: "Чорна діра", how: "5 помилок поспіль (буває!)" },
  { id: "morse", icon: "1F4E1", title: "Морзе", how: "Секрет. Ґайка любить, коли її чіпають…", secret: true }
];

const SHOP = [
  { id: "neon", icon: "2728", title: "Неоновий корпус", price: 35, what: "Ґайка світиться блакитним" },
  { id: "heart", icon: "1F497", title: "Антена-сердечко", price: 70, what: "Сердечко замість кульки на антені" },
  { id: "trail", icon: "1F320", title: "Золотий шлейф", price: 140, what: "За Ґайкою летять іскри" }
];

// ---------- стан ----------
const today = () => new Date().toLocaleDateString("sv"); // YYYY-MM-DD за часом телефона
function blank() {
  return {
    nick: "", stars: {}, details: 0, paidTasks: {}, completed: {}, recharged: {},
    ach: {}, owned: {}, equipped: {}, day: { date: today(), earned: 0, repeats: 0 },
    wrongStreak: 0, rightStreak: 0, bestStreak: 0, rec: {}, run: null, queue: []
  };
}
let S;
try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch { S = blank(); }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} }
function rollDay() { if (S.day.date !== today()) S.day = { date: today(), earned: 0, repeats: 0 }; }

// Черга відповідей для майбутньої синхронізації з сервером (§6). Тут лише накопичується.
function log(ev) { S.queue.push({ ...ev, at: new Date().toISOString() }); if (S.queue.length > 500) S.queue.shift(); }

function pay(n) {
  rollDay();
  const room = Math.max(0, rules.dailyCap - S.day.earned);
  const got = Math.min(n, room);
  S.day.earned += got; S.details += got;
  return got;
}
const isNewbie = () => Object.keys(S.completed).length < rules.newbieLevels;
const totalStars = () => Object.values(S.stars).reduce((a, b) => a + b, 0);

// ---------- утиліти ----------
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function toast(t) {
  const d = document.createElement("div"); d.className = "toast"; d.textContent = t;
  document.body.appendChild(d); setTimeout(() => d.remove(), 2600);
}
function starsHtml(n, cls = "stars3") {
  return `<span class="${cls}" aria-label="${n} з 3 зірок">${[0, 1, 2].map(i => i < n ? "★" : '<span class="off">★</span>').join("")}</span>`;
}
function view(html) { $app.innerHTML = html; window.scrollTo(0, 0); }

// ---------- Ґайка: шестикутна гайка-дрон з одним оком (власний SVG) ----------
function gaika({ size = 120, mood = "happy", bob = true } = {}) {
  const neon = S.equipped.neon, heart = S.equipped.heart, trail = S.equipped.trail;
  const body = neon ? "var(--sky)" : "var(--sun)";
  const pupilY = mood === "sad" ? 66 : 62;
  const mouth = mood === "sad" ? "M48 90 Q60 82 72 90" : "M46 86 Q60 98 74 86";
  const tip = heart
    ? '<path d="M60 14 C54 6 44 12 50 20 L60 28 L70 20 C76 12 66 6 60 14Z" fill="var(--pink)" stroke="var(--ink)" stroke-width="3"/>'
    : '<circle cx="60" cy="16" r="7" fill="var(--pink)" stroke="var(--ink)" stroke-width="3"/>';
  const sparks = trail
    ? '<g fill="var(--gold)" stroke="var(--ink)" stroke-width="2"><path d="M14 112 l4 -9 4 9 -4 9z"/><path d="M100 118 l3 -7 3 7 -3 7z"/><path d="M30 126 l3 -6 3 6 -3 6z"/></g>'
    : "";
  return `<svg class="gaika ${bob && mood !== "sad" ? "bob" : ""} ${mood === "sad" ? "sad" : ""}" width="${size}" height="${size}" viewBox="0 0 120 132" role="img" aria-label="Ґайка">
    ${sparks}
    <line x1="60" y1="22" x2="60" y2="34" stroke="var(--ink)" stroke-width="4"/>
    ${tip}
    <g stroke="var(--ink)" stroke-width="3" fill="var(--paper)">
      <ellipse cx="16" cy="44" rx="14" ry="5"/><ellipse cx="104" cy="44" rx="14" ry="5"/>
    </g>
    <path d="M16 48 L16 56 M104 48 L104 56" stroke="var(--ink)" stroke-width="4"/>
    <polygon points="60,32 101,55 101,101 60,124 19,101 19,55" fill="${body}" stroke="var(--ink)" stroke-width="4" stroke-linejoin="round"/>
    <polygon points="60,40 93,59 93,97 60,116 27,97 27,59" fill="none" stroke="var(--ink)" stroke-width="2" opacity=".25"/>
    <circle cx="60" cy="64" r="20" fill="#fff" stroke="var(--ink)" stroke-width="4"/>
    <circle cx="62" cy="${pupilY}" r="9" fill="var(--ink)"/>
    <circle cx="65" cy="${pupilY - 3}" r="3" fill="#fff"/>
    <path d="${mouth}" fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="32" cy="84" r="5" fill="var(--pink)" opacity=".6"/><circle cx="88" cy="84" r="5" fill="var(--pink)" opacity=".6"/>
  </svg>`;
}

// ---------- станція: модуль = рівень (до 5) ----------
const SPOTS = [[60, 40], [260, 40], [60, 140], [260, 140], [160, 176]];
function station(game = G) {
  const lit = game.levels.map(l => !!S.completed[l.id]);
  const mod = (i, x, y) => {
    const on = lit[i];
    return `<g transform="translate(${x} ${y})">
      <rect x="-34" y="-22" width="68" height="44" rx="10" fill="${on ? ["var(--sky)", "var(--pink)", "var(--green)", "var(--orange)", "var(--gold)"][i % 5] : "var(--space-2)"}"
        stroke="${on ? "var(--ink)" : "var(--off)"}" stroke-width="3" ${on ? "" : 'stroke-dasharray="6 5"'}/>
      ${on ? '<circle cx="-14" cy="0" r="6" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><circle cx="6" cy="0" r="6" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>' :
        `<text x="0" y="6" text-anchor="middle" font-size="18" font-weight="900" fill="var(--off)">${i + 1}</text>`}
    </g>`;
  };
  const spots = SPOTS.slice(0, lit.length);
  return `<svg class="station" viewBox="0 0 320 200" role="img" aria-label="Станція: полагоджено ${lit.filter(Boolean).length} з ${lit.length} модулів">
    <g stroke="var(--off)" stroke-width="6">${spots.map(([x, y]) => `<line x1="160" y1="90" x2="${x}" y2="${y}"/>`).join("")}</g>
    ${spots.map(([x, y], i) => mod(i, x, y)).join("")}
    <circle cx="160" cy="90" r="34" fill="var(--sun)" stroke="var(--ink)" stroke-width="4"/>
    <circle cx="160" cy="90" r="14" fill="var(--paper)" stroke="var(--ink)" stroke-width="3"/>
  </svg>`;
}

function topbar() {
  return `<div class="top">
    <div class="who"><span class="eyebrow light">${esc(G.course)}</span><b>${esc(S.nick)}</b></div>
    <div class="pills">
      <span class="pill" title="Зірки"><img src="${IC("2B50")}" alt="">${totalStars()}</span>
      <span class="pill" title="Деталі"><img src="${IC("1F527")}" alt="">${S.details}</span>
    </div>
  </div>`;
}

// ---------- ачівки ----------
let fresh = [];
function earn(id) {
  if (S.ach[id]) return;
  S.ach[id] = today(); fresh.push(id); log({ e: "ach", id });
}

// ---------- екрани ----------
function screenNick() {
  view(`<div class="center" style="margin-top:24px">${gaika({ size: 150 })}</div>
    <h1 class="light center">Привіт, я Ґайка!</h1>
    <p class="light center">Я ремонтний дрон. Разом полагодимо космічну станцію.</p>
    <form class="card" id="f">
      <label for="nick"><b>Придумай собі нікнейм</b></label>
      <p class="hint">2–16 знаків: літери, цифри, _. Своє справжнє ім'я не пиши.</p>
      <input class="text" id="nick" maxlength="16" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div class="err" id="err"></div>
      <button class="btn">Полетіли!</button>
    </form>`);
  document.getElementById("f").onsubmit = e => {
    e.preventDefault();
    const v = document.getElementById("nick").value.trim();
    if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ0-9_]{2,16}$/.test(v)) {
      document.getElementById("err").textContent = "Тільки літери, цифри або _ — від 2 до 16 знаків.";
      return;
    }
    S.nick = v; save(); CLASSES.some(c => c.id === S.klas) ? screenPortal() : screenKlas();
  };
}

// Клас і школа: учень бачить лише ігри свого класу (g.classes).
// Сторінка школи (aik.html / respublika.html) задає window.ORBITA_SCHOOL — тоді видно лише її класи,
// і назва школи в підписі не потрібна. index.html без школи — усі класи (для вчителя).
const SCHOOL = window.ORBITA_SCHOOL || "";
const CLASSES = [
  { id: "5-aik", school: "aik", label: "5 клас", full: "5 клас · АІК" },
  { id: "6-aik", school: "aik", label: "6 клас", full: "6 клас · АІК" },
  { id: "6-resp", school: "respublika", label: "6 клас", full: "6 клас · Республіка" },
  { id: "7-aik", school: "aik", label: "7 клас", full: "7 клас · АІК" },
  { id: "7-resp", school: "respublika", label: "7 клас", full: "7 клас · Республіка" }
].filter(c => !SCHOOL || c.school === SCHOOL).map(c => ({ ...c, label: SCHOOL ? c.label : c.full }));
const klasLabel = () => (CLASSES.find(c => c.id === S.klas) || {}).label || "";
const myGames = () => Object.values(GAMES).filter(g => (g.classes || []).includes(S.klas));
function screenKlas() {
  view(`<div class="center" style="margin-top:24px">${gaika({ size: 120 })}</div>
    <h1 class="light center">Твій клас?</h1>
    <div class="levels">${CLASSES.map(c => `<button class="level game" data-k="${c.id}">
        <span class="t"><b>${esc(c.label)}</b></span></button>`).join("")}</div>`);
  $app.querySelectorAll("[data-k]").forEach(b => b.onclick = () => { S.klas = b.dataset.k; save(); screenPortal(); });
}

// Портал: усі ігри класу. Зірки, деталі, ачівки й крамниця — спільні для всіх ігор.
function screenPortal() {
  if (S.run && !gameOf(S.run.level)) S.run = null; // рівень прибрали з контенту
  const runGame = S.run && gameOf(S.run.level);
  view(`<div class="top">
      <div class="who"><span class="eyebrow light">Орбіта · ${esc(klasLabel())}</span><b>${esc(S.nick)}</b></div>
      <div class="pills">
        <span class="pill" title="Зірки"><img src="${IC("2B50")}" alt="">${totalStars()}</span>
        <span class="pill" title="Деталі"><img src="${IC("1F527")}" alt="">${S.details}</span>
      </div>
    </div>
    <div class="center">${gaika({ size: 110 })}</div>
    <h1 class="light center">Обери станцію</h1>
    ${runGame ? `<button class="btn" id="resume">Продовжити: ${esc(runGame.levels.find(l => l.id === S.run.level).title)}</button><div style="height:16px"></div>` : ""}
    <div class="levels">${myGames().map(g => {
      const done = g.levels.filter(l => S.completed[l.id]).length;
      const st = g.levels.reduce((a, l) => a + (S.stars[l.id] || 0), 0);
      return `<button class="level game" data-g="${g.id}">
        <span class="n" style="background:var(--${g.color || "sky"})">${esc(g.short || "")}</span>
        <span class="t"><b>${esc(g.course)}</b><small>Модулів: ${done} з ${g.levels.length} · ★ ${st} з ${g.levels.length * 3}</small></span>
      </button>`;
    }).join("")}</div>
    <div class="row" style="margin-top:16px">
      <button class="btn alt" id="ach">Ачівки</button>
      <button class="btn alt" id="shop">Крамниця</button>
    </div>
    <p class="center" style="margin-top:14px"><button class="btn small ghost" id="klas">Змінити клас</button></p>`);
  document.getElementById("klas").onclick = screenKlas;
  $app.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { G = GAMES[b.dataset.g]; screenHome(); });
  const r = document.getElementById("resume"); if (r) r.onclick = () => { G = runGame; screenTask(); };
  document.getElementById("ach").onclick = () => { G = null; screenAch(); };
  document.getElementById("shop").onclick = () => { G = null; screenShop(); };
}
const goBack = () => G ? screenHome() : screenPortal();

function unlocked(i) { return i === 0 || (S.stars[G.levels[i - 1].id] || 0) >= 1; }

function screenHome() {
  const devPanel = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) ? `
    <div class="card dev"><b>Тестова панель (лише на цьому компʼютері)</b>
      <div class="row" style="margin-top:8px">
        <button class="btn small ghost" id="d50">+50 деталей</button>
        <button class="btn small ghost" id="dopen">Відкрити всі рівні</button>
        <button class="btn small ghost" id="dreset">Почати з нуля</button>
      </div>
      <p class="hint" style="margin:8px 0 0">У черзі на сервер: ${S.queue.length} подій</p>
    </div>` : "";
  view(`<button class="back" id="toPortal">← Усі станції</button>
    ${topbar()}
    <div class="card" style="background:var(--space-2);color:var(--paper)">
      <div class="row" style="align-items:center">
        <div style="flex:0 0 96px">${gaika({ size: 96 })}</div>
        <div><span class="eyebrow light">${esc(G.sector)}</span><p style="margin:4px 0 0">${esc(G.about)}</p></div>
      </div>
      ${station()}
    </div>
    ${S.run && gameOf(S.run.level) === G ? `<button class="btn" id="resume">Продовжити рівень «${esc(G.levels.find(l => l.id === S.run.level).title)}»</button><div style="height:16px"></div>` : ""}
    <div class="levels">
      ${G.levels.map((l, i) => {
        const open = unlocked(i), st = S.stars[l.id] || 0, last = i === G.levels.length - 1;
        return `<button class="level ${open ? "" : "locked"} ${last ? "boss" : ""}" data-i="${i}" ${open ? "" : 'aria-disabled="true"'}>
          <span class="n">${i + 1}</span>
          <span class="t"><b>${esc(l.title)}</b><small>${open ? esc(l.lessons) : "Спершу пройди рівень " + i}</small></span>
          ${open ? starsHtml(st) : ""}
        </button>`;
      }).join("")}
    </div>
    <div class="row" style="margin-top:16px">
      <button class="btn alt" id="ach">Ачівки</button>
      <button class="btn alt" id="shop">Крамниця</button>
    </div>
    <div style="height:16px"></div>
    ${devPanel}`);
  $app.querySelectorAll(".level").forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    if (!unlocked(i)) { toast("Спершу пройди попередній рівень"); return; }
    screenBrief(i);
  });
  const r = document.getElementById("resume"); if (r) r.onclick = () => screenTask();
  document.getElementById("toPortal").onclick = () => { G = null; screenPortal(); };
  document.getElementById("ach").onclick = screenAch;
  document.getElementById("shop").onclick = screenShop;
  if (devPanel) {
    document.getElementById("d50").onclick = () => { S.details += 50; save(); screenHome(); };
    document.getElementById("dopen").onclick = () => { G.levels.forEach(l => { S.stars[l.id] = Math.max(1, S.stars[l.id] || 0); }); save(); screenHome(); };
    document.getElementById("dreset").onclick = () => { const n = S.nick; S = blank(); S.nick = n; save(); screenHome(); };
  }
}

function screenBrief(i) {
  const l = G.levels[i];
  const tasks = LG.planLevel(l.items, { pick: l.pick }).filter(e => l.items[e.i].t !== "learn").length;
  let taps = 0;
  view(`<button class="back" id="back">← На станцію</button>
    <div class="center">${gaika({ size: 130 })}</div>
    <div class="card">
      <span class="eyebrow">Рівень ${i + 1} · ${esc(l.lessons)}</span>
      <h1>${esc(l.title)}</h1>
      <p>Завдань: <b>${tasks}</b>, останнє — бос.</p>
      <p>У Ґайки <b>5 поділок заряду</b>. Помилка забирає одну. Розрядиться — почнеш рівень знову, але зароблене залишиться.</p>
      <p class="hint">Вийти можна будь-коли — продовжиш з того ж місця.</p>
      <button class="btn" id="go">Старт</button>
    </div>`);
  document.getElementById("back").onclick = screenHome;
  document.querySelector("#app .gaika").addEventListener("click", () => {
    if (++taps === 7) { earn("morse"); save(); toast("Секретна ачівка: Морзе!"); fresh = []; }
  });
  document.getElementById("go").onclick = () => { startRun(l.id); screenTask(); };
}

function startRun(levelId) {
  const prev = S.run && S.run.level === levelId ? S.run : null;
  const lvl = gameOf(levelId).levels.find(l => l.id === levelId);
  // Кожна спроба — свій набір і порядок завдань (щоб сусіди бачили різне).
  S.run = { level: levelId, idx: 0, charge: rules.chargeMax, errors: 0, earned: 0, hinted: false,
            recharged: prev ? prev.recharged : !!S.recharged[levelId], bossClean: false, taskErr: false,
            plan: LG.planLevel(lvl.items, { pick: lvl.pick }), ms: 0 };
  save();
}

function chargeHtml(c) {
  return `<span class="charge ${c <= 2 ? "low" : ""}" aria-label="Заряд ${c} з 5">${Array.from({ length: rules.chargeMax }, (_, i) => `<i class="${i < c ? "" : "off"}"></i>`).join("")}</span>`;
}

function screenTask() {
  const R = S.run; G = gameOf(R.level); const l = G.levels.find(x => x.id === R.level);
  // Збережений план міг застаріти (рівень змінили) або його ще не було — тоді план за порядком.
  if (!Array.isArray(R.plan) || R.plan.some(e => !l.items[e.i])) R.plan = l.items.map((_, i) => ({ i, v: -1 }));
  if (R.idx >= R.plan.length) return finishLevel();
  const it = LG.resolveItem(l.items[R.plan[R.idx].i], R.plan[R.idx].v);
  const total = R.plan.length;
  R.tick = Date.now();
  const hud = `<button class="back" id="back">← На станцію</button>
    <div class="hud">${chargeHtml(R.charge)}<div class="prog" aria-label="Прогрес"><i style="width:${Math.round(R.idx / total * 100)}%"></i></div></div>`;
  let body = "";
  if (it.t === "learn") {
    body = `<div class="card"><span class="eyebrow">Нагадування</span><p style="margin-top:8px">${esc(it.text)}</p>
      ${it.code ? `<div class="code">${esc(it.code)}</div>` : ""}${it.blocks ? blocksHtml(it.blocks) : ""}
      <button class="btn" id="ok">Зрозуміло</button></div>`;
  } else {
    body = `<div class="card">${it.boss ? '<span class="boss-tag">БОС</span>' : ""}<div class="q">${esc(it.q)}</div><div id="task"></div><div id="fb"></div></div>
      <button class="btn ghost help" id="hint">Підказка з Землі (−${rules.hintCost} заряду)</button>`;
  }
  view(hud + body);
  document.getElementById("back").onclick = () => { save(); screenHome(); };
  if (it.t === "learn") { document.getElementById("ok").onclick = () => { addTime(); R.idx++; save(); screenTask(); }; return; }
  R.taskErr = R.taskErr || false;
  renderTask(it);
  document.getElementById("hint").onclick = () => useHint(it);
}

let locked = false; // після правильної відповіді — чекаємо «Далі»
// ---------- блоки App Inventor (кольори як у презентаціях уроків) ----------
// Сегмент — "вид|текст", рядок — масив сегментів, підкова — { when, rows }.
// Перший сегмент — сам блок, решта вкладаються в нього (гнізда), "lbl|to" — підпис усередині блока.
const KINDS = ["event", "set", "text", "num", "call", "log", "col", "var", "get"];
const split = s => { const i = s.indexOf("|"); return [s.slice(0, i), s.slice(i + 1)]; };
const seg = s => { const [k, t] = split(s);
  return k === "lbl" ? `<span class="lbl">${esc(t)}</span>` : `<span class="blk blk-${KINDS.includes(k) ? k : "set"}">${esc(t)}</span>`; };
const segText = r => Array.isArray(r) ? r.map(x => x.slice(x.indexOf("|") + 1)).join(" ") : String(r);
const rowHtml = r => { const [k, t] = split(r[0]);
  return `<span class="blk-row"><span class="blk blk-${KINDS.includes(k) ? k : "set"}">${esc(t)}${r.slice(1).map(seg).join("")}</span></span>`; };
function blocksHtml(list) {
  return `<div class="blocks">${list.map(b => b.when
    ? `<div class="cblk"><div class="cblk-h">${esc(b.when)} <span class="dl">do</span></div><div class="cblk-b">${b.rows.map(rowHtml).join("")}</div></div>`
    : `<div>${rowHtml(b)}</div>`).join("")}</div>`;
}
const cell = x => Array.isArray(x) ? rowHtml(x) : esc(x);

function renderTask(it) {
  locked = false;
  const box = document.getElementById("task");
  const mono = s => typeof s === "string" && !/[А-Яа-яІіЇїЄєҐґ]/.test(s);
  if (it.blocks) box.insertAdjacentHTML("beforebegin", blocksHtml(it.blocks));
  if (it.code) box.insertAdjacentHTML("beforebegin", `<div class="code">${esc(it.code)}</div>`);
  if (it.t === "quiz") {
    const order = shuffle(it.options.map((_, i) => i));
    box.innerHTML = `<div class="opts">${order.map(i => `<button class="opt ${mono(it.options[i]) ? "mono" : ""}" data-i="${i}">${cell(it.options[i])}</button>`).join("")}</div>`;
    box.querySelectorAll(".opt").forEach(b => b.onclick = () => answer(it, +b.dataset.i === it.a, b, `#task .opt[data-i="${it.a}"]`));
  }
  if (it.t === "bugline") {
    box.innerHTML = `<div class="lines">${it.lines.map((s, i) => `<button class="line ${Array.isArray(s) ? "blkline" : ""}" data-i="${i}">${cell(s)}</button>`).join("")}</div>`;
    box.querySelectorAll(".line").forEach(b => b.onclick = () => answer(it, +b.dataset.i === it.a, b, `#task .line[data-i="${it.a}"]`));
  }
  if (it.t === "tagwrap") {
    let pick = [null, null];
    const draw = () => {
      box.innerHTML = `<div class="wrap-row">
          <button class="slot ${pick[0] ? "filled" : ""}" data-s="0">${pick[0] ? esc(pick[0]) : "?"}</button>
          <span class="wrap-text">${esc(it.text)}</span>
          <button class="slot ${pick[1] ? "filled" : ""}" data-s="1">${pick[1] ? esc(pick[1]) : "?"}</button>
        </div>
        <div class="tiles">${it._tiles.map(t => `<button class="tile ${pick.includes(t) ? "used" : ""}">${esc(t)}</button>`).join("")}</div>
        <p class="hint center" style="margin-top:12px">Тапни плитку — вона стане в порожнє місце. Тапни місце — плитка повернеться.</p>`;
      box.querySelectorAll(".tile").forEach(b => b.onclick = () => {
        if (locked) return;
        const t = b.textContent; const k = pick[0] ? (pick[1] ? -1 : 1) : 0;
        if (k < 0) return; pick[k] = t; draw();
        if (pick[0] && pick[1]) {
          const ok = pick[0] === it.a[0] && pick[1] === it.a[1];
          answer(it, ok, null, null, () => { pick = [null, null]; draw(); });
        }
      });
      box.querySelectorAll(".slot").forEach(b => b.onclick = () => { if (locked) return; pick[+b.dataset.s] = null; draw(); });
    };
    it._tiles = it._tiles || shuffle(it.tiles);
    draw();
  }
  if (it.t === "build") renderBuild(it, box);
}

// ---------- «Збери програму»: блоки тапом у порожні місця, потім ▶ на намальованому телефоні ----------
const SLOT_HTML = (k, bad) => `<button class="bslot ${bad ? "bad" : ""}" data-k="${k}" aria-label="Порожнє місце ${k + 1}">?</button>`;
function progHtml(prog, filled, bad) {
  let k = 0;
  const one = (s, head) => {
    if (s !== "?") return null;
    const n = k++, f = filled[n];
    if (f === undefined) return SLOT_HTML(n, false);
    const [kind, t] = split(f);
    return `<button class="bslot filled ${bad === n ? "bad" : ""}" data-k="${n}"><span class="blk blk-${KINDS.includes(kind) ? kind : "set"}">${esc(t)}</span></button>`;
  };
  const row = r => {
    const first = one(r[0]);
    const rest = r.slice(1).map(s => one(s) ?? seg(s)).join("");
    if (first !== null) return `<span class="blk-row">${first}${rest}</span>`;
    const [kind, t] = split(r[0]);
    return `<span class="blk-row"><span class="blk blk-${KINDS.includes(kind) ? kind : "set"}">${esc(t)}${rest}</span></span>`;
  };
  return `<div class="blocks build">${prog.map(b => b && b.when !== undefined
    ? `<div class="cblk"><div class="cblk-h">${b.when === "?" ? one("?") : esc(b.when)} <span class="dl">do</span></div><div class="cblk-b">${b.rows.map(row).join("") || '<span class="hint light">…</span>'}</div></div>`
    : `<div>${row(b)}</div>`).join("")}</div>`;
}
function phoneHtml(state, run) {
  const scr = state === "ok" ? `<b class="ph-text ${esc(run.fx || "")}">${esc(run.text)}</b>`
    : state === "bad" ? `<b class="ph-text">${esc(run.fail || "Щось не те… 🤔")}</b>`
    : '<span class="hint">Збери програму й натисни ▶</span>';
  return `<div class="phone ${state === "bad" ? "shake" : ""} ${state === "ok" && run.fx === "vibrate" ? "shake" : ""}" aria-live="polite"><div class="ph-screen">${scr}</div></div>`;
}
function renderBuild(it, box) {
  const need = LG.slotCount(it.prog);
  it._tiles = it._tiles || shuffle([...it.a, ...(it.extra || [])].map((s, i) => ({ s, i })));
  // filled[k] — блок у місці k, from[k] — з якої плитки він узятий.
  const filled = [], from = [], used = new Set();
  let bad = -1, state = "idle";
  const draw = () => {
    const full = filled.length === need && !filled.includes(undefined);
    box.innerHTML = `${progHtml(it.prog, filled, bad)}
      <div class="tiles btiles">${it._tiles.map(({ s, i }) => { const [kind, t] = split(s);
        return `<button class="btile ${used.has(i) ? "used" : ""}" data-i="${i}"><span class="blk blk-${KINDS.includes(kind) ? kind : "set"}">${esc(t)}</span></button>`; }).join("")}</div>
      ${phoneHtml(state, it.run || {})}
      <button class="btn" id="run" ${full && !locked ? "" : "disabled"}>▶ Запустити</button>
      <p class="hint center" style="margin-top:8px">Тапни блок — він стане в перше порожнє місце. Тапни місце — блок повернеться.</p>`;
    box.querySelectorAll(".btile").forEach(b => b.onclick = () => {
      if (locked) return;
      const i = +b.dataset.i; if (used.has(i)) return;
      let k = filled.findIndex(x => x === undefined); if (k < 0) k = filled.length;
      if (k >= need) return;
      filled[k] = it._tiles.find(x => x.i === i).s; from[k] = i; used.add(i); bad = -1; state = "idle"; draw();
    });
    box.querySelectorAll(".bslot.filled").forEach(b => b.onclick = () => {
      if (locked) return;
      const k = +b.dataset.k; used.delete(from[k]); filled[k] = undefined; bad = -1; state = "idle"; draw();
    });
    document.getElementById("run").onclick = () => {
      if (locked) return;
      const res = LG.checkBuild(it.a, Array.from({ length: need }, (_, k) => filled[k]));
      state = res.ok ? "ok" : "bad"; bad = res.firstBad;
      draw();
      answer(it, res.ok, null, null, () => {
        if (!box.isConnected) return;
        // Залишаємо правильний початок, решту блоків повертаємо в набір.
        for (let k = Math.max(0, bad); k < need; k++) { if (filled[k] !== undefined) used.delete(from[k]); filled[k] = undefined; }
        bad = -1; state = "idle"; draw();
      });
      if (res.ok && box.isConnected) draw(); // кнопка ▶ стає неактивною
    };
  };
  draw();
}

function answer(it, ok, btn, rightSel, reset) {
  if (locked) return;
  const R = S.run;
  log({ e: "answer", task: it.id, ok });
  addTime();
  const fb = document.getElementById("fb");
  if (ok) {
    locked = true;
    if (btn) btn.classList.add("right");
    S.wrongStreak = 0;
    if (!R.taskErr) { S.rightStreak++; S.bestStreak = Math.max(S.bestStreak, S.rightStreak); }
    let got = 0;
    if (!R.taskErr && !S.paidTasks[it.id] && !S.completed[R.level]) {
      S.paidTasks[it.id] = 1;
      got = pay(rules.perTask * (isNewbie() ? 2 : 1));
      R.earned += got;
    }
    if (it.boss && !R.taskErr) R.bossClean = true;
    const tagPreview = it.t === "tagwrap" ? previewOf(it) : "";
    fb.innerHTML = `<div class="feedback ok"><b>Так!${got ? ` +${got} 🔧` : ""}</b>${esc(it.why)}${tagPreview}</div>
      <div style="height:12px"></div><button class="btn" id="next">Далі</button>`;
    document.getElementById("hint").style.display = "none";
    document.getElementById("next").onclick = () => { R.idx++; R.taskErr = false; save(); screenTask(); };
    save();
  } else {
    if (btn) { btn.classList.add("wrong"); setTimeout(() => btn.classList.remove("wrong"), 700); }
    R.taskErr = true; R.errors++; R.charge--;
    S.wrongStreak++; S.rightStreak = 0;
    if (S.wrongStreak >= 5) earn("blackhole");
    document.querySelector(".hud .charge").outerHTML = chargeHtml(Math.max(0, R.charge));
    if (R.charge <= 0) { save(); return screenDrained(); }
    fb.innerHTML = `<div class="feedback no"><b>Не зовсім.</b>${esc(it.why)}<br><span class="hint">Спробуй ще раз.</span></div>`;
    if (reset) setTimeout(reset, 900);
    save();
  }
}

// Активний час рівня: між діями, не більше 2 хв на крок — перерва в сховищі не псує рекорд.
function addTime() {
  const R = S.run; if (!R || !R.tick) return;
  const now = Date.now();
  R.ms = (R.ms || 0) + Math.min(Math.max(0, now - R.tick), 120000);
  R.tick = now;
}

function previewOf(it) {
  // Безпечний «рендер»: показуємо, як виглядатиме результат, без вставки HTML учня.
  const tag = (it.a[0].match(/^<([a-z0-9]+)/) || [])[1];
  const styles = { h1: "font-size:28px;font-weight:900", h2: "font-size:22px;font-weight:900", p: "", li: "display:list-item;margin-left:20px",
                   em: "font-style:italic", strong: "font-weight:900", a: "color:#1a5fd0;text-decoration:underline" };
  return `<div class="preview"><span class="cap">Так це виглядатиме на сторінці:</span><span style="${styles[tag] || ""}">${esc(it.text)}</span></div>`;
}

function useHint(it) {
  const R = S.run;
  if (locked) return;
  R.charge -= rules.hintCost; R.errors++; R.taskErr = true; R.hinted = true;
  earn("pot");
  log({ e: "hint", task: it.id });
  if (R.charge <= 0) { save(); return screenDrained(); }
  document.querySelector(".hud .charge").outerHTML = chargeHtml(R.charge);
  let ans = "";
  if (it.t === "quiz") ans = segText(it.options[it.a]);
  if (it.t === "bugline") ans = `рядок ${it.a + 1}: ${segText(it.lines[it.a])}`;
  if (it.t === "tagwrap") ans = `${it.a[0]} ${it.text} ${it.a[1]}`;
  if (it.t === "build") ans = it.a.map((s, k) => `${k + 1}) ${segText([s])}`).join("\n");
  document.getElementById("fb").innerHTML = `<div class="feedback no"><b>Земля на зв'язку:</b><span class="code" style="display:block;margin:8px 0 0">${esc(ans)}</span>${esc(it.why)}</div>`;
  toast("Ачівка: Шолом-каструля 🍲");
  save();
}

function screenDrained() {
  const R = S.run;
  S.recharged[R.level] = 1; R.recharged = true;
  log({ e: "drained", level: R.level });
  save();
  view(`<div class="center" style="margin-top:32px">${gaika({ size: 150, mood: "sad" })}</div>
    <div class="card center">
      <h1>Ґайка розрядилась</h1>
      <p>Нічого страшного — зароблені деталі залишились. Заряджаємось і пробуємо ще раз!</p>
      <button class="btn" id="again">Зарядитись і спробувати знову</button>
      <div style="height:12px"></div>
      <button class="btn ghost" id="home">На станцію</button>
    </div>`);
  document.getElementById("again").onclick = () => { startRun(R.level); screenTask(); };
  document.getElementById("home").onclick = () => { S.run = null; save(); screenHome(); };
}

function finishLevel() {
  const R = S.run; const lid = R.level;
  const st = rules.stars(R.errors);
  const first = !S.completed[lid];
  let bonus = 0;
  if (first && R.errors === 0) bonus += pay(rules.flawlessBonus);
  if (!first) {
    rollDay();
    if (S.day.repeats < rules.repeatPerDay) { S.day.repeats++; bonus += pay(rules.repeatPay); }
  }
  const gained = R.earned + bonus;
  const prevBest = S.stars[lid] || 0;
  S.stars[lid] = Math.max(prevBest, st);
  S.completed[lid] = 1;
  if (R.errors === 0) earn("perfect");
  if (R.bossClean) earn("boss");
  if (R.recharged) earn("nevergiveup");
  if (R.recharged && st === 3) earn("drained");
  if (G.levels.every(l => S.stars[l.id] === 3)) earn("sector");
  log({ e: "level", level: lid, stars: st, errors: R.errors, ms: R.ms });
  const { rec, beat } = LG.recordRun(S.rec[lid], { ms: R.ms, errors: R.errors });
  S.rec[lid] = rec;
  const recNote = beat.time || beat.errors
    ? `<div class="record">🏁 Новий рекорд: ${[beat.time ? `час ${LG.fmtMs(rec.bestMs)}` : "", beat.errors ? `помилок ${rec.bestErr}` : ""].filter(Boolean).join(", ")}!</div>`
    : `<p class="center hint">Час: ${LG.fmtMs(R.ms)} · рекорд: ${LG.fmtMs(rec.bestMs)}</p>`;
  S.run = null;
  const newOnes = fresh.slice(); fresh = [];
  save();
  const idx = G.levels.findIndex(l => l.id === lid);
  const next = G.levels[idx + 1];
  view(`<div class="center" style="margin-top:16px">${gaika({ size: 130 })}</div>
    <div class="card">
      <div class="big-stars">${[0, 1, 2].map(i => i < st ? "★" : '<span class="off">★</span>').join("")}</div>
      <h1 class="center">Модуль ${idx + 1} полагоджено!</h1>
      <p class="gain">${gained ? `+${gained} деталей 🔧` : first ? "Деталей цього разу немає" : "Повтор: деталі лише за перший раз"}</p>
      <p class="center hint">Помилок: ${R.errors}. ${st < 3 ? "≤ 1 помилки — і буде ★★★." : ""}${S.day.earned >= rules.dailyCap ? " На сьогодні ліміт деталей вичерпано." : ""}</p>
      ${recNote}
      ${newOnes.length ? `<h2>Нові ачівки</h2>${newOnes.map(id => { const a = ACH.find(x => x.id === id); return `<div class="new-badge"><img src="${IC(a.icon)}" alt=""><div><b>${esc(a.title)}</b><br><small>${esc(a.how)}</small></div></div>`; }).join("")}` : ""}
    </div>
    ${next ? `<button class="btn" id="next">Далі: ${esc(next.title)}</button><div style="height:12px"></div>` : ""}
    <button class="btn ghost" id="home">На станцію</button>`);
  if (next) document.getElementById("next").onclick = () => screenBrief(idx + 1);
  document.getElementById("home").onclick = screenHome;
}

function screenAch() {
  view(`<button class="back" id="back">← На станцію</button>
    <h1 class="light">Ачівки</h1>
    <p class="light">Золота рамка — заробив сам. Їх не купиш.</p>
    <div class="grid">${ACH.map(a => {
      const got = !!S.ach[a.id];
      const hidden = a.secret && !got;
      return `<div class="badge ${got ? "earned" : "locked"}">
        <div class="ic"><img src="${IC(hidden ? "2B50" : a.icon)}" alt=""></div>
        <b>${hidden ? "???" : esc(a.title)}</b><small>${esc(a.how)}</small></div>`;
    }).join("")}</div>`);
  document.getElementById("back").onclick = goBack;
}

function screenShop() {
  view(`<button class="back" id="back">← Назад</button>
    <h1 class="light">Крамниця</h1>
    <p class="light"><span class="pill"><img src="${IC("1F527")}" alt="">${S.details}</span></p>
    <p class="light">Деталі даються за правильні відповіді з першої спроби. Куплене — срібна рамка.</p>
    <div class="center" style="margin-bottom:16px">${gaika({ size: 120 })}</div>
    <div class="grid">${SHOP.map(s => {
      const own = !!S.owned[s.id], on = !!S.equipped[s.id];
      return `<div class="badge ${own ? "bought" : ""}">
        <div class="ic"><img src="${IC(s.icon)}" alt=""></div>
        <b>${esc(s.title)}</b><small>${esc(s.what)}</small>
        ${own ? `<button class="btn small ${on ? "" : "ghost"}" data-eq="${s.id}">${on ? "Зняти" : "Вдягнути"}</button>`
              : `<button class="btn small" data-buy="${s.id}" ${S.details < s.price ? "disabled" : ""}>${s.price} 🔧</button>`}
      </div>`;
    }).join("")}</div>`);
  document.getElementById("back").onclick = goBack;
  $app.querySelectorAll("[data-buy]").forEach(b => b.onclick = () => {
    const s = SHOP.find(x => x.id === b.dataset.buy);
    // У робочій версії купівля йде лише через сервер і лише онлайн (§6).
    if (!navigator.onLine) { toast("Купувати можна, коли є інтернет"); return; }
    if (S.owned[s.id] || S.details < s.price) return;
    S.details -= s.price; S.owned[s.id] = 1; S.equipped[s.id] = 1;
    log({ e: "buy", item: s.id, price: s.price });
    save(); toast(`Куплено: ${s.title}`); screenShop();
  });
  $app.querySelectorAll("[data-eq]").forEach(b => b.onclick = () => {
    const id = b.dataset.eq; S.equipped[id] = !S.equipped[id]; save(); screenShop();
  });
}

// ---------- старт ----------
(function stars() {
  const box = document.getElementById("stars");
  for (let i = 0; i < 60; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "%"; s.style.top = Math.random() * 100 + "%";
    s.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
    box.appendChild(s);
  }
})();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
!S.nick ? screenNick() : !CLASSES.some(c => c.id === S.klas) ? screenKlas() : screenPortal();
