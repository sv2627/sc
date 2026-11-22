// Орбіта — чисті правила без DOM: план рівня, варіанти завдань, «Збери програму», рекорди.
// Працює і в браузері (window.OrbitaLogic), і в Node для тестів (module.exports).
"use strict";
(function (root) {
  const shuffleWith = (a, rnd) => {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };

  // План рівня: нагадування (learn) — спершу, у своєму порядку; звичайні завдання — перемішані,
  // з них береться `pick` (за замовчуванням усі); бос — завжди в кінці. v — номер варіанта або -1.
  function planLevel(items, opts = {}) {
    const rnd = opts.rnd || Math.random;
    const learn = [], tasks = [], boss = [];
    items.forEach((it, i) => (it.t === "learn" ? learn : it.boss ? boss : tasks).push(i));
    const n = Number.isInteger(opts.pick) && opts.pick > 0 ? Math.min(opts.pick, tasks.length) : tasks.length;
    const variant = i => {
      const vs = items[i].variants;
      return Array.isArray(vs) && vs.length ? Math.floor(rnd() * (vs.length + 1)) - 1 : -1; // -1 = основний
    };
    return [...learn, ...shuffleWith(tasks, rnd).slice(0, n), ...boss].map(i => ({ i, v: variant(i) }));
  }

  // Завдання з підставленим варіантом. id лишається тим самим (деталі — раз за завдання).
  function resolveItem(item, v) {
    if (!Array.isArray(item.variants) || v < 0 || v >= item.variants.length) return item;
    // _tiles — кеш перемішаних плиток рушія; варіанту він чужий (інакше правильної плитки може не бути).
    const { variants, _tiles, ...base } = item;
    return { ...base, ...item.variants[v] };
  }

  // Порожні місця «?» у програмі — по черзі: заголовок підкови, потім сегменти рядків.
  function slotCount(prog) {
    let n = 0;
    for (const b of prog) {
      if (b && b.when !== undefined) { if (b.when === "?") n++; for (const r of b.rows) n += r.filter(s => s === "?").length; }
      else if (Array.isArray(b)) n += b.filter(s => s === "?").length;
    }
    return n;
  }

  // firstBad — перше місце, що не збігається з відповіддю (або перше порожнє); -1 — усе вірно.
  function checkBuild(answer, filled) {
    for (let k = 0; k < answer.length; k++) if (filled[k] !== answer[k]) return { ok: false, firstBad: k };
    return { ok: filled.length === answer.length, firstBad: filled.length === answer.length ? -1 : answer.length };
  }

  // Рекорд рівня: найшвидше й найменше помилок. ms — активний час останньої спроби (після підзарядки — з нуля).
  function recordRun(prev, run) {
    const p = prev || { plays: 0, bestMs: null, bestErr: null };
    const msOk = Number.isFinite(run.ms) && run.ms > 0;
    const time = msOk && (p.bestMs === null || run.ms < p.bestMs);
    const errors = Number.isInteger(run.errors) && run.errors >= 0 && (p.bestErr === null || run.errors < p.bestErr);
    return {
      rec: { plays: p.plays + 1, bestMs: time ? run.ms : p.bestMs, bestErr: errors ? run.errors : p.bestErr },
      beat: { time: time && p.bestMs !== null, errors: errors && p.bestErr !== null }
    };
  }

  // 83 000 мс → "1:23"
  const fmtMs = ms => {
    if (!Number.isFinite(ms) || ms < 0) return "—";
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };

  const api = { planLevel, resolveItem, slotCount, checkBuild, recordRun, fmtMs, shuffleWith };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.OrbitaLogic = api;
})(typeof window !== "undefined" ? window : globalThis);
