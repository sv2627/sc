// 6 клас · IT-англійська (A+) · I семестр — уроки 1–9 (07.09–16.11.2026).
// Англійські слова — лише зі слайдів «Словник» (Four words / Word bank / Words of this lesson / Words in use) цих уроків.
// Пробна версія: відповіді лежать тут відкрито. У робочій версії їх замінять хеші (див. дизайн §6).
//
// Типи завдань: learn · quiz (a — індекс правильного) · bugline (тапнути рядок з помилкою; a — індекс рядка).
// variants — інші версії того самого завдання: при повторі рівня випадає одна з них.
(function () {
  const Q = (id, q, options, a, why, variants) => ({ t: "quiz", id, q, options, a, why, ...(variants ? { variants } : {}) });
  const V = (q, options, a, why) => ({ q, options, a, why });
  const P = "Тапни пару з помилкою.";
  const B = (id, lines, a, why, variants, boss) => ({ t: "bugline", id, q: boss ? "Бос! " + P : P, lines, a, why, ...(boss ? { boss: true } : {}), ...(variants ? { variants } : {}) });
  const BV = (lines, a, why) => ({ lines, a, why });
  const boss = o => ({ ...o, boss: true, q: o.q.startsWith("Бос!") ? o.q : "Бос! " + o.q });

  (window.GAMES = window.GAMES || {}).en6 = {
    id: "en6", classes: ["6-aik"],
    course: "IT-англійська · 6 клас", short: "EN", color: "pink",
    sector: "Сектор 1 · Радіозвʼязок",
    about: "Радіо станції говорить англійською. Згадай слова уроків — і Земля знову нас почує.",
    levels: [
      {
        id: "en6-1", title: "Порядок і помилки", lessons: "урок 1",
        items: [
          { t: "learn", text: "sequence — кроки в точному порядку. logic error — код працює, але не так. broadcast — розіслати повідомлення (message). when I receive — коли я отримую." },
          Q("en6-1-a", "Переклади: sequence", ["послідовність", "повідомлення", "критерії", "помилка"], 0, "sequence — послідовність: кроки в точному порядку.", [
            V("Переклади: message", ["повідомлення", "послідовність", "персонаж у Scratch", "критерії"], 0, "message — повідомлення."),
            V("Переклади: criteria", ["критерії", "повідомлення", "послідовність", "запустити"], 0, "criteria — критерії: за чим перевіряємо.")
          ]),
          Q("en6-1-b", "Як англійською «логічна помилка»?", ["logic error", "sequence", "sprite", "message"], 0, "logic error — логічна помилка.", [
            V("Як англійською «розіслати повідомлення»?", ["broadcast", "to evaluate", "sprite", "criteria"], 0, "broadcast — розіслати повідомлення."),
            V("Як англійською «оцінити, перевірити»?", ["to evaluate", "to trigger", "broadcast", "sequence"], 0, "to evaluate — оцінити, перевірити.")
          ]),
          Q("en6-1-c", "Що таке logic error?", ["Код працює, але не так", "Кроки в точному порядку", "Персонаж у Scratch", "Розіслати повідомлення"], 0, "Програма запускається, але робить не те, що треба, — це logic error."),
          Q("en6-1-d", "Переклади: sprite", ["персонаж у Scratch", "повідомлення", "критерії", "послідовність"], 0, "sprite — персонаж у Scratch.", [
            V("Переклади: to trigger", ["запустити, спричинити", "оцінити, перевірити", "розіслати повідомлення", "коли я отримую"], 0, "to trigger — запустити, спричинити."),
            V("Переклади: when I receive", ["коли я отримую", "розіслати повідомлення", "запустити", "персонаж у Scratch"], 0, "when I receive — коли я отримую (повідомлення).")
          ]),
          Q("en6-1-e", "Спрайт отримує повідомлення. Який блок у нього вгорі?", ["when I receive", "broadcast", "sequence", "criteria"], 0, "Хто отримує — починає з when I receive.", [
            V("Яким блоком спрайт розсилає повідомлення?", ["broadcast", "when I receive", "sprite", "logic error"], 0, "broadcast — розіслати повідомлення всім спрайтам.")
          ]),
          B("en6-1-f", ["sequence — послідовність", "sprite — персонаж у Scratch", "message — критерії", "to evaluate — оцінити, перевірити"], 2, "message — це повідомлення. Критерії — criteria.", [
            BV(["logic error — логічна помилка", "broadcast — коли я отримую", "criteria — критерії", "message — повідомлення"], 1, "broadcast — розіслати повідомлення. «Коли я отримую» — when I receive."),
            BV(["to trigger — запустити, спричинити", "sequence — повідомлення", "sprite — персонаж у Scratch", "criteria — критерії"], 1, "sequence — послідовність.")
          ]),
          B("en6-1-boss", ["sequence — послідовність", "logic error — логічна помилка", "when I receive — коли я отримую", "to evaluate — розіслати повідомлення", "criteria — критерії"], 3, "to evaluate — оцінити, перевірити. Розіслати повідомлення — broadcast.", null, true)
        ]
      },
      {
        id: "en6-2", title: "Будівельні блоки", lessons: "урок 2",
        items: [
          { t: "learn", text: "construct — будівельний блок програми. selection — вибір шляху. iteration — повторення. variable — зберігає інформацію. operator — знак дії або порівняння." },
          Q("en6-2-a", "Переклади: iteration", ["повторення, цикл", "розгалуження", "взаємодія", "змінна"], 0, "iteration — повторення: те саме кілька разів.", [
            V("Переклади: selection", ["розгалуження, вибір шляху", "повторення", "оператор", "змінна"], 0, "selection — вибір між шляхами."),
            V("Переклади: interaction", ["взаємодія, реакція", "повторення", "розгалуження", "оператор"], 0, "interaction — взаємодія, реакція.")
          ]),
          Q("en6-2-b", "Як англійською «змінна»?", ["variable", "operator", "iteration", "construct"], 0, "variable — змінна: зберігає інформацію.", [
            V("Як англійською «оператор»?", ["operator", "variable", "selection", "interaction"], 0, "operator — знак дії або порівняння."),
            V("Як англійською «будівельний блок»?", ["building block", "vocabulary", "operator", "selection"], 0, "building block — будівельний блок.")
          ]),
          Q("en6-2-c", "Знаки + і > — це…", ["operator", "variable", "iteration", "selection"], 0, "Знак дії (+) або порівняння (>) — operator."),
          Q("en6-2-d", "Програма вибирає один із двох шляхів. Що це?", ["selection", "iteration", "variable", "operator"], 0, "Вибір шляху — selection.", [
            V("Програма робить те саме 10 разів. Що це?", ["iteration", "selection", "variable", "operator"], 0, "Повторення — iteration."),
            V("Програма зберігає рахунок гри. Де?", ["variable", "operator", "selection", "iteration"], 0, "Інформацію зберігає variable — змінна.")
          ]),
          Q("en6-2-e", "Переклади: construct", ["конструкція, будівельний блок", "змінна", "оператор", "словниковий запас"], 0, "construct — конструкція, будівельний блок програми.", [
            V("Переклади: vocabulary", ["словниковий запас", "конструкція", "взаємодія", "повторення"], 0, "vocabulary — словниковий запас.")
          ]),
          B("en6-2-f", ["variable — змінна", "iteration — розгалуження", "operator — оператор", "construct — конструкція"], 1, "iteration — повторення. Розгалуження — selection.", [
            BV(["selection — розгалуження", "interaction — взаємодія", "operator — змінна", "building block — будівельний блок"], 2, "operator — оператор. Змінна — variable."),
            BV(["construct — конструкція", "variable — повторення", "selection — вибір шляху", "operator — оператор"], 1, "variable — змінна. Повторення — iteration.")
          ]),
          boss(Q("en6-2-boss", "Що зберігає інформацію в програмі?", ["variable", "operator", "selection", "iteration"], 0, "variable — змінна, вона зберігає інформацію."))
        ]
      },
      {
        id: "en6-3", title: "Процедура", lessons: "урок 3",
        items: [
          { t: "learn", text: "procedure — шматок коду (section of code), який можна вставити багато разів (many times). Так ми заощаджуємо час (to save time). algorithm — набір точних інструкцій." },
          Q("en6-3-a", "Переклади: procedure", ["процедура", "алгоритм", "інструкції", "конструкція"], 0, "procedure — процедура, шостий конструкт.", [
            V("Переклади: algorithm", ["алгоритм", "процедура", "шматок коду", "інструкції"], 0, "algorithm — набір точних інструкцій."),
            V("Переклади: instructions", ["інструкції, кроки", "алгоритм", "процедура", "повернутися"], 0, "instructions — інструкції, кроки.")
          ]),
          Q("en6-3-b", "Як англійською «заощадити час»?", ["to save time", "to return", "to include", "many times"], 0, "to save time — заощадити час.", [
            V("Як англійською «повернутися»?", ["to return", "to include", "to save time", "many times"], 0, "to return — повернутися."),
            V("Як англійською «багато разів»?", ["many times", "to return", "section of code", "school day"], 0, "many times — багато разів.")
          ]),
          Q("en6-3-c", "Встав слово: A procedure is a specific ___ of code.", ["section", "algorithm", "construct", "school day"], 0, "section of code — шматок коду.", [
            V("Встав слово: We can use procedures to ___ time.", ["save", "return", "include", "ask"], 0, "to save time — заощадити час."),
            V("Встав слово: Imagine your school day as one long ___.", ["algorithm", "procedure", "section", "construct"], 0, "Шкільний день — один довгий algorithm.")
          ]),
          Q("en6-3-d", "Навіщо потрібна procedure?", ["Щоб не писати той самий код багато разів", "Щоб змінити колір фону", "Щоб розіслати повідомлення", "Щоб зберегти рахунок"], 0, "Процедуру пишемо раз, а використовуємо many times — це to save time."),
          Q("en6-3-e", "Переклади: to include", ["включити, вставити", "повернутися", "заощадити час", "багато разів"], 0, "to include — включити, вставити.", [
            V("Переклади: section of code", ["шматок коду", "алгоритм", "інструкції", "шкільний день"], 0, "section of code — шматок коду.")
          ]),
          B("en6-3-f", ["procedure — процедура", "algorithm — алгоритм", "to return — заощадити час", "many times — багато разів"], 2, "to return — повернутися. Заощадити час — to save time.", [
            BV(["instructions — інструкції", "to include — повернутися", "section of code — шматок коду", "algorithm — алгоритм"], 1, "to include — включити, вставити."),
            BV(["to save time — заощадити час", "procedure — алгоритм", "many times — багато разів", "to return — повернутися"], 1, "procedure — процедура. Алгоритм — algorithm.")
          ]),
          boss(Q("en6-3-boss", "Встав слово: They would ___ to this small section of code.", ["return", "save", "include", "evaluate"], 0, "to return — повернутися до шматка коду, коли він знову потрібен."))
        ]
      },
      {
        id: "en6-4", title: "Типи даних", lessons: "урок 4",
        items: [
          { t: "learn", text: "Character — одна літера. String — слова, текст. Integer — ціле число (whole number). Дані (data) зберігає (to store) змінна (variable)." },
          Q("en6-4-a", "Який тип даних: 25", ["Integer", "String", "Character"], 0, "25 — ціле число, whole number. Це Integer.", [
            V("Який тип даних: Max", ["String", "Integer", "Character"], 0, "Max — слово, текст. Це String."),
            V("Який тип даних: B", ["Character", "String", "Integer"], 0, "Одна літера — Character."),
            V("Який тип даних: 0", ["Integer", "Character", "String"], 0, "0 — ціле число. Це Integer.")
          ]),
          Q("en6-4-b", "Переклади: whole number", ["ціле число", "рахунок", "літера", "текст"], 0, "whole number — ціле число.", [
            V("Переклади: user name", ["ім'я користувача", "користувач", "ввести", "рахунок"], 0, "user name — ім'я користувача."),
            V("Переклади: to enter", ["ввести", "зберігати", "рахунок", "користувач"], 0, "to enter — ввести.")
          ]),
          Q("en6-4-c", "Як англійською «зберігати»?", ["to store", "to enter", "data", "score"], 0, "to store — зберігати.", [
            V("Як англійською «тип даних»?", ["data type", "data structure", "variable", "whole number"], 0, "data type — тип даних."),
            V("Як англійською «користувач»?", ["user", "score", "letter", "text"], 0, "user — користувач.")
          ]),
          Q("en6-4-d", "Встав слово: Whole numbers are known as ___.", ["Integers", "Strings", "Characters", "letters"], 0, "Цілі числа — Integers.", [
            V("Встав слово: Individual letters are known as ___.", ["Characters", "Integers", "Strings", "scores"], 0, "Окремі літери — Characters."),
            V("Встав слово: Sequences of letters, words or text are known as ___.", ["Strings", "Characters", "Integers", "users"], 0, "Слова й текст — Strings.")
          ]),
          Q("en6-4-e", "Рахунок гри (score). Який тип даних?", ["Integer", "String", "Character"], 0, "The score is represented by an integer.", [
            V("Ім'я користувача (user name). Який тип даних?", ["String", "Integer", "Character"], 0, "Ім'я — слово. Store the name in a String variable."),
            V("Відповідь A, B або C. Який тип даних?", ["Character", "Integer", "String"], 0, "Одна літера — Character.")
          ]),
          B("en6-4-f", ["25 — Integer", "Max — String", "B — Character", "text — Integer"], 3, "text — слово, це String.", [
            BV(["C — Character", "10 — String", "Anna — String", "0 — Integer"], 1, "10 — ціле число, це Integer."),
            BV(["score — рахунок", "letter — літера", "to store — ввести", "user — користувач"], 2, "to store — зберігати. Ввести — to enter.")
          ]),
          B("en6-4-boss", ["data — дані", "variable — змінна", "Integer — ціле число", "String — одна літера", "user — користувач"], 3, "String — слова, текст. Одна літера — Character.", null, true)
        ]
      },
      {
        id: "en6-5", title: "Прототип і рахунок", lessons: "урок 5",
        items: [
          { t: "learn", text: "prototype — маленька пробна частина програми. prompt — запитання-підказка для користувача. to increase — збільшити, to decrease — зменшити." },
          Q("en6-5-a", "Переклади: prototype", ["прототип", "подія", "рішення", "відповідь"], 0, "prototype — прототип, маленька пробна частина програми.", [
            V("Переклади: prompt", ["запитання-підказка", "відповідь", "подія", "проблема"], 0, "prompt — запитання-підказка, яке програма показує користувачу."),
            V("Переклади: event", ["подія", "відповідь", "рішення", "прототип"], 0, "event — подія.")
          ]),
          Q("en6-5-b", "Як англійською «збільшити»?", ["to increase", "to decrease", "to set", "to test"], 0, "to increase — збільшити.", [
            V("Як англійською «зменшити»?", ["to decrease", "to increase", "to ask", "to work"], 0, "to decrease — зменшити."),
            V("Як англійською «рішення»?", ["solution", "problem", "answer", "event"], 0, "solution — рішення.")
          ]),
          Q("en6-5-c", "Рахунок 10. Подія зменшує його на 1 (to decrease). Скільки стало?", ["9", "11", "10", "0"], 0, "10 − 1 = 9.", [
            V("Рахунок 0. Тричі to increase на 1. Скільки стало?", ["3", "1", "0", "−3"], 0, "0 + 1 + 1 + 1 = 3."),
            V("starting score — 10. Двічі to decrease на 1. Скільки стало?", ["8", "12", "9", "10"], 0, "10 − 1 − 1 = 8.")
          ]),
          Q("en6-5-d", "Встав слово: A ___ invites a user to enter their name.", ["prompt", "score", "event", "solution"], 0, "prompt — запитання-підказка: просить ввести ім'я.", [
            V("Встав слово: Set the player's ___ to 0 at the start of the game.", ["score", "prompt", "answer", "problem"], 0, "На старті рахунок (score) — 0."),
            V("Встав слово: Test these to check that they ___.", ["work", "set", "ask", "decrease"], 0, "to work — працювати без помилок.")
          ]),
          Q("en6-5-e", "Переклади: negative score", ["відʼємний рахунок", "початковий рахунок", "інтерфейс користувача", "відповідь"], 0, "negative score — рахунок менше нуля.", [
            V("Переклади: user interface", ["інтерфейс користувача", "ім'я користувача", "запитання-підказка", "подія"], 0, "user interface — інтерфейс користувача."),
            V("Переклади: starting score", ["початковий рахунок", "відʼємний рахунок", "рішення", "відповідь"], 0, "starting score — початковий рахунок.")
          ]),
          B("en6-5-f", ["to test — перевіряти", "answer — відповідь", "to set — збільшити", "problem — проблема"], 2, "to set — встановити (задати). Збільшити — to increase.", [
            BV(["event — подія", "solution — проблема", "to ask — запитати", "prompt — запитання-підказка"], 1, "solution — рішення. Проблема — problem."),
            BV(["prototype — прототип", "to work — працювати", "to decrease — збільшити", "answer — відповідь"], 2, "to decrease — зменшити.")
          ]),
          boss(Q("en6-5-boss", "Рахунок 0. Неправильна відповідь — to decrease на 1. Що вийде?", ["−1, negative score", "1, starting score", "0, starting score", "10, negative score"], 0, "0 − 1 = −1. Рахунок менше нуля — negative score."))
        ]
      },
      {
        id: "en6-6", title: "Історія з пропусками", lessons: "урок 6",
        items: [
          { t: "learn", text: "Mad Libs — історія з пропусками. Програма питає слова й вставляє їх у шаблон (template). to join — зʼєднати шматки в один рядок. join не ставить пробілу (space) сам.", code: "join \"pen \" \"down\"  →  pen down" },
          Q("en6-6-a", "Переклади: template", ["шаблон", "іменник", "місце", "відгук"], 0, "template — шаблон.", [
            V("Переклади: noun", ["іменник", "шаблон", "гравець", "місце"], 0, "noun — іменник."),
            V("Переклади: checklist", ["список для перевірки", "план проєкту", "вимоги", "відгук"], 0, "checklist — список для перевірки.")
          ]),
          Q("en6-6-b", "Як англійською «пробіл»?", ["space", "place", "noun", "player"], 0, "space — пробіл, порожнє місце між словами.", [
            V("Як англійською «показати (на екрані)»?", ["to display", "to join", "to welcome", "to initialise"], 0, "to display — показати на екрані."),
            V("Як англійською «гравець»?", ["player", "place", "noun", "template"], 0, "player — гравець.")
          ]),
          Q("en6-6-c", "join \"pen\" \"down\". Що на екрані?", ["pendown", "pen down", "pen", "down pen"], 0, "join не ставить пробілу сам — слова злипаються.", [
            V("join \"pen \" \"down\". Що на екрані?", ["pen down", "pendown", "down pen", "pen"], 0, "Пробіл стоїть у лапках — тому слова не злиплися."),
            V("join \"user\" \"name\". Що на екрані?", ["username", "user name", "name user", "user"], 0, "Пробілу в лапках немає — слова злиплися.")
          ]),
          Q("en6-6-d", "Переклади: requirements", ["вимоги", "відгук", "критерії", "шаблон"], 0, "requirements — вимоги.", [
            V("Переклади: feedback", ["відгук", "вимоги", "привітати", "завершений"], 0, "feedback — відгук."),
            V("Переклади: to welcome", ["привітати", "показати", "зʼєднати", "підготувати на старті"], 0, "to welcome — привітати.")
          ]),
          Q("en6-6-e", "Як англійською «план проєкту»?", ["project plan", "checklist", "template", "feedback"], 0, "project plan — список завдань, які треба виконати.", [
            V("Як англійською «унікальна назва»?", ["unique name", "user name", "player", "template"], 0, "unique name — унікальна назва."),
            V("Як англійською «завершений»?", ["complete", "criteria", "space", "place"], 0, "complete — завершений.")
          ]),
          B("en6-6-f", ["noun — іменник", "place — місце", "to join — привітати", "space — пробіл"], 2, "to join — зʼєднати. Привітати — to welcome.", [
            BV(["template — шаблон", "player — місце", "criteria — критерії", "feedback — відгук"], 1, "player — гравець. Місце — place."),
            BV(["to display — показати", "to initialise — підготувати на старті", "checklist — іменник", "complete — завершений"], 2, "checklist — список для перевірки.")
          ]),
          boss(Q("en6-6-boss", "Один join вкладено в інший join. Скільки шматків вони зʼєднують?", ["три", "два", "один", "чотири"], 0, "Один join зʼєднує два шматки, join у join — три."))
        ]
      },
      {
        id: "en6-7", title: "Покращуємо програму", lessons: "урок 7",
        items: [
          { t: "learn", text: "to improve — покращити, enhanced — покращений. forever — завжди, без кінця. sub-routine — підпрограма, to call — викликати. evaluation — оцінювання." },
          Q("en6-7-a", "Переклади: forever", ["завжди, без кінця", "повторювати", "покращити", "передбачити"], 0, "forever — завжди, без кінця.", [
            V("Переклади: feature", ["можливість програми", "оцінювання", "підпрограма", "набір запитань"], 0, "feature — можливість програми."),
            V("Переклади: evaluation", ["оцінювання", "покращений", "план тестування", "можливість програми"], 0, "evaluation — оцінювання, перевірка, наскільки добре вийшло.")
          ]),
          Q("en6-7-b", "Як англійською «підпрограма»?", ["sub-routine", "procedure", "question set", "feature"], 0, "sub-routine — підпрограма.", [
            V("Як англійською «викликати»?", ["to call", "to repeat", "to improve", "to predict"], 0, "to call — викликати."),
            V("Як англійською «план тестування»?", ["test plan", "project plan", "question set", "checklist"], 0, "test plan — план тестування.")
          ]),
          Q("en6-7-c", "if, then, else — яка це конструкція?", ["selection", "iteration", "procedure", "variable"], 0, "Вибір шляху — selection (if, then, else).", [
            V("repeat 10 — яка це конструкція?", ["iteration", "selection", "variable", "operator"], 0, "Повторення — iteration."),
            V("forever — яка це конструкція?", ["iteration", "selection", "procedure", "operator"], 0, "forever повторює без кінця — це iteration.")
          ]),
          Q("en6-7-d", "Переклади: easy to use", ["зручний", "покращений", "завжди", "передбачити"], 0, "easy to use — зручний.", [
            V("Переклади: question set", ["набір запитань", "план тестування", "підпрограма", "оцінювання"], 0, "question set — набір запитань."),
            V("Переклади: to predict", ["передбачити", "покращити", "повторювати", "викликати"], 0, "to predict — передбачити.")
          ]),
          Q("en6-7-e", "Як англійською «повторювати»?", ["to repeat", "to improve", "to call", "forever"], 0, "to repeat — повторювати.", [
            V("Як англійською «покращити»?", ["to improve", "to repeat", "enhanced", "to predict"], 0, "to improve — покращити. enhanced — вже покращений.")
          ]),
          B("en6-7-f", ["enhanced — покращений", "to call — викликати", "feature — оцінювання", "forever — завжди"], 2, "feature — можливість програми. Оцінювання — evaluation.", [
            BV(["sub-routine — підпрограма", "to predict — повторювати", "test plan — план тестування", "easy to use — зручний"], 1, "to predict — передбачити. Повторювати — to repeat."),
            BV(["question set — набір запитань", "to improve — покращити", "evaluation — оцінювання", "to repeat — викликати"], 3, "to repeat — повторювати. Викликати — to call.")
          ]),
          B("en6-7-boss", ["iteration — повторення", "selection — вибір (if, then, else)", "procedure — процедура", "sub-routine — набір запитань", "to call — викликати"], 3, "sub-routine — підпрограма. Набір запитань — question set.", null, true)
        ]
      },
      {
        id: "en6-8", title: "Алгоритм і блок-схема", lessons: "урок 8",
        items: [
          { t: "learn", text: "decomposition — розбити велику задачу на менші частини. flowchart — блок-схема: овал — початок і кінець, прямокутник — крок (step), ромб — рішення (decision)." },
          Q("en6-8-a", "Переклади: decomposition", ["декомпозиція — розбити на частини", "алгоритм", "блок-схема", "закономірність"], 0, "decomposition — розбити велику задачу на менші частини.", [
            V("Переклади: unambiguous", ["однозначний", "передбачуваний", "точний", "детальний"], 0, "unambiguous — однозначний."),
            V("Переклади: predictable", ["передбачуваний", "однозначний", "потрібний", "точний"], 0, "predictable — передбачуваний.")
          ]),
          Q("en6-8-b", "Як англійською «блок-схема»?", ["flowchart", "algorithm", "symbol", "loop"], 0, "flowchart — блок-схема.", [
            V("Як англійською «крок»?", ["step", "shape", "loop", "symbol"], 0, "step — крок."),
            V("Як англійською «рішення» (ромб у схемі)?", ["decision", "solution", "symbol", "shape"], 0, "У блок-схемі ромб — decision, рішення.")
          ]),
          Q("en6-8-c", "Яка фігура блок-схеми показує рішення (decision)?", ["ромб", "овал", "прямокутник", "коло"], 0, "Ромб — рішення, з нього виходять дві стрілки.", [
            V("Яка фігура блок-схеми показує крок (step)?", ["прямокутник", "ромб", "овал", "коло"], 0, "Крок, дія — прямокутник."),
            V("Яка фігура блок-схеми — для початку й кінця?", ["овал", "ромб", "прямокутник", "трикутник"], 0, "Початок і кінець — овал.")
          ]),
          Q("en6-8-d", "Розбити велику задачу на менші частини — це…", ["decomposition", "algorithm", "loop", "symbol"], 0, "decomposition — to break down a complex task.", [
            V("Набір точних інструкцій — це…", ["algorithm", "decomposition", "pattern", "evidence"], 0, "algorithm — алгоритм."),
            V("Крок, до якого схема повертається знову й знову, — це…", ["loop", "symbol", "shape", "decision"], 0, "loop — цикл.")
          ]),
          Q("en6-8-e", "Переклади: precise", ["точний", "детальний", "потрібний", "складна задача"], 0, "precise — точний.", [
            V("Переклади: pattern", ["закономірність", "факти, докази", "розвʼязок", "фігура"], 0, "pattern — закономірність, те, що повторюється."),
            V("Переклади: evidence", ["факти, докази", "закономірність", "логічне міркування", "рішення"], 0, "evidence — факти, докази.")
          ]),
          B("en6-8-f", ["shape — фігура", "symbol — символ, знак", "loop — крок", "flowchart — блок-схема"], 2, "loop — цикл. Крок — step.", [
            BV(["to break down — розбити на частини", "solution — розвʼязок", "pencil sharpener — стругачка", "logical reasoning — блок-схема"], 3, "logical reasoning — логічне міркування."),
            BV(["necessary — потрібний", "detailed — детальний", "complex task — менші частини", "decision — рішення"], 2, "complex task — складна задача. Менші частини — smaller parts.")
          ]),
          boss(Q("en6-8-boss", "Яке слово означає «однозначний»?", ["unambiguous", "precise", "predictable", "detailed"], 0, "unambiguous — однозначний: інструкцію не можна зрозуміти по-іншому."))
        ]
      },
      {
        id: "en6-9", title: "Маршрут і фігури", lessons: "урок 9",
        items: [
          { t: "learn", text: "turn right / turn left — поверни праворуч / ліворуч. right angle — прямий кут, 90°. count-controlled loop — цикл із заданою кількістю повторень (repetition)." },
          Q("en6-9-a", "Переклади: journey", ["подорож, шлях", "доріжка", "сторона", "кут"], 0, "journey — подорож, шлях від початку до кінця.", [
            V("Переклади: path", ["доріжка, маршрут", "подорож", "довжина", "помилка"], 0, "path — доріжка, маршрут."),
            V("Переклади: side", ["сторона", "кут", "довжина", "крок"], 0, "side — сторона фігури.")
          ]),
          Q("en6-9-b", "Як англійською «прямий кут»?", ["right angle", "turn right", "angle", "square"], 0, "right angle — прямий кут, 90°.", [
            V("Як англійською «довжина»?", ["length", "side", "angle", "path"], 0, "length — довжина."),
            V("Як англійською «кут»?", ["angle", "side", "length", "right angle"], 0, "angle — кут.")
          ]),
          Q("en6-9-c", "Скільки сторін (sides) у square?", ["4", "3", "8", "6"], 0, "square — квадрат, 4 сторони.", [
            V("Скільки сторін (sides) в octagon?", ["8", "4", "3", "6"], 0, "octagon — восьмикутник, 8 сторін."),
            V("Скільки сторін (sides) в equilateral triangle?", ["3", "4", "8", "2"], 0, "equilateral triangle — рівносторонній трикутник, 3 сторони.")
          ]),
          Q("en6-9-d", "Схема малює square. На скільки градусів повертає перо?", ["90°", "120°", "45°", "180°"], 0, "У квадрата прямі кути — right angle, 90°.", [
            V("Схема малює equilateral triangle. На скільки градусів повертає перо?", ["120°", "90°", "45°", "60°"], 0, "Для трикутника — поворот на 120°."),
            V("Схема малює octagon. На скільки градусів повертає перо?", ["45°", "90°", "120°", "8°"], 0, "Для восьмикутника — поворот на 45°.")
          ]),
          Q("en6-9-e", "Forward 1 Step, Forward 2 Steps. Як обʼєднати (to combine)?", ["Forward 3 Steps", "Forward 2 Steps", "Forward 12 Steps", "Turn Right 90°"], 0, "1 + 2 = 3: Forward 3 Steps.", [
            V("Forward 2 Steps, Forward 2 Steps. Як обʼєднати (to combine)?", ["Forward 4 Steps", "Forward 2 Steps", "Forward 22 Steps", "Turn Left 90°"], 0, "2 + 2 = 4: Forward 4 Steps.")
          ]),
          Q("en6-9-f", "Count — це variable. Що вона зберігає?", ["integer", "String", "Character", "path"], 0, "Count stores an integer — ціле число.", [
            V("Цикл малює octagon. Скільки повторень (repetitions)?", ["8", "4", "3", "45"], 0, "8 сторін — 8 повторень."),
            V("Цикл малює square. Скільки повторень (repetitions)?", ["4", "8", "3", "90"], 0, "4 сторони — 4 повторення.")
          ]),
          B("en6-9-g", ["forward — уперед", "error — помилка", "pen down — опусти перо", "length — кут"], 3, "length — довжина. Кут — angle.", [
            BV(["to combine — обʼєднати", "output — результат", "turn left — поверни праворуч", "repetition — повторення"], 2, "turn left — поверни ліворуч."),
            BV(["square — квадрат", "octagon — трикутник", "side — сторона", "path — доріжка"], 1, "octagon — восьмикутник.")
          ]),
          boss(Q("en6-9-boss", "Схема малює фігуру з 8 сторін. Як англійською?", ["octagon", "square", "equilateral triangle", "right angle"], 0, "octagon — восьмикутник."))
        ]
      },
      {
        id: "en6-10", title: "Повторення: уроки 1–5", lessons: "уроки 1–5", pick: 7,
        items: [
          { t: "learn", text: "Повторюємо: sequence, constructs (selection, iteration, variable, operator), procedure, типи даних (Character, String, Integer), prototype і score." },
          Q("en6-10-a", "Переклади: sequence", ["послідовність", "розгалуження", "повторення", "процедура"], 0, "sequence — кроки в точному порядку."),
          Q("en6-10-b", "Як англійською «процедура»?", ["procedure", "prototype", "operator", "prompt"], 0, "procedure — процедура."),
          Q("en6-10-c", "Який тип даних: 7", ["Integer", "String", "Character"], 0, "7 — ціле число, Integer.", [
            V("Який тип даних: player", ["String", "Integer", "Character"], 0, "Слово — String."),
            V("Який тип даних: A", ["Character", "String", "Integer"], 0, "Одна літера — Character.")
          ]),
          Q("en6-10-d", "Встав слово: Programs need a structure to ___ data.", ["store", "enter", "return", "test"], 0, "to store — зберігати.", [
            V("Встав слово: Ask a user to ___ their password.", ["enter", "store", "return", "include"], 0, "to enter — ввести.")
          ]),
          Q("en6-10-e", "Переклади: to evaluate", ["оцінити, перевірити", "збільшити", "зберігати", "запустити"], 0, "to evaluate — оцінити, перевірити."),
          Q("en6-10-f", "Як англійською «подія»?", ["event", "answer", "prompt", "user"], 0, "event — подія."),
          Q("en6-10-g", "Знак > — це…", ["operator", "variable", "procedure", "sprite"], 0, "Знак порівняння — operator."),
          B("en6-10-h", ["to save time — заощадити час", "prototype — прототип", "to decrease — збільшити", "Character — одна літера"], 2, "to decrease — зменшити.", [
            BV(["iteration — повторення", "user interface — інтерфейс користувача", "criteria — критерії", "logic error — послідовність"], 3, "logic error — логічна помилка.")
          ]),
          Q("en6-10-i", "Як англійською «початковий рахунок»?", ["starting score", "negative score", "whole number", "user name"], 0, "starting score — початковий рахунок."),
          Q("en6-10-j", "Переклади: interaction", ["взаємодія, реакція", "оператор", "змінна", "дані"], 0, "interaction — взаємодія, реакція."),
          B("en6-10-boss", ["sequence — послідовність", "variable — змінна", "procedure — процедура", "String — ціле число", "prompt — запитання-підказка"], 3, "String — слова, текст. Ціле число — Integer.", null, true)
        ]
      },
      {
        id: "en6-11", title: "Повторення: уроки 6–9", lessons: "уроки 6–9", pick: 7,
        items: [
          { t: "learn", text: "Повторюємо: join і space, sub-routine і to call, algorithm і decomposition, flowchart, кути й фігури." },
          Q("en6-11-a", "join \"player\" \"score\". Що на екрані?", ["playerscore", "player score", "score player", "player"], 0, "join не ставить пробілу сам — слова злиплися."),
          Q("en6-11-b", "Як англійською «шаблон»?", ["template", "checklist", "feature", "symbol"], 0, "template — шаблон."),
          Q("en6-11-c", "Переклади: to call", ["викликати", "повторювати", "показати", "привітати"], 0, "to call — викликати (підпрограму)."),
          Q("en6-11-d", "Яка фігура блок-схеми має дві стрілки — так і ні?", ["ромб", "овал", "прямокутник", "квадрат"], 0, "Ромб — decision, рішення."),
          Q("en6-11-e", "Переклади: to break down", ["розбити на частини", "передбачити", "обʼєднати", "покращити"], 0, "to break down — розбити на частини."),
          Q("en6-11-f", "Як англійською «прямий кут»?", ["right angle", "angle", "turn right", "side"], 0, "right angle — 90°."),
          Q("en6-11-g", "Цикл повторюється рівно 4 рази. Як він називається?", ["count-controlled loop", "forever", "decision", "sub-routine"], 0, "Цикл із заданою кількістю повторень — count-controlled loop."),
          B("en6-11-h", ["feedback — відгук", "to display — показати", "flowchart — алгоритм", "path — доріжка"], 2, "flowchart — блок-схема. Алгоритм — algorithm.", [
            BV(["enhanced — покращений", "symbol — символ", "journey — подорож", "space — гравець"], 3, "space — пробіл. Гравець — player.")
          ]),
          Q("en6-11-i", "Переклади: output", ["результат", "помилка", "довжина", "вимоги"], 0, "output — результат."),
          Q("en6-11-j", "Як англійською «помилка»?", ["error", "angle", "loop", "space"], 0, "error — помилка."),
          B("en6-11-boss", ["decomposition — декомпозиція", "to join — зʼєднати", "sub-routine — підпрограма", "octagon — квадрат", "precise — точний"], 3, "octagon — восьмикутник. Квадрат — square.", null, true)
        ]
      }
    ]
  };
})();
