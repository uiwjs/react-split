if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,c,i)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"3196b6e4c81bea4b42cc3bcba1f42e7a"},{url:"./static/css/main.fa43de5d.chunk.css",revision:"2349154a42c4ce8515df6a69beb1871e"},{url:"./static/css/vendors-markdown-preview.83452e77.chunk.css",revision:"134ebb28deb4e7deb8396feebbe5fa16"},{url:"./static/css/vendors~main.097c1f6a.chunk.css",revision:"c1142ed91d61c5429f7a285721d327db"},{url:"./static/js/15.e270f93d.chunk.js",revision:"63e767a2890bc31dcd388d070f9cca15"},{url:"./static/js/main.2b972742.chunk.js",revision:"67f0a293eade679746aa68c576e7b134"},{url:"./static/js/runtime-main.7c1eabbc.js",revision:"51d05d67ee7696df4ff41acc2be864f6"},{url:"./static/js/vendors-helper.3e2d2492.chunk.js",revision:"4f00e2368c82dd59c39d738d0086a6f6"},{url:"./static/js/vendors-lodash.5bd42f7d.chunk.js",revision:"0b273b2e1225e72f672362524f20d586"},{url:"./static/js/vendors-markdown-preview.800cce8b.chunk.js",revision:"15b5bdd5fa82354fc5364ed5046e5fec"},{url:"./static/js/vendors-prismjs.33396365.chunk.js",revision:"48e26374c809df405da80198d7fd3a14"},{url:"./static/js/vendors-prismjs.33396365.chunk.js.LICENSE.txt",revision:"0e68a261e4846a1e390826c53c553105"},{url:"./static/js/vendors-react.efb5d075.chunk.js",revision:"c7ae80b2d177103d304d074c6730eff3"},{url:"./static/js/vendors-react.efb5d075.chunk.js.LICENSE.txt",revision:"b8bfa227b2637d417a788255e8f5194d"},{url:"./static/js/vendors-remark.29e3a879.chunk.js",revision:"2b4bbc5f4405199690b6a487b6b4bb90"},{url:"./static/js/vendors-runtime-core.c126bd19.chunk.js",revision:"e2491978248f8c3daba41b3ef200f190"},{url:"./static/js/vendors-runtime-generator.70f2ff8b.chunk.js",revision:"97a7494c7573b9390b646605d37c8bc2"},{url:"./static/js/vendors-runtime-template.1f26a4de.chunk.js",revision:"f33d06097613d4ec9113237431a6ebb6"},{url:"./static/js/vendors-runtime-traverse.83990d39.chunk.js",revision:"d0d37421a293185bffcdd4d7c0e5c929"},{url:"./static/js/vendors-runtime-types.9dcc3e79.chunk.js",revision:"f5a2a0813e65a916f73661a2a3be31d8"},{url:"./static/js/vendors-standalone.55415e8d.chunk.js",revision:"1f32b9f8e8af9d1001896c4e0223df18"},{url:"./static/js/vendors~main.1af4b961.chunk.js",revision:"5d9477ab1f07349bcc56edda61ec0ce5"},{url:"./static/js/vendors~main.1af4b961.chunk.js.LICENSE.txt",revision:"3a3258b9911bc242e4bf73eb390fbe38"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/react-split//index.html"),{denylist:[/^\/_/,/\/[^\/?]+\.[^\/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
