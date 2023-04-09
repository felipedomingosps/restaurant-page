(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(81),o=t.n(a),i=t(645),r=t.n(i),s=t(667),c=t.n(s),d=new URL(t(788),t.b),l=r()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lilita+One&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Varela+Round&display=swap);"]);var u=c()(d);l.push([e.id,"/* GENERAL */\n*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --brown: hsla(25, 99%, 28%, 1);\n    --lion: hsla(42, 19%, 52%, 1);\n    --battleship-gray: hsla(46, 12%, 47%, 1);\n    --harvest-gold: hsla(37, 74%, 51%, 1);\n    --field-drab: hsla(36, 50%, 32%, 1);\n    --ecru: hsla(42, 29%, 60%, 1);\n    --coyote: hsla(41, 28%, 38%, 1);\n    --ash-gray: hsla(60, 8%, 63%, 1);\n    --platinum: hsla(40, 10%, 89%, 1);\n}\n\nbody {\n    margin: 0;\n    font-family: 'Open sans', sans-serif;\n}\n\n.box-content {\n    max-width: 1600px;\n    margin: 0 auto;\n}\n\n/* HEADER */\nheader {\n    background-color: var(--harvest-gold);\n    padding: 1rem 0.5rem;\n    box-shadow: 0 1px 20px black;\n    position: relative;\n    z-index: 10;\n}\n\n.box-content--header {\n    display: flex;\n    gap: 1.5rem;\n    align-items: center;\n    justify-content: center;\n\n    padding-bottom: 1rem;    \n}\n\n.eggs {\n    background-color: white;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    padding: 0.5rem 1.5rem;\n    border-radius: 50px;\n\n    height: fit-content;\n}\n\n.fa-egg {\n    font-size: 2rem;\n    color: var(--harvest-gold);\n}\n\n.header__title {\n    color: white;\n    font-size: 2.5rem;\n    margin: 0;\n    font-family: 'Lilita One', cursive;\n    font-weight: 400;\n}\n\n.nav-bar {\n    display: flex;\n    justify-content: space-between;\n    max-width: 300px;\n    margin: 0 auto;\n}\n.nav-bar__item {\n    list-style: none;\n    text-transform: uppercase;\n    font-size: 1.25rem;\n    color: var(--brown);\n    font-weight: 600;\n    cursor: pointer;\n    font-family: 'Open-sans', sans-serif;\n}\n\n.nav-bar__item--current {\n    color: hsla(25, 99%, 98%, 1);\n}\n/* MAIN */\nmain {\n    background-color: var(--platinum);\n    min-height: 100vh;\n}\n\n.main__image {\n    background: url("+u+');\n    width: 100%;\n    height: 600px;\n    background-size: 100%;\n    background-position: 0% 60%;\n    background-repeat: no-repeat;\n    box-shadow: 0 4px 5px -5px black;\n}\n\n.main__quotation {\n    padding: 1rem 0rem;\n    font-size: 2rem;\n    text-align: center;\n    font-style: italic;\n    font-weight: 500;\n    z-index: 1;\n}\n\n.main__quotation::before {\n    display: block;\n    background-color: hsla(40, 10%, 60%, .5);\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 6.5rem;\n    content: "";\n    z-index: 2;\n}\n\n.content__text {\n    font-size: 1.5rem;\n    text-align: justify;\n    padding: 0 2rem;\n}\n\n.quotes {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 2rem;\n    padding: .5rem;\n    max-width: 1000px;\n    margin: 0 auto; \n}\n\n.quote {\n    padding: 1rem;\n\n    text-align: justify;\n    font-size: 1.25rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    background-color: hsla(40, 10%, 60%, .7);\n    transition: 400ms;\n    \n}\n\n.quote:hover {\n    transform: translate(0, -10px);\n}\n\n.quote__author {\n    font-size: 1rem;\n}\n\nfooter {\n    background-color: var(--harvest-gold);\n    color: hsla(25, 99%, 8%, 1);\n    font-weight: 700;\n    padding: .5rem;\n    text-align: center;\n}\n\nfooter > a:visited {\n    color: hsla(25, 99%, 8%, 1);\n}\n\n/* MENU */\n\n.menu {\n    margin: 0 auto;\n    max-width: 1000px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nh2 {\n    text-align: center;\n}\n\ntable {\n    width: 70%;\n    margin: 0 auto;\n}\n\ntr {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    align-items: center;\n    padding: 0.5rem;\n}\n\ntd {\n    padding: 0.1rem;\n}\n\nh3 {\n    text-transform: capitalize;\n}\n\n.food-title {\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.food-description {\n    font-weight: 500;\n    padding-right: 1rem;\n    text-align: justify;\n}\n\n.food-price {\n    font-size: 1.1rem;\n    font-weight: 700;\n}\n\n/* CONTACT */\n\n.contact {\n    max-width: 600px;\n    text-align: center;\n    padding-top: 0.05rem; \n}\n\n.contact__text:last-of-type {\n    font-weight: bold;\n    font-size: 1.3rem;\n}',""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},r=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}r.push(u)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var s=t(i[r]);n[s].references--}for(var c=a(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},788:(e,n,t)=>{e.exports=t.p+"8a9b39a8f51858dc81fe.jpg"},646:e=>{e.exports=JSON.parse('{"egg dishes":[{"name":"Huevos Rancheros","description":"Two eggs, refried beans, ranchero sauce, avocado, and cotija cheese served on a corn tortilla.","price":"$10.99"},{"name":"Classic Eggs Benedict","description":"Two poached eggs, Canadian bacon, and hollandaise sauce on an English muffin.","price":"$12.99"},{"name":"Avocado Toast with Fried Egg","description":"Toasted sourdough bread, mashed avocado, cherry tomatoes, and a fried egg.","price":"$9.99"},{"name":"Frittata of the Day","description":"Chef\'s daily selection of vegetables, cheese, and eggs baked together. Served with mixed greens.","price":"$11.99"}],"sandwiches":[{"name":"BLTE","description":"Bacon, lettuce, tomato, and a fried egg on sourdough bread.","price":"$9.99"},{"name":"Fried Egg Sandwich","description":"Two fried eggs, bacon, cheddar cheese, and arugula on a brioche bun.","price":"$10.99"},{"name":"Egg Salad Sandwich","description":"Homemade egg salad, lettuce, and tomato on a croissant.","price":"$8.99"}],"sides":[{"name":"Hash Browns","description":"Crispy fried potatoes.","price":"$3.99"},{"name":"Bacon","description":"Three strips of crispy bacon.","price":"$2.99"},{"name":"Toast","description":"Choice of sourdough, wheat, or rye.","price":"$2.99"}],"signature cocktails":[{"name":"The Morning Buzz","description":"Vodka, espresso, Kahlua, and cream.","price":"$9.99"},{"name":"Huevos Mary","description":"Our twist on the classic Bloody Mary, made with tequila, tomato juice, hot sauce, and a splash of lime.","price":"$10.99"},{"name":"Egg-noggin","description":"A creamy, boozy eggnog made with bourbon, brandy, eggs, cream, and nutmeg.","price":"$8.99"}],"craft beers":[{"name":"Eggstra Special IPA","description":"A hoppy, citrusy India Pale Ale brewed with egg whites.","price":"$7.99"},{"name":"Crack an Egg Brown Ale","description":"A rich and malty brown ale brewed with toasted oats and chocolate malt.","price":"$6.99"},{"name":"Sunny Side Up Hefeweizen","description":"A light and refreshing wheat beer with notes of banana and clove.","price":"$5.99"}]}')}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){null===document.querySelector("footer")&&(document.getElementById("content").innerHTML+='\n        <footer>\n            2023 - <a href="https://github.com/felipedomingosps">@felipedomingosps</a>\n        </footer>')}function n(){const n=document.getElementById("content");if(null===document.querySelector("main")){const e=document.createElement("main");n.appendChild(e)}document.querySelector("main").innerHTML="",document.querySelector("main").innerHTML='\n    <div class="box-content box-content--main">\n        <div class="main__image" alt="Two fried eggs on a plate."></div>\n        <div class="main__quotation"><p class="quotation"> "Los Huevos Hermanos is egg-ceptional!" <span>- Bryan Cranston, renowned cook.</span></p></div>\n        <div class="main__content">\n            <div class="content__text">\n                <p>Welcome to Los Huevos Hermanos, the ultimate destination for egg lovers! Our restaurant is dedicated to serving up the most delicious and creative egg dishes you\'ve ever tasted. Whether you\'re a fan of classic breakfast fare or looking for something more adventurous, our menu has something for everyone.</p>\n                <p>From fluffy omelettes and savory frittatas to huevos rancheros and eggs benedict, our chefs have mastered the art of cooking eggs to perfection. We use only the freshest ingredients and locally sourced produce to create dishes that are both satisfying and nutritious.</p>\n                <p>In addition to our mouth-watering egg dishes, we also offer a selection of salads, sandwiches, and sides that are sure to please. And don\'t forget to try our signature cocktails and craft beers, which have been carefully selected to complement our menu.</p>\n                <p>At Los Huevos Hermanos, we believe that dining out should be a fun and memorable experience. That\'s why our restaurant features a warm and inviting atmosphere that is perfect for families, couples, and groups of friends. Whether you\'re celebrating a special occasion or just want to enjoy a delicious meal, we look forward to welcoming you to Los Huevos Hermanos!</p>\n            </div>\n\n            <div class="quotes">\n                <div class="quote">"Los Huevos Hermanos is a culinary gem. Their egg dishes are prepared with such creativity and skill that every bite is a delight for the senses."<div class="quote__author">- Chef Maria Rodriguez</div></div>\n                <div class="quote">"As a food critic, I\'ve had my fair share of breakfast joints, but Los Huevos Hermanos stands out. Their attention to detail in every dish is evident and their commitment to using fresh, local ingredients is commendable."<div class="quote__author">- Critic James Monroe</div></div>\n                <div class="quote">"Los Huevos Hermanos is proof that simple ingredients and classic recipes can be elevated to new heights. Their menu is a celebration of the humble egg, and they do it justice in every dish they create." <div class="quote__author">- Chef Emily Lee</div></div>\n            </div>\n        </div>\n\n    </div>',e()}function a(e,n){const t=document.createElement("table");t.classList.add="menu__section",menu.appendChild(t);const a=document.createElement("caption");a.classList.add="section__title";const o=document.createElement("h3");o.innerHTML=`${n}`,a.appendChild(o),t.appendChild(a),e.forEach((e=>{t.innerHTML+=`\n         <tr>\n             <td>\n                 <div class="food-title">${e.name}</div>\n                 <div class="food-description">${e.description}</div>\n             </td>\n                 <td class="food-price">${e.price}</td>\n         </tr>\n         `}))}var o=t(379),i=t.n(o),r=t(795),s=t.n(r),c=t(569),d=t.n(c),l=t(565),u=t.n(l),p=t(216),m=t.n(p),h=t(589),f=t.n(h),g=t(28),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,document.getElementById("content").innerHTML='\n    <header>\n    <div class="box-content box-content--header">\n        <div class="eggs">\n            <i class="fa-solid fa-egg"></i>\n            <i class="fa-solid fa-egg"></i>\n        </div>\n        <h1 class="header__title">Los Huevos Hermanos</h1>\n    </div>\n    <nav class="box-content box-content--nav-bar">\n        <ul class="nav-bar">\n            <li class="nav-bar__item nav-bar__item--current" data-page="home">Home</li>\n            <li class="nav-bar__item" data-page="menu">Menu</li>\n            <li class="nav-bar__item" data-page="contact">Contact</li>\n        </ul>\n    </nav>\n</header>\n',n(),function(){const o=document.querySelectorAll(".nav-bar__item");o.forEach((i=>{i.addEventListener("click",(()=>{o.forEach((e=>{e.classList.remove("nav-bar__item--current")})),i.classList.add("nav-bar__item--current"),"home"===i.dataset.page?n():"menu"===i.dataset.page?function(){const n=document.getElementById("content");if(null===document.querySelector("main")){const e=document.createElement("main");n.appendChild(e)}document.querySelector("main").innerHTML="";const o=t(646),i=Object.keys(o),r=document.createElement("h2");r.innerHTML="Menu",r.classList.add="content__title";const s=document.createElement("div");s.classList.add("menu"),s.setAttribute("id","menu"),s.appendChild(r),document.querySelector("main").appendChild(s),i.forEach((e=>{a(o[e],e)})),e()}():"contact"===i.dataset.page&&function(){const n=document.getElementById("content");if(null===document.querySelector("main")){const e=document.createElement("main");n.appendChild(e)}document.querySelector("main").innerHTML="",document.querySelector("main").innerHTML='\n        <div class="contact box-content">\n            <h2 class="contact__title">Contact Us</h2>\n            <p class="contact__text">Thanks for your interest in our restaurant. If you have any questions or concerns, please don\'t hesitate to reach out to us.</p>\n        \n            <div class="contact__section">\n                <h3 class="section__title">ADDRESS</h3>\n                <p class="section__text">1234 Central Ave NE,\n                    Albuquerque, NM 87106\n                    United States</p>\n                \n            </div>\n        \n            <div class="contact__section">\n                <h3 class="section__title">PHONE</h3>\n                <p class="section__text">(505) 555-1234</p>\n            </div>\n        \n            <div class="contact__section">\n                <h3 class="section__title">EMAIL</h3>\n                <p class="section__text">info@restaurantexample.com</p>\n            </div>\n        \n            <div class="contact__section">\n                <h3 class="section__title">HOURS OF OPERATION</h3>\n                <p class="section__text">Monday - Friday: 11:00 AM - 10:00 PM</p>\n                <p class="section__text">Saturday - Sunday: 9:00 AM - 10:00 PM</p>\n            </div>\n        \n            <p class="contact__text">We look forward to hearing from you!</p>\n        </div>\n    ',e()}()}))}))}()})()})();