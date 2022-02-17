self.addEventListener('install', (event) =>  {
    event.waitUntil(caches.open('sw-cache').then((cache)=> {
        return cache.add('index.html')
    }))
})

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        return response || fetch(event.request);
    }))
})

// TODO: Read https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
// TODO: Figure out how to update the cache with the latest files.