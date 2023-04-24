(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8417:function(e,t,r){"use strict";r.d(t,{Z:function(){return q}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),i=Math.abs,s=String.fromCharCode,o=Object.assign;function a(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function c(e,t,r){return e.slice(t,r)}function h(e){return e.length}function d(e,t){return t.push(e),e}var f=1,p=1,m=0,g=0,y=0,v="";function b(e,t,r,n,i,s,o){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:f,column:p,length:o,return:""}}function w(e,t){return o(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function _(){return y=g<m?u(v,g++):0,p++,10===y&&(p=1,f++),y}function E(){return u(v,g)}function I(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S(e){return f=p=1,m=h(v=e),g=0,[]}function T(e){var t,r;return(t=g-1,r=function e(t){for(;_();)switch(y){case t:return g;case 34:case 39:34!==t&&39!==t&&e(y);break;case 40:41===t&&e(t);break;case 92:_()}return g}(91===e?e+2:40===e?e+1:e),c(v,t,r)).trim()}var k="-ms-",C="-moz-",A="-webkit-",O="comm",x="rule",N="decl",R="@keyframes";function P(e,t){for(var r="",n=e.length,i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function D(e,t,r,n){switch(e.type){case"@import":case N:return e.return=e.return||e.value;case O:return"";case R:return e.return=e.value+"{"+P(e.children,n)+"}";case x:e.value=e.props.join(",")}return h(r=P(e.children,n))?e.return=e.value+"{"+r+"}":""}function L(e,t,r,n,s,o,l,u,h,d,f){for(var p=s-1,m=0===s?o:[""],g=m.length,y=0,v=0,w=0;y<n;++y)for(var _=0,E=c(e,p+1,p=i(v=l[y])),I=e;_<g;++_)(I=(v>0?m[_]+" "+E:a(E,/&\f/g,m[_])).trim())&&(h[w++]=I);return b(e,t,r,0===s?x:u,h,d,f)}function M(e,t,r,n){return b(e,t,r,N,c(e,0,n),c(e,n+1,-1),n)}var j=function(e,t,r){for(var n=0,i=0;n=i,i=E(),38===n&&12===i&&(t[r]=1),!I(i);)_();return c(v,e,g)},F=function(e,t){var r=-1,n=44;do switch(I(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=j(g-1,t,r);break;case 2:e[r]+=T(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}while(n=_());return e},U=function(e,t){var r;return r=F(S(e),t),v="",r},V=new WeakMap,$=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||V.get(r))&&!n){V.set(e,!0);for(var i=[],s=U(t,i),o=r.props,a=0,l=0;a<s.length;a++)for(var u=0;u<o.length;u++,l++)e.props[l]=i[a]?s[a].replace(/&\f/g,o[u]):o[u]+" "+s[a]}}},z=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},B=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case N:e.return=function e(t,r){switch(45^u(t,0)?(((r<<2^u(t,0))<<2^u(t,1))<<2^u(t,2))<<2^u(t,3):0){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+C+t+k+t+t;case 6828:case 4268:return A+t+k+t+t;case 6165:return A+t+k+"flex-"+t+t;case 5187:return A+t+a(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+k+"flex-$1$2")+t;case 5443:return A+t+k+"flex-item-"+a(t,/flex-|-self/,"")+t;case 4675:return A+t+k+"flex-line-pack"+a(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+k+a(t,"shrink","negative")+t;case 5292:return A+t+k+a(t,"basis","preferred-size")+t;case 6060:return A+"box-"+a(t,"-grow","")+A+t+k+a(t,"grow","positive")+t;case 4554:return A+a(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return a(a(a(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return a(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return a(a(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return a(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-r>6)switch(u(t,r+1)){case 109:if(45!==u(t,r+4))break;case 102:return a(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+C+(108==u(t,r+3)?"$3":"$2-$3"))+t;case 115:return~l(t,"stretch")?e(a(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==u(t,r+1))break;case 6444:switch(u(t,h(t)-3-(~l(t,"!important")&&10))){case 107:return a(t,":",":"+A)+t;case 101:return a(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(45===u(t,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+k+"$2box$3")+t}break;case 5936:switch(u(t,r+11)){case 114:return A+t+k+a(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+k+a(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+k+a(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+k+t+t}return t}(e.value,e.length);break;case R:return P([w(e,{value:a(e.value,"@","@"+A)})],n);case x:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return P([w(e,{props:[a(t,/:(read-\w+)/,":"+C+"$1")]})],n);case"::placeholder":return P([w(e,{props:[a(t,/:(plac\w+)/,":"+A+"input-$1")]}),w(e,{props:[a(t,/:(plac\w+)/,":"+C+"$1")]}),w(e,{props:[a(t,/:(plac\w+)/,k+"input-$1")]})],n)}return""}).join("")}}],q=function(e){var t,r,i,o,m,w=e.key;if("css"===w){var k=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(k,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var C=e.stylisPlugins||B,A={},x=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+w+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)A[t[r]]=!0;x.push(e)});var N=(r=(t=[$,z].concat(C,[D,(i=function(e){m.insert(e)},function(e){!e.root&&(e=e.return)&&i(e)})])).length,function(e,n,i,s){for(var o="",a=0;a<r;a++)o+=t[a](e,n,i,s)||"";return o}),R=function(e){var t,r;return P((r=function e(t,r,n,i,o,m,w,S,k){for(var C,A=0,x=0,N=w,R=0,P=0,D=0,j=1,F=1,U=1,V=0,$="",z=o,B=m,q=i,K=$;F;)switch(D=V,V=_()){case 40:if(108!=D&&58==u(K,N-1)){-1!=l(K+=a(T(V),"&","&\f"),"&\f")&&(U=-1);break}case 34:case 39:case 91:K+=T(V);break;case 9:case 10:case 13:case 32:K+=function(e){for(;y=E();)if(y<33)_();else break;return I(e)>2||I(y)>3?"":" "}(D);break;case 92:K+=function(e,t){for(var r;--t&&_()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return r=g+(t<6&&32==E()&&32==_()),c(v,e,r)}(g-1,7);continue;case 47:switch(E()){case 42:case 47:d(b(C=function(e,t){for(;_();)if(e+y===57)break;else if(e+y===84&&47===E())break;return"/*"+c(v,t,g-1)+"*"+s(47===e?e:_())}(_(),g),r,n,O,s(y),c(C,2,-2),0),k);break;default:K+="/"}break;case 123*j:S[A++]=h(K)*U;case 125*j:case 59:case 0:switch(V){case 0:case 125:F=0;case 59+x:P>0&&h(K)-N&&d(P>32?M(K+";",i,n,N-1):M(a(K," ","")+";",i,n,N-2),k);break;case 59:K+=";";default:if(d(q=L(K,r,n,A,x,o,S,$,z=[],B=[],N),m),123===V){if(0===x)e(K,r,q,q,z,m,N,S,B);else switch(99===R&&110===u(K,3)?100:R){case 100:case 109:case 115:e(t,q,q,i&&d(L(t,q,q,0,0,o,S,$,o,z=[],N),B),o,B,N,S,i?z:B);break;default:e(K,q,q,q,[""],B,0,S,B)}}}A=x=P=0,j=U=1,$=K="",N=w;break;case 58:N=1+h(K),P=D;default:if(j<1){if(123==V)--j;else if(125==V&&0==j++&&125==(y=g>0?u(v,--g):0,p--,10===y&&(p=1,f--),y))continue}switch(K+=s(V),V*j){case 38:U=x>0?1:(K+="\f",-1);break;case 44:S[A++]=(h(K)-1)*U,U=1;break;case 64:45===E()&&(K+=T(_())),R=E(),x=N=h($=K+=function(e){for(;!I(E());)_();return c(v,e,g)}(g)),V++;break;case 45:45===D&&2==h(K)&&(j=0)}}return m}("",null,null,null,[""],t=S(t=e),0,[0],t),v="",r),N)},j={key:w,sheet:new n({key:w,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:A,registered:{},insert:function(e,t,r,n){m=r,R(e?e+"{"+t.styles+"}":t.styles),n&&(j.inserted[t.name]=!0)}};return j.sheet.hydrate(x),j}},5042:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},2443:function(e,t,r){"use strict";r.d(t,{T:function(){return a},w:function(){return o}});var n=r(7294),i=r(8417);r(8137),r(7278);var s=(0,n.createContext)("undefined"!=typeof HTMLElement?(0,i.Z)({key:"css"}):null);s.Provider;var o=function(e){return(0,n.forwardRef)(function(t,r){return e(t,(0,n.useContext)(s),r)})},a=(0,n.createContext)({})},8137:function(e,t,r){"use strict";r.d(t,{O:function(){return m}});var n,i=function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)},s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=r(5042),a=/[A-Z]|^ms/g,l=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},h=(0,o.Z)(function(e){return u(e)?e:e.replace(a,"-$&").toLowerCase()}),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(l,function(e,t,r){return n={name:t,styles:r,next:n},t})}return 1===s[e]||u(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)n={name:i.name,styles:i.styles,next:n},i=i.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=f(e,t,r[i])+";";else for(var s in r){var o=r[s];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=s+"{"+t[o]+"}":c(o)&&(n+=h(s)+":"+d(s,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==t||void 0===t[o[0]]))for(var a=0;a<o.length;a++)c(o[a])&&(n+=h(s)+":"+d(s,o[a])+";");else{var l=f(e,t,o);switch(s){case"animation":case"animationName":n+=h(s)+":"+l+";";break;default:n+=s+"{"+l+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var s=n,o=r(e);return n=s,f(e,t,o)}}if(null==t)return r;var a=t[r];return void 0!==a?a:r}var p=/label:\s*([^\s;\n{]+)\s*(;|$)/g,m=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var s,o=!0,a="";n=void 0;var l=e[0];null==l||void 0===l.raw?(o=!1,a+=f(r,t,l)):a+=l[0];for(var u=1;u<e.length;u++)a+=f(r,t,e[u]),o&&(a+=l[u]);p.lastIndex=0;for(var c="";null!==(s=p.exec(a));)c+="-"+s[1];return{name:i(a)+c,styles:a,next:n}}},7278:function(e,t,r){"use strict";r.d(t,{L:function(){return o},j:function(){return a}});var n,i=r(7294),s=!!(n||(n=r.t(i,2))).useInsertionEffect&&(n||(n=r.t(i,2))).useInsertionEffect,o=s||function(e){return e()},a=s||i.useLayoutEffect},444:function(e,t,r){"use strict";function n(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}r.d(t,{My:function(){return s},fp:function(){return n},hC:function(){return i}});var i=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},s=function(e,t,r){i(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do e.insert(t===s?"."+n:"",s,e.sheet,!0),s=s.next;while(void 0!==s)}}},1294:function(e,t,r){"use strict";r.d(t,{hJ:function(){return a_},JU:function(){return aE},QT:function(){return aX},PL:function(){return aJ},ad:function(){return aT},pl:function(){return aY}});var n,i,s,o,a,l,u,c,h=r(5816),d=r(740),f=r(3333),p=r(4444),m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},g={},y=y||{},v=m||self;function b(){}function w(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function _(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function E(e,t,r){return e.call.apply(e.bind,arguments)}function I(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function S(e,t,r){return(S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E:I).apply(null,arguments)}function T(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function k(e,t){function r(){}r.prototype=t.prototype,e.X=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Wb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.na=function(){this.s||(this.s=!0,this.M())},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function O(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function x(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(w(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",b,t),v.removeEventListener("test",b,t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}var D=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return e<t?-1:e>t?1:0}function M(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function j(e){return -1!=M().indexOf(e)}function F(e){return F[" "](e),e}F[" "]=b;var U=j("Opera"),V=j("Trident")||j("MSIE"),$=j("Edge"),z=$||V,B=j("Gecko")&&!(-1!=M().toLowerCase().indexOf("webkit")&&!j("Edge"))&&!(j("Trident")||j("MSIE"))&&!j("Edge"),q=-1!=M().toLowerCase().indexOf("webkit")&&!j("Edge");function K(){var e=v.document;return e?e.documentMode:void 0}e:{var H,W="",Z=(H=M(),B?/rv:([^\);]+)(\)|;)/.exec(H):$?/Edge\/([\d\.]+)/.exec(H):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(H):q?/WebKit\/(\S+)/.exec(H):U?/(?:Version)[ \/]?(\S+)/.exec(H):void 0);if(Z&&(W=Z?Z[1]:""),V){var G=K();if(null!=G&&G>parseFloat(W)){i=String(G);break e}}i=W}var X={},Q=v.document&&V&&(K()||parseInt(i,10))||void 0;function J(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{F(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&J.X.h.call(this)}}k(J,N);var Y={2:"touch",3:"pen",4:"mouse"};J.prototype.h=function(){J.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),et=0;function er(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++et,this.ba=this.ea=!1}function en(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ei(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function es(e){let t={};for(let r in e)t[r]=e[r];return t}let eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ea(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<eo.length;t++)r=eo[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function el(e){this.src=e,this.g={},this.h=0}function eu(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=A(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(en(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function ec(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}el.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ec(e,t,n,i);return -1<o?(t=e[o],r||(t.ea=!1)):((t=new er(t,this.src,s,!!n,i)).ea=r,e.push(t)),t};var eh="closure_lm_"+(1e6*Math.random()|0),ed={};function ef(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=_(i)?!!i.capture:!!i,a=ey(e);if(a||(e[eh]=a=new el(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return eg.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(em(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function ep(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ee])eu(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(em(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=ey(t))?(eu(r,e),0==r.h&&(r.src=null,t[eh]=null)):en(e)}}}function em(e){return e in ed?ed[e]:ed[e]="on"+e}function eg(e,t){if(e.ba)e=!0;else{t=new J(t,this);var r=e.listener,n=e.ha||e.src;e.ea&&ep(e),e=r.call(n,t)}return e}function ey(e){return(e=e[eh])instanceof el?e:null}var ev="__closure_events_fn_"+(1e9*Math.random()>>>0);function eb(e){return"function"==typeof e?e:(e[ev]||(e[ev]=function(t){return e.handleEvent(t)}),e[ev])}function ew(){C.call(this),this.i=new el(this),this.P=this,this.I=null}function e_(e,t){var r,n=e.I;if(n)for(r=[];n;n=n.I)r.push(n);if(e=e.P,n=t.type||t,"string"==typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var i=t;ea(t=new N(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=eE(o,n,!0,t)&&i}if(i=eE(o=t.g=e,n,!0,t)&&i,i=eE(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=eE(o=t.g=r[s],n,!1,t)&&i}function eE(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.ea&&eu(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}k(ew,C),ew.prototype[ee]=!0,ew.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=_(i)?!!i.capture:!!i,n=eb(n),t&&t[ee])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=ec(o=t.g[r],n,i,s))&&(en(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=ey(t))&&(r=t.g[r.toString()],t=-1,r&&(t=ec(r,n,i,s)),(n=-1<t?r[t]:null)&&ep(n))}(this,e,t,r,n)},ew.prototype.M=function(){if(ew.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)en(r[n]);delete t.g[e],t.h--}}this.I=null},ew.prototype.N=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},ew.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var eI=v.JSON.stringify,eS=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eT,e=>e.reset());class eT{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ek(e,t){var r;o||(r=v.Promise.resolve(void 0),o=function(){r.then(eO)}),eC||(o(),eC=!0),eA.add(e,t)}var eC=!1,eA=new class{constructor(){this.h=this.g=null}add(e,t){let r=eS.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}};function eO(){let e;for(;e=null,(t=eA).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),r=e;){try{r.h.call(r.g)}catch(e){!function(e){v.setTimeout(()=>{throw e},0)}(e)}var t,r,n=eS;n.j(r),100>n.h&&(n.h++,r.next=n.g,n.g=r)}eC=!1}function ex(e,t){ew.call(this),this.h=e||1,this.g=t||v,this.j=S(this.lb,this),this.l=Date.now()}function eN(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function eR(e,t,r){if("function"==typeof e)r&&(e=S(e,r));else if(e&&"function"==typeof e.handleEvent)e=S(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}k(ex,ew),(c=ex.prototype).ca=!1,c.R=null,c.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),e_(this,"tick"),this.ca&&(eN(this),this.start()))}},c.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){ex.X.M.call(this),eN(this),delete this.g};class eP extends C{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eR(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eD(e){C.call(this),this.h=e,this.g={}}k(eD,C);var eL=[];function eM(e,t,r,n){Array.isArray(r)||(r&&(eL[0]=r.toString()),r=eL);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=eb(n),t&&t[ee]?t.O(r,n,_(i)?!!i.capture:!!i,s):ef(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=eb(n),t&&t[ee]?t.N(r,n,_(i)?!!i.capture:!!i,s):ef(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ej(e){ei(e.g,function(e,t){this.g.hasOwnProperty(t)&&ep(e)},e),e.g={}}function eF(){this.g=!0}function eU(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return eI(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eD.prototype.M=function(){eD.X.M.call(this),ej(this)},eD.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eF.prototype.Aa=function(){this.g=!1},eF.prototype.info=function(){};var eV={},e$=null;function ez(){return e$=e$||new ew}function eB(e){N.call(this,eV.Pa,e)}function eq(e){let t=ez();e_(t,new eB(t))}function eK(e,t){N.call(this,eV.STAT_EVENT,e),this.stat=t}function eH(e){let t=ez();e_(t,new eK(t,e))}function eW(e,t){N.call(this,eV.Qa,e),this.size=t}function eZ(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}eV.Pa="serverreachability",k(eB,N),eV.STAT_EVENT="statevent",k(eK,N),eV.Qa="timingevent",k(eW,N);var eG={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},eX={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function eQ(){}function eJ(e){return e.h||(e.h=e.i())}function eY(){}eQ.prototype.h=null;var e0={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function e1(){N.call(this,"d")}function e2(){N.call(this,"c")}function e5(){}function e3(e,t,r,n){this.l=e,this.j=t,this.m=r,this.U=n||1,this.S=new eD(this),this.O=e6,e=z?125:void 0,this.T=new ex(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e4}function e4(){this.i=null,this.g="",this.h=!1}k(e1,N),k(e2,N),k(e5,eQ),e5.prototype.g=function(){return new XMLHttpRequest},e5.prototype.i=function(){return{}},a=new e5;var e6=45e3,e8={},e9={};function e7(e,t,r){e.K=1,e.v=ty(td(t)),e.s=r,e.P=!0,te(e,null)}function te(e,t){e.F=Date.now(),tn(e),e.A=td(e.v);var r=e.A,n=e.U;Array.isArray(n)||(n=[String(n)]),tx(r.i,"t",n),e.C=0,r=e.l.H,e.h=new e4,e.g=rb(e.l,r?t:null,!e.s),0<e.N&&(e.L=new eP(S(e.La,e,e.g),e.N)),eM(e.S,e.g,"readystatechange",e.ib),t=e.H?es(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),eq(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function tt(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function tr(e,t,r){let n=!0,i;for(;!e.I&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?e9:isNaN(r=Number(t.substring(r,n)))?e8:(n+=1)+r>t.length?e9:(t=t.substr(n,r),e.C=n+r,t)}(e,r))==e9){4==t&&(e.o=4,eH(14),n=!1),eU(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e8){e.o=4,eH(15),eU(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else eU(e.j,e.m,i,null),tl(e,i);tt(e)&&i!=e9&&i!=e8&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,eH(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),rh(t),t.K=!0,eH(11))):(eU(e.j,e.m,r,"[Invalid Chunked Response]"),ta(e),to(e))}function tn(e){e.V=Date.now()+e.O,ti(e,e.O)}function ti(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eZ(S(e.gb,e),t)}function ts(e){e.B&&(v.clearTimeout(e.B),e.B=null)}function to(e){0==e.l.G||e.I||rp(e.l,e)}function ta(e){ts(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,eN(e.T),ej(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tl(e,t){try{var r=e.l;if(0!=r.G&&(r.g==e||tj(r.h,e))){if(!e.J&&tj(r.h,e)&&3==r.G){try{var n=r.Fa.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)rf(r),rn(r);else break e}rc(r),eH(18)}}else r.Ba=i[1],0<r.Ba-r.T&&37500>i[2]&&r.L&&0==r.A&&!r.v&&(r.v=eZ(S(r.cb,r),6e3));if(1>=tM(r.h)&&r.ja){try{r.ja()}catch(e){}r.ja=void 0}}else rg(r,11)}else if((e.J||r.g==e)&&rf(r),!P(t))for(i=r.Fa.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.I=a[1],r.ka=a[2];let t=a[3];null!=t&&(r.ma=t,r.j.info("VER="+r.ma));let i=a[4];null!=i&&(r.Ca=i,r.j.info("SVER="+r.Ca));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.J=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tF(s,s.h),s.h=null))}if(n.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.za=e,tg(n.F,n.D,e))}}if(r.G=3,r.l&&r.l.xa(),r.$&&(r.P=Date.now()-e.F,r.j.info("Handshake RTT: "+r.P+"ms")),(n=r).sa=rv(n,n.H?n.ka:null,n.V),e.J){tU(n.h,e);var o=n.J;o&&e.setTimeout(o),e.B&&(ts(e),tn(e)),n.g=e}else ru(n);0<r.i.length&&rs(r)}else"stop"!=a[0]&&"close"!=a[0]||rg(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?rg(r,7):rr(r):"noop"!=a[0]&&r.l&&r.l.wa(a),r.A=0)}}eq(4)}catch(e){}}function tu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(w(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(w(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(w(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(c=e3.prototype).setTimeout=function(e){this.O=e},c.ib=function(e){e=e.target;let t=this.L;t&&3==t6(e)?t.l():this.La(e)},c.La=function(e){try{if(e==this.g)e:{let c=t6(this.g);var t=this.g.Ea();let h=this.g.aa();if(!(3>c)&&(3!=c||z||this.g&&(this.h.h||this.g.fa()||t8(this.g)))){this.I||4!=c||7==t||(8==t||0>=h?eq(3):eq(2)),ts(this);var r=this.g.aa();this.Y=r;t:if(tt(this)){var n=t8(this.g);e="";var i=n.length,s=4==t6(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ta(this),to(this);var o="";break t}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,c,r),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(a)){var u=a;break t}}u=null}if(r=u)eU(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tl(this,r);else{this.i=!1,this.o=3,eH(12),ta(this),to(this);break e}}this.P?(tr(this,c,o),z&&this.i&&3==c&&(eM(this.S,this.T,"tick",this.hb),this.T.start())):(eU(this.j,this.m,o,null),tl(this,o)),4==c&&ta(this),this.i&&!this.I&&(4==c?rp(this.l,this):(this.i=!1,tn(this)))}else 400==r&&0<o.indexOf("Unknown SID")?(this.o=3,eH(12)):(this.o=0,eH(13)),ta(this),to(this)}}}catch(e){}finally{}},c.hb=function(){if(this.g){var e=t6(this.g),t=this.g.fa();this.C<t.length&&(ts(this),tr(this,e,t),this.i&&4!=e&&tn(this))}},c.cancel=function(){this.I=!0,ta(this)},c.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(eq(),eH(17)),ta(this),this.o=2,to(this)):ti(this,this.V-e)};var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function th(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof th){this.h=void 0!==t?t:e.h,tf(this,e.j),this.s=e.s,this.g=e.g,tp(this,e.m),this.l=e.l,t=e.i;var r=new tk;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tm(this,r),this.o=e.o}else e&&(r=String(e).match(tc))?(this.h=!!t,tf(this,r[1]||"",!0),this.s=tv(r[2]||""),this.g=tv(r[3]||"",!0),tp(this,r[4]),this.l=tv(r[5]||"",!0),tm(this,r[6]||"",!0),this.o=tv(r[7]||"")):(this.h=!!t,this.i=new tk(null,this.h))}function td(e){return new th(e)}function tf(e,t,r){e.j=r?tv(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tp(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tm(e,t,r){var n,i;t instanceof tk?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tC(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tA(this,t),tx(this,r,e))},n)),n.j=i):(r||(t=tb(t,tS)),e.i=new tk(t,e.h))}function tg(e,t,r){e.i.set(t,r)}function ty(e){return tg(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tv(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tb(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,tw),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tw(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}th.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tb(t,t_,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tb(t,t_,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(tb(r,"/"==r.charAt(0)?tI:tE,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",tb(r,tT)),e.join("")};var t_=/[#\/\?@]/g,tE=/[#\?:]/g,tI=/[#\?]/g,tS=/[#\?@]/g,tT=/#/g;function tk(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tC(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tA(e,t){tC(e),t=tN(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tO(e,t){return tC(e),t=tN(e,t),e.g.has(t)}function tx(e,t,r){tA(e,t),0<r.length&&(e.i=null,e.g.set(tN(e,t),O(r)),e.h+=r.length)}function tN(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(c=tk.prototype).add=function(e,t){tC(this),this.i=null,e=tN(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},c.forEach=function(e,t){tC(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},c.oa=function(){tC(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},c.W=function(e){tC(this);let t=[];if("string"==typeof e)tO(this,e)&&(t=t.concat(this.g.get(tN(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},c.set=function(e,t){return tC(this),this.i=null,tO(this,e=tN(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.W(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")};var tR=class{constructor(e,t){this.h=e,this.g=t}};function tP(e){this.l=e||tD,e=v.PerformanceNavigationTiming?0<(e=v.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(v.g&&v.g.Ga&&v.g.Ga()&&v.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tD=10;function tL(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tM(e){return e.h?1:e.g?e.g.size:0}function tj(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tF(e,t){e.g?e.g.add(t):e.h=t}function tU(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tV(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return O(e.i)}function t$(){}function tz(){this.g=new t$}function tB(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function tq(e){this.l=e.ac||null,this.j=e.jb||!1}function tK(e,t){ew.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=tH,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tP.prototype.cancel=function(){if(this.i=tV(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},t$.prototype.stringify=function(e){return v.JSON.stringify(e,void 0)},t$.prototype.parse=function(e){return v.JSON.parse(e,void 0)},k(tq,eQ),tq.prototype.g=function(){return new tK(this.l,this.j)},tq.prototype.i=(n={},function(){return n}),k(tK,ew);var tH=0;function tW(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function tZ(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tG(e)}function tG(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(c=tK.prototype).open=function(e,t){if(this.readyState!=tH)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tG(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||v).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tZ(this)),this.readyState=tH},c.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tG(this)),this.g&&(this.readyState=3,tG(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==v.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tW(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},c.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tZ(this):tG(this),3==this.readyState&&tW(this)}},c.Va=function(e){this.g&&(this.response=this.responseText=e,tZ(this))},c.Ua=function(e){this.g&&(this.response=e,tZ(this))},c.ga=function(){this.g&&tZ(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tK.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tX=v.JSON.parse;function tQ(e){ew.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tJ,this.K=this.L=!1}k(tQ,ew);var tJ="",tY=/^https?$/i,t0=["POST","PUT"];function t1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t2(e),t3(e)}function t2(e){e.D||(e.D=!0,e_(e,"complete"),e_(e,"error"))}function t5(e){if(e.h&&void 0!==y&&(!e.C[1]||4!=t6(e)||2!=e.aa())){if(e.v&&4==t6(e))eR(e.Ha,0,e);else if(e_(e,"readystatechange"),4==t6(e)){e.h=!1;try{let a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break e;default:n=!1}if(!(t=n)){if(r=0===a){var i=String(e.H).match(tc)[1]||null;if(!i&&v.self&&v.self.location){var s=v.self.location.protocol;i=s.substr(0,s.length-1)}r=!tY.test(i?i.toLowerCase():"")}t=r}if(t)e_(e,"complete"),e_(e,"success");else{e.m=6;try{var o=2<t6(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",t2(e)}}finally{t3(e)}}}}function t3(e,t){if(e.g){t4(e);let r=e.g,n=e.C[0]?b:null;e.g=null,e.C=null,t||e_(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function t4(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}function t6(e){return e.g?e.g.readyState:0}function t8(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case tJ:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t9(e){let t="";return ei(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function t7(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=t9(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tg(e,t,r))}function re(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function rt(e){this.Ca=0,this.i=[],this.j=new eF,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=re("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=re("baseRetryDelayMs",5e3,e),this.bb=re("retryDelaySeedMs",1e4,e),this.$a=re("forwardChannelMaxRetries",2,e),this.ta=re("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tP(e&&e.concurrentRequestLimit),this.Fa=new tz,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function rr(e){if(ri(e),3==e.G){var t=e.U++,r=td(e.F);tg(r,"SID",e.I),tg(r,"RID",t),tg(r,"TYPE","terminate"),ra(e,r),(t=new e3(e,e.j,t,void 0)).K=2,t.v=ty(td(r)),r=!1,v.navigator&&v.navigator.sendBeacon&&(r=v.navigator.sendBeacon(t.v.toString(),"")),!r&&v.Image&&((new Image).src=t.v,r=!0),r||(t.g=rb(t.l,null),t.g.da(t.v)),t.F=Date.now(),tn(t)}ry(e)}function rn(e){e.g&&(rh(e),e.g.cancel(),e.g=null)}function ri(e){rn(e),e.u&&(v.clearTimeout(e.u),e.u=null),rf(e),e.h.cancel(),e.m&&("number"==typeof e.m&&v.clearTimeout(e.m),e.m=null)}function rs(e){tL(e.h)||e.m||(e.m=!0,ek(e.Ja,e),e.C=0)}function ro(e,t){var r;r=t?t.m:e.U++;let n=td(e.F);tg(n,"SID",e.I),tg(n,"RID",r),tg(n,"AID",e.T),ra(e,n),e.o&&e.s&&t7(n,e.o,e.s),r=new e3(e,e.j,r,e.C+1),null===e.o&&(r.H=e.s),t&&(e.i=t.D.concat(e.i)),t=rl(e,r,1e3),r.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tF(e.h,r),e7(r,n,t)}function ra(e,t){e.ia&&ei(e.ia,function(e,r){tg(t,r,e)}),e.l&&tu({},function(e,r){tg(t,r,e)})}function rl(e,t,r){r=Math.min(e.i.length,r);var n=e.l?S(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].h,a=i[o].g;if(0>(r-=t))t=Math.max(0,i[o].h-100),s=!1;else try{!function(e,t,r){let n=r||"";try{tu(e,function(e,r){let i=e;_(e)&&(i=eI(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function ru(e){e.g||e.u||(e.Z=1,ek(e.Ia,e),e.A=0)}function rc(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=eZ(S(e.Ia,e),rm(e,e.A)),e.A++,!0)}function rh(e){null!=e.B&&(v.clearTimeout(e.B),e.B=null)}function rd(e){e.g=new e3(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=td(e.sa);tg(t,"RID","rpc"),tg(t,"SID",e.I),tg(t,"CI",e.L?"0":"1"),tg(t,"AID",e.T),tg(t,"TYPE","xmlhttp"),ra(e,t),e.o&&e.s&&t7(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var r=e.g;e=e.ka,r.K=1,r.v=ty(td(t)),r.s=null,r.P=!0,te(r,e)}function rf(e){null!=e.v&&(v.clearTimeout(e.v),e.v=null)}function rp(e,t){var r=null;if(e.g==t){rf(e),rh(e),e.g=null;var n=2}else{if(!tj(e.h,t))return;r=t.D,tU(e.h,t),n=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,o=e.C;e_(n=ez(),new eW(n,r)),rs(e)}else ru(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==n&&(i=e,s=t,!(tM(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Za?0:i.$a))&&(i.m=eZ(S(i.Ja,i,s),rm(i,i.C)),i.C++,!0)))||2==n&&rc(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),o){case 1:rg(e,5);break;case 4:rg(e,10);break;case 3:rg(e,6);break;default:rg(e,2)}}}function rm(e,t){let r=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(r*=2),r*t}function rg(e,t){if(e.j.info("Error code "+t),2==t){var r=null;e.l&&(r=null);var n=S(e.kb,e);r||(r=new th("//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||tf(r,"https"),ty(r)),function(e,t){let r=new eF;if(v.Image){let n=new Image;n.onload=T(tB,r,n,"TestLoadImage: loaded",!0,t),n.onerror=T(tB,r,n,"TestLoadImage: error",!1,t),n.onabort=T(tB,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=T(tB,r,n,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else eH(2);e.G=0,e.l&&e.l.va(t),ry(e),ri(e)}function ry(e){if(e.G=0,e.la=[],e.l){let t=tV(e.h);(0!=t.length||0!=e.i.length)&&(x(e.la,t),x(e.la,e.i),e.h.i.length=0,O(e.i),e.i.length=0),e.l.ua()}}function rv(e,t,r){var n=r instanceof th?td(r):new th(r,void 0);if(""!=n.g)t&&(n.g=t+"."+n.g),tp(n,n.m);else{var i=v.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new th(null,void 0);n&&tf(s,n),t&&(s.g=t),i&&tp(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.za,r&&t&&tg(n,r,t),tg(n,"VER",e.ma),ra(e,n),n}function rb(e,t,r){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tQ(r&&e.Da&&!e.ra?new tq({jb:!0}):e.ra)).Ka(e.H),t}function rw(){}function r_(){if(V&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function rE(e,t){ew.call(this),this.g=new rt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new rT(this)}function rI(e){e1.call(this);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function rS(){e2.call(this),this.status=1}function rT(e){this.g=e}(c=tQ.prototype).Ka=function(e){this.L=e},c.da=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eJ(this.u):eJ(a),this.g.onreadystatechange=S(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){t1(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)r.set(s,n[s]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[i,o]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=v.FormData&&e instanceof v.FormData,!(0<=A(t0,t))||n||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var o,l;t4(this),0<this.B&&((this.K=(o=this.g,V&&(l=X,Object.prototype.hasOwnProperty.call(l,9)?l[9]:l[9]=function(){let e=0,t=D(String(i)).split("."),r=D("9").split("."),n=Math.max(t.length,r.length);for(let i=0;0==e&&i<n;i++){var s=t[i]||"",o=r[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=L(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||L(0==s[2].length,0==o[2].length)||L(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof o.timeout&&void 0!==o.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=S(this.qa,this)):this.A=eR(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){t1(this,e)}},c.qa=function(){void 0!==y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,e_(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,e_(this,"complete"),e_(this,"abort"),t3(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t3(this,!0)),tQ.X.M.call(this)},c.Ha=function(){this.s||(this.F||this.v||this.l?t5(this):this.fb())},c.fb=function(){t5(this)},c.aa=function(){try{return 2<t6(this)?this.g.status:-1}catch(e){return -1}},c.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tX(t)}},c.Ea=function(){return this.m},c.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(c=rt.prototype).ma=8,c.G=1,c.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new e3(this,this.j,e,void 0),s=this.s;if(this.S&&(s?ea(s=es(s),this.S):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.g&&"string"==typeof(n=n.g.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=rl(this,i,t),tg(r=td(this.F),"RID",e),tg(r,"CVER",22),this.D&&tg(r,"X-HTTP-Session-Id",this.D),ra(this,r),s&&(this.N?t="headers="+encodeURIComponent(String(t9(s)))+"&"+t:this.o&&t7(r,this.o,s)),tF(this.h,i),this.Ya&&tg(r,"TYPE","init"),this.O?(tg(r,"$req",t),tg(r,"SID","null"),i.Z=!0,e7(i,r,null)):e7(i,r,t),this.G=2}}else 3==this.G&&(e?ro(this,e):0==this.i.length||tL(this.h)||ro(this))}},c.Ia=function(){if(this.u=null,rd(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=eZ(S(this.eb,this),e)}},c.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eH(10),rn(this),rd(this))},c.cb=function(){null!=this.v&&(this.v=null,rn(this),rc(this),eH(19))},c.kb=function(e){e?(this.j.info("Successfully pinged google.com"),eH(2)):(this.j.info("Failed to ping google.com"),eH(1))},(c=rw.prototype).xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Ra=function(){},r_.prototype.g=function(e,t){return new rE(e,t)},k(rE,ew),rE.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,r=this.h||void 0;eH(0),e.V=t,e.ia=r||{},e.L=e.Y,e.F=rv(e,null,e.V),rs(e)},rE.prototype.close=function(){rr(this.g)},rE.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=eI(e),e=r);t.i.push(new tR(t.ab++,e)),3==t.G&&rs(t)},rE.prototype.M=function(){this.g.l=null,delete this.j,rr(this.g),delete this.g,rE.X.M.call(this)},k(rI,e1),k(rS,e2),k(rT,rw),rT.prototype.xa=function(){e_(this.g,"a")},rT.prototype.wa=function(e){e_(this.g,new rI(e))},rT.prototype.va=function(e){e_(this.g,new rS)},rT.prototype.ua=function(){e_(this.g,"b")},r_.prototype.createWebChannel=r_.prototype.g,rE.prototype.send=rE.prototype.u,rE.prototype.open=rE.prototype.m,rE.prototype.close=rE.prototype.close,eG.NO_ERROR=0,eG.TIMEOUT=8,eG.HTTP_ERROR=6,eX.COMPLETE="complete",eY.EventType=e0,e0.OPEN="a",e0.CLOSE="b",e0.ERROR="c",e0.MESSAGE="d",ew.prototype.listen=ew.prototype.N,tQ.prototype.listenOnce=tQ.prototype.O,tQ.prototype.getLastError=tQ.prototype.Oa,tQ.prototype.getLastErrorCode=tQ.prototype.Ea,tQ.prototype.getStatus=tQ.prototype.aa,tQ.prototype.getResponseJson=tQ.prototype.Sa,tQ.prototype.getResponseText=tQ.prototype.fa,tQ.prototype.send=tQ.prototype.da,tQ.prototype.setWithCredentials=tQ.prototype.Ka;var rk=g.createWebChannelTransport=function(){return new r_},rC=g.getStatEventTarget=function(){return ez()},rA=g.ErrorCode=eG,rO=g.EventType=eX,rx=g.Event=eV,rN=g.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rR=g.FetchXmlHttpFactory=tq,rP=g.WebChannel=eY,rD=g.XhrIo=tQ;r(3454);let rL="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rM.UNAUTHENTICATED=new rM(null),rM.GOOGLE_CREDENTIALS=new rM("google-credentials-uid"),rM.FIRST_PARTY=new rM("first-party-uid"),rM.MOCK_USER=new rM("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rj="9.20.0",rF=new f.Yd("@firebase/firestore");function rU(){return rF.logLevel}function rV(e,...t){if(rF.logLevel<=f.in.DEBUG){let r=t.map(rB);rF.debug(`Firestore (${rj}): ${e}`,...r)}}function r$(e,...t){if(rF.logLevel<=f.in.ERROR){let r=t.map(rB);rF.error(`Firestore (${rj}): ${e}`,...r)}}function rz(e,...t){if(rF.logLevel<=f.in.WARN){let r=t.map(rB);rF.warn(`Firestore (${rj}): ${e}`,...r)}}function rB(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rq(e="Unexpected state"){let t=`FIRESTORE (${rj}) INTERNAL ASSERTION FAILED: `+e;throw r$(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rK={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rH extends p.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rW{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rZ{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rG{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rM.UNAUTHENTICATED))}shutdown(){}}class rX{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rQ{constructor(e){this.t=e,this.currentUser=rM.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new rW;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rW,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{rV("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(rV("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rW)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(rV("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||rq(),new rZ(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||rq(),new rM(e)}}class rJ{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=rM.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class rY{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new rJ(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(rM.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class r0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class r1{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let r=e=>{null!=e.error&&rV("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.T;return this.T=e.token,rV("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{rV("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?n(e):rV("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||rq(),this.T=e.token,new r0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function r5(e,t){return e<t?-1:e>t?1:0}function r3(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new rH(rK.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new rH(rK.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return r4.fromMillis(Date.now())}static fromDate(e){return r4.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new r4(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?r5(this.nanoseconds,e.nanoseconds):r5(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.timestamp=e}static fromTimestamp(e){return new r6(e)}static min(){return new r6(new r4(0,0))}static max(){return new r6(new r4(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,t,r){void 0===t?t=0:t>e.length&&rq(),void 0===r?r=e.length-t:r>e.length-t&&rq(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===r8.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof r8?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class r9 extends r8{construct(e,t,r){return new r9(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new rH(rK.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new r9(t)}static emptyPath(){return new r9([])}}let r7=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends r8{construct(e,t,r){return new ne(e,t,r)}static isValidIdentifier(e){return r7.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ne(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new rH(rK.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new rH(rK.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new rH(rK.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(s=!s,n++):"."!==t||s?(r+=t,n++):(i(),n++)}if(i(),s)throw new rH(rK.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ne(t)}static emptyPath(){return new ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.path=e}static fromPath(e){return new nt(r9.fromString(e))}static fromName(e){return new nt(r9.fromString(e).popFirst(5))}static empty(){return new nt(r9.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===r9.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return r9.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nt(new r9(e.slice()))}}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(r6.min(),nt.empty(),-1)}static max(){return new nr(r6.max(),nt.empty(),-1)}}class nn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(e){if(e.code!==rK.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;rV("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&rq(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ns((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ns?t:ns.resolve(t)}catch(e){return ns.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ns.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ns.reject(t)}static resolve(e){return new ns((t,r)=>{t(e)})}static reject(e){return new ns((t,r)=>{r(e)})}static waitFor(e){return new ns((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=ns.resolve(!1);for(let r of e)t=t.next(e=>e?ns.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new ns((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new ns((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function no(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function nl(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function nc(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function nh(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}na.ct=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.comparator=e,this.root=t||np.EMPTY}insert(e,t){return new nd(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,np.BLACK,null,null))}remove(e){return new nd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,np.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nf(this.root,e,this.comparator,!1)}getReverseIterator(){return new nf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nf(this.root,e,this.comparator,!0)}}class nf{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class np{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:np.RED,this.left=null!=n?n:np.EMPTY,this.right=null!=i?i:np.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new np(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return np.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return np.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,np.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,np.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw rq();let e=this.left.check();if(e!==this.right.check())throw rq();return e+(this.isRed()?0:1)}}np.EMPTY=null,np.RED=!0,np.BLACK=!1,np.EMPTY=new class{constructor(){this.size=0}get key(){throw rq()}get value(){throw rq()}get color(){throw rq()}get left(){throw rq()}get right(){throw rq()}copy(e,t,r,n,i){return this}insert(e,t,r){return new np(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.comparator=e,this.data=new nd(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof nm)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new nm(this.comparator);return t.data=e,t}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.fields=e,e.sort(ne.comparator)}static empty(){return new ny([])}unionWith(e){let t=new nm(ne.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new ny(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return r3(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new nv("Invalid base64 string: "+e):e}}(e);return new nb(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new nb(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return r5(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nb.EMPTY_BYTE_STRING=new nb("");let nw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function n_(e){if(e||rq(),"string"==typeof e){let t=0,r=nw.exec(e);if(r||rq(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nE(e.seconds),nanos:nE(e.nanos)}}function nE(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nI(e){return"string"==typeof e?nb.fromBase64String(e):nb.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function nT(e){let t=n_(e.mapValue.fields.__local_write_time__.timestampValue);return new r4(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t,r,n,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class nC{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nC("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nC&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nA={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nO(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nS(e)?4:n$(e)?9007199254740991:10:rq()}function nx(e,t){if(e===t)return!0;let r=nO(e);if(r!==nO(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nT(e).isEqual(nT(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=n_(e.timestampValue),n=n_(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return nI(e.bytesValue).isEqual(nI(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return nE(e.geoPointValue.latitude)===nE(t.geoPointValue.latitude)&&nE(e.geoPointValue.longitude)===nE(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nE(e.integerValue)===nE(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=nE(e.doubleValue),n=nE(t.doubleValue);return r===n?nl(r)===nl(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return r3(e.arrayValue.values||[],t.arrayValue.values||[],nx);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(nu(r)!==nu(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!nx(r[e],n[e])))return!1;return!0}(e,t);default:return rq()}}function nN(e,t){return void 0!==(e.values||[]).find(e=>nx(e,t))}function nR(e,t){if(e===t)return 0;let r=nO(e),n=nO(t);if(r!==n)return r5(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return r5(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=nE(e.integerValue||e.doubleValue),n=nE(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return nP(e.timestampValue,t.timestampValue);case 4:return nP(nT(e),nT(t));case 5:return r5(e.stringValue,t.stringValue);case 6:return function(e,t){let r=nI(e),n=nI(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=r5(r[e],n[e]);if(0!==t)return t}return r5(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=r5(nE(e.latitude),nE(t.latitude));return 0!==r?r:r5(nE(e.longitude),nE(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=nR(r[e],n[e]);if(t)return t}return r5(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===nA.mapValue&&t===nA.mapValue)return 0;if(e===nA.mapValue)return 1;if(t===nA.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=r5(n[e],s[e]);if(0!==t)return t;let o=nR(r[n[e]],i[s[e]]);if(0!==o)return o}return r5(n.length,s.length)}(e.mapValue,t.mapValue);default:throw rq()}}function nP(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return r5(e,t);let r=n_(e),n=n_(t),i=r5(r.seconds,n.seconds);return 0!==i?i:r5(r.nanos,n.nanos)}function nD(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=n_(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nI(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,nt.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=nD(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${nD(e.fields[i])}`;return r+"}"}(e.mapValue):rq()}function nL(e){return!!e&&"integerValue"in e}function nM(e){return!!e&&"arrayValue"in e}function nj(e){return!!e&&"nullValue"in e}function nF(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function nU(e){return!!e&&"mapValue"in e}function nV(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return nc(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=nV(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=nV(e.arrayValue.values[r]);return t}return Object.assign({},e)}function n$(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e){this.value=e}static empty(){return new nz({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!nU(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nV(t)}setAll(e){let t=ne.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=nV(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());nU(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nx(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];nU(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(nc(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new nz(nV(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new nB(e,0,r6.min(),r6.min(),r6.min(),nz.empty(),0)}static newFoundDocument(e,t,r,n){return new nB(e,1,t,r6.min(),r,n,0)}static newNoDocument(e,t){return new nB(e,2,t,r6.min(),r6.min(),nz.empty(),0)}static newUnknownDocument(e,t){return new nB(e,3,t,r6.min(),r6.min(),nz.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(r6.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nz.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nz.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=r6.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof nB&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nB(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e,t){this.position=e,this.inclusive=t}}function nK(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?nt.comparator(nt.fromName(o.referenceValue),r.key):nR(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function nH(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!nx(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{}class nG extends nZ{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new nY(e,t,r):"array-contains"===t?new n5(e,r):"in"===t?new n3(e,r):"not-in"===t?new n4(e,r):"array-contains-any"===t?new n6(e,r):new nG(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new n0(e,r):new n1(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(nR(t,this.value)):null!==t&&nO(this.value)===nO(t)&&this.matchesComparison(nR(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return rq()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nX extends nZ{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new nX(e,t)}matches(e){return nQ(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function nQ(e){return"and"===e.op}function nJ(e){for(let t of e.filters)if(t instanceof nX)return!1;return!0}class nY extends nG{constructor(e,t,r){super(e,t,r),this.key=nt.fromName(r.referenceValue)}matches(e){let t=nt.comparator(e.key,this.key);return this.matchesComparison(t)}}class n0 extends nG{constructor(e,t){super(e,"in",t),this.keys=n2("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class n1 extends nG{constructor(e,t){super(e,"not-in",t),this.keys=n2("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function n2(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>nt.fromName(e.referenceValue))}class n5 extends nG{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return nM(t)&&nN(t.arrayValue,this.value)}}class n3 extends nG{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&nN(this.value.arrayValue,t)}}class n4 extends nG{constructor(e,t){super(e,"not-in",t)}matches(e){if(nN(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!nN(this.value.arrayValue,t)}}class n6 extends nG{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!nM(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>nN(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function n9(e,t=null,r=[],n=[],i=null,s=null,o=null){return new n8(e,t,r,n,i,s,o)}function n7(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof nG)return t.field.canonicalString()+t.op.toString()+nD(t.value);if(nJ(t)&&nQ(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>nD(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>nD(e)).join(",")),t.ft=e}return t.ft}function ie(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof nG?r instanceof nG&&t.op===r.op&&t.field.isEqual(r.field)&&nx(t.value,r.value):t instanceof nX?r instanceof nX&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void rq()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!nH(e.startAt,t.startAt)&&nH(e.endAt,t.endAt)}function it(e){return nt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ii(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function is(e){let t=e;if(null===t.dt){t.dt=[];let e=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(t),r=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===r)e.isKeyField()||t.dt.push(new nW(e)),t.dt.push(new nW(ne.keyField(),"asc"));else{let e=!1;for(let r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new nW(ne.keyField(),e))}}}return t.dt}function io(e){let t=e;if(!t.wt){if("F"===t.limitType)t.wt=n9(t.path,t.collectionGroup,is(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let r of is(t)){let t="desc"===r.dir?"asc":"desc";e.push(new nW(r.field,t))}let r=t.endAt?new nq(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new nq(t.startAt.position,t.startAt.inclusive):null;t.wt=n9(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}return t.wt}function ia(e,t,r){return new ir(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function il(e,t){return ie(io(e),io(t))&&e.limitType===t.limitType}function iu(e){return`${n7(io(e))}|lt:${e.limitType}`}function ic(e){var t;let r;return`Query(target=${r=(t=io(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof nG?`${t.field.canonicalString()} ${t.op} ${nD(t.value)}`:t instanceof nX?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>nD(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>nD(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function ih(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):nt.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of is(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=nK(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,is(e),t))&&(!e.endAt||!!function(e,t,r){let n=nK(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,is(e),t))}function id(e){return(t,r)=>{let n=!1;for(let i of is(e)){let e=function(e,t,r){let n=e.field.isKeyField()?nt.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?nR(n,i):rq()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return rq()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){nc(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return nh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im=new nd(nt.comparator),ig=new nd(nt.comparator);function iy(...e){let t=ig;for(let r of e)t=t.insert(r.key,r);return t}function iv(e){let t=ig;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ib(){return new ip(e=>e.toString(),(e,t)=>e.isEqual(t))}let iw=new nd(nt.comparator),i_=new nm(nt.comparator);function iE(...e){let t=i_;for(let r of e)t=t.add(r);return t}let iI=new nm(r5);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nl(t)?"-0":t}}function iT(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this._=void 0}}function iC(e,t){return e instanceof iP?nL(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iA extends ik{}class iO extends ik{constructor(e){super(),this.elements=e}}function ix(e,t){let r=iL(t);for(let t of e.elements)r.some(e=>nx(e,t))||r.push(t);return{arrayValue:{values:r}}}class iN extends ik{constructor(e){super(),this.elements=e}}function iR(e,t){let r=iL(t);for(let t of e.elements)r=r.filter(e=>!nx(e,t));return{arrayValue:{values:r}}}class iP extends ik{constructor(e,t){super(),this.serializer=e,this._t=t}}function iD(e){return nE(e.integerValue||e.doubleValue)}function iL(e){return nM(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class iM{constructor(e,t){this.version=e,this.transformResults=t}}class ij{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ij}static exists(e){return new ij(void 0,e)}static updateTime(e){return new ij(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iF(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class iU{}function iV(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new iZ(e.key,ij.none()):new iB(e.key,e.data,ij.none());{let r=e.data,n=nz.empty(),i=new nm(ne.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new iq(e.key,n,new ny(i.toArray()),ij.none())}}function i$(e,t,r,n){return e instanceof iB?function(e,t,r,n){if(!iF(e.precondition,t))return r;let i=e.value.clone(),s=iW(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof iq?function(e,t,r,n){if(!iF(e.precondition,t))return r;let i=iW(e.fieldTransforms,n,t),s=t.data;return(s.setAll(iK(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):iF(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function iz(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&r3(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof iO&&n instanceof iO||r instanceof iN&&n instanceof iN?r3(r.elements,n.elements,nx):r instanceof iP&&n instanceof iP?nx(r._t,n._t):r instanceof iA&&n instanceof iA)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class iB extends iU{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class iq extends iU{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iK(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function iH(e,t,r){var n;let i=new Map;e.length===r.length||rq();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof iO?ix(a,l):a instanceof iN?iR(a,l):n))}return i}function iW(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof iA?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof iO?ix(e,s):e instanceof iN?iR(e,s):function(e,t){let r=iC(e,t),n=iD(r)+iD(e._t);return nL(r)&&nL(e._t)?iT(n):iS(e.serializer,n)}(e,s))}return n}class iZ extends iU{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iG extends iU{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof iB?function(e,t,r){let n=e.value.clone(),i=iH(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof iq?function(e,t,r){if(!iF(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=iH(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(iK(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=i$(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=i$(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=ib();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields);o=t.has(n.key)?null:o;let a=iV(s,o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(r6.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iE())}isEqual(e){return this.batchId===e.batchId&&r3(this.mutations,e.mutations,(e,t)=>iz(e,t))&&r3(this.baseMutations,e.baseMutations,(e,t)=>iz(e,t))}}class iQ{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||rq();let n=iw,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new iQ(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(e){this.count=e}}function i0(e){if(void 0===e)return r$("GRPC error has no .code"),rK.UNKNOWN;switch(e){case l.OK:return rK.OK;case l.CANCELLED:return rK.CANCELLED;case l.UNKNOWN:return rK.UNKNOWN;case l.DEADLINE_EXCEEDED:return rK.DEADLINE_EXCEEDED;case l.RESOURCE_EXHAUSTED:return rK.RESOURCE_EXHAUSTED;case l.INTERNAL:return rK.INTERNAL;case l.UNAVAILABLE:return rK.UNAVAILABLE;case l.UNAUTHENTICATED:return rK.UNAUTHENTICATED;case l.INVALID_ARGUMENT:return rK.INVALID_ARGUMENT;case l.NOT_FOUND:return rK.NOT_FOUND;case l.ALREADY_EXISTS:return rK.ALREADY_EXISTS;case l.PERMISSION_DENIED:return rK.PERMISSION_DENIED;case l.FAILED_PRECONDITION:return rK.FAILED_PRECONDITION;case l.ABORTED:return rK.ABORTED;case l.OUT_OF_RANGE:return rK.OUT_OF_RANGE;case l.UNIMPLEMENTED:return rK.UNIMPLEMENTED;case l.DATA_LOSS:return rK.DATA_LOSS;default:return rq()}}(u=l||(l={}))[u.OK=0]="OK",u[u.CANCELLED=1]="CANCELLED",u[u.UNKNOWN=2]="UNKNOWN",u[u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u[u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u[u.NOT_FOUND=5]="NOT_FOUND",u[u.ALREADY_EXISTS=6]="ALREADY_EXISTS",u[u.PERMISSION_DENIED=7]="PERMISSION_DENIED",u[u.UNAUTHENTICATED=16]="UNAUTHENTICATED",u[u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u[u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u[u.ABORTED=10]="ABORTED",u[u.OUT_OF_RANGE=11]="OUT_OF_RANGE",u[u.UNIMPLEMENTED=12]="UNIMPLEMENTED",u[u.INTERNAL=13]="INTERNAL",u[u.UNAVAILABLE=14]="UNAVAILABLE",u[u.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return i2}static getOrCreateInstance(){return null===i2&&(i2=new i1),i2}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let i2=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,i3.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new i5(r6.min(),n,iI,im,iE())}}class i3{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new i3(r,t,iE(),iE(),iE())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,t,r,n){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=n}}class i6{constructor(e,t){this.targetId=e,this.Et=t}}class i8{constructor(e,t,r=nb.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class i9{constructor(){this.At=0,this.Rt=st(),this.vt=nb.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=iE(),t=iE(),r=iE();return this.Rt.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:rq()}}),new i3(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=st()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class i7{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=im,this.qt=se(),this.Ut=new nm(r5)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{let r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:rq()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,r)=>{this.Wt(r)&&t(r)})}Jt(e){var t;let r=e.targetId,n=e.Et.count,i=this.Yt(r);if(i){let s=i.target;if(it(s)){if(0===n){let e=new nt(s.path);this.Qt(r,e,nB.newNoDocument(e,r6.min()))}else 1===n||rq()}else{let i=this.Zt(r);i!==n&&(this.Ht(r),this.Ut=this.Ut.add(r),null===(t=i1.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){let t=new Map;this.Bt.forEach((r,n)=>{let i=this.Yt(n);if(i){if(r.current&&it(i.target)){let t=new nt(i.target.path);null!==this.Lt.get(t)||this.te(n,t)||this.Qt(n,t,nB.newNoDocument(t,e))}r.St&&(t.set(n,r.Ct()),r.xt())}});let r=iE();this.qt.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Lt.forEach((t,r)=>r.setReadTime(e));let n=new i5(e,t,this.Ut,this.Lt,r);return this.Lt=im,this.qt=se(),this.Ut=new nm(r5),n}Gt(e,t){if(!this.Wt(e))return;let r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;let n=this.jt(e);this.te(e,t)?n.Nt(t,1):n.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){let t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new i9,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new nm(r5),this.qt=this.qt.insert(e,t)),t}Wt(e){let t=null!==this.Yt(e);return t||rV("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new i9),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function se(){return new nd(nt.comparator)}function st(){return new nd(nt.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr={asc:"ASCENDING",desc:"DESCENDING"},sn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},si={and:"AND",or:"OR"};class ss{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function so(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sl(e){return e||rq(),r6.fromTimestamp(function(e){let t=n_(e);return new r4(t.seconds,t.nanos)}(e))}function su(e,t){return new r9(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sc(e){let t=r9.fromString(e);return sb(t)||rq(),t}function sh(e,t){return su(e.databaseId,t.path)}function sd(e,t){let r=sc(t);if(r.get(1)!==e.databaseId.projectId)throw new rH(rK.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new rH(rK.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new nt(sm(r))}function sf(e,t){return su(e.databaseId,t)}function sp(e){return new r9(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sm(e){return e.length>4&&"documents"===e.get(4)||rq(),e.popFirst(5)}function sg(e,t,r){return{name:sh(e,t),fields:r.value.mapValue.fields}}function sy(e){return{fieldPath:e.canonicalString()}}function sv(e){return ne.fromServerFormat(e.fieldPath)}function sb(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,r,n,i=r6.min(),s=r6.min(),o=nb.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new sw(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new sw(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.se=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(nE(e.integerValue));else if("doubleValue"in e){let r=nE(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),nl(r)?t.he(0):t.he(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ae(t,20),"string"==typeof r?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(nI(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?n$(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):rq()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){let r=e.fields||{};for(let e of(this.ae(t,55),Object.keys(r)))this.fe(e,t),this.ue(r[e],t)}ge(e,t){let r=e.values||[];for(let e of(this.ae(t,50),r))this.ue(e,t)}_e(e,t){this.ae(t,37),nt.fromName(e).path.forEach(e=>{this.ae(t,60),this.ye(e,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}sE.pe=new sE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.He=new sS}addToCollectionParentIndex(e,t){return this.He.add(t),ns.resolve()}getCollectionParents(e,t){return ns.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return ns.resolve()}deleteFieldIndex(e,t){return ns.resolve()}getDocumentsMatchingTarget(e,t){return ns.resolve(null)}getIndexType(e,t){return ns.resolve(0)}getFieldIndexes(e,t){return ns.resolve([])}getNextCollectionGroupToUpdate(e){return ns.resolve(null)}getMinOffset(e,t){return ns.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return ns.resolve(nr.min())}updateCollectionGroup(e,t,r){return ns.resolve()}updateIndexEntries(e,t){return ns.resolve()}}class sS{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new nm(r9.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new nm(r9.comparator)).toArray()}}new Uint8Array(0);class sT{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new sT(e,sT.DEFAULT_COLLECTION_PERCENTILE,sT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sT.DEFAULT_COLLECTION_PERCENTILE=10,sT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sT.DEFAULT=new sT(41943040,sT.DEFAULT_COLLECTION_PERCENTILE,sT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sT.DISABLED=new sT(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new sk(0)}static bn(){return new sk(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.changes=new ip(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nB.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?ns.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&i$(r.mutation,e,ny.empty(),r4.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iE()).next(()=>t))}getLocalViewOfDocuments(e,t,r=iE()){let n=ib();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=iy();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=ib();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,iE()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=im,s=ib(),o=ib();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof iq)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),i$(o.mutation,t,o.mutation.getFieldMask(),r4.now())):s.set(t.key,ny.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new sA(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=ib(),n=new nd((e,t)=>e-t),i=iE();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||ny.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||iE()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,u=ib();l.forEach(e=>{if(!i.has(e)){let n=iV(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ns.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r){return nt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):ns.resolve(ib()),o=-1,a=i;return s.next(t=>ns.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?ns.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,iE())).next(e=>({batchId:o,changes:iv(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new nt(t)).next(e=>{let t=iy();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r){let n=t.collectionGroup,i=iy();return this.indexManager.getCollectionParents(e,n).next(s=>ns.forEach(s,s=>{var o;let a=(o=s.child(n),new ir(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,a,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(n=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,n))).next(e=>{n.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,nB.newInvalidDocument(n)))});let r=iy();return e.forEach((e,i)=>{let s=n.get(e);void 0!==s&&i$(s.mutation,i,ny.empty(),r4.now()),ih(t,i)&&(r=r.insert(e,i))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return ns.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:sl(t.createTime)}),ns.resolve()}getNamedQuery(e,t){return ns.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,i,s,o,a,l;let u,c=function(e){let t=sc(e);return 4===t.length?r9.emptyPath():sm(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||rq();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sv(e.unaryFilter.field);return nG.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=sv(e.unaryFilter.field);return nG.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=sv(e.unaryFilter.field);return nG.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sv(e.unaryFilter.field);return nG.create(i,"!=",{nullValue:"NULL_VALUE"});default:return rq()}}(t):void 0!==t.fieldFilter?nG.create(sv(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rq()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?nX.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return rq()}}(t.compositeFilter.op)):rq()}(e);return r instanceof nX&&nJ(t=r)&&nQ(t)?r.getFilters():[r]}(h.where));let m=[];h.orderBy&&(m=h.orderBy.map(e=>new nW(sv(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;h.limit&&(g=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new nq(r,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,r=e.values||[];return new nq(r,t)}(h.endAt)),r=c,n=f,i=m,s=p,o=g,a=y,l=v,new ir(r,n,i,s,o,"F",a,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ia(t,t.limit,"L"):t}(t.bundledQuery),readTime:sl(t.readTime)}),ns.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.overlays=new nd(nt.comparator),this.ts=new Map}getOverlay(e,t){return ns.resolve(this.overlays.get(t))}getOverlays(e,t){let r=ib();return ns.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.re(e,t,n)}),ns.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.ts.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.ts.delete(r)),ns.resolve()}getOverlaysForCollection(e,t,r){let n=ib(),i=t.length+1,s=new nt(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return ns.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new nd((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=ib(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=ib(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return ns.resolve(o)}re(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.ts.get(n.largestBatchId).delete(r.key);this.ts.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new iJ(t,r));let i=this.ts.get(t);void 0===i&&(i=iE(),this.ts.set(t,i)),this.ts.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.es=new nm(sP.ns),this.ss=new nm(sP.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){let r=new sP(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.us(new sP(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}hs(e){let t=new nt(new r9([])),r=new sP(t,e),n=new sP(t,e+1),i=[];return this.ss.forEachInRange([r,n],e=>{this.us(e),i.push(e.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){let t=new nt(new r9([])),r=new sP(t,e),n=new sP(t,e+1),i=iE();return this.ss.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sP(e,0),r=this.es.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class sP{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return nt.comparator(e.key,t.key)||r5(e.ds,t.ds)}static rs(e,t){return r5(e.ds,t.ds)||nt.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new nm(sP.ns)}checkEmpty(e){return ns.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new iX(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this._s=this._s.add(new sP(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ns.resolve(s)}lookupMutationBatch(e,t){return ns.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.ys(t+1),n=r<0?0:r;return ns.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return ns.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return ns.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new sP(t,0),n=new sP(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([r,n],e=>{let t=this.gs(e.ds);i.push(t)}),ns.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nm(r5);return t.forEach(e=>{let t=new sP(e,0),n=new sP(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,n],e=>{r=r.add(e.ds)})}),ns.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;nt.isDocumentKey(i)||(i=i.child(""));let s=new sP(new nt(i),0),o=new nm(r5);return this._s.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.ds)),!0)},s),ns.resolve(this.ps(o))}ps(e){let t=[];return e.forEach(e=>{let r=this.gs(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Is(t.batchId,"removed")||rq(),this.mutationQueue.shift();let r=this._s;return ns.forEach(t.mutations,n=>{let i=new sP(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){let r=new sP(t,0),n=this._s.firstAfterOrEqual(r);return ns.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,ns.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){let t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e){this.Ts=e,this.docs=new nd(nt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return ns.resolve(r?r.document.mutableCopy():nB.newInvalidDocument(t))}getEntries(e,t){let r=im;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():nB.newInvalidDocument(e))}),ns.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=im,s=t.path,o=new nt(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=nt.comparator(e.documentKey,t.documentKey))?r:r5(e.largestBatchId,t.largestBatchId)}(new nr(o.readTime,o.key,-1),r)||(n.has(o.key)||ih(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ns.resolve(i)}getAllFromCollectionGroup(e,t,r,n){rq()}Es(e,t){return ns.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sM(this)}getSize(e){return ns.resolve(this.size)}}class sM extends sC{constructor(e){super(),this.Jn=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Jn.addEntry(e,n)):this.Jn.removeEntry(r)}),ns.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e){this.persistence=e,this.As=new ip(e=>n7(e),ie),this.lastRemoteSnapshotVersion=r6.min(),this.highestTargetId=0,this.Rs=0,this.vs=new sR,this.targetCount=0,this.bs=sk.vn()}forEachTarget(e,t){return this.As.forEach((e,r)=>t(r)),ns.resolve()}getLastRemoteSnapshotVersion(e){return ns.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ns.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),ns.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),ns.resolve()}Sn(e){this.As.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.bs=new sk(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,ns.resolve()}updateTargetData(e,t){return this.Sn(t),ns.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,ns.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.As.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),ns.waitFor(i).next(()=>n)}getTargetCount(e){return ns.resolve(this.targetCount)}getTargetData(e,t){let r=this.As.get(t)||null;return ns.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),ns.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),ns.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),ns.resolve()}getMatchingKeysForTargetId(e,t){let r=this.vs.fs(t);return ns.resolve(r)}containsKey(e,t){return ns.resolve(this.vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,t){var r;this.Ps={},this.overlays={},this.Vs=new na(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new sj(this),this.indexManager=new sI,this.remoteDocumentCache=(r=e=>this.referenceDelegate.Cs(e),new sL(r)),this.serializer=new s_(t),this.xs=new sx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new sD(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){rV("MemoryPersistence","Starting transaction:",e);let n=new sU(this.Vs.next());return this.referenceDelegate.Ns(),r(n).next(e=>this.referenceDelegate.ks(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Os(e,t){return ns.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class sU extends nn{constructor(e){super(),this.currentSequenceNumber=e}}class sV{constructor(e){this.persistence=e,this.$s=new sR,this.Ms=null}static Fs(e){return new sV(e)}get Bs(){if(this.Ms)return this.Ms;throw rq()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),ns.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),ns.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),ns.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(e=>this.Bs.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Bs.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ns.forEach(this.Bs,r=>{let n=nt.fromPath(r);return this.Ls(e,n).next(e=>{e||t.removeEntry(n,r6.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return ns.or([()=>ns.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=n}static Di(e,t){let r=iE(),n=iE();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new s$(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,n){return this.Ni(e,t).next(i=>i||this.ki(e,t,n,r)).next(r=>r||this.Oi(e,t))}Ni(e,t){if(ii(t))return ns.resolve(null);let r=io(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=io(t=ia(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=iE(...n);return this.xi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.$i(t,n);return this.Mi(t,s,i,r.readTime)?this.Ni(e,ia(t,null,"F")):this.Fi(e,s,t,r)}))})))}ki(e,t,r,n){return ii(t)||n.isEqual(r6.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(i=>{let s=this.$i(t,i);return this.Mi(t,s,r,n)?this.Oi(e,t):(rU()<=f.in.DEBUG&&rV("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ic(t)),this.Fi(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=r6.fromTimestamp(1e9===n?new r4(r+1,0):new r4(r,n));return new nr(i,nt.empty(),-1)}(n,0)))})}$i(e,t){let r=new nm(id(e));return t.forEach((t,n)=>{ih(e,n)&&(r=r.add(n))}),r}Mi(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Oi(e,t){return rU()<=f.in.DEBUG&&rV("QueryEngine","Using full collection scan to execute query:",ic(t)),this.xi.getDocumentsMatchingQuery(e,t,nr.min())}Fi(e,t,r,n){return this.xi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t,r,n){this.persistence=e,this.Bi=t,this.serializer=n,this.Li=new nd(r5),this.qi=new ip(e=>n7(e),ie),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sO(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}async function sq(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Gi(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=iE();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({Qi:e,removedBatchIds:i,addedBatchIds:s}))})})}function sK(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}async function sH(e,t,r){let n=e,i=n.Li.get(t);try{r||await n.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",e=>n.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!no(e))throw e;rV("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}n.Li=n.Li.remove(t),n.qi.delete(i.target)}function sW(e,t,r){let n=r6.min(),i=iE();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,r){let n=e.qi.get(r);return void 0!==n?ns.resolve(e.Li.get(n)):e.Ds.getTargetData(t,r)})(e,s,io(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Ds.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Bi.getDocumentsMatchingQuery(s,t,r?n:r6.min(),r?i:iE())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ui.get(n)||r6.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ui.set(n,s),{documents:r,Wi:i}}))}class sZ{constructor(){this.activeTargetIds=iI}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sG{constructor(){this.Br=new sZ,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new sZ,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sX{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sQ{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){for(let e of(rV("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.zr))e(0)}Qr(){for(let e of(rV("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.zr))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sJ=null;function sY(){return null===sJ?sJ=268435456+Math.round(2147483648*Math.random()):sJ++,"0x"+sJ.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s2="WebChannelConnection";class s5 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,n,i){let s=sY(),o=this.ao(e,t);rV("RestConnection",`Sending RPC '${e}' ${s}:`,o,r);let a={};return this.ho(a,n,i),this.lo(e,o,a,r).then(t=>(rV("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw rz("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}fo(e,t,r,n,i,s){return this.co(e,t,r,n,i)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+rj,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}ao(e,t){let r=s0[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,n){let i=sY();return new Promise((s,o)=>{let a=new rD;a.setWithCredentials(!0),a.listenOnce(rO.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case rA.NO_ERROR:let t=a.getResponseJson();rV(s2,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case rA.TIMEOUT:rV(s2,`RPC '${e}' ${i} timed out`),o(new rH(rK.DEADLINE_EXCEEDED,"Request time out"));break;case rA.HTTP_ERROR:let r=a.getStatus();if(rV(s2,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(rK).indexOf(t)>=0?t:rK.UNKNOWN}(t.status);o(new rH(e,t.message))}else o(new rH(rK.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new rH(rK.UNAVAILABLE,"Connection failed."));break;default:rq()}}finally{rV(s2,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);rV(s2,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}wo(e,t,r){let n=sY(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=rk(),o=rC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rR({})),this.ho(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;let u=i.join("");rV(s2,`Creating RPC '${e}' stream ${n}: ${u}`,a);let c=s.createWebChannel(u,a),h=!1,d=!1,f=new s1({Wr:t=>{d?rV(s2,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(h||(rV(s2,`Opening RPC '${e}' stream ${n} transport.`),c.open(),h=!0),rV(s2,`RPC '${e}' stream ${n} sending:`,t),c.send(t))},Hr:()=>c.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,rP.EventType.OPEN,()=>{d||rV(s2,`RPC '${e}' stream ${n} transport opened.`)}),p(c,rP.EventType.CLOSE,()=>{d||(d=!0,rV(s2,`RPC '${e}' stream ${n} transport closed`),f.so())}),p(c,rP.EventType.ERROR,t=>{d||(d=!0,rz(s2,`RPC '${e}' stream ${n} transport errored:`,t),f.so(new rH(rK.UNAVAILABLE,"The operation could not be completed")))}),p(c,rP.EventType.MESSAGE,t=>{var r;if(!d){let i=t.data[0];i||rq();let s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){rV(s2,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=l[e];if(void 0!==t)return i0(t)}(t),i=s.message;void 0===r&&(r=rK.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,f.so(new rH(r,i)),c.close()}else rV(s2,`RPC '${e}' stream ${n} received:`,i),f.io(i)}}),p(o,rx.STAT_EVENT,t=>{t.stat===rN.PROXY?rV(s2,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===rN.NOPROXY&&rV(s2,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function s3(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(e){return new ss(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=n,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();let t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),n=Math.max(0,t-r);n>0&&rV("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,n,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e,t,r,n,i,s,o,a){this.Ws=e,this.bo=r,this.Po=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new s6(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===rK.RESOURCE_EXHAUSTED?(r$(t.toString()),r$("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===rK.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Vo===t&&this.Ko(e,r)},t=>{e(()=>{let e=new rH(rK.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)})})}Ko(e,t){let r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(e=>{r(()=>this.Go(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return rV("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(rV("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s9 extends s8{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:rq(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||rq(),nb.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||rq(),nb.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?rK.UNKNOWN:i0(e.code);return new rH(t,e.message||"")}(l);r=new i8(s,o,a,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=sd(e,n.document.name),s=sl(n.document.updateTime),o=n.document.createTime?sl(n.document.createTime):r6.min(),a=new nz({mapValue:{fields:n.document.fields}}),l=nB.newFoundDocument(i,s,o,a),u=n.targetIds||[],c=n.removedTargetIds||[];r=new i4(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=sd(e,n.document),s=n.readTime?sl(n.readTime):r6.min(),o=nB.newNoDocument(i,s),a=n.removedTargetIds||[];r=new i4([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=sd(e,n.document),s=n.removedTargetIds||[];r=new i4([],s,i,null)}else{if(!("filter"in t))return rq();{t.filter;let e=t.filter;e.targetId;let n=e.count||0,i=new iY(n),s=e.targetId;r=new i6(s,i)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return r6.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?r6.min():t.readTime?sl(t.readTime):r6.min()}(e);return this.listener.zo(t,r)}jo(e){let t={};t.database=sp(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;return(r=it(n)?{documents:{documents:[sf(e,n.path)]}}:{query:function(e,t){var r,n,i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(s.parent=sf(e,o),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=sf(e,o.popLast()),s.structuredQuery.from=[{collectionId:o.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof nG?function(e){if("=="===e.op){if(nF(e.value))return{unaryFilter:{field:sy(e.field),op:"IS_NAN"}};if(nj(e.value))return{unaryFilter:{field:sy(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(nF(e.value))return{unaryFilter:{field:sy(e.field),op:"IS_NOT_NAN"}};if(nj(e.value))return{unaryFilter:{field:sy(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sy(e.field),op:sn[e.op],value:e.value}}}(t):t instanceof nX?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:si[t.op],filters:r}}}(t):rq()}(nX.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:sy(e.field),direction:sr[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=(n=t.limit,e.useProto3Json||null==n?n:{value:n});return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?r.resumeToken=sa(e,t.resumeToken):t.snapshotVersion.compareTo(r6.min())>0&&(r.readTime=so(e,t.snapshotVersion.toTimestamp())),r}(this.serializer,e);let r=function(e,t){let r=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return rq()}}(0,t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){let t={};t.database=sp(this.serializer),t.removeTarget=e,this.Fo(t)}}class s7 extends s8{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,r;if(e.streamToken||rq(),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||rq(),t.map(e=>{let t;return(t=e.updateTime?sl(e.updateTime):sl(r)).isEqual(r6.min())&&(t=sl(r)),new iM(t,e.transformResults||[])})):[]),i=sl(e.commitTime);return this.listener.Zo(i,n)}return e.writeResults&&0!==e.writeResults.length&&rq(),this.Ho=!0,this.listener.Xo()}tu(){let e={};e.database=sp(this.serializer),this.Fo(e)}Yo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof iB)n={update:sg(e,t.key,t.value)};else if(t instanceof iZ)n={delete:sh(e,t.key)};else if(t instanceof iq)n={update:sg(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iG))return rq();n={verify:sh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof iA)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof iO)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof iN)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof iP)return{fieldPath:t.field.canonicalString(),increment:r._t};throw rq()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:so(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:rq()),n})(this.serializer,e))};this.Fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.eu=!1}nu(){if(this.eu)throw new rH(rK.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.co(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rK.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rH(rK.UNKNOWN,e.toString())})}fo(e,t,r,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rK.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rH(rK.UNKNOWN,e.toString())})}terminate(){this.eu=!0}}class ot{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(r$(t),this.ru=!1):rV("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(e=>{r.enqueueAndForget(async()=>{oh(this)&&(rV("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.du.add(4),await oi(e),e.mu.set("Unknown"),e.du.delete(4),await on(e)}(this))})}),this.mu=new ot(r,n)}}async function on(e){if(oh(e))for(let t of e.wu)await t(!0)}async function oi(e){for(let t of e.wu)await t(!1)}function os(e,t){e.fu.has(t.targetId)||(e.fu.set(t.targetId,t),oc(e)?ou(e):ok(e).No()&&oa(e,t))}function oo(e,t){let r=ok(e);e.fu.delete(t),r.No()&&ol(e,t),0===e.fu.size&&(r.No()?r.$o():oh(e)&&e.mu.set("Unknown"))}function oa(e,t){e.gu.Ot(t.targetId),ok(e).jo(t)}function ol(e,t){e.gu.Ot(t),ok(e).Wo(t)}function ou(e){e.gu=new i7({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),ok(e).start(),e.mu.ou()}function oc(e){return oh(e)&&!ok(e).xo()&&e.fu.size>0}function oh(e){return 0===e.du.size}async function od(e){e.fu.forEach((t,r)=>{oa(e,t)})}async function of(e,t){e.gu=void 0,oc(e)?(e.mu.au(t),ou(e)):e.mu.set("Unknown")}async function op(e,t,r){if(e.mu.set("Online"),t instanceof i8&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.fu.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.fu.delete(n),e.gu.removeTarget(n))}(e,t)}catch(r){rV("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await om(e,r)}else if(t instanceof i4?e.gu.Kt(t):t instanceof i6?e.gu.Jt(t):e.gu.zt(t),!r.isEqual(r6.min()))try{let t=await sK(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.gu.Xt(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.fu.get(n);i&&e.fu.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach(t=>{let r=e.fu.get(t);if(!r)return;e.fu.set(t,r.withResumeToken(nb.EMPTY_BYTE_STRING,r.snapshotVersion)),ol(e,t);let n=new sw(r.target,t,1,r.sequenceNumber);oa(e,n)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){rV("RemoteStore","Failed to raise snapshot:",t),await om(e,t)}}async function om(e,t,r){if(!no(t))throw t;e.du.add(1),await oi(e),e.mu.set("Offline"),r||(r=()=>sK(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{rV("RemoteStore","Retrying IndexedDB access"),await r(),e.du.delete(1),await on(e)})}function og(e,t){return t().catch(r=>om(e,r,t))}async function oy(e){let t=oC(e),r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;oh(e)&&e.lu.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.lu.length&&t.$o();break}r=n.batchId,function(e,t){e.lu.push(t);let r=oC(e);r.No()&&r.Jo&&r.Yo(t.mutations)}(e,n)}catch(t){await om(e,t)}ov(e)&&ob(e)}function ov(e){return oh(e)&&!oC(e).xo()&&e.lu.length>0}function ob(e){oC(e).start()}async function ow(e){oC(e).tu()}async function o_(e){let t=oC(e);for(let r of e.lu)t.Yo(r.mutations)}async function oE(e,t,r){let n=e.lu.shift(),i=iQ.from(n,t,r);await og(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await oy(e)}async function oI(e,t){t&&oC(e).Jo&&await async function(e,t){var r;if(function(e){switch(e){default:return rq();case rK.CANCELLED:case rK.UNKNOWN:case rK.DEADLINE_EXCEEDED:case rK.RESOURCE_EXHAUSTED:case rK.INTERNAL:case rK.UNAVAILABLE:case rK.UNAUTHENTICATED:return!1;case rK.INVALID_ARGUMENT:case rK.NOT_FOUND:case rK.ALREADY_EXISTS:case rK.PERMISSION_DENIED:case rK.FAILED_PRECONDITION:case rK.ABORTED:case rK.OUT_OF_RANGE:case rK.UNIMPLEMENTED:case rK.DATA_LOSS:return!0}}(r=t.code)&&r!==rK.ABORTED){let r=e.lu.shift();oC(e).Oo(),await og(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await oy(e)}}(e,t),ov(e)&&ob(e)}async function oS(e,t){e.asyncQueue.verifyOperationInProgress(),rV("RemoteStore","RemoteStore received new credentials");let r=oh(e);e.du.add(3),await oi(e),r&&e.mu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.du.delete(3),await on(e)}async function oT(e,t){t?(e.du.delete(2),await on(e)):t||(e.du.add(2),await oi(e),e.mu.set("Unknown"))}function ok(e){var t,r,n;return e.yu||(e.yu=(t=e.datastore,r=e.asyncQueue,n={Jr:od.bind(null,e),Zr:of.bind(null,e),zo:op.bind(null,e)},t.nu(),new s9(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.wu.push(async t=>{t?(e.yu.Oo(),oc(e)?ou(e):e.mu.set("Unknown")):(await e.yu.stop(),e.gu=void 0)})),e.yu}function oC(e){var t,r,n;return e.pu||(e.pu=(t=e.datastore,r=e.asyncQueue,n={Jr:ow.bind(null,e),Zr:oI.bind(null,e),Xo:o_.bind(null,e),Zo:oE.bind(null,e)},t.nu(),new s7(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.wu.push(async t=>{t?(e.pu.Oo(),await oy(e)):(await e.pu.stop(),e.lu.length>0&&(rV("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new rW,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,o=new oA(e,t,s,n,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rH(rK.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oO(e,t){if(r$("AsyncQueue",`${t}: ${e}`),no(e))return new rH(rK.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.comparator=e?(t,r)=>e(t,r)||nt.comparator(t.key,r.key):(e,t)=>nt.comparator(e.key,t.key),this.keyedMap=iy(),this.sortedSet=new nd(this.comparator)}static emptySet(e){return new ox(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ox)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new ox;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.Iu=new nd(nt.comparator)}track(e){let t=e.doc.key,r=this.Iu.get(t);r?0!==e.type&&3===r.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==r.type?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Iu=this.Iu.remove(t):1===e.type&&2===r.type?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):rq():this.Iu=this.Iu.insert(t,e)}Tu(){let e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class oR{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new oR(e,t,ox.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.Eu=void 0,this.listeners=[]}}class oD{constructor(){this.queries=new ip(e=>iu(e),il),this.onlineState="Unknown",this.Au=new Set}}async function oL(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new oP),n)try{i.Eu=await e.onListen(r)}catch(r){let e=oO(r,`Initialization of query '${ic(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.Ru(e.onlineState),i.Eu&&t.vu(i.Eu)&&oU(e)}async function oM(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function oj(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.vu(n)&&(r=!0);i.Eu=n}}r&&oU(e)}function oF(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function oU(e){e.Au.forEach(e=>{e.next()})}class oV{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new oR(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){return!e.fromCache||(!this.options.xu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;let t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=oR.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(e){this.key=e}}class oz{constructor(e){this.key=e}}class oB{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=iE(),this.mutatedKeys=iE(),this.Ku=id(e),this.Gu=new ox(this.Ku)}get Qu(){return this.Lu}zu(e,t){let r=t?t.ju:new oN,n=t?t.Gu:this.Gu,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=ih(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(r.track({type:3,doc:c}),f=!0):this.Wu(u,c)||(r.track({type:2,doc:c}),f=!0,(a&&this.Ku(c,a)>0||l&&0>this.Ku(c,l))&&(o=!0)):!u&&c?(r.track({type:0,doc:c}),f=!0):u&&!c&&(r.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{Gu:s,ju:r,Mi:o,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;let i=e.ju.Tu();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rq()}};return r(e)-r(t)})(e.type,t.type)||this.Ku(e.doc,t.doc)),this.Hu(r);let s=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return(this.qu=o,0!==i.length||a)?{snapshot:new oR(this.query,e.Gu,n,i,e.mutatedKeys,0===o,a,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new oN,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(e=>this.Lu=this.Lu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Lu=this.Lu.delete(e)),this.current=e.current)}Ju(){if(!this.current)return[];let e=this.Uu;this.Uu=iE(),this.Gu.forEach(e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))});let t=[];return e.forEach(e=>{this.Uu.has(e)||t.push(new oz(e))}),this.Uu.forEach(r=>{e.has(r)||t.push(new o$(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=iE();let t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return oR.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class oq{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oK{constructor(e){this.key=e,this.ec=!1}}class oH{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new ip(e=>iu(e),il),this.ic=new Map,this.rc=new Set,this.oc=new nd(nt.comparator),this.uc=new Map,this.cc=new sR,this.ac={},this.hc=new Map,this.lc=sk.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function oW(e,t){let r,n;let i=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=oQ.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ae.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oY.bind(null,t),t.nc.zo=oj.bind(null,t.eventManager),t.nc.wc=oF.bind(null,t.eventManager),t}(e),s=i.sc.get(t);if(s)r=s.targetId,i.sharedClientState.addLocalQueryTarget(r),n=s.view.tc();else{let e=await function(e,t){let r=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.Ds.getTargetData(e,t).next(i=>i?(n=i,ns.resolve(n)):r.Ds.allocateTargetId(e).next(i=>(n=new sw(t,i,0,e.currentSequenceNumber),r.Ds.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Li.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Li=r.Li.insert(e.targetId,e),r.qi.set(t,e.targetId)),e})}(i.localStore,io(t));i.isPrimaryClient&&os(i.remoteStore,e);let s=i.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,n=await oZ(i,t,r,"current"===s,e.resumeToken)}return n}async function oZ(e,t,r,n,i){e.dc=(t,r,n)=>(async function(e,t,r,n){let i=t.view.zu(r);i.Mi&&(i=await sW(e.localStore,t.query,!1).then(({documents:e})=>t.view.zu(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return o6(e,t.targetId,o.Yu),o.snapshot})(e,t,r,n);let s=await sW(e.localStore,t,!0),o=new oB(t,s.Wi),a=o.zu(s.documents),l=i3.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);o6(e,r,u.Yu);let c=new oq(t,r,o);return e.sc.set(t,c),e.ic.has(r)?e.ic.get(r).push(t):e.ic.set(r,[t]),u.snapshot}async function oG(e,t){let r=e.sc.get(t),n=e.ic.get(r.targetId);if(n.length>1)return e.ic.set(r.targetId,n.filter(e=>!il(e,t))),void e.sc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await sH(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),oo(e.remoteStore,r.targetId),o3(e,r.targetId)}).catch(ni)):(o3(e,r.targetId),await sH(e.localStore,r.targetId,!0))}async function oX(e,t,r){let n=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=o0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=o1.bind(null,t),t}(e);try{var i,s;let e;let o=await function(e,t){let r,n;let i=r4.now(),s=t.reduce((e,t)=>e.add(t.key),iE());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=im,l=iE();return e.Ki.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=iC(n.transform,e||null);null!=i&&(null===r&&(r=nz.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new iq(e.key,t,function e(t){let r=[];return nc(t.fields,(t,n)=>{let i=new ne([t]);if(nU(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new ny(r)}(t.value.mapValue),ij.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:iv(r)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(o.batchId),i=n,s=o.batchId,(e=i.ac[i.currentUser.toKey()])||(e=new nd(r5)),e=e.insert(s,r),i.ac[i.currentUser.toKey()]=e,await o9(n,o.changes),await oy(n.remoteStore)}catch(t){let e=oO(t,"Failed to persist write");r.reject(e)}}async function oQ(e,t){try{let r=await function(e,t){let r=e,n=t.snapshotVersion,i=r.Li;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var s;let o,a;let l=r.Ki.newChangeBuffer({trackRemovals:!0});i=r.Li;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=i.get(o);if(!l)return;u.push(r.Ds.removeMatchingKeys(e,s.removedDocuments,o).next(()=>r.Ds.addMatchingKeys(e,s.addedDocuments,o)));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?c=c.withResumeToken(nb.EMPTY_BYTE_STRING,r6.min()).withLastLimboFreeSnapshotVersion(r6.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),i=i.insert(o,c),a=c,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(r.Ds.updateTargetData(e,c))});let c=im,h=iE();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((s=t.documentUpdates,o=iE(),a=iE(),s.forEach(e=>o=o.add(e)),l.getEntries(e,o).next(e=>{let t=im;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(r)),n.isNoDocument()&&n.version.isEqual(r6.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):rV("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{zi:t,ji:a}})).next(e=>{c=e.zi,h=e.ji})),!n.isEqual(r6.min())){let t=r.Ds.getLastRemoteSnapshotVersion(e).next(t=>r.Ds.setTargetsMetadata(e,e.currentSequenceNumber,n));u.push(t)}return ns.waitFor(u).next(()=>l.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,c,h)).next(()=>c)}).then(e=>(r.Li=i,e))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.uc.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||rq(),t.addedDocuments.size>0?n.ec=!0:t.modifiedDocuments.size>0?n.ec||rq():t.removedDocuments.size>0&&(n.ec||rq(),n.ec=!1))}),await o9(e,r,t)}catch(e){await ni(e)}}function oJ(e,t,r){let n=e;if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){let e=[];n.sc.forEach((r,n)=>{let i=n.view.Ru(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let r=e;r.onlineState=t;let n=!1;r.queries.forEach((e,r)=>{for(let e of r.listeners)e.Ru(t)&&(n=!0)}),n&&oU(r)}(n.eventManager,t),e.length&&n.nc.zo(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function oY(e,t,r){let n=e;n.sharedClientState.updateQueryState(t,"rejected",r);let i=n.uc.get(t),s=i&&i.key;if(s){let e=new nd(nt.comparator);e=e.insert(s,nB.newNoDocument(s,r6.min()));let r=iE().add(s),i=new i5(r6.min(),new Map,new nm(r5),e,r);await oQ(n,i),n.oc=n.oc.remove(s),n.uc.delete(t),o8(n)}else await sH(n.localStore,t,!1).then(()=>o3(n,t,r)).catch(ni)}async function o0(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.Ki.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=ns.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||rq(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iE();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});o5(e,n,null),o2(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await o9(e,i)}catch(e){await ni(e)}}async function o1(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||rq(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});o5(e,t,r),o2(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await o9(e,i)}catch(e){await ni(e)}}function o2(e,t){(e.hc.get(t)||[]).forEach(e=>{e.resolve()}),e.hc.delete(t)}function o5(e,t,r){let n=e,i=n.ac[n.currentUser.toKey()];if(i){let e=i.get(t);e&&(r?e.reject(r):e.resolve(),i=i.remove(t)),n.ac[n.currentUser.toKey()]=i}}function o3(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.ic.get(t)))e.sc.delete(n),r&&e.nc.wc(n,r);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(t=>{e.cc.containsKey(t)||o4(e,t)})}function o4(e,t){e.rc.delete(t.path.canonicalString());let r=e.oc.get(t);null!==r&&(oo(e.remoteStore,r),e.oc=e.oc.remove(t),e.uc.delete(r),o8(e))}function o6(e,t,r){for(let n of r)n instanceof o$?(e.cc.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.oc.get(r)||e.rc.has(n)||(rV("SyncEngine","New document in limbo: "+r),e.rc.add(n),o8(e))}(e,n)):n instanceof oz?(rV("SyncEngine","Document no longer in limbo: "+n.key),e.cc.removeReference(n.key,t),e.cc.containsKey(n.key)||o4(e,n.key)):rq()}function o8(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){var t;let r=e.rc.values().next().value;e.rc.delete(r);let n=new nt(r9.fromString(r)),i=e.lc.next();e.uc.set(i,new oK(n)),e.oc=e.oc.insert(n,i),os(e.remoteStore,new sw(io((t=n.path,new ir(t))),i,2,na.ct))}}async function o9(e,t,r){let n=[],i=[],s=[];e.sc.isEmpty()||(e.sc.forEach((o,a)=>{s.push(e.dc(a,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=s$.Di(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.nc.zo(n),await async function(e,t){let r=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>ns.forEach(t,t=>ns.forEach(t.Vi,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>ns.forEach(t.Si,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(e){if(!no(e))throw e;rV("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=r.Li.get(t),n=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(n);r.Li=r.Li.insert(t,i)}}}(e.localStore,i))}async function o7(e,t){let r=e;if(!r.currentUser.isEqual(t)){rV("SyncEngine","User change. New user:",t.toKey());let e=await sq(r.localStore,t);r.currentUser=t,r.hc.forEach(e=>{e.forEach(e=>{e.reject(new rH(rK.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),r.hc.clear(),r.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await o9(r,e.Qi)}}function ae(e,t){let r=e.uc.get(t);if(r&&r.ec)return iE().add(r.key);{let r=iE(),n=e.ic.get(t);if(!n)return r;for(let t of n){let n=e.sc.get(t);r=r.unionWith(n.view.Qu)}return r}}class at{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=s4(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,r,n,i;return t=this.persistence,r=new sz,n=e.initialUser,i=this.serializer,new sB(t,r,n,i)}createPersistence(e){return new sF(sV.Fs,this.serializer)}createSharedClientState(e){return new sG}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ar{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oJ(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=o7.bind(null,this.syncEngine),await oT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oD}createDatastore(e){var t,r,n;let i=s4(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new s5(t));return r=e.authCredentials,n=e.appCheckCredentials,new oe(r,n,s,i)}createRemoteStore(e){var t,r,n,i,s;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=e=>oJ(this.syncEngine,e,0),s=sQ.D()?new sQ:new sX,new or(t,r,n,i,s)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new oH(e,t,r,n,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){rV("RemoteStore","RemoteStore shutting down."),e.du.add(5),await oi(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):r$("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=rM.UNAUTHENTICATED,this.clientId=r2.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{rV("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(rV("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rH(rK.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new rW;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=oO(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function as(e,t){e.asyncQueue.verifyOperationInProgress(),rV("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await sq(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ao(e,t){e.asyncQueue.verifyOperationInProgress();let r=await aa(e);rV("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>oS(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>oS(t.remoteStore,r)),e._onlineComponents=t}async function aa(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){rV("FirestoreClient","Using user provided OfflineComponentProvider");try{await as(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===rK.FAILED_PRECONDITION||t.code===rK.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;rz("Error using user provided cache. Falling back to memory cache: "+t),await as(e,new at)}}else rV("FirestoreClient","Using default OfflineComponentProvider"),await as(e,new at)}return e._offlineComponents}async function al(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(rV("FirestoreClient","Using user provided OnlineComponentProvider"),await ao(e,e._uninitializedComponentsProvider._online)):(rV("FirestoreClient","Using default OnlineComponentProvider"),await ao(e,new ar))),e._onlineComponents}async function au(e){let t=await al(e),r=t.eventManager;return r.onListen=oW.bind(null,t.syncEngine),r.onUnlisten=oG.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(e,t,r){if(!r)throw new rH(rK.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ad(e){if(!nt.isDocumentKey(e))throw new rH(rK.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function af(e){if(nt.isDocumentKey(e))throw new rH(rK.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ap(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":rq()}function am(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rH(rK.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=ap(e);throw new rH(rK.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new rH(rK.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new rH(rK.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,n){if(!0===t&&!0===n)throw new rH(rK.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ag({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new rH(rK.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new rH(rK.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ag(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rG;switch(e.type){case"firstParty":return new rY(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new rH(rK.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ac.get(e);t&&(rV("ComponentProvider","Removing Datastore"),ac.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new av(this.firestore,e,this._key)}}class ab{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ab(this.firestore,e,this._query)}}class aw extends ab{constructor(e,t,r){super(e,t,new ir(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new av(this.firestore,null,new nt(e))}withConverter(e){return new aw(this.firestore,e,this._path)}}function a_(e,t,...r){if(e=(0,p.m9)(e),ah("collection","path",t),e instanceof ay){let n=r9.fromString(t,...r);return af(n),new aw(e,null,n)}{if(!(e instanceof av||e instanceof aw))throw new rH(rK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(r9.fromString(t,...r));return af(n),new aw(e.firestore,null,n)}}function aE(e,t,...r){if(e=(0,p.m9)(e),1==arguments.length&&(t=r2.A()),ah("doc","path",t),e instanceof ay){let n=r9.fromString(t,...r);return ad(n),new av(e,null,new nt(n))}{if(!(e instanceof av||e instanceof aw))throw new rH(rK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(r9.fromString(t,...r));return ad(n),new av(e.firestore,e instanceof aw?e.converter:null,new nt(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new s6(this,"async_queue_retry"),this.qc=()=>{let e=s3();e&&rV("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};let e=s3();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;let t=s3();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});let t=new rW;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!no(e))throw e;rV("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){let t=this.Nc.then(()=>(this.Fc=!0,e().catch(e=>{let t;this.Mc=e,this.Fc=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw r$("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Fc=!1,e))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);let n=oA.createAndSchedule(this,e,t,r,e=>this.Qc(e));return this.$c.push(n),n}Uc(){this.Mc&&rq()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(let t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{for(let t of(this.$c.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.$c))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){let t=this.$c.indexOf(e);this.$c.splice(t,1)}}class aS extends ay{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new aI,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aC(this),this._firestoreClient.terminate()}}function aT(e,t){let r="object"==typeof e?e:(0,h.Mq)(),n=(0,h.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,p.P0)("firestore");e&&function(e,t,r,n={}){var i;let s=(e=am(e,ay))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&rz("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${r}`,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=rM.MOCK_USER;else{t=(0,p.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new rH(rK.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new rM(s)}e._authCredentials=new rX(new rZ(t,r))}}(n,...e)}return n}function ak(e){return e._firestoreClient||aC(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function aC(e){var t,r,n,i,s,o;let a=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new nk(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new ai(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=a.cache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=a.cache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.cache.kind,_offline:a.cache._offlineComponentProvider,_online:a.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aA(nb.fromBase64String(e))}catch(e){throw new rH(rK.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new aA(nb.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new rH(rK.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new rH(rK.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new rH(rK.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return r5(this._lat,e._lat)||r5(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aR=/^__.*__$/;class aP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new iq(e,this.data,this.fieldMask,t,this.fieldTransforms):new iB(e,this.data,t,this.fieldTransforms)}}function aD(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rq()}}class aL{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new aL(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Zc({path:r,ta:!1});return n.ea(e),n}na(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Zc({path:r,ta:!1});return n.Jc(),n}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return a$(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(aD(this.Yc)&&aR.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class aM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||s4(e)}ua(e,t,r,n=!1){return new aL({Yc:e,methodName:t,oa:r,path:ne.emptyPath(),ta:!1,ra:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aj(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof r4||e instanceof aN||e instanceof aA||e instanceof av||e instanceof ax)}function aF(e,t,r){if(!aj(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=ap(r);throw"an object"===n?t.ia(e+" a custom object"):t.ia(e+" "+n)}}let aU=RegExp("[~\\*/\\[\\]]");function aV(e,t,r){if(t.search(aU)>=0)throw a$(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new aO(...t.split("."))._internalPath}catch(n){throw a$(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function a$(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new rH(rK.INVALID_ARGUMENT,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new av(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new aB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(aq("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class aB extends az{data(){return super.data()}}function aq(e,t){return"string"==typeof t?aV(e,t):t instanceof aO?t._internalPath:t._delegate._internalPath}class aK{convertValue(e,t="none"){switch(nO(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nE(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nI(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw rq()}}convertObject(e,t){let r={};return nc(e.fields,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new aN(nE(e.latitude),nE(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=function e(t){let r=t.mapValue.fields.__previous_value__;return nS(r)?e(r):r}(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(nT(e));default:return null}}convertTimestamp(e){let t=n_(e);return new r4(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=r9.fromString(e);sb(r)||rq();let n=new nC(r.get(1),r.get(3)),i=new nt(r.popFirst(5));return n.isEqual(t)||r$(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aW extends az{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new aZ(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(aq("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class aZ extends aW{data(e={}){return super.data(e)}}class aG{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new aH(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new aZ(this._firestore,this._userDataWriter,r.key,r,new aH(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new rH(rK.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new aZ(e._firestore,e._userDataWriter,r.doc.key,r.doc,new aH(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new aZ(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aH(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rq()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aX(e){e=am(e,av);let t=am(e.firestore,aS);return(function(e,t,r={}){let n=new rW;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){var s;let o=new an({next:s=>{t.enqueueAndForget(()=>oM(e,a));let o=s.docs.has(r);!o&&s.fromCache?i.reject(new rH(rK.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&n&&"server"===n.source?i.reject(new rH(rK.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new oV((s=r.path,new ir(s)),o,{includeMetadataChanges:!0,xu:!0});return oL(e,a)})(await au(e),e.asyncQueue,t,r,n)),n.promise})(ak(t),e._key).then(r=>(function(e,t,r){let n=r.docs.get(t._key),i=new aQ(e);return new aW(e,i,t._key,n,new aH(r.hasPendingWrites,r.fromCache),t.converter)})(t,e,r))}class aQ extends aK{constructor(e){super(),this.firestore=e}convertBytes(e){return new aA(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new av(this.firestore,null,t)}}function aJ(e){e=am(e,ab);let t=am(e.firestore,aS),r=ak(t),n=new aQ(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new rH(rK.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new rW;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new an({next:r=>{t.enqueueAndForget(()=>oM(e,o)),r.fromCache&&"server"===n.source?i.reject(new rH(rK.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new oV(r,s,{includeMetadataChanges:!0,xu:!0});return oL(e,o)})(await au(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new aG(t,n,e,r)))}function aY(e,t,r){var n,i;e=am(e,av);let s=am(e.firestore,aS),o=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return i=[(function(e,t,r,n,i,s={}){let o,a;let l=e.ua(s.merge||s.mergeFields?2:0,t,r,i);aF("Data must be an object, but it was:",l,n);let u=function e(t,r){let n={};return nh(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):nc(t,(t,i)=>{let s=function t(r,n){if(aj(r=(0,p.m9)(r)))return aF("Unsupported field value:",n,r),e(r,n);if(r instanceof ax)return function(e,t){if(!aD(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(r,n),null;if(void 0===r&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),r instanceof Array){if(n.settings.ta&&4!==n.Yc)throw n.ia("Nested arrays are not supported");return function(e,r){let n=[],i=0;for(let s of e){let e=t(s,r.sa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(r,n)}return function(e,t){if(null===(e=(0,p.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!nl(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iT(n):iS(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=r4.fromDate(e);return{timestampValue:so(t.serializer,r)}}if(e instanceof r4){let r=new r4(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:so(t.serializer,r)}}if(e instanceof aN)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof aA)return{bytesValue:sa(t.serializer,e._byteString)};if(e instanceof av){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.ia(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:su(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${ap(e)}`)}(r,n)}(i,r.Xc(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}(n,l);if(s.merge)o=new ny(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=function(e,t,r){if((t=(0,p.m9)(t))instanceof aO)return t._internalPath;if("string"==typeof t)return aV(e,t);throw a$("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!l.contains(i))throw new rH(rK.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}o=new ny(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new aP(new nz(u),o,a)})(function(e){let t=e._freezeSettings(),r=s4(e._databaseId);return new aM(e._databaseId,!!t.ignoreUndefinedProperties,r)}(s),"setDoc",e._key,o,null!==e.converter,r).toMutation(e._key,ij.none())],function(e,t){let r=new rW;return e.asyncQueue.enqueueAndForget(async()=>oX(await al(e).then(e=>e.syncEngine),t,r)),r.promise}(ak(s),i)}!function(e,t=!0){rj=h.Jn,(0,h.Xd)(new d.wA("firestore",(e,{instanceIdentifier:r,options:n})=>{let i=e.getProvider("app").getImmediate(),s=new aS(new rQ(e.getProvider("auth-internal")),new r1(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new rH(rK.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nC(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(rL,"3.10.1",void 0),(0,h.KN)(rL,"3.10.1","esm2017")}()},4444:function(e,t,r){"use strict";r.d(t,{BH:function(){return b},L:function(){return u},LL:function(){return O},P0:function(){return g},Pz:function(){return v},Sg:function(){return w},ZR:function(){return A},aH:function(){return y},b$:function(){return S},eu:function(){return C},hl:function(){return k},m9:function(){return U},ne:function(){return M},pd:function(){return L},q4:function(){return m},ru:function(){return I},tV:function(){return c},uI:function(){return E},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(R(n)&&R(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w1:function(){return T},xO:function(){return P},xb:function(){return N},z$:function(){return _},zd:function(){return D}});var n=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},s=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],o=e[r++],a=e[r++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,o=s?r[e.charAt(t)]:0;++t;let l=t<e.length,u=l?r[e.charAt(t)]:64;++t;let c=t<e.length,h=c?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==u||null==h)throw new a;let d=i<<2|o>>4;if(n.push(d),64!==u){let e=o<<4&240|u>>2;if(n.push(e),64!==h){let e=u<<6&192|h;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},g=e=>{let t=m(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function S(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){let e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function C(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(x,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new A(n,o,r);return a}}let x=/\{\$([^}]+)}/g;function N(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function D(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function L(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function M(e,t){let r=new j(e,t);return r.subscribe.bind(r)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=F),void 0===n.error&&(n.error=F),void 0===n.complete&&(n.complete=F);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return e&&e._delegate?e._delegate:e}},8201:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),o=(0,i.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=o},5058:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),o=(0,i.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.Z=o},5938:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),o=(0,i.default)((0,s.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");t.Z=o},6638:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),o=(0,i.default)((0,s.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=o},9485:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),o=(0,i.default)((0,s.jsx)("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login");t.Z=o},3540:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),o=(0,i.default)((0,s.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");t.Z=o},4938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(3875)},3230:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(7462),i=r(3366),s=r(1387),o=r(9766),a=r(6500),l=r(4920),u=r(6523),c=r(1796),h={black:"#000",white:"#fff"},d={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},f={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},p={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},m={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},g={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},y={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},v={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};let b=["mode","contrastThreshold","tonalOffset"],w={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.white,default:h.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},_={text:{primary:h.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:h.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function E(e,t,r,n){let i=n.light||n,s=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=(0,c.$n)(e.main,i):"dark"===t&&(e.dark=(0,c._j)(e.main,s)))}let I=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],S={textTransform:"uppercase"},T='"Roboto", "Helvetica", "Arial", sans-serif';function k(...e){return`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2),${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14),${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`}let C=["none",k(0,2,1,-1,0,1,1,0,0,1,3,0),k(0,3,1,-2,0,2,2,0,0,1,5,0),k(0,3,3,-2,0,3,4,0,0,1,8,0),k(0,2,4,-1,0,4,5,0,0,1,10,0),k(0,3,5,-1,0,5,8,0,0,1,14,0),k(0,3,5,-1,0,6,10,0,0,1,18,0),k(0,4,5,-2,0,7,10,1,0,2,16,1),k(0,5,5,-3,0,8,10,1,0,3,14,2),k(0,5,6,-3,0,9,12,1,0,3,16,2),k(0,6,6,-3,0,10,14,1,0,4,18,3),k(0,6,7,-4,0,11,15,1,0,4,20,3),k(0,7,8,-4,0,12,17,2,0,5,22,4),k(0,7,8,-4,0,13,19,2,0,5,24,4),k(0,7,9,-4,0,14,21,2,0,5,26,4),k(0,8,9,-5,0,15,22,2,0,6,28,5),k(0,8,10,-5,0,16,24,2,0,6,30,5),k(0,8,11,-5,0,17,26,2,0,6,32,5),k(0,9,11,-5,0,18,28,2,0,7,34,6),k(0,9,12,-6,0,19,29,2,0,7,36,6),k(0,10,13,-6,0,20,31,3,0,8,38,7),k(0,10,13,-6,0,21,33,3,0,8,40,7),k(0,10,14,-6,0,22,35,3,0,8,42,7),k(0,11,14,-7,0,23,36,3,0,9,44,8),k(0,11,15,-7,0,24,38,3,0,9,46,8)],A=["duration","easing","delay"],O={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},x={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function N(e){return`${Math.round(e)}ms`}function R(e){if(!e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}var P={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let D=["breakpoints","mixins","spacing","palette","transitions","typography","shape"],L=function(e={}){var t;let{mixins:r={},palette:k={},transitions:L={},typography:M={}}=e,j=(0,i.Z)(e,D);if(e.vars)throw Error((0,s.Z)(18));let F=function(e){let{mode:t="light",contrastThreshold:r=3,tonalOffset:a=.2}=e,l=(0,i.Z)(e,b),u=e.primary||function(e="light"){return"dark"===e?{main:g[200],light:g[50],dark:g[400]}:{main:g[700],light:g[400],dark:g[800]}}(t),I=e.secondary||function(e="light"){return"dark"===e?{main:f[200],light:f[50],dark:f[400]}:{main:f[500],light:f[300],dark:f[700]}}(t),S=e.error||function(e="light"){return"dark"===e?{main:p[500],light:p[300],dark:p[700]}:{main:p[700],light:p[400],dark:p[800]}}(t),T=e.info||function(e="light"){return"dark"===e?{main:y[400],light:y[300],dark:y[700]}:{main:y[700],light:y[500],dark:y[900]}}(t),k=e.success||function(e="light"){return"dark"===e?{main:v[400],light:v[300],dark:v[700]}:{main:v[800],light:v[500],dark:v[900]}}(t),C=e.warning||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:"#ed6c02",light:m[500],dark:m[900]}}(t);function A(e){let t=(0,c.mi)(e,_.text.primary)>=r?_.text.primary:w.text.primary;return t}let O=({color:e,name:t,mainShade:r=500,lightShade:i=300,darkShade:o=700})=>{if(!(e=(0,n.Z)({},e)).main&&e[r]&&(e.main=e[r]),!e.hasOwnProperty("main"))throw Error((0,s.Z)(11,t?` (${t})`:"",r));if("string"!=typeof e.main)throw Error((0,s.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return E(e,"light",i,a),E(e,"dark",o,a),e.contrastText||(e.contrastText=A(e.main)),e},x=(0,o.Z)((0,n.Z)({common:(0,n.Z)({},h),mode:t,primary:O({color:u,name:"primary"}),secondary:O({color:I,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:O({color:S,name:"error"}),warning:O({color:C,name:"warning"}),info:O({color:T,name:"info"}),success:O({color:k,name:"success"}),grey:d,contrastThreshold:r,getContrastText:A,augmentColor:O,tonalOffset:a},{dark:_,light:w}[t]),l);return x}(k),U=(0,a.Z)(e),V=(0,o.Z)(U,{mixins:(t=U.breakpoints,(0,n.Z)({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},r)),palette:F,shadows:C.slice(),typography:function(e,t){let r="function"==typeof t?t(e):t,{fontFamily:s=T,fontSize:a=14,fontWeightLight:l=300,fontWeightRegular:u=400,fontWeightMedium:c=500,fontWeightBold:h=700,htmlFontSize:d=16,allVariants:f,pxToRem:p}=r,m=(0,i.Z)(r,I),g=a/14,y=p||(e=>`${e/d*g}rem`),v=(e,t,r,i,o)=>(0,n.Z)({fontFamily:s,fontWeight:e,fontSize:y(t),lineHeight:r},s===T?{letterSpacing:`${Math.round(1e5*(i/t))/1e5}em`}:{},o,f),b={h1:v(l,96,1.167,-1.5),h2:v(l,60,1.2,-.5),h3:v(u,48,1.167,0),h4:v(u,34,1.235,.25),h5:v(u,24,1.334,0),h6:v(c,20,1.6,.15),subtitle1:v(u,16,1.75,.15),subtitle2:v(c,14,1.57,.1),body1:v(u,16,1.5,.15),body2:v(u,14,1.43,.15),button:v(c,14,1.75,.4,S),caption:v(u,12,1.66,.4),overline:v(u,12,2.66,1,S),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return(0,o.Z)((0,n.Z)({htmlFontSize:d,pxToRem:y,fontFamily:s,fontSize:a,fontWeightLight:l,fontWeightRegular:u,fontWeightMedium:c,fontWeightBold:h},b),m,{clone:!1})}(F,M),transitions:function(e){let t=(0,n.Z)({},O,e.easing),r=(0,n.Z)({},x,e.duration),s=(e=["all"],n={})=>{let{duration:s=r.standard,easing:o=t.easeInOut,delay:a=0}=n;return(0,i.Z)(n,A),(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"==typeof s?s:N(s)} ${o} ${"string"==typeof a?a:N(a)}`).join(",")};return(0,n.Z)({getAutoHeightDuration:R,create:s},e,{easing:t,duration:r})}(L),zIndex:(0,n.Z)({},P)});return(V=[].reduce((e,t)=>(0,o.Z)(e,t),V=(0,o.Z)(V,j))).unstable_sxConfig=(0,n.Z)({},l.Z,null==j?void 0:j.unstable_sxConfig),V.unstable_sx=function(e){return(0,u.Z)({sx:e,theme:this})},V}();var M=L},606:function(e,t){"use strict";t.Z="$$material"},8271:function(e,t,r){"use strict";r.d(t,{ZP:function(){return j},FO:function(){return D},Dz:function(){return L}});var n=r(3366),i=r(7462),s=r(7294),o=r(5042),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=(0,o.Z)(function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),u=r(2443),c=r(444),h=r(8137),d=r(7278),f=function(e){return"theme"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?l:f},m=function(e,t,r){var n;if(t){var i=t.shouldForwardProp;n=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},g=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,c.hC)(t,r,n),(0,d.L)(function(){return(0,c.My)(t,r,n)}),null},y=(function e(t,r){var n,o,a=t.__emotion_real===t,l=a&&t.__emotion_base||t;void 0!==r&&(n=r.label,o=r.target);var d=m(t,r,a),f=d||p(l),y=!f("as");return function(){var v=arguments,b=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&b.push("label:"+n+";"),null==v[0]||void 0===v[0].raw)b.push.apply(b,v);else{b.push(v[0][0]);for(var w=v.length,_=1;_<w;_++)b.push(v[_],v[0][_])}var E=(0,u.w)(function(e,t,r){var n=y&&e.as||l,i="",a=[],m=e;if(null==e.theme){for(var v in m={},e)m[v]=e[v];m.theme=(0,s.useContext)(u.T)}"string"==typeof e.className?i=(0,c.fp)(t.registered,a,e.className):null!=e.className&&(i=e.className+" ");var w=(0,h.O)(b.concat(a),t.registered,m);i+=t.key+"-"+w.name,void 0!==o&&(i+=" "+o);var _=y&&void 0===d?p(n):f,E={};for(var I in e)(!y||"as"!==I)&&_(I)&&(E[I]=e[I]);return E.className=i,E.ref=r,(0,s.createElement)(s.Fragment,null,(0,s.createElement)(g,{cache:t,serialized:w,isStringTag:"string"==typeof n}),(0,s.createElement)(n,E))});return E.displayName=void 0!==n?n:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",E.defaultProps=t.defaultProps,E.__emotion_real=E,E.__emotion_base=l,E.__emotion_styles=b,E.__emotion_forwardProp=d,Object.defineProperty(E,"toString",{value:function(){return"."+o}}),E.withComponent=function(t,n){return e(t,(0,i.Z)({},r,n,{shouldForwardProp:m(E,n,!0)})).apply(void 0,b)},E}}).bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){y[e]=y(e)});let v=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};var b=r(6500),w=r(8320);let _=["variant"];function E(e){return 0===e.length}function I(e){let{variant:t}=e,r=(0,n.Z)(e,_),i=t||"";return Object.keys(r).sort().forEach(t=>{"color"===t?i+=E(i)?e[t]:(0,w.Z)(e[t]):i+=`${E(i)?t:(0,w.Z)(t)}${(0,w.Z)(e[t].toString())}`}),i}var S=r(6523);let T=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],k=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,C=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);let n={};return r.forEach(e=>{let t=I(e.props);n[t]=e.style}),n},A=(e,t,r,n)=>{var i,s;let{ownerState:o={}}=e,a=[],l=null==r?void 0:null==(i=r.components)?void 0:null==(s=i[n])?void 0:s.variants;return l&&l.forEach(r=>{let n=!0;Object.keys(r.props).forEach(t=>{o[t]!==r.props[t]&&e[t]!==r.props[t]&&(n=!1)}),n&&a.push(t[I(r.props)])}),a};function O(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let x=(0,b.Z)();function N({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}var R=r(3230),P=r(606);let D=e=>O(e)&&"classes"!==e,L=O,M=function(e={}){let{themeId:t,defaultTheme:r=x,rootShouldForwardProp:s=O,slotShouldForwardProp:o=O}=e,a=e=>(0,S.Z)((0,i.Z)({},e,{theme:N((0,i.Z)({},e,{defaultTheme:r,themeId:t}))}));return a.__mui_systemSx=!0,(e,l={})=>{let u;v(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:c,slot:h,skipVariantsResolver:d,skipSx:f,overridesResolver:p}=l,m=(0,n.Z)(l,T),g=void 0!==d?d:h&&"Root"!==h||!1,b=f||!1,w=O;"Root"===h?w=s:h?w=o:"string"==typeof e&&e.charCodeAt(0)>96&&(w=void 0);let _=/**
 * @mui/styled-engine v5.12.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function(e,t){let r=y(e,t);return r}(e,(0,i.Z)({shouldForwardProp:w,label:u},m)),E=(n,...s)=>{let o=s?s.map(e=>"function"==typeof e&&e.__emotion_real!==e?n=>e((0,i.Z)({},n,{theme:N((0,i.Z)({},n,{defaultTheme:r,themeId:t}))})):e):[],l=n;c&&p&&o.push(e=>{let n=N((0,i.Z)({},e,{defaultTheme:r,themeId:t})),s=k(c,n);if(s){let t={};return Object.entries(s).forEach(([r,s])=>{t[r]="function"==typeof s?s((0,i.Z)({},e,{theme:n})):s}),p(e,t)}return null}),c&&!g&&o.push(e=>{let n=N((0,i.Z)({},e,{defaultTheme:r,themeId:t}));return A(e,C(c,n),n,c)}),b||o.push(a);let u=o.length-s.length;if(Array.isArray(n)&&u>0){let e=Array(u).fill("");(l=[...n,...e]).raw=[...n.raw,...e]}else"function"==typeof n&&n.__emotion_real!==n&&(l=e=>n((0,i.Z)({},e,{theme:N((0,i.Z)({},e,{defaultTheme:r,themeId:t}))})));let h=_(l,...o);return e.muiName&&(h.muiName=e.muiName),h};return _.withConfig&&(E.withConfig=_.withConfig),E}}({themeId:P.Z,defaultTheme:R.Z,rootShouldForwardProp:D});var j=M},4502:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7462),i=r(9718),s=r(3230),o=r(606);function a({props:e,name:t}){return function({props:e,name:t,defaultTheme:r,themeId:s}){let o=(0,i.Z)(r);s&&(o=o[s]||o);let a=function(e){let{theme:t,name:r,props:i}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?function e(t,r){let i=(0,n.Z)({},r);return Object.keys(t).forEach(s=>{if(s.toString().match(/^(components|slots)$/))i[s]=(0,n.Z)({},t[s],i[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){let o=t[s]||{},a=r[s];i[s]={},a&&Object.keys(a)?o&&Object.keys(o)?(i[s]=(0,n.Z)({},a),Object.keys(o).forEach(t=>{i[s][t]=e(o[t],a[t])})):i[s]=a:i[s]=o}else void 0===i[s]&&(i[s]=t[s])}),i}(t.components[r].defaultProps,i):i}({theme:o,name:t,props:e});return a}({props:e,name:t,defaultTheme:s.Z,themeId:o.Z})}},8216:function(e,t,r){"use strict";var n=r(8320);t.Z=n.Z},8169:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(7462),i=r(7294),s=r(3366),o=r(6010),a=r(4780),l=r(8216),u=r(4502),c=r(8271),h=r(1588),d=r(4867);function f(e){return(0,d.Z)("MuiSvgIcon",e)}(0,h.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=r(5893);let m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=e=>{let{color:t,fontSize:r,classes:n}=e,i={root:["root","inherit"!==t&&`color${(0,l.Z)(t)}`,`fontSize${(0,l.Z)(r)}`]};return(0,a.Z)(i,f,n)},y=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,l.Z)(r.color)}`],t[`fontSize${(0,l.Z)(r.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var r,n,i,s,o,a,l,u,c,h,d,f,p,m,g,y,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)?void 0:null==(n=r.create)?void 0:n.call(r,"fill",{duration:null==(i=e.transitions)?void 0:null==(s=i.duration)?void 0:s.shorter}),fontSize:({inherit:"inherit",small:(null==(o=e.typography)?void 0:null==(a=o.pxToRem)?void 0:a.call(o,20))||"1.25rem",medium:(null==(l=e.typography)?void 0:null==(u=l.pxToRem)?void 0:u.call(l,24))||"1.5rem",large:(null==(c=e.typography)?void 0:null==(h=c.pxToRem)?void 0:h.call(c,35))||"2.1875rem"})[t.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)?void 0:null==(p=f[t.color])?void 0:p.main)?d:({action:null==(m=(e.vars||e).palette)?void 0:null==(g=m.action)?void 0:g.active,disabled:null==(y=(e.vars||e).palette)?void 0:null==(v=y.action)?void 0:v.disabled,inherit:void 0})[t.color]}}),v=i.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:a,color:l="inherit",component:c="svg",fontSize:h="medium",htmlColor:d,inheritViewBox:f=!1,titleAccess:v,viewBox:b="0 0 24 24"}=r,w=(0,s.Z)(r,m),_=(0,n.Z)({},r,{color:l,component:c,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:b}),E={};f||(E.viewBox=b);let I=g(_);return(0,p.jsxs)(y,(0,n.Z)({as:c,className:(0,o.default)(I.root,a),focusable:"false",color:d,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},E,w,{ownerState:_,children:[i,v?(0,p.jsx)("title",{children:v}):null]}))});function b(e,t){function r(r,i){return(0,p.jsx)(v,(0,n.Z)({"data-testid":`${t}Icon`,ref:i},r,{children:e}))}return r.muiName=v.muiName,i.memo(i.forwardRef(r))}v.muiName="SvgIcon"},7144:function(e,t,r){"use strict";var n=r(7596);t.Z=n.Z},3875:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return i.Z},createChainedFunction:function(){return s},createSvgIcon:function(){return o.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return u.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return h.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return _},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return m},unsupportedProp:function(){return g},useControlled:function(){return y.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return w.Z}});var n=r(7078),i=r(8216),s=r(6508).Z,o=r(8169),a=r(7144),l=function(e,t){return()=>null},u=r(1579),c=r(8038),h=r(5340);r(7462);var d=function(e,t){return()=>null},f=r(7960).Z,p=r(8974),m=r(7579).Z,g=function(e,t,r,n,i){return null},y=r(2627),v=r(7200),b=r(1705),w=r(8791);let _={configure:e=>{n.Z.configure(e)}}},1579:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),i=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8038:function(e,t,r){"use strict";var n=r(7094);t.Z=n.Z},5340:function(e,t,r){"use strict";var n=r(8290);t.Z=n.Z},2627:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),i=function({controlled:e,default:t,name:r,state:i="value"}){let{current:s}=n.useRef(void 0!==e),[o,a]=n.useState(t),l=n.useCallback(e=>{s||a(e)},[]);return[s?e:o,l]}},8974:function(e,t,r){"use strict";var n=r(6600);t.Z=n.Z},7200:function(e,t,r){"use strict";var n=r(3633);t.Z=n.Z},1705:function(e,t,r){"use strict";var n=r(67);t.Z=n.Z},8791:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return h}});var i=r(7294);let s=!0,o=!1,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(s=!0)}function u(){s=!1}function c(){"hidden"===this.visibilityState&&o&&(s=!0)}var h=function(){let e=i.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",c,!0)}},[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return s||function(e){let{type:t,tagName:r}=e;return"INPUT"===r&&!!a[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(o=!0,window.clearTimeout(n),n=window.setTimeout(()=>{o=!1},100),t.current=!1,!0)},ref:e}}},5408:function(e,t,r){"use strict";r.d(t,{L7:function(){return a},VO:function(){return n},W8:function(){return o},k9:function(){return s}});let n={xs:0,sm:600,md:900,lg:1200,xl:1536},i={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${n[e]}px)`};function s(e,t,r){let s=e.theme||{};if(Array.isArray(t)){let e=s.breakpoints||i;return t.reduce((n,i,s)=>(n[e.up(e.keys[s])]=r(t[s]),n),{})}if("object"==typeof t){let e=s.breakpoints||i;return Object.keys(t).reduce((i,s)=>{if(-1!==Object.keys(e.values||n).indexOf(s)){let n=e.up(s);i[n]=r(t[s],s)}else i[s]=t[s];return i},{})}let o=r(t);return o}function o(e={}){var t;let r=null==(t=e.keys)?void 0:t.reduce((t,r)=>{let n=e.up(r);return t[n]={},t},{});return r||{}}function a(e,t){return e.reduce((e,t)=>{let r=e[t],n=!r||0===Object.keys(r).length;return n&&delete e[t],e},t)}},1796:function(e,t,r){"use strict";r.d(t,{$n:function(){return h},Fq:function(){return u},_j:function(){return c},mi:function(){return l}});var n=r(1387);function i(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function s(e){let t;if(e.type)return e;if("#"===e.charAt(0))return s(function(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map(e=>e+e)),r?`rgb${4===r.length?"a":""}(${r.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}(e));let r=e.indexOf("("),i=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw Error((0,n.Z)(9,e));let o=e.substring(r+1,e.length-1);if("color"===i){if(t=(o=o.split(" ")).shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,n.Z)(10,t))}else o=o.split(",");return{type:i,values:o=o.map(e=>parseFloat(e)),colorSpace:t}}function o(e){let{type:t,colorSpace:r}=e,{values:n}=e;return -1!==t.indexOf("rgb")?n=n.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),`${t}(${n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`})`}function a(e){let t="hsl"===(e=s(e)).type||"hsla"===e.type?s(function(e){e=s(e);let{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,a=n*Math.min(i,1-i),l=(e,t=(e+r/30)%12)=>i-a*Math.max(Math.min(t-3,9-t,1),-1),u="rgb",c=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(u+="a",c.push(t[3])),o({type:u,values:c})}(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){let r=a(e),n=a(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function u(e,t){return e=s(e),t=i(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,o(e)}function c(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return o(e)}function h(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return o(e)}},6500:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7462),i=r(3366),s=r(9766);let o=["values","unit","step"],a=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,n.Z)({},e,{[t.key]:t.val}),{})};var l={borderRadius:4},u=r(8700),c=r(6523),h=r(4920);let d=["breakpoints","palette","spacing","shape"];var f=function(e={},...t){let{breakpoints:r={},palette:f={},spacing:p,shape:m={}}=e,g=(0,i.Z)(e,d),y=function(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:s=5}=e,l=(0,i.Z)(e,o),u=a(t),c=Object.keys(u);function h(e){let n="number"==typeof t[e]?t[e]:e;return`@media (min-width:${n}${r})`}function d(e){let n="number"==typeof t[e]?t[e]:e;return`@media (max-width:${n-s/100}${r})`}function f(e,n){let i=c.indexOf(n);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r}) and (max-width:${(-1!==i&&"number"==typeof t[c[i]]?t[c[i]]:n)-s/100}${r})`}return(0,n.Z)({keys:c,values:u,up:h,down:d,between:f,only:function(e){return c.indexOf(e)+1<c.length?f(e,c[c.indexOf(e)+1]):h(e)},not:function(e){let t=c.indexOf(e);return 0===t?h(c[1]):t===c.length-1?d(c[t]):f(e,c[c.indexOf(e)+1]).replace("@media","@media not all and")},unit:r},l)}(r),v=function(e=8){if(e.mui)return e;let t=(0,u.hB)({spacing:e}),r=(...e)=>{let r=0===e.length?[1]:e;return r.map(e=>{let r=t(e);return"number"==typeof r?`${r}px`:r}).join(" ")};return r.mui=!0,r}(p),b=(0,s.Z)({breakpoints:y,direction:"ltr",components:{},palette:(0,n.Z)({mode:"light"},f),spacing:v,shape:(0,n.Z)({},l,m)},g);return(b=t.reduce((e,t)=>(0,s.Z)(e,t),b)).unstable_sxConfig=(0,n.Z)({},h.Z,null==g?void 0:g.unstable_sxConfig),b.unstable_sx=function(e){return(0,c.Z)({sx:e,theme:this})},b}},7730:function(e,t,r){"use strict";var n=r(9766);t.Z=function(e,t){return t?(0,n.Z)(e,t,{clone:!1}):e}},8700:function(e,t,r){"use strict";r.d(t,{hB:function(){return p},eI:function(){return f},NA:function(){return m},e6:function(){return y},o3:function(){return v}});var n=r(5408),i=r(4844),s=r(7730);let o={m:"margin",p:"padding"},a={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},u=function(e){let t={};return r=>(void 0===t[r]&&(t[r]=e(r)),t[r])}(e=>{if(e.length>2){if(!l[e])return[e];e=l[e]}let[t,r]=e.split(""),n=o[t],i=a[r]||"";return Array.isArray(i)?i.map(e=>n+e):[n+i]}),c=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],h=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],d=[...c,...h];function f(e,t,r,n){var s;let o=null!=(s=(0,i.DW)(e,t,!1))?s:r;return"number"==typeof o?e=>"string"==typeof e?e:o*e:Array.isArray(o)?e=>"string"==typeof e?e:o[e]:"function"==typeof o?o:()=>void 0}function p(e){return f(e,"spacing",8,"spacing")}function m(e,t){if("string"==typeof t||null==t)return t;let r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:`-${r}`}function g(e,t){let r=p(e.theme);return Object.keys(e).map(i=>(function(e,t,r,i){if(-1===t.indexOf(r))return null;let s=u(r),o=e=>s.reduce((t,r)=>(t[r]=m(i,e),t),{}),a=e[r];return(0,n.k9)(e,a,o)})(e,t,i,r)).reduce(s.Z,{})}function y(e){return g(e,c)}function v(e){return g(e,h)}function b(e){return g(e,d)}y.propTypes={},y.filterProps=c,v.propTypes={},v.filterProps=h,b.propTypes={},b.filterProps=d},4844:function(e,t,r){"use strict";r.d(t,{DW:function(){return s},Jq:function(){return o}});var n=r(8320),i=r(5408);function s(e,t,r=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&r){let r=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=r)return r}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function o(e,t,r,n=r){let i;return i="function"==typeof e?e(r):Array.isArray(e)?e[r]||n:s(e,r)||n,t&&(i=t(i,n,e)),i}t.ZP=function(e){let{prop:t,cssProperty:r=e.prop,themeKey:a,transform:l}=e,u=e=>{if(null==e[t])return null;let u=e[t],c=e.theme,h=s(c,a)||{},d=e=>{let i=o(h,l,e);return(e===i&&"string"==typeof e&&(i=o(h,l,`${t}${"default"===e?"":(0,n.Z)(e)}`,e)),!1===r)?i:{[r]:i}};return(0,i.k9)(e,u,d)};return u.propTypes={},u.filterProps=[t],u}},4920:function(e,t,r){"use strict";r.d(t,{Z:function(){return K}});var n=r(8700),i=r(4844),s=r(7730),o=function(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(r=>{e[r]=t}),e),{}),r=e=>Object.keys(e).reduce((r,n)=>t[n]?(0,s.Z)(r,t[n](e)):r,{});return r.propTypes={},r.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),r},a=r(5408);function l(e){return"number"!=typeof e?e:`${e}px solid`}let u=(0,i.ZP)({prop:"border",themeKey:"borders",transform:l}),c=(0,i.ZP)({prop:"borderTop",themeKey:"borders",transform:l}),h=(0,i.ZP)({prop:"borderRight",themeKey:"borders",transform:l}),d=(0,i.ZP)({prop:"borderBottom",themeKey:"borders",transform:l}),f=(0,i.ZP)({prop:"borderLeft",themeKey:"borders",transform:l}),p=(0,i.ZP)({prop:"borderColor",themeKey:"palette"}),m=(0,i.ZP)({prop:"borderTopColor",themeKey:"palette"}),g=(0,i.ZP)({prop:"borderRightColor",themeKey:"palette"}),y=(0,i.ZP)({prop:"borderBottomColor",themeKey:"palette"}),v=(0,i.ZP)({prop:"borderLeftColor",themeKey:"palette"}),b=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){let t=(0,n.eI)(e.theme,"shape.borderRadius",4,"borderRadius"),r=e=>({borderRadius:(0,n.NA)(t,e)});return(0,a.k9)(e,e.borderRadius,r)}return null};b.propTypes={},b.filterProps=["borderRadius"],o(u,c,h,d,f,p,m,g,y,v,b);let w=e=>{if(void 0!==e.gap&&null!==e.gap){let t=(0,n.eI)(e.theme,"spacing",8,"gap"),r=e=>({gap:(0,n.NA)(t,e)});return(0,a.k9)(e,e.gap,r)}return null};w.propTypes={},w.filterProps=["gap"];let _=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){let t=(0,n.eI)(e.theme,"spacing",8,"columnGap"),r=e=>({columnGap:(0,n.NA)(t,e)});return(0,a.k9)(e,e.columnGap,r)}return null};_.propTypes={},_.filterProps=["columnGap"];let E=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){let t=(0,n.eI)(e.theme,"spacing",8,"rowGap"),r=e=>({rowGap:(0,n.NA)(t,e)});return(0,a.k9)(e,e.rowGap,r)}return null};E.propTypes={},E.filterProps=["rowGap"];let I=(0,i.ZP)({prop:"gridColumn"}),S=(0,i.ZP)({prop:"gridRow"}),T=(0,i.ZP)({prop:"gridAutoFlow"}),k=(0,i.ZP)({prop:"gridAutoColumns"}),C=(0,i.ZP)({prop:"gridAutoRows"}),A=(0,i.ZP)({prop:"gridTemplateColumns"}),O=(0,i.ZP)({prop:"gridTemplateRows"}),x=(0,i.ZP)({prop:"gridTemplateAreas"}),N=(0,i.ZP)({prop:"gridArea"});function R(e,t){return"grey"===t?t:e}o(w,_,E,I,S,T,k,C,A,O,x,N);let P=(0,i.ZP)({prop:"color",themeKey:"palette",transform:R}),D=(0,i.ZP)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:R}),L=(0,i.ZP)({prop:"backgroundColor",themeKey:"palette",transform:R});function M(e){return e<=1&&0!==e?`${100*e}%`:e}o(P,D,L);let j=(0,i.ZP)({prop:"width",transform:M}),F=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){let t=t=>{var r,n,i;let s=(null==(r=e.theme)?void 0:null==(n=r.breakpoints)?void 0:null==(i=n.values)?void 0:i[t])||a.VO[t];return{maxWidth:s||M(t)}};return(0,a.k9)(e,e.maxWidth,t)}return null};F.filterProps=["maxWidth"];let U=(0,i.ZP)({prop:"minWidth",transform:M}),V=(0,i.ZP)({prop:"height",transform:M}),$=(0,i.ZP)({prop:"maxHeight",transform:M}),z=(0,i.ZP)({prop:"minHeight",transform:M});(0,i.ZP)({prop:"size",cssProperty:"width",transform:M}),(0,i.ZP)({prop:"size",cssProperty:"height",transform:M});let B=(0,i.ZP)({prop:"boxSizing"});o(j,F,U,V,$,z,B);let q={border:{themeKey:"borders",transform:l},borderTop:{themeKey:"borders",transform:l},borderRight:{themeKey:"borders",transform:l},borderBottom:{themeKey:"borders",transform:l},borderLeft:{themeKey:"borders",transform:l},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:b},color:{themeKey:"palette",transform:R},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:R},backgroundColor:{themeKey:"palette",transform:R},p:{style:n.o3},pt:{style:n.o3},pr:{style:n.o3},pb:{style:n.o3},pl:{style:n.o3},px:{style:n.o3},py:{style:n.o3},padding:{style:n.o3},paddingTop:{style:n.o3},paddingRight:{style:n.o3},paddingBottom:{style:n.o3},paddingLeft:{style:n.o3},paddingX:{style:n.o3},paddingY:{style:n.o3},paddingInline:{style:n.o3},paddingInlineStart:{style:n.o3},paddingInlineEnd:{style:n.o3},paddingBlock:{style:n.o3},paddingBlockStart:{style:n.o3},paddingBlockEnd:{style:n.o3},m:{style:n.e6},mt:{style:n.e6},mr:{style:n.e6},mb:{style:n.e6},ml:{style:n.e6},mx:{style:n.e6},my:{style:n.e6},margin:{style:n.e6},marginTop:{style:n.e6},marginRight:{style:n.e6},marginBottom:{style:n.e6},marginLeft:{style:n.e6},marginX:{style:n.e6},marginY:{style:n.e6},marginInline:{style:n.e6},marginInlineStart:{style:n.e6},marginInlineEnd:{style:n.e6},marginBlock:{style:n.e6},marginBlockStart:{style:n.e6},marginBlockEnd:{style:n.e6},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:w},rowGap:{style:E},columnGap:{style:_},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:M},maxWidth:{style:F},minWidth:{transform:M},height:{transform:M},maxHeight:{transform:M},minHeight:{transform:M},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var K=q},6523:function(e,t,r){"use strict";var n=r(8320),i=r(7730),s=r(4844),o=r(5408),a=r(4920);let l=function(){function e(e,t,r,i){let a={[e]:t,theme:r},l=i[e];if(!l)return{[e]:t};let{cssProperty:u=e,themeKey:c,transform:h,style:d}=l;if(null==t)return null;if("typography"===c&&"inherit"===t)return{[e]:t};let f=(0,s.DW)(r,c)||{};if(d)return d(a);let p=t=>{let r=(0,s.Jq)(f,h,t);return(t===r&&"string"==typeof t&&(r=(0,s.Jq)(f,h,`${e}${"default"===t?"":(0,n.Z)(t)}`,t)),!1===u)?r:{[u]:r}};return(0,o.k9)(a,t,p)}return function t(r){var n;let{sx:s,theme:l={}}=r||{};if(!s)return null;let u=null!=(n=l.unstable_sxConfig)?n:a.Z;function c(r){let n=r;if("function"==typeof r)n=r(l);else if("object"!=typeof r)return r;if(!n)return null;let s=(0,o.W8)(l.breakpoints),a=Object.keys(s),c=s;return Object.keys(n).forEach(r=>{var s;let a="function"==typeof(s=n[r])?s(l):s;if(null!=a){if("object"==typeof a){if(u[r])c=(0,i.Z)(c,e(r,a,l,u));else{let e=(0,o.k9)({theme:l},a,e=>({[r]:e}));(function(...e){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]),r=new Set(t);return e.every(e=>r.size===Object.keys(e).length)})(e,a)?c[r]=t({sx:a,theme:l}):c=(0,i.Z)(c,e)}}else c=(0,i.Z)(c,e(r,a,l,u))}}),(0,o.L7)(a,c)}return Array.isArray(s)?s.map(c):c(s)}}();l.filterProps=["sx"],t.Z=l},9718:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(6500),i=r(7294),s=r(2443),o=function(e=null){let t=i.useContext(s.T);return t&&0!==Object.keys(t).length?t:e};let a=(0,n.Z)();var l=function(e=a){return o(e)}},7078:function(e,t){"use strict";let r;let n=e=>e,i=(r=n,{configure(e){r=e},generate:e=>r(e),reset(){r=n}});t.Z=i},8320:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(1387);function i(e){if("string"!=typeof e)throw Error((0,n.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},4780:function(e,t,r){"use strict";function n(e,t,r){let n={};return Object.keys(e).forEach(i=>{n[i]=e[i].reduce((e,n)=>{if(n){let i=t(n);""!==i&&e.push(i),r&&r[n]&&e.push(r[n])}return e},[]).join(" ")}),n}r.d(t,{Z:function(){return n}})},6508:function(e,t,r){"use strict";function n(...e){return e.reduce((e,t)=>null==t?e:function(...r){e.apply(this,r),t.apply(this,r)},()=>{})}r.d(t,{Z:function(){return n}})},7596:function(e,t,r){"use strict";function n(e,t=166){let r;function n(...i){let s=()=>{e.apply(this,i)};clearTimeout(r),r=setTimeout(s,t)}return n.clear=()=>{clearTimeout(r)},n}r.d(t,{Z:function(){return n}})},9766:function(e,t,r){"use strict";r.d(t,{Z:function(){return function e(t,r,s={clone:!0}){let o=s.clone?(0,n.Z)({},t):t;return i(t)&&i(r)&&Object.keys(r).forEach(n=>{"__proto__"!==n&&(i(r[n])&&n in t&&i(t[n])?o[n]=e(t[n],r[n],s):s.clone?o[n]=i(r[n])?function e(t){if(!i(t))return t;let r={};return Object.keys(t).forEach(n=>{r[n]=e(t[n])}),r}(r[n]):r[n]:o[n]=r[n])}),o}}});var n=r(7462);function i(e){return null!==e&&"object"==typeof e&&e.constructor===Object}},1387:function(e,t,r){"use strict";function n(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}r.d(t,{Z:function(){return n}})},4867:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7078);let i={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function s(e,t,r="Mui"){let s=i[t];return s?`${r}-${s}`:`${n.Z.generate(e)}-${t}`}},1588:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(4867);function i(e,t,r="Mui"){let i={};return t.forEach(t=>{i[t]=(0,n.Z)(e,t,r)}),i}},7094:function(e,t,r){"use strict";function n(e){return e&&e.ownerDocument||document}r.d(t,{Z:function(){return n}})},8290:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7094);function i(e){let t=(0,n.Z)(e);return t.defaultView||window}},7960:function(e,t,r){"use strict";function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:function(){return n}})},6600:function(e,t,r){"use strict";var n=r(7294);let i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;t.Z=i},3633:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),i=r(6600);function s(e){let t=n.useRef(e);return(0,i.Z)(()=>{t.current=e}),n.useCallback((...e)=>(0,t.current)(...e),[])}},67:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),i=r(7960);function s(...e){return n.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,i.Z)(e,t)})},e)}},7579:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n,i=r(7294);let s=0,o=(n||(n=r.t(i,2))).useId;function a(e){if(void 0!==o){let t=o();return null!=e?e:t}return function(e){let[t,r]=i.useState(e);return i.useEffect(()=>{null==t&&r(`mui-${s+=1}`)},[t]),e||t}(e)}},6741:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[B]}function s(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===q}(e)||Array.isArray(e)||!!e[z]||!!(null===(t=e.constructor)||void 0===t?void 0:t[z])||h(e)||d(e))}function o(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:K)(e).forEach(function(n){r&&"symbol"==typeof n||t(n,e[n],e)}):e.forEach(function(r,n){return t(n,r,e)})}function a(e){var t=e[B];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:h(e)?2:d(e)?3:0}function l(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t,r){var n=a(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function c(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e){return F&&e instanceof Map}function d(e){return U&&e instanceof Set}function f(e){return e.o||e.t}function p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=H(e);delete t[B];for(var r=K(t),n=0;n<r.length;n++){var i=r[n],s=t[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function m(e,t){return void 0===t&&(t=!1),y(e)||i(e)||!s(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=g),Object.freeze(e),t&&o(e,function(e,t){return m(t,!0)},!0)),e}function g(){n(2)}function y(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function v(e){var t=W[e];return t||n(18,e),t}function b(e,t){t&&(v("Patches"),e.u=[],e.s=[],e.v=t)}function w(e){_(e),e.p.forEach(I),e.p=null}function _(e){e===M&&(M=e.l)}function E(e){return M={p:[],l:M,h:e,m:!0,_:0}}function I(e){var t=e[B];0===t.i||1===t.i?t.j():t.g=!0}function S(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.O||v("ES5").S(t,e,i),i?(r[B].P&&(w(t),n(4)),s(e)&&(e=T(t,e),t.l||C(t,e)),t.u&&v("Patches").M(r[B].t,e,t.u,t.s)):e=T(t,r,[]),w(t),t.u&&t.v(t.u,t.s),e!==$?e:void 0}function T(e,t,r){if(y(t))return t;var n=t[B];if(!n)return o(t,function(i,s){return k(e,n,t,i,s,r)},!0),t;if(n.A!==e)return t;if(!n.P)return C(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=p(n.k):n.o,s=i,a=!1;3===n.i&&(s=new Set(i),i.clear(),a=!0),o(s,function(t,s){return k(e,n,i,t,s,r,a)}),C(e,i,!1),r&&e.u&&v("Patches").N(n,r,e.u,e.s)}return n.o}function k(e,t,r,n,o,a,c){if(i(o)){var h=T(e,o,a&&t&&3!==t.i&&!l(t.R,n)?a.concat(n):void 0);if(u(r,n,h),!i(h))return;e.m=!1}else c&&r.add(o);if(s(o)&&!y(o)){if(!e.h.D&&e._<1)return;T(e,o),t&&t.A.l||C(e,o)}}function C(e,t,r){void 0===r&&(r=!1),!e.l&&e.h.D&&e.m&&m(t,r)}function A(e,t){var r=e[B];return(r?f(r):e)[t]}function O(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function x(e){e.P||(e.P=!0,e.l&&x(e.l))}function N(e){e.o||(e.o=p(e.t))}function R(e,t,r){var n,i,s,o,a,l,u,c=h(t)?v("MapSet").F(t,r):d(t)?v("MapSet").T(t,r):e.O?(s=i={i:(n=Array.isArray(t))?1:0,A:r?r.A:M,P:!1,I:!1,R:{},l:r,t:t,k:null,o:null,j:null,C:!1},o=Z,n&&(s=[i],o=G),l=(a=Proxy.revocable(s,o)).revoke,u=a.proxy,i.k=u,i.j=l,u):v("ES5").J(t,r);return(r?r.A:M).p.push(c),c}function P(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return p(e)}r.d(t,{xC:function(){return eT},oM:function(){return eA}});var D,L,M,j="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),F="undefined"!=typeof Map,U="undefined"!=typeof Set,V="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,$=j?Symbol.for("immer-nothing"):((L={})["immer-nothing"]=!0,L),z=j?Symbol.for("immer-draftable"):"__$immer_draftable",B=j?Symbol.for("immer-state"):"__$immer_state",q=""+Object.prototype.constructor,K="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,H=Object.getOwnPropertyDescriptors||function(e){var t={};return K(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},W={},Z={get:function(e,t){if(t===B)return e;var r,n,i=f(e);if(!l(i,t))return(n=O(i,t))?"value"in n?n.value:null===(r=n.get)||void 0===r?void 0:r.call(e.k):void 0;var o=i[t];return e.I||!s(o)?o:o===A(e.t,t)?(N(e),e.o[t]=R(e.A.h,o,e)):o},has:function(e,t){return t in f(e)},ownKeys:function(e){return Reflect.ownKeys(f(e))},set:function(e,t,r){var n=O(f(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var i=A(f(e),t),s=null==i?void 0:i[B];if(s&&s.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(c(r,i)&&(void 0!==r||l(e.t,t)))return!0;N(e),x(e)}return e.o[t]===r&&(void 0!==r||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==A(e.t,t)||t in e.t?(e.R[t]=!1,N(e),x(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=f(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},G={};o(Z,function(e,t){G[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),G.deleteProperty=function(e,t){return G.set.call(this,e,t,void 0)},G.set=function(e,t,r){return Z.set.call(this,e[0],t,r,e[0])};var X=new(function(){function e(e){var t=this;this.O=V,this.D=!0,this.produce=function(e,r,i){if("function"==typeof e&&"function"!=typeof r){var o,a=r;return r=e,function(e){var n=this;void 0===e&&(e=a);for(var i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return t.produce(e,function(e){var t;return(t=r).call.apply(t,[n,e].concat(s))})}}if("function"!=typeof r&&n(6),void 0!==i&&"function"!=typeof i&&n(7),s(e)){var l=E(t),u=R(t,e,void 0),c=!0;try{o=r(u),c=!1}finally{c?w(l):_(l)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return b(l,i),S(e,l)},function(e){throw w(l),e}):(b(l,i),S(o,l))}if(!e||"object"!=typeof e){if(void 0===(o=r(e))&&(o=e),o===$&&(o=void 0),t.D&&m(o,!0),i){var h=[],d=[];v("Patches").M(e,o,h,d),i(h,d)}return o}n(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return t.produceWithPatches(r,function(t){return e.apply(void 0,[t].concat(i))})};var n,i,s=t.produce(e,r,function(e,t){n=e,i=t});return"undefined"!=typeof Promise&&s instanceof Promise?s.then(function(e){return[e,n,i]}):[s,n,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){s(e)||n(8),i(e)&&(i(t=e)||n(22,t),e=function e(t){if(!s(t))return t;var r,n=t[B],i=a(t);if(n){if(!n.P&&(n.i<4||!v("ES5").K(n)))return n.t;n.I=!0,r=P(t,i),n.I=!1}else r=P(t,i);return o(r,function(t,i){var s;n&&(2===a(s=n.t)?s.get(t):s[t])===i||u(r,t,e(i))}),3===i?new Set(r):r}(t));var t,r=E(this),l=R(this,e,void 0);return l[B].C=!0,_(r),l},t.finishDraft=function(e,t){var r=(e&&e[B]).A;return b(r,t),S(void 0,r)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!V&&n(20),this.O=e},t.applyPatches=function(e,t){for(r=t.length-1;r>=0;r--){var r,n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var s=v("Patches").$;return i(e)?s(e,t):this.produce(e,function(e){return s(e,t)})},e}()),Q=X.produce;function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){!function(e,t,r){var n;n=function(e,t){if("object"!==J(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==J(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===J(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseProxies.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);var er="function"==typeof Symbol&&Symbol.observable||"@@observable",en=function(){return Math.random().toString(36).substring(7).split("").join(".")},ei={INIT:"@@redux/INIT"+en(),REPLACE:"@@redux/REPLACE"+en(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+en()}};function es(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function eo(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw Error(et(15))},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},s=t.map(function(e){return e(i)});return n=es.apply(void 0,s)(r.dispatch),ee(ee({},r),{},{dispatch:n})}}}function ea(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}var el=ea();el.withExtraArgument=ea,r(3454);var eu=(D=function(e,t){return(D=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}D(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),ec=function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},eh=function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},ed=Object.defineProperty,ef=Object.defineProperties,ep=Object.getOwnPropertyDescriptors,em=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,ev=function(e,t,r){return t in e?ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},eb=function(e,t){for(var r in t||(t={}))eg.call(t,r)&&ev(e,r,t[r]);if(em)for(var n=0,i=em(t);n<i.length;n++){var r=i[n];ey.call(t,r)&&ev(e,r,t[r])}return e},ew=function(e,t){return ef(e,ep(t))},e_="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?es:es.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var eE=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return eu(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,eh([void 0],e[0].concat(this)))):new(t.bind.apply(t,eh([void 0],e.concat(this))))},t}(Array),eI=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return eu(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,eh([void 0],e[0].concat(this)))):new(t.bind.apply(t,eh([void 0],e.concat(this))))},t}(Array);function eS(e){return s(e)?Q(e,function(){}):e}function eT(e){var t,r=function(e){var t,r,n,i;return void 0===(t=e)&&(t={}),n=void 0===(r=t.thunk)||r,t.immutableCheck,t.serializableCheck,i=new eE,n&&("boolean"==typeof n?i.push(el):i.push(el.withExtraArgument(n.extraArgument))),i},n=e||{},i=n.reducer,s=void 0===i?void 0:i,o=n.middleware,a=void 0===o?r():o,l=n.devTools,u=void 0===l||l,c=n.preloadedState,h=n.enhancers,d=void 0===h?void 0:h;if("function"==typeof s)t=s;else if(function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}(s))t=function(e){for(var t,r=Object.keys(e),n={},i=0;i<r.length;i++){var s=r[i];"function"==typeof e[s]&&(n[s]=e[s])}var o=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:ei.INIT}))throw Error(et(12));if(void 0===r(void 0,{type:ei.PROBE_UNKNOWN_ACTION()}))throw Error(et(13))})}(n)}catch(e){t=e}return function(e,r){if(void 0===e&&(e={}),t)throw t;for(var i=!1,s={},a=0;a<o.length;a++){var l=o[a],u=n[l],c=e[l],h=u(c,r);if(void 0===h)throw r&&r.type,Error(et(14));s[l]=h,i=i||h!==c}return(i=i||o.length!==Object.keys(e).length)?s:e}}(s);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var f=a;"function"==typeof f&&(f=f(r));var p=eo.apply(void 0,f),m=es;u&&(m=e_(eb({trace:!1},"object"==typeof u&&u)));var g=new eI(p),y=g;return Array.isArray(d)?y=eh([p],d):"function"==typeof d&&(y=d(g)),function e(t,r,n){if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(et(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(et(1));return n(e)(t,r)}if("function"!=typeof t)throw Error(et(2));var i,s=t,o=r,a=[],l=a,u=!1;function c(){l===a&&(l=a.slice())}function h(){if(u)throw Error(et(3));return o}function d(e){if("function"!=typeof e)throw Error(et(4));if(u)throw Error(et(5));var t=!0;return c(),l.push(e),function(){if(t){if(u)throw Error(et(6));t=!1,c();var r=l.indexOf(e);l.splice(r,1),a=null}}}function f(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(et(7));if(void 0===e.type)throw Error(et(8));if(u)throw Error(et(9));try{u=!0,o=s(o,e)}finally{u=!1}for(var t=a=l,r=0;r<t.length;r++)(0,t[r])();return e}return f({type:ei.INIT}),(i={dispatch:f,subscribe:d,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error(et(10));s=e,f({type:ei.REPLACE})}})[er]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw Error(et(11));function t(){e.next&&e.next(h())}return t(),{unsubscribe:d(t)}}})[er]=function(){return this},e},i}(t,void 0===c?void 0:c,m.apply(void 0,y))}function ek(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var i=t.apply(void 0,r);if(!i)throw Error("prepareAction did not return an object");return eb(eb({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function eC(e){var t,r={},n=[],i={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(n in r)throw Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,i},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[r,n,t]}function eA(e){var t,r=e.name;if(!r)throw Error("`name` is a required option for createSlice");var n="function"==typeof e.initialState?e.initialState:eS(e.initialState),o=e.reducers||{},a=Object.keys(o),l={},u={},c={};function h(){var t="function"==typeof e.extraReducers?eC(e.extraReducers):[e.extraReducers],r=t[0],o=t[1],a=void 0===o?[]:o,l=t[2],c=void 0===l?void 0:l,h=eb(eb({},void 0===r?{}:r),u);return function(e,t,r,n){void 0===r&&(r=[]);var o,a="function"==typeof t?eC(t):[t,r,void 0],l=a[0],u=a[1],c=a[2];if("function"==typeof e)o=function(){return eS(e())};else{var h=eS(e);o=function(){return h}}function d(e,t){void 0===e&&(e=o());var r=eh([l[t.type]],u.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===r.filter(function(e){return!!e}).length&&(r=[c]),r.reduce(function(e,r){if(r){if(i(e)){var n=r(e,t);return void 0===n?e:n}if(s(e))return Q(e,function(e){return r(e,t)});var n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e},e)}return d.getInitialState=o,d}(n,function(e){for(var t in h)e.addCase(t,h[t]);for(var r=0;r<a.length;r++){var n=a[r];e.addMatcher(n.matcher,n.reducer)}c&&e.addDefaultCase(c)})}return a.forEach(function(e){var t,n,i=o[e],s=r+"/"+e;"reducer"in i?(t=i.reducer,n=i.prepare):t=i,l[e]=t,u[s]=t,c[e]=n?ek(s,n):ek(s)}),{name:r,reducer:function(e,r){return t||(t=h()),t(e,r)},actions:c,caseReducers:l,getInitialState:function(){return t||(t=h()),t.getInitialState()}}}var eO=function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},ex=["name","message","stack","code"],eN=function(e,t){this.payload=e,this.meta=t},eR=function(e,t){this.payload=e,this.meta=t},eP=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0;r<ex.length;r++){var n=ex[r];"string"==typeof e[n]&&(t[n]=e[n])}return t}return{message:String(e)}};function eD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}!function(){function e(e,t,r){var n=ek(e+"/fulfilled",function(e,t,r,n){return{payload:e,meta:ew(eb({},n||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}}),i=ek(e+"/pending",function(e,t,r){return{payload:void 0,meta:ew(eb({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),s=ek(e+"/rejected",function(e,t,n,i,s){return{payload:i,error:(r&&r.serializeError||eP)(e||"Rejected"),meta:ew(eb({},s||{}),{arg:n,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(a,l,u){var c,h=(null==r?void 0:r.idGenerator)?r.idGenerator(e):eO(),d=new o;function f(e){c=e,d.abort()}var p=function(){var o,p;return o=this,p=function(){var o,p,m,g,y,v;return ec(this,function(b){switch(b.label){case 0:var w;if(b.trys.push([0,4,,5]),!(null!==(w=g=null==(o=null==r?void 0:r.condition)?void 0:o.call(r,e,{getState:l,extra:u}))&&"object"==typeof w&&"function"==typeof w.then))return[3,2];return[4,g];case 1:g=b.sent(),b.label=2;case 2:if(!1===g||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=new Promise(function(e,t){return d.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),a(i(h,e,null==(p=null==r?void 0:r.getPendingMeta)?void 0:p.call(r,{requestId:h,arg:e},{getState:l,extra:u}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:a,getState:l,extra:u,requestId:h,signal:d.signal,abort:f,rejectWithValue:function(e,t){return new eN(e,t)},fulfillWithValue:function(e,t){return new eR(e,t)}})).then(function(t){if(t instanceof eN)throw t;return t instanceof eR?n(t.payload,h,e,t.meta):n(t,h,e)})])];case 3:return m=b.sent(),[3,5];case 4:return m=(v=b.sent())instanceof eN?s(null,h,e,v.payload,v.meta):s(v,h,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&s.match(m)&&m.meta.condition||a(m),[2,m]}})},new Promise(function(e,t){var r=function(e){try{i(p.next(e))}catch(e){t(e)}},n=function(e){try{i(p.throw(e))}catch(e){t(e)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,n)};i((p=p.apply(o,null)).next())})}();return Object.assign(p,{abort:f,requestId:h,arg:e,unwrap:function(){return p.then(eD)}})}},{pending:i,rejected:s,fulfilled:n,typePrefix:e})}e.withTypes=function(){return e}}();var eL="listenerMiddleware";ek(eL+"/add"),ek(eL+"/removeAll"),ek(eL+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==r.g?r.g:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function e(e,t){var r=s[e];return r?r.enumerable=t:s[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[B];return Z.get(t,e)},set:function(t){var r=this[B];Z.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][B];if(!i.P)switch(i.i){case 5:n(i)&&x(i);break;case 4:r(i)&&x(i)}}}function r(e){for(var t=e.t,r=e.k,n=K(r),i=n.length-1;i>=0;i--){var s=n[i];if(s!==B){var o=t[s];if(void 0===o&&!l(t,s))return!0;var a=r[s],u=a&&a[B];if(u?u.t!==o:!c(a,o))return!0}}var h=!!t[B];return n.length!==K(t).length+(h?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var s={};W.ES5||(W.ES5={J:function(t,r){var n=Array.isArray(t),i=function(t,r){if(t){for(var n=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(n,""+i,e(i,!0));return n}var s=H(r);delete s[B];for(var o=K(s),a=0;a<o.length;a++){var l=o[a];s[l]=e(l,t||!!s[l].enumerable)}return Object.create(Object.getPrototypeOf(r),s)}(n,t),s={i:n?5:4,A:r?r.A:M,P:!1,I:!1,R:{},l:r,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,B,{value:s,writable:!0}),i},S:function(e,r,s){s?i(r)&&r[B].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[B];if(r){var i=r.t,s=r.k,a=r.R,u=r.i;if(4===u)o(s,function(t){t!==B&&(void 0!==i[t]||l(i,t)?a[t]||e(s[t]):(a[t]=!0,x(r)))}),o(i,function(e){void 0!==s[e]||l(s,e)||(a[e]=!1,x(r))});else if(5===u){if(n(r)&&(x(r),a.length=!0),s.length<i.length)for(var c=s.length;c<i.length;c++)a[c]=!1;else for(var h=i.length;h<s.length;h++)a[h]=!0;for(var d=Math.min(s.length,i.length),f=0;f<d;f++)s.hasOwnProperty(f)||(a[f]=!0),void 0===a[f]&&e(s[f])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}()},6010:function(e,t,r){"use strict";function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(n&&(n+=" "),n+=t);return n}r.r(t),r.d(t,{clsx:function(){return n}}),t.default=n},8679:function(e,t,r){"use strict";var n=r(1296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return n.isMemo(e)?o:a[e.$$typeof]||i}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=f(r);i&&i!==p&&e(t,i,n)}var o=c(r);h&&(o=o.concat(h(r)));for(var a=l(t),m=l(r),g=0;g<o.length;++g){var y=o[g];if(!s[y]&&!(n&&n[y])&&!(m&&m[y])&&!(a&&a[y])){var v=d(r,y);try{u(t,y,v)}catch(e){}}}}return t}},6103:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case h:case s:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case m:case l:return e;default:return t}}case i:return t}}}function E(e){return _(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return E(e)||_(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return _(e)===u},t.isContextProvider=function(e){return _(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return _(e)===d},t.isFragment=function(e){return _(e)===s},t.isLazy=function(e){return _(e)===g},t.isMemo=function(e){return _(e)===m},t.isPortal=function(e){return _(e)===i},t.isProfiler=function(e){return _(e)===a},t.isStrictMode=function(e){return _(e)===o},t.isSuspense=function(e){return _(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=_},1296:function(e,t,r){"use strict";e.exports=r(6103)},8858:function(e,t,r){"use strict";r.d(t,{KV:function(){return g},ju:function(){return h}});var n,i=r(7294),s=r(1649),o=r(1163),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t,r,n){return new(r||(r=Promise))(function(i,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,a)}l((n=n.apply(e,t||[])).next())})},u=function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r},h="__NEXT_REDUX_WRAPPER_HYDRATE__",d=function(){return"undefined"==typeof window},f=function(e,t){var r=(void 0===t?{}:t).deserializeState;return r?r(e):e},p=function(e,t){var r=(void 0===t?{}:t).serializeState;return r?r(e):e},m=function(e){var t,r=e.makeStore,i=e.context,s=void 0===i?{}:i,o=function(){return r(s)};if(d()){var a=(null==s?void 0:s.req)||(null===(t=null==s?void 0:s.ctx)||void 0===t?void 0:t.req);return a?(a.__nextReduxWrapperStore||(a.__nextReduxWrapperStore=o()),a.__nextReduxWrapperStore):o()}return n||(n=o()),n},g=function(e,t){void 0===t&&(t={});var r=function(r){var n=r.callback,i=r.context,s=r.addStoreToContext,o=void 0!==s&&s;return l(void 0,void 0,void 0,function(){var r,s,a,l,c;return u(this,function(u){switch(u.label){case 0:if(r=m({context:i,makeStore:e}),t.debug&&console.log("1. getProps created store with state",r.getState()),o&&(i.ctx?i.ctx.store=r:i.store=r),!(l=s=n&&n(r)))return[3,2];return[4,s(i)];case 1:l=u.sent(),u.label=2;case 2:return a=l||{},t.debug&&console.log("3. getProps after dispatches has store state",r.getState()),c=r.getState(),[2,{initialProps:a,initialState:d()?p(c,t):c}]}})})},n=function(e){return function(t){return l(void 0,void 0,void 0,function(){var n,i,s;return u(this,function(o){switch(o.label){case 0:return[4,r({callback:e,context:t})];case 1:return i=(n=o.sent()).initialProps,s=n.initialState,[2,a(a({},i),{props:a(a({},i.props),{initialState:s})})]}})})}},g=function(e,r){r&&e.dispatch({type:h,payload:f(r,t)})},y=function(e,t,r,n,i){var s;r?(g(e,t),g(e,r)):(n||i||t)&&g(e,null!==(s=null!=n?n:i)&&void 0!==s?s:t)},v=function(e,t,r,n,s){var a=(0,o.useRouter)().events,l=(0,i.useRef)(!0);(0,i.useEffect)(function(){var e=function(){l.current=!0};return null==a||a.on("routeChangeStart",e),function(){null==a||a.off("routeChangeStart",e)}},[a]),(0,i.useMemo)(function(){l.current&&(y(e,t,r,n,s),l.current=!1)},[e,t,r,n,s])},b=function(r,n){void 0===n&&(n="useWrappedStore");var s,o,l,u,h,d,f=r.initialState,p=r.initialProps,g=c(r,["initialState","initialProps"]),y=(null==g?void 0:g.__N_SSG)?null===(s=null==g?void 0:g.pageProps)||void 0===s?void 0:s.initialState:null,b=(null==g?void 0:g.__N_SSP)?null===(o=null==g?void 0:g.pageProps)||void 0===o?void 0:o.initialState:null,w=y||b?null:null!==(u=null===(l=null==g?void 0:g.pageProps)||void 0===l?void 0:l.initialState)&&void 0!==u?u:null;t.debug&&console.log("4.",n,"created new store with",{giapState:f,gspState:y,gsspState:b,gippState:w});var _=(0,i.useMemo)(function(){return m({makeStore:e})},[]);v(_,f,y,b,w);var E=g;return p&&p.pageProps&&(E.pageProps=a(a({},p.pageProps),g.pageProps)),(null===(h=null==g?void 0:g.pageProps)||void 0===h?void 0:h.initialState)&&(E=a(a({},g),{pageProps:a({},g.pageProps)}),delete E.pageProps.initialState),(null===(d=null==E?void 0:E.pageProps)||void 0===d?void 0:d.initialProps)&&(E.pageProps=a(a({},E.pageProps),E.pageProps.initialProps),delete E.pageProps.initialProps),{store:_,props:a(a({},p),E)}};return{getServerSideProps:function(e){return function(t){return l(void 0,void 0,void 0,function(){return u(this,function(r){switch(r.label){case 0:return[4,n(e)(t)];case 1:return[2,r.sent()]}})})}},getStaticProps:n,getInitialAppProps:function(e){return function(t){return l(void 0,void 0,void 0,function(){var n,i,s;return u(this,function(o){switch(o.label){case 0:return[4,r({callback:e,context:t,addStoreToContext:!0})];case 1:return i=(n=o.sent()).initialProps,s=n.initialState,[2,a(a({},i),{initialState:s})]}})})}},getInitialPageProps:function(e){return function(t){return l(void 0,void 0,void 0,function(){return u(this,function(n){switch(n.label){case 0:if("getState"in t)return[2,e&&e(t)];return[4,r({callback:e,context:t,addStoreToContext:!0})];case 1:return[2,n.sent()]}})})}},withRedux:function(e){console.warn("/!\\ You are using legacy implementation. Please update your code: use createWrapper() and wrapper.useWrappedStore().");var t=function(r){var n=b(r,t.displayName),o=n.store,l=n.props;return i.createElement(s.zt,{store:o},i.createElement(e,a({},l)))};return t.displayName="withRedux(".concat(e.displayName||e.name||"Component",")"),"getInitialProps"in e&&(t.getInitialProps=e.getInitialProps),t},useWrappedStore:b}}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5863)}])},4024:function(e,t){"use strict";t.Z={src:"/_next/static/media/Beazy-Logo-image.1939ce32.svg",height:621,width:621,blurWidth:0,blurHeight:0}},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,s=r(1598).Z,o=r(7273).Z,a=s(r(7294)),l=i(r(2636)),u=r(7757),c=r(3735),h=r(3341);r(4210);var d=i(r(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,i,s,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,s=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}function y(e){let[t,r]=a.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let v=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:s,qualityInt:l,className:u,imgStyle:c,blurStyle:h,isLazy:d,fetchPriority:f,fill:p,placeholder:m,loading:v,srcString:b,config:w,unoptimized:_,loader:E,onLoadRef:I,onLoadingCompleteRef:S,setBlurComplete:T,setShowAltText:k,onLoad:C,onError:A}=e,O=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return v=d?"lazy":v,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},O,y(f),{loading:v,width:s,height:i,decoding:"async","data-nimg":p?"fill":"1",className:u,style:n({},c,h)},r,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(A&&(e.src=e.src),e.complete&&g(e,b,m,I,S,T,_))},[b,m,I,S,T,A,_,t]),onLoad:e=>{let t=e.currentTarget;g(t,b,m,I,S,T,_)},onError:e=>{k(!0),"blur"===m&&T(!0),A&&A(e)}})))}),b=a.forwardRef((e,t)=>{let r,i;var s,{src:g,sizes:b,unoptimized:w=!1,priority:_=!1,loading:E,className:I,quality:S,width:T,height:k,fill:C,style:A,onLoad:O,onLoadingComplete:x,placeholder:N="empty",blurDataURL:R,fetchPriority:P,layout:D,objectFit:L,objectPosition:M,lazyBoundary:j,lazyRoot:F}=e,U=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let V=a.useContext(h.ImageConfigContext),$=a.useMemo(()=>{let e=f||V||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[V]),z=U,B=z.loader||d.default;delete z.loader;let q="__next_img_default"in B;if(q){if("custom"===$.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:r}=t,n=o(t,["config"]);return e(n)}}if(D){"fill"===D&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];e&&(A=n({},A,e));let t={responsive:"100vw",fill:"100vw"}[D];t&&!b&&(b=t)}let K="",H=m(T),W=m(k);if("object"==typeof(s=g)&&(p(s)||void 0!==s.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,i=e.blurHeight,R=R||e.blurDataURL,K=e.src,!C){if(H||W){if(H&&!W){let t=H/e.width;W=Math.round(e.height*t)}else if(!H&&W){let t=W/e.height;H=Math.round(e.width*t)}}else H=e.width,W=e.height}}let Z=!_&&("lazy"===E||void 0===E);(!(g="string"==typeof g?g:K)||g.startsWith("data:")||g.startsWith("blob:"))&&(w=!0,Z=!1),$.unoptimized&&(w=!0),q&&g.endsWith(".svg")&&!$.dangerouslyAllowSVG&&(w=!0),_&&(P="high");let[G,X]=a.useState(!1),[Q,J]=a.useState(!1),Y=m(S),ee=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:M}:{},Q?{}:{color:"transparent"},A),et="blur"===N&&R&&!G?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:H,heightInt:W,blurWidth:r,blurHeight:i,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:o,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:s,kind:"x"}}(t,i,o),c=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,n)=>"".concat(a({config:t,src:r,quality:s,width:e})," ").concat("w"===u?e:n+1).concat(u)).join(", "),src:a({config:t,src:r,quality:s,width:l[c]})}}({config:$,src:g,unoptimized:w,width:H,quality:Y,sizes:b,loader:B}),en=g,ei=a.useRef(O);a.useEffect(()=>{ei.current=O},[O]);let es=a.useRef(x);a.useEffect(()=>{es.current=x},[x]);let eo=n({isLazy:Z,imgAttributes:er,heightInt:W,widthInt:H,qualityInt:Y,className:I,imgStyle:ee,blurStyle:et,loading:E,config:$,fetchPriority:P,fill:C,unoptimized:w,placeholder:N,loader:B,srcString:en,onLoadRef:ei,onLoadingCompleteRef:es,setBlurComplete:X,setShowAltText:J},z);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},eo,{ref:t})),_?a.default.createElement(l.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:z.crossOrigin},y(P)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,i=r(7273).Z,s=n(r(7294)),o=r(4532),a=r(3353),l=r(1410),u=r(9064),c=r(370),h=r(9955),d=r(4224),f=r(508),p=r(1516),m=r(4266);let g=new Set;function y(e,t,r,n,i){if(i||a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,s=t+"%"+r+"%"+i;if(g.has(s))return;g.add(s)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:l.formatUrl(e)}let b=s.default.forwardRef(function(e,t){let r,n;let{href:l,as:g,children:b,prefetch:w,passHref:_,replace:E,shallow:I,scroll:S,locale:T,onClick:k,onMouseEnter:C,onTouchStart:A,legacyBehavior:O=!1}=e,x=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,O&&("string"==typeof r||"number"==typeof r)&&(r=s.default.createElement("a",null,r));let N=!1!==w,R=s.default.useContext(h.RouterContext),P=s.default.useContext(d.AppRouterContext),D=null!=R?R:P,L=!R,{href:M,as:j}=s.default.useMemo(()=>{if(!R){let e=v(l);return{href:e,as:g?v(g):e}}let[e,t]=o.resolveHref(R,l,!0);return{href:e,as:g?o.resolveHref(R,g):t||e}},[R,l,g]),F=s.default.useRef(M),U=s.default.useRef(j);O&&(n=s.default.Children.only(r));let V=O?n&&"object"==typeof n&&n.ref:t,[$,z,B]=f.useIntersection({rootMargin:"200px"}),q=s.default.useCallback(e=>{(U.current!==j||F.current!==M)&&(B(),U.current=j,F.current=M),$(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[j,V,M,B,$]);s.default.useEffect(()=>{D&&z&&N&&y(D,M,j,{locale:T},L)},[j,M,z,T,N,null==R?void 0:R.locale,D,L]);let K={ref:q,onClick(e){O||"function"!=typeof k||k(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,r,n,i,o,l,u,c,h){let{nodeName:d}=e.currentTarget,f="A"===d.toUpperCase();if(f&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!a.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:o,locale:u,scroll:l}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!h})};c?s.default.startTransition(p):p()}(e,D,M,j,E,I,S,T,L,N)},onMouseEnter(e){O||"function"!=typeof C||C(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),D&&(N||!L)&&y(D,M,j,{locale:T,priority:!0,bypassPrefetchedCheck:!0},L)},onTouchStart(e){O||"function"!=typeof A||A(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),D&&(N||!L)&&y(D,M,j,{locale:T,priority:!0,bypassPrefetchedCheck:!0},L)}};if(u.isAbsoluteUrl(j))K.href=j;else if(!O||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==T?T:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&p.getDomainLocale(j,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);K.href=t||m.addBasePath(c.addLocale(j,e,null==R?void 0:R.defaultLocale))}return O?s.default.cloneElement(n,K):s.default.createElement("a",Object.assign({},x,K),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:l}=e,u=l||!s,[c,h]=n.useState(!1),d=n.useRef(null),f=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(s){if(u||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:i,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:s,elements:i},a.push(r),o.set(r,t),t}(r);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),o.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&h(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=i.requestIdleCallback(()=>h(!0));return()=>i.cancelIdleCallback(e)}},[u,r,t,c,d.current]);let p=n.useCallback(()=>{h(!1)},[]);return[f,c,p]};var n=r(7294),i=r(29);let s="function"==typeof IntersectionObserver,o=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:o}=e,a=n||t,l=i||r,u=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9808:function(e,t,r){"use strict";r.d(t,{l:function(){return s},db:function(){return o}});var n=r(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","9.20.0","app");var i=r(1294);let s=(0,n.ZF)({apiKey:"AIzaSyBmH4pS54BJ2_XanCDXlA8JJK0MRuORrdk",authDomain:"beazy-dev.firebaseapp.com",projectId:"beazy-dev",storageBucket:"beazy-dev.appspot.com",messagingSenderId:"989912045561",appId:"1:989912045561:web:468c4ac57d91b0f65e4f28",measurementId:"G-WH6YMDBDHS"}),o=(0,i.ad)(s)},2068:function(e,t,r){"use strict";r.d(t,{Sk:function(){return rc},uv:function(){return ru},Am:function(){return rl},Mx:function(){return rh}});var n,i=r(4444),s=r(5816);function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}var a=r(3333),l=r(740);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new i.LL("auth","Firebase",u()),h=new a.Yd("@firebase/auth");function d(e,...t){h.logLevel<=a.in.ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function m(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return c.create(e,...t)}function g(e,t,...r){if(!e)throw m(t,...r)}function y(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){return"http:"===w()||"https:"===w()}function w(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||y("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(b()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){e.emulator||y("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},T=new _(3e4,6e4);function k(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,r,n,s={}){return A(e,s,async()=>{let s={},o={};n&&("GET"===t?o=n:s={body:JSON.stringify(n)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),I.fetch()(x(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function A(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},S),t);try{let t=new N(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw R(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let t=s.ok?o.errorMessage:o.error.message,[r,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw R(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===r)throw R(e,"email-already-in-use",o);if("USER_DISABLED"===r)throw R(e,"user-disabled",o);let l=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,r){let n=Object.assign(Object.assign({},u()),{[t]:r}),s=new i.LL("auth","Firebase",n);return s.create(t,{appName:e.name})}(e,l,a);f(e,l)}}catch(t){if(t instanceof i.ZR)throw t;f(e,"network-request-failed",{message:String(t)})}}async function O(e,t,r,n,i={}){let s=await C(e,t,r,n,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function x(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`}class N{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),T.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function R(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=p(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function D(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function M(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),s=F(n);g(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:L(j(s.auth_time)),issuedAtTime:L(j(s.iat)),expirationTime:L(j(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function j(e){return 1e3*Number(e)}function F(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(r);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=L(this.lastLoginAt),this.creationTime=L(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e){var t;let r=e.auth,n=await e.getIdToken(),i=await U(e,D(r,{idToken:n}));g(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=o(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,a),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function B(e){let t=(0,i.m9)(e);await z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){let r=await A(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,o=x(e,n,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",I.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(void 0!==e.idToken,"internal-error"),g(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=F(e);return g(t,"internal-error"),g(void 0!==t.exp,"internal-error"),g(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await q(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new K;return r&&(g("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(g("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(g("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){g("string"==typeof e||void 0===e,"internal-error",{appName:t})}class W{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await U(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return M(this,e)}reload(){return B(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new W(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await z(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await U(this,P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,y=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:I}=t;g(b&&I,e,"internal-error");let S=K.fromJSON(this.name,I);g("string"==typeof b,e,"internal-error"),H(c,e.name),H(h,e.name),g("boolean"==typeof w,e,"internal-error"),g("boolean"==typeof _,e,"internal-error"),H(d,e.name),H(f,e.name),H(p,e.name),H(m,e.name),H(y,e.name),H(v,e.name);let T=new W({uid:b,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:y,lastLoginAt:v});return E&&Array.isArray(E)&&(T.providerData=E.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new K;n.updateFromServerResponse(t);let i=new W({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await z(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z=new Map;function G(e){e instanceof Function||y("Expected a class definition");let t=Z.get(e);return t?(t instanceof e||y("Instance stored in cache mismatched with class"),t):(t=new e,Z.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t,r){return`firebase:${e}:${t}:${r}`}X.type="NONE";class J{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=Q(this.userKey,n.apiKey,i),this.fullPersistenceKey=Q("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?W._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new J(G(X),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||G(X),s=Q(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=W._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new J(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(en(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(es(t))return"Blackberry";if(eo(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||er(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function ee(e=(0,i.z$)()){return/firefox\//i.test(e)}function et(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function er(e=(0,i.z$)()){return/crios\//i.test(e)}function en(e=(0,i.z$)()){return/iemobile/i.test(e)}function ei(e=(0,i.z$)()){return/android/i.test(e)}function es(e=(0,i.z$)()){return/blackberry/i.test(e)}function eo(e=(0,i.z$)()){return/webos/i.test(e)}function ea(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function el(e=(0,i.z$)()){return ea(e)||ei(e)||eo(e)||es(e)||/windows phone/i.test(e)||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t=[]){let r;switch(e){case"Browser":r=Y((0,i.z$)());break;case"Worker":r=`${Y((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.Jn}/${n}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e){return(await C(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function eh(e,t){return C(e,"GET","/v2/recaptchaConfig",k(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){return void 0!==e&&void 0!==e.getResponse}function ef(e){return void 0!==e&&void 0!==e.enterprise}class ep{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function em(e){return new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)})}function eg(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ey{constructor(e){this.type="recaptcha-enterprise",this.auth=e_(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{eh(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new ep(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;ef(i)?i.enterprise.ready(()=>{try{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(e=>{n(e)})}catch(e){n(e)}}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&ef(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}em("https://www.google.com/recaptcha/enterprise.js?render="+r).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function ev(e,t,r,n=!1){let i;let s=new ey(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eE(this),this.idTokenSubscription=new eE(this),this.beforeStateQueue=new eb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=G(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await J.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await z(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(G(e))})}async initializeRecaptchaConfig(){let e=await eh(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ep(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){let e=new ey(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&G(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[G(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(g(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){h.logLevel<=a.in.WARN&&h.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function e_(e){return(0,i.m9)(e)}class eE{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eI(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eS(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}async function ek(e,t){return C(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(e,t){return O(e,"POST","/v1/accounts:signInWithPassword",k(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",k(e,t))}async function eO(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",k(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex extends eT{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new ex(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ex(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":let r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return eC(e,r).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await ev(e,r,"signInWithPassword");return eC(e,t)}});{let t=await ev(e,r,"signInWithPassword");return eC(e,t)}case"emailLink":return eA(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ek(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eO(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(e,t){return O(e,"POST","/v1/accounts:signInWithIdp",k(e,t))}class eR extends eT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eR(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=o(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eR(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eN(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eN(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eN(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",k(e,t))}async function eD(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",k(e,t))}async function eL(e,t){let r=await O(e,"POST","/v1/accounts:signInWithPhoneNumber",k(e,t));if(r.temporaryProof)throw R(e,"account-exists-with-different-credential",r);return r}let eM={USER_NOT_FOUND:"user-not-found"};async function ej(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return O(e,"POST","/v1/accounts:signInWithPhoneNumber",k(e,r),eM)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF extends eT{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eF({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eF({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eD(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eL(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ej(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eF({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eU{constructor(e){var t,r,n,s,o,a;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);g(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=n?(0,i.zd)((0,i.pd)(n)).link:null;return s||n||r||t||e}(e);try{return new eU(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this.providerId=eV.PROVIDER_ID}static credential(e,t){return ex._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eU.parseLink(t);return g(r,"argument-error"),ex._fromEmailAndCode(e,r.code,r.tenantId)}}eV.PROVIDER_ID="password",eV.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eV.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez extends e${constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB extends ez{constructor(){super("facebook.com")}static credential(e){return eR._fromParams({providerId:eB.PROVIDER_ID,signInMethod:eB.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eB.credentialFromTaggedObject(e)}static credentialFromError(e){return eB.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eB.credential(e.oauthAccessToken)}catch(e){return null}}}eB.FACEBOOK_SIGN_IN_METHOD="facebook.com",eB.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq extends ez{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eR._fromParams({providerId:eq.PROVIDER_ID,signInMethod:eq.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eq.credentialFromTaggedObject(e)}static credentialFromError(e){return eq.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return eq.credential(t,r)}catch(e){return null}}}eq.GOOGLE_SIGN_IN_METHOD="google.com",eq.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK extends ez{constructor(){super("github.com")}static credential(e){return eR._fromParams({providerId:eK.PROVIDER_ID,signInMethod:eK.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eK.credentialFromTaggedObject(e)}static credentialFromError(e){return eK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eK.credential(e.oauthAccessToken)}catch(e){return null}}}eK.GITHUB_SIGN_IN_METHOD="github.com",eK.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH extends ez{constructor(){super("twitter.com")}static credential(e,t){return eR._fromParams({providerId:eH.PROVIDER_ID,signInMethod:eH.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eH.credentialFromTaggedObject(e)}static credentialFromError(e){return eH.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eH.credential(t,r)}catch(e){return null}}}eH.TWITTER_SIGN_IN_METHOD="twitter.com",eH.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await W._fromIdTokenResponse(e,r,n),s=eZ(r),o=new eW({user:i,providerId:s,_tokenResponse:r,operationType:t});return o}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=eZ(r);return new eW({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function eZ(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eG.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eG(e,t,r,n)}}function eX(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw eG._fromErrorAndOperation(e,r,t,n);throw r})}async function eQ(e,t,r=!1){let n=await U(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return eW._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eJ(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await U(e,eX(n,i,t,e),r);g(s.idToken,n,"internal-error");let o=F(s.idToken);g(o,n,"internal-error");let{sub:a}=o;return g(e.uid===a,n,"user-mismatch"),eW._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eY(e,t,r=!1){let n="signIn",i=await eX(e,n,t),s=await eW._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function e0(e,t){return eY(e_(e),t)}new WeakMap;let e1="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e1,"1"),this.storage.removeItem(e1),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e5 extends e2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return et(e)||ea(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e5.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3 extends e2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e3.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new e4(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e6(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}e4.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=e6("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e9(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e7(){return void 0!==e9().WorkerGlobalScope&&"function"==typeof e9().importScripts}async function te(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt="firebaseLocalStorageDb",tr="firebaseLocalStorage",tn="fbase_key";class ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ts(e,t){return e.transaction([tr],t?"readwrite":"readonly").objectStore(tr)}function to(){let e=indexedDB.open(tt,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(tr,{keyPath:tn})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(tr)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(tt);return new ti(e).toPromise()}(),t(await to()))})})}async function ta(e,t,r){let n=ts(e,!0).put({[tn]:t,value:r});return new ti(n).toPromise()}async function tl(e,t){let r=ts(e,!1).get(t),n=await new ti(r).toPromise();return void 0===n?null:n.value}function tu(e,t){let r=ts(e,!0).delete(t);return new ti(r).toPromise()}class tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await to()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e7()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e4._getInstance(e7()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await te(),!this.activeServiceWorker)return;this.sender=new e8(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await to();return await ta(e,e1,"1"),await tu(e,e1),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ta(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tl(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=ts(e,!1).getAll();return new ti(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tc.type="LOCAL";class th{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let r=this.counter;return this._widgets.set(r,new td(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;let r=e||1e12;null===(t=this._widgets.get(r))||void 0===t||t.delete(),this._widgets.delete(r)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class td{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let n="string"==typeof e?document.getElementById(e):e;g(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<50;e++)t.push(r.charAt(Math.floor(Math.random()*r.length)));return t.join("")}(0);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf=eg("rcb"),tp=new _(3e4,6e4);class tm{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=e9().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return(g(t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t),e,"argument-error"),this.shouldResolveImmediately(t)&&ed(e9().grecaptcha))?Promise.resolve(e9().grecaptcha):new Promise((r,n)=>{let s=e9().setTimeout(()=>{n(p(e,"network-request-failed"))},tp.get());e9()[tf]=()=>{e9().clearTimeout(s),delete e9()[tf];let i=e9().grecaptcha;if(!i||!ed(i)){n(p(e,"internal-error"));return}let o=i.render;i.render=(e,t)=>{let r=o(e,t);return this.counter++,r},this.hostLanguage=t,r(i)};let o=`https://www.google.com/recaptcha/api.js??${(0,i.xO)({onload:tf,render:"explicit",hl:t})}`;em(o).catch(()=>{clearTimeout(s),n(p(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=e9().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class tg{async load(e){return new th(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty="recaptcha",tv={theme:"light",type:"image"};class tb{constructor(e,t=Object.assign({},tv),r){this.parameters=t,this.type=ty,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=e_(r),this.isInvisible="invisible"===this.parameters.size,g("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let n="string"==typeof e?document.getElementById(e):e;g(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tg:new tm,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(r=>{let n=e=>{e&&(this.tokenChangeListeners.delete(n),r(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){g(!this.parameters.sitekey,this.auth,"argument-error"),g(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),g("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let r=e9()[e];"function"==typeof r&&r(t)}}}assertNotDestroyed(){g(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;g(b()&&!e7(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await ec(this.auth);g(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return g(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=eF._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function t_(e,t,r){let n=e_(e),s=await tE(n,t,(0,i.m9)(r));return new tw(s,e=>e0(n,e))}async function tE(e,t,r){var n,i,s;let o=await r.verify();try{let a;if(g("string"==typeof o,e,"argument-error"),g(r.type===ty,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){g("enroll"===t.type,e,"internal-error");let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},C(e,"POST","/v2/accounts/mfaEnrollment:start",k(e,i)));return r.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");let r=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;g(r,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}},C(e,"POST","/v2/accounts/mfaSignIn:start",k(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eP(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.providerId=tI.PROVIDER_ID,this.auth=e_(e)}verifyPhoneNumber(e,t){return tE(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eF._fromVerification(e,t)}static credentialFromResult(e){return tI.credentialFromTaggedObject(e)}static credentialFromError(e){return tI.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eF._fromTokenResponse(t,r):null}}tI.PROVIDER_ID="phone",tI.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS extends eT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eN(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eN(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eN(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tT(e){return eY(e.auth,new tS(e),e.bypassAuthState)}function tk(e){let{auth:t,user:r}=e;return g(r,t,"internal-error"),eJ(r,new tS(e),e.bypassAuthState)}async function tC(e){let{auth:t,user:r}=e;return g(r,t,"internal-error"),eQ(r,new tS(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tT;case"linkViaPopup":case"linkViaRedirect":return tC;case"reauthViaPopup":case"reauthViaRedirect":return tk;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO=new _(2e3,1e4);class tx extends tA{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tx.currentPopupAction&&tx.currentPopupAction.cancel(),tx.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||y("Popup operations only handle one event");let e=e6();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tx.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tO.get())};e()}}tx.currentPopupAction=null;let tN=new Map;class tR extends tA{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tN.get(this.auth._key());if(!e){try{let t=await tP(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}tN.set(this.auth._key(),e)}return this.bypassAuthState||tN.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tP(e,t){let r=Q("pendingRedirect",t.config.apiKey,t.name),n=G(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tD(e,t){tN.set(e._key(),t)}async function tL(e,t,r=!1){let n=e_(e),i=t?G(t):(g(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new tR(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class tM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tF(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tF(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(p(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tj(e))}saveEventToCache(e){this.cachedEventUids.add(tj(e)),this.lastProcessedEventTime=Date.now()}}function tj(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tF({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tU(e,t={}){return C(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t$=/^https?/;async function tz(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tU(e);for(let e of t)try{if(function(e){let t=v(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!t$.test(r))return!1;if(tV.test(e))return n===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tB=new _(3e4,6e4);function tq(){let e=e9().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tK=null,tH=new _(5e3,15e3),tW={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tZ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tG(e){let t=await (tK=tK||new Promise((t,r)=>{var n,i,s;function o(){tq(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tq(),r(p(e,"network-request-failed"))},timeout:tB.get()})}if(null===(i=null===(n=e9().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=e9().gapi)||void 0===s?void 0:s.load)o();else{let t=eg("iframefcb");return e9()[t]=()=>{gapi.load?o():r(p(e,"network-request-failed"))},em(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw tK=null,e})),r=e9().gapi;return g(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;g(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?E(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=tZ.get(e.config.apiHost);o&&(n.eid=o);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,i.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tW,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=e9().setTimeout(()=>{n(i)},tH.get());function o(){e9().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tX={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tQ{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let tJ=encodeURIComponent("fac");async function tY(e,t,r,n,o,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:s.Jn,eventId:o};if(t instanceof e$)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[r]=n;if(t instanceof ez){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);let u=l;for(let e of Object.keys(u))void 0===u[e]&&delete u[e];let c=await e._getAppCheckToken(),h=c?`#${tJ}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?E(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(u).slice(1)}${h}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0="webStorageSupport",t1=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e3,this._completeRedirectFn=tL,this._overrideRedirectResult=tD}async _openPopup(e,t,r,n){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||y("_initialize() not called before _openPopup()");let o=await tY(e,t,r,v(),n);return function(e,t,r,n=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},tX),{width:n.toString(),height:s.toString(),top:o,left:a}),c=(0,i.z$)().toLowerCase();r&&(l=er(c)?"_blank":r),ee(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,i.z$)()){var t;return ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new tQ(null);let d=window.open(t||"",l,h);g(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tQ(d)}(e,o,e6())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await tY(e,t,r,v(),n);return e9().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||y("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await tG(e),r=new tM(e);return t.register("authEvent",t=>{g(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(t0,{type:t0},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[t0];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tz(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return el()||et()||ea()}};class t2{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class t5 extends t2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t5(e)}_finalizeEnroll(e,t,r){return C(e,"POST","/v2/accounts/mfaEnrollment:finalize",k(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:finalize",k(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class t3 extends t2{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new t3(t,void 0,e)}static _fromEnrollmentId(e,t){return new t3(t,e)}async _finalizeEnroll(e,t,r){return g(void 0!==this.secret,e,"argument-error"),C(e,"POST","/v2/accounts/mfaEnrollment:finalize",k(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){g(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return C(e,"POST","/v2/accounts/mfaSignIn:finalize",k(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class t4{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new t4(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(t6(e)||t6(t))&&(n=!0),n&&(t6(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),t6(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function t6(e){return void 0===e||(null==e?void 0:e.length)===0}var t8="@firebase/auth",t9="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let re=(0,i.Pz)("authIdTokenMaxAge")||300,rt=null,rr=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>re)return;let i=null==r?void 0:r.token;rt!==i&&(rt=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};n="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),g(!(null==a?void 0:a.includes(":")),"argument-error",{appName:r.name});let l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(n)},u=new ew(r,i,s,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(G);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=e_(e.getProvider("auth").getImmediate());return new t7(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(t8,t9,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,s.KN)(t8,t9,"esm2017");var rn=r(9808),ri=r(8775);let rs=function(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,s.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,i.vZ)(n,null!=t?t:{}))return e;f(e,"already-initialized")}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:t1,persistence:[tc,e5,e3]}),n=(0,i.Pz)("authTokenSyncURL");if(n){var o,a;let e=rr(n);o=()=>e(r.currentUser),(0,i.m9)(r).beforeAuthStateChanged(e,o),a=t=>e(t),(0,i.m9)(r).onIdTokenChanged(a,void 0,void 0)}let l=(0,i.q4)("auth");return l&&function(e,t,r){let n=e_(e);g(n._canInitEmulator,n,"emulator-config-failed"),g(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=eI(t),{host:o,port:a}=function(e){let t=eI(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:eS(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:eS(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${l}`),r}(rn.l);rs.useDeviceLanguage();let ro=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new tb("sign_up_button",{size:"invisible",callback:e=>{ra()}},rs),window.recaptchaVerifier.render().then(e=>{window.recaptchaWidgetId=e}))},ra=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r||ro();let n=window.recaptchaVerifier;r?t_(rs,e,n).then(e=>{window.confirmationResult=e,t(!0),console.warn("OTP Re-sent Successfully")}).catch(e=>{t(!1),console.log(e)}):t_(rs,e,n).then(e=>{grecaptcha.getResponse(recaptchaWidgetId),window.confirmationResult=e,t(!0),console.warn("OTP Sent Successfully")}).catch(e=>{window.recaptchaVerifier.render().then(function(e){grecaptcha.reset(e)}),console.log(e)})},rl=(e,t)=>{window.confirmationResult.confirm(e).then(e=>{t(!1)}).catch(e=>console.log("error---> ",e))},ru=async(e,t)=>{ra(e,t)},rc=e=>{rs.onAuthStateChanged(t=>{t?e((0,ri.M)(null==t?void 0:t.uid)):console.log("User is logged in")})},rh=e=>{(0,i.m9)(rs).signOut().then(()=>{e((0,ri.M)(""))}).catch(e=>{})}},5863:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893);r(8804);var i=r(7294),s=r(5675),o=r.n(s),a=r(4024),l=r(7899),u=r.n(l),c=r(2937),h=r.n(c),d=r(1664),f=r.n(d);function p(e){let{btn_type:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:h().button,children:(0,n.jsx)(f(),{href:"Create account"===t?"/signup":"/login",children:t})})})}var m=r(1649),g=r(9485),y=r(2068),v=r(3540),b=r(6638),w=r(8201),_=r(5058),E=r(5938);let I=[{type:"Create account"},{type:"Login"}];function S(){let[e,t]=(0,i.useState)(!1),r=(0,m.v9)(e=>e.userId.userId),s=(0,m.I0)(),l=()=>{t(!e),(0,y.Mx)(s)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("ul",{className:u().Navbar,children:[(0,n.jsxs)("li",{className:u().Navbar_left,children:[(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)(o(),{src:a.Z,alt:"none",className:u().logoImg})}),(0,n.jsx)("h1",{className:u().branding,children:"Welcome to Beazy Promotions !!"})]}),(0,n.jsx)("li",{className:u().Navbar_right,children:r.length>0?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("ul",{className:u().Navbar_right_list,children:[(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)("li",{className:u().Navbar_right_list_item,children:"Home"})}),(0,n.jsx)(f(),{href:"/newpromo",children:(0,n.jsx)("li",{className:u().Navbar_right_list_item,children:"Create Coupon"})}),(0,n.jsx)(f(),{href:"/mypromos",children:(0,n.jsx)("li",{className:u().Navbar_right_list_item,children:"My Promos"})}),(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)("li",{onClick:l,className:u().Navbar_right_list_item,children:"Log Out"})})]})}):I.map((e,t)=>{let{type:r}=e;return(0,n.jsx)(p,{btn_type:r},t)})}),(0,n.jsx)("li",{className:u().MobileNavbar_right,children:(0,n.jsxs)("ol",{className:u().MobileNavbar_icon,style:e?{bottom:"4px"}:{},onClick:()=>t(!e),children:[(0,n.jsx)("li",{style:e?{transform:"rotate(45deg)",bottom:"-6px"}:{transitionDuration:"0.2s"},className:u().MobileNavbar_icon_li}),(0,n.jsx)("li",{style:e?{display:"none"}:{},className:u().MobileNavbar_icon_li}),(0,n.jsx)("li",{style:e?{transform:"rotate(-45deg)",top:"0px",transitionDuration:"0.2s"}:{transitionDuration:"0.2s"},className:u().MobileNavbar_icon_li})]})})]}),(0,n.jsxs)("ul",{className:u().navbar_right_item_list,style:e?{width:"15rem",right:"0",transitionDuration:"1s"}:{width:0,right:"0",transitionDuration:"1s"},children:[(0,n.jsx)(f(),{href:"/",children:(0,n.jsxs)("li",{onClick:()=>t(!e),className:u().navbar_right_item,children:[(0,n.jsx)(b.Z,{sx:{color:"white"}})," Home"]})}),r.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f(),{href:"/newpromo",children:(0,n.jsxs)("li",{onClick:()=>t(!e),className:u().navbar_right_item,children:[(0,n.jsx)(_.Z,{sx:{color:"white"}})," Create Coupons"]})}),(0,n.jsx)(f(),{href:"/mypromos",children:(0,n.jsxs)("li",{onClick:()=>t(!e),className:u().navbar_right_item,children:[(0,n.jsx)(E.Z,{sx:{color:"white"}}),"Coupons List"]})}),(0,n.jsx)(f(),{href:"/"}),(0,n.jsxs)("li",{className:u().navbar_right_item_list_logout_btn,onClick:l,children:[(0,n.jsx)(v.Z,{sx:{color:"white"}})," ",(0,n.jsx)("p",{children:"Logout"})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f(),{href:"/signup",children:(0,n.jsxs)("li",{onClick:()=>t(!e),className:u().navbar_right_item,children:[" ",(0,n.jsx)(w.Z,{sx:{color:"white"}})," SignIn"]})}),(0,n.jsx)(f(),{href:"/login",children:(0,n.jsxs)("li",{onClick:()=>t(!e),className:u().navbar_right_item,children:[(0,n.jsx)(g.Z,{sx:{color:"white"}})," login"]})})]})]})]})}var T=r(6741),k=r(8775),C=r(8858);let A=()=>(0,T.xC)({reducer:{[k.ZW.name]:k.ZW.reducer},devTools:!0}),O=(0,C.KV)(A);var x=O.withRedux(function(e){let{Component:t,pageProps:r}=e,s=(0,m.I0)();return(0,i.useEffect)(()=>{(0,y.Sk)(s)}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S,{}),(0,n.jsx)(t,{...r})]})})},8775:function(e,t,r){"use strict";r.d(t,{M:function(){return o},ZW:function(){return s}});var n=r(6741),i=r(8858);let s=(0,n.oM)({name:"userId",initialState:{userId:""},reducers:{setUserData(e,t){e.userId=t.payload}},extraReducers:{[i.ju]:(e,t)=>({...e,...t.payload.userId})}}),{setUserData:o}=s.actions;s.reducer},8804:function(){},7899:function(e){e.exports={Navbar:"Navbar_Navbar__n5AKE",Navbar_left:"Navbar_Navbar_left__IpOut",logoImg:"Navbar_logoImg__nRruz",branding:"Navbar_branding__YVN9u",Navbar_right:"Navbar_Navbar_right__UC13C",MobileNavbar_right:"Navbar_MobileNavbar_right__CA8eF",MobileNavbar_icon:"Navbar_MobileNavbar_icon__KvaJn",MobileNavbar_icon_li:"Navbar_MobileNavbar_icon_li__biutG",Navbar_right_list:"Navbar_Navbar_right_list__oo8W1",Navbar_right_list_item:"Navbar_Navbar_right_list_item__wX__c",navbar_right_item_list:"Navbar_navbar_right_item_list__MgMi5",navbar_right_item:"Navbar_navbar_right_item__on1ch",navbar_right_item_list_logout_btn:"Navbar_navbar_right_item_list_logout_btn__qXXVu"}},2937:function(e){e.exports={button:"NavbarBtns_button__vSFGA"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],u=!1,c=-1;function h(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},1163:function(e,t,r){e.exports=r(6885)},9921:function(e,t){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},9864:function(e,t,r){"use strict";r(9921)},1649:function(e,t,r){"use strict";r.d(t,{zt:function(){return v},I0:function(){return _},v9:function(){return p}});var n=r(1688),i=r(2798),s=r(3935);let o=function(e){e()},a=()=>o;var l=r(7294);let u=(0,l.createContext)(null);function c(){let e=(0,l.useContext)(u);return e}let h=()=>{throw Error("uSES not initialized!")},d=h,f=(e,t)=>e===t,p=function(e=u){let t=e===u?c:()=>(0,l.useContext)(e);return function(e,r=f){let{store:n,subscription:i,getServerState:s}=t(),o=d(i.addNestedSub,n.getState,s||n.getState,e,r);return(0,l.useDebugValue)(o),o}}();r(8679),r(9864);let m={notify(){},get:()=>[]},g=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),y=g?l.useLayoutEffect:l.useEffect;var v=function({store:e,context:t,children:r,serverState:n}){let i=(0,l.useMemo)(()=>{let t=function(e,t){let r;let n=m;function i(){o.onStateChange&&o.onStateChange()}function s(){r||(r=t?t.addNestedSub(i):e.subscribe(i),n=function(){let e=a(),t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,i=r={callback:e,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){n&&null!==t&&(n=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}let o={addNestedSub:function(e){return s(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:i,isSubscribed:function(){return!!r},trySubscribe:s,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=m)},getListeners:()=>n};return o}(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0}},[e,n]),s=(0,l.useMemo)(()=>e.getState(),[e]);return y(()=>{let{subscription:t}=i;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[i,s]),l.createElement((t||u).Provider,{value:i},r)};function b(e=u){let t=e===u?c:()=>(0,l.useContext)(e);return function(){let{store:e}=t();return e}}let w=b(),_=function(e=u){let t=e===u?w:b(e);return function(){let e=t();return e.dispatch}}();d=i.useSyncExternalStoreWithSelector,n.useSyncExternalStore,o=s.unstable_batchedUpdates},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useState,o=n.useEffect,a=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=s({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return a(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),o(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),i=r(1688),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,a=n.useRef,l=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var h=a(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;h=u(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(o=e,a=r)}var o,a,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]);var f=o(e,h[0],h[1]);return l(function(){d.hasValue=!0,d.value=f},[f]),c(f),f}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(139)},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},7462:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})},5816:function(e,t,r){"use strict";let n,i;r.d(t,{Jn:function(){return D},qX:function(){return N},Xd:function(){return x},Mq:function(){return M},ZF:function(){return L},KN:function(){return j}});var s,o=r(740),a=r(3333),l=r(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),g(c.get(this))}:function(...e){return g(t.apply(y(this),e))}:function(e,...r){let n=t.call(y(this),e,...r);return d.set(n,e.sort?e.sort():[e]),g(n)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),u(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,m):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function _(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return w.set(t,s),s}m={...s=m,get:(e,t,r)=>_(e,t)||s.get(e,t,r),has:(e,t)=>!!_(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",S="0.9.8",T=new a.Yd("@firebase/app"),k="[DEFAULT]",C={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,O=new Map;function x(e){let t=e.name;if(O.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(O.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function N(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let R=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw R.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D="9.20.0";function L(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw R.create("bad-app-name",{appName:String(i)});if(r||(r=(0,l.aH)()),!r)throw R.create("no-options");let s=A.get(i);if(s){if((0,l.vZ)(r,s.options)&&(0,l.vZ)(n,s.config))return s;throw R.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of O.values())a.addComponent(e);let u=new P(r,n,a);return A.set(i,u),u}function M(e=k){let t=A.get(e);if(!t&&e===k)return L();if(!t)throw R.create("no-app",{appName:e});return t}function j(e,t,r){var n;let i=null!==(n=C[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),T.warn(e.join(" "));return}x(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let F="firebase-heartbeat-store",U=null;function V(){return U||(U=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=g(o);return n&&o.addEventListener("upgradeneeded",e=>{n(g(o.result),e.oldVersion,e.newVersion,g(o.transaction))}),r&&o.addEventListener("blocked",()=>r()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(F)}}).catch(e=>{throw R.create("idb-open",{originalErrorMessage:e.message})})),U}async function $(e){try{let t=await V();return t.transaction(F).objectStore(F).get(B(e))}catch(e){if(e instanceof l.ZR)T.warn(e.message);else{let t=R.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});T.warn(t.message)}}}async function z(e,t){try{let r=await V(),n=r.transaction(F,"readwrite"),i=n.objectStore(F);return await i.put(t,B(e)),n.done}catch(e){if(e instanceof l.ZR)T.warn(e.message);else{let t=R.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});T.warn(t.message)}}}function B(e){return`${e.name}!${e.options.appId}`}class q{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new H(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=K();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=K(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),W(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),W(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function K(){let e=new Date;return e.toISOString().substring(0,10)}class H{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await $(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function W(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}x(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),x(new o.wA("heartbeat",e=>new q(e),"PRIVATE")),j(I,S,""),j(I,S,"esm2017"),j("fire-js","")},740:function(e,t,r){"use strict";r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(4444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return c},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);