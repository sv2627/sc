// 5 клас · IT-англійська (A+) · I–II чверть — уроки 1–11 (03.09–19.11.2026).
// Англійські слова — лише зі слайдів Vocabulary / Words first / Word bank цих уроків (перевірено скриптом).
// Пробна версія: відповіді лежать тут відкрито. У робочій версії їх замінять хеші (див. дизайн §6).
//
// Типи завдань: learn · quiz (a = індекс правильного) · bugline (a = індекс рядка з помилкою).
// variants — інші версії того самого завдання: повтор рівня показує одну з них.
(function () {
  // «Що означає слово?» — англійське слово → переклад.
  const en2uk = (id, en, uk, wrong, more) => ({
    t: "quiz", id, q: `Що означає «${en}»?`, options: [uk, ...wrong], a: 0,
    why: `${en} — ${uk}.`, ...(more ? { variants: more.map(([e, u, w]) => ({ q: `Що означає «${e}»?`, options: [u, ...w], a: 0, why: `${e} — ${u}.` })) } : {})
  });
  // «Як англійською?» — переклад → англійське слово.
  const uk2en = (id, uk, en, wrong, more) => ({
    t: "quiz", id, q: `Як англійською «${uk}»?`, options: [en, ...wrong], a: 0,
    why: `${uk} — ${en}.`, ...(more ? { variants: more.map(([u, e, w]) => ({ q: `Як англійською «${u}»?`, options: [e, ...w], a: 0, why: `${u} — ${e}.` })) } : {})
  });
  // «Тапни неправильну пару».
  const pairs = (id, lines, a, why, more, boss) => ({
    t: "bugline", id, ...(boss ? { boss: true } : {}), q: boss ? "Бос! Тапни неправильну пару." : "Тапни неправильну пару.",
    lines, a, why, ...(more ? { variants: more.map(([l, k, w]) => ({ lines: l, a: k, why: w })) } : {})
  });

  (window.GAMES = window.GAMES || {}).en5 = {
    id: "en5", classes: ["5-aik"],
    course: "IT-англійська · 5 клас", short: "EN", color: "pink",
    sector: "Сектор 1 · Радіозв'язок",
    about: "Радіо станції говорить англійською. Згадай слова — і зв'язок із Землею знову запрацює.",
    levels: [
      {
        id: "en5-1", title: "Так чи ні: біти", lessons: "урок 1",
        items: [
          { t: "learn", text: "Комп'ютер знає лише два стани: on і off. Один такий стан — це bit: 0 або 1." },
          en2uk("en5-1-a", "bit", "біт — 0 або 1", ["байт", "піксель", "вимикач"],
            [["switch", "вимикач", ["біт", "картинка", "крок"]], ["pixel", "піксель — одна клітинка", ["вимикач", "диск", "байт"]]]),
          uk2en("en5-1-b", "увімкнено / вимкнено", "on / off", ["yes / no", "bit / byte", "input / output"],
            [["двійковий", "binary", ["bitmap", "byte", "switch"]], ["картинка з пікселів", "bitmap", ["binary", "pixel", "bit"]]]),
          { t: "quiz", id: "en5-1-c", q: "Скільки станів має switch?", options: ["2", "1", "8", "10"], a: 0, why: "Вимикач або on, або off. Рівно два стани.",
            variants: [{ q: "Яка цифра означає on?", options: ["1", "0", "2", "8"], a: 0, why: "1 — on, 0 — off." }] },
          en2uk("en5-1-d", "transistor", "крихітний вимикач у комп'ютері", ["флешка", "картинка", "вхід"],
            [["binary digit", "двійкова цифра — 0 або 1", ["байт", "пікселі", "вимикач"]]]),
          { t: "quiz", id: "en5-1-e", q: "Клітинка 1 — чорна, 0 — біла. Код 101 — це скільки чорних?", options: ["2", "1", "3", "0"], a: 0, why: "У 101 дві одиниці — дві чорні клітинки.",
            variants: [{ q: "Клітинка 1 — чорна, 0 — біла. Код 0110 — скільки чорних?", options: ["2", "1", "3", "4"], a: 0, why: "У 0110 дві одиниці — дві чорні клітинки." }] },
          pairs("en5-1-boss", ["bit — біт", "pixel — піксель", "switch — картинка", "binary — двійковий"], 2, "switch — це вимикач, а не картинка.",
            [[["on — увімкнено", "off — вимкнено", "bitmap — вимикач", "bit — біт"], 2, "bitmap — картинка з пікселів, а не вимикач."]], true)
        ]
      },
      {
        id: "en5-2", title: "Біти і байти", lessons: "урок 2",
        items: [
          { t: "learn", text: "8 bits = 1 byte. Kilobyte — близько тисячі байтів. Megabyte — близько мільйона." },
          { t: "quiz", id: "en5-2-a", q: "Скільки bits в одному byte?", options: ["8", "2", "10", "1000"], a: 0, why: "1 byte = 8 bits.",
            variants: [{ q: "2 bytes — це скільки bits?", options: ["16", "8", "10", "2"], a: 0, why: "Кожен byte — 8 bits. 8 + 8 = 16." }] },
          uk2en("en5-2-b", "байт", "byte", ["bit", "pixel", "bitmap"],
            [["кілобайт", "kilobyte", ["megabyte", "byte", "bit"]], ["мегабайт", "megabyte", ["kilobyte", "byte", "bitmap"]]]),
          { t: "quiz", id: "en5-2-c", q: "Що більше?", options: ["megabyte", "kilobyte", "byte", "bit"], a: 0, why: "Megabyte — близько мільйона байтів. Це найбільше.",
            variants: [{ q: "Що найменше?", options: ["bit", "byte", "kilobyte", "megabyte"], a: 0, why: "bit — один 0 або одна 1. Менше не буває." }] },
          { t: "quiz", id: "en5-2-d", q: "Два bits дають скільки кольорів?", options: ["4", "2", "8", "1"], a: 0, why: "00, 01, 10, 11 — чотири комбінації, чотири кольори.",
            variants: [{ q: "Один bit дає скільки варіантів?", options: ["2", "1", "4", "8"], a: 0, why: "Один bit — 0 або 1. Два варіанти." }] },
          { t: "quiz", id: "en5-2-e", q: "Рядок: 8 клітинок по 2 bits. Скільки bytes?", options: ["2", "8", "16", "4"], a: 0, why: "8 × 2 = 16 bits. 16 bits = 2 bytes.",
            variants: [{ q: "Рядок: 8 клітинок по 1 bit. Скільки bytes?", options: ["1", "8", "2", "16"], a: 0, why: "8 × 1 = 8 bits = 1 byte." }] },
          en2uk("en5-2-f", "binary digits", "двійкові цифри — 0 і 1", ["картинки", "байти", "диски"]),
          { t: "quiz", id: "en5-2-boss", boss: true, q: "Бос! Картинка: 9 рядків по 2 bytes. Скільки bytes усього?", options: ["18", "11", "9", "16"], a: 0, why: "9 × 2 = 18 bytes.",
            variants: [{ q: "Бос! Картинка: 4 рядки по 2 bytes. Скільки bits усього?", options: ["64", "8", "16", "32"], a: 0, why: "4 × 2 = 8 bytes. 8 × 8 = 64 bits." }] }
        ]
      },
      {
        id: "en5-3", title: "Де живуть дані", lessons: "урок 3",
        items: [
          { t: "learn", text: "Storage media — носії даних. Capacity — скільки вміщає. Transfer speed — як швидко копіює." },
          uk2en("en5-3-a", "флешка", "flash drive", ["SD card", "hard disk drive", "network storage"],
            [["картка пам'яті", "SD card", ["flash drive", "solid state disk", "byte"]], ["жорсткий диск", "hard disk drive", ["flash drive", "SD card", "bitmap"]]]),
          en2uk("en5-3-b", "capacity", "ємність — скільки вміщає", ["швидкість", "ціна", "розмір картинки"],
            [["cost", "ціна", ["ємність", "швидкість", "флешка"]], ["portability", "чи легко носити з собою", ["ціна", "ємність", "швидкість"]]]),
          en2uk("en5-3-c", "transfer speed", "швидкість передавання", ["ємність", "ціна", "носій даних"],
            [["storage media", "носії даних", ["швидкість", "ціна", "пікселі"]]]),
          { t: "quiz", id: "en5-3-d", q: "Де найбільше місця?", options: ["network storage", "micro SD card", "flash drive", "SD card"], a: 0, why: "Network storage — сховище в мережі. Місця там найбільше.",
            variants: [{ q: "Що вставляють у телефон?", options: ["micro SD card", "hard disk drive", "network storage", "solid state disk"], a: 0, why: "Micro SD card — маленька картка для телефона." }] },
          { t: "quiz", id: "en5-3-e", q: "Диск без рухомих частин — це…", options: ["solid state disk", "hard disk drive", "SD card", "flash drive"], a: 0, why: "SSD — solid state disk. Він швидкий і без рухомих частин.",
            variants: [{ q: "Ємність видно на око?", options: ["ні", "так"], a: 0, why: "Дві однакові картки можуть мати різну ємність." }] },
          pairs("en5-3-f", ["cost — ціна", "capacity — ємність", "flash drive — флешка", "transfer speed — ціна"], 3, "transfer speed — швидкість передавання.",
            [[["SD card — картка пам'яті", "storage media — носії даних", "portability — ємність", "cost — ціна"], 2, "portability — чи легко носити з собою."]]),
          { t: "quiz", id: "en5-3-boss", boss: true, q: "Бос! Хочеш швидко скопіювати фільм. Що важливо?", options: ["transfer speed", "cost", "portability", "pixel"], a: 0, why: "Швидкість копіювання — transfer speed.",
            variants: [{ q: "Бос! Хочеш носити файли в кишені. Що важливо?", options: ["portability", "capacity", "transfer speed", "bit"], a: 0, why: "Чи легко носити з собою — portability." }] }
        ]
      },
      {
        id: "en5-4", title: "Так чи ні: ключ", lessons: "урок 4",
        items: [
          { t: "learn", text: "Key — ланцюжок питань. Кожне питання — yes або no. Місце, де обираємо шлях, — selection." },
          en2uk("en5-4-a", "algorithm", "алгоритм — кроки до мети", ["питання", "відповідь", "рішення"],
            [["step", "крок", ["ключ", "питання", "рішення"]], ["question", "питання", ["відповідь", "крок", "ключ"]]]),
          en2uk("en5-4-b", "decision", "рішення", ["питання", "розгалуження", "відповідь"],
            [["selection", "розгалуження", ["рішення", "ключ", "крок"]], ["key", "ключ із питань", ["рішення", "крок", "відповідь"]]]),
          { t: "quiz", id: "en5-4-c", q: "Скільки відповідей у грі «так чи ні»?", options: ["2", "1", "3", "10"], a: 0, why: "Лише yes або no.",
            variants: [{ q: "yes — це 1 чи 0?", options: ["1", "0"], a: 0, why: "yes — 1, no — 0. Як on і off." }] },
          uk2en("en5-4-d", "відповідь", "answer", ["question", "step", "key"],
            [["питання", "question", ["answer", "decision", "step"]]]),
          { t: "quiz", id: "en5-4-e", q: "Де в алгоритмі selection?", options: ["де обираємо шлях", "на початку", "у кінці", "у кожному кроці"], a: 0, why: "Selection — місце, де приймається рішення.",
            variants: [{ q: "IF, THEN, ELSE — це…", options: ["selection", "bitmap", "byte", "pixel"], a: 0, why: "IF, THEN, ELSE — розгалуження, selection." }] },
          { t: "quiz", id: "en5-4-f", q: "Що означає «IF»?", options: ["якщо", "тоді", "інакше", "так"], a: 0, why: "IF — якщо.",
            variants: [{ q: "Що означає «ELSE»?", options: ["інакше", "тоді", "якщо", "ні"], a: 0, why: "ELSE — інакше." }, { q: "Що означає «THEN»?", options: ["тоді", "інакше", "якщо", "так"], a: 0, why: "THEN — тоді." }] },
          pairs("en5-4-boss", ["IF — якщо", "THEN — тоді", "ELSE — так", "key — ключ"], 2, "ELSE — інакше.",
            [[["step — крок", "decision — питання", "yes — так", "no — ні"], 1, "decision — рішення."]], true)
        ]
      },
      {
        id: "en5-5", title: "Знак = і передбачення", lessons: "урок 5",
        items: [
          { t: "learn", text: "= — equal to, дорівнює. Однакові — працює THEN. Різні — працює ELSE.", code: "IF answer = 28,\nTHEN say well done,\nELSE say try again." },
          en2uk("en5-5-a", "predict", "передбачити", ["порівнювати", "відповідь", "вихід"],
            [["compare", "порівнювати", ["передбачити", "код", "вхід"]], ["correct", "правильний", ["коротший", "інший", "вихід"]]]),
          uk2en("en5-5-b", "вхід", "input", ["output", "answer", "code"],
            [["вихід", "output", ["input", "code", "step"]]]),
          { t: "quiz", id: "en5-5-c", code: "IF answer = 28,\nTHEN say well done,\nELSE say try again.", q: "answer = 28. Що скаже програма?", options: ["well done", "try again"], a: 0, why: "28 = 28 — так. Працює THEN.",
            variants: [{ q: "answer = 30. Що скаже програма?", options: ["try again", "well done"], a: 0, why: "30 не дорівнює 28. Працює ELSE." }] },
          { t: "quiz", id: "en5-5-d", code: "IF answer = 7,\nTHEN say correct,\nELSE say try again.", q: "answer = 7. Що скаже програма?", options: ["correct", "try again"], a: 0, why: "7 = 7 — працює THEN.",
            variants: [{ q: "answer = 8. Що скаже програма?", options: ["try again", "correct"], a: 0, why: "8 не дорівнює 7 — працює ELSE." }] },
          en2uk("en5-5-e", "equal to", "дорівнює", ["більше", "менше", "плюс"]),
          { t: "quiz", id: "en5-5-f", q: "Два коди роблять те саме. Який кращий?", options: ["shorter", "довший"], a: 0, why: "Shorter — коротший. Коротший код легше читати.",
            variants: [{ q: "Що означає «shorter»?", options: ["коротший", "довший", "правильний", "інший"], a: 0, why: "shorter — коротший." }] },
          { t: "quiz", id: "en5-5-boss", boss: true, code: "IF answer = 5,\nTHEN say well done,\nELSE say try again.", q: "Бос! answer = 3. Що скаже програма?", options: ["try again", "well done", "5", "3"], a: 0, why: "3 не дорівнює 5. Працює ELSE — try again.",
            variants: [{ q: "Бос! answer = 5. Що скаже програма?", options: ["well done", "try again", "5", "3"], a: 0, why: "5 = 5. Працює THEN — well done." }] }
        ]
      },
      {
        id: "en5-6", title: "Програма з блоків", lessons: "урок 6",
        items: [
          { t: "learn", text: "Program — програма з блоків. ask … and wait — питає і чекає. say — каже текст.", code: "ask … and wait\nif answer = yes then\n  say well done\nelse\n  say try again" },
          en2uk("en5-6-a", "block", "блок", ["програма", "секунди", "питання"],
            [["program", "програма", ["блок", "секунди", "відповідь"]], ["seconds", "секунди", ["блоки", "питання", "кроки"]]]),
          en2uk("en5-6-b", "ask", "запитати", ["сказати", "чекати", "відповідь"],
            [["say", "сказати", ["запитати", "чекати", "блок"]], ["wait", "чекати", ["сказати", "запитати", "стоп"]]]),
          uk2en("en5-6-c", "молодець", "well done", ["try again", "correct", "answer"],
            [["спробуй ще раз", "try again", ["well done", "stop", "wait"]]]),
          { t: "quiz", id: "en5-6-d", q: "Який блок чекає на відповідь?", options: ["ask … and wait", "say … for 2 seconds", "if … then", "else"], a: 0, why: "ask … and wait — питає і чекає відповідь.",
            variants: [{ q: "Який блок тільки показує текст?", options: ["say … for 2 seconds", "ask … and wait", "if … then", "answer"], a: 0, why: "say — каже текст." }] },
          { t: "quiz", id: "en5-6-e", code: "if answer = yes then\n  say well done\nelse\n  say try again", q: "Відповідь: no. Що скаже?", options: ["try again", "well done"], a: 0, why: "no не дорівнює yes. Працює else.",
            variants: [{ q: "Відповідь: yes. Що скаже?", options: ["well done", "try again"], a: 0, why: "yes = yes. Працює then." }] },
          { t: "quiz", id: "en5-6-f", q: "say … for 2 seconds. Скільки секунд видно текст?", options: ["2", "1", "4", "20"], a: 0, why: "for 2 seconds — 2 секунди." },
          pairs("en5-6-boss", ["ask — запитати", "say — сказати", "wait — програма", "block — блок"], 2, "wait — чекати.",
            [[["program — програма", "seconds — секунди", "correct — питання", "answer — відповідь"], 2, "correct — правильний."]], true)
        ]
      },
      {
        id: "en5-7", title: "Поїздка і коди", lessons: "уроки 5, 7",
        items: [
          { t: "learn", text: "Код машинки: 00 stop · 01 turn right · 10 turn left · 11 forward.", code: "00 stop\n01 turn right\n10 turn left\n11 forward" },
          { t: "quiz", id: "en5-7-a", code: "00 stop\n01 turn right\n10 turn left\n11 forward", q: "Що робить код 11?", options: ["forward", "stop", "turn left", "turn right"], a: 0, why: "11 — forward, одна клітинка вперед.",
            variants: [{ q: "Що робить код 00?", options: ["stop", "forward", "turn left", "turn right"], a: 0, why: "00 — stop." }, { q: "Що робить код 10?", options: ["turn left", "turn right", "stop", "forward"], a: 0, why: "10 — turn left, поворот ліворуч." }] },
          { t: "quiz", id: "en5-7-b", code: "00 stop\n01 turn right\n10 turn left\n11 forward", q: "Який код у turn right?", options: ["01", "10", "11", "00"], a: 0, why: "turn right — 01.",
            variants: [{ q: "Який код у forward?", options: ["11", "01", "10", "00"], a: 0, why: "forward — 11." }] },
          en2uk("en5-7-c", "journey", "поїздка", ["маршрут", "помилка", "крок"],
            [["route", "маршрут", ["поїздка", "пауза", "зупинка"]], ["error", "помилка", ["маршрут", "крок", "пауза"]]]),
          uk2en("en5-7-d", "назад", "backwards", ["forward", "stop", "pause"],
            [["перевірити", "check", ["swap", "pause", "stop"]], ["обмінятися", "swap", ["check", "error", "route"]]]),
          { t: "quiz", id: "en5-7-e", q: "Скільки різних 3-bit кодів?", options: ["8", "3", "4", "6"], a: 0, why: "000, 001 … 111 — вісім кодів.",
            variants: [{ q: "Скільки різних 2-bit кодів?", options: ["4", "2", "3", "8"], a: 0, why: "00, 01, 10, 11 — чотири коди." }] },
          { t: "quiz", id: "en5-7-f", q: "Два різні маршрути можуть бути правильні?", options: ["так", "ні"], a: 0, why: "Різні route можуть вести до тієї ж мети.",
            variants: [{ q: "Чим закінчується кожна частина поїздки?", options: ["00 stop", "11 forward", "01 turn right", "10 turn left"], a: 0, why: "Кожна частина закінчується командою 00 — stop." }] },
          { t: "bugline", id: "en5-7-boss", boss: true, code: "00 stop\n01 turn right\n10 turn left\n11 forward", q: "Бос! Машинка дивиться →. Треба 1 клітинку вперед і стоп. Тапни зайвий рядок.", lines: ["11", "10", "00"], a: 1, why: "10 — turn left. Він тут зайвий: треба лише forward і stop.",
            variants: [{ q: "Бос! Треба: поворот праворуч, вперед, стоп. Тапни помилку.", lines: ["01", "11", "11", "00"], a: 2, why: "Вперед лише раз. Другий 11 — зайвий." }] }
        ]
      },
      {
        id: "en5-8", title: "Спрайти і повідомлення", lessons: "урок 8",
        items: [
          { t: "learn", text: "Sprite — герой у програмі. Один спрайт робить broadcast message, інший — receive." },
          en2uk("en5-8-a", "sprite", "спрайт — герой у програмі", ["повідомлення", "подія", "відеогра"],
            [["message", "повідомлення", ["спрайт", "подія", "блок"]], ["event", "подія", ["повідомлення", "спрайт", "відповідь"]]]),
          en2uk("en5-8-b", "send", "надіслати", ["отримати", "сказати", "чекати"],
            [["receive", "отримати", ["надіслати", "запитати", "сказати"]], ["broadcast", "розіслати повідомлення", ["отримати", "чекати", "сказати"]]]),
          uk2en("en5-8-c", "відеогра", "video game", ["sprite", "message", "event"],
            [["замість", "instead", ["interact", "receive", "send"]], ["діяти разом", "interact", ["instead", "broadcast", "event"]]]),
          { t: "quiz", id: "en5-8-d", q: "Кіт надсилає message. Що робить лис?", options: ["receive", "send", "broadcast", "ask"], a: 0, why: "Хто надсилає — send. Хто отримує — receive.",
            variants: [{ q: "Хто надсилає message?", options: ["send", "receive", "event", "wait"], a: 0, why: "Надіслати — send." }] },
          { t: "quiz", id: "en5-8-e", q: "Отримати повідомлення — це…", options: ["event", "pixel", "byte", "route"], a: 0, why: "Отримане повідомлення — подія, event. Після неї щось відбувається." },
          pairs("en5-8-f", ["sprite — спрайт", "message — повідомлення", "receive — надіслати", "event — подія"], 2, "receive — отримати.",
            [[["send — надіслати", "video game — відеогра", "instead — подія", "sprite — спрайт"], 2, "instead — замість."]]),
          { t: "quiz", id: "en5-8-boss", boss: true, q: "Бос! Кіт розсилає message1. Як англійською «розіслати»?", options: ["broadcast", "receive", "interact", "instead"], a: 0, why: "Розіслати повідомлення — broadcast.",
            variants: [{ q: "Бос! Два спрайти діють разом. Як англійською?", options: ["interact", "instead", "receive", "broadcast"], a: 0, why: "Діяти разом — interact." }] }
        ]
      },
      {
        id: "en5-9", title: "Змінна — коробка", lessons: "урок 9",
        items: [
          { t: "learn", text: "Variable — коробка з іменем. Name — наліпка на коробці. Усередині — data." },
          en2uk("en5-9-a", "variable", "змінна", ["пам'ять", "дані", "рахунок"],
            [["data", "дані", ["змінна", "пам'ять", "вік"]], ["memory", "пам'ять", ["дані", "змінна", "ім'я"]]]),
          en2uk("en5-9-b", "score", "рахунок у грі", ["вік", "ім'я", "користувач"],
            [["user", "користувач", ["рахунок", "вік", "пам'ять"]], ["age", "вік", ["ім'я", "рахунок", "дані"]]]),
          uk2en("en5-9-c", "зберігати", "store", ["change", "set", "score"],
            [["змінювати", "change", ["store", "set", "data"]], ["задати значення", "set", ["store", "change", "score"]]]),
          { t: "quiz", id: "en5-9-d", q: "Що може змінюватися в грі?", options: ["score", "byte", "bit", "pixel"], a: 0, why: "Score — рахунок. Він змінюється під час гри, тому це змінна.",
            variants: [{ q: "Де комп'ютер зберігає змінні?", options: ["memory", "message", "route", "key"], a: 0, why: "Змінні живуть у пам'яті — memory." }] },
          { t: "quiz", id: "en5-9-e", q: "Коробка age, усередині 12. Що таке 12?", options: ["data", "name", "variable", "user"], a: 0, why: "age — ім'я коробки. 12 — дані всередині.",
            variants: [{ q: "Коробка age, усередині 12. Що таке age?", options: ["name", "data", "score", "user"], a: 0, why: "age — наліпка, ім'я змінної." }] },
          pairs("en5-9-f", ["variable — змінна", "user — користувач", "store — рахунок", "data — дані"], 2, "store — зберігати.",
            [[["change — змінювати", "memory — пам'ять", "set — вік", "name — ім'я"], 2, "set — задати значення."]]),
          { t: "quiz", id: "en5-9-boss", boss: true, q: "Бос! score = 3. Гравець влучив ще раз. Яке значення?", options: ["4", "3", "1", "0"], a: 0, why: "Рахунок змінюється: 3 + 1 = 4.",
            variants: [{ q: "Бос! score = 0. Гравець влучив двічі. Яке значення?", options: ["2", "0", "1", "3"], a: 0, why: "0 + 1 + 1 = 2." }] }
        ]
      },
      {
        id: "en5-10", title: "Хороші імена", lessons: "урок 10",
        items: [
          { t: "learn", text: "Good name — clear, short, unique. Зрозуміле, коротке і єдине таке." },
          en2uk("en5-10-a", "clear", "зрозумілий", ["короткий", "єдиний такий", "швидкий"],
            [["short", "короткий", ["зрозумілий", "єдиний такий", "інший"]], ["unique", "єдиний такий", ["короткий", "зрозумілий", "правильний"]]]),
          uk2en("en5-10-b", "місто", "city", ["home", "food", "sport"],
            [["їжа", "food", ["city", "subject", "home"]], ["шкільний предмет", "subject", ["sport", "food", "city"]]]),
          uk2en("en5-10-c", "вид спорту", "sport", ["subject", "home", "age"],
            [["дім, житло", "home", ["city", "name", "food"]]]),
          { t: "quiz", id: "en5-10-d", q: "Усередині коробки «Київ». Яке ім'я дати?", options: ["city", "food", "sport", "age"], a: 0, why: "Київ — місто, city.",
            variants: [{ q: "Усередині коробки «футбол». Яке ім'я дати?", options: ["sport", "city", "subject", "home"], a: 0, why: "Футбол — вид спорту, sport." }, { q: "Усередині коробки «математика». Яке ім'я дати?", options: ["subject", "sport", "food", "city"], a: 0, why: "Математика — шкільний предмет, subject." }] },
          { t: "quiz", id: "en5-10-e", q: "Дві коробки sport. Що не так?", options: ["ім'я не unique", "ім'я не short", "немає data", "все добре"], a: 0, why: "Імена мають бути unique. Краще sport 1 і sport 2.",
            variants: [{ q: "Яке ім'я краще для віку?", options: ["age", "x", "a1", "n"], a: 0, why: "age — clear і short." }] },
          { t: "quiz", id: "en5-10-f", q: "subject — це ім'я чи дані?", options: ["ім'я", "дані"], a: 0, why: "subject — наліпка на коробці, ім'я змінної.",
            variants: [{ q: "«піца» — це ім'я чи дані?", options: ["дані", "ім'я"], a: 0, why: "Піца лежить усередині коробки food. Це дані." }] },
          pairs("en5-10-boss", ["clear — зрозумілий", "short — короткий", "unique — дім", "food — їжа"], 2, "unique — єдиний такий.",
            [[["city — місто", "home — дім", "subject — вид спорту", "good name — хороше ім'я"], 2, "subject — шкільний предмет."]], true)
        ]
      },
      {
        id: "en5-11", title: "Плюс і мінус", lessons: "урок 11",
        items: [
          { t: "learn", text: "Add — додавати (+). Subtract — віднімати (−). + і − — це operator.", code: "Number 1 = 3\nNumber 2 = 4\nAnswer = Number 1 + Number 2" },
          en2uk("en5-11-a", "add", "додавати", ["віднімати", "перевіряти", "число"],
            [["subtract", "віднімати", ["додавати", "перевіряти", "відповідь"]], ["test", "перевіряти, випробувати", ["додавати", "віднімати", "швидкий"]]]),
          en2uk("en5-11-b", "operator", "знак дії: + або −", ["число", "відповідь", "змінна"],
            [["arithmetic", "арифметика", ["алгоритм", "змінна", "відповідь"]], ["number", "число", ["відповідь", "знак дії", "крок"]]]),
          { t: "quiz", id: "en5-11-c", code: "Number 1 = 3\nNumber 2 = 4\nAnswer = Number 1 + Number 2", q: "Яке Answer?", options: ["7", "1", "34", "12"], a: 0, why: "3 + 4 = 7.",
            variants: [{ code: "Number 1 = 9\nNumber 2 = 4\nAnswer = Number 1 − Number 2", q: "Яке Answer?", options: ["5", "13", "94", "4"], a: 0, why: "9 − 4 = 5." }] },
          { t: "quiz", id: "en5-11-d", q: "3 plus 4 = ?", options: ["7", "1", "12", "34"], a: 0, why: "3 + 4 = 7.",
            variants: [{ q: "9 minus 4 = ?", options: ["5", "13", "4", "9"], a: 0, why: "9 − 4 = 5." }] },
          uk2en("en5-11-e", "швидкий", "fast", ["short", "clear", "test"],
            [["мінус", "minus", ["plus", "add", "operator"]], ["плюс", "plus", ["minus", "subtract", "number"]]]),
          { t: "quiz", id: "en5-11-f", q: "Що комп'ютер робить найкраще?", options: ["arithmetic", "pixel", "route", "sprite"], a: 0, why: "Комп'ютер робить арифметику — і дуже fast." },
          { t: "quiz", id: "en5-11-boss", boss: true, code: "Number 1 = 10\nNumber 2 = 3\nAnswer = Number 1 − Number 2", q: "Бос! Яке Answer?", options: ["7", "13", "103", "3"], a: 0, why: "10 − 3 = 7. Operator тут − (subtract).",
            variants: [{ code: "Number 1 = 6\nNumber 2 = 6\nAnswer = Number 1 + Number 2", q: "Бос! Яке Answer?", options: ["12", "0", "66", "6"], a: 0, why: "6 + 6 = 12. Operator тут + (add)." }] }
        ]
      },
      {
        id: "en5-12", title: "Повторення: біти і ключі", lessons: "уроки 1–5",
        items: [
          { t: "learn", text: "Згадай: bit, byte, storage media, IF, THEN, ELSE, input, output." },
          uk2en("en5-12-a", "біт", "bit", ["byte", "pixel", "key"],
            [["піксель", "pixel", ["bit", "bitmap", "byte"]], ["носії даних", "storage media", ["capacity", "network storage", "transfer speed"]]]),
          en2uk("en5-12-b", "output", "вихід — що отримуємо", ["вхід — що даємо", "відповідь", "питання"],
            [["input", "вхід — що даємо", ["вихід — що отримуємо", "код", "крок"]]]),
          { t: "quiz", id: "en5-12-c", q: "1 byte = ?", options: ["8 bits", "2 bits", "10 bits", "1000 bits"], a: 0, why: "Вісім бітів — один байт." },
          { t: "quiz", id: "en5-12-d", code: "IF answer = 10,\nTHEN say correct,\nELSE say try again.", q: "answer = 10. Що скаже?", options: ["correct", "try again"], a: 0, why: "10 = 10 — працює THEN.",
            variants: [{ q: "answer = 1. Що скаже?", options: ["try again", "correct"], a: 0, why: "1 не дорівнює 10 — працює ELSE." }] },
          pairs("en5-12-e", ["byte — байт", "capacity — ємність", "step — крок", "selection — відповідь"], 3, "selection — розгалуження.",
            [[["predict — передбачити", "compare — порівнювати", "code — ціна", "key — ключ"], 2, "code — код."]]),
          en2uk("en5-12-f", "on / off", "увімкнено / вимкнено", ["так / ні", "вхід / вихід", "плюс / мінус"],
            [["yes / no", "так / ні", ["увімкнено / вимкнено", "вхід / вихід", "якщо / інакше"]]]),
          { t: "quiz", id: "en5-12-boss", boss: true, q: "Бос! Що НЕ storage media?", options: ["pixel", "SD card", "flash drive", "hard disk drive"], a: 0, why: "Pixel — клітинка картинки. Решта — носії даних.",
            variants: [{ q: "Бос! Що НЕ частина IF, THEN, ELSE?", options: ["byte", "IF", "THEN", "ELSE"], a: 0, why: "Byte — 8 бітів. Він не про розгалуження." }] }
        ]
      },
      {
        id: "en5-13", title: "Повторення: програми й змінні", lessons: "уроки 6–11",
        items: [
          { t: "learn", text: "Згадай: block, sprite, message, variable, good name, add, subtract." },
          uk2en("en5-13-a", "змінна", "variable", ["sprite", "event", "data"],
            [["повідомлення", "message", ["sprite", "variable", "event"]], ["подія", "event", ["message", "block", "score"]]]),
          en2uk("en5-13-b", "subtract", "віднімати", ["додавати", "надіслати", "зберігати"],
            [["receive", "отримати", ["надіслати", "віднімати", "змінювати"]], ["unique", "єдиний такий", ["короткий", "швидкий", "зрозумілий"]]]),
          { t: "quiz", id: "en5-13-c", q: "Який блок питає?", options: ["ask … and wait", "say … for 2 seconds", "broadcast message1", "else"], a: 0, why: "ask — запитати." },
          { t: "quiz", id: "en5-13-d", q: "score = 5, потім score − 2. Яке значення?", options: ["3", "7", "5", "2"], a: 0, why: "5 − 2 = 3.",
            variants: [{ q: "score = 5, потім score + 2. Яке значення?", options: ["7", "3", "52", "5"], a: 0, why: "5 + 2 = 7." }] },
          pairs("en5-13-e", ["sprite — спрайт", "data — дані", "fast — швидкий", "send — отримати"], 3, "send — надіслати.",
            [[["add — додавати", "block — блок", "memory — змінна", "say — сказати"], 2, "memory — пам'ять."]]),
          { t: "quiz", id: "en5-13-f", q: "Яке ім'я змінної — good name?", options: ["score", "x", "a1", "s"], a: 0, why: "score — clear, short і зрозуміло, що всередині.",
            variants: [{ q: "Яке ім'я для міста — good name?", options: ["city", "c", "n2", "x"], a: 0, why: "city — clear і short." }] },
          { t: "quiz", id: "en5-13-boss", boss: true, code: "Number 1 = 8\nNumber 2 = 5\nAnswer = Number 1 − Number 2", q: "Бос! Яке Answer?", options: ["3", "13", "85", "5"], a: 0, why: "8 − 5 = 3.",
            variants: [{ code: "Number 1 = 8\nNumber 2 = 5\nAnswer = Number 1 + Number 2", q: "Бос! Яке Answer?", options: ["13", "3", "85", "8"], a: 0, why: "8 + 5 = 13." }] }
        ]
      }
    ]
  };
})();
