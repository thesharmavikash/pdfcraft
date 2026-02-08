/**
 * Service Worker for PDFRose
 */

const CACHE_NAME = 'PDFRose-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Simple pass-through for now to avoid errors
    // In a real PWA, caching logic would go here
});
