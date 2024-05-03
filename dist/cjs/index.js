"use strict";var Ve=Object.create;var oe=Object.defineProperty,ke=Object.defineProperties,Qe=Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertyNames,De=Object.getOwnPropertySymbols,Be=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Ce=(p,s,c)=>s in p?oe(p,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):p[s]=c,Ge=(p,s)=>{for(var c in s||(s={}))Ee.call(s,c)&&Ce(p,c,s[c]);if(De)for(var c of De(s))He.call(s,c)&&Ce(p,c,s[c]);return p},xe=(p,s)=>ke(p,_e(s));var Oe=(p,s)=>()=>(s||p((s={exports:{}}).exports,s),s.exports),Ze=(p,s)=>{for(var c in s)oe(p,c,{get:s[c],enumerable:!0})},be=(p,s,c,a)=>{if(s&&typeof s=="object"||typeof s=="function")for(let m of je(s))!Ee.call(p,m)&&m!==c&&oe(p,m,{get:()=>s[m],enumerable:!(a=Qe(s,m))||a.enumerable});return p};var se=(p,s,c)=>(c=p!=null?Ve(Be(p)):{},be(s||!p||!p.__esModule?oe(c,"default",{value:p,enumerable:!0}):c,p)),Ke=p=>be(oe({},"__esModule",{value:!0}),p);var he=Oe((Ne,me)=>{(function(p){"use strict";var s=1e9,c={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},a=!0,m="[DecimalError] ",A=m+"Invalid argument: ",y=m+"Exponent out of range: ",C=Math.floor,x=Math.pow,b=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,O,E=1e7,I=7,K=9007199254740991,k=C(K/I),d={};d.absoluteValue=d.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e},d.comparedTo=d.cmp=function(e){var t,o,r,n,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,n=e.d.length,t=0,o=r<n?r:n;t<o;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===n?0:r>n^i.s<0?1:-1},d.decimalPlaces=d.dp=function(){var e=this,t=e.d.length-1,o=(t-e.e)*I;if(t=e.d[t],t)for(;t%10==0;t/=10)o--;return o<0?0:o},d.dividedBy=d.div=function(e){return M(this,new this.constructor(e))},d.dividedToIntegerBy=d.idiv=function(e){var t=this,o=t.constructor;return G(M(t,new o(e),0,1),o.precision)},d.equals=d.eq=function(e){return!this.cmp(e)},d.exponent=function(){return N(this)},d.greaterThan=d.gt=function(e){return this.cmp(e)>0},d.greaterThanOrEqualTo=d.gte=function(e){return this.cmp(e)>=0},d.isInteger=d.isint=function(){return this.e>this.d.length-2},d.isNegative=d.isneg=function(){return this.s<0},d.isPositive=d.ispos=function(){return this.s>0},d.isZero=function(){return this.s===0},d.lessThan=d.lt=function(e){return this.cmp(e)<0},d.lessThanOrEqualTo=d.lte=function(e){return this.cmp(e)<1},d.logarithm=d.log=function(e){var t,o=this,r=o.constructor,n=r.precision,i=n+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(O))throw Error(m+"NaN");if(o.s<1)throw Error(m+(o.s?"NaN":"-Infinity"));return o.eq(O)?new r(0):(a=!1,t=M(Y(o,i),Y(e,i),i),a=!0,G(t,n))},d.minus=d.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?z(t,e):re(t,(e.s=-e.s,e))},d.modulo=d.mod=function(e){var t,o=this,r=o.constructor,n=r.precision;if(e=new r(e),!e.s)throw Error(m+"NaN");return o.s?(a=!1,t=M(o,e,0,1).times(e),a=!0,o.minus(t)):G(new r(o),n)},d.naturalExponential=d.exp=function(){return B(this)},d.naturalLogarithm=d.ln=function(){return Y(this)},d.negated=d.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e},d.plus=d.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?re(t,e):z(t,(e.s=-e.s,e))},d.precision=d.sd=function(e){var t,o,r,n=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(A+e);if(t=N(n)+1,r=n.d.length-1,o=r*I+1,r=n.d[r],r){for(;r%10==0;r/=10)o--;for(r=n.d[0];r>=10;r/=10)o++}return e&&t>o?t:o},d.squareRoot=d.sqrt=function(){var e,t,o,r,n,i,f,u=this,l=u.constructor;if(u.s<1){if(!u.s)return new l(0);throw Error(m+"NaN")}for(e=N(u),a=!1,n=Math.sqrt(+u),n==0||n==1/0?(t=L(u.d),(t.length+e)%2==0&&(t+="0"),n=Math.sqrt(t),e=C((e+1)/2)-(e<0||e%2),n==1/0?t="5e"+e:(t=n.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new l(t)):r=new l(n.toString()),o=l.precision,n=f=o+3;;)if(i=r,r=i.plus(M(u,i,f+2)).times(.5),L(i.d).slice(0,f)===(t=L(r.d)).slice(0,f)){if(t=t.slice(f-3,f+1),n==f&&t=="4999"){if(G(i,o+1,0),i.times(i).eq(u)){r=i;break}}else if(t!="9999")break;f+=4}return a=!0,G(r,o)},d.times=d.mul=function(e){var t,o,r,n,i,f,u,l,g,h=this,w=h.constructor,R=h.d,v=(e=new w(e)).d;if(!h.s||!e.s)return new w(0);for(e.s*=h.s,o=h.e+e.e,l=R.length,g=v.length,l<g&&(i=R,R=v,v=i,f=l,l=g,g=f),i=[],f=l+g,r=f;r--;)i.push(0);for(r=g;--r>=0;){for(t=0,n=l+r;n>r;)u=i[n]+v[r]*R[n-r-1]+t,i[n--]=u%E|0,t=u/E|0;i[n]=(i[n]+t)%E|0}for(;!i[--f];)i.pop();return t?++o:i.shift(),e.d=i,e.e=o,a?G(e,w.precision):e},d.toDecimalPlaces=d.todp=function(e,t){var o=this,r=o.constructor;return o=new r(o),e===void 0?o:(F(e,0,s),t===void 0?t=r.rounding:F(t,0,8),G(o,e+N(o)+1,t))},d.toExponential=function(e,t){var o,r=this,n=r.constructor;return e===void 0?o=W(r,!0):(F(e,0,s),t===void 0?t=n.rounding:F(t,0,8),r=G(new n(r),e+1,t),o=W(r,!0,e+1)),o},d.toFixed=function(e,t){var o,r,n=this,i=n.constructor;return e===void 0?W(n):(F(e,0,s),t===void 0?t=i.rounding:F(t,0,8),r=G(new i(n),e+N(n)+1,t),o=W(r.abs(),!1,e+N(r)+1),n.isneg()&&!n.isZero()?"-"+o:o)},d.toInteger=d.toint=function(){var e=this,t=e.constructor;return G(new t(e),N(e)+1,t.rounding)},d.toNumber=function(){return+this},d.toPower=d.pow=function(e){var t,o,r,n,i,f,u=this,l=u.constructor,g=12,h=+(e=new l(e));if(!e.s)return new l(O);if(u=new l(u),!u.s){if(e.s<1)throw Error(m+"Infinity");return u}if(u.eq(O))return u;if(r=l.precision,e.eq(O))return G(u,r);if(t=e.e,o=e.d.length-1,f=t>=o,i=u.s,f){if((o=h<0?-h:h)<=K){for(n=new l(O),t=Math.ceil(r/I+4),a=!1;o%2&&(n=n.times(u),ne(n.d,t)),o=C(o/2),o!==0;)u=u.times(u),ne(u.d,t);return a=!0,e.s<0?new l(O).div(n):G(n,r)}}else if(i<0)throw Error(m+"NaN");return i=i<0&&e.d[Math.max(t,o)]&1?-1:1,u.s=1,a=!1,n=e.times(Y(u,r+g)),a=!0,n=B(n),n.s=i,n},d.toPrecision=function(e,t){var o,r,n=this,i=n.constructor;return e===void 0?(o=N(n),r=W(n,o<=i.toExpNeg||o>=i.toExpPos)):(F(e,1,s),t===void 0?t=i.rounding:F(t,0,8),n=G(new i(n),e,t),o=N(n),r=W(n,e<=o||o<=i.toExpNeg,e)),r},d.toSignificantDigits=d.tosd=function(e,t){var o=this,r=o.constructor;return e===void 0?(e=r.precision,t=r.rounding):(F(e,1,s),t===void 0?t=r.rounding:F(t,0,8)),G(new r(o),e,t)},d.toString=d.valueOf=d.val=d.toJSON=function(){var e=this,t=N(e),o=e.constructor;return W(e,t<=o.toExpNeg||t>=o.toExpPos)};function re(e,t){var o,r,n,i,f,u,l,g,h=e.constructor,w=h.precision;if(!e.s||!t.s)return t.s||(t=new h(e)),a?G(t,w):t;if(l=e.d,g=t.d,f=e.e,n=t.e,l=l.slice(),i=f-n,i){for(i<0?(r=l,i=-i,u=g.length):(r=g,n=f,u=l.length),f=Math.ceil(w/I),u=f>u?f+1:u+1,i>u&&(i=u,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(u=l.length,i=g.length,u-i<0&&(i=u,r=g,g=l,l=r),o=0;i;)o=(l[--i]=l[i]+g[i]+o)/E|0,l[i]%=E;for(o&&(l.unshift(o),++n),u=l.length;l[--u]==0;)l.pop();return t.d=l,t.e=n,a?G(t,w):t}function F(e,t,o){if(e!==~~e||e<t||e>o)throw Error(A+e)}function L(e){var t,o,r,n=e.length-1,i="",f=e[0];if(n>0){for(i+=f,t=1;t<n;t++)r=e[t]+"",o=I-r.length,o&&(i+=Q(o)),i+=r;f=e[t],r=f+"",o=I-r.length,o&&(i+=Q(o))}else if(f===0)return"0";for(;f%10===0;)f/=10;return i+f}var M=function(){function e(r,n){var i,f=0,u=r.length;for(r=r.slice();u--;)i=r[u]*n+f,r[u]=i%E|0,f=i/E|0;return f&&r.unshift(f),r}function t(r,n,i,f){var u,l;if(i!=f)l=i>f?1:-1;else for(u=l=0;u<i;u++)if(r[u]!=n[u]){l=r[u]>n[u]?1:-1;break}return l}function o(r,n,i){for(var f=0;i--;)r[i]-=f,f=r[i]<n[i]?1:0,r[i]=f*E+r[i]-n[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,n,i,f){var u,l,g,h,w,R,v,J,D,P,fe,H,we,ue,le,Ae,U,ae,de=r.constructor,Ue=r.s==n.s?1:-1,_=r.d,S=n.d;if(!r.s)return new de(r);if(!n.s)throw Error(m+"Division by zero");for(l=r.e-n.e,U=S.length,le=_.length,v=new de(Ue),J=v.d=[],g=0;S[g]==(_[g]||0);)++g;if(S[g]>(_[g]||0)&&--l,i==null?H=i=de.precision:f?H=i+(N(r)-N(n))+1:H=i,H<0)return new de(0);if(H=H/I+2|0,g=0,U==1)for(h=0,S=S[0],H++;(g<le||h)&&H--;g++)we=h*E+(_[g]||0),J[g]=we/S|0,h=we%S|0;else{for(h=E/(S[0]+1)|0,h>1&&(S=e(S,h),_=e(_,h),U=S.length,le=_.length),ue=U,D=_.slice(0,U),P=D.length;P<U;)D[P++]=0;ae=S.slice(),ae.unshift(0),Ae=S[0],S[1]>=E/2&&++Ae;do h=0,u=t(S,D,U,P),u<0?(fe=D[0],U!=P&&(fe=fe*E+(D[1]||0)),h=fe/Ae|0,h>1?(h>=E&&(h=E-1),w=e(S,h),R=w.length,P=D.length,u=t(w,D,R,P),u==1&&(h--,o(w,U<R?ae:S,R))):(h==0&&(u=h=1),w=S.slice()),R=w.length,R<P&&w.unshift(0),o(D,w,P),u==-1&&(P=D.length,u=t(S,D,U,P),u<1&&(h++,o(D,U<P?ae:S,P))),P=D.length):u===0&&(h++,D=[0]),J[g++]=h,u&&D[0]?D[P++]=_[ue]||0:(D=[_[ue]],P=1);while((ue++<le||D[0]!==void 0)&&H--)}return J[0]||J.shift(),v.e=l,G(v,f?i+N(v)+1:i)}}();function B(e,t){var o,r,n,i,f,u,l=0,g=0,h=e.constructor,w=h.precision;if(N(e)>16)throw Error(y+N(e));if(!e.s)return new h(O);for(t==null?(a=!1,u=w):u=t,f=new h(.03125);e.abs().gte(.1);)e=e.times(f),g+=5;for(r=Math.log(x(2,g))/Math.LN10*2+5|0,u+=r,o=n=i=new h(O),h.precision=u;;){if(n=G(n.times(e),u),o=o.times(++l),f=i.plus(M(n,o,u)),L(f.d).slice(0,u)===L(i.d).slice(0,u)){for(;g--;)i=G(i.times(i),u);return h.precision=w,t==null?(a=!0,G(i,w)):i}i=f}}function N(e){for(var t=e.e*I,o=e.d[0];o>=10;o/=10)t++;return t}function ie(e,t,o){if(t>e.LN10.sd())throw a=!0,o&&(e.precision=o),Error(m+"LN10 precision limit exceeded");return G(new e(e.LN10),t)}function Q(e){for(var t="";e--;)t+="0";return t}function Y(e,t){var o,r,n,i,f,u,l,g,h,w=1,R=10,v=e,J=v.d,D=v.constructor,P=D.precision;if(v.s<1)throw Error(m+(v.s?"NaN":"-Infinity"));if(v.eq(O))return new D(0);if(t==null?(a=!1,g=P):g=t,v.eq(10))return t==null&&(a=!0),ie(D,g);if(g+=R,D.precision=g,o=L(J),r=o.charAt(0),i=N(v),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&o.charAt(1)>3;)v=v.times(e),o=L(v.d),r=o.charAt(0),w++;i=N(v),r>1?(v=new D("0."+o),i++):v=new D(r+"."+o.slice(1))}else return l=ie(D,g+2,P).times(i+""),v=Y(new D(r+"."+o.slice(1)),g-R).plus(l),D.precision=P,t==null?(a=!0,G(v,P)):v;for(u=f=v=M(v.minus(O),v.plus(O),g),h=G(v.times(v),g),n=3;;){if(f=G(f.times(h),g),l=u.plus(M(f,new D(n),g)),L(l.d).slice(0,g)===L(u.d).slice(0,g))return u=u.times(2),i!==0&&(u=u.plus(ie(D,g+2,P).times(i+""))),u=M(u,new D(w),g),D.precision=P,t==null?(a=!0,G(u,P)):u;u=l,n+=2}}function $(e,t){var o,r,n;for((o=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(o<0&&(o=r),o+=+t.slice(r+1),t=t.substring(0,r)):o<0&&(o=t.length),r=0;t.charCodeAt(r)===48;)++r;for(n=t.length;t.charCodeAt(n-1)===48;)--n;if(t=t.slice(r,n),t){if(n-=r,o=o-r-1,e.e=C(o/I),e.d=[],r=(o+1)%I,o<0&&(r+=I),r<n){for(r&&e.d.push(+t.slice(0,r)),n-=I;r<n;)e.d.push(+t.slice(r,r+=I));t=t.slice(r),r=I-t.length}else r-=n;for(;r--;)t+="0";if(e.d.push(+t),a&&(e.e>k||e.e<-k))throw Error(y+o)}else e.s=0,e.e=0,e.d=[0];return e}function G(e,t,o){var r,n,i,f,u,l,g,h,w=e.d;for(f=1,i=w[0];i>=10;i/=10)f++;if(r=t-f,r<0)r+=I,n=t,g=w[h=0];else{if(h=Math.ceil((r+1)/I),i=w.length,h>=i)return e;for(g=i=w[h],f=1;i>=10;i/=10)f++;r%=I,n=r-I+f}if(o!==void 0&&(i=x(10,f-n-1),u=g/i%10|0,l=t<0||w[h+1]!==void 0||g%i,l=o<4?(u||l)&&(o==0||o==(e.s<0?3:2)):u>5||u==5&&(o==4||l||o==6&&(r>0?n>0?g/x(10,f-n):0:w[h-1])%10&1||o==(e.s<0?8:7))),t<1||!w[0])return l?(i=N(e),w.length=1,t=t-i-1,w[0]=x(10,(I-t%I)%I),e.e=C(-t/I)||0):(w.length=1,w[0]=e.e=e.s=0),e;if(r==0?(w.length=h,i=1,h--):(w.length=h+1,i=x(10,I-r),w[h]=n>0?(g/x(10,f-n)%x(10,n)|0)*i:0),l)for(;;)if(h==0){(w[0]+=i)==E&&(w[0]=1,++e.e);break}else{if(w[h]+=i,w[h]!=E)break;w[h--]=0,i=1}for(r=w.length;w[--r]===0;)w.pop();if(a&&(e.e>k||e.e<-k))throw Error(y+N(e));return e}function z(e,t){var o,r,n,i,f,u,l,g,h,w,R=e.constructor,v=R.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new R(e),a?G(t,v):t;if(l=e.d,w=t.d,r=t.e,g=e.e,l=l.slice(),f=g-r,f){for(h=f<0,h?(o=l,f=-f,u=w.length):(o=w,r=g,u=l.length),n=Math.max(Math.ceil(v/I),u)+2,f>n&&(f=n,o.length=1),o.reverse(),n=f;n--;)o.push(0);o.reverse()}else{for(n=l.length,u=w.length,h=n<u,h&&(u=n),n=0;n<u;n++)if(l[n]!=w[n]){h=l[n]<w[n];break}f=0}for(h&&(o=l,l=w,w=o,t.s=-t.s),u=l.length,n=w.length-u;n>0;--n)l[u++]=0;for(n=w.length;n>f;){if(l[--n]<w[n]){for(i=n;i&&l[--i]===0;)l[i]=E-1;--l[i],l[n]+=E}l[n]-=w[n]}for(;l[--u]===0;)l.pop();for(;l[0]===0;l.shift())--r;return l[0]?(t.d=l,t.e=r,a?G(t,v):t):new R(0)}function W(e,t,o){var r,n=N(e),i=L(e.d),f=i.length;return t?(o&&(r=o-f)>0?i=i.charAt(0)+"."+i.slice(1)+Q(r):f>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(n<0?"e":"e+")+n):n<0?(i="0."+Q(-n-1)+i,o&&(r=o-f)>0&&(i+=Q(r))):n>=f?(i+=Q(n+1-f),o&&(r=o-n-1)>0&&(i=i+"."+Q(r))):((r=n+1)<f&&(i=i.slice(0,r)+"."+i.slice(r)),o&&(r=o-f)>0&&(n+1===f&&(i+="."),i+=Q(r))),e.s<0?"-"+i:i}function ne(e,t){if(e.length>t)return e.length=t,!0}function X(e){var t,o,r;function n(i){var f=this;if(!(f instanceof n))return new n(i);if(f.constructor=n,i instanceof n){f.s=i.s,f.e=i.e,f.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(A+i);if(i>0)f.s=1;else if(i<0)i=-i,f.s=-1;else{f.s=0,f.e=0,f.d=[0];return}if(i===~~i&&i<1e7){f.e=0,f.d=[i];return}return $(f,i.toString())}else if(typeof i!="string")throw Error(A+i);if(i.charCodeAt(0)===45?(i=i.slice(1),f.s=-1):f.s=1,b.test(i))$(f,i);else throw Error(A+i)}if(n.prototype=d,n.ROUND_UP=0,n.ROUND_DOWN=1,n.ROUND_CEIL=2,n.ROUND_FLOOR=3,n.ROUND_HALF_UP=4,n.ROUND_HALF_DOWN=5,n.ROUND_HALF_EVEN=6,n.ROUND_HALF_CEIL=7,n.ROUND_HALF_FLOOR=8,n.clone=X,n.config=n.set=ge,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(o=r[t++])||(e[o]=this[o]);return n.config(e),n}function ge(e){if(!e||typeof e!="object")throw Error(m+"Object expected");var t,o,r,n=["precision",1,s,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<n.length;t+=3)if((r=e[o=n[t]])!==void 0)if(C(r)===r&&r>=n[t+1]&&r<=n[t+2])this[o]=r;else throw Error(A+o+": "+r);if((r=e[o="LN10"])!==void 0)if(r==Math.LN10)this[o]=new this(r);else throw Error(A+o+": "+r);return this}c=X(c),c.default=c.Decimal=c,O=new c(1),typeof define=="function"&&define.amd?define(function(){return c}):typeof me<"u"&&me.exports?me.exports=c:(p||(p=typeof self<"u"&&self&&self.self==self?self:Function("return this")()),p.Decimal=c)})(Ne)});var Re=Oe((et,Se)=>{"use strict";Se.exports=function(s){return s!=null&&typeof s=="object"&&Array.isArray(s)===!1}});var Ie=Oe((tt,$e)=>{var Le=Re();$e.exports=function(p,s,c){if(Le(c)||(c={default:c}),!Fe(p))return typeof c.default<"u"?c.default:p;typeof s=="number"&&(s=String(s));let a=Array.isArray(s),m=typeof s=="string",A=c.separator||".",y=c.joinChar||(typeof A=="string"?A:".");if(!m&&!a)return p;if(m&&s in p)return ye(s,p,c)?p[s]:c.default;let C=a?s:Xe(s,A,c),x=C.length,b=0;do{let O=C[b];for(typeof O=="number"&&(O=String(O));O&&O.slice(-1)==="\\";)O=Te([O.slice(0,-1),C[++b]||""],y,c);if(O in p){if(!ye(O,p,c))return c.default;p=p[O]}else{let E=!1,I=b+1;for(;I<x;)if(O=Te([O,C[I++]],y,c),E=O in p){if(!ye(O,p,c))return c.default;p=p[O],b=I-1;break}if(!E)return c.default}}while(++b<x&&Fe(p));return b===x?p:c.default};function Te(p,s,c){return typeof c.join=="function"?c.join(p):p[0]+s+p[1]}function Xe(p,s,c){return typeof c.split=="function"?c.split(p):p.split(s)}function ye(p,s,c){return typeof c.isValid=="function"?c.isValid(p,s):!0}function Fe(p){return Le(p)||Array.isArray(p)||typeof p=="function"}});var Je={};Ze(Je,{Articles:()=>Me,Duxs:()=>We,PurchaseOrders:()=>Z});module.exports=Ke(Je);var V=se(he()),Pe={Beverage:.12,Shaker:.065},ve=class{static tryGetCustoms(s){if(typeof s.customsDescription=="string"&&s.customsDescription in Object.keys(Pe))return new V.default(Pe[s.customsDescription]);throw new Error(`${s.articleName}: Article is missing customs`)}static tryGetTotalQuantity(s){var c,a,m,A;if(Array.isArray(s)){let y=new V.default(0);for(let C of s)y=y.plus(this.tryGetQuantity(C));return y}return new V.default((A=(m=(c=s==null?void 0:s.inventoryInfo)==null?void 0:c.numberOfItems)!=null?m:(a=s.inventoryInfo)==null?void 0:a.toReceiveNumberOfItems)!=null?A:0)}static getQuantity(s){var c,a,m,A,y;if(((c=s.inventoryInfo)==null?void 0:c.numberOfItems)||((a=s.inventoryInfo)==null?void 0:a.toReceiveNumberOfItems))return new V.default((y=(m=s.inventoryInfo)==null?void 0:m.numberOfItems)!=null?y:(A=s.inventoryInfo)==null?void 0:A.toReceiveNumberOfItems)}static tryGetQuantity(s){let c=this.getQuantity(s);if(!c)throw new Error(`${s.articleName}: Article is missing 'inventoryInfo.numberOfItems'`);return c}static hasQuantity(s){var c,a;return Array.isArray(s)?s.findIndex(({inventoryInfo:m})=>!!(m!=null&&m.numberOfItems)||!!(m!=null&&m.toReceiveNumberOfItems))!==-1:!!((c=s.inventoryInfo)!=null&&c.numberOfItems)||!!((a=s.inventoryInfo)!=null&&a.toReceiveNumberOfItems)}static tryGetTotalVolume(s){if(Array.isArray(s)){let c=new V.default(0);for(let a of s)c=c.plus(this.tryGetTotalVolume(a).times(this.tryGetQuantity(a)));return c}if(!s.volume)throw new Error(`${s.articleName}: Article is missing volume`);return new V.default(s.volume)}static getVolume(s){if(s.volume)return new V.default(s.volume)}static hasVolume(s){return Array.isArray(s)?s.findIndex(({volume:c})=>!!c)!==-1:!!s.volume}static tryGetTotalWeight(s){if(Array.isArray(s)){let c=new V.default(0);for(let a of s)c=c.plus(this.tryGetTotalWeight(a).times(this.tryGetQuantity(a)));return c}if(!s.weight)throw new Error(`${s.articleName}: Article is missing weight`);return new V.default(s.weight)}static getWeight(s){if(s.weight)return new V.default(s.weight)}static hasWeight(s){return Array.isArray(s)?s.findIndex(({weight:c})=>!!c)!==-1:!!s.weight}},Me=ve;var T=se(he()),qe=se(Ie());var q=se(he()),ce=se(Ie()),ee=class{static tryGetArticleCountStatus(s){var m,A;let c=(A=(m=s.purchaseOrderInfo)==null?void 0:m.purchaseOrderStatus)==null?void 0:A.text,a;if(c==="Inleverans")a="advised";else if(c==="Mottaget"||c==="Lagerlagd")a="received";else throw new Error(`Unexpected Purchase order status: ${c}`);return a}},j=ee;j.tryGetFreeValues=s=>{let c=C=>{let x=(0,ce.default)(s,`purchaseOrderInfo.freeValues.${C}`);if(!isNaN(parseFloat(x)))return new q.default(x)},a=c("freeText1"),m=c("freeText2"),A=c("freeText3"),y=c("freeText4");return[a,m,A,y]},j.getFreeValues=(s,c)=>{let a=(x,b=new q.default(0))=>{let O=(0,ce.default)(s,`purchaseOrderInfo.freeValues.${x}`);return isNaN(parseFloat(O))?b:new q.default(O)},m=a("freeText1",c[2]),A=a("freeText2",c[3]),y=a("freeText3",c[0]),C=a("freeText4",c[1]);return[m,A,y,C]},j.tryGetFreightAndCustomsCost=(s,c,a)=>{let[m,A,y,C]=ee.tryGetFreeValues(s),x=y!=null?y:m,b=C!=null?C:A,O=x===void 0,E=b===void 0;if(O||E){if(c&&a)return[c,a];throw new Error(`Purchase Order is missing free values for ${E?"customs fee":""}${O?`${E?" and ":""}${O?"shipping fee":""}`:""}`)}return[x,b]},j.getArticleWeightPercentageOfOrder=(s,c)=>{var A;let a=ee.getWeightOfArticles(s),m=new q.default((A=s.numberOfItems)!=null?A:0);if(m.isZero()!==a.isZero())throw new Error(`Article with unexpected Weight of '${a}' with Quantity: '${m}'`);return a.dividedBy(c)},j.getTotalArticleQuantity=(s,c)=>{var A,y;let a=new q.default(0),{purchaseOrderLines:m}=s;if(m)if(Array.isArray(m))for(let C of m)a=a.plus(new q.default((A=(0,ce.default)(C,`${c}NumberOfItems`))!=null?A:0));else a=new q.default((y=(0,ce.default)(m,`${c}NumberOfItems`))!=null?y:0);return a},j.getWeightOfArticles=s=>{var c,a;if(Array.isArray(s)){let m=new q.default(0);for(let A of s)m=m.plus(new q.default((c=A.weight)!=null?c:0));return m}return new q.default((a=s==null?void 0:s.weight)!=null?a:0)},j.getTotalWeightOfArticles=s=>{if(Array.isArray(s)){let c=new q.default(0);for(let a of s){let{articleItems:m}=a;!m||(c=c.plus(ee.getWeightOfArticles(m)))}return c}return s!=null&&s.articleItems?ee.getWeightOfArticles(s.articleItems):new q.default(0)};var Z=j;var pe=class{},te=pe;te.calculateArticleCosts=(s,c,a,m,A,y,C)=>{var K,k,d;let x=Z.getArticleWeightPercentageOfOrder(s,y);if(((K=s.numberOfItems)!=null?K:0)==((k=s.weight)!=null?k:0))throw new Error(`Article with unexpected Weight of '${s.weight}' while Quantity is '${s.numberOfItems}'`);if(s.numberOfItems==0)return{unitCost:new T.default(0),unitShippingCost:new T.default(0)};let b=m.times(x).dividedBy(s.numberOfItems),O=c.times(a.plus(1)).minus(c);return{unitCost:b.plus(A.minus(O.times((d=s.numberOfItems)!=null?d:0))).dividedBy(C).plus(c).plus(O),unitShippingCost:b}},te.getTotalCostPerArticle=(s,c,a,m,A=new T.default(0),y=new T.default(0),C=new T.default(1))=>{if(a===0||c===0)return new T.default(0);let x=m.times(C),b=new T.default(s).times(y);return x.plus(A.minus(b.times(c))).dividedBy(a).plus(s).plus(b)},te.getArticleCostOverview=(s,c,a)=>{var I,K,k,d,re,F,L;let m={},A,y;try{[A,y]=Z.tryGetFreightAndCustomsCost(s)}catch(M){if(c===void 0||a===void 0)throw M;[A,y]=[new T.default(c),new T.default(a)]}let{purchaseOrderLines:C}=s;if(!C)throw new Error("Unexpected empty field 'purchaseOrderLines'");let x=Z.tryGetArticleCountStatus(s),b=Z.getTotalArticleQuantity(s,x);if(b.isZero())throw new Error(`Unexpected value of 'totalArticleQuantity': '${b}'`);let O=Z.getTotalWeightOfArticles(C);for(let M of C){let{rowPrice:B}=M,N=(I=M.article)==null?void 0:I.articleName,ie=(K=M.article)==null?void 0:K.articleNumber;if(!B)throw new Error(`Unexpected value of 'rowPrice': '${B}'`);if(!M.articleItems)throw new Error("Unexpected empty field 'articleItems'");for(let $ of M.articleItems){if(!$.weight){console.log(`Skipping Zero weight article of SKU: ${N} with id: ${$.originalArticleItemId}`);continue}if(((k=$.numberOfItems)!=null?k:0)==0){console.log(`Skipping Zero quantity article of SKU: ${N} with id: ${$.originalArticleItemId}`);continue}let G=new T.default(0),[z,W]=[new T.default(0),new T.default(0)];try{({unitCost:z,unitShippingCost:W}=pe.calculateArticleCosts($,new T.default(B),G,A,y,O,b))}catch(r){let{message:n}=r}let ne=Z.getArticleWeightPercentageOfOrder($,O),X=`${$.originalArticleItemId}`,ge=z.times((d=$.numberOfItems)!=null?d:0),e=W.times((re=$.numberOfItems)!=null?re:0),t=(F=$.numberOfItems)!=null?F:0,o={articleSKU:ie,articleName:N,weightPercentage:ne,unitCost:z,unitShippingCost:W,totalCost:ge,totalShippingCost:e,quantity:t};if(!m[X])m[X]=o;else{let r=m[X];m[X]=xe(Ge({},o),{weightPercentage:r.weightPercentage.plus(ne),unitCost:r.unitCost.plus(o.unitCost),unitShippingCost:r.unitShippingCost.plus(W),totalCost:r.totalCost.plus(o.totalCost),totalShippingCost:r.totalShippingCost.plus(o.totalShippingCost)})}}let Q=new T.default(0),Y=pe.getTotalCostPerArticle(B,(L=(0,qe.default)(M,`${x}NumberOfItems`))!=null?L:0,b.toNumber(),A,y,Q)}let E=Object.values(m).map(({weightPercentage:M})=>M).reduce((M,B)=>M.plus(B),new T.default(0));if(E.equals(100))throw new Error(`Unexpected sum of combined distribution: ${E}, expected: 100`);return m};var We=te;
/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */