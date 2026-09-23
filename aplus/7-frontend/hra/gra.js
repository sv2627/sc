/* ═══════════════════════════════════════════════════════════════════════════
   GAME — рушій для власних ігор
   Front-end II · 7 клас · A+ · 2026/27

   Підключається одним рядком:
       <script src="gra.js"></script>

   Далі досить описати гру налаштуваннями — писати JavaScript не треба:
       Game.snake({ field: 20, snakeColor: '#00e676' });
       Game.puzzle({ image: 'foto.jpg', grid: 3 });

   Хто хоче більше — унизу файлу є прості цеглинки (drawSquare, onKey,
   everyMs), з яких збирається третя, своя гра.

   Тут нема нічого чарівного: усе це ті самі команди, які будуть
   у JavaScript у 8 класі. Зараз ми ними користуємось, а через рік
   напишемо такі самі.

   Назви англійською навмисно: рівно так вони виглядають у справжніх
   бібліотеках, і саме ці слова будуть у 8 класі.
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Дрібні помічники ─────────────────────────────────────────────── */

  // Бере число з налаштувань. Якщо учень нічого не написав або написав
  // дурницю — тихо підставляє запасне значення, а не ламає гру.
  function num(value, fallback) {
    var n = Number(value);
    return isFinite(n) && n > 0 ? n : fallback;
  }

  // Знаходить місце для гри на сторінці. Немає такого id — кажемо про це
  // вголос у консолі, українською, бо мовчазна поломка гірша за помилку.
  function findMount(id) {
    var node = document.getElementById(id);
    if (!node) {
      console.error(
        'Game: на сторінці немає елемента з id="' + id + '". ' +
        'Додай у HTML рядок:  <div id="' + id + '"></div>'
      );
    }
    return node;
  }

  // Стилі рушія кладемо ПЕРШИМИ в <head>, щоб CSS учня, який іде далі,
  // завжди перемагав. Інакше твої кольори не працювали б — і незрозуміло чому.
  function addStyles(css) {
    var tag = document.createElement('style');
    tag.textContent = css;
    document.head.insertBefore(tag, document.head.firstChild);
  }

  var Game = { version: '2.0' };

  /* Випадкове ціле число від from до to включно.
     Game.random(1, 6) — як кидок кубика. */
  Game.random = function (from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };

  /* ═══════════════════════════════════════════════════════════════════════
     SNAKE — Змійка
     ═══════════════════════════════════════════════════════════════════════ */

  Game.snake = function (s) {
    s = s || {};

    // Менше шести клітинок — змійка довжиною 3 не вміщується і гра
    // ламається ще до першого кроку. Мовчки піднімаємо до шести.
    var field      = Math.max(6, Math.round(num(s.field, 20)));   // клітинок по стороні
    var cell       = Math.round(num(s.cell, 24));                 // розмір клітинки, пікселів
    var speed      = num(s.speed, 150);                           // мілісекунд на крок
    var bgColor    = s.bgColor    || '#101418';
    var gridColor  = s.gridColor  || 'rgba(255,255,255,.06)';
    var snakeColor = s.snakeColor || '#00e676';
    var headColor  = s.headColor  || snakeColor;
    var foodColor  = s.foodColor  || '#ff5252';
    var food       = s.food || '';                 // емодзі; порожньо — просто квадрат
    var wrapWalls  = s.wrapWalls === true;         // виповзати з іншого боку
    var showScore  = s.showScore !== false;

    var canvas = makeCanvas(s.mount || 'game', field * cell, field * cell);
    if (!canvas) return;
    var brush = canvas.getContext('2d');

    var snake, dir, nextDir, apple, score, alive, timer, started;

    function start() {
      var mid = Math.floor(field / 2);
      snake = [
        { x: mid,     y: mid },
        { x: mid - 1, y: mid },
        { x: mid - 2, y: mid }
      ];
      dir = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      score = 0;
      alive = true;
      // Гра чекає на першу стрілку. Без цього вона стартує сама і за
      // півтори секунди врізається в стіну — учень відкриває сторінку
      // й одразу бачить «кінець», ніби все зламано.
      started = false;
      placeApple();
      draw();
      clearInterval(timer);
      timer = setInterval(step, speed);
      // Без цього після перезапуску табло учня й далі показувало б
      // «Гру закінчено» — рушію нічим було сказати сторінці, що почалось нове.
      if (typeof s.onStart === 'function') s.onStart();
    }

    // Яблуко не має з'являтися всередині змії — інакше воно невидиме
    // і гра виглядає зламаною.
    function placeApple() {
      var tryCell, busy, i;
      do {
        tryCell = { x: Game.random(0, field - 1), y: Game.random(0, field - 1) };
        busy = false;
        for (i = 0; i < snake.length; i++) {
          if (snake[i].x === tryCell.x && snake[i].y === tryCell.y) { busy = true; break; }
        }
      } while (busy);
      apple = tryCell;
    }

    function step() {
      if (!alive || !started) return;
      dir = nextDir;

      var head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      if (wrapWalls) {
        head.x = (head.x + field) % field;
        head.y = (head.y + field) % field;
      } else if (head.x < 0 || head.y < 0 || head.x >= field || head.y >= field) {
        gameOver();
        return;
      }

      for (var i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) { gameOver(); return; }
      }

      snake.unshift(head);

      if (head.x === apple.x && head.y === apple.y) {
        score++;
        placeApple();
        if (typeof s.onScore === 'function') s.onScore(score);
      } else {
        snake.pop();              // не з'їли — хвіст підтягується, довжина та сама
      }

      draw();
    }

    function gameOver() {
      alive = false;
      clearInterval(timer);
      draw();
      if (typeof s.onGameOver === 'function') s.onGameOver(score);
    }

    function square(x, y, color) {
      brush.fillStyle = color;
      brush.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
    }

    function draw() {
      brush.fillStyle = bgColor;
      brush.fillRect(0, 0, canvas.width, canvas.height);

      brush.strokeStyle = gridColor;
      brush.lineWidth = 1;
      for (var i = 1; i < field; i++) {
        brush.beginPath();
        brush.moveTo(i * cell + .5, 0);
        brush.lineTo(i * cell + .5, canvas.height);
        brush.moveTo(0, i * cell + .5);
        brush.lineTo(canvas.width, i * cell + .5);
        brush.stroke();
      }

      if (food) {
        brush.font = Math.round(cell * .8) + 'px serif';
        brush.textAlign = 'center';
        brush.textBaseline = 'middle';
        brush.fillText(food, (apple.x + .5) * cell, (apple.y + .55) * cell);
      } else {
        square(apple.x, apple.y, foodColor);
      }

      for (var j = snake.length - 1; j >= 0; j--) {
        square(snake[j].x, snake[j].y, j === 0 ? headColor : snakeColor);
      }

      if (showScore) {
        brush.fillStyle = '#ffffff';
        brush.font = '700 ' + Math.round(cell * .7) + 'px system-ui, sans-serif';
        brush.textAlign = 'left';
        brush.textBaseline = 'top';
        brush.fillText(String(score), 8, 6);
      }

      if (!alive) banner('Рахунок: ' + score, 'пробіл або дотик — ще раз');
      else if (!started) banner('Готовий?', 'стрілка або свайп — почати');
    }

    // Затемнення з великим і малим написом посередині поля.
    function banner(big, small) {
      brush.fillStyle = 'rgba(0,0,0,.66)';
      brush.fillRect(0, 0, canvas.width, canvas.height);
      brush.fillStyle = '#ffffff';
      brush.textAlign = 'center';
      brush.textBaseline = 'middle';
      brush.font = '800 ' + Math.round(canvas.width / 11) + 'px system-ui, sans-serif';
      brush.fillText(big, canvas.width / 2, canvas.height / 2 - 16);
      brush.font = '600 ' + Math.round(canvas.width / 24) + 'px system-ui, sans-serif';
      brush.fillText(small, canvas.width / 2, canvas.height / 2 + 26);
    }

    // Назад у себе не повертаємось: це миттєва смерть, і гравець
    // не розуміє, що сталося. Такий натиск просто ігноруємо.
    function turn(x, y) {
      if (!alive) return;
      if (dir.x === -x && dir.y === -y) return;
      nextDir = { x: x, y: y };
      if (!started) { started = true; draw(); }
    }

    document.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'ArrowLeft'       || k === 'a' || k === 'ф') turn(-1, 0);
      else if (k === 'ArrowRight' || k === 'd' || k === 'в') turn(1, 0);
      else if (k === 'ArrowUp'    || k === 'w' || k === 'ц') turn(0, -1);
      else if (k === 'ArrowDown'  || k === 's' || k === 'і') turn(0, 1);
      else if (k === ' ' && !alive) start();
      else return;
      e.preventDefault();        // щоб сторінка не стрибала від стрілок
    });

    addSwipe(canvas, turn, function () { if (!alive) start(); });

    start();
  };

  /* ═══════════════════════════════════════════════════════════════════════
     PUZZLE — Пазл (п'ятнашки з власної картинки)

     Зроблений не на полотні, а звичайними <div> у CSS Grid — тими самими
     сіткою і клітинками, що на уроці 4. Тому плитки можна фарбувати,
     заокруглювати й анімувати власним CSS, як будь-який блок на сторінці.
     ═══════════════════════════════════════════════════════════════════════ */

  addStyles(
    '.puzzle{display:grid;gap:2px;width:420px;max-width:100%;aspect-ratio:1/1;' +
    'background:#222;padding:2px;border-radius:12px;user-select:none;' +
    '-webkit-user-select:none;touch-action:manipulation}' +
    '.puzzle .tile{background-color:#3a3a3a;background-repeat:no-repeat;' +
    'position:relative;cursor:pointer;border-radius:6px;overflow:hidden;' +
    'transition:transform .12s,filter .12s}' +
    '.puzzle .tile:hover{filter:brightness(1.12)}' +
    '.puzzle .tile:active{transform:scale(.96)}' +
    '.puzzle .empty{background-image:none!important;background-color:transparent;' +
    'cursor:default;pointer-events:none}' +
    '.puzzle .number{position:absolute;left:5px;top:3px;font:700 15px/1 system-ui,sans-serif;' +
    'color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.85);pointer-events:none}' +
    '.puzzle.solved .tile{cursor:default}' +
    '.puzzle.solved .empty{background-image:inherit;background-color:transparent}'
  );

  Game.puzzle = function (s) {
    s = s || {};

    // 2×2 — найлегший, 8×8 — уже 63 плитки й нереально зібрати за урок.
    var grid  = Math.min(8, Math.max(2, Math.round(num(s.grid, 3))));  // 3 → пазл 3×3
    var image = s.image || '';
    var size  = Math.round(num(s.size, 420));            // сторона пазла, пікселів
    var showNumbers = s.showNumbers !== false;

    if (!image) {
      console.error('Game.puzzle: не вказано картинку. Приклад:  Game.puzzle({ image: "foto.jpg" })');
      return;
    }

    var mount = findMount(s.mount || 'game');
    if (!mount) return;

    var total = grid * grid;
    var hole  = total - 1;               // номер шматка, який вважається порожнім
    var tiles = [];                      // tiles[позиція] = який шматок тут лежить
    var moves = 0;
    var startedAt = null;
    var solved = false;

    mount.className = 'puzzle';
    mount.style.gridTemplateColumns = 'repeat(' + grid + ', 1fr)';
    mount.style.width = size + 'px';
    mount.innerHTML = '';

    var nodes = [];
    for (var i = 0; i < total; i++) {
      tiles[i] = i;
      var tile = document.createElement('div');
      tile.className = 'tile';
      tile.addEventListener('click', (function (pos) {
        return function () { click(pos); };
      })(i));
      mount.appendChild(tile);
      nodes.push(tile);
    }

    // Один шматок картинки = одна клітинка сітки. Картинку розтягуємо
    // на всі grid×grid клітинок і зсуваємо так, щоб у вікні лишився
    // потрібний шматок — це той самий background-position, що в CSS.
    function draw() {
      for (var pos = 0; pos < total; pos++) {
        var piece = tiles[pos];
        var node  = nodes[pos];
        if (piece === hole && !solved) {
          node.className = 'tile empty';
          node.innerHTML = '';
          node.style.backgroundImage = 'none';
          continue;
        }
        var col = piece % grid;
        var row = Math.floor(piece / grid);
        node.className = 'tile';
        node.style.backgroundImage = 'url("' + image + '")';
        node.style.backgroundSize = (grid * 100) + '% ' + (grid * 100) + '%';
        node.style.backgroundPosition =
          (grid === 1 ? 0 : (col / (grid - 1)) * 100) + '% ' +
          (grid === 1 ? 0 : (row / (grid - 1)) * 100) + '%';
        node.innerHTML = showNumbers && !solved
          ? '<span class="number">' + (piece + 1) + '</span>'
          : '';
      }
    }

    function holeAt() {
      for (var i = 0; i < total; i++) if (tiles[i] === hole) return i;
      return -1;
    }

    // Сусідні по стороні — і не через край рядка. Без перевірки колонки
    // плитка з кінця рядка «стрибала» б на початок наступного.
    function neighbours(a, b) {
      var ca = a % grid, ra = Math.floor(a / grid);
      var cb = b % grid, rb = Math.floor(b / grid);
      return Math.abs(ca - cb) + Math.abs(ra - rb) === 1;
    }

    function move(pos) {
      var empty = holeAt();
      if (!neighbours(pos, empty)) return false;
      tiles[empty] = tiles[pos];
      tiles[pos] = hole;
      return true;
    }

    function click(pos) {
      if (solved) return;
      if (!move(pos)) return;
      if (startedAt === null) startedAt = Date.now();
      moves++;
      draw();
      checkWin();
    }

    function checkWin() {
      for (var i = 0; i < total; i++) if (tiles[i] !== i) return;
      solved = true;
      mount.classList.add('solved');
      draw();
      var seconds = startedAt ? Math.round((Date.now() - startedAt) / 1000) : 0;
      if (typeof s.onWin === 'function') s.onWin(moves, seconds);
    }

    // Перемішуємо не випадковою розкладкою, а великою кількістю чесних
    // ходів із зібраного стану. Випадкова розкладка в п'ятнашках
    // у половині випадків НЕ збирається взагалі — класична пастка.
    function shuffle() {
      var steps = total * 40;
      for (var i = 0; i < steps; i++) {
        var empty = holeAt();
        var around = [];
        for (var j = 0; j < total; j++) if (neighbours(j, empty)) around.push(j);
        move(around[Game.random(0, around.length - 1)]);
      }
      // Раптом перемішалося назад у зібране — мішаємо ще раз.
      for (var k = 0; k < total; k++) if (tiles[k] !== k) return;
      shuffle();
    }

    shuffle();
    draw();

    Game.shufflePuzzle = function () {
      solved = false; moves = 0; startedAt = null;
      mount.classList.remove('solved');
      shuffle();
      draw();
    };
  };

  /* ═══════════════════════════════════════════════════════════════════════
     ЦЕГЛИНКИ ДЛЯ ВЛАСНОЇ ГРИ  ⭐⭐⭐
     Із цих команд збирається третя гра — «злови предмет», «лабіринт»,
     «втеча». Поле так само ділиться на клітинки, як у змійці.
     ═══════════════════════════════════════════════════════════════════════ */

  var my = null;   // полотно власної гри: { brush, cell, field, node }

  /* Готує поле: Game.board({ field: 16, cell: 30 }) */
  Game.board = function (s) {
    s = s || {};
    var field = Math.round(num(s.field, 16));
    var cell = Math.round(num(s.cell, 30));
    var canvas = makeCanvas(s.mount || 'game', field * cell, field * cell);
    if (!canvas) return;
    my = { brush: canvas.getContext('2d'), cell: cell, field: field, node: canvas };
    Game.clear(s.bgColor || '#101418');
  };

  /* Заливає все поле кольором: Game.clear('#101418') */
  Game.clear = function (color) {
    if (!my) return;
    my.brush.fillStyle = color || '#101418';
    my.brush.fillRect(0, 0, my.node.width, my.node.height);
  };

  /* Малює квадрат у клітинці: Game.drawSquare(3, 5, 'red') */
  Game.drawSquare = function (col, row, color) {
    if (!my) return;
    my.brush.fillStyle = color || '#ffffff';
    my.brush.fillRect(
      col * my.cell + 1, row * my.cell + 1,
      my.cell - 2, my.cell - 2
    );
  };

  /* Пише текст або емодзі в клітинці: Game.drawText('🍎', 2, 2) */
  Game.drawText = function (text, col, row, color) {
    if (!my) return;
    my.brush.fillStyle = color || '#ffffff';
    my.brush.font = Math.round(my.cell * .8) + 'px system-ui, serif';
    my.brush.textAlign = 'center';
    my.brush.textBaseline = 'middle';
    my.brush.fillText(text, (col + .5) * my.cell, (row + .55) * my.cell);
  };

  /* Реагує на стрілки: Game.onKey(function (direction) { ... })
     direction буде 'left', 'right', 'up', 'down' або 'space'. */
  Game.onKey = function (action) {
    document.addEventListener('keydown', function (e) {
      var names = {
        ArrowLeft: 'left', ArrowRight: 'right',
        ArrowUp: 'up', ArrowDown: 'down', ' ': 'space'
      };
      var direction = names[e.key];
      if (!direction) return;
      e.preventDefault();
      action(direction);
    });
  };

  /* Повторює дію раз на стільки мілісекунд:
     Game.everyMs(500, function () { ... }) */
  Game.everyMs = function (ms, action) {
    return setInterval(action, num(ms, 500));
  };

  /* ─── Спільне для полотен ──────────────────────────────────────────── */

  // Учень пише в HTML просто <div id="game"></div>, а полотно рушій
  // робить сам. Якщо це вже <canvas> — беремо його як є.
  function makeCanvas(id, width, height) {
    var mount = findMount(id);
    if (!mount) return null;
    var canvas;
    if (mount.tagName === 'CANVAS') {
      canvas = mount;
    } else {
      mount.innerHTML = '';
      canvas = document.createElement('canvas');
      mount.appendChild(canvas);
    }
    canvas.width = width;
    canvas.height = height;
    canvas.style.maxWidth = '100%';
    canvas.style.touchAction = 'none';
    canvas.style.display = 'block';
    return canvas;
  }

  // Керування пальцем — щоб гру можна було показати з телефона.
  function addSwipe(node, turn, tap) {
    var x0 = 0, y0 = 0;
    node.addEventListener('touchstart', function (e) {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    node.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) < 24 && Math.abs(dy) < 24) { tap(); return; }
      if (Math.abs(dx) > Math.abs(dy)) turn(dx > 0 ? 1 : -1, 0);
      else turn(0, dy > 0 ? 1 : -1);
    }, { passive: true });
  }

  window.Game = Game;
})();
