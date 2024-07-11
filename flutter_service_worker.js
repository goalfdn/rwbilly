'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "42b8c0e53f6c20dc7717c831b74de7d9",
"version.json": "878dfaadf3838955e28e5254c1cef01c",
"index.html": "f05628f4e6dd4cd06cdb1b133c70b897",
"/": "f05628f4e6dd4cd06cdb1b133c70b897",
"main.dart.js": "4f2da2ab02ce24dc657e5ce341739f6c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "bb15f8a62d8ff5da29e171ae0086dc54",
"icons/Icon-192.png": "88acf5323bf5250f25e8580beafb9ec7",
"icons/Icon-maskable-192.png": "88acf5323bf5250f25e8580beafb9ec7",
"icons/Icon-maskable-512.png": "8debdfb4962e7034cf5a22db3f1c090a",
"icons/Icon-512.png": "8debdfb4962e7034cf5a22db3f1c090a",
"manifest.json": "735f27e9f2fc771ecccbe569a01b0547",
".git/config": "9c509ce2b25cfb1f90ec1bed6e8de94d",
".git/objects/0c/40a6467b09dc9ff8ce495b572e4c8b7d8f528d": "4d793d00d4af5439bb88a0326768d2a3",
".git/objects/50/482a970688db65bf7561700776307004debd6b": "ea733b998e8686c8755ae79c2653c415",
".git/objects/50/52b923c2ec81fb5fc6a063dfc3545302f22546": "4f6212210e0af873e5b3175384243c49",
".git/objects/3b/12d650302302493b040b9ad4e5fdf29d9cdf06": "100603fe138eeb9b50f799874e022a7b",
".git/objects/3c/c80a758ee8e47e8edaf741557fe93c184d56b4": "81769ce74d9901c69cbb2dcfb3c70e07",
".git/objects/3c/f5abd7cc4241d1df2d262a127cc27e24b29e1e": "5302168e71208600ce3dbbeab73fc3b9",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5f/830a5c7cc291bd87c7f42412f4b4ea82b67ce4": "135ba7f352242bec13ef16604d871ce7",
".git/objects/5f/065339f93f0188285b333c47ab920c1aee1e31": "e6cebfe0f08051be2ceb6e254f4793bd",
".git/objects/02/2d6543679cd8c86c7b027b383319c8367c28e6": "671c20e48d21b8581d3224d02c335215",
".git/objects/a4/a9918dad10832bc8aaa5574d71fe15f089c8cb": "9636ed519a82aae2e1b6c48dcc421730",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a29888ea2d518caab902db00a12b4e79ac487a": "bfa8f69c1a029f0943ddb7e2e2fc006b",
".git/objects/c0/3101e98e4892139872049eb980ca3b5d4ddb49": "67ef24c21e59fe4543fd06ad3204f1eb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/d57c8b1e49649f249d7aacc4f7e7f431c6e400": "cde1b2640d447016747e24d147daca25",
".git/objects/fb/a4e8dec81f1726ffa4c0e4f2bf9ca040beed02": "92efbd39b14d18dae3ffa6c1899d1fb1",
".git/objects/ed/29e33085076dc108ee7610c74d52cb0c2875bb": "bbf9d78b92f1f26cfc89259343ef2795",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/80/9f77b76a4361cee2c9575de1cdf4d6d3a7927d": "d0b572d04cd47809accb2052a8557a15",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/9ad87414d5b20ed422f2f80f083414d80282d8": "cf9d6f92a0cc24c5b2dc99a1f36c2919",
".git/objects/91/ff62683b18f9c7fb7b5c82aa5a68fb19a6c9c3": "d6f30650538d4d02809bf22af5b87728",
".git/objects/5e/6a2a68e6fbae8395ff00923e4a49beba503822": "16cc930ac34ab6f38a5dadfdbdaed3d8",
".git/objects/6c/a31f39003f4f06134a7c1451918613ec4898a3": "c0bc2c285b4ed6a70597ce683981912b",
".git/objects/97/5899498be0d97ce6bde59ae14220228cf5e108": "f48f7fedd1c07d7da89bc08e3134924b",
".git/objects/bf/fed8eeb9951a5b57eb72aa55950af556c098f6": "89b9ed6eaf09e31ddff31066a0612d1c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8b7d5561b0750138673b16f0715ffc9333cdaf": "8601a4da9e161ad571a224dfbb1bec2a",
".git/objects/b8/684c52f4419d530f24baac4142ead3a643ce35": "01f0e5e6bd789f9ac5f162d67b75a7fc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/11e6e5c7a635c9b14527bb056db0f0a712f129": "b9015f275aca75d518405b5222d120d2",
".git/objects/db/feecd3ee0574bb66520318ea2f89d3a6b745aa": "135255d818767b65cba0a3e00a417c55",
".git/objects/de/50f5fbe70dfa3d6a79883d4d1e1cd89c9b2297": "8b98639a92aa471dfd4d584de654765d",
".git/objects/de/c226ad1a56c828dafa0f9420783c908f02f8e6": "f8794c99d6736a1ff18fca7a75b8b4b8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ff/4c6f2f593b07b1eb72458c0c849003809114a5": "246b1aa2dbe2f8581dd5607e4679b8a8",
".git/objects/ff/29d4cee71c9e3936420214b9f7b8400b2f627d": "d717caa33ddf7167aea8a2a179d667fc",
".git/objects/f1/14c695ec20fb89eda33ffd58366c0af8088979": "1e701f3e88d5c552d3560a5508469d54",
".git/objects/cb/56ada6c81830ad53ba43b4ba8077b93e392d07": "743231c357675ced44d03638032e4f38",
".git/objects/ce/5505d9f6c5af17d21c65ea1260ae29dfa0d224": "21b333050d3a3f219e51eca03f0e25ea",
".git/objects/2d/ca0c475c2b51f6c6dd26c1c63df8a61801b73d": "91d8ae3fcfb4c37bb277b86d7c77346d",
".git/objects/70/cef388e370079f056ceebb796a286086f32842": "3b91c2fa84b09379d3e116630fee0ad8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/13/6c08bc9ba1eb8bb3f7e2c5d81827310d5981ab": "5576d47600459ef89ba39f2264bddefc",
".git/objects/13/2465a980a1494f1c54ef6684f486b01a7dda27": "fc348f37ca499ca741e037b30c11ad55",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4eddc6ba3176963cc9cc017d6d87b5d7",
".git/logs/refs/heads/main": "4eddc6ba3176963cc9cc017d6d87b5d7",
".git/logs/refs/remotes/origin/main": "104a1c66d882adacb33da16a39550a6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "424735ab6d2a02fbfbd25b4c0433a8d8",
".git/refs/remotes/origin/main": "424735ab6d2a02fbfbd25b4c0433a8d8",
".git/index": "46d63aa502eec4702ae11965cfd0a14e",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "fc8d475c85052035d8c7b98d0a64eadb",
"assets/NOTICES": "0f464706e3e1b98ff67425407a458cf4",
"assets/FontManifest.json": "bf56da640282efe5571fec13e7e79ec1",
"assets/AssetManifest.bin.json": "9bc7577a97e15b7fd4af0477646fea74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cf8a167ea13d784b2b64aabb31327c50",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "b1b88354b314712e5b934a0d01d3575e",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "bf513d4da5f72ba53d681dee925dc047",
"assets/packages/amplify_authenticator/assets/social-buttons/SocialIcons.ttf": "376fbf368ffe39e045978e3d3197efbd",
"assets/packages/amplify_authenticator/assets/social-buttons/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "9b2bffbaa129cc1c87dc497827f159bd",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "c21f04e68a1c1dcfecfad44bcd2e8953",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c3c958a1e0a06b05e10f0e6057531a07",
"assets/fonts/MaterialIcons-Regular.otf": "6225640ffd837987a0bac73fb72935a8",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
