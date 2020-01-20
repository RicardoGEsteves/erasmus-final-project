// importScripts(
//   'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
// );

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }

// workbox.routing.registerRoute(
//   /\.(?:js|css|html|webp)$/,
//   new workbox.strategies.NetworkFirst()
// );

// workbox.routing.registerRoute(
//   /\.css$/,

//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'css-cache'
//   })
// );

// workbox.routing.registerRoute(
//   /\.js$/,

//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'js-cache'
//   })
// );

// workbox.routing.registerRoute(
//   /\.html$/,

//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'html-cache'
//   })
// );

// workbox.routing.registerRoute(
//   /\.webp$/,

//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'media-cache'
//   })
// );

// workbox.routing.registerRoute(
//   /\.(?:png|jpg|jpeg|svg|gif|webp)$/,

//   new workbox.strategies.CacheFirst({
//     cacheName: 'image-cache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 70,

//         maxAgeSeconds: 7 * 24 * 60 * 60
//       })
//     ]
//   })
// );

// // workbox.routing.registerRoute(
// //   'http://localhost:3000',
// //   new workbox.strategies.NetworkFirst()
// // );
