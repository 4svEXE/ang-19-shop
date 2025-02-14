import{b as w,d as P,e as L,f as l,g as V,h,i as W,k as U}from"./chunk-KXYDNBFV.js";import{a as k}from"./chunk-QIBAIRMP.js";import"./chunk-OFJJK5OL.js";import{Eb as o,Ec as R,Fb as i,Fc as A,Ic as B,Jc as N,Kc as j,Lb as f,Qb as T,Rb as r,Tb as s,Ub as b,a as F,aa as D,bb as u,cb as _,cc as v,dc as g,fa as E,fc as y,h as O,lb as S,rb as p,rc as M,yb as c}from"./chunk-SGSG5N6W.js";var I=class n{constructor(t){this.firestore=t}converter(){return{toFirestore(t){return F({},t)},fromFirestore(t){return t.data()}}}getDocument(t,e){let a=l(this.firestore,t).withConverter(this.converter()),d=h(a,e);return new O(m=>{W(d).then(x=>{m.next(x.exists()?x.data():void 0),m.complete()}).catch(x=>m.error(x))})}getCollection(t){let e=l(this.firestore,t).withConverter(this.converter());return P(e,{idField:"id"})}addDocument(t,e){let a=l(this.firestore,t).withConverter(this.converter());return L(a,e).then(d=>d.id)}updateDocument(t,e,a){let d=l(this.firestore,t).withConverter(this.converter()),m=h(d,e);return U(m,a)}deleteDocument(t,e){let a=l(this.firestore,t),d=h(a,e);return V(d)}static \u0275fac=function(e){return new(e||n)(E(w))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})};var C=class n{constructor(t){this.firebaseRepository=t}collectionName="orders";createOrder(t){return this.firebaseRepository.addDocument(this.collectionName,t)}getOrders(t){return this.firebaseRepository.getCollection(this.collectionName)}getOrderById(t){return this.firebaseRepository.getDocument(this.collectionName,t)}static \u0275fac=function(e){return new(e||n)(E(I))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})};function H(n,t){n&1&&(o(0,"div",4),r(1,` \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F...
`),i())}function J(n,t){if(n&1&&(o(0,"div",5),r(1),i()),n&2){let e=f();u(),s(" ",e.errorMessage,`
`)}}function K(n,t){if(n&1&&(o(0,"div")(1,"p")(2,"strong"),r(3,"\u0406\u043C'\u044F \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0447\u0430:"),i(),r(4),i(),o(5,"p")(6,"strong"),r(7,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),i(),r(8),i(),o(9,"p")(10,"strong"),r(11,"\u0410\u0434\u0440\u0435\u0441\u0430:"),i(),r(12),i(),o(13,"p")(14,"strong"),r(15,"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u043A\u043E\u0434:"),i(),r(16),i(),o(17,"p")(18,"strong"),r(19,"\u041A\u0440\u0430\u0457\u043D\u0430:"),i(),r(20),i()()),n&2){let e=f(2);u(4),s(" ",e.user.address.fullName,""),u(4),s(" ",e.user.address.phone,""),u(4),b(" ",e.user.address.address,", ",e.user.address.city,""),u(4),s(" ",e.user.address.postalCode,""),u(4),s(" ",e.user.address.country,"")}}function Q(n,t){if(n&1&&(o(0,"li")(1,"p")(2,"strong"),r(3,"\u0421\u0442\u0430\u0442\u0443\u0441:"),i(),r(4),i(),o(5,"p")(6,"strong"),r(7,"\u0421\u0443\u043C\u0430:"),i(),r(8),v(9,"currency"),i(),o(10,"p")(11,"strong"),r(12,"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F:"),i(),r(13),v(14,"date"),i()()),n&2){let e=t.$implicit;u(4),s(" ",e.status,""),u(4),s(" ",g(9,3,e.totalAmount),""),u(5),s(" ",g(14,5,e.createdAt),"")}}function X(n,t){if(n&1&&(o(0,"div")(1,"ul"),p(2,Q,15,7,"li",7),i()()),n&2){let e=f(2);u(2),c("ngForOf",e.orders)}}function Y(n,t){n&1&&(o(0,"p"),r(1,"\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u044C."),i())}function Z(n,t){if(n&1&&(o(0,"div")(1,"h2"),r(2,"\u041F\u0440\u043E\u0444\u0456\u043B\u044C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"),i(),o(3,"p")(4,"strong"),r(5,"\u0406\u043C'\u044F:"),i(),r(6),i(),o(7,"p")(8,"strong"),r(9,"Email:"),i(),r(10),i(),o(11,"p")(12,"strong"),r(13,"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0430\u043A\u0430\u0443\u043D\u0442\u0443:"),i(),r(14),v(15,"date"),i(),o(16,"p")(17,"strong"),r(18,"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0432\u0445\u0456\u0434:"),i(),r(19),v(20,"date"),i(),o(21,"h3"),r(22,"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"),i(),p(23,K,21,6,"div",3),o(24,"h3"),r(25,"\u0412\u0430\u0448\u0456 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"),i(),p(26,X,3,1,"div",6)(27,Y,2,0,"ng-template",null,0,y),i()),n&2){let e=T(28),a=f();u(6),s(" ",a.user.name,""),u(4),s(" ",a.user.email,""),u(4),s(" ",g(15,7,a.user.createdAt),""),u(5),s(" ",g(20,9,a.user.updatedAt),""),u(4),c("ngIf",a.user.address),u(3),c("ngIf",a.orders.length>0)("ngIfElse",e)}}var q=class n{constructor(t,e){this.authService=t;this.orderService=e;M(()=>{this.user=this.authService.currentUserSig(),this.user?(this.loadOrders(this.user.id),this.isLoading=!1):(this.errorMessage="\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0438\u0439!",this.isLoading=!1)})}user=null;orders=[];isLoading=!0;errorMessage="";loadOrders(t){this.orderService.getOrders(t).subscribe({next:e=>{this.orders=e},error:e=>{this.errorMessage="\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u0456 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u044C",console.error(e)}})}static \u0275fac=function(e){return new(e||n)(_(k),_(C))};static \u0275cmp=S({type:n,selectors:[["app-me"]],decls:3,vars:3,consts:[["noOrders",""],["class","loading-spinner",4,"ngIf"],["class","error-message",4,"ngIf"],[4,"ngIf"],[1,"loading-spinner"],[1,"error-message"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"]],template:function(e,a){e&1&&p(0,H,2,0,"div",1)(1,J,2,1,"div",2)(2,Z,29,11,"div",3),e&2&&(c("ngIf",a.isLoading),u(),c("ngIf",a.errorMessage),u(),c("ngIf",a.user))},dependencies:[j,R,A,N,B],encapsulation:2})};export{q as MeComponent};
