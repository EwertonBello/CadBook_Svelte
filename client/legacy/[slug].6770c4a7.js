import{_ as t,a as n,b as r,c as e,i as a,s as o,d as c,S as i,f as s,g as f,k as u,t as $,l,m,E as p,j as d,a4 as v,v as g,r as h,y,x,h as b,z as w,n as R,o as D,B as k,C as P,D as B,A as I,G as j,V as A,a0 as E,Y as z,Z as S,$ as N}from"./client.35027d7e.js";import{T as V,F as C,B as T,s as W,I as F}from"./Toolbar.e232bd4f.js";import{b as G,C as H,S as Y,a as Z,c as _,d as q}from"./index.6360bfd6.js";function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(e){var c=n(this).constructor;a=Reflect.construct(o,arguments,c)}else a=o.apply(this,arguments);return r(this,a)}}function K(t){var n,r,e;return{c:function(){n=s("hr"),this.h()},l:function(t){n=f(t,"HR",{class:!0,role:!0,"aria-orientation":!0,style:!0}),this.h()},h:function(){u(n,"class",r="s-divider "+t[0]+" svelte-228x9f"),u(n,"role","separator"),u(n,"aria-orientation",e=t[2]?"vertical":"horizontal"),u(n,"style",t[3]),$(n,"inset",t[1]),$(n,"vertical",t[2])},m:function(t,r){l(t,n,r)},p:function(t,a){var o=m(a,1)[0];1&o&&r!==(r="s-divider "+t[0]+" svelte-228x9f")&&u(n,"class",r),4&o&&e!==(e=t[2]?"vertical":"horizontal")&&u(n,"aria-orientation",e),8&o&&u(n,"style",t[3]),3&o&&$(n,"inset",t[1]),5&o&&$(n,"vertical",t[2])},i:p,o:p,d:function(t){t&&d(n)}}}function L(t,n,r){var e=n.class,a=void 0===e?"":e,o=n.inset,c=void 0!==o&&o,i=n.vertical,s=void 0!==i&&i,f=n.style,u=void 0===f?null:f;return t.$$set=function(t){"class"in t&&r(0,a=t.class),"inset"in t&&r(1,c=t.inset),"vertical"in t&&r(2,s=t.vertical),"style"in t&&r(3,u=t.style)},[a,c,s,u]}var M=function(n){t(s,i);var r=J(s);function s(t){var n;return e(this,s),n=r.call(this),a(c(n),t,L,K,o,{class:0,inset:1,vertical:2,style:3}),n}return s}();function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(e){var c=n(this).constructor;a=Reflect.construct(o,arguments,c)}else a=o.apply(this,arguments);return r(this,a)}}function Q(t){var n,r=t[0].title+"";return{c:function(){n=P(r)},l:function(t){n=B(t,r)},m:function(t,r){l(t,n,r)},p:function(t,e){1&e&&r!==(r=t[0].title+"")&&j(n,r)},d:function(t){t&&d(n)}}}function U(t){var n,r,e,a,o,c,i,u,$=t[0].user.name+"",m=t[0].pages+"",p=t[0].price+"";return{c:function(){n=P("Autor: "),r=P($),e=s("br"),a=P("\r\n            Páginas: "),o=P(m),c=s("br"),i=P("\r\n            Preço: R$ "),u=P(p)},l:function(t){n=B(t,"Autor: "),r=B(t,$),e=f(t,"BR",{}),a=B(t,"\r\n            Páginas: "),o=B(t,m),c=f(t,"BR",{}),i=B(t,"\r\n            Preço: R$ "),u=B(t,p)},m:function(t,s){l(t,n,s),l(t,r,s),l(t,e,s),l(t,a,s),l(t,o,s),l(t,c,s),l(t,i,s),l(t,u,s)},p:function(t,n){1&n&&$!==($=t[0].user.name+"")&&j(r,$),1&n&&m!==(m=t[0].pages+"")&&j(o,m),1&n&&p!==(p=t[0].price+"")&&j(u,p)},d:function(t){t&&d(n),t&&d(r),t&&d(e),t&&d(a),t&&d(o),t&&d(c),t&&d(i),t&&d(u)}}}function X(t){var n;return{c:function(){n=P("Dados do Autor")},l:function(t){n=B(t,"Dados do Autor")},m:function(t,r){l(t,n,r)},d:function(t){t&&d(n)}}}function tt(t){var n,r;return n=new F({props:{class:"mdi mdi-chevron-down",rotate:t[1]?180:0}}),{c:function(){g(n.$$.fragment)},l:function(t){y(n.$$.fragment,t)},m:function(t,e){w(n,t,e),r=!0},p:function(t,r){var e={};2&r&&(e.rotate=t[1]?180:0),n.$set(e)},i:function(t){r||(R(n.$$.fragment,t),r=!0)},o:function(t){D(n.$$.fragment,t),r=!1},d:function(t){k(n,t)}}}function nt(t){var n,r,e,a;return(n=new T({props:{text:!0,$$slots:{default:[X]},$$scope:{ctx:t}}})).$on("click",t[2]),(e=new T({props:{text:!0,fab:!0,size:"small",class:"ml-auto",$$slots:{default:[tt]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){g(n.$$.fragment),r=h(),g(e.$$.fragment)},l:function(t){y(n.$$.fragment,t),r=x(t),y(e.$$.fragment,t)},m:function(t,o){w(n,t,o),l(t,r,o),w(e,t,o),a=!0},p:function(t,r){var a={};8&r&&(a.$$scope={dirty:r,ctx:t}),n.$set(a);var o={};10&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){a||(R(n.$$.fragment,t),R(e.$$.fragment,t),a=!0)},o:function(t){D(n.$$.fragment,t),D(e.$$.fragment,t),a=!1},d:function(t){k(n,t),t&&d(r),k(e,t)}}}function rt(t){var n,r,e,a,o,c,i,$,m,p,v,z,S,N=t[0].user.id+"",V=t[0].user.name+"",C=t[0].user.email+"";return n=new M({}),{c:function(){g(n.$$.fragment),r=h(),e=s("div"),a=P("ID: "),o=P(N),c=s("br"),i=P("\r\n            Nome: "),$=P(V),m=s("br"),p=P("\r\n            E-mail: "),v=P(C),this.h()},l:function(t){y(n.$$.fragment,t),r=x(t),e=f(t,"DIV",{class:!0});var s=b(e);a=B(s,"ID: "),o=B(s,N),c=f(s,"BR",{}),i=B(s,"\r\n            Nome: "),$=B(s,V),m=f(s,"BR",{}),p=B(s,"\r\n            E-mail: "),v=B(s,C),s.forEach(d),this.h()},h:function(){u(e,"class","pl-4 pr-4 pt-2 pb-2")},m:function(t,s){w(n,t,s),l(t,r,s),l(t,e,s),I(e,a),I(e,o),I(e,c),I(e,i),I(e,$),I(e,m),I(e,p),I(e,v),S=!0},p:function(t,n){(!S||1&n)&&N!==(N=t[0].user.id+"")&&j(o,N),(!S||1&n)&&V!==(V=t[0].user.name+"")&&j($,V),(!S||1&n)&&C!==(C=t[0].user.email+"")&&j(v,C)},i:function(t){S||(R(n.$$.fragment,t),A((function(){z||(z=E(e,W,{},!0)),z.run(1)})),S=!0)},o:function(t){D(n.$$.fragment,t),z||(z=E(e,W,{},!1)),z.run(0),S=!1},d:function(t){k(n,t),t&&d(r),t&&d(e),t&&z&&z.end()}}}function et(t){var n,r,e,a,o,c,i,s,f,u;n=new Y({props:{url:"//picsum.photos/350",alt:"random image",imageWidth:"100%",placeholderWidth:"100%"}}),e=new Z({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),o=new _({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),i=new q({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}});var $=t[1]&&rt(t);return{c:function(){g(n.$$.fragment),r=h(),g(e.$$.fragment),a=h(),g(o.$$.fragment),c=h(),g(i.$$.fragment),s=h(),$&&$.c(),f=z()},l:function(t){y(n.$$.fragment,t),r=x(t),y(e.$$.fragment,t),a=x(t),y(o.$$.fragment,t),c=x(t),y(i.$$.fragment,t),s=x(t),$&&$.l(t),f=z()},m:function(t,m){w(n,t,m),l(t,r,m),w(e,t,m),l(t,a,m),w(o,t,m),l(t,c,m),w(i,t,m),l(t,s,m),$&&$.m(t,m),l(t,f,m),u=!0},p:function(t,n){var r={};9&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);var a={};9&n&&(a.$$scope={dirty:n,ctx:t}),o.$set(a);var c={};10&n&&(c.$$scope={dirty:n,ctx:t}),i.$set(c),t[1]?$?($.p(t,n),2&n&&R($,1)):(($=rt(t)).c(),R($,1),$.m(f.parentNode,f)):$&&(S(),D($,1,1,(function(){$=null})),N())},i:function(t){u||(R(n.$$.fragment,t),R(e.$$.fragment,t),R(o.$$.fragment,t),R(i.$$.fragment,t),R($),u=!0)},o:function(t){D(n.$$.fragment,t),D(e.$$.fragment,t),D(o.$$.fragment,t),D(i.$$.fragment,t),D($),u=!1},d:function(t){k(n,t),t&&d(r),k(e,t),t&&d(a),k(o,t),t&&d(c),k(i,t),t&&d(s),$&&$.d(t),t&&d(f)}}}function at(t){var n,r,e,a,o,c,i;return n=new V({props:{title:"Details"}}),a=new H({props:{style:"max-width:80%;",shaped:!0,raised:!0,$$slots:{default:[et]},$$scope:{ctx:t}}}),c=new C({}),{c:function(){g(n.$$.fragment),r=h(),e=s("div"),g(a.$$.fragment),o=h(),g(c.$$.fragment),this.h()},l:function(t){y(n.$$.fragment,t),r=x(t),e=f(t,"DIV",{class:!0});var i=b(e);y(a.$$.fragment,i),i.forEach(d),o=x(t),y(c.$$.fragment,t),this.h()},h:function(){u(e,"class","d-flex justify-center mt-4 mb-4")},m:function(t,s){w(n,t,s),l(t,r,s),l(t,e,s),w(a,e,null),l(t,o,s),w(c,t,s),i=!0},p:function(t,n){var r=m(n,1)[0],e={};11&r&&(e.$$scope={dirty:r,ctx:t}),a.$set(e)},i:function(t){i||(R(n.$$.fragment,t),R(a.$$.fragment,t),R(c.$$.fragment,t),i=!0)},o:function(t){D(n.$$.fragment,t),D(a.$$.fragment,t),D(c.$$.fragment,t),i=!1},d:function(t){k(n,t),t&&d(r),t&&d(e),k(a),t&&d(o),k(c,t)}}}var ot=function(t,n,r,e){return new(r||(r=Promise))((function(a,o){function c(t){try{s(e.next(t))}catch(t){o(t)}}function i(t){try{s(e.throw(t))}catch(t){o(t)}}function s(t){var n;t.done?a(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,i)}s((e=e.apply(t,n||[])).next())}))};function ct(t){var n=t.params;return ot(this,void 0,void 0,v.mark((function t(){var r,e,a,o;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.slug,t.next=3,G.byID(r);case 3:return e=t.sent,a=e.data,o=a,t.abrupt("return",{book:o});case 7:case"end":return t.stop()}}),t)})))}function it(t,n,r){var e=n.book,a=!1;return t.$$set=function(t){"book"in t&&r(0,e=t.book)},[e,a,function(){r(1,a=!a)}]}var st=function(n){t(s,i);var r=O(s);function s(t){var n;return e(this,s),n=r.call(this),a(c(n),t,it,at,o,{book:0}),n}return s}();export default st;export{ct as preload};
