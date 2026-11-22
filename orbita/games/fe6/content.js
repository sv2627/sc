// 6 клас · Front-end (A+) · I семестр — уроки 1–6 (HTML) і 9–11 (CSS, класи); 7–8 — практика/міні-проєкт.
// Пробна версія: відповіді лежать тут відкрито. У робочій версії їх замінять хеші (див. дизайн §6).
//
// Типи завдань:
//   learn    — коротке пояснення, кнопка «Зрозуміло»
//   quiz     — обрати варіант; a = індекс правильного
//   bugline  — тапнути рядок з помилкою; a = індекс рядка
//   tagwrap  — обгорнути текст тегами; a = [відкривний, закривний]
(window.GAMES = window.GAMES || {}).fe6 = {
  id: "fe6", classes: ["6-aik"],
  course: "Front-end · 6 клас", short: "HTML", color: "sky",
  sector: "Сектор 1 · Корпус і обшивка",
  about: "Корпус станції — це HTML, обшивка — CSS. Полагодь їх, і станція знову полетить.",
  levels: [
    {
      id: "fe6-1", title: "Скелет сторінки", lessons: "уроки 1–2",
      items: [
        { t: "learn", text: "Тег — це слово в кутових дужках. Більшість тегів мають пару: <p> відкриває, </p> закриває.", code: "<p>Привіт!</p>" },
        { t: "quiz", id: "fe6-1-a", q: "Який тег робить найбільший заголовок?", options: ["<h1>", "<h6>", "<p>", "<head>"], a: 0, why: "h1 — заголовок першого рівня, найбільший. h6 — найменший." , variants: [{ q: "Який тег робить найменший заголовок?", options: ["<h1>", "<h6>", "<p>", "<head>"], a: 1, why: "Заголовки від h1 (найбільший) до h6 (найменший)." }] },
        { t: "quiz", id: "fe6-1-b", q: "Куди пишемо те, що видно на сторінці?", options: ["<head>", "<body>", "<title>", "<meta>"], a: 1, why: "Усе, що бачить людина, — всередині <body>. У <head> — службове." , variants: [{ q: "Куди пишемо службове — наприклад, title?", options: ["<head>", "<body>", "<p>", "<h1>"], a: 0, why: "Службове — у <head>, видиме — у <body>." }] },
        { t: "bugline", id: "fe6-1-c", q: "Тапни рядок з помилкою.", lines: ["<h1>Мій клас</h1>", "<p>Нас 10 учнів<p>", "<p>Ми вчимо HTML</p>"], a: 1, why: "Закривний тег пишемо зі скісною рискою: </p>." , variants: [{ lines: ["<h1>Мій клас</h1>", "<p>Ми вчимо HTML</p>", "<h2>Розклад<h2>"], a: 2, why: "Закривний тег — зі скісною рискою: </h2>." }] },
        { t: "tagwrap", id: "fe6-1-d", q: "Зроби з тексту абзац.", text: "Я люблю космос", tiles: ["<p>", "</p>", "<h1>", "</h1>", "<p/>"], a: ["<p>", "</p>"], why: "Абзац — це пара <p> … </p>." , variants: [{ _tiles: undefined, q: "Зроби з тексту найбільший заголовок.", text: "Я люблю космос", tiles: ["<h1>", "</h1>", "<h6>", "</h6>", "<title>"], a: ["<h1>", "</h1>"], why: "Найбільший заголовок — <h1> … </h1>." }] },
        { t: "quiz", id: "fe6-1-e", q: "Що показує тег <title>?", options: ["Назву на вкладці браузера", "Найбільший заголовок", "Підпис під картинкою", "Абзац тексту"], a: 0, why: "<title> живе в <head> і пише назву на вкладці." , variants: [{ q: "Де видно те, що написано в <title>?", options: ["На вкладці браузера", "Найбільшими літерами на сторінці", "Під картинкою", "Ніде"], a: 0, why: "<title> — назва на вкладці." }] },
        { t: "bugline", id: "fe6-1-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["<html>", "<body>", "<h1>Про мене</h2>", "<p>Мені 11 років</p>", "</body>"], a: 2, why: "Відкрили h1 — закривати теж треба h1: </h1>." }
      ]
    },
    {
      id: "fe6-2", title: "Текст і списки", lessons: "уроки 3–4",
      items: [
        { t: "learn", text: "<strong> робить текст жирним і важливим, <em> — похилим. <ul> — список з крапками, <ol> — з номерами. Кожен пункт — <li>.", code: "<ul>\n  <li>Земля</li>\n  <li>Марс</li>\n</ul>" },
        { t: "quiz", id: "fe6-2-a", q: "Який тег робить текст жирним і важливим?", options: ["<em>", "<strong>", "<br>", "<hr>"], a: 1, why: "<strong> — жирний і важливий. <em> — похилий." , variants: [{ q: "Який тег робить текст похилим — наголос голосом?", options: ["<strong>", "<em>", "<br>", "<hr>"], a: 1, why: "<em> — наголос, похилий текст." }] },
        { t: "quiz", id: "fe6-2-b", q: "Потрібен список з номерами 1, 2, 3. Який тег?", options: ["<ul>", "<li>", "<ol>", "<dl>"], a: 2, why: "ol — ordered list, нумерований. ul — з крапками." , variants: [{ q: "Потрібен список з крапками. Який тег?", options: ["<ol>", "<ul>", "<li>", "<br>"], a: 1, why: "ul — unordered list, з крапками. ol — з номерами." }] },
        { t: "tagwrap", id: "fe6-2-c", q: "Зроби пункт списку.", text: "Сатурн", tiles: ["<ul>", "</ul>", "<li>", "</li>", "<ol>"], a: ["<li>", "</li>"], why: "Кожен пункт списку — у парі <li> … </li>." , variants: [{ _tiles: undefined, q: "Зроби з тексту пункт списку.", text: "Юпітер", a: ["<li>", "</li>"] }] },
        { t: "quiz", id: "fe6-2-d", q: "Який тег переносить рядок і не має пари?", options: ["<br>", "<p>", "<em>", "<li>"], a: 0, why: "<br> — перенос рядка. Закривного тегу в нього немає." , variants: [{ q: "Який тег малює риску через сторінку і не має пари?", options: ["<hr>", "<br>", "<em>", "<ul>"], a: 0, why: "<hr> — горизонтальна риска, закривати не треба." }] },
        { t: "bugline", id: "fe6-2-e", q: "Тапни рядок з помилкою.", lines: ["<ol>", "  <li>Меркурій</li>", "  <il>Венера</il>", "</ol>"], a: 2, why: "Тег пункту — li, а не il." , variants: [{ lines: ["<ul>", "  <li>Земля</li>", "  <li>Марс</li>", "<ul>"], a: 3, why: "Список закриваємо так: </ul>." }] },
        { t: "tagwrap", id: "fe6-2-boss", boss: true, q: "Бос! Зроби слово похилим.", text: "обережно", tiles: ["<strong>", "</strong>", "<em>", "</em>", "<i/>"], a: ["<em>", "</em>"], why: "Похилий текст — <em> … </em>." }
      ]
    },
    {
      id: "fe6-3", title: "Картинки й посилання", lessons: "уроки 5–6",
      items: [
        { t: "learn", text: "Картинка: <img src=\"файл\" alt=\"опис\">. src — звідки взяти, alt — що на ній. Посилання: <a href=\"адреса\">текст</a>.", code: "<img src=\"mars.png\" alt=\"Марс\">\n<a href=\"about.html\">Про мене</a>" },
        { t: "quiz", id: "fe6-3-a", q: "Який атрибут каже, ЗВІДКИ взяти картинку?", options: ["alt", "src", "href", "title"], a: 1, why: "src — source, джерело файлу." , variants: [{ q: "Який атрибут — опис картинки словами?", options: ["src", "alt", "href", "width"], a: 1, why: "alt — опис, якщо картинка не завантажилась." }] },
        { t: "quiz", id: "fe6-3-b", q: "Навіщо картинці alt?", options: ["Опис, якщо картинка не завантажилась", "Розмір картинки", "Колір рамки", "Адреса посилання"], a: 0, why: "alt — текст замість картинки. Його читає і програма для незрячих." , variants: [{ q: "Картинка не завантажилась. Що побачить людина?", options: ["Текст з alt", "Текст з src", "Червоний хрестик і нічого більше", "Посилання"], a: 0, why: "Замість картинки браузер показує текст з alt." }] },
        { t: "quiz", id: "fe6-3-c", q: "Який атрибут посилання містить адресу?", options: ["src", "alt", "href", "link"], a: 2, why: "<a href=\"…\"> — у href пишемо, куди веде посилання." , variants: [{ q: "Який тег робить посилання?", options: ["<a>", "<img>", "<link>", "<li>"], a: 0, why: "Посилання — <a href=\"…\">." }] },
        { t: "bugline", id: "fe6-3-d", q: "Тапни рядок з помилкою.", lines: ["<img src=\"cat.png\" alt=\"Кіт\">", "<a href=\"page2.html\">Далі</a>", "<img scr=\"dog.png\" alt=\"Пес\">"], a: 2, why: "Атрибут пишеться src, а не scr." , variants: [{ lines: ["<a href=\"page2.html\">Далі</a>", "<img src=\"cat.png\" alt=\"Кіт\">", "<a hreff=\"index.html\">Назад</a>"], a: 2, why: "Атрибут посилання — href, з однією f." }] },
        { t: "tagwrap", id: "fe6-3-e", q: "Зроби з тексту посилання.", text: "Друга сторінка", tiles: ["<a href=\"page2.html\">", "</a>", "<img src=\"page2.html\">", "</img>", "<p>"], a: ["<a href=\"page2.html\">", "</a>"], why: "Посилання — пара <a href=\"…\"> … </a>." , variants: [{ _tiles: undefined, q: "Зроби посилання на about.html.", text: "Про мене", tiles: ["<a href=\"about.html\">", "</a>", "<a src=\"about.html\">", "<p>", "</p>"], a: ["<a href=\"about.html\">", "</a>"], why: "Посилання — пара <a href=\"…\"> … </a>." }] },
        { t: "bugline", id: "fe6-3-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["<h1>Мій сайт</h1>", "<img src=\"me.png\" alt=\"Я\">", "<a href=\"hobby.html\">Хобі<a>", "<p>Дякую!</p>"], a: 2, why: "Посилання закриваємо так: </a>." }
      ]
    },
    {
      id: "fe6-4", title: "CSS: колір і шрифти", lessons: "уроки 9–10",
      items: [
        { t: "learn", text: "HTML каже, ЩО на сторінці. CSS — ЯК вона виглядає. Правило: селектор { властивість: значення; }", code: "p {\n  color: navy;\n  font-size: 18px;\n}" },
        { t: "quiz", id: "fe6-4-a", q: "Як підключити файл style.css до сторінки?", options: ["<link> у <head>", "<a> у <body>", "<img> у <body>", "<css> у кінці файлу"], a: 0, why: "<link rel=\"stylesheet\" href=\"style.css\"> ставимо в <head>." , variants: [{ q: "Де стоїть тег <link>, що підключає style.css?", options: ["У <head>", "У <body>", "Після </html>", "У <p>"], a: 0, why: "<link> — службовий, у <head>." }] },
        { t: "quiz", id: "fe6-4-b", q: "Яка властивість фарбує літери?", options: ["color", "background-color", "font-color", "text-color"], a: 0, why: "color — колір літер. background-color — колір фону." , variants: [{ q: "Яка властивість фарбує фон?", options: ["color", "background-color", "font-color", "fill"], a: 1, why: "background-color — колір фону. color — колір літер." }] },
        { t: "bugline", id: "fe6-4-c", q: "Тапни рядок з помилкою.", lines: ["h1 {", "  color = darkred;", "  background-color: lightyellow;", "}"], a: 1, why: "Між властивістю і значенням — двокрапка: color: darkred;" , variants: [{ lines: ["p {", "  color: navy", "  background-color: lightyellow;", "}"], a: 1, why: "Після значення — крапка з комою: color: navy;" }] },
        { t: "bugline", id: "fe6-4-d", q: "Тапни рядок з помилкою.", lines: ["p {", "  font-family: Verdana, sans-serif;", "  font-size: 18 px;", "  text-align: center;", "}"], a: 2, why: "Число і px пишемо разом: 18px." , variants: [{ lines: ["h1 {", "  font-size: 48px;", "  color: dark blue;", "}"], a: 2, why: "Назви кольорів пишемо разом: darkblue." }] },
        { t: "quiz", id: "fe6-4-e", q: "Як вирівняти текст по центру?", options: ["text-align: center;", "text-align: middle;", "align: center;", "font-align: center;"], a: 0, why: "Слова middle CSS не знає. Правильно — text-align: center;" , variants: [{ q: "Як вирівняти текст праворуч?", options: ["text-align: right;", "text-align: rigth;", "align: right;", "font-align: right;"], a: 0, why: "text-align: right; — праворуч." }] },
        { t: "quiz", id: "fe6-4-f", q: "body { color: navy; }  p { color: red; }\nЯкого кольору буде <h1>?", options: ["navy", "red", "чорний", "його не буде видно"], a: 0, why: "Для h1 правила немає — він бере колір від body." },
        { t: "bugline", id: "fe6-4-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["body {", "  font-family: Georgia, serif;", "  color: navy;", "  line-height: 1,5;", "}"], a: 3, why: "Дробове число пишемо через крапку: 1.5" }
      ]
    },
    {
      id: "fe6-5", title: "Класи і фінал", lessons: "урок 11 + усе",
      items: [
        { t: "learn", text: "Клас — як наліпка на зошиті. У HTML: class=\"price\". У CSS: .price { … }. Крапку пишемо тільки в CSS.", code: "<p class=\"price\">450 грн</p>\n\n.price {\n  color: red;\n}" },
        { t: "quiz", id: "fe6-5-a", q: "Як у CSS вибрати елементи з класом price?", options: [".price", "price", "#price", "class=price"], a: 0, why: "Клас у CSS починається з крапки: .price" , variants: [{ q: "Як у CSS вибрати елементи з класом sale?", options: ["sale", ".sale", "#sale", "class=sale"], a: 1, why: "Клас у CSS починається з крапки: .sale" }] },
        { t: "bugline", id: "fe6-5-b", q: "Тапни рядок з помилкою.", lines: ["<p class=\"price\">450 грн</p>", "<p class=\".sale\">Знижка!</p>", "<p>Шахи</p>"], a: 1, why: "У HTML крапку не пишемо: class=\"sale\"." , variants: [{ lines: ["<p class=\"price\">450 грн</p>", "<p class=\"sale\">Знижка!</p>", "<p class=\".hit\">Хіт</p>"], a: 2, why: "У HTML крапку не пишемо: class=\"hit\"." }] },
        { t: "quiz", id: "fe6-5-c", q: "p { color: brown; }  .price { color: red; }\nЯкого кольору <p class=\"price\">?", options: ["red", "brown", "чорний", "наполовину red, наполовину brown"], a: 0, why: "Клас сильніший за тег — перемагає red." , variants: [{ q: "p { color: navy; }  .sale { color: green; }\nЯкого кольору <p class=\"sale\">?", options: ["green", "navy", "чорний", "наполовину"], a: 0, why: "Клас сильніший за тег — перемагає green." }] },
        { t: "quiz", id: "fe6-5-d", q: "Як дати абзацу два класи: price і sale?", options: ["class=\"price sale\"", "class=\"price, sale\"", "class=\"price\" class=\"sale\"", "class=\"price.sale\""], a: 0, why: "Два класи — в одних лапках через пробіл." , variants: [{ q: "Як дати абзацу два класи: card і hit?", options: ["class=\"card hit\"", "class=\"card, hit\"", "class=\"card.hit\"", "class=\"card\" class=\"hit\""], a: 0, why: "Два класи — в одних лапках через пробіл." }] },
        { t: "tagwrap", id: "fe6-5-e", q: "Зроби абзац з класом price.", text: "250 грн", tiles: ["<p class=\"price\">", "</p>", "<p class=\".price\">", "<price>", "</price>"], a: ["<p class=\"price\">", "</p>"], why: "class=\"price\" без крапки, закриваємо </p>." },
        { t: "quiz", id: "fe6-5-f", q: "Що з цього — НЕ тег HTML?", options: ["<li>", "<hr>", "<em>", "<big-text>"], a: 3, why: "Тегу <big-text> немає. Заголовки — h1…h6." },
        { t: "bugline", id: "fe6-5-boss", boss: true, q: "Фінальний бос! Тапни рядок з помилкою.", lines: ["h1 {", "  font-family: \"Times New Roman\";", "}", "price {", "  color: red;", "}"], a: 3, why: "Для класу потрібна крапка: .price {" }
      ]
    },
    {
      id: "fe6-6", title: "Майстерня помилок", lessons: "уроки 2–3",
      items: [
        { t: "learn", text: "Хто відкрився останнім — закривається першим. Коментар <!-- … --> браузер не показує.", code: "<p>Я <strong>дуже</strong> радий</p>\n<!-- це видно лише в коді -->" },
        { t: "bugline", id: "fe6-6-a", q: "Тапни рядок з помилкою.", lines: ["<h1>Мій фільм</h1>", "<p>Рік: <strong>2019</p></strong>", "<p>Жанр: комедія</p>"], a: 1, why: "Strong відкрився останнім — закриваємо його першим: </strong></p>.",
          variants: [{ lines: ["<p>Я <em>справді</em> радий</p>", "<p><strong>Увага!</p></strong>", "<hr>"], a: 1 }, { lines: ["<h2>Про мене</h2>", "<p>Мені <em>11</p></em>", "<p>Я люблю шахи</p>"], a: 1, why: "Em відкрився останнім — закриваємо першим: </em></p>." }] },
        { t: "quiz", id: "fe6-6-b", q: "Що покаже браузер?\n<!-- секрет -->\n<p>Привіт</p>", options: ["Лише «Привіт»", "«секрет» і «Привіт»", "Нічого", "Лише «секрет»"], a: 0, why: "Коментар — записка для себе, на сторінці його не видно.",
          variants: [{ q: "Як написати коментар у HTML?", options: ["<!-- примітка -->", "// примітка", "<comment>примітка</comment>", "(примітка)"], a: 0, why: "У HTML коментар — <!-- … -->." }] },
        { t: "quiz", id: "fe6-6-c", q: "У коді посеред абзацу натиснули Enter. Що на сторінці?", options: ["Текст лишиться в одному рядку", "Почнеться новий рядок", "Почнеться новий абзац", "Сторінка зламається"], a: 0, why: "Перенос у коді браузер вважає пробілом. Новий рядок — <br>.",
          variants: [{ q: "Між двома темами потрібна риска через сторінку. Який тег?", options: ["<hr>", "<br>", "<line>", "<em>"], a: 0, why: "<hr> — горизонтальна риска, зміна теми." }] },
        { t: "tagwrap", id: "fe6-6-d", q: "Зроби час важливим.", text: "13:25", tiles: ["<strong>", "</strong>", "<em>", "</em>", "<b/>"], a: ["<strong>", "</strong>"], why: "Важливе — <strong> … </strong>.",
          variants: [{ _tiles: undefined, q: "Наголоси слово голосом.", text: "справді", a: ["<em>", "</em>"], why: "Наголос — <em> … </em>, текст стає похилим." }] },
        { t: "quiz", id: "fe6-6-e", q: "Який з цих тегів не має пари?", options: ["<br>", "<p>", "<strong>", "<li>"], a: 0, why: "<br> — перенос рядка, закривати нічого.",
          variants: [{ options: ["<hr>", "<em>", "<h2>", "<ol>"], a: 0, why: "<hr> не закривають — як і <br>." }] },
        { t: "bugline", id: "fe6-6-f", q: "Тапни рядок з помилкою.", lines: ["<!DOCTYPE html>", "<html>", "<head>", "<title>Мій сайт<title>", "</head>"], a: 3, why: "Закривний тег — зі скісною рискою: </title>.",
          variants: [{ lines: ["<body>", "<h1>Новини</h1>", "<p>Сьогодні тепло.</p>", "<p>Завтра дощ.</p", "</body>"], a: 3, why: "Закривний тег теж закінчується дужкою: </p>." }] },
        { t: "bugline", id: "fe6-6-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["<h2>Космос</h2>", "<p>Я люблю <em>зорі</p></em>", "<hr>", "<p>Кінець</p>"], a: 1, why: "Спершу закриваємо em, потім p: </em></p>." }
      ]
    },
    {
      id: "fe6-7", title: "Списки, картинки, сторінки", lessons: "уроки 4–6",
      items: [
        { t: "learn", text: "Пункт <li> живе тільки в <ul> або <ol>. Картинка з папки images: src=\"images/kit.jpg\". Посилання на сусідню сторінку: href=\"about.html\".", code: "<img src=\"images/kit.jpg\" alt=\"Кіт\">\n<a href=\"about.html\">Про мене</a>" },
        { t: "quiz", id: "fe6-7-a", q: "Як зробити вкладений список?", options: ["<ul> усередині <li>", "<li> поза списком", "Два <ul> поруч", "<ol> усередині <img>"], a: 0, why: "Вкладений список кладемо всередину пункту li — як меню з підменю." },
        { t: "bugline", id: "fe6-7-b", q: "Тапни рядок з помилкою.", lines: ["<ul>", "  <li>Хліб</li>", "  <p>Молоко</p>", "</ul>"], a: 2, why: "Усередині списку — тільки пункти <li>.",
          variants: [{ lines: ["<ol>", "  <li>Помий руки</li>", "  <li>Наріж хліб<li>", "</ol>"], a: 2, why: "Пункт закриваємо так: </li>." }] },
        { t: "quiz", id: "fe6-7-c", q: "kit.jpg лежить у папці images. Що написати в src?", options: ["images/kit.jpg", "kit.jpg", "images kit.jpg", "kit/images.jpg"], a: 0, why: "Шлях від сторінки: папка, скісна, файл.",
          variants: [{ q: "kit.jpg лежить поруч зі сторінкою. Що написати в src?", options: ["kit.jpg", "images/kit.jpg", "kit", "jpg/kit"], a: 0, why: "Файл поруч — досить імені з розширенням." }] },
        { t: "quiz", id: "fe6-7-d", q: "Як зробити картинку шириною 300?", options: ["width=\"300\"", "size=\"300\"", "big=\"300\"", "w=\"300\""], a: 0, why: "Ширина — атрибут width." },
        { t: "quiz", id: "fe6-7-e", q: "Посилання з about.html на головну. Що в href?", options: ["index.html", "about.html", "головна", "home"], a: 0, why: "Головна сторінка сайту — index.html.",
          variants: [{ q: "Посилання з index.html на сторінку «Про мене» (about.html). Що в href?", options: ["about.html", "index.html", "Про мене", "<about>"], a: 0, why: "У href — назва файлу сторінки." }] },
        { t: "tagwrap", id: "fe6-7-f", q: "Зроби посилання на головну.", text: "Головна", tiles: ["<a href=\"index.html\">", "</a>", "<a src=\"index.html\">", "<li>", "</li>"], a: ["<a href=\"index.html\">", "</a>"], why: "Посилання — href, не src.",
          variants: [{ _tiles: undefined, q: "Зроби з тексту пункт списку.", text: "Хобі", a: ["<li>", "</li>"], why: "Пункт списку — <li> … </li>." }] },
        { t: "bugline", id: "fe6-7-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["<ul>", "  <li><a href=\"index.html\">Головна</a></li>", "  <li><a href=\"about.html\">Про мене</li></a>", "</ul>"], a: 2, why: "Спершу закриваємо a, потім li: </a></li>." }
      ]
    },
    {
      id: "fe6-8", title: "Шрифти й текст", lessons: "урок 10",
      items: [
        { t: "learn", text: "font-family — шрифт і запасний через кому. Назва з пробілом — у лапках. font-weight: bold — жирно, line-height — відстань між рядками.", code: "body {\n  font-family: Verdana, sans-serif;\n  line-height: 1.5;\n}\nh1 {\n  font-family: \"Times New Roman\", serif;\n}" },
        { t: "quiz", id: "fe6-8-a", q: "font-family: Verdana, sans-serif;\nНавіщо тут sans-serif?", options: ["Запасний, якщо Verdana немає", "Робить текст жирним", "Збільшує літери", "Це помилка"], a: 0, why: "Через кому — запасний шрифт. Браузер бере наступний, якщо першого немає." },
        { t: "quiz", id: "fe6-8-b", q: "Яку назву шрифту беремо в лапки?", options: ["\"Times New Roman\"", "Arial", "Verdana", "Georgia"], a: 0, why: "Назва з пробілом — у лапках." ,
          variants: [{ options: ["\"Courier New\"", "Tahoma", "Arial", "Verdana"], a: 0 }] },
        { t: "quiz", id: "fe6-8-c", q: "Шрифт з «ніжками» — засічками. Яка родина?", options: ["serif", "sans-serif", "monospace", "bold"], a: 0, why: "serif — з ніжками, як у книжці.",
          variants: [{ q: "Усі літери однакової ширини, як у друкарської машинки. Яка родина?", options: ["monospace", "serif", "sans-serif", "normal"], a: 0, why: "monospace — однакова ширина, як Courier New." }, { q: "Шрифт без «ніжок». Яка родина?", options: ["sans-serif", "serif", "monospace", "bold"], a: 0, why: "sans — «без»: sans-serif — без засічок." }] },
        { t: "quiz", id: "fe6-8-d", q: "Який розмір має абзац, якщо font-size не писали?", options: ["16px", "32px", "12px", "0px"], a: 0, why: "Браузер дає абзацу 16px, а h1 — 32px.",
          variants: [{ q: "Який розмір має h1, якщо font-size не писали?", options: ["32px", "16px", "12px", "48px"], a: 0, why: "Браузер дає h1 32px, абзацу — 16px." }] },
        { t: "bugline", id: "fe6-8-e", q: "Тапни рядок з помилкою.", lines: ["p {", "  font-weight: thick;", "  font-size: 18px;", "}"], a: 1, why: "Жирність — bold або normal. Слова thick CSS не знає.",
          variants: [{ lines: ["h2 {", "  color: darkblue;", "  font-size: 24 px;", "}"], a: 2, why: "Число і px — разом: 24px." }] },
        { t: "quiz", id: "fe6-8-f", q: "Що робить line-height: 2; ?", options: ["Подвійна відстань між рядками", "Подвійний розмір літер", "Два рядки тексту", "Жирність 2"], a: 0, why: "line-height — висота рядка, тобто відстань між рядками." },
        { t: "quiz", id: "fe6-8-g", q: "Увесь список жирний. Як зробити один пункт НЕ жирним?", options: ["font-weight: normal;", "font-weight: thin;", "font-weight: no;", "font-size: 0;"], a: 0, why: "normal — звичайна жирність." },
        { t: "bugline", id: "fe6-8-boss", boss: true, q: "Бос! Тапни рядок з помилкою.", lines: ["body {", "  font-family: Verdana, sans-serif;", "  font-size: 18px", "  line-height: 1.5;", "}"], a: 2, why: "Після значення — крапка з комою: 18px;" }
      ]
    },
    {
      id: "fe6-9", title: "Повторення: HTML", lessons: "уроки 1–6", pick: 6,
      items: [
        { t: "learn", text: "Повторюємо HTML. Щоразу інші завдання — грай ще раз!" },
        { t: "quiz", id: "fe6-9-a", q: "Який тег — найменший заголовок?", options: ["<h6>", "<h1>", "<p>", "<small-h>"], a: 0, why: "Заголовки від h1 (найбільший) до h6 (найменший)." },
        { t: "quiz", id: "fe6-9-b", q: "Де стоїть <title>?", options: ["У <head>", "У <body>", "У <p>", "Після </html>"], a: 0, why: "<title> — службове, живе в <head>." },
        { t: "quiz", id: "fe6-9-c", q: "Список кроків рецепта з номерами. Який тег?", options: ["<ol>", "<ul>", "<li>", "<hr>"], a: 0, why: "Кроки по порядку — нумерований список ol." },
        { t: "bugline", id: "fe6-9-d", q: "Тапни рядок з помилкою.", lines: ["<img src=\"mars.png\" alt=\"Марс\">", "<img src=\"moon.png\" alt=\"Місяць\">", "<img href=\"sun.png\" alt=\"Сонце\">"], a: 2, why: "Картинці файл даємо через src, а href — для посилань." },
        { t: "tagwrap", id: "fe6-9-e", q: "Зроби заголовок першого рівня.", text: "Мій сайт", tiles: ["<h1>", "</h1>", "<p>", "</p>", "<title>"], a: ["<h1>", "</h1>"], why: "Найбільший заголовок — <h1> … </h1>." },
        { t: "quiz", id: "fe6-9-f", q: "Що з цього — атрибут?", options: ["alt", "<img>", "<a>", "</p>"], a: 0, why: "Атрибут пишемо всередині тегу: <img alt=\"…\">." },
        { t: "bugline", id: "fe6-9-g", q: "Тапни рядок з помилкою.", lines: ["<html>", "<head>", "<title>Привіт</title>", "<body>", "<h1>Привіт</h1>"], a: 3, why: "Перед <body> треба закрити <head>: </head>." },
        { t: "quiz", id: "fe6-9-h", q: "Атрибут alt потрібен, щоб…", options: ["Описати картинку словами", "Змінити розмір", "Додати рамку", "Зробити посилання"], a: 0, why: "alt — текст замість картинки, його читає і програма для незрячих." },
        { t: "tagwrap", id: "fe6-9-i", q: "Зроби посилання на hobby.html.", text: "Хобі", tiles: ["<a href=\"hobby.html\">", "</a>", "<img src=\"hobby.html\">", "<p>", "</p>"], a: ["<a href=\"hobby.html\">", "</a>"], why: "Посилання — <a href=\"…\"> … </a>." },
        { t: "quiz", id: "fe6-9-boss", boss: true, q: "Бос! Яка сторінка буде головною на сайті?", options: ["index.html", "about.html", "main.html", "site.html"], a: 0, why: "Головну сторінку називаємо index.html." }
      ]
    },
    {
      id: "fe6-10", title: "Повторення: CSS і класи", lessons: "уроки 9–11", pick: 6,
      items: [
        { t: "learn", text: "Повторюємо CSS. Правило: селектор { властивість: значення; }. Клас: .price" },
        { t: "quiz", id: "fe6-10-a", q: "h1 { color: red; } — що тут селектор?", options: ["h1", "color", "red", ";"], a: 0, why: "Селектор каже, КОМУ правило: h1." },
        { t: "quiz", id: "fe6-10-b", q: "Яка властивість фарбує фон?", options: ["background-color", "color", "font-color", "fill"], a: 0, why: "color — літери, background-color — фон." },
        { t: "quiz", id: "fe6-10-c", q: "Як пофарбувати всю сторінку одним правилом?", options: ["Селектор body", "Селектор p", "Селектор .page", "Селектор title"], a: 0, why: "body — уся видима сторінка." },
        { t: "bugline", id: "fe6-10-d", q: "Тапни рядок з помилкою.", lines: [".sale {", "  color red;", "  font-weight: bold;", "}"], a: 1, why: "Між властивістю і значенням — двокрапка: color: red;" },
        { t: "quiz", id: "fe6-10-e", q: "Де пишемо CSS?", options: ["У файлі style.css", "У файлі index.css.html", "У <title>", "У атрибуті alt"], a: 0, why: "CSS — у style.css поруч з index.html." },
        { t: "quiz", id: "fe6-10-f", q: "p { color: navy; }\n.price { color: red; }\nЯкого кольору <p>Шахи</p>?", options: ["navy", "red", "чорний", "наполовину"], a: 0, why: "Класу price в абзаці немає — діє правило для p." },
        { t: "bugline", id: "fe6-10-g", q: "Тапни рядок з помилкою.", lines: ["<p class=\"price\">300 грн</p>", "<p class=\"sale\">Знижка</p>", "<p class=price sale>Хіт</p>"], a: 2, why: "Значення класу — в лапках: class=\"price sale\"." },
        { t: "quiz", id: "fe6-10-h", q: "Яке значення вирівнює текст по центру?", options: ["text-align: center;", "text-align: middle;", "align: center;", "center: text;"], a: 0, why: "text-align: center;" },
        { t: "quiz", id: "fe6-10-i", q: "Що після кожного значення в CSS?", options: ["Крапка з комою ;", "Кома ,", "Крапка .", "Нічого"], a: 0, why: "Кожне значення закінчуємо ;" },
        { t: "bugline", id: "fe6-10-boss", boss: true, q: "Фінальний бос! Тапни рядок з помилкою.", lines: [".card {", "  background-color: lightyellow;", "  color: navy;", "}", "card {", "  font-size: 18px;", "}"], a: 4, why: "Клас у CSS — з крапкою: .card {" }
      ]
    }

  ]
};
