var __wpo = {"assets":{"main":["/fonts/Framework7Icons-Regular.bb6aae4.eot","/fonts/Framework7Icons-Regular.9900d2b.ttf","/fonts/Framework7Icons-Regular.eb7a418.woff","/fonts/Framework7Icons-Regular.f3e1eae.woff2","/fonts/MaterialIcons-Regular.e79bfd8.eot","/fonts/MaterialIcons-Regular.a37b0c0.ttf","/fonts/MaterialIcons-Regular.012cf6a.woff","/fonts/MaterialIcons-Regular.570eb83.woff2","/img/i-f7-ios.b356cb6.png","/img/i-f7-material.ccc2c70.png","/img/flag-de.69735e1.png","/img/flag-en.500a285.png","/img/firebase.472015e.png","/img/theme-ios.48f912f.png","/img/theme-material.381a2ea.png","/app.d3e022d.js","/init.d3e022d.js","/material.d3e022d.js","/ios.d3e022d.js","/app.d3e022d.css","/init.d3e022d.css","/ios.d3e022d.css","/material.d3e022d.css","/","/offline-service-worker.js","/manifest.json","/favicon-16x16.png","/favicon-32x32.png","/android-chrome-192x192.png"],"additional":[],"optional":[]},"externals":["/offline-service-worker.js","/manifest.json","/favicon-16x16.png","/favicon-32x32.png","/android-chrome-192x192.png"],"hashesMap":{"e29bb46df1d1272e4874070ddd31b75151aeb56d":"/fonts/Framework7Icons-Regular.bb6aae4.eot","525b213b2d8c7cd98b71144e1ba89b6bfd0d37ac":"/fonts/Framework7Icons-Regular.9900d2b.ttf","1f18601b6c9eaffed38b56de00c407a50d0b3585":"/fonts/Framework7Icons-Regular.eb7a418.woff","13ad3ae228a5ee0a9ab54fa3af3b6168711bc911":"/fonts/Framework7Icons-Regular.f3e1eae.woff2","26fb8cecb5512223277b4d290a24492a0f09ede1":"/fonts/MaterialIcons-Regular.e79bfd8.eot","fc05de31234e0090f7ddc28ce1b23af4026cb1da":"/fonts/MaterialIcons-Regular.a37b0c0.ttf","c6c953c2ccb2ca9abb21db8dbf473b5a435f0082":"/fonts/MaterialIcons-Regular.012cf6a.woff","09963592e8c953cc7e14e3fb0a5b05d5042e8435":"/fonts/MaterialIcons-Regular.570eb83.woff2","0bf225d6455da0e91365bd551fc4ff6d7f971413":"/img/i-f7-ios.b356cb6.png","1446bca78695b5b45d348ac71ccbc5aaab8c9fb0":"/img/i-f7-material.ccc2c70.png","47d1d7a210ea9565e4748b9878e94677e0c91f7a":"/img/flag-de.69735e1.png","15821e554147c8cff9624921a4ecf25e997b9595":"/img/flag-en.500a285.png","29edde98e8f0df6be5e5872f2137c1b6182e9fff":"/img/firebase.472015e.png","d1e71184048900668a0e3161cafdabc997242741":"/img/theme-ios.48f912f.png","c6af447fda569dbbd1b1ab0830e5db0a70eede5d":"/img/theme-material.381a2ea.png","3819d08b19150d28b0f30e252168f4585691f22e":"/app.d3e022d.js","64143eb1616ee516bcd725b4229ccb51d0b6653f":"/init.d3e022d.js","9fb72eb05b010ee7acc83b11b96f02b815d64f1c":"/material.d3e022d.js","9717f5651367e8161140412821f6f27298f143d5":"/ios.d3e022d.js","bf6dd61e3c2abac1853786acbcbc7084765cbc75":"/app.d3e022d.css","ce61b0b775525573c084c10993139f22ee7fe775":"/init.d3e022d.css","0a7318ae7bd21979d37e3dc950d978846c36d142":"/ios.d3e022d.css","f720bb099459a0fa4b34bbd3612d408b00f1f9a1":"/material.d3e022d.css","0c73445b78f192b4e9ef68fff088630a9a019fa8":"/"},"strategy":"changed","responseStrategy":"cache-first","version":"v1.8.7","name":"webpack-offline","pluginVersion":"4.7.0","relativePaths":false};

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){"use strict";function r(n,e){function t(){if(!b.additional.length)return Promise.resolve();var n=void 0;return n="changed"===q?c("additional"):r("additional"),n.catch(function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function r(e){var t=b[e];return caches.open(E).then(function(e){return x(e,t,{bust:n.version,request:n.prefetchRequest})}).then(function(){f("Cached assets: "+e,t)}).catch(function(n){throw console.error(n),n})}function c(e){return l().then(function(t){if(!t)return r(e);var o=t[0],i=t[1],a=t[2],c=a.hashmap,u=a.version;if(!a.hashmap||u===n.version)return r(e);var s=Object.keys(c).map(function(n){return c[n]}),h=i.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),l=b[e],d=[],v=l.filter(function(n){return h.indexOf(n)===-1||s.indexOf(n)===-1});Object.keys(S).forEach(function(n){var e=S[n];if(l.indexOf(e)!==-1&&v.indexOf(e)===-1&&d.indexOf(e)===-1){var t=c[n];t&&h.indexOf(t)!==-1?d.push([t,e]):v.push(e)}}),f("Changed assets: "+e,v),f("Moved assets: "+e,d);var p=Promise.all(d.map(function(n){return o.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(E).then(function(e){var t=p.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,x(e,v,{bust:n.version,request:n.prefetchRequest})])})})}function h(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(U)&&0!==n.indexOf(E))return console.log("[SW]:","Delete cache:",n),caches.delete(n)});return Promise.all(e)})}function l(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(U)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(j,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function d(){return caches.open(E).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:S}));return e.put(new URL(j,location).toString(),t)})}function v(n,e,t){return o(t,E).then(function(r){if(r)return r;var o=fetch(n.request).then(function(n){return n.ok?(t===e&&!function(){var t=n.clone();caches.open(E).then(function(n){return n.put(e,t)}).then(function(){console.log("[SW]:","Cache asset: "+e)})}(),n):n});return o})}function p(n,e,t){return fetch(n.request).then(function(n){if(n.ok)return n;throw new Error("Response is not ok")}).catch(function(){return o(t,E)})}function m(n){return n.catch(function(){}).then(function(n){var e=n&&n.ok,t=n&&"opaqueredirect"===n.type;return e||t&&!A?n:o(C,E)})}function g(){Object.keys(b).forEach(function(n){b[n]=b[n].map(function(n){var e=new URL(n,location);return P.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),Object.keys(L).forEach(function(n){L[n]=L[n].map(function(n){var e=new URL(n,location);return P.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),S=Object.keys(S).reduce(function(n,e){var t=new URL(S[e],location);return t.search="",n[e]=t.toString(),n},{}),P=P.map(function(n){var e=new URL(n,location);return e.hash="",e.toString()})}function x(n,e,t){var r=t.allowLoaders!==!1,o=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(e.map(function(n){return o&&(n=i(n,o)),fetch(n,a).then(u)})).then(function(o){if(o.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(O(e[o],t)),n.put(e[o],t)});return i.length?!function(){var r=s(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return e.length&&(o=o.concat(x(n,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function O(n,e){var t=Object.keys(L).map(function(t){var r=L[t];if(r.indexOf(n)!==-1&&w[t])return w[t](e.clone())}).filter(function(n){return!!n});return Promise.all(t).then(function(n){return[].concat.apply([],n)})}function k(n){var e=n.url,t=new URL(e),r=void 0;r="navigate"===n.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<y.length;o++){var i=y[o];if(i&&(!i.requestTypes||i.requestTypes.indexOf(r)!==-1)){var a=void 0;if(a="function"==typeof i.match?i.match(t,n):e.replace(i.match,i.to),a&&a!==e)return a}}}var w=e.loaders,y=e.cacheMaps,q=n.strategy,R=n.responseStrategy,b=n.assets,L=n.loaders||{},S=n.hashesMap,P=n.externals,U=n.name,W=n.version,E=U+":"+W,j="__offline_webpack__data";g();var _=[].concat(b.main,b.additional,b.optional),C=n.navigateFallbackURL,A=n.navigateFallbackForRedirects;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===q?c("main"):r("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var e=t();e=e.then(d),e=e.then(h),e=e.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(e)}),self.addEventListener("fetch",function(n){var e=n.request.url,t=new URL(e),r=void 0;P.indexOf(e)!==-1?r=e:(t.search="",r=t.toString());var o="GET"===n.request.method,i=_.indexOf(r)!==-1,c=r;if(!i){var u=k(n.request);u&&(c=u,i=!0)}if(!i&&o&&C&&a(n.request))return void n.respondWith(m(fetch(n.request)));if(!i||!o)return void(t.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&n.respondWith(fetch(n.request)));var s=void 0;s="network-first"===R?p(n,r,c):v(n,r,c),C&&a(n.request)&&(s=m(s)),n.respondWith(s)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(n,e){return caches.match(n,{cacheName:e}).then(function(t){return c()?t:u(t).then(function(t){return caches.open(e).then(function(e){return e.put(n,t)}).then(function(){return t})})}).catch(function(){})}function i(n,e){var t=n.indexOf("?")!==-1;return n+(t?"&":"?")+"__uncache="+encodeURIComponent(e)}function a(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||(n.headers.get("Accept")||"").indexOf("text/html")!==-1}function c(n){return!n||!n.redirected||!n.ok||"opaqueredirect"===n.type}function u(n){if(c(n))return Promise.resolve(n);var e="body"in n?Promise.resolve(n.body):n.blob();return e.then(function(e){return new Response(e,{headers:n.headers,status:n.status})})}function s(n){return Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}function f(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}r(__wpo,{loaders:{},cacheMaps:[]}),n.exports=t(1)},function(n,e){}]);