(self.webpackChunk=self.webpackChunk||[]).push([[885],{20214:function(J,j,f){"use strict";f.r(j);var K=f(13448),A=f.n(K),E=f(74815),b=f.n(E),T=f(55595),g=f(25481),U=f(58166),M=f(25057),k=f(1678),p=f.n(k),C=f(93236),W=f(62086),Z=T.Z.SysteamController.queryNoticesList,F=function($,D){var h="",y="";return Object.prototype.toString.call($)==="[object Array]"&&(h=$.join(","),y=$.length>D?"".concat($.slice(0,D).join(","),"..."):$.join(",")),Object.prototype.toString.call($)==="[object String]"&&(h=$,y=$.length>D?"".concat($.slice(0,D),"..."):$),(0,W.jsx)(M.Z,{title:h,children:y})},z=function(){var $=(0,C.useRef)(),D=[{title:"\u5E8F\u53F7",dataIndex:"index",valueType:"index"},{title:"\u7528\u6237id",dataIndex:"id",hideInSearch:!0},{title:"\u7528\u6237\u6635\u79F0",dataIndex:"name"},{title:"\u53CD\u9988\u5185\u5BB9",dataIndex:"content",hideInSearch:!0,render:function(y,O){return F(O.content,8)}},{title:"\u53CD\u9988\u65F6\u95F4",dataIndex:"feedbackTime",valueType:"dateRange",render:function(y,O){return p()(O.feedbackTime).format("YYYY-MM-DD HH:mm:ss")}}];return(0,W.jsx)(g._z,{header:{title:null},children:(0,W.jsx)(U.Z,{headerTitle:"\u4EF7\u683C\u7BA1\u7406",tableLayout:"auto",actionRef:$,rowKey:"id",search:{},options:!1,request:function(){var h=b()(A()().mark(function y(O,I,d){var u,S,Y;return A()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z({sorter:I,filter:d});case 2:return u=t.sent,S=u.data,Y=u.success,t.abrupt("return",{data:(S==null?void 0:S.list)||[],success:Y});case 6:case"end":return t.stop()}},y)}));return function(y,O,I){return h.apply(this,arguments)}}(),columns:D})})};j.default=z},1678:function(J){(function(j,f){J.exports=f()})(this,function(){"use strict";var j=1e3,f=6e4,K=36e5,A="millisecond",E="second",b="minute",T="hour",g="day",U="week",M="month",k="quarter",p="year",C="date",W="Invalid Date",Z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,z={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var t=["th","st","nd","rd"],e=s%100;return"["+s+(t[(e-20)%10]||t[e]||t[0])+"]"}},R=function(s,t,e){var r=String(s);return!r||r.length>=t?s:""+Array(t+1-r.length).join(e)+s},$={s:R,z:function(s){var t=-s.utcOffset(),e=Math.abs(t),r=Math.floor(e/60),n=e%60;return(t<=0?"+":"-")+R(r,2,"0")+":"+R(n,2,"0")},m:function s(t,e){if(t.date()<e.date())return-s(e,t);var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,M),i=e-n<0,a=t.clone().add(r+(i?-1:1),M);return+(-(r+(e-n)/(i?n-a:a-n))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M,y:p,w:U,d:g,D:C,h:T,m:b,s:E,ms:A,Q:k}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},D="en",h={};h[D]=z;var y="$isDayjsObject",O=function(s){return s instanceof S||!(!s||!s[y])},I=function s(t,e,r){var n;if(!t)return D;if(typeof t=="string"){var i=t.toLowerCase();h[i]&&(n=i),e&&(h[i]=e,n=i);var a=t.split("-");if(!n&&a.length>1)return s(a[0])}else{var o=t.name;h[o]=t,n=o}return!r&&n&&(D=n),n||!r&&D},d=function(s,t){if(O(s))return s.clone();var e=typeof t=="object"?t:{};return e.date=s,e.args=arguments,new S(e)},u=$;u.l=I,u.i=O,u.w=function(s,t){return d(s,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function s(e){this.$L=I(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var t=s.prototype;return t.parse=function(e){this.$d=function(r){var n=r.date,i=r.utc;if(n===null)return new Date(NaN);if(u.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var a=n.match(Z);if(a){var o=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(n)}(e),this.init()},t.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},t.$utils=function(){return u},t.isValid=function(){return this.$d.toString()!==W},t.isSame=function(e,r){var n=d(e);return this.startOf(r)<=n&&n<=this.endOf(r)},t.isAfter=function(e,r){return d(e)<this.startOf(r)},t.isBefore=function(e,r){return this.endOf(r)<d(e)},t.$g=function(e,r,n){return u.u(e)?this[r]:this.set(n,e)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(e,r){var n=this,i=!!u.u(r)||r,a=u.p(e),o=function(w,m){var L=u.w(n.$u?Date.UTC(n.$y,m,w):new Date(n.$y,m,w),n);return i?L:L.endOf(g)},c=function(w,m){return u.w(n.toDate()[w].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(m)),n)},l=this.$W,_=this.$M,v=this.$D,x="set"+(this.$u?"UTC":"");switch(a){case p:return i?o(1,0):o(31,11);case M:return i?o(1,_):o(0,_+1);case U:var P=this.$locale().weekStart||0,B=(l<P?l+7:l)-P;return o(i?v-B:v+(6-B),_);case g:case C:return c(x+"Hours",0);case T:return c(x+"Minutes",1);case b:return c(x+"Seconds",2);case E:return c(x+"Milliseconds",3);default:return this.clone()}},t.endOf=function(e){return this.startOf(e,!1)},t.$set=function(e,r){var n,i=u.p(e),a="set"+(this.$u?"UTC":""),o=(n={},n[g]=a+"Date",n[C]=a+"Date",n[M]=a+"Month",n[p]=a+"FullYear",n[T]=a+"Hours",n[b]=a+"Minutes",n[E]=a+"Seconds",n[A]=a+"Milliseconds",n)[i],c=i===g?this.$D+(r-this.$W):r;if(i===M||i===p){var l=this.clone().set(C,1);l.$d[o](c),l.init(),this.$d=l.set(C,Math.min(this.$D,l.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},t.set=function(e,r){return this.clone().$set(e,r)},t.get=function(e){return this[u.p(e)]()},t.add=function(e,r){var n,i=this;e=Number(e);var a=u.p(r),o=function(_){var v=d(i);return u.w(v.date(v.date()+Math.round(_*e)),i)};if(a===M)return this.set(M,this.$M+e);if(a===p)return this.set(p,this.$y+e);if(a===g)return o(1);if(a===U)return o(7);var c=(n={},n[b]=f,n[T]=K,n[E]=j,n)[a]||1,l=this.$d.getTime()+e*c;return u.w(l,this)},t.subtract=function(e,r){return this.add(-1*e,r)},t.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||W;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,c=this.$m,l=this.$M,_=n.weekdays,v=n.months,x=n.meridiem,P=function(m,L,H,N){return m&&(m[L]||m(r,i))||H[L].slice(0,N)},B=function(m){return u.s(o%12||12,m,"0")},w=x||function(m,L,H){var N=m<12?"AM":"PM";return H?N.toLowerCase():N};return i.replace(F,function(m,L){return L||function(H){switch(H){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return l+1;case"MM":return u.s(l+1,2,"0");case"MMM":return P(n.monthsShort,l,v,3);case"MMMM":return P(v,l);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return P(n.weekdaysMin,r.$W,_,2);case"ddd":return P(n.weekdaysShort,r.$W,_,3);case"dddd":return _[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return B(1);case"hh":return B(2);case"a":return w(o,c,!0);case"A":return w(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}(m)||a.replace(":","")})},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(e,r,n){var i,a=this,o=u.p(r),c=d(e),l=(c.utcOffset()-this.utcOffset())*f,_=this-c,v=function(){return u.m(a,c)};switch(o){case p:i=v()/12;break;case M:i=v();break;case k:i=v()/3;break;case U:i=(_-l)/6048e5;break;case g:i=(_-l)/864e5;break;case T:i=_/K;break;case b:i=_/f;break;case E:i=_/j;break;default:i=_}return n?i:u.a(i)},t.daysInMonth=function(){return this.endOf(M).$D},t.$locale=function(){return h[this.$L]},t.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),i=I(e,r,!0);return i&&(n.$L=i),n},t.clone=function(){return u.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},s}(),Y=S.prototype;return d.prototype=Y,[["$ms",A],["$s",E],["$m",b],["$H",T],["$W",g],["$M",M],["$y",p],["$D",C]].forEach(function(s){Y[s[1]]=function(t){return this.$g(t,s[0],s[1])}}),d.extend=function(s,t){return s.$i||(s(t,S,d),s.$i=!0),d},d.locale=I,d.isDayjs=O,d.unix=function(s){return d(1e3*s)},d.en=h[D],d.Ls=h,d.p={},d})}}]);
