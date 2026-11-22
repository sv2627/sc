// 6 клас · Мобільна розробка (A+, App Inventor) · I семестр — уроки 1–6, 9–11 (7–8 — міні-проєкт).
// Пробна версія: відповіді відкриті. Блоки: "вид|текст", види — event set text num call log col var get.
(window.GAMES = window.GAMES || {}).mob6 = {
  id: "mob6", classes: ["6-aik"],
  course: "Мобільна · 6 клас", short: "AI", color: "green",
  sector: "Сектор 1 · Дрони",
  about: "Ремонтні дрони станції працюють на App Inventor. Налаштуй їм екрани, події й звуки.",
  levels: [
    {
      id: "mob6-1", title: "Конструктор екрана", lessons: "уроки 1–3",
      items: [
        { t: "learn", text: "Компонент — це річ: Button, Label, Image. Властивість — яка вона: Text, FontSize, Width. Designer — що видно, Blocks — що відбувається." },
        { t: "quiz", id: "mob6-1-a", q: "Що таке властивість (property)?", options: ["Яка річ: текст, колір, розмір", "Сама річ: кнопка чи напис", "Команда для телефона", "Файл з картинкою"], a: 0, why: "Компонент — це річ. Властивість — яка вона." , variants: [{ q: "Що таке компонент?", options: ["Річ на екрані: кнопка, напис, картинка", "Колір тексту", "Розмір шрифту", "Назва проєкту"], a: 0, why: "Компонент — річ. Властивість — яка вона." }] },
        { t: "quiz", id: "mob6-1-b", q: "Яка назва проєкту правильна?", options: ["HelloApp", "Мій застосунок", "hello app", "Привіт1"], a: 0, why: "Назва — латиницею, без пробілів: літери, цифри, _." , variants: [{ q: "Яка назва проєкту правильна?", options: ["Moya Gra", "MoyaGra", "моя_гра", "1Gra"], a: 1, why: "Латиницею, без пробілів, починається з літери." }] },
        { t: "quiz", id: "mob6-1-c", q: "Компонент показує текст, але його не натискають. Це…", options: ["Label", "Button", "TextBox", "Notifier"], a: 0, why: "Label — напис. Його не натискають, тож і подій у нього немає." , variants: [{ q: "Компонент, на який натискають. Це…", options: ["Button", "Label", "Image", "Notifier"], a: 0, why: "Button — кнопка, у неї є події." }] },
        { t: "quiz", id: "mob6-1-d", q: "Треба поставити 3 кнопки в рядок. Що взяти?", options: ["HorizontalArrangement", "VerticalArrangement", "Label", "Image"], a: 0, why: "Horizontal — у рядок, Vertical — у стовпчик. Кнопки кладемо всередину коробки." , variants: [{ q: "Треба поставити 3 кнопки стовпчиком. Що взяти?", options: ["HorizontalArrangement", "VerticalArrangement", "Label", "Image"], a: 1, why: "Vertical — у стовпчик, Horizontal — у рядок." }] },
        { t: "quiz", id: "mob6-1-e", q: "Width = Fill parent означає…", options: ["Уся ширина коробки, де лежить компонент", "Уся ширина екрана, завжди", "Скільки треба для тексту", "Рівно 100 пікселів"], a: 0, why: "Parent — «батько», коробка, всередині якої компонент." , variants: [{ q: "Width = Automatic означає…", options: ["Скільки треба для вмісту", "Уся ширина екрана", "Рівно 100 пікселів", "Нуль"], a: 0, why: "Automatic — розмір за вмістом." }] },
        { t: "quiz", id: "mob6-1-boss", boss: true, q: "Бос! Напис зник з екрана. Що могло статися?", options: ["TextColor = None або колір як у тла", "На екрані забагато кнопок", "Назва проєкту латиницею", "Телефон на зарядці"], a: 0, why: "None — прозоро. Або літери злилися з тлом." }
      ]
    },
    {
      id: "mob6-2", title: "Перша подія", lessons: "урок 4",
      items: [
        { t: "learn", text: "Жовта підкова — подія: КОЛИ це станеться. Зелений блок — дія: ВСТАНОВИ. Червоний — текст. Синій — число.",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Label1.Text to", "text|\" Кіт прокинувся! \""]] }] },
        { t: "quiz", id: "mob6-2-a", q: "Що станеться після натискання Button1?",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Label1.Text to", "text|\" Ура, працює! \""]] }],
          options: ["У Label1 з'явиться «Ура, працює!»", "Кнопка зникне", "Телефон завібрує", "Нічого"], a: 0, why: "Коли натиснули Button1 — встановити текст Label1." },
        { t: "quiz", id: "mob6-2-b", q: "Яка подія спрацьовує, коли застосунок щойно відкрився?", options: ["Screen1.Initialize", "Button1.Click", "Button1.LongClick", "Button1.TouchUp"], a: 0, why: "Initialize — старт застосунку." , variants: [{ q: "Яка подія спрацьовує, коли кнопку натиснули й відпустили?", options: ["Screen1.Initialize", "Button1.Click", "Button1.LongClick", "Label1.Click"], a: 1, why: "Click — звичайне натискання." }] },
        { t: "quiz", id: "mob6-2-c", q: "Кнопку тримають приблизно секунду. Яка подія?", options: ["LongClick", "Click", "TouchUp", "Initialize"], a: 0, why: "Click — натиснули й відпустили. LongClick — довго тримають." , variants: [{ q: "Палець щойно торкнувся кнопки. Яка подія?", options: ["TouchDown", "TouchUp", "LongClick", "Initialize"], a: 0, why: "TouchDown — торкнулися, TouchUp — відпустили." }] },
        { t: "quiz", id: "mob6-2-d", q: "У якого компонента немає подій?", options: ["Label", "Button", "Screen1"], a: 0, why: "Label не натискають — тому подій у нього немає." , variants: [{ q: "Що спрацює першим, коли застосунок відкрився?", options: ["Screen1.Initialize", "Button1.Click", "Label1.Text", "Sound1.Play"], a: 0, why: "Initialize — старт застосунку." }] },
        { t: "quiz", id: "mob6-2-e", q: "Зелений блок лежить поза підковою. Що буде?",
          blocks: [{ when: "when Button1.Click", rows: [] }, ["set|set Label1.Text to", "text|\" Привіт \""]],
          options: ["Нічого не станеться", "Спрацює одразу", "Спрацює двічі", "Телефон вимкнеться"], a: 0, why: "Дія працює тільки всередині підкови." },
        { t: "quiz", id: "mob6-2-boss", boss: true, q: "Бос! Є дві однакові підкови when Button1.Click. Що покаже App Inventor?", options: ["Червону помилку", "Обидві спрацюють по черзі", "Спрацює лише перша", "Нічого"], a: 0, why: "Дві однакові події — червоний знак помилки. Залиш одну." }
      ]
    },
    {
      id: "mob6-3", title: "Звук, картинки, повідомлення", lessons: "уроки 5–6",
      items: [
        { t: "learn", text: "Фіолетовий блок call — команда «зроби!». Sound, Player і Notifier невидимі — вони стають під телефоном.",
          blocks: [{ when: "when Button1.Click", rows: [["call|call Sound1.Play"], ["call|call Notifier1.ShowAlert notice", "text|\" Сюрприз! \""]] }] },
        { t: "quiz", id: "mob6-3-a", q: "Скільки триватиме вібрація?",
          blocks: [{ when: "when Button1.Click", rows: [["call|call Sound1.Vibrate millisecs", "num|1000"]] }],
          options: ["1 секунду", "1000 секунд", "10 секунд", "Пів секунди"], a: 0, why: "1000 мілісекунд = 1 секунда." , variants: [{ q: "Скільки триватиме вібрація?", blocks: [{ when: "when Button1.Click", rows: [["call|call Sound1.Vibrate millisecs", "num|3000"]] }], options: ["3 секунди", "3000 секунд", "30 секунд", "0,3 секунди"], a: 0, why: "3000 мілісекунд = 3 секунди." }] },
        { t: "quiz", id: "mob6-3-b", q: "Який блок запускає музику в Player?",
          options: [["call|call Player1.Start"], ["call|call Player1.Play"], ["call|call Player1.Go"], ["set|set Player1.Loop to", "log|true"]], a: 0, why: "У Player не Play, а Start." },
        { t: "quiz", id: "mob6-3-c", q: "Повідомлення має зникнути саме за 2–3 секунди. Що взяти?", options: ["ShowAlert", "ShowMessageDialog", "ShowChooseDialog", "ShowTextDialog"], a: 0, why: "ShowAlert зникає сам. ShowMessageDialog чекає на кнопку." , variants: [{ q: "Повідомлення має чекати, поки натиснуть «OK». Що взяти?", options: ["ShowMessageDialog", "ShowAlert", "Vibrate", "Start"], a: 0, why: "ShowMessageDialog чекає на кнопку." }] },
        { t: "quiz", id: "mob6-3-d", q: "У Media файл dog.png. Що написати в блоці?", options: ["\"dog.png\"", "\"Dog.png\"", "\"dog\"", "\"собака.png\""], a: 0, why: "Назва — літера в літеру, з розширенням." , variants: [{ q: "У Media файл cat.png. Що написати в блоці?", options: ["\"cat.png\"", "\"cat\"", "\"Cat.png\"", "\"кіт.png\""], a: 0, why: "Назва — літера в літеру, з розширенням." }] },
        { t: "quiz", id: "mob6-3-e", q: "Який блок сховає картинку?",
          options: [["set|set Image1.Visible to", "log|false"], ["set|set Image1.Visible to", "log|true"], ["call|call Sound1.Stop"], ["set|set Label1.Text to", "text|\" \""]], a: 0, why: "Visible = false — не видно." , variants: [{ q: "Який блок покаже сховану картинку знову?", options: [["set|set Image1.Visible to", "log|true"], ["set|set Image1.Visible to", "log|false"], ["call|call Player1.Start"], ["set|set Label1.Text to", "text|\" \""]], a: 0, why: "Visible = true — видно." }] },
        { t: "quiz", id: "mob6-3-boss", boss: true, q: "Бос! Натискаю «■», а музика грає далі. Чому?",
          blocks: [{ when: "when Button5.Click", rows: [["call|call Sound1.Stop"]] }],
          options: ["Грає Player1, а зупиняємо Sound1", "Треба натиснути двічі", "На телефоні вимкнений звук", "Немає вібрації"], a: 0, why: "Зупиняти треба той компонент, що грає: call Player1.Stop." }
      ]
    },
    {
      id: "mob6-4", title: "Введення тексту", lessons: "урок 9",
      items: [
        { t: "learn", text: "TextBox приймає текст, Label — показує. join склеює шматки тексту.",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Label2.Text to", "text|join", "text|\" Привіт, \"", "set|TextBox1.Text"]] }] },
        { t: "quiz", id: "mob6-4-a", q: "Який компонент приймає текст від людини?", options: ["TextBox", "Label", "Button", "Notifier"], a: 0, why: "Label показує, TextBox приймає." , variants: [{ q: "Який компонент показує текст, але не приймає?", options: ["Label", "TextBox", "Button", "Player"], a: 0, why: "Label показує, TextBox приймає." }] },
        { t: "quiz", id: "mob6-4-b", q: "У полі написали «Оля». Що буде в Label2?",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Label2.Text to", "text|join", "text|\"Привіт, \"", "set|TextBox1.Text"]] }],
          options: ["Привіт, Оля", "Привіт,Оля", "Привіт, TextBox1.Text", "Оля"], a: 0, why: "join склеює «Привіт, » і те, що в полі." , variants: [{ q: "У полі написали «Марс». Що буде в Label2?", blocks: [{ when: "when Button1.Click", rows: [["set|set Label2.Text to", "text|join", "text|\"Летимо на \"", "set|TextBox1.Text"]] }], options: ["Летимо на Марс", "Летимо наМарс", "Летимо на TextBox1.Text", "Марс"], a: 0, why: "join склеює «Летимо на » і текст з поля." }] },
        { t: "quiz", id: "mob6-4-c", q: "Вийшло «Привіт,Оля» — злиплося. Чому?", options: ["У тексті «Привіт,» немає пробілу", "Забули join", "Поле порожнє", "Не та кнопка"], a: 0, why: "Пробіл треба дописати в червоний блок: «Привіт, »." , variants: [{ q: "Вийшло «Мені11 років». Чому?", options: ["У «Мені » забули пробіл", "Забули join", "Поле порожнє", "Немає кнопки"], a: 0, why: "Пробіл дописуємо всередину червоного блоку." }] },
        { t: "quiz", id: "mob6-4-d", q: "Скільки дасть length для «Оля Ко»?", options: ["6", "5", "2", "7"], a: 0, why: "Пробіл теж знак: О-л-я-пробіл-К-о = 6." , variants: [{ q: "Скільки дасть length для «Ми»?", options: ["2", "1", "3", "0"], a: 0, why: "Дві літери — 2." }] },
        { t: "quiz", id: "mob6-4-e", q: "Як зробити клавіатуру тільки з цифрами?", options: ["NumbersOnly", "Hint", "FontSize", "Width"], a: 0, why: "NumbersOnly — клавіатура з цифрами. Hint — бліда підказка." , variants: [{ q: "Як показати в порожньому полі бліду підказку «Твоє ім'я»?", options: ["Hint", "NumbersOnly", "FontSize", "Width"], a: 0, why: "Hint — бліда підказка в порожньому полі." }] },
        { t: "quiz", id: "mob6-4-boss", boss: true, q: "Бос! На екрані з'явилося слово «TextBox1.Text». Що не так?", options: ["Назву вписали в червоний текстовий блок", "Поле порожнє", "Забули Hint", "Немає кнопки"], a: 0, why: "Треба зелений блок TextBox1.Text з шухляди TextBox1, а не текст." }
      ]
    },
    {
      id: "mob6-5", title: "Змінна і випадковість", lessons: "уроки 10–11",
      items: [
        { t: "learn", text: "Змінна — коробка з наліпкою. initialize створює її (лежить окремо, не в підкові). get бере число, set кладе нове.",
          blocks: [["var|initialize global score to", "num|0"], { when: "when Button1.Click", rows: [["var|set global score to", "num|get global score + 1"], ["set|set Label1.Text to", "get|get global score"]] }] },
        { t: "quiz", id: "mob6-5-a", q: "Кнопку натиснули 3 рази. Що в Label1?",
          blocks: [["var|initialize global score to", "num|0"], { when: "when Button1.Click", rows: [["var|set global score to", "num|get global score + 1"], ["set|set Label1.Text to", "get|get global score"]] }],
          options: ["3", "1", "0", "4"], a: 0, why: "0+1=1, 1+1=2, 2+1=3." },
        { t: "quiz", id: "mob6-5-b", q: "Лічильник завжди показує 1. Чому?", options: ["У гнізді просто 1, а не get global score + 1", "Забули initialize", "Забагато кнопок", "Немає Label"], a: 0, why: "Щоб додавати, беремо старе число: get global score + 1." , variants: [{ q: "Після «Скинути» напис 0, а наступне натискання дає 6. Чому?", options: ["Скинули лише напис, а змінну — ні", "Забули initialize", "Немає Label", "Забагато кнопок"], a: 0, why: "Треба ще set global score to 0." }] },
        { t: "quiz", id: "mob6-5-c", q: "Почали з 0: +1, +1, +1, −1. Що в score?", options: ["2", "3", "4", "1"], a: 0, why: "1, 2, 3, а потім 3 − 1 = 2." , variants: [{ q: "Почали з 5: −1, −1, +1. Що в score?", options: ["4", "3", "5", "6"], a: 0, why: "5 − 1 = 4, 4 − 1 = 3, 3 + 1 = 4." }] },
        { t: "quiz", id: "mob6-5-d", q: "Яке число НЕ може випасти?",
          blocks: [["num|random integer from", "num|1", "lbl|to", "num|6"]],
          options: ["7", "1", "6", "3"], a: 0, why: "Обидві межі входять: від 1 до 6. Сімки немає." , variants: [{ q: "Яке число НЕ може випасти?", blocks: [["num|random integer from", "num|1", "lbl|to", "num|2"]], options: ["0", "1", "2"], a: 0, why: "Від 1 до 2: лише 1 або 2." }] },
        { t: "quiz", id: "mob6-5-e", q: "Скільки буде, якщо 2 + 3 вкладено в × 4?", options: ["20", "14", "24", "9"], a: 0, why: "Вкладений блок рахується першим: 2 + 3 = 5, 5 × 4 = 20." , variants: [{ q: "Скільки буде, якщо 10 − 4 вкладено в × 2?", options: ["12", "2", "16", "20"], a: 0, why: "Спершу 10 − 4 = 6, потім 6 × 2 = 12." }] },
        { t: "quiz", id: "mob6-5-boss", boss: true, q: "Фінальний бос! У chyslo лежить 4. Яку назву файлу склеїть join?",
          blocks: [["text|join", "text|\"dice\"", "var|get global chyslo", "text|\".png\""]],
          options: ["dice4.png", "dice.png4", "dice 4 .png", "Dice4.png"], a: 0, why: "Шматки склеюються по черзі, без пробілів: dice + 4 + .png." }
      ]
    },
    {
      id: "mob6-6", title: "Збери: перші програми", lessons: "уроки 4–6",
      items: [
        { t: "learn", text: "Тепер збираєш сам! Тапай блоки по черзі: спершу подія (жовта), потім дія і що в її гнізді. Потім ▶.",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Label1.Text to", "text|\" Привіт! \""]] }] },
        { t: "build", id: "mob6-6-a", q: "Збери: натиснули Button1 — у Label1 «Привіт!».",
          prog: [{ when: "?", rows: [["?", "?"]] }],
          a: ["event|when Button1.Click", "set|set Label1.Text to", "text|\"Привіт!\""], extra: ["event|when Screen1.Initialize", "set|set Image1.Picture to"],
          run: { text: "Привіт!" }, why: "Подія Button1.Click, дія — встановити текст Label1.",
          variants: [{ _tiles: undefined, q: "Збери: застосунок відкрився — у Label1 «Привіт!».", a: ["event|when Screen1.Initialize", "set|set Label1.Text to", "text|\"Привіт!\""], extra: ["event|when Button1.Click", "set|set Image1.Picture to"], why: "Старт застосунку — подія Screen1.Initialize." },
                     { _tiles: undefined, q: "Збери: Button1 довго тримають — у Label1 «Привіт!».", a: ["event|when Button1.LongClick", "set|set Label1.Text to", "text|\"Привіт!\""], extra: ["event|when Button1.Click", "set|set Image1.Picture to"], why: "Довге натискання — LongClick." }] },
        { t: "build", id: "mob6-6-b", q: "Збери: натиснули — телефон вібрує пів секунди.",
          prog: [{ when: "when Button1.Click", rows: [["?", "?"]] }],
          a: ["call|call Sound1.Vibrate millisecs", "num|500"], extra: ["call|call Sound1.Play", "num|5"],
          run: { text: "Бзз! (0,5 с)", fx: "vibrate" }, why: "500 мілісекунд = пів секунди.",
          variants: [{ _tiles: undefined, q: "Збери: натиснули — телефон вібрує 2 секунди.", a: ["call|call Sound1.Vibrate millisecs", "num|2000"], extra: ["call|call Sound1.Play", "num|2"], run: { text: "Бзз-з-з! (2 с)", fx: "vibrate" }, why: "2 секунди = 2000 мілісекунд." }] },
        { t: "build", id: "mob6-6-c", q: "Збери: натиснули ButtonPes — на картинці пес.",
          prog: [{ when: "?", rows: [["set|set Image1.Picture to", "?"]] }],
          a: ["event|when ButtonPes.Click", "text|\"dog.png\""], extra: ["event|when Screen1.Initialize", "text|\"dog\""],
          run: { text: "🐶 На екрані пес" }, why: "Назва файлу — повністю, з .png.",
          variants: [{ _tiles: undefined, q: "Збери: натиснули ButtonKit — на картинці кіт.", a: ["event|when ButtonKit.Click", "text|\"cat.png\""], extra: ["event|when ButtonPes.Click", "text|\"cat\""], run: { text: "🐱 На екрані кіт" } }] },
        { t: "build", id: "mob6-6-d", q: "Збери: поки тримаєш кнопку — пес, відпустив — кіт.",
          prog: [{ when: "?", rows: [["set|set Image1.Picture to", "text|\"dog.png\""]] }, { when: "?", rows: [["set|set Image1.Picture to", "text|\"cat.png\""]] }],
          a: ["event|when ButtonTrymai.TouchDown", "event|when ButtonTrymai.TouchUp"], extra: ["event|when ButtonTrymai.Click", "event|when ButtonTrymai.LongClick"],
          run: { text: "Тримаю — 🐶, відпустив — 🐱" }, why: "TouchDown — палець торкнувся, TouchUp — відпустив." },
        { t: "quiz", id: "mob6-6-e", q: "Де на екрані стають Sound, Player і Notifier?", options: ["Під телефоном — вони невидимі", "Угорі екрана", "Посередині", "Їх не можна додати"], a: 0, why: "Невидимі компоненти App Inventor кладе під телефоном.",
          variants: [{ q: "Що з цього — невидимий компонент?", options: ["Notifier", "Button", "Label", "Image"], a: 0, why: "Notifier не видно на екрані, він лише показує повідомлення." }] },
        { t: "quiz", id: "mob6-6-f", q: "Яке повідомлення чекає, поки натиснуть кнопку?", options: ["ShowMessageDialog", "ShowAlert", "Vibrate", "Speak"], a: 0, why: "ShowAlert зникає сам, ShowMessageDialog чекає на кнопку." , variants: [{ q: "Яке повідомлення зникає саме через 2–3 секунди?", options: ["ShowAlert", "ShowMessageDialog", "Speak", "Vibrate"], a: 0, why: "ShowAlert зникає сам." }] },
        { t: "build", id: "mob6-6-boss", boss: true, q: "Бос! Збери: натиснули — звук і повідомлення «Сюрприз!».",
          prog: [{ when: "when Button1.Click", rows: [["?"], ["call|call Notifier1.ShowAlert notice", "?"]] }],
          a: ["call|call Sound1.Play", "text|\"Сюрприз!\""], extra: ["call|call Player1.Stop", "num|1000"],
          run: { text: "🔔 Сюрприз!" }, why: "Спершу call Sound1.Play, потім ShowAlert з текстом." }
      ]
    },
    {
      id: "mob6-7", title: "Збери: введення тексту", lessons: "урок 9",
      items: [
        { t: "learn", text: "join склеює шматки по черзі. Червоний блок — текст як є. Зелений TextBox1.Text — те, що людина написала в полі.",
          blocks: [{ when: "when Button1.Click", rows: [["set|set Label2.Text to", "text|join", "text|\"Привіт, \"", "set|TextBox1.Text"]] }] },
        { t: "build", id: "mob6-7-a", q: "Збери: у полі «Оля» — у Label2 «Привіт, Оля».",
          prog: [{ when: "when Button1.Click", rows: [["set|set Label2.Text to", "text|join", "?", "?"]] }],
          a: ["text|\"Привіт, \"", "set|TextBox1.Text"], extra: ["text|\"TextBox1.Text\"", "text|\"Оля\""],
          run: { text: "Привіт, Оля" }, why: "Спершу «Привіт, », потім зелений TextBox1.Text — не червоний текст.",
          variants: [{ _tiles: undefined, q: "Збери: у полі «Марс» — у Label2 «Я лечу на Марс».", a: ["text|\"Я лечу на \"", "set|TextBox1.Text"], extra: ["text|\"TextBox1.Text\"", "text|\"Марс\""], run: { text: "Я лечу на Марс" } }] },
        { t: "build", id: "mob6-7-b", q: "Збери: у Label2 — скільки знаків у полі.",
          prog: [{ when: "when Button1.Click", rows: [["set|set Label2.Text to", "?", "?"]] }],
          a: ["text|length", "set|TextBox1.Text"], extra: ["text|join", "text|\"TextBox1.Text\""],
          run: { text: "3 (у полі «Оля»)" }, why: "length рахує знаки в тексті, що лежить у гнізді." },
        { t: "quiz", id: "mob6-7-c", q: "Яка властивість дає бліду підказку в порожньому полі?", options: ["Hint", "Text", "NumbersOnly", "FontSize"], a: 0, why: "Hint — бліда підказка, вона зникає, коли пишуть.",
          variants: [{ q: "Яка властивість ставить клавіатуру тільки з цифрами?", options: ["NumbersOnly", "Hint", "Text", "Width"], a: 0, why: "NumbersOnly — лише цифри." }] },
        { t: "quiz", id: "mob6-7-d", q: "Скільки дасть length для «Кіт»?", options: ["3", "2", "4", "1"], a: 0, why: "К-і-т — три знаки.",
          variants: [{ q: "Скільки дасть length для «Ми тут»?", options: ["6", "5", "4", "2"], a: 0, why: "Пробіл теж знак: М-и-пробіл-т-у-т = 6." }] },
        { t: "quiz", id: "mob6-7-e", q: "Яка різниця між Label і TextBox?", options: ["Label показує, TextBox приймає текст", "Це одне й те саме", "Label приймає, TextBox показує", "TextBox — це кнопка"], a: 0, why: "У TextBox людина пише, у Label застосунок показує." , variants: [{ q: "Куди людина пише своє ім'я?", options: ["У TextBox", "У Label", "У Button", "У Notifier"], a: 0, why: "TextBox приймає текст." }] },
        { t: "build", id: "mob6-7-boss", boss: true, q: "Бос! Збери: «Привіт, » + ім'я з поля в Label2 після натискання ButtonOk.",
          prog: [{ when: "?", rows: [["?", "text|join", "?", "?"]] }],
          a: ["event|when ButtonOk.Click", "set|set Label2.Text to", "text|\"Привіт, \"", "set|TextBox1.Text"], extra: ["set|set TextBox1.Text to", "text|\"TextBox1.Text\""],
          run: { text: "Привіт, Оля" }, why: "Подія кнопки → set Label2.Text → join «Привіт, » і TextBox1.Text." }
      ]
    },
    {
      id: "mob6-8", title: "Збери: змінна і кубик", lessons: "уроки 10–11",
      items: [
        { t: "learn", text: "initialize лежить окремо й задає старт. set кладе нове число. random integer from 1 to 6 — кубик.",
          blocks: [["var|initialize global score to", "num|0"], { when: "when ButtonKynuty.Click", rows: [["set|set Label1.Text to", "num|random integer from 1 to 6"]] }] },
        { t: "build", id: "mob6-8-a", q: "Збери лічильник: старт 0, кожне натискання +1.",
          prog: [["var|initialize global score to", "?"], { when: "when Button1.Click", rows: [["var|set global score to", "?"], ["set|set Label1.Text to", "get|get global score"]] }],
          a: ["num|0", "num|get global score + 1"], extra: ["num|1", "get|get global score"],
          run: { text: "1 → 2 → 3…" }, why: "Старт — 0. Додаємо до старого: get global score + 1.",
          variants: [{ _tiles: undefined, q: "Збери: старт 10, кожне натискання −1.", a: ["num|10", "num|get global score − 1"], extra: ["num|0", "num|get global score + 1"], run: { text: "9 → 8 → 7…" }, why: "Старт — 10. Віднімаємо від старого: get global score − 1." }] },
        { t: "build", id: "mob6-8-b", q: "Збери кубик: натиснули — число від 1 до 6.",
          prog: [{ when: "when ButtonKynuty.Click", rows: [["set|set Label1.Text to", "num|random integer from", "?", "lbl|to", "?"]] }],
          a: ["num|1", "num|6"], extra: ["num|0", "num|7"],
          run: { text: "🎲 4" }, why: "Обидві межі входять: від 1 до 6.",
          variants: [{ _tiles: undefined, q: "Збери монетку: 1 або 2.", prog: [{ when: "when ButtonMonetka.Click", rows: [["set|set Label2.Text to", "num|random integer from", "?", "lbl|to", "?"]] }], a: ["num|1", "num|2"], extra: ["num|0", "num|6"], run: { text: "🪙 2" }, why: "Два варіанти — від 1 до 2." }] },
        { t: "build", id: "mob6-8-c", q: "Збери назву картинки кубика: у chyslo 4 → dice4.png.",
          prog: [{ when: "when ButtonKynuty.Click", rows: [["set|set Image1.Picture to", "text|join", "?", "var|get global chyslo", "?"]] }],
          a: ["text|\"dice\"", "text|\".png\""], extra: ["text|\"dice.png\"", "text|\"png\""],
          run: { text: "🎲 dice4.png" }, why: "join склеює по черзі: dice + 4 + .png." },
        { t: "quiz", id: "mob6-8-d", q: "Скільки буде 10 − 2, вкладене в × 3?", options: ["24", "4", "16", "30"], a: 0, why: "Вкладений блок рахується першим: 10 − 2 = 8, потім 8 × 3 = 24.",
          variants: [{ q: "Скільки буде 3 × 4, вкладене в 2 + ?", options: ["14", "20", "24", "9"], a: 0, why: "Спершу 3 × 4 = 12, потім 2 + 12 = 14." }] },
        { t: "quiz", id: "mob6-8-e", q: "Скільки дасть 7 / 2 у App Inventor?", options: ["3.5", "3", "4", "3,5"], a: 0, why: "Ділення дає дріб з крапкою: 3.5." , variants: [{ q: "Скільки дасть 9 / 2 у App Inventor?", options: ["4.5", "4", "5", "4,5"], a: 0, why: "Ділення дає дріб з крапкою: 4.5." }] },
        { t: "quiz", id: "mob6-8-f", q: "Де лежить блок initialize global?", options: ["Окремо, не в підкові", "У підкові Click", "У Designer", "Під телефоном"], a: 0, why: "initialize створює змінну один раз — він лежить окремо." , variants: [{ q: "Що робить блок get global score?", options: ["Бере число зі змінної", "Кладе нове число", "Створює змінну", "Скидає в 0"], a: 0, why: "get — взяти, set — покласти, initialize — створити." }] },
        { t: "build", id: "mob6-8-boss", boss: true, q: "Бос! Збери кнопку «Скинути»: бали 0 і напис «Бали: 0».",
          prog: [{ when: "?", rows: [["var|set global score to", "?"], ["set|set Label1.Text to", "?"]] }],
          a: ["event|when ButtonReset.Click", "num|0", "text|\"Бали: 0\""], extra: ["event|when Screen1.Initialize", "num|1", "text|\"Бали\""],
          run: { text: "Бали: 0" }, why: "Скидаємо і змінну, і напис — інакше наступне натискання дасть старе число + 1." }
      ]
    },
    {
      id: "mob6-9", title: "Повторення: дрони", lessons: "уроки 1–6", pick: 6,
      items: [
        { t: "learn", text: "Повторюємо Designer і перші події. Щоразу інші завдання!" },
        { t: "quiz", id: "mob6-9-a", q: "Де додаємо кнопки й написи?", options: ["У Designer", "У Blocks", "У Media", "У Companion"], a: 0, why: "Designer — що видно, Blocks — що відбувається." },
        { t: "quiz", id: "mob6-9-b", q: "Кнопки треба поставити стовпчиком. Що взяти?", options: ["VerticalArrangement", "HorizontalArrangement", "Label", "Notifier"], a: 0, why: "Vertical — у стовпчик." },
        { t: "quiz", id: "mob6-9-c", q: "Як файл картинки потрапляє в проєкт?", options: ["Media → Upload File", "Blocks → Text", "Screen1 → Title", "Designer → Label"], a: 0, why: "Файли завантажуємо в Media." },
        { t: "quiz", id: "mob6-9-d", q: "Як побачити застосунок на телефоні?", options: ["MIT AI2 Companion і QR-код", "Надіслати фото екрана", "Зберегти в Media", "Натиснути Blocks"], a: 0, why: "Companion на телефоні + QR-код з Connect → AI Companion." },
        { t: "quiz", id: "mob6-9-e", q: "Яка подія — натиснули й відпустили?", options: ["Click", "LongClick", "Initialize", "TouchDown"], a: 0, why: "Click — звичайне натискання." },
        { t: "quiz", id: "mob6-9-f", q: "Який колір у блоку-події?", options: ["Жовтий", "Зелений", "Червоний", "Синій"], a: 0, why: "Подія — жовта підкова. Зелений — встановити, червоний — текст, синій — число." },
        { t: "quiz", id: "mob6-9-g", q: "Музика має грати по колу. Що ввімкнути в Player?", options: ["Loop", "Visible", "Hint", "NumbersOnly"], a: 0, why: "Loop — повторювати по колу." },
        { t: "quiz", id: "mob6-9-h", q: "Який компонент вимовляє текст уголос?", options: ["TextToSpeech", "Sound", "Notifier", "Label"], a: 0, why: "TextToSpeech1.Speak вимовляє текст." },
        { t: "quiz", id: "mob6-9-i", q: "Що робить set Image1.Visible to true?", options: ["Показує картинку", "Ховає картинку", "Міняє файл", "Вібрує"], a: 0, why: "true — видно, false — сховано." },
        { t: "quiz", id: "mob6-9-boss", boss: true, q: "Бос! Яка назва компонента зручніша в блоках?", options: ["ButtonPes", "Button1", "Кнопка пес", "button pes 1"], a: 0, why: "Назва латиницею, що каже, яка це кнопка, — ButtonPes." }
      ]
    },
    {
      id: "mob6-10", title: "Повторення: збери все", lessons: "уроки 4–11", pick: 4,
      items: [
        { t: "learn", text: "Фінал сектору: збираєш програми з усього семестру. Щоразу інший набір!" },
        { t: "build", id: "mob6-10-a", q: "Збери: натиснули Button2 — Label1 стає «Готово».",
          prog: [{ when: "?", rows: [["?", "?"]] }],
          a: ["event|when Button2.Click", "set|set Label1.Text to", "text|\"Готово\""], extra: ["event|when Button1.Click", "set|set Label2.Text to"],
          run: { text: "Готово" }, why: "Button2, а не Button1; Label1, а не Label2." },
        { t: "build", id: "mob6-10-b", q: "Збери: натиснули — сховати картинку.",
          prog: [{ when: "when Button1.Click", rows: [["set|set Image1.Visible to", "?"]] }],
          a: ["log|false"], extra: ["log|true", "text|\"false\""],
          run: { text: "Картинки не видно" }, why: "Visible = false — сховати. Зелений логічний блок, не текст." },
        { t: "build", id: "mob6-10-c", q: "Збери: натиснули — музика в Player1 вмикається.",
          prog: [{ when: "when Button1.Click", rows: [["?"]] }],
          a: ["call|call Player1.Start"], extra: ["call|call Player1.Stop", "call|call Sound1.Play"],
          run: { text: "🎵 Грає музика" }, why: "У Player команда Start." },
        { t: "build", id: "mob6-10-d", q: "Збери: «Мені » + текст з поля + « років».",
          prog: [{ when: "when Button1.Click", rows: [["set|set Label1.Text to", "text|join", "?", "?", "?"]] }],
          a: ["text|\"Мені \"", "set|TextBox1.Text", "text|\" років\""], extra: ["text|\"TextBox1.Text\""],
          run: { text: "Мені 11 років" }, why: "Три шматки по черзі, пробіли — всередині лапок." },
        { t: "build", id: "mob6-10-e", q: "Збери: кожне натискання +2 бали.",
          prog: [{ when: "when Button1.Click", rows: [["var|set global score to", "?"], ["set|set Label1.Text to", "?"]] }],
          a: ["num|get global score + 2", "get|get global score"], extra: ["num|2", "num|get global score + 1"],
          run: { text: "2 → 4 → 6…" }, why: "Додаємо до старого числа: get global score + 2." },
        { t: "build", id: "mob6-10-boss", boss: true, q: "Бос! Збери: застосунок відкрився — у Label1 «Бали: 0».",
          prog: [{ when: "?", rows: [["?", "?"]] }],
          a: ["event|when Screen1.Initialize", "set|set Label1.Text to", "text|\"Бали: 0\""], extra: ["event|when Button1.Click", "set|set Label1.FontSize to"],
          run: { text: "Бали: 0" }, why: "Старт застосунку — Screen1.Initialize." }
      ]
    }

  ]
};
