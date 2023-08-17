!function(B){"use strict";function S(n,r,t){return t.a=n,t.f=r,t}function f(t){return S(2,t,function(r){return function(n){return t(r,n)}})}function r(e){return S(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function n(u){return S(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function M(a){return S(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function v(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function b(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function s(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function O(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}var l={$:0};function Q(n,r){return{$:1,a:n,b:r}}var D=f(Q);function d(n){for(var r=l,t=n.length;t--;)r={$:1,a:n[t],b:r};return r}var t=r(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(v(n,r.a,t.a));return d(e)});var Y=r(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),G=f(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,{a:t,b:r}});function P(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function c(n,r){for(var t,e=[],u=W(n,r,0,e);u&&(t=e.pop());u=W(t.a,t.b,0,e));return u}function W(n,r,t,e){if(n!==r){if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&P(5),!1;if(100<t)e.push({a:n,b:r});else for(var u in n.$<0&&(n=ir(n),r=ir(r)),n)if(!W(n[u],r[u],t+1,e))return!1}return!0}var I=f(c);function h(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(t=(t=h(n.a,r.a))||h(n.b,r.b))||h(n.c,r.c);for(;n.b&&r.b&&!(t=h(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var J=0;function K(n,r){var t,e={};for(t in n)e[t]=n[t];for(t in r)e[t]=r[t];return e}function $(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t={$:1,a:n.a,b:r};n=n.b;for(var e=t;n.b;n=n.b)e=e.b={$:1,a:n.a,b:r};return t}var H=f(function(n,r){return n+r}),U=f(function(n,r){return n*r});var V=Math.ceil,X=Math.floor,Z=Math.round,nn=Math.sqrt,rn=Math.log;var tn={$:2,b:function(n){return"string"==typeof n?A(n):n instanceof String?A(n+""):p("a STRING",n)}};var en=f(function(n,r){return{$:6,d:n,b:r}});var e=f(function(n,r){return{$:9,f:n,g:[r]}}),un=f(g);function g(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?A(n.c):p("null",r);case 3:return on(r)?an(n.b,r,d):p("a LIST",r);case 4:return on(r)?an(n.b,r,fn):p("an ARRAY",r);case 6:var t=n.d;return"object"==typeof r&&null!==r&&t in r?(a=g(n.b,r[t]),N(a)?a:j(v(fr,t,a.a))):p("an OBJECT with a field named `"+t+"`",r);case 7:t=n.e;return on(r)?t<r.length?(a=g(n.b,r[t]),N(a)?a:j(v(cr,t,a.a))):p("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r):p("an ARRAY",r);case 8:if("object"!=typeof r||null===r||on(r))return p("an OBJECT",r);var e,u=l;for(e in r)if(r.hasOwnProperty(e)){var a=g(n.b,r[e]);if(!N(a))return j(v(fr,e,a.a));u={$:1,a:{a:e,b:a.a},b:u}}return A(_(u));case 9:for(var i=n.f,o=n.g,f=0;f<o.length;f++){a=g(o[f],r);if(!N(a))return a;i=i(a.a)}return A(i);case 10:a=g(n.b,r);return N(a)?g(n.h(a.a),r):a;case 11:for(var c=l,b=n.g;b.b;b=b.b){a=g(b.a,r);if(N(a))return a;c={$:1,a:a.a,b:c}}return j(br(_(c)));case 1:return j(v(or,n.a,r));case 0:return A(n.a)}}function an(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=g(n,r[a]);if(!N(i))return j(v(cr,a,i.a));u[a]=i.a}return A(t(u))}function on(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function fn(r){return v(Br,r.length,function(n){return r[n]})}function p(n,r){return j(v(or,"Expecting "+n,r))}function m(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return m(n.b,r.b);case 6:return n.d===r.d&&m(n.b,r.b);case 7:return n.e===r.e&&m(n.b,r.b);case 9:return n.f===r.f&&cn(n.g,r.g);case 10:return n.h===r.h&&m(n.b,r.b);case 11:return cn(n.g,r.g)}}function cn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!m(n[e],r[e]))return!1;return!0}function bn(n){return n}function vn(n){return{$:0,a:n}}var sn=f(function(n,r){return{$:3,b:n,d:r}});var ln=0;function dn(n){n={$:0,e:ln++,f:n,g:null,h:[]};return mn(n),n}function hn(r){return{$:2,b:function(n){n({$:0,a:dn(r)})},c:null}}function $n(n,r){n.h.push(r),mn(n)}var gn=!1,pn=[];function mn(n){if(pn.push(n),!gn){for(gn=!0;n=pn.shift();)!function(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return r.f.c=r.f.b(function(n){r.f=n,mn(r)});if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}(n);gn=!1}}function yn(n,r,t,e,u,a){var n=v(un,n,r?r.flags:void 0),i=(N(n)||P(2),{}),r=t(n.a),o=r.a,f=a(c,o),t=function(n,r){var t,e;for(e in y){var u=y[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=function(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,o=n.f;function f(t){return v(sn,f,{$:5,b:function(n){var r=n.a;return 0===n.$?b(a,e,r,t):i&&o?s(u,e,r.i,r.j,t):b(u,e,i?r.i:r.j,t)}})}return e.h=dn(v(sn,f,n.b))}(u,r)}return t}(i,c);function c(n,r){n=v(e,n,o);f(o=n.a,r),Nn(i,n.b,u(o))}return Nn(i,r.b,u(o)),t?{ports:t}:{}}var y={};var wn=f(function(r,t){return{$:2,b:function(n){r.g(t),n({$:0,a:J})},c:null}});function kn(r){return function(n){return{$:1,k:r,l:n}}}function jn(n){return{$:2,m:n}}var An=[],_n=!1;function Nn(n,r,t){if(An.push({p:n,q:r,r:t}),!_n){_n=!0;for(var e;e=An.shift();)!function(n,r,t){var e,u={};for(e in Cn(!0,r,u,null),Cn(!1,t,u,null),n)$n(n[e],{$:"fx",a:u[e]||{i:l,j:l}})}(e.p,e.q,e.r);_n=!1}}function Cn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return v(n?y[r].e:y[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:l,j:l},n?t.i={$:1,a:r,b:t.i}:t.j={$:1,a:r,b:t.j},t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)Cn(n,i.a,t,e);return;case 3:Cn(n,r.o,t,{s:r.n,t:e})}}var En;var Ln="undefined"!=typeof document?document:{};function Tn(n){return{$:0,a:n}}var w=f(function(a,i){return f(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:Bn(n),e:t,f:a,b:e}})})(void 0);f(function(a,i){return f(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:Bn(n),e:t,f:a,b:e}})})(void 0);var qn=f(function(n,r){return{$:"a0",n:n,o:r}}),Rn=f(function(n,r){return{$:"a1",n:n,o:r}}),xn=f(function(n,r){return{$:"a2",n:n,o:r}}),Fn=f(function(n,r){return{$:"a3",n:n,o:r}});var zn;function Bn(n){for(var r={};n.b;n=n.b){var t,e=n.a,u=e.$,a=e.n,e=e.o;"a2"===u?"className"===a?Sn(r,a,e):r[a]=e:(t=r[u]||(r[u]={}),"a3"===u&&"class"===a?Sn(t,a,e):t[a]=e)}return r}function Sn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function k(n,r){var t=n.$;if(5===t)return k(n.k||(n.k=n.m()),r);if(0===t)return Ln.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};(i=k(e,a)).elm_event_node_ref=a}else if(3===t)Mn(i=n.h(n.g),r,n.d);else{var i=n.f?Ln.createElementNS(n.f,n.c):Ln.createElement(n.c);En&&"a"==n.c&&i.addEventListener("click",En(i)),Mn(i,r,n.d);for(var o=n.e,f=0;f<o.length;f++)i.appendChild(k(1===t?o[f]:o[f].b,r))}return i}function Mn(n,r,t){for(var e in t){var u=t[e];"a1"===e?function(n,r){var t,e=n.style;for(t in r)e[t]=r[t]}(n,u):"a0"===e?function(n,r,t){var e,u=n.elmFs||(n.elmFs={});for(e in t){var a=t[e],i=u[e];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(e,i)}i=function(f,n){function c(n){var r=c.q,t=g(r.a,n);if(N(t)){for(var e,r=Or(r),t=t.a,u=r?r<3?t.a:t.F:t,a=1==r?t.b:3==r&&t.ay,i=(a&&n.stopPropagation(),(2==r?t.b:3==r&&t.av)&&n.preventDefault(),f);e=i.j;){if("function"==typeof e)u=e(u);else for(var o=e.length;o--;)u=e[o](u);i=i.p}i(u,a)}}return c.q=n,c}(r,a),n.addEventListener(e,i,zn&&{passive:Or(a)<2}),u[e]=i}else n.removeEventListener(e,i),u[e]=void 0}}(n,r,u):"a3"===e?function(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}(n,u):"a4"===e?function(n,r){for(var t in r){var e=r[t],u=e.f,e=e.o;void 0!==e?n.setAttributeNS(u,t,e):n.removeAttributeNS(u,t)}}(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){zn=!0}}))}catch(n){}function On(n,r){var t=[];return T(n,r,t,0),t}function L(n,r,t,e){r={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(r),r}function T(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void L(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var b=[];return T(n.k,r.k,b,0),void(0<b.length&&L(t,1,e,b));case 4:for(var v=n.j,s=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof v?v=[v,d.j]:v.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof s?s=[s,h.j]:s.push(h.j),h=h.k;return l&&v.length!==s.length?void L(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return;return 1}(v,s):v===s)||L(t,2,e,s),void T(d,h,t,e+1));case 0:return void(n.a!==r.a&&L(t,3,e,r.a));case 1:return void Qn(n,r,t,e,Yn);case 2:return void Qn(n,r,t,e,Gn);case 3:if(n.h!==r.h)return void L(t,0,e,r);b=Dn(n.d,r.d),b=(b&&L(t,4,e,b),r.i(n.g,r.g));b&&L(t,5,e,b)}}}function Qn(n,r,t,e,u){var a;n.c!==r.c||n.f!==r.f?L(t,0,e,r):((a=Dn(n.d,r.d))&&L(t,4,e,a),u(n,r,t,e))}function Dn(n,r,t){var e,u,a,i,o;for(u in n)"a1"===u||"a0"===u||"a3"===u||"a4"===u?(a=Dn(n[u],r[u]||{},u))&&((e=e||{})[u]=a):u in r?(a=n[u])===(i=r[u])&&"value"!==u&&"checked"!==u||"a0"===t&&function(n,r){return n.$==r.$&&m(n.a,r.a)}(a,i)||((e=e||{})[u]=i):(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;for(o in r)o in n||((e=e||{})[o]=r[o]);return e}function Yn(n,r,t,e){var u=n.e,a=r.e,n=u.length,r=a.length;r<n?L(t,6,e,{v:r,i:n-r}):n<r&&L(t,7,e,{v:n,e:a});for(var i=n<r?n:r,o=0;o<i;o++){var f=u[o];T(f,a[o],t,++e),e+=f.b||0}}function Gn(n,r,t,e){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,b=f.length,v=0,s=0,l=e;v<c&&s<b;){var d=o[v],h=f[s],$=d.a,g=h.a,p=d.b,m=h.b,y=void 0,w=void 0;if($===g)T(p,m,u,++l),l+=p.b||0,v++,s++;else{var k,j,A,_,N=o[v+1],C=f[s+1];if(N&&(j=N.b,w=g===(k=N.a)),C&&(_=C.b,y=$===(A=C.a)),y&&w)T(p,_,u,++l),q(a,u,$,m,s,i),l+=p.b||0,Wn(a,u,$,j,++l),l+=j.b||0,v+=2,s+=2;else if(y)l++,q(a,u,g,m,s,i),T(p,_,u,l),l+=p.b||0,v+=1,s+=2;else if(w)Wn(a,u,$,p,++l),l+=p.b||0,T(j,m,u,++l),l+=j.b||0,v+=2,s+=1;else{if(!N||k!==A)break;Wn(a,u,$,p,++l),q(a,u,g,m,s,i),l+=p.b||0,T(j,_,u,++l),l+=j.b||0,v+=2,s+=2}}}for(;v<c;){p=(d=o[v]).b;Wn(a,u,d.a,p,++l),l+=p.b||0,v++}for(;s<b;){var E=E||[];q(a,u,(h=f[s]).a,h.b,void 0,E),s++}(0<u.length||0<i.length||E)&&L(t,8,e,{w:u,x:i,y:E})}var Pn="_elmW6BL";function q(n,r,t,e,u,a){var i,o=n[t];o?1===o.c?(a.push({r:u,A:o}),o.c=2,T(o.z,e,i=[],o.r),o.r=u,o.s.s={w:i,A:o}):q(n,r,t+Pn,e,u,a):(a.push({r:u,A:o={c:0,z:e,r:u,s:void 0}}),n[t]=o)}function Wn(n,r,t,e,u){var a,i=n[t];i?0===i.c?(i.c=2,T(e,i.z,a=[],u),L(r,9,u,{w:a,A:i})):Wn(n,r,t+Pn,e,u):(a=L(r,9,u,void 0),n[t]={c:1,z:e,r:u,s:a})}function In(n,r,t,e){!function n(r,t,e,u,a,i,o){var f=e[u];var c=f.r;for(;c===a;){var b,v=f.$;if(1===v?In(r,t.k,f.s,o):8===v?(f.t=r,f.u=o,0<(b=f.s.w).length&&n(r,t,b,0,a,i,o)):9===v?(f.t=r,f.u=o,(v=f.s)&&(v.A.s=r,0<(b=v.w).length)&&n(r,t,b,0,a,i,o)):(f.t=r,f.u=o),!(f=e[++u])||(c=f.r)>i)return u}var s=t.$;if(4===s){for(var l=t.k;4===l.$;)l=l.k;return n(r,l,e,u,a+1,i,r.elm_event_node_ref)}var d=t.e;var h=r.childNodes;for(var $=0;$<d.length;$++){var g=1===s?d[$]:d[$].b,p=++a+(g.b||0);if(a<=c&&c<=p&&(u=n(h[$],g,e,u,a,p,o),!(f=e[u])||(c=f.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function Jn(n,r,t,e){return 0===t.length?n:(In(n,r,t,e),Kn(n,t))}function Kn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,e=function(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,r=k(r,t);r.elm_event_node_ref||(r.elm_event_node_ref=n.elm_event_node_ref);e&&r!==n&&e.replaceChild(r,n);return r}(n,r.s,r.u);case 4:return Mn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Kn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,e=t.v,a=n.childNodes[e];e<u.length;e++)n.insertBefore(k(u[e],r.u),a);return n;case 9:var i;return(t=r.s)?(void 0!==(i=t.A).r&&n.parentNode.removeChild(n),i.s=Kn(n,t.w)):n.parentNode.removeChild(n),n;case 8:return function(n,r){for(var t=r.s,e=function(n,r){if(n){for(var t=Ln.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;t.appendChild(2===u.c?u.s:k(u.z,r.u))}return t}}(t.y,r),u=(n=Kn(n,t.w),t.x),a=0;a<u.length;a++){var i=u[a],o=i.A,o=2===o.c?o.s:k(o.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&n.appendChild(e);return n}(n,r);case 5:return r.s(n);default:P(10)}}(u,e);u===n&&(n=e)}return n}function Hn(n){if(3===n.nodeType)return{$:0,a:n.textContent};if(1!==n.nodeType)return{$:0,a:""};for(var r=l,t=n.attributes,e=t.length;e--;)var u=t[e],r={$:1,a:v(Fn,u.name,u.value),b:r};for(var a=n.tagName.toLowerCase(),i=l,o=n.childNodes,e=o.length;e--;)i={$:1,a:Hn(o[e]),b:i};return b(w,a,r,i)}var Un=n(function(r,n,t,i){return yn(n,i,r.bL,r.cd,r.b8,function(t,n){var e=r.ce,u=i.node,a=Hn(u);return Xn(n,function(n){var n=e(n),r=On(a,n);u=Jn(u,a,r,t),a=n})})}),Vn="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function Xn(t,e){e(t);var u=0;function a(){u=1===u?0:(Vn(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&Vn(a),u=2)}}function Zn(n){return b(hr,f(function(n,r){return r+1}),0,n)}function nr(n){return n}function rr(n){return n.a}function tr(n){return n}function er(n){return{$:0,a:n}}function ur(n){var r=n.b;return v(Kr,1664525*n.a+r>>>0,r)}var o=D,ar=r(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=b(n,t.b,t.c,b(ar,n,r,t.e));n=u,r=a,t=e}}),ir=function(n){return b(ar,r(function(n,r,t){return v(o,{a:n,b:r},t)}),l,n)},j=function(n){return{$:1,a:n}},or=f(function(n,r){return{$:3,a:n,b:r}}),fr=f(function(n,r){return{$:0,a:n,b:r}}),cr=f(function(n,r){return{$:1,a:n,b:r}}),A=function(n){return{$:0,a:n}},br=function(n){return{$:2,a:n}},vr=H,sr=function(n){return{$:0,a:n}},lr={$:1},dr=function(n){return n+""},hr=r(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=v(n,t.a,r);n=u,r=a,t=e}}),$r=t,gr=r(function(n,r,t){for(;;){if(1<=h(n,r))return t;var e=n,u=r-1,a=v(o,r,t);n=e,r=u,t=a}}),pr=f(function(n,r){return b(gr,n,r,l)}),mr=f(function(n,r){return b($r,n,v(pr,0,Zn(r)-1),r)}),_=function(n){return b(hr,o,l,n)},yr=n(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),wr=[],kr=V,jr=f(function(n,r){return rn(r)/rn(n)}),Ar=kr(v(jr,2,32)),_r=s(yr,0,Ar,wr,wr),Nr=Y,Cr=I,Er=X,Lr=function(n){return n.length},Tr=f(function(n,r){return 0<h(n,r)?n:r}),D=U,qr=G,Rr=f(function(n,r){for(;;){var t=v(qr,32,n),e=t.b,t=v(o,{$:0,a:t.a},r);if(!e.b)return _(t);n=e,r=t}}),xr=f(function(n,r){for(;;){var t=kr(r/32);if(1===t)return v(qr,32,n).a;n=v(Rr,n,l),r=t}}),Fr=f(function(n,r){var t,e;return r.g?(e=Er(v(jr,32,(t=32*r.g)-1)),n=n?_(r.j):r.j,n=v(xr,n,r.g),s(yr,Lr(r.i)+t,v(Tr,5,e*Ar),n,r.i)):s(yr,Lr(r.i),Ar,wr,r.i)}),zr=M(function(n,r,t,e,u){for(;;){if(r<0)return v(Fr,!1,{j:e,g:t/32|0,i:u});var a={$:1,a:b(Nr,32,r,n)};n=n,r=r-32,t=t,e=v(o,a,e),u=u}}),Br=f(function(n,r){var t;return 0<n?O(zr,r,n-(t=n%32)-32,n,l,b(Nr,t,n-t,r)):_r}),N=function(n){return!n.$},Sr=e,Mr=function(n){return{$:0,a:n}},Or=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Qr=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;u<n.length;++u){var a=n.charCodeAt(u);if(a<48||57<a)return lr;r=10*r+a-48}return u==e?lr:sr(45==t?-r:r)},a=vn,H=a(0),Dr=n(function(n,r,t,e){var u,a,i,o;return e.b?(u=e.a,(e=e.b).b?(a=e.a,(e=e.b).b?(i=e.a,(e=e.b).b?(o=e.b,v(n,u,v(n,a,v(n,i,v(n,e.a,500<t?b(hr,n,r,_(o)):s(Dr,n,r,t+1,o)))))):v(n,u,v(n,a,v(n,i,r)))):v(n,u,v(n,a,r))):v(n,u,r)):r}),u=r(function(n,r,t){return s(Dr,n,r,0,t)}),C=f(function(t,n){return b(u,f(function(n,r){return v(o,t(n),r)}),l,n)}),i=sn,Yr=f(function(r,n){return v(i,function(n){return a(r(n))},n)}),Gr=r(function(t,n,e){return v(i,function(r){return v(i,function(n){return a(v(t,r,n))},e)},n)}),Pr=wn,Wr=f(function(n,r){return hn(v(i,Pr(n),r))}),t=r(function(n,r,t){return v(Yr,function(n){return 0},(n=v(C,Wr(n),r),b(u,Gr(o),a(l),n)))}),V=(y.Task={b:H,c:t,d:r(function(n,r,t){return a(0)}),e:f(function(n,r){return v(Yr,n,r)}),f:void 0},kn("Task"),Un),Ir={$:0},Jr=jn(l),E=r(function(n,r,t){return n(r(t))}),Kr=f(function(n,r){return{$:0,a:n,b:r}});ft=tr;function Hr(n){return{a:1,b:n}}function Ur(n){return n<0?-n:n}function Vr(n){return((n=277803737*((n=n.a)^n>>>4+(n>>>28)))>>>22^n)>>>0}function Xr(n){return v(dt,n*n,v(pt,0,d([1,2,3,4,5])))}function Zr(n){return{$:1,a:n}}function nt(n){return{$:0,a:n}}function rt(n){var r=yt(kt(Zn(n)));return{$:0,a:{bt:n,ag:r,Q:v(jt,3,(n=n).b?sr(n.a):lr),b2:wt(r)}}}function tt(t){return v(hr,f(function(n,r){return t(n)?r+1:r}),0)}function et(n){return!n}function ut(n){return n.b}function at(n){return{$:1,a:n}}function it(n){return v(Gt,"click",Mr(n))}function ot(n){return{a:n,b:!0}}var ft,Y=v(i,function(n){return a(function(n){var r=ur(v(Kr,0,1013904223));return ur(v(Kr,r.a+n>>>0,r.b))}(n))},{$:2,b:function(n){n({$:0,a:ft(Date.now())})},c:null}),ct=f(function(n,r){return n(r)}),bt=r(function(r,n,t){var e,u;return n.b?(e=n.b,u=(n=v(ct,n.a,t)).b,v(i,function(n){return b(bt,r,e,u)},v(Pr,r,n.a))):a(t)}),I=r(function(n,r,t){return a(t)}),vt=f(function(t,n){var e=n;return function(n){var n=e(n),r=n.b;return{a:t(n.a),b:r}}}),st=(y.Random={b:Y,c:bt,d:I,e:f(function(n,r){return v(vt,n,r)}),f:void 0},kn("Random")),X=f(function(n,r){return st(v(vt,n,r))}),lt=n(function(n,r,t,e){for(;;){if(r<1)return{a:n,b:e};var u=t(e),a=u.b;n=v(o,u.a,n),r=r-1,t=t,e=a}}),dt=f(function(r,n){var t=n;return function(n){return s(lt,l,r,t,n)}}),ht=f(function(u,a){return function(n){var r=ur(n),t=Ur(a-u),e=Vr(r);return{a:(134217728*(67108863&Vr(n))+(134217727&e))/9007199254740992*t+u,b:ur(r)}}}),$t=r(function(n,r,t){for(;;){var e=n.a,u=n.b;if(!r.b)return u;var a=r.a,i=r.b;if(h(t,Ur(e))<1)return u;n=a,r=i,t=t-Ur(e)}}),gt=f(function(n,r){function t(n){return Ur(n.a)}var e=t(n)+b(hr,vr,0,v(C,t,r));return v(vt,v($t,n,r),v(ht,0,e))}),pt=f(function(n,r){return v(gt,{a:1,b:n},v(C,Hr,r))}),mt=v(E,X(v(E,er,tr)),Xr),U=r(function(n,r,t){return r(n(t))}),yt=Z,wt=v(U,nr,v(U,D(1.8),yt)),kt=nn,jt=f(function(n,r){return r.$?n:r.a}),At=jn(l),_t=f(function(n,r){return{$:1,a:n,b:r}}),Nt=f(function(n,r){return n}),Ct=f(function(n,r){return r.b?b(u,o,r,n):n}),Et=f(function(n,r){return b(u,Ct,l,v(C,n,r))}),Lt=f(function(t,n){return b(u,f(function(n,r){return t(n)?v(o,n,r):r}),l,n)}),Tt=f(function(n,r){return{a:r.a,b:n(r.b)}}),qt=f(function(n,r){for(;;){if(!r.b)return!1;var t=r.b;if(n(r.a))return!0;n=n,r=t}}),Rt=f(function(r,n){return v(qt,function(n){return c(n,r)},n)}),xt=r(function(n,t,r){var e=c(r%n,n-1),u=!(r%n),a=-1<h(r,n*(n-1)),i=h(r,n)<0,o=f(function(n,r){return n&&v(Rt,r,t)?d([r]):l});return $(v(o,!u,r-1),$(v(o,!e,r+1),$(v(o,!i,r-n),v(o,!a,r+n))))}),Ft=f(function(n,r){return{a:n,b:r}}),zt=n(function(n,r,t,e){for(;;){if(!t.b)return _(e);var u=t.a,a=t.b,i=n(u);e=v(Rt,i,r)?(n=n,r=r,t=a,e):(n=n,r=v(o,i,r),t=a,v(o,u,e))}}),Bt=r(function(r,t,n){return v(C,function(n){return r(n)?t(n):n},n)}),St=f(function(n,r){var e,u,t=r.Q,a=r.ag,r=r.bt,i=f(function(n,r){return v(Rt,r,n)}),r=v(mr,Ft,r),a=(e=v(xt,a,v(C,rr,v(Lt,function(n){return c(n.b,t)},r))),v(u=f(function(n,r){var t=v(Lt,v(E,et,i(n)),s(zt,tr,l,v(Et,e,r),l));return t.b?$(r,v(u,$(n,r),t)):r}),l,d([0]))),a=v(Bt,v(E,i(a),rr),v(E,Tt,Nt)(n));return v(E,C(ut),a)(r)}),Mt=f(function(n,r){var t=K(n,{bt:v(St,r,n),Q:r,b2:n.b2-1}),e=c(Zn(n.bt),v(tt,Cr(n.Q),n.bt)+v(tt,Cr(r),n.bt));return c(r,n.Q)?{$:0,a:n}:1!==n.b2||e?e?v(_t,t,0):{$:0,a:t}:v(_t,t,1)}),Ot=f(function(n,r){for(var t,e={a:n,b:r};;){if(e.a.$){if(e.b.$)break;return{$:0,a:K(e.b.a,{ag:t=e.a.a,b2:wt(t)})}}if(e.b.$)break;return v(Mt,e.b.a,e.a.a)}return r}),G=f(function(n,r){var t,e={a:n,b:r};n:for(;;)switch(e.a.$){case 0:return{a:{$:1,a:rt(e.a.a)},b:At};case 1:if(e.a.a.$){if(1===e.b.$)return{a:{$:1,a:v(Ot,{$:1,a:t=e.a.a.a},e.b.a)},b:mt(t)};break n}if(1===e.b.$)return{a:{$:1,a:v(Ot,{$:0,a:e.a.a.a},e.b.a)},b:At};break n;default:if(1===e.b.$)return e.b.a.$?0:0,{a:r,b:mt(e.b.a.a.ag)};break n}return{a:r,b:At}}),Qt=bn,R=f(function(n,r){return v(xn,n,Qt(r))}),x=R("className"),F=w("div"),z=Tn,Dt=Rn,Yt=qn,Gt=f(function(n,r){return v(Yt,n,{$:0,a:r})}),Pt=function(n){return v(F,d([x("cell"),x(function(n){switch(n){case 0:return"yellow";case 1:return"orange";case 2:return"green";case 3:return"blue";case 4:return"purple";default:return"brown"}}(n)),it(v(E,at,nt)(n))]),l)},e=w("li"),Wt=v(w("ol"),d([x("instructions")]),d([v(e,l,d([z("To win you must drench whole board with single color.")])),v(e,l,d([z("You have limit of moves.")])),v(e,l,d([z("Your current color is always at the top left corner.")])),v(e,l,d([z("Change current color to a new one by clicking on any square with new color.")]))])),It=v(w("button"),d([it({$:2,a:0}),x("newGameButton")]),d([z("New game")])),Jt=w("p"),Kt=function(n){return v(Jt,d([x("label")]),d([z("Remaining moves: "+dr(n))]))},Ht=w("input"),Ut=R("max"),Vt=R("min"),Xt=f(function(n,r){return v(Yt,n,{$:1,a:r})}),Zt=en,wn=tn,ne=v(f(function(n,r){return b(u,Zt,r,n)}),d(["target","value"]),wn),re=R("type"),te=R("value"),ee=function(n){return v(F,d([x("sliderWrapper")]),d([v(Jt,d([x("sliderLabel"),x("label")]),d([z("Board size: "+dr(n))])),v(Ht,d([(r=v(E,v(E,v(E,at,Zr),jt(n)),Qr),v(Xt,"input",v(Sr,ot,v(Sr,r,ne)))),x("slider"),re("range"),Vt("6"),Ut("28"),te(dr(n)),v(R,"step","1")]),l)]));var r},H=V({bL:function(n){return{a:Ir,b:mt(6)}},b8:function(n){return Jr},cd:G,ce:function(n){var r;return n.$?n.a.$?(r=n.a.b,v(F,d([x("wrapper")]),d([It,function(n){return v(F,l,d([z(n?"Keep trying and play again! 💪🏼":"Congrats! 🎉 Wanna play again?")]))}(r)]))):(r=n.a.a,v(F,d([x("wrapper")]),d([function(n){return v(F,d([x("menu")]),d([ee(n.ag),It,Kt(n.b2)]))}(r),function(n){return v(F,d([x("board"),v(Dt,"grid-template-columns","repeat("+dr(n.ag)+", 1fr)")]),v(C,Pt,n.bt))}(r),Wt]))):v(F,l,d([z("Loading...")]))}});t={App:{init:H(Mr(0))(0)}},B.Elm?function n(r,t){for(var e in t)e in r?"init"==e?P(6):n(r[e],t[e]):r[e]=t[e]}(B.Elm,t):B.Elm=t}(this);