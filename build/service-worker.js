"use strict";var precacheConfig=[["/drum-machine/index.html","ebf6e36537a41e30f21843422b697142"],["/drum-machine/static/css/main.f4fd4105.css","b52b70e45a3267c147e0f916f1a2f597"],["/drum-machine/static/js/main.ddefde3f.js","1b09bcbcfd53a24b73a9229b1c8274c3"],["/drum-machine/static/media/Clap.3062daca.mp3","3062daca6b46c54601c994dcdda8ef6b"],["/drum-machine/static/media/ClosedHiHat.abe03961.mp3","abe03961c7511cc994b64bcebc93b0f2"],["/drum-machine/static/media/Kick.09fda256.mp3","09fda25678eb5321a1b3d456bda527e1"],["/drum-machine/static/media/KickAndHiHat.200b4bd3.mp3","200b4bd34ad53416203739f8ab241e3b"],["/drum-machine/static/media/OpenHiHat.5c9f8087.mp3","5c9f80876a2f7c9c7dd4dba4a1784f95"],["/drum-machine/static/media/PunchyKick.a6a991c5.mp3","a6a991c55f20e9c7a390e86a2d6e4491"],["/drum-machine/static/media/Shaker.561c9a54.mp3","561c9a5450dd4aef32292a06f357d553"],["/drum-machine/static/media/SideStick.123a99c7.mp3","123a99c7ed11a3254ac92032ffba1122"],["/drum-machine/static/media/Snare.cd861874.mp3","cd861874f961c37c2ecec27f6fd20667"],["/drum-machine/static/media/drumset.7888e25f.png","7888e25fc4bd16c2a16c38e2d25dd698"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/drum-machine/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});