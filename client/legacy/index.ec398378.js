import{a4 as n,_ as t,a as r,b as e,c as o,i as a,d as c,S as f,s,f as i,v as u,r as $,g as l,h as m,y as p,x as h,j as g,k as d,l as v,z as x,A as y,n as b,o as w,B as k,m as R,$ as D,a5 as j,Z as B,C as A,D as E,G as P,E as I}from"./client.0c765d2d.js";import{T as S,F as C,B as T,I as V}from"./Toolbar.b86b5ec2.js";import{b as W,C as z,S as F,a as G,c as Z,d as _}from"./index.61efcbb4.js";function q(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,a=r(n);if(t){var c=r(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return e(this,o)}}function H(n,t,r){var e=n.slice();return e[1]=t[r],e}function J(n){var t,r=n[1].title+"";return{c:function(){t=A(r)},l:function(n){t=E(n,r)},m:function(n,r){v(n,t,r)},p:function(n,e){1&e&&r!==(r=n[1].title+"")&&P(t,r)},d:function(n){n&&g(t)}}}function K(n){var t,r,e,o,a,c=n[1].user.name+"",f=n[1].price+"";return{c:function(){t=A("Autor: "),r=A(c),e=i("br"),o=A("\r\n                Preço: R$ "),a=A(f)},l:function(n){t=E(n,"Autor: "),r=E(n,c),e=l(n,"BR",{}),o=E(n,"\r\n                Preço: R$ "),a=E(n,f)},m:function(n,c){v(n,t,c),v(n,r,c),v(n,e,c),v(n,o,c),v(n,a,c)},p:function(n,t){1&t&&c!==(c=n[1].user.name+"")&&P(r,c),1&t&&f!==(f=n[1].price+"")&&P(a,f)},d:function(n){n&&g(t),n&&g(r),n&&g(e),n&&g(o),n&&g(a)}}}function L(n){var t,r,e;return r=new V({props:{class:"mdi mdi-chevron-right"}}),{c:function(){t=A("Detalhes\r\n                        "),u(r.$$.fragment)},l:function(n){t=E(n,"Detalhes\r\n                        "),p(r.$$.fragment,n)},m:function(n,o){v(n,t,o),x(r,n,o),e=!0},p:I,i:function(n){e||(b(r.$$.fragment,n),e=!0)},o:function(n){w(r.$$.fragment,n),e=!1},d:function(n){n&&g(t),k(r,n)}}}function M(n){var t,r,e,o;return r=new T({props:{text:!0,class:"ml-auto",$$slots:{default:[L]},$$scope:{ctx:n}}}),{c:function(){t=i("a"),u(r.$$.fragment),this.h()},l:function(n){t=l(n,"A",{class:!0,rel:!0,href:!0});var e=m(t);p(r.$$.fragment,e),e.forEach(g),this.h()},h:function(){d(t,"class","text-decoration-none d-flex"),d(t,"rel","prefetch"),d(t,"href",e="books/"+n[1].id)},m:function(n,e){v(n,t,e),x(r,t,null),o=!0},p:function(n,a){var c={};16&a&&(c.$$scope={dirty:a,ctx:n}),r.$set(c),(!o||1&a&&e!==(e="books/"+n[1].id))&&d(t,"href",e)},i:function(n){o||(b(r.$$.fragment,n),o=!0)},o:function(n){w(r.$$.fragment,n),o=!1},d:function(n){n&&g(t),k(r)}}}function N(n){var t,r,e,o,a,c,f,s;return t=new F({props:{url:"//picsum.photos/350?random="+n[1].id,alt:"random image",imageWidth:"100%",placeholderWidth:"100%"}}),e=new G({props:{$$slots:{default:[J]},$$scope:{ctx:n}}}),a=new Z({props:{$$slots:{default:[K]},$$scope:{ctx:n}}}),f=new _({props:{style:"display:block",$$slots:{default:[M]},$$scope:{ctx:n}}}),{c:function(){u(t.$$.fragment),r=$(),u(e.$$.fragment),o=$(),u(a.$$.fragment),c=$(),u(f.$$.fragment)},l:function(n){p(t.$$.fragment,n),r=h(n),p(e.$$.fragment,n),o=h(n),p(a.$$.fragment,n),c=h(n),p(f.$$.fragment,n)},m:function(n,i){x(t,n,i),v(n,r,i),x(e,n,i),v(n,o,i),x(a,n,i),v(n,c,i),x(f,n,i),s=!0},p:function(n,r){var o={};1&r&&(o.url="//picsum.photos/350?random="+n[1].id),t.$set(o);var c={};17&r&&(c.$$scope={dirty:r,ctx:n}),e.$set(c);var s={};17&r&&(s.$$scope={dirty:r,ctx:n}),a.$set(s);var i={};17&r&&(i.$$scope={dirty:r,ctx:n}),f.$set(i)},i:function(n){s||(b(t.$$.fragment,n),b(e.$$.fragment,n),b(a.$$.fragment,n),b(f.$$.fragment,n),s=!0)},o:function(n){w(t.$$.fragment,n),w(e.$$.fragment,n),w(a.$$.fragment,n),w(f.$$.fragment,n),s=!1},d:function(n){k(t,n),n&&g(r),k(e,n),n&&g(o),k(a,n),n&&g(c),k(f,n)}}}function O(n){var t,r,e,o;return r=new z({props:{style:"max-width:80%",$$slots:{default:[N]},$$scope:{ctx:n}}}),{c:function(){t=i("div"),u(r.$$.fragment),e=$(),this.h()},l:function(n){t=l(n,"DIV",{class:!0});var o=m(t);p(r.$$.fragment,o),e=h(o),o.forEach(g),this.h()},h:function(){d(t,"class","d-flex justify-center mt-4 mb-4")},m:function(n,a){v(n,t,a),x(r,t,null),y(t,e),o=!0},p:function(n,t){var e={};17&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e)},i:function(n){o||(b(r.$$.fragment,n),o=!0)},o:function(n){w(r.$$.fragment,n),o=!1},d:function(n){n&&g(t),k(r)}}}function Q(n){var t,r,e,o,a,c;t=new S({props:{title:"Books"}});for(var f=n[0],s=[],y=0;y<f.length;y+=1)s[y]=O(H(n,f,y));var A=function(n){return w(s[n],1,1,(function(){s[n]=null}))};return a=new C({}),{c:function(){u(t.$$.fragment),r=$(),e=i("div");for(var n=0;n<s.length;n+=1)s[n].c();o=$(),u(a.$$.fragment),this.h()},l:function(n){p(t.$$.fragment,n),r=h(n),e=l(n,"DIV",{class:!0});for(var c=m(e),f=0;f<s.length;f+=1)s[f].l(c);c.forEach(g),o=h(n),p(a.$$.fragment,n),this.h()},h:function(){d(e,"class","container pl-2 pr-2")},m:function(n,f){x(t,n,f),v(n,r,f),v(n,e,f);for(var i=0;i<s.length;i+=1)s[i].m(e,null);v(n,o,f),x(a,n,f),c=!0},p:function(n,t){var r=R(t,1)[0];if(1&r){var o;for(f=n[0],o=0;o<f.length;o+=1){var a=H(n,f,o);s[o]?(s[o].p(a,r),b(s[o],1)):(s[o]=O(a),s[o].c(),b(s[o],1),s[o].m(e,null))}for(B(),o=f.length;o<s.length;o+=1)A(o);D()}},i:function(n){if(!c){b(t.$$.fragment,n);for(var r=0;r<f.length;r+=1)b(s[r]);b(a.$$.fragment,n),c=!0}},o:function(n){w(t.$$.fragment,n),s=s.filter(Boolean);for(var r=0;r<s.length;r+=1)w(s[r]);w(a.$$.fragment,n),c=!1},d:function(n){k(t,n),n&&g(r),n&&g(e),j(s,n),n&&g(o),k(a,n)}}}var U=function(n,t,r,e){return new(r||(r=Promise))((function(o,a){function c(n){try{s(e.next(n))}catch(n){a(n)}}function f(n){try{s(e.throw(n))}catch(n){a(n)}}function s(n){var t;n.done?o(n.value):(t=n.value,t instanceof r?t:new r((function(n){n(t)}))).then(c,f)}s((e=e.apply(n,t||[])).next())}))};function X(){return U(this,void 0,void 0,n.mark((function t(){var r,e,o;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W.all();case 2:return r=n.sent,e=r.data,o=e,n.abrupt("return",{books:o});case 6:case"end":return n.stop()}}),t)})))}function Y(n,t,r){var e=t.books;return n.$$set=function(n){"books"in n&&r(0,e=n.books)},[e]}var nn=function(n){t(e,f);var r=q(e);function e(n){var t;return o(this,e),t=r.call(this),a(c(t),n,Y,Q,s,{books:0}),t}return e}();export default nn;export{X as preload};