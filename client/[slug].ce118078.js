import{S as t,i as e,s,e as n,a,f as r,t as $,g as o,z as i,d as c,n as l,m,p as f,o as u,b as p,r as d,h as g,j as h,w as x,x as v,y,v as b,B as w,O as D,V as R,R as k,T as B,U as I}from"./client.cad5db7a.js";import{T as j,F as P,B as z,s as A,I as E}from"./Toolbar.f12dd3b2.js";import{b as N,C as T,S as V,a as S,c as W,d as C}from"./index.505a2ed8.js";function F(t){let e,s,l;return{c(){e=n("hr"),this.h()},l(t){e=a(t,"HR",{class:!0,role:!0,"aria-orientation":!0,style:!0}),this.h()},h(){r(e,"class",s="s-divider "+t[0]+" svelte-228x9f"),r(e,"role","separator"),r(e,"aria-orientation",l=t[2]?"vertical":"horizontal"),r(e,"style",t[3]),$(e,"inset",t[1]),$(e,"vertical",t[2])},m(t,s){o(t,e,s)},p(t,[n]){1&n&&s!==(s="s-divider "+t[0]+" svelte-228x9f")&&r(e,"class",s),4&n&&l!==(l=t[2]?"vertical":"horizontal")&&r(e,"aria-orientation",l),8&n&&r(e,"style",t[3]),3&n&&$(e,"inset",t[1]),5&n&&$(e,"vertical",t[2])},i:i,o:i,d(t){t&&c(e)}}}function H(t,e,s){let{class:n=""}=e,{inset:a=!1}=e,{vertical:r=!1}=e,{style:$=null}=e;return t.$$set=t=>{"class"in t&&s(0,n=t.class),"inset"in t&&s(1,a=t.inset),"vertical"in t&&s(2,r=t.vertical),"style"in t&&s(3,$=t.style)},[n,a,r,$]}class O extends t{constructor(t){super(),e(this,t,H,F,s,{class:0,inset:1,vertical:2,style:3})}}function U(t){let e,s=t[0].title+"";return{c(){e=v(s)},l(t){e=y(t,s)},m(t,s){o(t,e,s)},p(t,n){1&n&&s!==(s=t[0].title+"")&&w(e,s)},d(t){t&&c(e)}}}function q(t){let e,s,r,$,i,l,m,f,u=t[0].user.name+"",p=t[0].pages+"",d=t[0].price+"";return{c(){e=v("Autor: "),s=v(u),r=n("br"),$=v("\r\n            Páginas: "),i=v(p),l=n("br"),m=v("\r\n            Preço: R$ "),f=v(d)},l(t){e=y(t,"Autor: "),s=y(t,u),r=a(t,"BR",{}),$=y(t,"\r\n            Páginas: "),i=y(t,p),l=a(t,"BR",{}),m=y(t,"\r\n            Preço: R$ "),f=y(t,d)},m(t,n){o(t,e,n),o(t,s,n),o(t,r,n),o(t,$,n),o(t,i,n),o(t,l,n),o(t,m,n),o(t,f,n)},p(t,e){1&e&&u!==(u=t[0].user.name+"")&&w(s,u),1&e&&p!==(p=t[0].pages+"")&&w(i,p),1&e&&d!==(d=t[0].price+"")&&w(f,d)},d(t){t&&c(e),t&&c(s),t&&c(r),t&&c($),t&&c(i),t&&c(l),t&&c(m),t&&c(f)}}}function G(t){let e;return{c(){e=v("Dados do Autor")},l(t){e=y(t,"Dados do Autor")},m(t,s){o(t,e,s)},d(t){t&&c(e)}}}function J(t){let e,s;return e=new E({props:{class:"mdi mdi-chevron-down",rotate:t[1]?180:0}}),{c(){l(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,n){d(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.rotate=t[1]?180:0),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function K(t){let e,s,n,a;return e=new z({props:{text:!0,$$slots:{default:[G]},$$scope:{ctx:t}}}),e.$on("click",t[2]),n=new z({props:{text:!0,fab:!0,size:"small",class:"ml-auto",$$slots:{default:[J]},$$scope:{ctx:t}}}),n.$on("click",t[2]),{c(){l(e.$$.fragment),s=m(),l(n.$$.fragment)},l(t){f(e.$$.fragment,t),s=u(t),f(n.$$.fragment,t)},m(t,r){d(e,t,r),o(t,s,r),d(n,t,r),a=!0},p(t,s){const a={};8&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a);const r={};10&s&&(r.$$scope={dirty:s,ctx:t}),n.$set(r)},i(t){a||(g(e.$$.fragment,t),g(n.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),h(n.$$.fragment,t),a=!1},d(t){x(e,t),t&&c(s),x(n,t)}}}function L(t){let e,s,$,i,k,B,I,j,P,z,E,N,T,V=t[0].user.id+"",S=t[0].user.name+"",W=t[0].user.email+"";return e=new O({}),{c(){l(e.$$.fragment),s=m(),$=n("div"),i=v("ID: "),k=v(V),B=n("br"),I=v("\r\n            Nome: "),j=v(S),P=n("br"),z=v("\r\n            E-mail: "),E=v(W),this.h()},l(t){f(e.$$.fragment,t),s=u(t),$=a(t,"DIV",{class:!0});var n=p($);i=y(n,"ID: "),k=y(n,V),B=a(n,"BR",{}),I=y(n,"\r\n            Nome: "),j=y(n,S),P=a(n,"BR",{}),z=y(n,"\r\n            E-mail: "),E=y(n,W),n.forEach(c),this.h()},h(){r($,"class","pl-4 pr-4 pt-2 pb-2")},m(t,n){d(e,t,n),o(t,s,n),o(t,$,n),b($,i),b($,k),b($,B),b($,I),b($,j),b($,P),b($,z),b($,E),T=!0},p(t,e){(!T||1&e)&&V!==(V=t[0].user.id+"")&&w(k,V),(!T||1&e)&&S!==(S=t[0].user.name+"")&&w(j,S),(!T||1&e)&&W!==(W=t[0].user.email+"")&&w(E,W)},i(t){T||(g(e.$$.fragment,t),D((()=>{N||(N=R($,A,{},!0)),N.run(1)})),T=!0)},o(t){h(e.$$.fragment,t),N||(N=R($,A,{},!1)),N.run(0),T=!1},d(t){x(e,t),t&&c(s),t&&c($),t&&N&&N.end()}}}function M(t){let e,s,n,a,r,$,i,p,v,y;e=new V({props:{url:"//picsum.photos/350",alt:"random image",imageWidth:"100%",placeholderWidth:"100%"}}),n=new S({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),r=new W({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),i=new C({props:{$$slots:{default:[K]},$$scope:{ctx:t}}});let b=t[1]&&L(t);return{c(){l(e.$$.fragment),s=m(),l(n.$$.fragment),a=m(),l(r.$$.fragment),$=m(),l(i.$$.fragment),p=m(),b&&b.c(),v=k()},l(t){f(e.$$.fragment,t),s=u(t),f(n.$$.fragment,t),a=u(t),f(r.$$.fragment,t),$=u(t),f(i.$$.fragment,t),p=u(t),b&&b.l(t),v=k()},m(t,c){d(e,t,c),o(t,s,c),d(n,t,c),o(t,a,c),d(r,t,c),o(t,$,c),d(i,t,c),o(t,p,c),b&&b.m(t,c),o(t,v,c),y=!0},p(t,e){const s={};9&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};9&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a);const $={};10&e&&($.$$scope={dirty:e,ctx:t}),i.$set($),t[1]?b?(b.p(t,e),2&e&&g(b,1)):(b=L(t),b.c(),g(b,1),b.m(v.parentNode,v)):b&&(B(),h(b,1,1,(()=>{b=null})),I())},i(t){y||(g(e.$$.fragment,t),g(n.$$.fragment,t),g(r.$$.fragment,t),g(i.$$.fragment,t),g(b),y=!0)},o(t){h(e.$$.fragment,t),h(n.$$.fragment,t),h(r.$$.fragment,t),h(i.$$.fragment,t),h(b),y=!1},d(t){x(e,t),t&&c(s),x(n,t),t&&c(a),x(r,t),t&&c($),x(i,t),t&&c(p),b&&b.d(t),t&&c(v)}}}function Q(t){let e,s,$,i,v,y,b;return e=new j({props:{title:"Details"}}),i=new T({props:{style:"max-width:80%;",shaped:!0,raised:!0,$$slots:{default:[M]},$$scope:{ctx:t}}}),y=new P({}),{c(){l(e.$$.fragment),s=m(),$=n("div"),l(i.$$.fragment),v=m(),l(y.$$.fragment),this.h()},l(t){f(e.$$.fragment,t),s=u(t),$=a(t,"DIV",{class:!0});var n=p($);f(i.$$.fragment,n),n.forEach(c),v=u(t),f(y.$$.fragment,t),this.h()},h(){r($,"class","d-flex justify-center mt-4 mb-4")},m(t,n){d(e,t,n),o(t,s,n),o(t,$,n),d(i,$,null),o(t,v,n),d(y,t,n),b=!0},p(t,[e]){const s={};11&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s)},i(t){b||(g(e.$$.fragment,t),g(i.$$.fragment,t),g(y.$$.fragment,t),b=!0)},o(t){h(e.$$.fragment,t),h(i.$$.fragment,t),h(y.$$.fragment,t),b=!1},d(t){x(e,t),t&&c(s),t&&c($),x(i),t&&c(v),x(y,t)}}}var X=function(t,e,s,n){return new(s||(s=Promise))((function(a,r){function $(t){try{i(n.next(t))}catch(t){r(t)}}function o(t){try{i(n.throw(t))}catch(t){r(t)}}function i(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then($,o)}i((n=n.apply(t,e||[])).next())}))};function Y({params:t}){return X(this,void 0,void 0,(function*(){const e=t.slug;let{data:s}=yield N.byID(e);return{book:s}}))}function Z(t,e,s){let{book:n}=e,a=!1;return t.$$set=t=>{"book"in t&&s(0,n=t.book)},[n,a,function(){s(1,a=!a)}]}export default class extends t{constructor(t){super(),e(this,t,Z,Q,s,{book:0})}}export{Y as preload};
