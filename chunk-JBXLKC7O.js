import{B as N,C as K,D as X,K as z,M as v,U,X as M,a as O,aa as h,ba as W,cb as k,da as C,fa as o,ia as Z,kc as nt,mb as tt,ob as et,sa as E,t as L,v as p,x,ya as T}from"./chunk-SGSG5N6W.js";var c=class{},q=(()=>{class e extends c{getTranslation(t){return L({})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})(),m=class{},B=(()=>{class e{handle(t){return t.key}static \u0275fac=function(n){return new(n||e)};static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();function P(e,s){if(e===s)return!0;if(e===null||s===null)return!1;if(e!==e&&s!==s)return!0;let t=typeof e,n=typeof s,i,r,a;if(t==n&&t=="object")if(Array.isArray(e)){if(!Array.isArray(s))return!1;if((i=e.length)==s.length){for(r=0;r<i;r++)if(!P(e[r],s[r]))return!1;return!0}}else{if(Array.isArray(s))return!1;a=Object.create(null);for(r in e){if(!P(e[r],s[r]))return!1;a[r]=!0}for(r in s)if(!(r in a)&&typeof s[r]<"u")return!1;return!0}return!1}function u(e){return typeof e<"u"&&e!==null}function b(e){return w(e)&&!Y(e)&&e!==null}function w(e){return typeof e=="object"}function Y(e){return Array.isArray(e)}function J(e){return typeof e=="string"}function at(e){return typeof e=="function"}function G(e,s){let t=Object.assign({},e);return w(e)?(w(e)&&w(s)&&Object.keys(s).forEach(n=>{b(s[n])?n in e?t[n]=G(e[n],s[n]):Object.assign(t,{[n]:s[n]}):Object.assign(t,{[n]:s[n]})}),t):G({},s)}function $(e,s){let t=s.split(".");s="";do s+=t.shift(),u(e)&&u(e[s])&&(b(e[s])||Y(e[s])||!t.length)?(e=e[s],s=""):t.length?s+=".":e=void 0;while(t.length);return e}function ot(e,s,t){let n=s.split("."),i=e;for(let r=0;r<n.length;r++){let a=n[r];r===n.length-1?i[a]=t:((!i[a]||!b(i[a]))&&(i[a]={}),i=i[a])}}var f=class{},H=(()=>{class e extends f{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,n){if(J(t))return this.interpolateString(t,n);if(at(t))return this.interpolateFunction(t,n)}interpolateFunction(t,n){return t(n)}interpolateString(t,n){return n?t.replace(this.templateMatcher,(i,r)=>{let a=$(n,r);return u(a)?a:i}):t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})(),d=class{},Q=(()=>{class e extends d{compile(t,n){return t}compileTranslations(t,n){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})(),_=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new T;onLangChange=new T;onDefaultLangChange=new T},j=new C("ISOLATE_TRANSLATE_SERVICE"),I=new C("USE_DEFAULT_LANG"),R=new C("DEFAULT_LANGUAGE"),A=new C("USE_EXTEND"),D=e=>p(e)?e:L(e),V=(()=>{class e{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(t){this.store.defaultLang=t}get currentLang(){return this.store.currentLang}set currentLang(t){this.store.currentLang=t}get langs(){return this.store.langs}set langs(t){this.store.langs=t}get translations(){return this.store.translations}set translations(t){this.store.translations=t}constructor(t,n,i,r,a,y=!0,l=!1,S=!1,F){this.store=t,this.currentLoader=n,this.compiler=i,this.parser=r,this.missingTranslationHandler=a,this.useDefaultLang=y,this.extend=S,l&&(this.store=new _),F&&this.setDefaultLang(F)}setDefaultLang(t){if(t===this.defaultLang)return;let n=this.retrieveTranslations(t);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=t),n.pipe(v(1)).subscribe(()=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(this.lastUseLanguage=t,t===this.currentLang)return L(this.translations[t]);this.currentLang||(this.currentLang=t);let n=this.retrieveTranslations(t);return p(n)?(n.pipe(v(1)).subscribe(()=>{this.changeLang(t)}),n):(this.changeLang(t),L(this.translations[t]))}changeLang(t){t===this.lastUseLanguage&&(this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t))}retrieveTranslations(t){if(typeof this.translations[t]>"u"||this.extend)return this._translationRequests[t]=this._translationRequests[t]||this.loadAndCompileTranslations(t),this._translationRequests[t]}getTranslation(t){return this.loadAndCompileTranslations(t)}loadAndCompileTranslations(t){this.pending=!0;let n=this.currentLoader.getTranslation(t).pipe(U(1),v(1));return this.loadingTranslations=n.pipe(x(i=>this.compiler.compileTranslations(i,t)),U(1),v(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[t]=this.extend&&this.translations[t]?O(O({},i),this.translations[t]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),n}setTranslation(t,n,i=!1){let r=this.compiler.compileTranslations(n,t);(i||this.extend)&&this.translations[t]?this.translations[t]=G(this.translations[t],r):this.translations[t]=r,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){let n=t.filter(i=>!this.langs.includes(i));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(t,n,i){let r;if(t&&(r=this.runInterpolation($(t,n),i)),r===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.runInterpolation($(this.translations[this.defaultLang],n),i)),r===void 0){let a={key:n,translateService:this};typeof i<"u"&&(a.interpolateParams=i),r=this.missingTranslationHandler.handle(a)}return r!==void 0?r:n}runInterpolation(t,n){if(Y(t))return t.map(i=>this.runInterpolation(i,n));if(b(t)){let i={};for(let r in t){let a=this.runInterpolation(t[r],n);a!==void 0&&(i[r]=a)}return i}else return this.parser.interpolate(t,n)}getParsedResult(t,n,i){if(n instanceof Array){let r={},a=!1;for(let l of n)r[l]=this.getParsedResultForKey(t,l,i),a=a||p(r[l]);if(!a)return r;let y=n.map(l=>D(r[l]));return X(y).pipe(x(l=>{let S={};return l.forEach((F,rt)=>{S[n[rt]]=F}),S}))}return this.getParsedResultForKey(t,n,i)}get(t,n){if(!u(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(z(i=>D(this.getParsedResult(i,t,n)))):D(this.getParsedResult(this.translations[this.currentLang],t,n))}getStreamOnTranslationChange(t,n){if(!u(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return N(K(()=>this.get(t,n)),this.onTranslationChange.pipe(M(i=>{let r=this.getParsedResult(i.translations,t,n);return D(r)})))}stream(t,n){if(!u(t)||!t.length)throw new Error('Parameter "key" required');return N(K(()=>this.get(t,n)),this.onLangChange.pipe(M(i=>{let r=this.getParsedResult(i.translations,t,n);return D(r)})))}instant(t,n){if(!u(t)||t.length===0)throw new Error('Parameter "key" is required and cannot be empty');let i=this.getParsedResult(this.translations[this.currentLang],t,n);return p(i)?Array.isArray(t)?t.reduce((r,a)=>(r[a]=a,r),{}):t:i}set(t,n,i=this.currentLang){ot(this.translations[i],t,J(n)?this.compiler.compile(n,i):this.compiler.compileTranslations(n,i)),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.loadAndCompileTranslations(t)}resetLang(t){delete this._translationRequests[t],delete this.translations[t]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let t=this.getBrowserCultureLang();return t?t.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||e)(o(_),o(c),o(d),o(f),o(m),o(I),o(j),o(A),o(R))};static \u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var vt=(()=>{class e{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(t,n){this.translate=t,this._ref=n}updateValue(t,n,i){let r=a=>{this.value=a!==void 0?a:t,this.lastKey=t,this._ref.markForCheck()};if(i){let a=this.translate.getParsedResult(i,t,n);p(a)?a.subscribe(r):r(a)}this.translate.get(t,n).subscribe(r)}transform(t,...n){if(!t||!t.length)return t;if(P(t,this.lastKey)&&P(n,this.lastParams))return this.value;let i;if(u(n[0])&&n.length)if(J(n[0])&&n[0].length){let r=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{i=JSON.parse(r)}catch(a){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else b(n[0])&&(i=n[0]);return this.lastKey=t,this.lastParams=n,this.updateValue(t,i),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{this.lastKey&&r.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,i,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,i,r.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,i))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||e)(k(V,16),k(nt,16))};static \u0275pipe=et({name:"translate",type:e,pure:!1});static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var Ct=(e={})=>Z([e.loader||{provide:c,useClass:q},e.compiler||{provide:d,useClass:Q},e.parser||{provide:f,useClass:H},e.missingTranslationHandler||{provide:m,useClass:B},_,{provide:j,useValue:e.isolate},{provide:I,useValue:e.useDefaultLang},{provide:A,useValue:e.extend},{provide:R,useValue:e.defaultLanguage},V]),Dt=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[t.loader||{provide:c,useClass:q},t.compiler||{provide:d,useClass:Q},t.parser||{provide:f,useClass:H},t.missingTranslationHandler||{provide:m,useClass:B},_,{provide:j,useValue:t.isolate},{provide:I,useValue:t.useDefaultLang},{provide:A,useValue:t.extend},{provide:R,useValue:t.defaultLanguage},V]}}static forChild(t={}){return{ngModule:e,providers:[t.loader||{provide:c,useClass:q},t.compiler||{provide:d,useClass:Q},t.parser||{provide:f,useClass:H},t.missingTranslationHandler||{provide:m,useClass:B},{provide:j,useValue:t.isolate},{provide:I,useValue:t.useDefaultLang},{provide:A,useValue:t.extend},{provide:R,useValue:t.defaultLanguage},V]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=tt({type:e});static \u0275inj=W({})}return e})();var g=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(g||{}),Ft="*";function Et(e,s){return{type:g.Trigger,name:e,definitions:s,options:{}}}function Tt(e,s=null){return{type:g.Animate,styles:s,timings:e}}function wt(e,s=null){return{type:g.Sequence,steps:e,options:s}}function Pt(e){return{type:g.Style,styles:e,offset:null}}function jt(e,s,t){return{type:g.State,name:e,styles:s,options:t}}function It(e,s,t=null){return{type:g.Transition,expr:e,animation:s,options:t}}var st=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(s=0,t=0){this.totalTime=s+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(s=>s()),this._onDoneFns=[])}onStart(s){this._originalOnStartFns.push(s),this._onStartFns.push(s)}onDone(s){this._originalOnDoneFns.push(s),this._onDoneFns.push(s)}onDestroy(s){this._onDestroyFns.push(s)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(s=>s()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(s=>s()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(s){this._position=this.totalTime?s*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(s){let t=s=="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},it=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(s){this.players=s;let t=0,n=0,i=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++t==r&&this._onFinish()}),a.onDestroy(()=>{++n==r&&this._onDestroy()}),a.onStart(()=>{++i==r&&this._onStart()})}),this.totalTime=this.players.reduce((a,y)=>Math.max(a,y.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(s=>s()),this._onDoneFns=[])}init(){this.players.forEach(s=>s.init())}onStart(s){this._onStartFns.push(s)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(s=>s()),this._onStartFns=[])}onDone(s){this._onDoneFns.push(s)}onDestroy(s){this._onDestroyFns.push(s)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(s=>s.play())}pause(){this.players.forEach(s=>s.pause())}restart(){this.players.forEach(s=>s.restart())}finish(){this._onFinish(),this.players.forEach(s=>s.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(s=>s.destroy()),this._onDestroyFns.forEach(s=>s()),this._onDestroyFns=[])}reset(){this.players.forEach(s=>s.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(s){let t=s*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,t/n.totalTime):1;n.setPosition(i)})}getPosition(){let s=this.players.reduce((t,n)=>t===null||n.totalTime>t.totalTime?n:t,null);return s!=null?s.getPosition():0}beforeDestroy(){this.players.forEach(s=>{s.beforeDestroy&&s.beforeDestroy()})}triggerCallback(s){let t=s=="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},Rt="!";export{c as a,_ as b,V as c,vt as d,Ct as e,Dt as f,g,Ft as h,Et as i,Tt as j,wt as k,Pt as l,jt as m,It as n,st as o,it as p,Rt as q};
