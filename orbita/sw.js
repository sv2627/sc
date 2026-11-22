// Офлайн-кеш: оболонка, контент і іконки. Нова версія — змінити CACHE.
const CACHE = "orbita-v5";
const FILES = [
  "aik.html", "respublika.html", "manifest-aik.webmanifest", "manifest-respublika.webmanifest", "app.css", "engine.js", "logic.js", "manifest.webmanifest", "games/en5/content.js", "games/fe6/content.js", "games/mob6/content.js", "games/en6/content.js", "games/mob6r/content.js", "games/web6r/content.js", "games/fe7/content.js", "games/en7/content.js", "games/fe7r/content.js",
  ...["1F527","1F3C6","1F6F0","1F4AA","1F372","1FAAB","1F573","1F4E1","2728","1F497","1F320","1F680","1FA90","2B50","1F30D"]
    .map(c => `assets/openmoji/${c}.svg`)
];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
));
// Спершу мережа (щоб бачити свіжі правки), без мережі — кеш.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && new URL(e.request.url).origin === location.origin) {
        const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request))
  );
});
