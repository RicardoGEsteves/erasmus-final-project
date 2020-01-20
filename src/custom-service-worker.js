// import {
//   precacheAndRoute,
//   registerRoute,
//   NetworkFirst,
//   StaleWhileRevalidate,
//   ExpirationPlugin,
//   CacheFirst
// } from 'workbox-precaching';

// precacheAndRoute([
//   /\.(?:js|css|html|webp)$/,
//   { url: '/index.html', revision: '383676' }
// ]);

// registerRoute(/\.(?:js|css|html)$/, new NetworkFirst());

// registerRoute(
//   /\.css$/,

//   new StaleWhileRevalidate({
//     cacheName: 'css-cache'
//   })
// );

// registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
//   new CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new ExpirationPlugin({
//         maxEntries: 70,
//         maxAgeSeconds: 30 * 24 * 60 * 60
//       })
//     ]
//   })
// );
