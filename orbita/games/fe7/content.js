// 7 клас · Front-end II (A+) · I семестр — уроки 1–10 (проведені до 20.11.2026).
// Сторінка на телефоні, семантика, одиниці, Grid, позиціонування, :hover і рух.
// Пробна версія: відповіді лежать тут відкрито. У робочій версії їх замінять хеші (див. дизайн §6).
//
// Типи завдань: learn · quiz (a — індекс) · bugline (a — індекс рядка) · tagwrap (a — [відкривний, закривний]).
// variants — інші версії того самого завдання (той самий id), pick — скільки звичайних завдань брати в рівень.
(window.GAMES = window.GAMES || {}).fe7 = {
  id: "fe7", classes: ["7-aik"],
  course: "Front-end II · 7 клас", short: "CSS", color: "orange",
  sector: "Сектор 1 · Сітка й рух",
  about: "Станція має працювати на будь-якому екрані: від телефона до великого монітора. Збери сітку, постав бейджі й оживи картки.",
  levels: [
    {
      id: "fe7-1", title: "Сторінка на телефоні", lessons: "урок 1", pick: 6,
      items: [
        { t: "learn", text: "Ширина в пікселях — головна причина поломок на телефоні. 900px — «рівно стільки, хоч що там за екран». 100% — «стільки, скільки є місця».", code: ".card {\n  width: 100%;\n}" },
        { t: "quiz", id: "fe7-1-a", q: "Блок має width: 900px. Екран телефона — 360. Що станеться?", options: ["Зʼявиться прокрутка вбік", "Блок сам стиснеться", "Блок зникне", "Текст стане більшим"], a: 0, why: "Блок ширший за екран — браузер додає прокрутку вбік.",
          variants: [
            { q: "Сторінка на телефоні їздить ліворуч-праворуч. Що найчастіше винне?", options: ["Ширина, задана числом у px", "Колір фону", "Шрифт у rem", "Тег <main>"], a: 0, why: "Головна причина майже всіх поломок на телефоні — ширина конкретним числом у пікселях." }
          ] },
        { t: "quiz", id: "fe7-1-b", q: "Як полагодити width: 900px, щоб блок вміщався на будь-якому екрані?", options: ["width: 100%;", "width: 900em;", "width: 360px;", "height: 100%;"], a: 0, why: "100% — стільки, скільки є місця. Блок сам стає вужчим на вузькому екрані.",
          variants: [
            { q: "Картинка ширша за екран телефона. Яка ширина її полагодить?", options: ["width: 100%;", "width: 1200px;", "width: 360em;", "height: 100%;"], a: 0, why: "100% — не ширше за місце, яке є." }
          ] },
        { t: "quiz", id: "fe7-1-c", q: "Яку ширину перевіряємо як телефон?", options: ["360", "768", "1280", "2560"], a: 0, why: "Три контрольні ширини: 360 — телефон, 768 — планшет, 1280 — ноутбук.",
          variants: [
            { q: "Ширина 768 — це який екран?", options: ["Планшет", "Телефон", "Ноутбук", "Годинник"], a: 0, why: "360 — телефон, 768 — планшет, 1280 — ноутбук." },
            { q: "Ширина 1280 — це який екран?", options: ["Ноутбук", "Телефон", "Планшет", "Годинник"], a: 0, why: "360 — телефон, 768 — планшет, 1280 — ноутбук." }
          ] },
        { t: "quiz", id: "fe7-1-d", q: "Як у Chrome увімкнути режим телефона?", options: ["F12, потім Ctrl+Shift+M", "Ctrl+S", "F5", "Ctrl+P"], a: 0, why: "F12 відкриває інструменти розробника, Ctrl+Shift+M — іконку телефона." },
        { t: "quiz", id: "fe7-1-e", q: "Що з цього — типова поломка сторінки на телефоні?", options: ["Дрібний текст, треба збільшувати пальцями", "Сторінка завантажилась", "У сторінки є заголовок", "Меню вгорі"], a: 0, why: "Три типові поломки: прокрутка вбік, дрібний текст, картинка за краєм.",
          variants: [
            { q: "Що з цього — типова поломка сторінки на телефоні?", options: ["Картинка ширша за екран", "Картинка має alt", "Сторінка має footer", "Текст у rem"], a: 0, why: "Три типові поломки: прокрутка вбік, дрібний текст, картинка за краєм." }
          ] },
        { t: "quiz", id: "fe7-1-f", q: "Що браузер робить з коментарем <!-- … --> у HTML?", options: ["Не показує на сторінці", "Показує жирним", "Показує червоним", "Видаляє з файлу"], a: 0, why: "Коментар — запис для себе. Браузер його не показує.",
          variants: [
            { q: "Навіщо писати знайдені поломки в коментар <!-- … -->?", options: ["Щоб не забути, що ламалося", "Щоб сторінка стала швидшою", "Щоб текст став жирним", "Щоб зникла прокрутка"], a: 0, why: "Через тиждень уже не памʼятаєш, що саме ламалося. Коментар браузер не показує." }
          ] },
        { t: "quiz", id: "fe7-1-g", q: "Як у Chrome знайти блок, що вилазить за екран?", options: ["F12 → Elements, навести мишу на рядок коду", "Ctrl+Z", "Перезавантажити ноутбук", "Ctrl+P"], a: 0, why: "Наводиш мишу на рядок у Elements — блок підсвічується, поруч видно його розмір." },
        { t: "bugline", id: "fe7-1-boss", boss: true, q: "Бос! Тапни рядок, через який на телефоні зʼявиться прокрутка вбік.", lines: [".card {", "  width: 900px;", "  border: 3px solid black;", "}"], a: 1, why: "900px не вміщається в 360. Треба width: 100%.",
          variants: [
            { lines: [".photo {", "  border-radius: 8px;", "  width: 1200px;", "}"], a: 2, why: "1200px ширше за екран телефона. Треба width: 100%." }
          ] }
      ]
    },
    {
      id: "fe7-2", title: "Семантичний каркас", lessons: "урок 2", pick: 6,
      items: [
        { t: "learn", text: "Тег каже, ЩО це таке, а не як виглядає. header — шапка, nav — меню, main — головне (рівно один), section — розділ, article — самостійний шматок, aside — збоку, footer — підвал.", code: "<header>…</header>\n<main>…</main>\n<footer>…</footer>" },
        { t: "quiz", id: "fe7-2-a", q: "Блок «Реклама курсів» збоку від тексту. Який тег?", options: ["<aside>", "<main>", "<header>", "<footer>"], a: 0, why: "aside — збоку від головного вмісту.",
          variants: [
            { q: "Рядок «© 2026, школа A+» унизу сторінки. Який тег?", options: ["<footer>", "<header>", "<aside>", "<nav>"], a: 0, why: "footer — підвал: контакти, копірайт." },
            { q: "Блок посилань по сайту: Головна, Каталог, Контакти. Який тег?", options: ["<nav>", "<main>", "<article>", "<footer>"], a: 0, why: "nav — навігація, блок посилань по сайту." }
          ] },
        { t: "quiz", id: "fe7-2-b", q: "Одна картка товару в каталозі. Який тег?", options: ["<article>", "<section>", "<main>", "<nav>"], a: 0, why: "Картка самостійна: її можна надіслати окремо, і вона зрозуміла. Це article.",
          variants: [
            { q: "Розділ «Часті питання» зі своїм заголовком. Який тег?", options: ["<section>", "<article>", "<aside>", "<nav>"], a: 0, why: "section — розділ сторінки зі своїм заголовком." }
          ] },
        { t: "quiz", id: "fe7-2-c", q: "Скільки <main> може бути на сторінці?", options: ["Рівно один", "Скільки завгодно", "Два: вгорі й унизу", "Жодного"], a: 0, why: "main — головний вміст сторінки, і він рівно один.",
          variants: [
            { q: "Кожну секцію обгорнули в <main>. Що не так?", options: ["main має бути рівно один", "Усе правильно", "Треба ще більше main", "main не можна в body"], a: 0, why: "main рівно один, секції — всередині нього." }
          ] },
        { t: "quiz", id: "fe7-2-d", q: "Скільки <h1> на сторінці за нашим правилом?", options: ["Один", "Два", "Один у кожній section", "Скільки треба"], a: 0, why: "h1 — назва всієї сторінки, і вона одна." },
        { t: "quiz", id: "fe7-2-e", q: "Замінили <div class=\"header\"> на <header class=\"header\">. Як змінився вигляд?", options: ["Ніяк", "Текст став жирним", "Блок став ширшим", "Зʼявилась рамка"], a: 0, why: "Семантичні теги не мають власного оформлення. Вигляд задає CSS.",
          variants: [
            { q: "Замінили div на header і прибрали клас. Оформлення поїхало. Чому?", options: ["У CSS правило на .header, а класу немає", "header завжди ламає вигляд", "Треба два header", "Браузер не знає header"], a: 0, why: "Це загублений клас: поверни клас на семантичний тег." }
          ] },
        { t: "quiz", id: "fe7-2-f", q: "Хто з трьох читачів сторінки НЕ бачить її оформлення?", options: ["Програма читання вголос", "Людина", "Учитель", "Дизайнер"], a: 0, why: "Програма для незрячих і пошукова система бачать лише теги." },
        { t: "tagwrap", id: "fe7-2-g", q: "Зроби головний вміст сторінки.", text: "Каталог ігор", tiles: ["<main>", "</main>", "<aside>", "</aside>", "<div>"], a: ["<main>", "</main>"], why: "Головний вміст — пара <main> … </main>.",
          variants: [
            { q: "Зроби з тексту підвал сторінки.", text: "© 2026", tiles: ["<footer>", "</footer>", "<header>", "</header>", "<nav>"], a: ["<footer>", "</footer>"], why: "Підвал — пара <footer> … </footer>." },
            { q: "Зроби з тексту шапку сторінки.", text: "GameStore", tiles: ["<header>", "</header>", "<head>", "</head>", "<footer>"], a: ["<header>", "</header>"], why: "Шапка сторінки — <header>. А <head> — службова частина, її не видно." }
          ] },
        { t: "bugline", id: "fe7-2-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["<header>", "  <p class=\"logo\">Мій блог</p>", "</header>", "<main>", "  <article>Запис 1</div>", "</main>"], a: 4, why: "article закрили як </div>. Треба </article>.",
          variants: [
            { lines: ["<header>", "  <h1>Мій блог</h1>", "</header>", "<main>", "  <h1>Останні записи</h1>", "</main>"], a: 1, why: "Два h1 на сторінці. Назва в шапці — звичайний текст, наприклад <p class=\"logo\">." }
          ] }
      ]
    },
    {
      id: "fe7-3", title: "Одиниці вимірювання", lessons: "урок 3", pick: 6,
      items: [
        { t: "learn", text: "px — ні від чого не залежить. % — від батька. rem — від шрифта сторінки, 1rem = 16px. vw і vh — від ширини й висоти вікна.", code: "main  { width: 80%; }\nh1    { font-size: 2rem; }\n.hero { height: 50vh; }" },
        { t: "quiz", id: "fe7-3-a", q: "У чому задаємо ширину блока, щоб він стискався разом із батьком?", options: ["%", "px", "rem", "vh"], a: 0, why: "Таблиця уроку 3: ширина блока — у %.",
          variants: [
            { q: "У чому задаємо розмір тексту?", options: ["rem", "px", "vh", "%"], a: 0, why: "Текст — у rem, щоб слухався налаштувань браузера." },
            { q: "У чому задаємо висоту обкладинки на пів екрана?", options: ["vh", "rem", "px", "%"], a: 0, why: "vh — відсоток висоти вікна. 50vh — пів екрана." },
            { q: "У чому задаємо тонку рамку?", options: ["px", "rem", "%", "vw"], a: 0, why: "Рамка не має розтягуватись — px." }
          ] },
        { t: "quiz", id: "fe7-3-b", q: "Скільки пікселів у 1.5rem?", options: ["24px", "15px", "16px", "32px"], a: 0, why: "1rem = 16px. 1.5 × 16 = 24.",
          variants: [
            { q: "Скільки пікселів у 2rem?", options: ["32px", "20px", "16px", "2px"], a: 0, why: "1rem = 16px. 2 × 16 = 32." },
            { q: "Треба 24px. Скільки це rem?", options: ["1.5rem", "2.4rem", "24rem", "1rem"], a: 0, why: "Ділимо на 16: 24 / 16 = 1.5rem." }
          ] },
        { t: "quiz", id: "fe7-3-c", q: "width: 50% — половина чого?", options: ["Ширини батька", "Ширини вікна", "Ширини телефона", "Висоти вікна"], a: 0, why: "% рахується від батька — блока, у якому лежить наш.",
          variants: [
            { q: "height: 50vh — половина чого?", options: ["Висоти вікна", "Висоти батька", "Ширини вікна", "Шрифта сторінки"], a: 0, why: "vh — завжди від вікна, вкладеність не має значення." }
          ] },
        { t: "quiz", id: "fe7-3-d", q: "main — 800px. Усередині .card { width: 50%; }. Яка ширина .card?", options: ["400px", "800px", "50px", "200px"], a: 0, why: "50% від батька: 800 / 2 = 400.",
          variants: [
            { q: "main — 600px. Усередині .card { width: 80%; }. Яка ширина .card?", options: ["480px", "600px", "80px", "500px"], a: 0, why: "80% від 600 = 480." }
          ] },
        { t: "quiz", id: "fe7-3-e", q: "Людина збільшила шрифт у налаштуваннях браузера. Що НЕ виросте?", options: ["Текст у px", "Текст у rem", "Заголовок у 2rem", "Абзац у 1rem"], a: 0, why: "px ігнорує налаштування. Тому текст задають у rem." },
        { t: "quiz", id: "fe7-3-f", q: "Блоку дали width: 100vw, і зʼявилась прокрутка вбік. Як полагодити?", options: ["width: 100%;", "width: 100px;", "height: 100vh;", "width: 200vw;"], a: 0, why: "100vw — ширина вікна разом зі смугою прокрутки. Для ширини беремо 100%." },
        { t: "quiz", id: "fe7-3-g", q: "Вкладені блоки .a .b .c, кожен font-size: 1.5rem. Розмір у .c?", options: ["24px", "54px", "36px", "16px"], a: 0, why: "rem рахує від кореня, тому не множиться: усюди 24px." },
        { t: "bugline", id: "fe7-3-boss", boss: true, q: "Бос! Тапни рядок, що НЕ відповідає таблиці «що коли брати».", lines: ["main { width: 80%; }", "h1 { font-size: 32px; }", ".hero { height: 50vh; }", ".card { border-radius: 8px; }"], a: 1, why: "Текст — у rem: 32px = 2rem. px — лише для рамок і заокруглень.",
          variants: [
            { lines: ["main { width: 900px; }", "p { font-size: 1rem; }", ".hero { height: 30vh; }", ".card { border: 1px solid; }"], a: 0, why: "Ширина блока — у %, наприклад width: 80%." }
          ] }
      ]
    },
    {
      id: "fe7-4", title: "Перша сітка", lessons: "урок 4", pick: 6,
      items: [
        { t: "learn", text: "Сітку вмикають батькові: display: grid. Скільки значень у grid-template-columns — стільки колонок. gap — проміжок. fr — частка місця, що лишилось.", code: ".gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}" },
        { t: "quiz", id: "fe7-4-a", q: "Кому пишемо display: grid, щоб картки стали сіткою?", options: ["Батькові — .gallery", "Кожній .card", "Тегу <img>", "Тегу <head>"], a: 0, why: "Сітка розкладає дітей того блока, якому її поставили.",
          variants: [
            { q: "Як називаються колонка й рядок сітки одним словом?", options: ["Доріжка", "Комірка", "Контейнер", "Проміжок"], a: 0, why: "Доріжка (track) — колонка або рядок. gap — проміжок між ними." }
          ] },
        { t: "quiz", id: "fe7-4-b", q: "grid-template-columns: 200px 200px 200px; — скільки колонок?", options: ["3", "200", "1", "6"], a: 0, why: "Скільки значень — стільки колонок.",
          variants: [
            { q: "grid-template-columns: 1fr 1fr 1fr 1fr; — скільки колонок?", options: ["4", "1", "3", "8"], a: 0, why: "Чотири значення — чотири колонки." },
            { q: "grid-template-columns: repeat(5, 1fr); — скільки колонок?", options: ["5", "1", "6", "10"], a: 0, why: "repeat(5, 1fr) — пʼять однакових колонок." }
          ] },
        { t: "quiz", id: "fe7-4-c", q: "4 колонки, 10 карток. Скільки рядків?", options: ["3", "2", "4", "10"], a: 0, why: "4 + 4 + 2 — три рядки, в останньому дві картки.",
          variants: [
            { q: "3 колонки, 7 карток. Скільки рядків?", options: ["3", "2", "7", "1"], a: 0, why: "3 + 3 + 1 — три рядки." },
            { q: "5 колонок, 12 карток. Скільки карток в останньому рядку?", options: ["2", "5", "3", "0"], a: 0, why: "5 + 5 + 2 — в останньому дві." }
          ] },
        { t: "quiz", id: "fe7-4-d", q: "Що означає gap: 30px 10px;?", options: ["30 між рядками, 10 між колонками", "30 між колонками, 10 між рядками", "30 зверху, 10 знизу", "Відступ ззовні сітки"], a: 0, why: "Два значення: спершу рядки, потім колонки." },
        { t: "quiz", id: "fe7-4-e", q: "Як коротше записати 1fr 1fr 1fr 1fr 1fr 1fr?", options: ["repeat(6, 1fr)", "repeat(1fr, 6)", "6fr", "1fr * 6"], a: 0, why: "repeat(скільки, що): repeat(6, 1fr).",
          variants: [
            { q: "Що дасть repeat(2, 1fr 2fr)?", options: ["1fr 2fr 1fr 2fr", "2fr 2fr", "1fr 1fr 2fr 2fr", "3fr"], a: 0, why: "repeat повторює пару: 1fr 2fr 1fr 2fr." }
          ] },
        { t: "quiz", id: "fe7-4-f", q: "Контейнер 900px, 200px 1fr 1fr, gap 20px. Ширина колонки 1fr?", options: ["330px", "350px", "300px", "450px"], a: 0, why: "900 − 200 = 700, мінус два проміжки = 660, ділимо на 2 — 330.",
          variants: [
            { q: "Контейнер 1000px, repeat(4, 1fr), gap 20px. Ширина колонки?", options: ["235px", "250px", "240px", "200px"], a: 0, why: "Три проміжки: 1000 − 60 = 940, ділимо на 4 — 235." },
            { q: "Контейнер 800px, 200px 1fr 1fr, gap 20px. Ширина колонки 1fr?", options: ["280px", "300px", "400px", "260px"], a: 0, why: "800 − 200 − 40 = 560, ділимо на 2 — 280." }
          ] },
        { t: "quiz", id: "fe7-4-g", q: "Колонки 250px 1fr. Вікно звузили. Хто стискається?", options: ["Тільки 1fr", "Тільки 250px", "Обидві", "Жодна"], a: 0, why: "250px стоїть намертво, а 1fr забирає те, що лишилось." },
        { t: "bugline", id: "fe7-4-boss", boss: true, q: "Бос! Картки стоять стовпчиком. Тапни рядок з помилкою.", lines: [".gallery {", "  grid-template-columns: repeat(3, 1fr);", "}", ".card {", "  display: grid;", "}"], a: 4, why: "display: grid стоїть на картці. Сітку вмикають батькові — .gallery.",
          variants: [
            { q: "Бос! Колонки не працюють. Тапни рядок з помилкою.", lines: [".gallery {", "  display: grid;", "  grid-template-columns: repeat(3 1fr);", "  gap: 20px;", "}"], a: 2, why: "Бракує коми: repeat(3, 1fr)." }
          ] }
      ]
    },
    {
      id: "fe7-5", title: "Широка картка й лінії", lessons: "урок 5", pick: 6,
      items: [
        { t: "learn", text: "span — картці: grid-column: span 2 займає дві колонки, grid-row: span 2 — два рядки. Ліній на одну більше, ніж колонок. 1 / -1 — на всю ширину.", code: ".wide  { grid-column: span 2; }\n.title { grid-column: 1 / -1; }" },
        { t: "quiz", id: "fe7-5-a", q: "Як картці зайняти дві колонки?", options: ["grid-column: span 2;", "grid-row: span 2;", "width: 2fr;", "display: span 2;"], a: 0, why: "grid-column — вшир. span 2 — на дві колонки.",
          variants: [
            { q: "Як зробити картку заввишки у два рядки?", options: ["grid-row: span 2;", "grid-column: span 2;", "height: 2fr;", "row: 2;"], a: 0, why: "grid-row — вгору-вниз. span 2 — два рядки." }
          ] },
        { t: "quiz", id: "fe7-5-b", q: "Колонок три. Скільки ліній сітки між колонками разом із крайніми?", options: ["4", "3", "2", "6"], a: 0, why: "Ліній завжди на одну більше, ніж колонок.",
          variants: [
            { q: "Колонок пʼять. Скільки ліній?", options: ["6", "5", "4", "10"], a: 0, why: "Ліній на одну більше: 5 + 1 = 6." }
          ] },
        { t: "quiz", id: "fe7-5-c", q: "Як поставити заголовок на всю ширину, скільки б не було колонок?", options: ["grid-column: 1 / -1;", "grid-column: span 1;", "width: 100vw;", "grid-column: 0 / 3;"], a: 0, why: "Від першої лінії до останньої: 1 / -1.",
          variants: [
            { q: "Яка лінія сітки завжди остання, скільки б не було колонок?", options: ["-1", "0", "1", "100"], a: 0, why: "З кінця — відʼємні номери. Остання лінія — завжди -1." }
          ] },
        { t: "quiz", id: "fe7-5-d", q: "Що означає grid-column: 2 / 4;?", options: ["Від лінії 2 до лінії 4", "Колонки 2 і 4 окремо", "2 колонки по 4", "Відступ 2 і 4"], a: 0, why: "Перше число — звідки, друге — докуди. Між ними скісна риска." },
        { t: "quiz", id: "fe7-5-e", q: "repeat(3, 1fr), 6 карток, картка 2 має span 2. Скільки рядків?", options: ["3", "2", "4", "6"], a: 0, why: "Шість карток займають сім комірок: 1 і 2 · 3 4 5 · 6.",
          variants: [
            { q: "repeat(3, 1fr), 6 карток, картка 1 має span 2. Скільки рядків?", options: ["3", "2", "4", "6"], a: 0, why: "Сім комірок: 1 і 2 · 3 4 5 · 6 — три рядки." }
          ] },
        { t: "quiz", id: "fe7-5-f", q: "Перша картка стоїть на 2 / 4. Що в комірці ліворуч угорі?", options: ["Порожньо", "Картка 2", "Картка 1", "Заголовок"], a: 0, why: "Картки йдуть тільки вперед. Дірку лагодять порядком карток у HTML." },
        { t: "quiz", id: "fe7-5-g", q: "Що робить grid-column: 3; (одне число)?", options: ["Ставить картку в колонку 3", "Розтягує на 3 колонки", "Робить 3 колонки", "Ховає картку"], a: 0, why: "Одне число — «стань у колонку 3», ширина одна." },
        { t: "quiz", id: "fe7-5-h", q: "Як у grid-template-areas задати шапку на дві колонки?", options: ["\"header header\"", "\"header\" 2", "header: 2", "\"header / 2\""], a: 0, why: "Імʼя повторюється — ділянка розтягується на стільки колонок." },
        { t: "bugline", id: "fe7-5-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: [".gallery {", "  display: grid;", "  grid-template-columns: repeat(3, 1fr);", "}", ".wide { grid-column: span: 2; }"], a: 4, why: "Зайва двокрапка: grid-column: span 2;",
          variants: [
            { lines: [".gallery {", "  display: grid;", "  grid-template-columns: repeat(3, 1fr);", "}", ".title { grid-column: 1 - 1; }"], a: 4, why: "Між лініями — скісна риска: 1 / -1." }
          ] }
      ]
    },
    {
      id: "fe7-6", title: "Каталог: полювання на помилки", lessons: "уроки 6–8", pick: 6,
      items: [
        { t: "learn", text: "Помилки в CSS браузер мовчки пропускає. Шукай у F12 → Styles: правило з помилкою закреслене. main по центру — width: 80%; margin: 0 auto;", code: "main {\n  width: 80%;\n  margin: 0 auto;\n}" },
        { t: "quiz", id: "fe7-6-a", q: "Як поставити main по центру сторінки?", options: ["width: 80%; margin: 0 auto;", "text-align: center;", "display: grid;", "position: center;"], a: 0, why: "Ширина менша за вікно і margin: 0 auto — однаково зліва й справа.",
          variants: [
            { q: "У main є width: 80%; але він притиснутий ліворуч. Чого бракує?", options: ["margin: 0 auto;", "display: grid;", "gap: 1rem;", "top: 0;"], a: 0, why: "margin: 0 auto ставить блок по центру." }
          ] },
        { t: "bugline", id: "fe7-6-b", q: "Сітки немає. Тапни рядок з помилкою.", lines: [".gallery {", "  display: grid;", "  grid-template-colums: 1fr 1fr;", "  gap: 1rem;", "}"], a: 2, why: "colums — бракує n: columns.",
          variants: [
            { lines: [".gallery {", "  display: grid;", "  grid-template-columns: 1fr 1fr;", "  gap: 1 rem;", "}"], a: 3, why: "Пробіл між числом і одиницею: 1rem." },
            { lines: [".galery {", "  display: grid;", "  grid-template-columns: 1fr 1fr;", "  gap: 1rem;", "}"], a: 0, why: "В HTML клас gallery, а тут одна l — .galery." }
          ] },
        { t: "bugline", id: "fe7-6-c", q: "Сторінка розсипалась. Тапни рядок з помилкою.", lines: [".gallery {", "  display: grid;", "  grid-template-columns: repeat(3, 1fr)", "  gap: 1rem;", "}"], a: 2, why: "Немає ; у кінці — зламались і колонки, і gap.",
          variants: [
            { lines: ["main {", "  width: 80;", "  margin: 0 auto;", "}"], a: 1, why: "Немає одиниці: 80%." },
            { lines: [".card img {", "  width: 100 %;", "}"], a: 1, why: "Зайвий пробіл: 100%." }
          ] },
        { t: "quiz", id: "fe7-6-d", q: "<link href=\"styles.css\">, а файл зветься style.css. Що буде?", options: ["CSS не підключиться зовсім", "Підключиться, бо майже однаково", "Сторінка не відкриється", "Зникне HTML"], a: 0, why: "Файлу styles.css немає — браузер не знайде стилі." },
        { t: "quiz", id: "fe7-6-e", q: "Меню — у ряд, картки — сіткою. Що для чого?", options: ["Меню — Flexbox, картки — Grid", "Меню — Grid, картки — Flexbox", "Усе — тільки Grid", "Усе — тільки margin"], a: 0, why: "Grid не скасовує Flexbox: меню на Flexbox, картки на Grid." },
        { t: "quiz", id: "fe7-6-f", q: "Де перевірити, що каркас правильний?", options: ["F12 → Elements, згорнути body", "Ctrl+P", "У Блокноті", "F5 десять разів"], a: 0, why: "Згорнув body — видно header · main · footer." },
        { t: "quiz", id: "fe7-6-g", q: "Як дізнатись, що display: grid стоїть на правильному блоці?", options: ["F12 → Elements: біля блока є кнопка grid", "Колір став синім", "Зʼявилась прокрутка", "Сторінка стала довшою"], a: 0, why: "Кнопки grid немає — значить сітка не на тому блоці або не спрацювала." },
        { t: "bugline", id: "fe7-6-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["<main>", "  <h1>Книжки</h1>", "  <h1>Фентезі</h1>", "  <div class=\"gallery\">…</div>", "</main>"], a: 2, why: "Другий h1. Розділ «Фентезі» — це h2 у section.",
          variants: [
            { lines: [".gallery {", "  display: grid;", "  grid-template-columns: repeat(3, 1fr);", "}", "main { width: 80; margin: 0 auto; }"], a: 4, why: "Немає одиниці: width: 80%." }
          ] }
      ]
    },
    {
      id: "fe7-7", title: "Бейдж і липка шапка", lessons: "урок 9", pick: 6,
      items: [
        { t: "learn", text: "Картка — якір: position: relative. Бейдж — position: absolute, і top, right ставлять його в кут. z-index — хто зверху. sticky + top: 0 — шапка прилипає.", code: ".card  { position: relative; }\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}" },
        { t: "quiz", id: "fe7-7-a", q: "Що треба картці, щоб бейдж став у її кутку?", options: ["position: relative;", "position: static;", "display: grid;", "z-index: 0;"], a: 0, why: "absolute рахує від найближчого relative. Картка — якір." },
        { t: "quiz", id: "fe7-7-b", q: "У .card стерли relative. Куди втече бейдж з top: 0; right: 0;?", options: ["У кут сторінки", "У кут картки", "Нікуди", "Під картку"], a: 0, why: "Якоря немає — бейдж шукає далі й стає в кут сторінки." },
        { t: "quiz", id: "fe7-7-c", q: "Бейдж: top: 0; left: 0;. Де він?", options: ["Лівий верхній кут", "Правий верхній кут", "Лівий нижній кут", "Посередині"], a: 0, why: "top: 0 — впритул згори, left: 0 — впритул зліва.",
          variants: [
            { q: "Бейдж: bottom: 10px; right: 10px;. Де він?", options: ["Правий нижній кут", "Лівий верхній кут", "Правий верхній кут", "Лівий нижній кут"], a: 0, why: "bottom — від низу, right — від правого краю." },
            { q: "Бейдж: top: -10px; right: -10px;. Де він?", options: ["Вилазить за правий верхній кут", "Усередині лівого кута", "Унизу картки", "Посередині"], a: 0, why: "Мінус — за край картки на 10px." }
          ] },
        { t: "quiz", id: "fe7-7-d", q: "z-index: 1, z-index: 3 і z-index: 2. Хто зверху?", options: ["z-index: 3", "z-index: 1", "z-index: 2", "Той, хто вище в HTML"], a: 0, why: "Більше число — вище.",
          variants: [
            { q: "У двох бейджів z-index однаковий. Хто зверху?", options: ["Той, хто нижче в HTML", "Той, хто вище в HTML", "Обидва зникнуть", "Менший бейдж"], a: 0, why: "z-index однаковий або немає — вище той, хто нижче в HTML." }
          ] },
        { t: "quiz", id: "fe7-7-e", q: "Яке значення position прибиває кнопку до вікна, щоб вона не гортилася?", options: ["fixed", "static", "relative", "sticky"], a: 0, why: "fixed — прибитий до вікна. Кнопка «вгору», чат у кутку.",
          variants: [
            { q: "Яке значення position дає шапку, що їде, а потім прилипає?", options: ["sticky", "fixed", "absolute", "static"], a: 0, why: "sticky — їде зі сторінкою, а потім прилипає." },
            { q: "Яке значення position у всіх тегів за замовчуванням?", options: ["static", "relative", "absolute", "fixed"], a: 0, why: "static — стоїть на своєму місці, як завжди." }
          ] },
        { t: "quiz", id: "fe7-7-f", q: "Блоку дали relative і top: 20px. Сусіди посунуться на його місце?", options: ["Ні, місце лишається порожнім", "Так, займуть місце", "Сусіди зникнуть", "Сусіди піднімуться"], a: 0, why: "relative зсуває блок від свого місця, а місце лишається за ним." },
        { t: "quiz", id: "fe7-7-g", q: "Липка шапка не прилипає. Чого бракує?", options: ["top: 0;", "color: red;", "display: grid;", "width: 100%;"], a: 0, why: "Без top sticky не знає, де прилипнути." },
        { t: "bugline", id: "fe7-7-boss", boss: true, q: "Бос! Бейджі не там. Тапни рядок з помилкою.", lines: [".card { position: relativ; }", ".badge {", "  position: absolute;", "  top: 8px;", "}"], a: 0, why: "relative — з e в кінці. Без якоря бейдж тікає.",
          variants: [
            { lines: [".card { position: relative; }", ".badge {", "  position: absolute;", "  z-index: 5px;", "}"], a: 3, why: "z-index — просто число, без px: z-index: 5;" },
            { lines: [".card { position: relative; }", ".badge {", "  position: absolute;", "  top: 8;", "}"], a: 3, why: "Немає одиниці: top: 8px;" }
          ] }
      ]
    },
    {
      id: "fe7-8", title: "Плавність і рух", lessons: "урок 10", pick: 6,
      items: [
        { t: "learn", text: ":hover — коли миша над елементом. transition пишемо у звичайне правило — тоді плавно туди й назад. transform: scale, rotate, translate — і сусіди не рухаються.", code: ".card { transition: transform 0.3s; }\n.card:hover {\n  transform: translateY(-6px) scale(1.05);\n}" },
        { t: "quiz", id: "fe7-8-a", q: "Як записати «картка, коли миша над нею»?", options: [".card:hover", ".card :hover", ".card.hover", "hover.card"], a: 0, why: ".card:hover — разом, без пробілу.",
          variants: [
            { q: "Як записати «поле, у яке клацнули»?", options: ["input:focus", "input:hover", "input:active", "input focus"], a: 0, why: ":focus — елемент вибрано: клік у поле або Tab." }
          ] },
        { t: "quiz", id: "fe7-8-b", q: "Куди писати transition, щоб було плавно і туди, і назад?", options: ["У звичайне правило .btn", "Тільки в .btn:hover", "У <head>", "У HTML"], a: 0, why: "Якщо тільки в :hover — назад буде різко." },
        { t: "quiz", id: "fe7-8-c", q: "transition: background-color 0.3; — що буде?", options: ["Різко: без s рядок пропущено", "Плавно за 0.3 с", "Дуже повільно", "Кнопка зникне"], a: 0, why: "Без одиниці s браузер не розуміє рядок і пропускає його.",
          variants: [
            { q: "transition: color 0.3s; а в :hover міняється фон. Як зміниться фон?", options: ["Різко", "Плавно", "Ніяк", "Двічі"], a: 0, why: "Плавним зроблено лише color, фон міняється різко." },
            { q: "transition: background-color 3s; — що побачимо?", options: ["Плавно, але дуже повільно", "Різко", "Миттєво", "Нічого"], a: 0, why: "3 секунди — плавно, але довго." }
          ] },
        { t: "quiz", id: "fe7-8-d", q: "transform: scale(0.9); — що станеться?", options: ["Зменшиться до 90 %", "Збільшиться в 9 разів", "Повернеться", "Посунеться вниз"], a: 0, why: "scale менше за 1 — зменшує.",
          variants: [
            { q: "transform: translateY(10px); — куди?", options: ["Вниз на 10px", "Вгору на 10px", "Вправо на 10px", "Вліво на 10px"], a: 0, why: "translateY додатне — вниз. Вгору — мінус." },
            { q: "transform: rotate(-90deg); — що станеться?", options: ["Ляже на бік проти годинникової", "Перевернеться догори дриґом", "Зменшиться", "Посунеться вправо"], a: 0, why: "Мінус — поворот проти годинникової стрілки." }
          ] },
        { t: "quiz", id: "fe7-8-e", q: "Картка збільшилась через transform. Сусіди посунуться?", options: ["Ні, картка лягає поверх", "Так, розсунуться", "Зникнуть", "Зменшаться"], a: 0, why: "transform не рухає сусідів — як relative." },
        { t: "quiz", id: "fe7-8-f", q: "Як підняти і збільшити картку одночасно?", options: ["transform: translateY(-6px) scale(1.05);", "Два окремі рядки transform", "transform: up scale;", "move: -6px;"], a: 0, why: "Дві функції — в одному transform через пробіл. Другий рядок стер би перший." },
        { t: "quiz", id: "fe7-8-g", q: "Який стан, коли кнопку натиснули й тримають?", options: [":active", ":hover", ":focus", ":hold"], a: 0, why: ":hover — миша над, :active — тримають, :focus — вибрано." },
        { t: "bugline", id: "fe7-8-boss", boss: true, q: "Бос! Картка не оживає. Тапни рядок з помилкою.", lines: [".card {", "  transition: transform 0.3s;", "}", ".card: hover {", "  transform: scale(1.05);", "}"], a: 3, why: "Пробіл після двокрапки. Треба .card:hover — разом.",
          variants: [
            { lines: [".card {", "  transition: transform 0.3s;", "}", ".btn:hover {", "  transform: translateY(-4 px);", "}"], a: 4, why: "Пробіл у -4 px. Треба -4px." },
            { lines: [".card:hover {", "  transform: scale(1.05);", "  transform: translateY(-6px);", "}"], a: 2, why: "Другий transform стирає перший. Обидві функції — в один рядок." }
          ] }
      ]
    },
    {
      id: "fe7-9", title: "Великий ремонт", lessons: "уроки 1–10", pick: 7,
      items: [
        { t: "learn", text: "Змішане повторення: каркас, одиниці, сітка, бейджі й рух. Не поспішай — читай код до кінця." },
        { t: "quiz", id: "fe7-9-a", q: "Картка товару — який тег, а розділ із заголовком — який?", options: ["article і section", "section і article", "div і main", "aside і footer"], a: 0, why: "Картка самостійна — article. Розділ сторінки — section." },
        { t: "quiz", id: "fe7-9-b", q: "height: 30vh — це скільки?", options: ["30 % висоти вікна", "30 пікселів", "30 % ширини батька", "30 рядків"], a: 0, why: "vh — висота вікна. Вікно нижче — блок нижчий." },
        { t: "quiz", id: "fe7-9-c", q: "Що з цього — правило для батька карток, а не для картки?", options: ["display: grid;", "grid-column: span 2;", "grid-row: span 2;", "position: absolute;"], a: 0, why: "display: grid — батькові. span — самій картці.",
          variants: [
            { q: "Що з цього — правило для самої картки?", options: ["grid-column: span 2;", "display: grid;", "grid-template-columns: repeat(3, 1fr);", "gap: 1rem;"], a: 0, why: "span — правило про одну дитину. Решта — батькові." }
          ] },
        { t: "quiz", id: "fe7-9-d", q: "Шапка прилипла, але збільшена картка лягає поверх неї. Чого бракує шапці?", options: ["z-index: 10;", "top: 0;", "display: grid;", "width: 80%;"], a: 0, why: "Без z-index картка може лягти поверх шапки." },
        { t: "quiz", id: "fe7-9-e", q: "Контейнер 900px, repeat(3, 1fr), без gap. Ширина колонки?", options: ["300px", "330px", "900px", "3px"], a: 0, why: "Проміжків немає: 900 / 3 = 300." },
        { t: "quiz", id: "fe7-9-f", q: "Сторінка вилазить за екран телефона. Що перевірити першим?", options: ["Ширину блоків у px", "Колір тексту", "Кількість h2", "Назву файлу"], a: 0, why: "Головна причина поломок на телефоні — ширина, задана числом у px." },
        { t: "quiz", id: "fe7-9-g", q: ".card:hover { transform: scale(1.05); } — плавно не виходить. Що додати в .card?", options: ["transition: transform 0.3s;", "position: relative;", "display: grid;", "z-index: 2;"], a: 0, why: "Без transition зміна стається різко.",
          variants: [
            { q: "Бейдж «-30%» тікає в кут сторінки. Що додати в .card?", options: ["position: relative;", "transition: all 0.3s;", "display: grid;", "gap: 1rem;"], a: 0, why: "Картка має бути якорем для absolute." }
          ] },
        { t: "quiz", id: "fe7-9-h", q: "Скільки пікселів у 0.875rem?", options: ["14px", "8px", "16px", "12px"], a: 0, why: "0.875 × 16 = 14." },
        { t: "bugline", id: "fe7-9-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["header { position: sticky; top: 0; }", ".gallery { display: grid; gap: 1rem; }", ".title { grid-column: 1 / -1; }", ".card:hover { transform: scale(1.05) }", "main { width: 80%; margin: 0 auto; }", ".badge { position: absolute; top: 8 px; }"], a: 5, why: "Пробіл у 8 px. Треба top: 8px;",
          variants: [
            { lines: ["header { position: sticky; top: 0; }", ".gallery { grid-template-columns: repeat(3, 1fr); }", ".card { position: relative; }", "h1 { font-size: 2rem; }", ".btn { transition: color 0.3; }"], a: 4, why: "Без s рядок пропущено: transition: color 0.3s;" },
            { lines: [".gallery { display: grid; }", ".wide { grid-column: span 2; }", ".card { position: relative; }", "p { font-size: 1rem; }", ".badge { z-index: 2px; }"], a: 4, why: "z-index — просто число, без px." }
          ] }
      ]
    }
  ]
};
