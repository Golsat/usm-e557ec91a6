/* Service worker: l'edizione si legge anche senza rete.
   Strategia: rete prima (per avere sempre l'edizione più recente), copia in cache come ripiego. */
const CACHE = "sguardo-20261018-1216";
const BASE = ["./", "./index.html", "./manifest.webmanifest", "./mappa.js", "./edizioni/indice.js",
              "./app/icona-192.png", "./app/icona-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(BASE.map(u => fetch(u, {cache: "no-store"}).then(r => c.put(u, r))))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;          // video, miniature e font restano fuori dalla cache
  e.respondWith(
    fetch(req, {cache: "no-store"}).then(res => {          // sempre dalla rete (mai dalla cache HTTP di 10 minuti); la copia salvata serve solo offline
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(req, copia));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
  );
});
