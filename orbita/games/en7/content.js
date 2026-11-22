// 7 клас · IT-англійська (A+) · уроки 1–11 (04.09–20.11.2026): блок-схеми, розгалуження, підпрограми, повтори,
// Python: print / input, типи даних, змінні й арифметика. Слова — лише зі слайдів Vocabulary цих уроків.
// Пробна версія: відповіді лежать тут відкрито. У робочій версії їх замінять хеші (див. дизайн §6).
// Типи: learn · quiz (a = індекс правильного) · bugline (a = індекс рядка). variants — інші версії завдання.
(window.GAMES = window.GAMES || {}).en7 = {
 "id": "en7",
 "classes": [
  "7-aik"
 ],
 "course": "IT-англійська · 7 клас",
 "short": "EN",
 "color": "orange",
 "sector": "Сектор 1 · Радіозвʼязок",
 "about": "Радіозвʼязок станції працює англійською. Повтори слова й програми — і станція знову на звʼязку.",
 "levels": [
  {
   "id": "en7-1",
   "title": "Фігури блок-схеми",
   "lessons": "уроки 1–2",
   "items": [
    {
     "t": "learn",
     "text": "Flowchart — блок-схема. Oval — start / stop. Parallelogram — input / output. Rectangle — process.",
     "code": "START\n↓\nINPUT name\n↓\nOUTPUT \"Hello\", name\n↓\nSTOP"
    },
    {
     "t": "quiz",
     "id": "en7-1-a",
     "q": "Що означає «flowchart»?",
     "options": [
      "блок-схема",
      "алгоритм",
      "послідовність",
      "вимога"
     ],
     "a": 0,
     "why": "flowchart — блок-схема.",
     "variants": [
      {
       "q": "Що означає «algorithm»?",
       "options": [
        "алгоритм",
        "блок-схема",
        "помилка",
        "вимога"
       ],
       "a": 0,
       "why": "algorithm — алгоритм."
      },
      {
       "q": "Що означає «sequence»?",
       "options": [
        "послідовність кроків",
        "обробка",
        "вихід",
        "вимога"
       ],
       "a": 0,
       "why": "sequence — послідовність кроків."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-1-b",
     "q": "Яка фігура означає start / stop?",
     "options": [
      "oval",
      "rectangle",
      "parallelogram",
      "diamond"
     ],
     "a": 0,
     "why": "Oval — овал: початок і кінець схеми.",
     "variants": [
      {
       "q": "Яка фігура означає input / output?",
       "options": [
        "parallelogram",
        "oval",
        "rectangle",
        "diamond"
       ],
       "a": 0,
       "why": "Parallelogram — похила фігура для input і output."
      },
      {
       "q": "Яка фігура означає process?",
       "options": [
        "rectangle",
        "oval",
        "parallelogram",
        "diamond"
       ],
       "a": 0,
       "why": "Rectangle — прямокутник: обробка, process."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-1-c",
     "q": "Як англійською «вихід — те, що виводить схема»?",
     "options": [
      "output",
      "input",
      "process",
      "sequence"
     ],
     "a": 0,
     "why": "вихід — те, що виводить схема — output.",
     "variants": [
      {
       "q": "Як англійською «вхід — те, що вводить людина»?",
       "options": [
        "input",
        "output",
        "process",
        "requirement"
       ],
       "a": 0,
       "why": "вхід — те, що вводить людина — input."
      },
      {
       "q": "Як англійською «обробка, прямокутник»?",
       "options": [
        "process",
        "input",
        "output",
        "data flow"
       ],
       "a": 0,
       "why": "обробка, прямокутник — process."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-1-d",
     "q": "Що означає «data flow»?",
     "options": [
      "стрілка, потік керування",
      "помилка в алгоритмі",
      "вимога до алгоритму",
      "обробка"
     ],
     "a": 0,
     "why": "data flow — стрілка, потік керування.",
     "variants": [
      {
       "q": "Що означає «error / bug»?",
       "options": [
        "помилка в алгоритмі",
        "вимога до алгоритму",
        "стрілка, потік керування",
        "послідовність кроків"
       ],
       "a": 0,
       "why": "error / bug — помилка в алгоритмі."
      },
      {
       "q": "Що означає «requirement»?",
       "options": [
        "вимога до алгоритму",
        "помилка в алгоритмі",
        "змінити наявне",
        "обробка"
       ],
       "a": 0,
       "why": "requirement — вимога до алгоритму."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-1-e",
     "q": "Що означає «to correct»?",
     "options": [
      "виправити помилку",
      "змінити наявне",
      "запустити",
      "передбачити"
     ],
     "a": 0,
     "why": "to correct — виправити помилку. to edit — змінити наявне.",
     "variants": [
      {
       "q": "Що означає «to edit»?",
       "options": [
        "змінити наявне",
        "виправити помилку",
        "вивести",
        "зберігати"
       ],
       "a": 0,
       "why": "to edit — змінити те, що вже є."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-1-f",
     "q": "Яка фігура в цій схемі — input?",
     "options": [
      "INPUT name",
      "START",
      "OUTPUT \"Hello\", name",
      "STOP"
     ],
     "a": 0,
     "why": "INPUT — те, що вводить людина. Його малюють паралелограмом.",
     "code": "START\n↓\nINPUT name\n↓\nOUTPUT \"Hello\", name\n↓\nSTOP"
    },
    {
     "t": "quiz",
     "id": "en7-1-boss",
     "q": "Бос! Людина вводить Wasim. Що виведе схема?",
     "options": [
      "Hello Wasim",
      "Hello name",
      "Wasim",
      "Hello"
     ],
     "a": 0,
     "why": "name зберігає те, що ввели, — Wasim. OUTPUT виводить \"Hello\" і name.",
     "code": "START\n↓\nINPUT name\n↓\nOUTPUT \"Hello\", name\n↓\nSTOP",
     "boss": true
    }
   ]
  },
  {
   "id": "en7-2",
   "title": "Ромб і розгалуження",
   "lessons": "урок 3",
   "items": [
    {
     "t": "learn",
     "text": "Selection — розгалуження. Decision — ромб із питанням. Відповідь — тільки true або false. З ромба — рівно дві стрілки.",
     "code": "IS age >= 12?\n  true  → OUTPUT \"Можна\"\n  false → OUTPUT \"Ще ні\""
    },
    {
     "t": "quiz",
     "id": "en7-2-a",
     "q": "Що означає «selection»?",
     "options": [
      "розгалуження",
      "рішення, ромб",
      "умова",
      "послідовність кроків"
     ],
     "a": 0,
     "why": "selection — розгалуження.",
     "variants": [
      {
       "q": "Що означає «decision»?",
       "options": [
        "рішення, ромб",
        "розгалуження",
        "умова",
        "обробка, прямокутник"
       ],
       "a": 0,
       "why": "decision — рішення, ромб."
      },
      {
       "q": "Що означає «condition»?",
       "options": [
        "умова",
        "рішення, ромб",
        "розгалуження",
        "вимога до алгоритму"
       ],
       "a": 0,
       "why": "condition — умова."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-2-b",
     "q": "Is 4 > 5?",
     "options": [
      "false",
      "true"
     ],
     "a": 0,
     "why": "4 не більше за 5 — false.",
     "variants": [
      {
       "q": "Is 3 <= 3?",
       "options": [
        "true",
        "false"
       ],
       "a": 0,
       "why": "<= — менше АБО дорівнює. 3 дорівнює 3 — true."
      },
      {
       "q": "Is 19 != 19?",
       "options": [
        "false",
        "true"
       ],
       "a": 0,
       "why": "!= — не дорівнює. 19 дорівнює 19 — false."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-2-c",
     "q": "Як читається знак  != ?",
     "options": [
      "not equal to",
      "equal to",
      "less than",
      "greater than"
     ],
     "a": 0,
     "why": "!= — not equal to, не дорівнює. Знак оклику означає «не».",
     "variants": [
      {
       "q": "Як читається знак  == ?",
       "options": [
        "equal to",
        "not equal to",
        "greater than",
        "less than"
       ],
       "a": 0,
       "why": "== — equal to. В алгоритмі порівняння — два знаки ==."
      },
      {
       "q": "Як читається знак  < ?",
       "options": [
        "less than",
        "greater than",
        "equal to",
        "not equal to"
       ],
       "a": 0,
       "why": "< — less than, менше ніж. Вузький кінець дивиться на менше число."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-2-d",
     "q": "Скільки стрілок виходить з ромба?",
     "options": [
      "рівно дві",
      "одна",
      "три",
      "скільки завгодно"
     ],
     "a": 0,
     "why": "Питання має рівно дві відповіді — true і false. Тому й стрілок дві."
    },
    {
     "t": "quiz",
     "id": "en7-2-e",
     "q": "Що виведе схема для 10 і 10?",
     "options": [
      "Same",
      "Different"
     ],
     "a": 0,
     "why": "10 == 10 — true, гілка true виводить Same.",
     "code": "INPUT number1, number2\n↓\nIS number1 == number2?\n  true  → OUTPUT \"Same\"\n  false → OUTPUT \"Different\"",
     "variants": [
      {
       "q": "Що виведе схема для 5 і 2?",
       "options": [
        "Different",
        "Same"
       ],
       "a": 0,
       "why": "5 == 2 — false, гілка false виводить Different."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-2-f",
     "q": "Як англійською «дорівнює»?",
     "options": [
      "equal to",
      "not equal to",
      "greater than",
      "less than"
     ],
     "a": 0,
     "why": "дорівнює — equal to.",
     "variants": [
      {
       "q": "Як англійською «більше ніж»?",
       "options": [
        "greater than",
        "less than",
        "equal to",
        "not equal to"
       ],
       "a": 0,
       "why": "більше ніж — greater than."
      },
      {
       "q": "Як англійською «істина / хиба»?",
       "options": [
        "true / false",
        "data flow",
        "condition",
        "decision"
       ],
       "a": 0,
       "why": "істина / хиба — true / false."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-2-boss",
     "q": "Бос! Зріст 140. Що виведе схема?",
     "options": [
      "You can ride",
      "Too short"
     ],
     "a": 0,
     "why": ">= — більше АБО дорівнює. 140 >= 140 — true.",
     "code": "INPUT height\n↓\nIS height >= 140?\n  true  → OUTPUT \"You can ride\"\n  false → OUTPUT \"Too short\"",
     "boss": true,
     "variants": [
      {
       "q": "Бос! Зріст 139. Що виведе схема?",
       "options": [
        "Too short",
        "You can ride"
       ],
       "a": 0,
       "why": "139 >= 140 — false, тому гілка false: Too short."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-3",
   "title": "Передбач результат",
   "lessons": "урок 4",
   "items": [
    {
     "t": "learn",
     "text": "Predict — передбачити. Follow — пройти схему крок за кроком. Outcome — результат. Set of data — набір даних, з яким проходимо схему."
    },
    {
     "t": "quiz",
     "id": "en7-3-a",
     "q": "Що означає «predict»?",
     "options": [
      "передбачити",
      "пройти крок за кроком",
      "назвати, вказати",
      "підсумувати"
     ],
     "a": 0,
     "why": "predict — передбачити.",
     "variants": [
      {
       "q": "Що означає «follow»?",
       "options": [
        "пройти крок за кроком",
        "передбачити",
        "підсумувати",
        "назвати, вказати"
       ],
       "a": 0,
       "why": "follow — пройти крок за кроком."
      },
      {
       "q": "Що означає «identify»?",
       "options": [
        "назвати, вказати",
        "передбачити",
        "пройти крок за кроком",
        "підсумувати"
       ],
       "a": 0,
       "why": "identify — назвати, вказати."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-3-b",
     "q": "Що означає «outcome»?",
     "options": [
      "результат",
      "набір даних",
      "інфографіка",
      "логічний оператор"
     ],
     "a": 0,
     "why": "outcome — результат.",
     "variants": [
      {
       "q": "Що означає «set of data»?",
       "options": [
        "набір даних",
        "результат",
        "інфографіка",
        "логічний оператор"
       ],
       "a": 0,
       "why": "set of data — набір даних."
      },
      {
       "q": "Що означає «summarise»?",
       "options": [
        "підсумувати",
        "передбачити",
        "пройти крок за кроком",
        "назвати, вказати"
       ],
       "a": 0,
       "why": "summarise — підсумувати."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-3-c",
     "q": "Як англійською «більше або дорівнює»?",
     "options": [
      "greater than or equal to",
      "less than",
      "not equal to",
      "greater than"
     ],
     "a": 0,
     "why": "більше або дорівнює — greater than or equal to.",
     "variants": [
      {
       "q": "Як англійською «логічний оператор»?",
       "options": [
        "logical operator",
        "set of data",
        "outcome",
        "infographic"
       ],
       "a": 0,
       "why": "логічний оператор — logical operator."
      },
      {
       "q": "Як англійською «кілька розгалужень»?",
       "options": [
        "multiple selection statements",
        "set of data",
        "logical operator",
        "infographic"
       ],
       "a": 0,
       "why": "кілька розгалужень — multiple selection statements."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-3-d",
     "q": "age = 11. Що виведе схема?",
     "options": [
      "Hands in the air",
      "Sit on your hands"
     ],
     "a": 0,
     "why": "11 < 12 — true, гілка true.",
     "code": "INPUT age\n↓\nIS age < 12?\n  true  → OUTPUT \"Hands in the air\"\n  false → OUTPUT \"Sit on your hands\"",
     "variants": [
      {
       "q": "age = 12. Що виведе схема?",
       "options": [
        "Sit on your hands",
        "Hands in the air"
       ],
       "a": 0,
       "why": "Пастка: 12 < 12 — false. Дванадцять не менше за дванадцять."
      },
      {
       "q": "age = 13. Що виведе схема?",
       "options": [
        "Sit on your hands",
        "Hands in the air"
       ],
       "a": 0,
       "why": "13 < 12 — false, гілка false."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-3-g",
     "q": "colour = red. Що виведе схема?",
     "options": [
      "Stand up",
      "Sit on the floor"
     ],
     "a": 0,
     "why": "red != purple — true, гілка true.",
     "code": "INPUT colour\n↓\nIS colour != \"purple\"?\n  true  → OUTPUT \"Stand up\"\n  false → OUTPUT \"Sit on the floor\"",
     "variants": [
      {
       "q": "colour = purple. Що виведе схема?",
       "options": [
        "Sit on the floor",
        "Stand up"
       ],
       "a": 0,
       "why": "purple != purple — false, гілка false."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-3-e",
     "q": "Is 5 >= 5?",
     "options": [
      "true",
      "false"
     ],
     "a": 0,
     "why": ">= — більше АБО дорівнює. 5 дорівнює 5 — true.",
     "variants": [
      {
       "q": "Is 7 < 3?",
       "options": [
        "false",
        "true"
       ],
       "a": 0,
       "why": "7 не менше за 3 — false."
      },
      {
       "q": "Is 4 != 9?",
       "options": [
        "true",
        "false"
       ],
       "a": 0,
       "why": "4 не дорівнює 9 — true."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-3-f",
     "q": "Що означає «infographic»?",
     "options": [
      "інфографіка",
      "набір даних",
      "результат",
      "логічний оператор"
     ],
     "a": 0,
     "why": "infographic — інфографіка: малюнок, що пояснює дані."
    },
    {
     "t": "quiz",
     "id": "en7-3-boss",
     "q": "Бос! Два ромби. Вхід 5 і 2. Що виведе схема?",
     "options": [
      "5",
      "2",
      "Same",
      "7"
     ],
     "a": 0,
     "why": "5 != 2 — true, далі 5 > 2 — true: OUTPUT number1 = 5.",
     "code": "INPUT number1, number2\n↓\nIS number1 != number2?\n  true  → IS number1 > number2?\n            true  → OUTPUT number1\n            false → OUTPUT number2\n  false → OUTPUT \"Same\"",
     "boss": true,
     "variants": [
      {
       "q": "Бос! Два ромби. Вхід 10 і 10. Що виведе схема?",
       "options": [
        "Same",
        "10",
        "20",
        "нічого"
       ],
       "a": 0,
       "why": "10 != 10 — false, одразу гілка false: Same. Друге питання не ставиться."
      },
      {
       "q": "Бос! Два ромби. Вхід 3 і 8. Що виведе схема?",
       "options": [
        "8",
        "3",
        "Same",
        "11"
       ],
       "a": 0,
       "why": "3 != 8 — true, 3 > 8 — false: OUTPUT number2 = 8."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-4",
   "title": "Своя схема і чек-лист",
   "lessons": "урок 5",
   "items": [
    {
     "t": "learn",
     "text": "Checklist — чек-лист: правила правильної схеми. Кроки йдуть in the correct order — у правильному порядку. Кожна фігура — своя робота."
    },
    {
     "t": "quiz",
     "id": "en7-4-a",
     "q": "Що означає «checklist»?",
     "options": [
      "чек-лист, перелік правил",
      "опис",
      "плакат",
      "твердження"
     ],
     "a": 0,
     "why": "checklist — чек-лист, перелік правил.",
     "variants": [
      {
       "q": "Що означає «description»?",
       "options": [
        "опис",
        "чек-лист, перелік правил",
        "плакат",
        "вимога"
       ],
       "a": 0,
       "why": "description — опис."
      },
      {
       "q": "Що означає «poster»?",
       "options": [
        "плакат",
        "опис",
        "твердження",
        "чек-лист, перелік правил"
       ],
       "a": 0,
       "why": "poster — плакат."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-4-b",
     "q": "Що означає «accurate»?",
     "options": [
      "точний, правильний",
      "переписати інакше",
      "обмінятися",
      "помилка"
     ],
     "a": 0,
     "why": "accurate — точний, правильний.",
     "variants": [
      {
       "q": "Що означає «swap»?",
       "options": [
        "обмінятися",
        "переписати інакше",
        "точний, правильний",
        "твердження"
       ],
       "a": 0,
       "why": "swap — обмінятися."
      },
      {
       "q": "Що означає «rephrase»?",
       "options": [
        "переписати інакше",
        "обмінятися",
        "твердження",
        "точний, правильний"
       ],
       "a": 0,
       "why": "rephrase — переписати інакше."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-4-c",
     "q": "Як англійською «у правильному порядку»?",
     "options": [
      "in the correct order",
      "in the wrong order",
      "more than once",
      "set of data"
     ],
     "a": 0,
     "why": "у правильному порядку — in the correct order.",
     "variants": [
      {
       "q": "Як англійською «твердження»?",
       "options": [
        "statement",
        "description",
        "requirement",
        "checklist"
       ],
       "a": 0,
       "why": "твердження — statement."
      },
      {
       "q": "Як англійською «фігура блок-схеми»?",
       "options": [
        "flowchart symbol",
        "data flow",
        "description",
        "statement"
       ],
       "a": 0,
       "why": "фігура блок-схеми — flowchart symbol."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-4-d",
     "q": "Яка фігура для selection?",
     "options": [
      "diamond",
      "oval",
      "rectangle",
      "parallelogram"
     ],
     "a": 0,
     "why": "Diamond — ромб із питанням. Від нього дві стрілки true / false.",
     "variants": [
      {
       "q": "У яку фігуру пишемо INPUT age?",
       "options": [
        "parallelogram",
        "diamond",
        "oval",
        "rectangle"
       ],
       "a": 0,
       "why": "Input і output — parallelogram."
      },
      {
       "q": "У яку фігуру пишемо STOP?",
       "options": [
        "oval",
        "rectangle",
        "diamond",
        "parallelogram"
       ],
       "a": 0,
       "why": "Start і stop — oval."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-4-e",
     "q": "Як питання для ромба: «Which number is larger, 5 or 2?»",
     "options": [
      "Is 5 > 2?",
      "Which number is larger?",
      "5 or 2",
      "OUTPUT 5"
     ],
     "a": 0,
     "why": "У ромбі — питання з відповіддю true або false. «Is 5 > 2?» — так.",
     "variants": [
      {
       "q": "Як питання для ромба: «How old are you?» (знижка — до 18)",
       "options": [
        "Is age < 18?",
        "How old are you?",
        "age",
        "OUTPUT age"
       ],
       "a": 0,
       "why": "Відповідь на «How old are you?» — число, а не true / false. Ромбу треба «Is age < 18?»."
      }
     ]
    },
    {
     "t": "bugline",
     "id": "en7-4-f",
     "q": "Тапни рядок, що порушує правило: стрілки з ромба підписані true / false.",
     "lines": [
      "START",
      "INPUT number1, number2",
      "IS number1 == number2?",
      "  true → OUTPUT \"Same\"",
      "  → OUTPUT \"Different\"",
      "STOP"
     ],
     "a": 4,
     "why": "Без підпису схему не прочитати. Друга стрілка — false."
    },
    {
     "t": "quiz",
     "id": "en7-4-boss",
     "q": "Бос! Склади схему в правильному порядку. Що йде одразу після START?",
     "options": [
      "INPUT two numbers",
      "IS number1 == number2?",
      "OUTPUT \"Same\"",
      "STOP"
     ],
     "a": 0,
     "why": "Спершу ввести дані, потім порівняти, потім вивести, наприкінці STOP.",
     "boss": true,
     "variants": [
      {
       "q": "Бос! Порядок: START → INPUT two numbers → ? → OUTPUT → STOP. Що замість «?»",
       "options": [
        "IS number1 == number2?",
        "STOP",
        "START",
        "INPUT two numbers"
       ],
       "a": 0,
       "why": "Після вводу — ромб із питанням, а вже потім вивід."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-5",
   "title": "Підпрограми",
   "lessons": "урок 6",
   "items": [
    {
     "t": "learn",
     "text": "Sub-routine — окремий алгоритм з імʼям (identifier). Main flowchart його викликає (to call). Потім підпрограма повертає керування назад.",
     "code": "main flowchart:  START → Run Me First → Run Me Second → STOP\n\nRun Me First:   OUTPUT \"Hello\" → STOP\nRun Me Second:  OUTPUT \"Goodbye\" → STOP"
    },
    {
     "t": "quiz",
     "id": "en7-5-a",
     "q": "Що означає «sub-routine»?",
     "options": [
      "підпрограма",
      "головна схема",
      "ідентифікатор, імʼя",
      "окремий алгоритм"
     ],
     "a": 0,
     "why": "sub-routine — підпрограма.",
     "variants": [
      {
       "q": "Що означає «identifier»?",
       "options": [
        "ідентифікатор, імʼя",
        "підпрограма",
        "головна схема",
        "символ, фігура"
       ],
       "a": 0,
       "why": "identifier — ідентифікатор, імʼя."
      },
      {
       "q": "Що означає «main flowchart»?",
       "options": [
        "головна схема",
        "підпрограма",
        "окремий алгоритм",
        "ідентифікатор, імʼя"
       ],
       "a": 0,
       "why": "main flowchart — головна схема."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-5-b",
     "q": "Що означає «to call»?",
     "options": [
      "викликати",
      "повернути керування",
      "змінити",
      "передбачити"
     ],
     "a": 0,
     "why": "to call — викликати.",
     "variants": [
      {
       "q": "Що означає «to return control»?",
       "options": [
        "повернути керування",
        "викликати",
        "змінити",
        "пройти крок за кроком"
       ],
       "a": 0,
       "why": "to return control — повернути керування."
      },
      {
       "q": "Що означає «more than once»?",
       "options": [
        "більше ніж один раз",
        "ті самі кроки",
        "у неправильному порядку",
        "окремий алгоритм"
       ],
       "a": 0,
       "why": "more than once — більше ніж один раз."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-5-c",
     "q": "Коли потрібна підпрограма?",
     "options": [
      "Коли ті самі кроки треба виконати більше ніж один раз",
      "Коли в схемі є ромб",
      "Коли схема дуже коротка",
      "Коли немає input"
     ],
     "a": 0,
     "why": "When the same series of steps might need to run more than once."
    },
    {
     "t": "quiz",
     "id": "en7-5-d",
     "q": "Що виведе схема?",
     "options": [
      "Hello Goodbye",
      "Goodbye Hello",
      "Hello Hello",
      "Hello"
     ],
     "a": 0,
     "why": "Main flowchart викликає спершу Run Me First (Hello), потім Run Me Second (Goodbye).",
     "code": "main flowchart:  START → Run Me First → Run Me Second → STOP\n\nRun Me First:   OUTPUT \"Hello\" → STOP\nRun Me Second:  OUTPUT \"Goodbye\" → STOP"
    },
    {
     "t": "quiz",
     "id": "en7-5-e",
     "q": "value = 30. Що виведе схема?",
     "options": [
      "60",
      "50",
      "30",
      "25"
     ],
     "a": 0,
     "why": "30 > 20 — true → Higher: 30 + 30 = 60.",
     "code": "INPUT value\nIS value > 20?\n  true  → Higher\n  false → Lower\n\nHigher: OUTPUT value + value\nLower:  OUTPUT value + 20",
     "variants": [
      {
       "q": "value = 5. Що виведе схема?",
       "options": [
        "25",
        "10",
        "5",
        "60"
       ],
       "a": 0,
       "why": "5 > 20 — false → Lower: 5 + 20 = 25."
      },
      {
       "q": "value = 20. Що виведе схема?",
       "options": [
        "40",
        "60",
        "20",
        "0"
       ],
       "a": 0,
       "why": "20 > 20 — false → Lower: 20 + 20 = 40."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-5-f",
     "q": "Що буде в кінці підпрограми?",
     "options": [
      "STOP або RETURN",
      "START",
      "ромб",
      "INPUT"
     ],
     "a": 0,
     "why": "Підпрограма закінчується STOP або RETURN і повертає керування в main flowchart.",
     "variants": [
      {
       "q": "Чим має збігатися підпрограма і її виклик?",
       "options": [
        "identifier — буква в букву",
        "кольором",
        "кількістю стрілок",
        "нічим"
       ],
       "a": 0,
       "why": "Identifier однаковий в обох місцях, буква в букву."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-5-boss",
     "q": "Бос! Треба вивести Hello · Hello · Goodbye. Яка main flowchart?",
     "options": [
      "START → Run Me First → Run Me First → Run Me Second → STOP",
      "START → Run Me Second → Run Me First → STOP",
      "START → Run Me First → Run Me Second → STOP",
      "START → Run Me First → STOP"
     ],
     "a": 0,
     "why": "Одну підпрограму можна викликати more than once: двічі Run Me First, потім Run Me Second.",
     "code": "main flowchart:  START → Run Me First → Run Me Second → STOP\n\nRun Me First:   OUTPUT \"Hello\" → STOP\nRun Me Second:  OUTPUT \"Goodbye\" → STOP",
     "boss": true,
     "variants": [
      {
       "q": "Бос! Треба вивести Goodbye · Hello · Goodbye. Яка main flowchart?",
       "options": [
        "START → Run Me Second → Run Me First → Run Me Second → STOP",
        "START → Run Me First → Run Me Second → STOP",
        "START → Run Me Second → Run Me Second → STOP",
        "START → Run Me First → Run Me First → STOP"
       ],
       "a": 0,
       "why": "Порядок виклику = порядок виводу: Second, First, Second."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-6",
   "title": "Повтори і вибір",
   "lessons": "уроки 7–8",
   "items": [
    {
     "t": "learn",
     "text": "Pattern — повтор, закономірність. Pattern recognition — пошук повторів. Повтор у схемі → роби sub-routine. IF, THEN, ELSE → selection."
    },
    {
     "t": "quiz",
     "id": "en7-6-a",
     "q": "Що означає «pattern»?",
     "options": [
      "повтор, закономірність",
      "повторення",
      "конструкція",
      "варіант"
     ],
     "a": 0,
     "why": "pattern — повтор, закономірність.",
     "variants": [
      {
       "q": "Що означає «pattern recognition»?",
       "options": [
        "пошук повторів",
        "частини, що повторюються",
        "повторення",
        "вибір"
       ],
       "a": 0,
       "why": "pattern recognition — пошук повторів."
      },
      {
       "q": "Що означає «repeated elements»?",
       "options": [
        "частини, що повторюються",
        "пошук повторів",
        "конструкція",
        "варіант"
       ],
       "a": 0,
       "why": "repeated elements — частини, що повторюються."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-6-b",
     "q": "Що означає «choice»?",
     "options": [
      "вибір",
      "варіант",
      "конструкція",
      "повторення"
     ],
     "a": 0,
     "why": "choice — вибір.",
     "variants": [
      {
       "q": "Що означає «option»?",
       "options": [
        "варіант",
        "вибір",
        "конструкція",
        "результат"
       ],
       "a": 0,
       "why": "option — варіант."
      },
      {
       "q": "Що означає «construct»?",
       "options": [
        "конструкція",
        "варіант",
        "вибір",
        "повторення"
       ],
       "a": 0,
       "why": "construct — конструкція."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-6-c",
     "q": "Яке число далі?",
     "options": [
      "7",
      "1",
      "3",
      "9"
     ],
     "a": 0,
     "why": "Повтор 3 7 1. Після 3 іде 7.",
     "code": "3 7 1 3 7 1 3 7 1 3 …",
     "variants": [
      {
       "q": "Який повтор у рядку?",
       "options": [
        "3 7 1 — three times",
        "3 — three times",
        "7 1 — two times",
        "повтору немає"
       ],
       "a": 0,
       "why": "3 7 1 повторюється тричі."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-6-d",
     "q": "Що в схемі повторюється (repeated elements)?",
     "options": [
      "Turn right 90° → Move forward 15 steps",
      "Turn left 90° → Move forward 5 steps",
      "Start facing the front",
      "Stop"
     ],
     "a": 0,
     "why": "Turn right 90° і Move forward 15 steps ідуть двічі — з них виходить підпрограма Turn and move.",
     "code": "Start facing the front\nTurn right 90°\nMove forward 15 steps\nTurn right 90°\nMove forward 15 steps\nTurn left 90°\nMove forward 5 steps\nStop"
    },
    {
     "t": "quiz",
     "id": "en7-6-e",
     "q": "IF, THEN, ELSE дають вибір. Як це називається?",
     "options": [
      "selection",
      "sequence",
      "repetition",
      "pattern"
     ],
     "a": 0,
     "why": "Вибір одного з варіантів — selection.",
     "variants": [
      {
       "q": "Кроки один за одним, без ромба. Що це?",
       "options": [
        "sequence",
        "selection",
        "sub-routine",
        "pattern"
       ],
       "a": 0,
       "why": "Sequence — послідовність кроків. Ромба немає — вибору немає."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-6-f",
     "q": "Як англійською «вибрати»?",
     "options": [
      "to select",
      "to call",
      "to edit",
      "to correct"
     ],
     "a": 0,
     "why": "вибрати — to select.",
     "variants": [
      {
       "q": "Як англійською «повторення»?",
       "options": [
        "repetition",
        "pattern",
        "selection",
        "choice"
       ],
       "a": 0,
       "why": "повторення — repetition."
      },
      {
       "q": "Як англійською «результат»?",
       "options": [
        "outcome",
        "option",
        "choice",
        "pattern"
       ],
       "a": 0,
       "why": "результат — outcome."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-6-boss",
     "q": "Бос! Є повтор у схемі. Що робимо?",
     "options": [
      "Робимо sub-routine і викликаємо її двічі",
      "Додаємо ромб",
      "Стираємо повтор",
      "Нічого"
     ],
     "a": 0,
     "why": "Спершу pattern recognition, потім повтор стає підпрограмою, яку викликають more than once.",
     "boss": true,
     "variants": [
      {
       "q": "Бос! Is 12 <= 12?",
       "options": [
        "true",
        "false"
       ],
       "a": 0,
       "why": "<= — менше АБО дорівнює. 12 дорівнює 12 — true."
      },
      {
       "q": "Бос! Is 5 != 5?",
       "options": [
        "false",
        "true"
       ],
       "a": 0,
       "why": "5 дорівнює 5, тому «не дорівнює» — false."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-7",
   "title": "Python: print і input",
   "lessons": "урок 9",
   "items": [
    {
     "t": "learn",
     "text": "Python — текстова мова. print — вивести те, що в дужках. input — чекати на текст від користувача. Текст беремо в speech marks \" \".",
     "code": "print(\"Hello world!\")\nname = input(\"What is your name?\")\nprint(\"Hello \", name)"
    },
    {
     "t": "quiz",
     "id": "en7-7-a",
     "q": "Що означає «text-based program»?",
     "options": [
      "текстова програма",
      "програма з блоків",
      "середовище розробки",
      "командне слово"
     ],
     "a": 0,
     "why": "text-based program — текстова програма.",
     "variants": [
      {
       "q": "Що означає «block-based program»?",
       "options": [
        "програма з блоків",
        "текстова програма",
        "код, текст програми",
        "середовище розробки"
       ],
       "a": 0,
       "why": "block-based program — програма з блоків."
      },
      {
       "q": "Що означає «IDE»?",
       "options": [
        "середовище розробки",
        "текстова програма",
        "командне слово",
        "повідомлення"
       ],
       "a": 0,
       "why": "IDE — середовище розробки."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-7-b",
     "q": "Що означає «speech marks»?",
     "options": [
      "лапки",
      "дужки",
      "малі літери",
      "новий рядок"
     ],
     "a": 0,
     "why": "speech marks — лапки.",
     "variants": [
      {
       "q": "Що означає «lowercase»?",
       "options": [
        "малі літери",
        "лапки",
        "новий рядок",
        "дужки"
       ],
       "a": 0,
       "why": "lowercase — малі літери."
      },
      {
       "q": "Що означає «case-sensitive»?",
       "options": [
        "розрізняє великі й малі літери",
        "малі літери",
        "новий рядок",
        "запустити"
       ],
       "a": 0,
       "why": "case-sensitive — розрізняє великі й малі літери."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-7-c",
     "q": "Що означає «to run»?",
     "options": [
      "запустити",
      "набирати",
      "вивести",
      "ввести"
     ],
     "a": 0,
     "why": "to run — запустити.",
     "variants": [
      {
       "q": "Що означає «to type»?",
       "options": [
        "набирати",
        "запустити",
        "вивести",
        "ввести"
       ],
       "a": 0,
       "why": "to type — набирати."
      },
      {
       "q": "Що означає «message»?",
       "options": [
        "повідомлення",
        "код, текст програми",
        "лапки",
        "змінна"
       ],
       "a": 0,
       "why": "message — повідомлення."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-7-d",
     "q": "Користувач вводить Wasim. Що виведе останній рядок програми?",
     "options": [
      "Hello Wasim",
      "Hello name",
      "Wasim",
      "What is your name?"
     ],
     "a": 0,
     "why": "name зберігає Wasim. print виводить \"Hello \" і вміст name. Кома в print додає ще пробіл, тож між словами їх буде два.",
     "code": "print(\"Hello world!\")\nname = input(\"What is your name?\")\nprint(\"Hello \", name)"
    },
    {
     "t": "quiz",
     "id": "en7-7-e",
     "q": "Що означає print?",
     "options": [
      "Команда вивести те, що в дужках",
      "Команда чекати на текст",
      "Змінна",
      "Лапки"
     ],
     "a": 0,
     "why": "print — the instruction to output what is in the brackets.",
     "variants": [
      {
       "q": "Що означає input?",
       "options": [
        "Команда чекати на текст, який вводить користувач",
        "Команда вивести",
        "Номер рядка",
        "Дужки"
       ],
       "a": 0,
       "why": "input — the instruction to wait for the text a user enters."
      }
     ]
    },
    {
     "t": "bugline",
     "id": "en7-7-f",
     "q": "Тапни рядок з помилкою.",
     "lines": [
      "print(\"Good morning\")",
      "Print(\"Hello\")",
      "print(\"See you on Friday\")"
     ],
     "a": 1,
     "why": "Python — case-sensitive. Команда пишеться малими літерами: print.",
     "variants": [
      {
       "lines": [
        "print(\"Good morning\")",
        "print(Hello)",
        "print(\"See you on Friday\")"
       ],
       "a": 1,
       "why": "Текст беремо в speech marks: print(\"Hello\")."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-7-g",
     "q": "Block-based чи text-based? «You have to type everything.»",
     "options": [
      "text-based",
      "block-based"
     ],
     "a": 0,
     "why": "У текстовій програмі блоків немає — усе треба набирати.",
     "variants": [
      {
       "q": "Block-based чи text-based? «You choose from a list of code.»",
       "options": [
        "block-based",
        "text-based"
       ],
       "a": 0,
       "why": "Список готового коду є лише в програмі з блоків."
      },
      {
       "q": "Block-based чи text-based? «There are no blocks.»",
       "options": [
        "text-based",
        "block-based"
       ],
       "a": 0,
       "why": "Немає блоків — це текстова програма."
      }
     ]
    },
    {
     "t": "bugline",
     "id": "en7-7-boss",
     "q": "Бос! Тапни рядок з помилкою.",
     "lines": [
      "print(\"This is my first message\")",
      "print(\"This is my second message)",
      "print(\"This is my third message\")"
     ],
     "a": 1,
     "why": "Лапки треба і відкрити, і закрити: \"This is my second message\".",
     "boss": true,
     "variants": [
      {
       "lines": [
        "name = input(\"What is your name?\")",
        "print(\"Hello \", name",
        "print(\"Goodbye\")"
       ],
       "a": 1,
       "why": "Дужку треба закрити: print(\"Hello \", name)."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-8",
   "title": "Integer, Real, String",
   "lessons": "урок 10",
   "items": [
    {
     "t": "learn",
     "text": "Integer — ціле число: 10. Real — з дробовою частиною: 20.5 (у Python — float). String — текст у лапках: \"Bob\"."
    },
    {
     "t": "quiz",
     "id": "en7-8-a",
     "q": "Який тип у 205?",
     "options": [
      "Integer",
      "Real",
      "String"
     ],
     "a": 0,
     "why": "205 — whole number, ціле число.",
     "variants": [
      {
       "q": "Який тип у 0.3?",
       "options": [
        "Real",
        "Integer",
        "String"
       ],
       "a": 0,
       "why": "0.3 — decimal number, Real."
      },
      {
       "q": "Який тип у \"horse\"?",
       "options": [
        "String",
        "Integer",
        "Real"
       ],
       "a": 0,
       "why": "Текст у лапках — String."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-8-b",
     "q": "Який тип у 7.0?",
     "options": [
      "Real",
      "Integer",
      "String"
     ],
     "a": 0,
     "why": "Дробова частина 0, але вона є — тому Real.",
     "variants": [
      {
       "q": "Який тип у \"seven\"?",
       "options": [
        "String",
        "Integer",
        "Real"
       ],
       "a": 0,
       "why": "Слово в лапках — String."
      },
      {
       "q": "Який тип у 7?",
       "options": [
        "Integer",
        "Real",
        "String"
       ],
       "a": 0,
       "why": "7 — ціле число, Integer."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-8-c",
     "q": "Що означає «data type»?",
     "options": [
      "тип даних",
      "дані",
      "значення",
      "змінна"
     ],
     "a": 0,
     "why": "data type — тип даних.",
     "variants": [
      {
       "q": "Що означає «whole number»?",
       "options": [
        "ціле число",
        "десятковий дріб",
        "текст",
        "значення"
       ],
       "a": 0,
       "why": "whole number — ціле число."
      },
      {
       "q": "Що означає «decimal number»?",
       "options": [
        "десятковий дріб",
        "ціле число",
        "текст",
        "тип даних"
       ],
       "a": 0,
       "why": "decimal number — десятковий дріб."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-8-d",
     "q": "Що виведе print(Result)?",
     "options": [
      "ab",
      "a b",
      "Error",
      "a+b"
     ],
     "a": 0,
     "why": "Два String при додаванні зʼєднуються: ab.",
     "code": "Result = \"a\" + \"b\"\nprint(Result)",
     "variants": [
      {
       "q": "Що виведе print(Result)?",
       "options": [
        "BobBobBob",
        "Bob3",
        "Error",
        "3"
       ],
       "a": 0,
       "why": "Integer × String — String виводиться стільки разів."
      },
      {
       "q": "Що виведе print(Result)?",
       "options": [
        "Error",
        "3",
        "hi3",
        "hihihi"
       ],
       "a": 0,
       "why": "Не можна поділити Integer на String — Error."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-8-e",
     "q": "Що виведе: 3 * \"1\"?",
     "options": [
      "111",
      "3",
      "Error",
      "4"
     ],
     "a": 0,
     "why": "\"1\" у лапках — String, тому виводиться 3 рази: 111.",
     "variants": [
      {
       "q": "Що виведе: 3 * 1?",
       "options": [
        "3",
        "111",
        "Error",
        "31"
       ],
       "a": 0,
       "why": "1 без лапок — Integer: 3 × 1 = 3."
      },
      {
       "q": "Що виведе: \"hello\" + 3?",
       "options": [
        "Error",
        "hello3",
        "hellohellohello",
        "3"
       ],
       "a": 0,
       "why": "Не можна додати String до Integer — Error."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-8-f",
     "q": "Що виведе: 10 - 20.5?",
     "options": [
      "-10.5",
      "10.5",
      "Error",
      "30.5"
     ],
     "a": 0,
     "why": "Integer і Real можна віднімати: -10.5 — Real.",
     "variants": [
      {
       "q": "Що виведе: 0.3 + 0.8?",
       "options": [
        "1.1",
        "0.11",
        "Error",
        "11"
       ],
       "a": 0,
       "why": "Два Real додаються: 1.1."
      },
      {
       "q": "Що виведе: 205 + 0.3?",
       "options": [
        "205.3",
        "2050.3",
        "Error",
        "205"
       ],
       "a": 0,
       "why": "Integer + Real = 205.3."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-8-g",
     "q": "Value1 = 205. Що виведе print(\"Value1\")?",
     "options": [
      "Value1",
      "205",
      "Error",
      "\"205\""
     ],
     "a": 0,
     "why": "У лапках — саме слово Value1, а не вміст змінної.",
     "variants": [
      {
       "q": "Value1 = 205. Що виведе print(Value1)?",
       "options": [
        "205",
        "Value1",
        "Error",
        "\"Value1\""
       ],
       "a": 0,
       "why": "Без лапок — вміст змінної Value1: 205."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-8-boss",
     "q": "Бос! Яке правило правильне?",
     "options": [
      "When you add two Strings they join together.",
      "You can divide an Integer by a String.",
      "You can add a String to an Integer.",
      "You cannot multiply Integer and Real numbers."
     ],
     "a": 0,
     "why": "Два String зʼєднуються. Ділити й додавати String та числа не можна.",
     "boss": true,
     "variants": [
      {
       "q": "Бос! Яке правило правильне?",
       "options": [
        "You cannot divide an Integer by a String.",
        "You can add a String to a Real.",
        "Strings are surrounded by brackets.",
        "10.0 is an Integer."
       ],
       "a": 0,
       "why": "Integer на String не ділиться. String — у speech marks, а 10.0 — Real."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-9",
   "title": "Змінні й арифметика",
   "lessons": "урок 11",
   "items": [
    {
     "t": "learn",
     "text": "Variable — місце в памʼяті (memory location), де лежить value. Імʼя змінної — identifier. Reserved word (print, input) — не можна брати за імʼя.",
     "code": "MyName = \"Fabrizio\"\nMyAge = 13\nprint(\"Hello\", MyName)\nprint(\"You are\", MyAge, \"years old\")"
    },
    {
     "t": "quiz",
     "id": "en7-9-a",
     "q": "Що означає «variable»?",
     "options": [
      "змінна",
      "значення",
      "кома",
      "результат"
     ],
     "a": 0,
     "why": "variable — змінна.",
     "variants": [
      {
       "q": "Що означає «value»?",
       "options": [
        "значення",
        "змінна",
        "кома",
        "сума, підсумок"
       ],
       "a": 0,
       "why": "value — значення."
      },
      {
       "q": "Що означає «memory location»?",
       "options": [
        "місце в памʼяті",
        "зарезервоване слово",
        "команда виводу",
        "значення"
       ],
       "a": 0,
       "why": "memory location — місце в памʼяті."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-9-b",
     "q": "Що означає «reserved word»?",
     "options": [
      "зарезервоване слово",
      "командне слово",
      "імʼя змінної",
      "команда виводу"
     ],
     "a": 0,
     "why": "reserved word — зарезервоване слово.",
     "variants": [
      {
       "q": "Що означає «to access»?",
       "options": [
        "дістати, звернутися",
        "зберігати",
        "додати",
        "поділити"
       ],
       "a": 0,
       "why": "to access — дістати, звернутися."
      },
      {
       "q": "Що означає «output statement»?",
       "options": [
        "команда виводу",
        "зарезервоване слово",
        "кома",
        "місце в памʼяті"
       ],
       "a": 0,
       "why": "output statement — команда виводу."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-9-c",
     "q": "Можна назвати змінну print?",
     "options": [
      "No — print is a command word",
      "OK",
      "OK, якщо з великої",
      "OK, якщо в лапках"
     ],
     "a": 0,
     "why": "print — command word у Python, його не можна брати за identifier.",
     "variants": [
      {
       "q": "Можна назвати змінну MyAge?",
       "options": [
        "OK",
        "No — це command word"
       ],
       "a": 0,
       "why": "MyAge — звичайне імʼя, не reserved word."
      },
      {
       "q": "Можна назвати змінну input?",
       "options": [
        "No — input is a command word",
        "OK"
       ],
       "a": 0,
       "why": "input — command word, reserved."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-9-d",
     "q": "Що виведе другий print?",
     "options": [
      "You are 13 years old",
      "You are MyAge years old",
      "Hello Fabrizio",
      "13"
     ],
     "a": 0,
     "why": "Кома зʼєднує текст і змінну: You are, 13, years old.",
     "code": "MyName = \"Fabrizio\"\nMyAge = 13\nprint(\"Hello\", MyName)\nprint(\"You are\", MyAge, \"years old\")",
     "variants": [
      {
       "q": "Скільки output statements у програмі?",
       "options": [
        "Two",
        "One",
        "Four",
        "Three"
       ],
       "a": 0,
       "why": "Два рядки з print."
      },
      {
       "q": "Які дані зберігає MyName?",
       "options": [
        "\"Fabrizio\"",
        "13",
        "Hello",
        "MyName"
       ],
       "a": 0,
       "why": "MyName = \"Fabrizio\" — String."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-9-e",
     "q": "20 / 4 = ?",
     "options": [
      "5",
      "80",
      "16",
      "24"
     ],
     "a": 0,
     "why": "/ — divide, поділити.",
     "variants": [
      {
       "q": "5 * 5 = ?",
       "options": [
        "25",
        "10",
        "0",
        "1"
       ],
       "a": 0,
       "why": "* — multiply, помножити."
      },
      {
       "q": "15 - 9 = ?",
       "options": [
        "6",
        "24",
        "135",
        "5"
       ],
       "a": 0,
       "why": "- — subtract, відняти."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-9-f",
     "q": "Який знак — to multiply?",
     "options": [
      "*",
      "/",
      "+",
      "-"
     ],
     "a": 0,
     "why": "multiply — помножити, знак *.",
     "variants": [
      {
       "q": "Який знак — to divide?",
       "options": [
        "/",
        "*",
        "-",
        "+"
       ],
       "a": 0,
       "why": "divide — поділити, знак /."
      },
      {
       "q": "Що означає «total»?",
       "options": [
        "сума, підсумок",
        "кома",
        "дужки",
        "значення"
       ],
       "a": 0,
       "why": "total — сума, підсумок."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-9-g",
     "q": "Користувач вводить 7. Який тип у guess?",
     "options": [
      "String",
      "Integer",
      "Real"
     ],
     "a": 0,
     "why": "input завжди зберігає String.",
     "code": "number = 10\nguess = input(\"Guess what the number is?\")\nprint(\"Your number was\", guess, \"and the actual number is\", number)",
     "variants": [
      {
       "q": "Користувач вводить 7. Що виведе програма?",
       "options": [
        "Your number was 7 and the actual number is 10",
        "Your number was 10 and the actual number is 7",
        "7",
        "Error"
       ],
       "a": 0,
       "why": "guess = 7, number = 10. Кома зʼєднує все в один рядок."
      }
     ]
    },
    {
     "t": "bugline",
     "id": "en7-9-boss",
     "q": "Бос! Тапни рядок з помилкою.",
     "lines": [
      "MyName = \"Wasim\"",
      "MyAge = 15",
      "print(\"Hello\", MyName)",
      "print(You are, MyAge, \"years old\")"
     ],
     "a": 3,
     "why": "Якщо прибрати speech marks з тексту в print — буде помилка. Треба \"You are\".",
     "boss": true,
     "variants": [
      {
       "lines": [
        "MyName = input(\"Enter your name\")",
        "print = \"purple\"",
        "print(\"Hello\", MyName)"
       ],
       "a": 1,
       "why": "print — reserved word, його не можна брати за імʼя змінної."
      }
     ]
    }
   ]
  },
  {
   "id": "en7-10",
   "title": "Великий ремонт: усе разом",
   "lessons": "уроки 1–11",
   "items": [
    {
     "t": "learn",
     "text": "Повторюємо все: фігури, ромб, підпрограми, повтори, Python, типи даних і змінні."
    },
    {
     "t": "quiz",
     "id": "en7-10-a",
     "q": "Яка фігура — decision?",
     "options": [
      "diamond",
      "oval",
      "rectangle",
      "parallelogram"
     ],
     "a": 0,
     "why": "Decision — ромб, diamond.",
     "variants": [
      {
       "q": "Яка фігура — process?",
       "options": [
        "rectangle",
        "diamond",
        "oval",
        "parallelogram"
       ],
       "a": 0,
       "why": "Process — rectangle, прямокутник."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-10-b",
     "q": "Як англійською «змінна»?",
     "options": [
      "variable",
      "value",
      "identifier",
      "sub-routine"
     ],
     "a": 0,
     "why": "змінна — variable.",
     "variants": [
      {
       "q": "Як англійською «підпрограма»?",
       "options": [
        "sub-routine",
        "main flowchart",
        "variable",
        "pattern"
       ],
       "a": 0,
       "why": "підпрограма — sub-routine."
      },
      {
       "q": "Як англійською «умова»?",
       "options": [
        "condition",
        "decision",
        "selection",
        "outcome"
       ],
       "a": 0,
       "why": "умова — condition."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-10-c",
     "q": "Is 40 > 4?",
     "options": [
      "true",
      "false"
     ],
     "a": 0,
     "why": "40 більше за 4 — true.",
     "variants": [
      {
       "q": "Is 12 < 12?",
       "options": [
        "false",
        "true"
       ],
       "a": 0,
       "why": "12 не менше за 12 — false."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-10-d",
     "q": "Що виведе print(2 * \"hi\")?",
     "options": [
      "hihi",
      "2hi",
      "Error",
      "hi"
     ],
     "a": 0,
     "why": "Integer × String — String двічі.",
     "variants": [
      {
       "q": "Що виведе print(\"horse\" + \"blue\")?",
       "options": [
        "horseblue",
        "horse blue",
        "Error",
        "blue horse"
       ],
       "a": 0,
       "why": "Два String зʼєднуються без пробілу."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-10-e",
     "q": "Що означає «pattern recognition»?",
     "options": [
      "пошук повторів",
      "підпрограма",
      "розгалуження",
      "змінна"
     ],
     "a": 0,
     "why": "pattern recognition — пошук повторів.",
     "variants": [
      {
       "q": "Що означає «set of data»?",
       "options": [
        "набір даних",
        "результат",
        "змінна",
        "тип даних"
       ],
       "a": 0,
       "why": "set of data — набір даних."
      },
      {
       "q": "Що означає «command word»?",
       "options": [
        "командне слово",
        "зарезервоване слово",
        "імʼя змінної",
        "кома"
       ],
       "a": 0,
       "why": "command word — командне слово."
      }
     ]
    },
    {
     "t": "bugline",
     "id": "en7-10-f",
     "q": "Тапни рядок з помилкою.",
     "lines": [
      "Name = \"Bob\"",
      "print(Name)",
      "PRINT(\"Name\")"
     ],
     "a": 2,
     "why": "Python — case-sensitive: тільки print малими літерами.",
     "variants": [
      {
       "lines": [
        "number = 10",
        "guess = input(\"Guess what the number is?\"",
        "print(guess)"
       ],
       "a": 1,
       "why": "Не закрита дужка: input(\"…\")."
      }
     ]
    },
    {
     "t": "quiz",
     "id": "en7-10-boss",
     "q": "Бос! Що виведе програма?",
     "options": [
      "3",
      "111",
      "Error",
      "1"
     ],
     "a": 0,
     "why": "1 без лапок — Integer: 3 × 1 = 3.",
     "code": "Result = 3 * 1\nprint(Result)",
     "boss": true,
     "variants": [
      {
       "q": "Бос! Що виведе програма, якщо 1 взяти в лапки: 3 * \"1\"?",
       "options": [
        "111",
        "3",
        "Error",
        "4"
       ],
       "a": 0,
       "why": "\"1\" — String, виводиться тричі: 111."
      }
     ]
    }
   ]
  }
 ]
};
