// 6 клас · Розробка мобільних додатків (Республіка, App Inventor) · уроки 1–10 (01.09–17.11.2026).
// Пробна версія: відповіді відкриті. Блоки: "вид|текст", види — event set text num call log col var get; "lbl|…" — підпис у блоці.
// Змінних, TextBox і random у Республіці ще не було (змінні — 24.11), тому їх тут немає.
(window.GAMES = window.GAMES || {}).mob6r = {
  id: "mob6r", classes: ["6-resp"],
  course: "Мобільні додатки · 6 клас", short: "AI", color: "orange",
  sector: "Сектор 1 · Дрони Республіки",
  about: "Ремонтні дрони станції працюють на App Inventor. Збери їм екран, події, звук і полотно для гри.",
  levels: [
    // ---------- 1 · уроки 1–2 ----------
    {
      id: "mob6r-1", title: "Що видно і що відбувається", lessons: "уроки 1–2",
      items: [
        { t: "learn", text: "Застосунок = що видно + що відбувається. Designer — що видно: кнопки, написи. Blocks — що відбувається: правила «коли… зроби…»." },
        { t: "quiz", id: "mob6r-1-a", q: "Де ставимо кнопки й написи на екран?", options: ["Designer", "Blocks", "Media", "AI Companion"], a: 0,
          why: "Designer — «що видно». Blocks — «що відбувається».",
          variants: [
            { q: "Де складаємо правила «коли натиснули — зроби»?", options: ["Blocks", "Designer", "Properties", "Palette"], a: 0, why: "Blocks — «що відбувається»: там складаємо блоки." },
            { q: "Де налаштовуємо колір і розмір вибраного компонента?", options: ["Properties", "Palette", "Media", "Blocks"], a: 0, why: "Панель Properties праворуч показує властивості вибраного компонента." }
          ] },
        { t: "quiz", id: "mob6r-1-b", q: "Компонент — це…", options: ["Деталь: кнопка, напис, картинка", "Налаштування: колір, розмір", "Файл зі звуком", "Назва проєкту"], a: 0,
          why: "Компонент — іменник, ЩО є на екрані. Властивість — прикметник, ЯКА ця деталь.",
          variants: [
            { q: "Властивість — це…", options: ["Налаштування деталі: колір, текст, розмір", "Сама деталь: кнопка чи напис", "Подія «коли натиснули»", "Файл у Media"], a: 0, why: "Властивість каже, ЯКА деталь: якого кольору, який текст." }
          ] },
        { t: "quiz", id: "mob6r-1-c", q: "Яка властивість пише назву вгорі застосунку?", options: ["Title", "Text", "FontSize", "Shape"], a: 0,
          why: "Title — смужка вгорі на телефоні. Залишати «Screen1» не можна.",
          variants: [
            { q: "Яка властивість змінює розмір букв?", options: ["FontSize", "FontBold", "Width", "Title"], a: 0, why: "FontSize — розмір у пікселях. Стандартний — 14." },
            { q: "Яка властивість робить текст жирним?", options: ["FontBold", "FontSize", "TextColor", "Shape"], a: 0, why: "FontBold — галочка «жирний»." }
          ] },
        { t: "quiz", id: "mob6r-1-d", q: "Тло чорне, текст чорний. Що побачить людина?", options: ["Нічого — текст не видно", "Білий текст", "Червону помилку", "Сірий текст"], a: 0,
          why: "Темне тло + темний текст = нічого не видно. Колір тла й тексту підбирають разом.",
          variants: [
            { q: "Тло біле, текст білий. Що побачить людина?", options: ["Нічого — текст не видно", "Чорний текст", "Текст стане жирним", "Кнопку"], a: 0, why: "Світле тло + світлий текст — те саме: текст зливається." }
          ] },
        { t: "quiz", id: "mob6r-1-e", q: "Яка властивість кнопки задає форму: заокруглена чи прямокутна?", options: ["Shape", "Enabled", "Width", "Title"], a: 0,
          why: "Shape — форма: default, rounded, rectangular." },
        { t: "quiz", id: "mob6r-1-f", q: "Зняли галочку Enabled у кнопки. Що буде?", options: ["Кнопка сіра й не натискається", "Кнопка зникне", "Кнопка стане червоною", "Кнопка заграє звук"], a: 0,
          why: "Enabled — «кнопка працює». Без галочки вона сіра й не натискається." },
        { t: "quiz", id: "mob6r-1-boss", boss: true, q: "Бос! Напис «Привіт!», FontSize 48, тло чорне, текст чорний. Скільки тут бід?", options: ["Дві: не видно і не вміститься", "Одна: не видно", "Жодної", "Одна: не вміститься"], a: 0,
          why: "Чорне на чорному — не видно. 48 — забагато для телефона: текст не вміститься." }
      ]
    },
    // ---------- 2 · урок 3 ----------
    {
      id: "mob6r-2", title: "Коробки й картинки", lessons: "урок 3",
      items: [
        { t: "learn", text: "Екран складає все в стовпчик. Щоб поставити в рядок — HorizontalArrangement, коробка з розділу Layout. Компоненти кладемо ВСЕРЕДИНУ коробки." },
        { t: "quiz", id: "mob6r-2-a", q: "Три кнопки треба поставити в один рядок. Що взяти?", options: ["HorizontalArrangement", "VerticalArrangement", "Image", "Label"], a: 0,
          why: "Horizontal — складає вбік, у рядок.",
          variants: [
            { q: "Два написи один під одним в одній групі. Що взяти?", options: ["VerticalArrangement", "HorizontalArrangement", "Button", "Image"], a: 0, why: "Vertical — у стовпчик. Зручно зібрати групу." },
            { q: "Рівна сітка 3×3, як «хрестики-нулики». Що взяти?", options: ["TableArrangement", "HorizontalArrangement", "VerticalArrangement", "Label"], a: 0, why: "TableArrangement — рядки й стовпці: Rows і Columns." }
          ] },
        { t: "quiz", id: "mob6r-2-b", q: "У якому розділі Palette лежать коробки?", options: ["Layout", "User Interface", "Media", "Drawing and Animation"], a: 0,
          why: "Коробки — у розділі Layout, не в User Interface." },
        { t: "quiz", id: "mob6r-2-c", q: "Яка назва файлу картинки правильна?", options: ["kotyk.jpg", "мій котик.jpg", "Мій кіт.jpg", "kotyk 2.jpg"], a: 0,
          why: "Назва — латиницею, без пробілів. З кирилицею й пробілами файл часто не вантажиться.",
          variants: [
            { q: "Яка назва файлу звуку правильна?", options: ["meow.mp3", "Мяу кіт.mp3", "мяу.mp3", "meow cat.mp3"], a: 0, why: "Латиницею, без пробілів: meow.mp3." }
          ] },
        { t: "quiz", id: "mob6r-2-d", q: "Куди вантажимо свою картинку?", options: ["Media → Upload File…", "Blocks → Text", "Properties → Title", "Layout"], a: 0,
          why: "Media — файли проєкту. Upload File… — завантажити." },
        { t: "quiz", id: "mob6r-2-e", q: "Width = Fill parent означає…", options: ["На всю ширину коробки, у якій лежу", "Рівно 100 пікселів", "Скільки треба для тексту", "Половину екрана"], a: 0,
          why: "Fill parent — «заповни батьківську коробку».",
          variants: [
            { q: "Width = Automatic для фото з телефона. Що буде?", options: ["Фото завелике — займе весь екран", "Фото зникне", "Фото стане 100 пікселів", "Фото стане круглим"], a: 0, why: "Automatic — справжній розмір файлу. Для фото це забагато." },
            { q: "Image.Width = 30 percent, Label.Width = 70 percent. Що вийде?", options: ["Картинка третина рядка, текст — решта", "Обидва на всю ширину", "Картинка зникне", "Текст під картинкою"], a: 0, why: "Відсотки — частка ширини: 30 + 70 = 100 %." }
          ] },
        { t: "quiz", id: "mob6r-2-f", q: "Кнопку кинули ПОРУЧ із коробкою, а не всередину. Що буде?", options: ["Кнопка лишиться в стовпчику", "Стане в рядок", "Зникне", "Червона помилка"], a: 0,
          why: "Головне слово — усередину. Поруч — нічого не зміниться." },
        { t: "quiz", id: "mob6r-2-boss", boss: true, q: "Бос! Як стануть компоненти?", code: "Screen1\n├── Label1 «Меню»\n├── HorizontalArrangement1\n│    ├── Button1 «Так»\n│    └── Button2 «Ні»\n└── Button3 «Вихід»",
          options: ["Меню · «Так» і «Ні» в рядок · Вихід", "Усі п'ять у рядок", "Усі п'ять у стовпчик", "Так · Ні · Меню · Вихід"], a: 0,
          why: "Screen1 складає трьох дітей у стовпчик. Усередині коробки — свій рядок." }
      ]
    },
    // ---------- 3 · урок 4 ----------
    {
      id: "mob6r-3", title: "Подія → дія", lessons: "урок 4",
      items: [
        { t: "learn", text: "Жовта підкова — подія: КОЛИ. Зелений блок — дія: ВСТАНОВИ. Червоний — текст. Дія працює лише всередині підкови.",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Label1.Text to", "text|\"Кіт прокинувся!\""]] }] },
        { t: "build", id: "mob6r-3-a", q: "Збери: натиснули Button1 — напис «Кіт прокинувся!».",
          prog: [{ when: "?", rows: [["?", "?"]] }],
          a: ["event|when Button1.Click", "set|set Label1.Text to", "text|\"Кіт прокинувся!\""],
          extra: ["call|call Sound1.Play", "num|30"],
          run: { text: "Кіт прокинувся!" }, why: "Подія — жовта підкова, у ній зелений set, праворуч червоний текст.",
          variants: [
            { q: "Збери: натиснули Button2 — напис «Кіт спить».",
              a: ["event|when Button2.Click", "set|set Label1.Text to", "text|\"Кіт спить\""],
              extra: ["event|when Button1.Click", "num|500"], run: { text: "Кіт спить" } }
          ] },
        { t: "quiz", id: "mob6r-3-b", q: "Кнопку натиснули й тримають близько секунди. Яка подія?", options: ["LongClick", "Click", "TouchUp", "Initialize"], a: 0,
          why: "Click — натиснули й відпустили. LongClick — тримають.",
          variants: [
            { q: "Застосунок щойно відкрився. Яка подія?", options: ["Screen1.Initialize", "Button1.Click", "Button1.TouchDown", "Button1.LongClick"], a: 0, why: "Initialize — запуск, ще до будь-якого натискання." },
            { q: "Палець щойно торкнувся кнопки. Яка подія?", options: ["TouchDown", "TouchUp", "LongClick", "Initialize"], a: 0, why: "TouchDown — торкнувся. TouchUp — відпустив." }
          ] },
        { t: "quiz", id: "mob6r-3-c", q: "Що буде на написі? На старті «Кіт спить».", blocks: [{ when: "when Button1.Click", rows: [["set|set Label1.Text to", "text|\"Кіт прокинувся!\""]] }, { when: "when Button2.Click", rows: [["set|set Label1.Text to", "text|\"Кіт спить\""]] }],
          options: ["Натиснули Button1, Button2, Button1 → «Кіт прокинувся!»", "Натиснули Button1, Button2, Button1 → «Кіт спить»", "Нічого не натискали → порожньо", "Натиснули Button2 → «Кіт прокинувся!»"], a: 0,
          why: "Напис пам'ятає лише останній текст. Останньою натиснули Button1." },
        { t: "bugline", id: "mob6r-3-d", q: "Кнопка не працює. Тапни блок, який стоїть неправильно.",
          lines: [["event|when Button1.Click do"], ["lbl|   (порожньо)"], ["set|set Label1.Text to", "text|\"Привіт\""]], a: 2,
          why: "Зелений блок лежить поза підковою. Такий блок ніколи не виконується." },
        { t: "quiz", id: "mob6r-3-e", q: "Є дві однакові підкови when Button1.Click. Що покаже App Inventor?", options: ["Червону помилку", "Обидві спрацюють", "Спрацює лише перша", "Нічого"], a: 0,
          why: "Застосунок не знає, яку виконати. Друга має бути Button2." },
        { t: "quiz", id: "mob6r-3-f", q: "Звідки взяти синій блок з числом 30?", options: ["Built-in → Math", "Built-in → Text", "Built-in → Colors", "Шухляда Label1"], a: 0,
          why: "Число — синій блок з Math. Текст — з Text, колір — з Colors.",
          variants: [
            { q: "Звідки взяти червоний блок тексту \" \"?", options: ["Built-in → Text", "Built-in → Math", "Шухляда Button1", "Media"], a: 0, why: "Текст — червоний блок у Built-in → Text." }
          ] },
        { t: "build", id: "mob6r-3-boss", boss: true, q: "Бос! Лампочка: поки тримаєш Button1 — тло жовте.",
          prog: [{ when: "?", rows: [["set|set Screen1.BackgroundColor to", "?"]] }],
          a: ["event|when Button1.TouchDown", "col|жовтий"],
          extra: ["event|when Button1.TouchUp", "col|чорний", "text|\"Світло!\""],
          run: { text: "💡 Світло!" }, why: "TouchDown — палець торкнувся. Колір — квадратик з Colors.",
          variants: [
            { q: "Бос! Лампочка: відпустив Button1 — тло чорне.", a: ["event|when Button1.TouchUp", "col|чорний"],
              extra: ["event|when Button1.TouchDown", "col|жовтий", "text|\"Темно\""], run: { text: "🌑 Темно" }, why: "TouchUp — палець відпустив кнопку." }
          ] }
      ]
    },
    // ---------- 4 · урок 5 ----------
    {
      id: "mob6r-4", title: "Звук і вібрація", lessons: "урок 5",
      items: [
        { t: "learn", text: "Sound — невидимий компонент: його не видно, але чути. Падає під телефон. Фіолетовий call — команда «зроби!».",
          blocks: [{ when: "when Button1.Click", rows: [["call|call Sound1.Play"], ["call|call Sound1.Vibrate", "lbl|millisecs", "num|300"]] }] },
        { t: "build", id: "mob6r-4-a", q: "Збери: натиснули Button1 — грає звук.",
          prog: [{ when: "when Button1.Click", rows: [["?"]] }],
          a: ["call|call Sound1.Play"], extra: ["call|call Sound1.Stop", "set|set Label1.Text to"],
          run: { text: "🔊 Мяу!" }, why: "Play — грати. Stop — зупинити.",
          variants: [
            { q: "Збери кнопку «Тиша»: натиснули — звук зупиняється.", prog: [{ when: "when ButtonTysha.Click", rows: [["?"]] }],
              a: ["call|call Sound1.Stop"], extra: ["call|call Sound1.Play", "call|call Player1.Start"], run: { text: "🔇 Тиша" }, why: "Stop — зупинити зовсім." }
          ] },
        { t: "quiz", id: "mob6r-4-b", q: "call Sound1.Vibrate millisecs 1000. Скільки вібрує?", options: ["1 секунду", "1000 секунд", "10 секунд", "пів секунди"], a: 0,
          why: "1000 мілісекунд = 1 секунда.",
          variants: [
            { q: "call Sound1.Vibrate millisecs 500. Скільки вібрує?", options: ["пів секунди", "5 секунд", "500 секунд", "1 секунду"], a: 0, why: "500 мс — половина від 1000, тобто пів секунди." },
            { q: "call Sound1.Vibrate millisecs 3000. Скільки вібрує?", options: ["3 секунди", "30 секунд", "пів секунди", "3000 секунд"], a: 0, why: "3000 мс = 3 секунди, як дзвінок." }
          ] },
        { t: "quiz", id: "mob6r-4-c", q: "Звук для кнопки — короткий «мяу». Який компонент?", options: ["Sound", "Player", "TextToSpeech", "Notifier"], a: 0,
          why: "Sound — короткий звук. Player — довга музика. TextToSpeech — вимовляє текст.",
          variants: [
            { q: "Фонова пісня, яка грає по колу. Який компонент?", options: ["Player", "Sound", "Notifier", "Label"], a: 0, why: "Player — довгий звук, має Loop — грати по колу." },
            { q: "Телефон має вимовити «Привіт». Який компонент?", options: ["TextToSpeech", "Sound", "Player", "Image"], a: 0, why: "TextToSpeech вимовляє текст. Файл не потрібен." }
          ] },
        { t: "quiz", id: "mob6r-4-d", q: "Яка команда запускає музику в Player?", options: [["call|call Player1.Start"], ["call|call Player1.Play"], ["call|call Player1.Go"], ["call|call Player1.Vibrate"]], a: 0,
          why: "У Sound — Play, а в Player — Start." },
        { t: "quiz", id: "mob6r-4-e", q: "Блоки правильні, а кнопка мовчить. У Sound1 Source — None. Чому?", options: ["Не вибрано файл — нема що грати", "Треба натиснути двічі", "Немає вібрації", "Забагато кнопок"], a: 0,
          why: "Файл звуку вибирають у Properties → Source." },
        { t: "quiz", id: "mob6r-4-f", q: "Обидві кнопки роблять call Sound1.Play. У Sound1 — meow.mp3. Що грає Button2?", options: ["Той самий «мяу»", "Гавкіт", "Тиша", "Червона помилка"], a: 0,
          why: "Звук залежить від Source компонента, а не від кнопки." },
        { t: "quiz", id: "mob6r-4-boss", boss: true, q: "Бос! Вібрацію запустили в емуляторі на комп'ютері. Що буде?", options: ["Нічого не відчуєш", "Тремтить комп'ютер", "Червона помилка", "Звук «бззз»"], a: 0,
          why: "В емуляторі немає вібромотора. Вібрацію відчуває лише справжній телефон.",
          variants: [
            { q: "Бос! MinimumInterval = 500. Тиснеш 5 разів за секунду. Скільки разів зіграє?", options: ["Не частіше, ніж раз на пів секунди", "5 разів", "Жодного", "10 разів"], a: 0, why: "MinimumInterval — найменша пауза між звуками. Натискання між ними пропускаються." }
          ] }
      ]
    },
    // ---------- 5 · урок 6 ----------
    {
      id: "mob6r-5", title: "Візитівка: картинка і повідомлення", lessons: "урок 6",
      items: [
        { t: "learn", text: "set Image1.Picture to — змінює картинку. Назва в блоці — літера в літеру, як у Media. Notifier показує повідомлення, він невидимий.",
          blocks: [{ when: "when ButtonSiurpryz.Click", rows: [["set|set Image1.Picture to", "text|\"me2.png\""], ["call|call Notifier1.ShowAlert", "lbl|notice", "text|\"Сюрприз!\""]] }] },
        { t: "build", id: "mob6r-5-a", q: "Збери кнопку «Сюрприз»: показати картинку me2.png.",
          prog: [{ when: "when ButtonSiurpryz.Click", rows: [["?", "?"]] }],
          a: ["set|set Image1.Picture to", "text|\"me2.png\""], extra: ["set|set Label1.Text to", "text|\"Me2.png\""],
          run: { text: "🖼️ Нова картинка!" }, why: "Назва файлу — літера в літеру: me2.png.",
          variants: [
            { q: "Збери кнопку «Назад»: повернути картинку me.png.", prog: [{ when: "when ButtonNazad.Click", rows: [["?", "?"]] }],
              a: ["set|set Image1.Picture to", "text|\"me.png\""], extra: ["call|call Sound1.Play", "text|\"me\""], run: { text: "🖼️ Знову я" }, why: "Назва з розширенням, літера в літеру: me.png." }
          ] },
        { t: "quiz", id: "mob6r-5-b", q: "У Media — me2.png. У блоці — \"Me2.png\". Що буде?", options: ["Картинка не зміниться", "Зміниться", "Червона помилка", "Зникне екран"], a: 0,
          why: "Велика літера — вже інша назва. Треба літера в літеру.",
          variants: [
            { q: "У Media — kit.jpg. У блоці — \"kit.png\". Що буде?", options: ["Картинка не зміниться", "Зміниться", "Заграє звук", "Телефон вимкнеться"], a: 0, why: "jpg і png — різні назви. Має бути як у Media." },
            { q: "У Media лише me.png. У блоці — \"me2.png\". Що буде?", options: ["Картинка не зміниться", "Покажеться me.png", "Покажеться me2.png", "Заграє звук"], a: 0, why: "Файлу me2.png немає. Спершу Upload File…, потім блок." }
          ] },
        { t: "quiz", id: "mob6r-5-c", q: "Повідомлення має саме зникнути за 2–3 секунди. Яка команда?", options: ["ShowAlert", "ShowMessageDialog", "ShowChooseDialog", "ShowTextDialog"], a: 0,
          why: "ShowAlert — смужка внизу, зникає сама.",
          variants: [
            { q: "Вікно із заголовком, яке чекає, поки натиснуть кнопку. Яка команда?", options: ["ShowMessageDialog", "ShowAlert", "Play", "Vibrate"], a: 0, why: "ShowMessageDialog не зникає саме — чекає натискання." }
          ] },
        { t: "quiz", id: "mob6r-5-d", q: "У Blocks немає шухляди Notifier1. Чому?", options: ["Notifier не додали в Designer", "Треба перезапустити телефон", "Забули Media", "Він заборонений"], a: 0,
          why: "Спершу Designer → User Interface → Notifier. Тоді з'явиться й шухляда." },
        { t: "quiz", id: "mob6r-5-e", q: "Які три гнізда в ShowMessageDialog?", options: ["message · title · buttonText", "notice · Text · Picture", "x · y · millisecs", "Title · Shape · Width"], a: 0,
          why: "message — що написано, title — заголовок, buttonText — напис на кнопці." },
        { t: "quiz", id: "mob6r-5-f", q: "Який блок сховає фото?", options: [["set|set Image1.Visible to", "log|false"], ["set|set Image1.Visible to", "log|true"], ["call|call Sound1.Stop"], ["set|set Image1.Picture to", "text|\"\""]], a: 0,
          why: "Visible = false — не видно. true — знову видно. Блоки true / false — з Logic." },
        { t: "quiz", id: "mob6r-5-boss", boss: true, q: "Бос! Designer: Picture = cat.png. Натиснули Button1, потім Button2. Яка картинка?",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Image1.Picture to", "text|\"dog.png\""]] }, { when: "when Button2.Click", rows: [["set|set Image1.Picture to", "text|\"cat.png\""]] }],
          options: ["cat.png", "dog.png", "Порожньо", "Обидві разом"], a: 0, why: "Button2 повертає кота. Видно останню дію.",
          variants: [
            { q: "Бос! Designer: Picture = cat.png. Натиснули Button1 двічі. Яка картинка?", options: ["dog.png", "cat.png", "Порожньо", "Дві собаки"], a: 0, why: "Перше натискання — пес. Друге нічого не змінює." },
            { q: "Бос! Designer: Picture = cat.png. Застосунок щойно запустився. Яка картинка?", options: ["cat.png", "dog.png", "Порожньо", "me.png"], a: 0, why: "Картинку на старті задає Designer." }
          ] }
      ]
    },
    // ---------- 6 · уроки 7–9 ----------
    {
      id: "mob6r-6", title: "Моя гра: перший екран", lessons: "уроки 7–9",
      items: [
        { t: "learn", text: "Проєкт чверті — MoyaGra. Порядок: Media — файли, Designer — компоненти, Blocks — підкови, телефон — перевірка.",
          blocks: [{ when: "when ButtonStart.Click", rows: [["call|call Notifier1.ShowAlert", "lbl|notice", "text|\"Гра починається!\""], ["call|call Sound1.Play"]] }] },
        { t: "build", id: "mob6r-6-a", q: "Збери «Старт»: повідомлення «Гра починається!».",
          prog: [{ when: "when ButtonStart.Click", rows: [["?", "lbl|notice", "?"]] }],
          a: ["call|call Notifier1.ShowAlert", "text|\"Гра починається!\""], extra: ["set|set Label1.Text to", "text|\"Бали: 0\""],
          run: { text: "Гра починається!" }, why: "ShowAlert — смужка внизу, у гніздо notice — текст.",
          variants: [
            { q: "Збери «Скинути»: напис «Бали: 0».", prog: [{ when: "when ButtonSkynuty.Click", rows: [["?", "?"]] }],
              a: ["set|set Label1.Text to", "text|\"Бали: 0\""], extra: ["call|call Notifier1.ShowAlert", "text|\"Гра починається!\""], run: { text: "Бали: 0" }, why: "Змінити напис — зелений set Label1.Text." }
          ] },
        { t: "quiz", id: "mob6r-6-b", q: "Дві кнопки «Старт» і «Скинути» поруч. Яка коробка?", options: ["HorizontalArrangement", "VerticalArrangement", "TableArrangement", "Canvas"], a: 0,
          why: "Поруч, у рядок — HorizontalArrangement." },
        { t: "quiz", id: "mob6r-6-c", q: "Натискаємо ButtonStart, а нічого не грає. Що не так?", blocks: [{ when: "when Button2.Click", rows: [["call|call Sound1.Play"]] }],
          options: ["Підкова іншої кнопки", "Звук заборонено", "Треба Vibrate", "Забули Title"], a: 0, why: "Треба when ButtonStart.Click, а не Button2.",
          variants: [
            { q: "«Скинути» нічого не робить. Що перевірити першим?", options: ["Чи блок у підкові саме ButtonSkynuty", "Колір кнопки", "Розмір шрифту", "Назву проєкту"], a: 0, why: "Блок має бути всередині підкови тієї самої кнопки." }
          ] },
        { t: "quiz", id: "mob6r-6-d", q: "Як перейменувати Button3 на ButtonStart?", options: ["Components → Rename", "Properties → Title", "Media → Upload", "Blocks → Text"], a: 0,
          why: "Rename — під списком Components. ButtonStart зрозуміліше, ніж Button3." },
        { t: "quiz", id: "mob6r-6-e", q: "Як зберегти картинку з усіма блоками?", options: ["Правий клік на полі → Download Blocks as Image", "Ctrl+S", "Media → Upload File…", "Connect → AI Companion"], a: 0,
          why: "Download Blocks as Image — на комп'ютер збережеться PNG." },
        { t: "quiz", id: "mob6r-6-f", q: "Як подивитися проєкт на телефоні?", options: ["Connect → AI Companion і QR-код", "Media → Upload File…", "Blocks → Built-in", "Projects → Rename"], a: 0,
          why: "AI Companion показує проєкт наживо. Телефон і комп'ютер — в одній мережі Wi-Fi.",
          variants: [
            { q: "Телефон не бачить проєкт. Що зробити?", options: ["Connect → Reset Connection і ще раз", "Видалити проєкт", "Змінити Title", "Додати кнопку"], a: 0, why: "Reset Connection — і знову AI Companion." }
          ] },
        { t: "quiz", id: "mob6r-6-boss", boss: true, q: "Бос! Застосунок відкрився — одразу має з'явитися «Натисни Старт». Яка подія?", options: ["when Screen1.Initialize", "when ButtonStart.Click", "when ButtonSkynuty.Click", "when Button1.LongClick"], a: 0,
          why: "Initialize — щойно застосунок відкрився." }
      ]
    },
    // ---------- 7 · урок 10: полотно і координати ----------
    {
      id: "mob6r-7", title: "Полотно і X, Y", lessons: "урок 10",
      items: [
        { t: "learn", text: "Canvas — полотно, поле гри. ImageSprite — картинка, яка вміє рухатися; лежить тільки на полотні. Точка 0, 0 — лівий верхній кут. X — праворуч, Y — униз." },
        { t: "quiz", id: "mob6r-7-a", q: "Персонаж гри, який рухається по полотну. Який компонент?", options: ["ImageSprite", "Image", "Label", "Button"], a: 0,
          why: "Image рухатися не вміє. Персонаж гри — ImageSprite.",
          variants: [
            { q: "Поле гри, на якому все рухається. Який компонент?", options: ["Canvas", "HorizontalArrangement", "Image", "Screen1"], a: 0, why: "Canvas — полотно, поле гри." },
            { q: "Кулька без картинки — коло з кольором. Який компонент?", options: ["Ball", "ImageSprite", "Image", "Canvas"], a: 0, why: "Ball — теж спрайт, але коло з кольором." }
          ] },
        { t: "quiz", id: "mob6r-7-b", q: "У якому розділі Palette лежать Canvas і ImageSprite?", options: ["Drawing and Animation", "Layout", "User Interface", "Media"], a: 0,
          why: "Drawing and Animation — полотно, спрайт, кулька." },
        { t: "quiz", id: "mob6r-7-c", q: "Полотно 300 × 300, персонаж 80 × 80. Де він при X 0, Y 0?", options: ["Лівий верхній кут", "Правий верхній кут", "Посередині", "Лівий нижній кут"], a: 0,
          why: "0, 0 — лівий верхній кут полотна.",
          variants: [
            { q: "Полотно 300 × 300, персонаж 80 × 80. Де він при X 220, Y 0?", options: ["Правий верхній кут", "Лівий верхній кут", "Лівий нижній кут", "Посередині"], a: 0, why: "X 220 — праворуч до краю, Y 0 — угорі." },
            { q: "Полотно 300 × 300, персонаж 80 × 80. Де він при X 0, Y 220?", options: ["Лівий нижній кут", "Правий нижній кут", "Лівий верхній кут", "Посередині"], a: 0, why: "X 0 — ліворуч, Y 220 — униз до краю." },
            { q: "Полотно 300 × 300, персонаж 80 × 80. Де він при X 110, Y 110?", options: ["Посередині", "Лівий верхній кут", "Правий нижній кут", "За краєм"], a: 0, why: "110 + 80 + 110 = 300 — рівно посередині." }
          ] },
        { t: "quiz", id: "mob6r-7-d", q: "Полотно 300, персонаж 80. Найбільше X, щоб не вилізти за край?", options: ["220", "300", "380", "80"], a: 0,
          why: "X — лівий край персонажа. 300 − 80 = 220." },
        { t: "quiz", id: "mob6r-7-e", q: "Тягну ImageSprite на Screen1 — він не лягає. Чому?", options: ["Немає Canvas — спрайт кладеться лише на полотно", "Немає звуку", "Забули Title", "Персонаж завеликий"], a: 0,
          why: "Спершу полотно, потім спрайт — на нього." },
        { t: "quiz", id: "mob6r-7-f", q: "Спрайт величезний на пів екрана. Що поставити?", options: ["Width і Height — 80 pixels", "Width — Automatic", "FontSize 14", "Shape — rounded"], a: 0,
          why: "Automatic — картинка в оригінальному розмірі. Задай пікселі.",
          variants: [
            { q: "Персонаж обрізаний знизу. Що змінити?", options: ["Height полотна — 300 pixels", "Title екрана", "Колір тла", "Source звуку"], a: 0, why: "Полотно замале: Automatic. Постав висоту 300 pixels." }
          ] },
        { t: "quiz", id: "mob6r-7-boss", boss: true, q: "Бос! Немає картинки персонажа. Чим замінити?", options: ["Ball — кулька з кольором", "Label з текстом", "Button", "Notifier"], a: 0,
          why: "Ball — спрайт без картинки: Radius і PaintColor. Усе інше так само." }
      ]
    },
    // ---------- 8 · урок 10: дотик і стрибок ----------
    {
      id: "mob6r-8", title: "Дотик і стрибок", lessons: "урок 10",
      items: [
        { t: "learn", text: "when ImageSprite1.Touched — торкнулися саме персонажа. call ImageSprite1.MoveTo переносить його в точку x, y.",
          blocks: [{ when: "when ImageSprite1.Touched x y", rows: [["set|set Label1.Text to", "text|\"Влучив!\""], ["call|call ImageSprite1.MoveTo", "lbl|x", "num|200", "lbl|y", "num|150"]] }] },
        { t: "build", id: "mob6r-8-a", q: "Збери: торкнулися персонажа — напис «Влучив!».",
          prog: [{ when: "?", rows: [["?", "?"]] }],
          a: ["event|when ImageSprite1.Touched", "set|set Label1.Text to", "text|\"Влучив!\""],
          extra: ["event|when Canvas1.Touched", "event|when ImageSprite2.Touched", "text|\"Бали: 0\""],
          run: { text: "Влучив!" }, why: "Touched саме ImageSprite1 — дотик до персонажа.",
          variants: [
            { q: "Збери: торкнулися персонажа — грає звук.", prog: [{ when: "?", rows: [["?"]] }],
              a: ["event|when ImageSprite1.Touched", "call|call Sound1.Play"], extra: ["event|when ButtonStart.Click", "call|call Sound1.Stop"], run: { text: "🔊 Бах!" }, why: "Дотик — подія спрайта, звук — call Sound1.Play." }
          ] },
        { t: "build", id: "mob6r-8-b", q: "Збери: дотик — стрибок у X 150, Y 100.",
          prog: [{ when: "when ImageSprite1.Touched", rows: [["?", "lbl|x", "?", "lbl|y", "?"]] }],
          a: ["call|call ImageSprite1.MoveTo", "num|150", "num|100"], extra: ["num|500", "set|set ImageSprite1.X to"],
          run: { text: "🦘 Стрибнув!" }, why: "MoveTo міняє X і Y разом. Перше число — x, друге — y.",
          variants: [
            { q: "Збери «Старт»: персонаж назад у X 20, Y 20.", prog: [{ when: "when ButtonStart.Click", rows: [["?", "lbl|x", "?", "lbl|y", "?"]] }],
              a: ["call|call ImageSprite1.MoveTo", "num|20", "num|20"], extra: ["num|400", "call|call Sound1.Play"], run: { text: "↖ У куті" }, why: "MoveTo x 20 y 20 — майже лівий верхній кут." }
          ] },
        { t: "quiz", id: "mob6r-8-c", q: "Персонаж у X 20, Y 20. Торкнулися раз. Де він?", blocks: [{ when: "when ImageSprite1.Touched", rows: [["call|call ImageSprite1.MoveTo", "lbl|x", "num|200", "lbl|y", "num|150"]] }],
          options: ["X 200, Y 150", "X 20, Y 20", "X 220, Y 170", "За краєм"], a: 0, why: "MoveTo переносить одразу в точку 200, 150.",
          variants: [
            { q: "Він уже в X 200, Y 150. Торкнулися ще раз. Де він?", options: ["Там само: X 200, Y 150", "X 400, Y 300", "X 20, Y 20", "Зник"], a: 0, why: "Стрибає в ту саму точку — нікуди не рушив." }
          ] },
        { t: "quiz", id: "mob6r-8-d", q: "Старт X 200, Y 150. У підкові set ImageSprite1.X to 0. Де він?", options: ["X 0, Y 150", "X 0, Y 0", "X 200, Y 0", "X 200, Y 150"], a: 0,
          why: "set X міняє лише X. Висота та сама.",
          variants: [
            { q: "Старт X 200, Y 150. У підкові set ImageSprite1.Y to 0. Де він?", options: ["X 200, Y 0", "X 0, Y 150", "X 0, Y 0", "X 200, Y 150"], a: 0, why: "set Y міняє лише Y — рух угору-вниз." }
          ] },
        { t: "quiz", id: "mob6r-8-e", q: "Полотно 300. MoveTo x 500 y 100. Що станеться?", options: ["Персонаж зникне за правим краєм", "Стане посередині", "Червона помилка", "Стане в X 300"], a: 0,
          why: "Полотно лише 300. Найбільше 220." },
        { t: "bugline", id: "mob6r-8-f", q: "Персонаж — ImageSprite1. Торкаюсь — тиша. Тапни рядок з помилкою.",
          lines: [["event|when ImageSprite2.Touched do"], ["call|call Sound1.Play"]], a: 0,
          why: "Підкова іншого спрайта. Треба ImageSprite1.Touched." },
        { t: "quiz", id: "mob6r-8-boss", boss: true, q: "Бос! Торкнулися полотна поруч із персонажем. Що станеться?", blocks: [{ when: "when ImageSprite1.Touched", rows: [["set|set Label1.Text to", "text|\"Влучив!\""]] }],
          options: ["Нічого", "«Влучив!»", "Персонаж стрибне", "Червона помилка"], a: 0,
          why: "Touched спрацьовує, коли палець торкнувся саме персонажа." }
      ]
    },
    // ---------- 9 · змішане повторення ----------
    {
      id: "mob6r-9", title: "Великий ремонт", lessons: "уроки 1–10",
      items: [
        { t: "learn", text: "Повторюємо все: компоненти, коробки, подія → дія, звук, картинки, полотно. Жовтий — подія, зелений — встанови, фіолетовий — зроби." },
        { t: "quiz", id: "mob6r-9-a", q: "Якого кольору блок «зроби!» — call?", options: ["Фіолетовий", "Жовтий", "Зелений", "Червоний"], a: 0,
          why: "Жовтий — подія, зелений — встанови, фіолетовий — зроби.",
          variants: [
            { q: "Якого кольору блок події «коли… зроби…»?", options: ["Жовтий", "Фіолетовий", "Синій", "Червоний"], a: 0, why: "Подія — жовта підкова." },
            { q: "Якого кольору блок set — «встанови»?", options: ["Зелений", "Жовтий", "Фіолетовий", "Синій"], a: 0, why: "set змінює властивість — зелений блок." }
          ] },
        { t: "quiz", id: "mob6r-9-b", q: "Який компонент НЕ видно на екрані телефона?", options: ["Sound", "Label", "Button", "Image"], a: 0,
          why: "Sound, Player, TextToSpeech, Notifier — невидимі, падають під телефон.",
          variants: [
            { q: "Який компонент НЕ видно на екрані телефона?", options: ["Notifier", "Canvas", "Button", "Label"], a: 0, why: "Notifier невидимий — показує лише повідомлення." }
          ] },
        { t: "quiz", id: "mob6r-9-c", q: "У Label подій немає. Чому?", options: ["Напис не натискають, його тільки змінюють", "Він невидимий", "Він завжди червоний", "Він у Media"], a: 0,
          why: "Подія — у кнопки чи екрана. Дія — часто в напису." },
        { t: "build", id: "mob6r-9-d", q: "Збери: дотик до персонажа — вібрація 200.",
          prog: [{ when: "when ImageSprite1.Touched", rows: [["?", "lbl|millisecs", "?"]] }],
          a: ["call|call Sound1.Vibrate", "num|200"], extra: ["call|call Sound1.Play", "num|20000"],
          run: { text: "📳 бззз", fx: "vibrate" }, why: "Vibrate — у шухляді Sound1. 200 мс — коротке «дзь».",
          variants: [
            { q: "Збери: LongClick на «Старт» — вібрація 300.", prog: [{ when: "when ButtonStart.LongClick", rows: [["?", "lbl|millisecs", "?"]] }],
              a: ["call|call Sound1.Vibrate", "num|300"], extra: ["call|call Sound1.Stop", "num|3"], run: { text: "📳 бзз", fx: "vibrate" }, why: "LongClick — довге натискання. 300 мс — коротка вібрація." }
          ] },
        { t: "quiz", id: "mob6r-9-e", q: "Що на екрані після запуску? У Designer Label1 — «Привіт».", blocks: [{ when: "when Button1.Click", rows: [["set|set Label1.Text to", "text|\"Мяу!\""]] }],
          options: ["Привіт", "Мяу!", "Порожньо", "Label1"], a: 0, why: "Напис на старті задає Designer. Кнопку ще не натискали.",
          variants: [
            { q: "У Designer Label1 — «Привіт». Натиснули Button1. Що на екрані?", options: ["Мяу!", "Привіт", "Привіт Мяу!", "Порожньо"], a: 0, why: "set Label1.Text замінює старий текст новим." }
          ] },
        { t: "bugline", id: "mob6r-9-f", q: "Персонаж зник з полотна 300 × 300. Тапни рядок з помилкою.",
          lines: [["event|when ImageSprite1.Touched do"], ["set|set Label1.Text to", "text|\"Влучив!\""], ["call|call ImageSprite1.MoveTo", "lbl|x", "num|400", "lbl|y", "num|100"]], a: 2,
          why: "X 400 — за краєм полотна. Найбільше 220.",
          variants: [
            { q: "Картинка не змінюється. У Media — me2.png. Тапни рядок з помилкою.",
              lines: [["event|when ButtonSiurpryz.Click do"], ["set|set Image1.Picture to", "text|\"Me2.png\""], ["call|call Sound2.Play"]], a: 1,
              why: "Велика літера: має бути me2.png, літера в літеру." }
          ] },
        { t: "build", id: "mob6r-9-boss", boss: true, q: "Бос! Дотик: напис «Влучив!» і стрибок у X 150, Y 100.",
          prog: [{ when: "?", rows: [["?", "?"], ["?", "lbl|x", "num|150", "lbl|y", "num|100"]] }],
          a: ["event|when ImageSprite1.Touched", "set|set Label1.Text to", "text|\"Влучив!\"", "call|call ImageSprite1.MoveTo"],
          extra: ["event|when Screen1.Initialize", "set|set ImageSprite1.X to", "text|\"Бали: 0\""],
          run: { text: "Влучив! 🦘" }, why: "Подія спрайта, у ній дві дії згори вниз: напис і MoveTo." }
      ]
    },
    // ---------- 10 · знайди помилку ----------
    {
      id: "mob6r-10", title: "Пошук поломок", lessons: "уроки 3–10",
      items: [
        { t: "learn", text: "Щось не працює? Дивись: блок у підкові? Підкова тієї кнопки? Файл у Media і назва літера в літеру? Унизу Blocks — лічильник попереджень." },
        { t: "quiz", id: "mob6r-10-a", q: "Компонувальник «зник» — смужка. Що з ним?", options: ["Width = Automatic і всередині порожньо", "Його видалили", "Він невидимий завжди", "Забули Title"], a: 0,
          why: "Порожня коробка з Automatic схлопується. Постав Fill parent." },
        { t: "quiz", id: "mob6r-10-b", q: "Кнопки в рядку різної ширини. Як зробити однакові?", options: ["Кожній кнопці Width = Fill parent", "Кожній FontSize 40", "Видалити коробку", "Shape = rounded"], a: 0,
          why: "Fill parent кожній — і вони поділять ширину порівну.",
          variants: [
            { q: "Картинка не з'явилась. Що найімовірніше?", options: ["Файл не в Media або кирилиця в назві", "Забули Click", "Немає звуку", "Width = Fill parent"], a: 0, why: "Спершу Upload File…, назва латиницею без пробілів." }
          ] },
        { t: "quiz", id: "mob6r-10-c", q: "Тиша, а блоки правильні й Source вибрано. Що перевірити?", options: ["Звук на телефоні або гучність медіа", "Колір кнопки", "Назву проєкту", "Width"], a: 0,
          why: "Буває, що на телефоні вимкнений звук." },
        { t: "quiz", id: "mob6r-10-d", q: "Дві кнопки грають одне й те саме. Чому?", options: ["Обидві викликають Sound1", "Звук зламався", "Немає Vibrate", "Різні Title"], a: 0,
          why: "Друга кнопка має кликати Sound2 зі своїм файлом." },
        { t: "bugline", id: "mob6r-10-e", q: "Натискаю «Приспати» (Button2), а напис угорі (Label1) не змінюється. Тапни рядок з помилкою.",
          lines: [["event|when Button2.Click do"], ["set|set Label2.Text to", "text|\"Кіт спить\""]], a: 1,
          why: "У блоці вибрано Label2, а напис угорі — Label1. Змінюють у списку на блоці.",
          variants: [
            { q: "Кнопка мовчить. Тапни рядок з помилкою.", lines: [["event|when Button1.Click do"], ["lbl|   (порожньо)"], ["call|call Sound1.Play"]], a: 2,
              why: "Фіолетовий блок лежить поза підковою — він ніколи не виконається." }
          ] },
        { t: "quiz", id: "mob6r-10-f", q: "Не встигаю прочитати повідомлення. Що змінити?", options: ["NotifierLength = Long або ShowMessageDialog", "FontSize 40", "Vibrate 3000", "Width = Fill parent"], a: 0,
          why: "Long тримає довше, а ShowMessageDialog чекає кнопку." },
        { t: "quiz", id: "mob6r-10-boss", boss: true, q: "Бос! Дотик не працює, персонаж — ImageSprite1. Що найімовірніше?", options: ["Підкова іншого спрайта", "Полотно завелике", "Немає Media", "Title не той"], a: 0,
          why: "Перевір підкову: має бути when ImageSprite1.Touched.",
          variants: [
            { q: "Бос! Персонаж обрізаний. Що перевірити?", options: ["Висоту полотна і чи X/Y не за краєм", "Звук", "Notifier", "Назву проєкту"], a: 0, why: "Полотно замале або X/Y за краєм." }
          ] }
      ]
    }
  ]
};
