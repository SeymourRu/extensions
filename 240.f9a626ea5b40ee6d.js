(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[240],{17240:(r,p,a)=>{"use strict";a.r(p),a.d(p,{DrawerApiComponent:()=>M,DrawerModule:()=>q,DrawerOverviewComponent:()=>A});var n=a(62510),C=a(277),s=a(94650),j=a(17570),f=a(63959),h=a(24006),v=a(4859),y=a(56709),x=a(59549),_=a(44144),D=a(71948),T=a(97392),b=a(1576);let k=(()=>{class t{constructor(e){this.drawer=e,this.position="right",this.width="300px",this.height="300px",this.hasBackdrop=!0,this.disableClose=!1,this.closeOnNavigation=!0}open(){this.drawer.open(c,{position:this.position,width:this.width,height:this.height,hasBackdrop:this.hasBackdrop,disableClose:this.disableClose,closeOnNavigation:this.closeOnNavigation,data:{}}).afterDismissed().subscribe(l=>{console.log("The drawer was dismissed")})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(j.Rv))},t.\u0275cmp=s.Xpm({type:t,selectors:[["drawer-example"]],decls:37,vars:6,consts:[[3,"ngModel","ngModelChange"],["value","top"],["value","right"],["value","bottom"],["value","left"],["matInput","","type","text",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,l){1&e&&(s.TgZ(0,"h2"),s._uU(1,"Drawer configuration"),s.qZA(),s.TgZ(2,"section")(3,"label"),s._uU(4,"Position:"),s.qZA(),s.TgZ(5,"mat-radio-group",0),s.NdJ("ngModelChange",function(m){return l.position=m}),s.TgZ(6,"mat-radio-button",1),s._uU(7,"Top"),s.qZA(),s.TgZ(8,"mat-radio-button",2),s._uU(9,"Right"),s.qZA(),s.TgZ(10,"mat-radio-button",3),s._uU(11,"Bottom"),s.qZA(),s.TgZ(12,"mat-radio-button",4),s._uU(13,"Left"),s.qZA()()(),s.TgZ(14,"section")(15,"mat-form-field")(16,"mat-label"),s._uU(17,"width"),s.qZA(),s.TgZ(18,"input",5),s.NdJ("ngModelChange",function(m){return l.width=m}),s.qZA()(),s._uU(19," \xa0 "),s.TgZ(20,"mat-form-field")(21,"mat-label"),s._uU(22,"height"),s.qZA(),s.TgZ(23,"input",5),s.NdJ("ngModelChange",function(m){return l.height=m}),s.qZA()()(),s.TgZ(24,"section")(25,"mat-checkbox",0),s.NdJ("ngModelChange",function(m){return l.hasBackdrop=m}),s._uU(26,"hasBackdrop"),s.qZA()(),s.TgZ(27,"section")(28,"mat-checkbox",0),s.NdJ("ngModelChange",function(m){return l.disableClose=m}),s._uU(29,"disableClose"),s.qZA()(),s.TgZ(30,"section")(31,"mat-checkbox",0),s.NdJ("ngModelChange",function(m){return l.closeOnNavigation=m}),s._uU(32,"closeOnNavigation"),s.qZA()(),s.TgZ(33,"h2"),s._uU(34,"Result"),s.qZA(),s.TgZ(35,"button",6),s.NdJ("click",function(){return l.open()}),s._uU(36,"Open"),s.qZA()),2&e&&(s.xp6(5),s.Q6J("ngModel",l.position),s.xp6(13),s.Q6J("ngModel",l.width),s.xp6(5),s.Q6J("ngModel",l.height),s.xp6(2),s.Q6J("ngModel",l.hasBackdrop),s.xp6(3),s.Q6J("ngModel",l.disableClose),s.xp6(3),s.Q6J("ngModel",l.closeOnNavigation))},dependencies:[h.Fj,h.JJ,h.On,v.lW,y.oG,x.KE,x.hX,_.Nt,D.VQ,D.U0],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}"]}),t})(),c=(()=>{class t{constructor(e){this.drawerRef=e}onClose(){this.drawerRef.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(f.u))},t.\u0275cmp=s.Xpm({type:t,selectors:[["drawer-overview"]],decls:9,vars:0,consts:[["fxLayoutAlign"," center",1,"mat-h1"],["fxFlex",""],["mat-icon-button","",3,"click"]],template:function(e,l){1&e&&(s.TgZ(0,"h1",0)(1,"span"),s._uU(2,"Title"),s.qZA(),s._UZ(3,"span",1),s.TgZ(4,"button",2),s.NdJ("click",function(){return l.onClose()}),s.TgZ(5,"mat-icon"),s._uU(6,"close"),s.qZA()()(),s.TgZ(7,"p"),s._uU(8," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),s.qZA())},dependencies:[v.lW,T.Hw,b.Wh,b.yH],encapsulation:2}),t})();const g={title:"Configurable drawer",component:k,files:[{file:"app.component.html",content:a(76749),filecontent:a(41415)},{file:"app.component.ts",content:a(39179),filecontent:a(50327)},{file:"app.component.scss",content:a(71602),filecontent:a(31076)}]};var o=a(36895);function u(t,i){if(1&t&&(s.TgZ(0,"li"),s._uU(1," You chose: "),s.TgZ(2,"i"),s._uU(3),s.qZA()()),2&t){const e=s.oxw();s.xp6(3),s.Oqu(e.animal)}}let w=(()=>{class t{constructor(e){this.drawer=e}open(){this.drawer.open(O,{width:"300px",data:{name:this.name,animal:this.animal}}).afterDismissed().subscribe(l=>{console.log("The drawer was dismissed"),this.animal=l})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(j.Rv))},t.\u0275cmp=s.Xpm({type:t,selectors:[["drawer-example"]],decls:10,vars:2,consts:[["matInput","",3,"ngModel","ngModelChange"],["mat-raised-button","",3,"click"],[4,"ngIf"]],template:function(e,l){1&e&&(s.TgZ(0,"ol")(1,"li")(2,"mat-form-field")(3,"mat-label"),s._uU(4,"What's your name?"),s.qZA(),s.TgZ(5,"input",0),s.NdJ("ngModelChange",function(m){return l.name=m}),s.qZA()()(),s.TgZ(6,"li")(7,"button",1),s.NdJ("click",function(){return l.open()}),s._uU(8,"Pick one"),s.qZA()(),s.YNc(9,u,4,1,"li",2),s.qZA()),2&e&&(s.xp6(5),s.Q6J("ngModel",l.name),s.xp6(4),s.Q6J("ngIf",l.animal))},dependencies:[o.O5,h.Fj,h.JJ,h.On,v.lW,x.KE,x.hX,_.Nt]}),t})(),O=(()=>{class t{constructor(e,l){this.drawerRef=e,this.data=l}onNoClick(){this.drawerRef.dismiss()}onOkClick(){this.drawerRef.dismiss(this.data.animal)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(f.u),s.Y36(j.jC))},t.\u0275cmp=s.Xpm({type:t,selectors:[["drawer-overview"]],decls:18,vars:2,consts:[["fxLayoutAlign"," center",1,"mat-h1"],["fxFlex",""],["mat-icon-button","",3,"click"],["matInput","",3,"ngModel","ngModelChange"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(e,l){1&e&&(s.TgZ(0,"h1",0),s._uU(1),s._UZ(2,"span",1),s.TgZ(3,"button",2),s.NdJ("click",function(){return l.onNoClick()}),s.TgZ(4,"mat-icon"),s._uU(5,"close"),s.qZA()()(),s.TgZ(6,"div")(7,"p"),s._uU(8,"What's your favorite animal?"),s.qZA(),s.TgZ(9,"mat-form-field")(10,"mat-label"),s._uU(11,"Favorite Animal"),s.qZA(),s.TgZ(12,"input",3),s.NdJ("ngModelChange",function(m){return l.data.animal=m}),s.qZA()()(),s.TgZ(13,"div")(14,"button",4),s.NdJ("click",function(){return l.onNoClick()}),s._uU(15,"No Thanks"),s.qZA(),s.TgZ(16,"button",5),s.NdJ("click",function(){return l.onOkClick()}),s._uU(17,"Ok"),s.qZA()()),2&e&&(s.xp6(1),s.hij(" Hi, ",l.data.name," "),s.xp6(11),s.Q6J("ngModel",l.data.animal))},dependencies:[h.Fj,h.JJ,h.On,v.lW,T.Hw,x.KE,x.hX,_.Nt,b.Wh,b.yH],encapsulation:2}),t})();const Z={title:"Sharing data",component:w,files:[{file:"app.component.html",content:a(29396),filecontent:a(16385)},{file:"app.component.ts",content:a(99853),filecontent:a(64688)},{file:"app.component.scss",content:a(58907),filecontent:a(67779)}]};var R=a(22281),E=a(29241);function U(t,i){if(1&t&&(s.ynx(0),s._UZ(1,"example-viewer",2),s.BQk()),2&t){const e=i.$implicit;s.xp6(1),s.Q6J("exampleData",e)}}function N(t,i){if(1&t&&(s.ynx(0),s.YNc(1,U,2,1,"ng-container",1),s.BQk()),2&t){const e=i.ngIf;s.xp6(1),s.Q6J("ngForOf",e.examples)}}function P(t,i){if(1&t&&(s.ynx(0),s._UZ(1,"doc-viewer",1),s.BQk()),2&t){const e=i.ngIf;s.xp6(1),s.Q6J("textContent",e.content.default)}}let A=(()=>{class t{constructor(e){this.route=e}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-drawer-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(e,l){1&e&&(s.YNc(0,N,2,1,"ng-container",0),s.ALo(1,"async")),2&e&&s.Q6J("ngIf",s.lcZ(1,1,l.route.data))},dependencies:[o.sg,o.O5,R.B,o.Ov],encapsulation:2}),t})(),M=(()=>{class t{constructor(e){this.route=e}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-drawer-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(e,l){1&e&&(s.YNc(0,P,2,1,"ng-container",0),s.ALo(1,"async")),2&e&&s.Q6J("ngIf",s.lcZ(1,1,l.route.data))},dependencies:[o.O5,E.z,o.Ov],encapsulation:2}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[C.m8,n.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:A,pathMatch:"full",data:{examples:[g,Z]}},{path:"api",component:M,pathMatch:"full",data:{content:a(37422)}},{path:"**",redirectTo:"overview"}])]}),t})()},29241:(r,p,a)=>{"use strict";a.d(p,{z:()=>C});var n=a(94650);let C=(()=>{class s{constructor(){this.textContent=""}ngOnDestroy(){}}return s.\u0275fac=function(f){return new(f||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(f,h){1&f&&n._UZ(0,"div",0),2&f&&n.Q6J("innerHTML",h.textContent,n.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0}.docs-markdown th{max-width:100px;padding:13px 16px;font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),s})()},22281:(r,p,a)=>{"use strict";a.d(p,{B:()=>k});var n=a(94650),C=a(17009),s=a(27163),j=a(36895),f=a(4859),h=a(97392),v=a(3848),y=a(10266);const x=["demo"];function _(c,g){if(1&c){const o=n.EpF();n.TgZ(0,"mat-tab",10)(1,"div",11)(2,"div",12)(3,"button",13),n.NdJ("click",function(){n.CHM(o);const w=n.MAs(8),O=n.oxw(2);return n.KtG(O.copySource(w))}),n.TgZ(4,"mat-icon"),n._uU(5,"content_copy"),n.qZA()()(),n.TgZ(6,"div",14),n._UZ(7,"pre",15,16),n.qZA()()()}if(2&c){const o=g.$implicit;n.Q6J("label",o.file),n.xp6(3),n.Q6J("matTooltip","Copy example source"),n.xp6(4),n.Q6J("innerHtml",o.content,n.oJD)}}function D(c,g){if(1&c&&(n.TgZ(0,"div",8)(1,"mat-tab-group"),n.YNc(2,_,9,3,"mat-tab",9),n.qZA()()),2&c){const o=n.oxw();n.xp6(2),n.Q6J("ngForOf",o.exampleData.files)}}function T(c,g){if(1&c&&n._UZ(0,"div",17),2&c){const o=n.oxw();n.Q6J("innerHtml",o.exampleData.description,n.oJD)}}function b(c,g){}let k=(()=>{class c{constructor(o,u,w){this.snackbar=o,this.copier=u,this.componentFactoryResolver=w,this.showSource=!1}ngOnInit(){const o=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(o)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(o){this.copier.copyText(o.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return c.\u0275fac=function(o){return new(o||c)(n.Y36(C.ux),n.Y36(s.u),n.Y36(n._Vd))},c.\u0275cmp=n.Xpm({type:c,selectors:[["example-viewer"]],viewQuery:function(o,u){if(1&o&&n.Gf(x,7,n.s_b),2&o){let w;n.iGM(w=n.CRH())&&(u.demoRef=w.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(o,u){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span"),n._uU(3),n.qZA(),n._UZ(4,"div",2),n.TgZ(5,"button",3),n.NdJ("click",function(){return u.toggleSourceView()}),n.TgZ(6,"mat-icon"),n._uU(7,"code"),n.qZA()()(),n.YNc(8,D,3,1,"div",4),n.TgZ(9,"div",5),n.YNc(10,T,1,1,"div",6),n.YNc(11,b,0,0,"ng-template",null,7,n.W1O),n.qZA()()),2&o&&(n.xp6(3),n.Oqu(u.exampleData.title),n.xp6(2),n.Q6J("matTooltip","View source"),n.xp6(3),n.Q6J("ngIf",u.showSource),n.xp6(2),n.Q6J("ngIf",u.exampleData.description))},dependencies:[j.sg,j.O5,f.lW,h.Hw,v.SP,v.uX,y.gM],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),c})()},76749:r=>{r.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Drawer configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Position:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;position&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>Top<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>width<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;width&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-symbol">&amp;nbsp;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>height<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;height&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;hasBackdrop&quot;</span>&gt;</span>hasBackdrop<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;disableClose&quot;</span>&gt;</span>disableClose<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;closeOnNavigation&quot;</span>&gt;</span>closeOnNavigation<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open()&quot;</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},29396:r=>{r.exports='<span class="hljs-tag">&lt;<span class="hljs-name">ol</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>What&#x27;s your name?<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open()&quot;</span>&gt;</span>Pick one<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;animal&quot;</span>&gt;</span>\n    You chose: <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>{{animal}}<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>\n'},71602:r=>{r.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n'},58907:r=>{r.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},39179:r=>{r.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DrawerPosition</span>, <span class="hljs-title class_">MtxDrawer</span>, <span class="hljs-title class_">MtxDrawerRef</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/drawer&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;drawer-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">position</span>: <span class="hljs-title class_">DrawerPosition</span> = <span class="hljs-string">&#x27;right&#x27;</span>;\n  width = <span class="hljs-string">&#x27;300px&#x27;</span>;\n  height = <span class="hljs-string">&#x27;300px&#x27;</span>;\n  hasBackdrop = <span class="hljs-literal">true</span>;\n  disableClose = <span class="hljs-literal">false</span>;\n  closeOnNavigation = <span class="hljs-literal">true</span>;\n\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> drawer: MtxDrawer</span>) {}\n\n  <span class="hljs-title function_">open</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> drawerRef = <span class="hljs-variable language_">this</span>.<span class="hljs-property">drawer</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DrawerConfigurableOverviewComponent</span>, {\n      <span class="hljs-attr">position</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">position</span>,\n      <span class="hljs-attr">width</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">width</span>,\n      <span class="hljs-attr">height</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">height</span>,\n      <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">hasBackdrop</span>,\n      <span class="hljs-attr">disableClose</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">disableClose</span>,\n      <span class="hljs-attr">closeOnNavigation</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">closeOnNavigation</span>,\n      <span class="hljs-attr">data</span>: {},\n    });\n\n    drawerRef.<span class="hljs-title function_">afterDismissed</span>().<span class="hljs-title function_">subscribe</span>(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;The drawer was dismissed&#x27;</span>);\n    });\n  }\n}\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;drawer-overview&#x27;</span>,\n  <span class="hljs-attr">template</span>: <span class="hljs-string">`\n    &lt;h1 class=&quot;mat-h1&quot; fxLayoutAlign=&quot; center&quot;&gt;\n      &lt;span&gt;Title&lt;/span&gt;\n      &lt;span fxFlex&gt;&lt;/span&gt;\n      &lt;button mat-icon-button (click)=&quot;onClose()&quot;&gt;\n        &lt;mat-icon&gt;close&lt;/mat-icon&gt;\n      &lt;/button&gt;\n    &lt;/h1&gt;\n    &lt;p&gt;\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud\n      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    &lt;/p&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DrawerConfigurableOverviewComponent</span> {\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> drawerRef: MtxDrawerRef&lt;DrawerConfigurableOverviewComponent&gt;</span>) {}\n\n  <span class="hljs-title function_">onClose</span>(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">drawerRef</span>.<span class="hljs-title function_">dismiss</span>();\n  }\n}\n'},99853:r=>{r.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">Inject</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxDrawer</span>, <span class="hljs-title class_">MtxDrawerRef</span>, <span class="hljs-variable constant_">MTX_DRAWER_DATA</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/drawer&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;drawer-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  animal?: <span class="hljs-built_in">string</span>;\n  name?: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> drawer: MtxDrawer</span>) {}\n\n  <span class="hljs-title function_">open</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> drawerRef = <span class="hljs-variable language_">this</span>.<span class="hljs-property">drawer</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DrawerSharingDataOverviewComponent</span>, {\n      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;300px&#x27;</span>,\n      <span class="hljs-attr">data</span>: { <span class="hljs-attr">name</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span>, <span class="hljs-attr">animal</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">animal</span> },\n    });\n\n    drawerRef.<span class="hljs-title function_">afterDismissed</span>().<span class="hljs-title function_">subscribe</span>(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;The drawer was dismissed&#x27;</span>);\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">animal</span> = result;\n    });\n  }\n}\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;drawer-overview&#x27;</span>,\n  <span class="hljs-attr">template</span>: <span class="hljs-string">`\n    &lt;h1 class=&quot;mat-h1&quot; fxLayoutAlign=&quot; center&quot;&gt;\n      Hi, {{ data.name }}\n      &lt;span fxFlex&gt;&lt;/span&gt;\n      &lt;button mat-icon-button (click)=&quot;onNoClick()&quot;&gt;\n        &lt;mat-icon&gt;close&lt;/mat-icon&gt;\n      &lt;/button&gt;\n    &lt;/h1&gt;\n    &lt;div&gt;\n      &lt;p&gt;What&#x27;s your favorite animal?&lt;/p&gt;\n      &lt;mat-form-field&gt;\n        &lt;mat-label&gt;Favorite Animal&lt;/mat-label&gt;\n        &lt;input matInput [(ngModel)]=&quot;data.animal&quot; /&gt;\n      &lt;/mat-form-field&gt;\n    &lt;/div&gt;\n    &lt;div&gt;\n      &lt;button mat-button (click)=&quot;onNoClick()&quot;&gt;No Thanks&lt;/button&gt;\n      &lt;button mat-button (click)=&quot;onOkClick()&quot; cdkFocusInitial&gt;Ok&lt;/button&gt;\n    &lt;/div&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DrawerSharingDataOverviewComponent</span> {\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">public</span> drawerRef: MtxDrawerRef&lt;DrawerSharingDataOverviewComponent&gt;,\n    <span class="hljs-meta">@Inject</span>(MTX_DRAWER_DATA) <span class="hljs-keyword">public</span> data: <span class="hljs-built_in">any</span>\n  </span>) {}\n\n  <span class="hljs-title function_">onNoClick</span>(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">drawerRef</span>.<span class="hljs-title function_">dismiss</span>();\n  }\n\n  <span class="hljs-title function_">onOkClick</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">drawerRef</span>.<span class="hljs-title function_">dismiss</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">animal</span>);\n  }\n}\n'},37422:(r,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});const n='<h1 id="drawer">Drawer</h1>\n<h2 id="api-reference-for-material-extensions-drawer">API reference for Material Extensions Drawer</h2>\n<p><code>import { MtxDrawerModule } from &apos;@ng-matero/extensions/drawer&apos;;</code></p>\n'},41415:(r,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});const n='<h2>Drawer configuration</h2>\n\n<section>\n  <label>Position:</label>\n  <mat-radio-group [(ngModel)]="position">\n    <mat-radio-button value="top">Top</mat-radio-button>\n    <mat-radio-button value="right">Right</mat-radio-button>\n    <mat-radio-button value="bottom">Bottom</mat-radio-button>\n    <mat-radio-button value="left">Left</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>width</mat-label>\n    <input matInput [(ngModel)]="width" type="text">\n  </mat-form-field>\n  &nbsp;\n  <mat-form-field>\n    <mat-label>height</mat-label>\n    <input matInput [(ngModel)]="height" type="text">\n  </mat-form-field>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="hasBackdrop">hasBackdrop</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="disableClose">disableClose</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="closeOnNavigation">closeOnNavigation</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<button mat-raised-button color="primary" (click)="open()">Open</button>\n'},31076:(r,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});const n=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n"},50327:(r,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});const n="import { Component } from '@angular/core';\nimport { DrawerPosition, MtxDrawer, MtxDrawerRef } from '@ng-matero/extensions/drawer';\n\n@Component({\n  selector: 'drawer-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  position: DrawerPosition = 'right';\n  width = '300px';\n  height = '300px';\n  hasBackdrop = true;\n  disableClose = false;\n  closeOnNavigation = true;\n\n  constructor(private drawer: MtxDrawer) {}\n\n  open() {\n    const drawerRef = this.drawer.open(DrawerConfigurableOverviewComponent, {\n      position: this.position,\n      width: this.width,\n      height: this.height,\n      hasBackdrop: this.hasBackdrop,\n      disableClose: this.disableClose,\n      closeOnNavigation: this.closeOnNavigation,\n      data: {},\n    });\n\n    drawerRef.afterDismissed().subscribe(result => {\n      console.log('The drawer was dismissed');\n    });\n  }\n}\n\n@Component({\n  selector: 'drawer-overview',\n  template: `\n    <h1 class=\"mat-h1\" fxLayoutAlign=\" center\">\n      <span>Title</span>\n      <span fxFlex></span>\n      <button mat-icon-button (click)=\"onClose()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </h1>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud\n      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    </p>\n  `,\n})\nexport class DrawerConfigurableOverviewComponent {\n  constructor(public drawerRef: MtxDrawerRef<DrawerConfigurableOverviewComponent>) {}\n\n  onClose(): void {\n    this.drawerRef.dismiss();\n  }\n}\n"},16385:(r,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});const n='<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What\'s your name?</mat-label>\n      <input matInput [(ngModel)]="name">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)="open()">Pick one</button>\n  </li>\n  <li *ngIf="animal">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n'},67779:(r,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});const n="/** No CSS for this example */\n"},64688:(r,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});const n="import { Component, Inject } from '@angular/core';\nimport { MtxDrawer, MtxDrawerRef, MTX_DRAWER_DATA } from '@ng-matero/extensions/drawer';\n\n@Component({\n  selector: 'drawer-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  animal?: string;\n  name?: string;\n\n  constructor(private drawer: MtxDrawer) {}\n\n  open() {\n    const drawerRef = this.drawer.open(DrawerSharingDataOverviewComponent, {\n      width: '300px',\n      data: { name: this.name, animal: this.animal },\n    });\n\n    drawerRef.afterDismissed().subscribe(result => {\n      console.log('The drawer was dismissed');\n      this.animal = result;\n    });\n  }\n}\n\n@Component({\n  selector: 'drawer-overview',\n  template: `\n    <h1 class=\"mat-h1\" fxLayoutAlign=\" center\">\n      Hi, {{ data.name }}\n      <span fxFlex></span>\n      <button mat-icon-button (click)=\"onNoClick()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </h1>\n    <div>\n      <p>What's your favorite animal?</p>\n      <mat-form-field>\n        <mat-label>Favorite Animal</mat-label>\n        <input matInput [(ngModel)]=\"data.animal\" />\n      </mat-form-field>\n    </div>\n    <div>\n      <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n      <button mat-button (click)=\"onOkClick()\" cdkFocusInitial>Ok</button>\n    </div>\n  `,\n})\nexport class DrawerSharingDataOverviewComponent {\n  constructor(\n    public drawerRef: MtxDrawerRef<DrawerSharingDataOverviewComponent>,\n    @Inject(MTX_DRAWER_DATA) public data: any\n  ) {}\n\n  onNoClick(): void {\n    this.drawerRef.dismiss();\n  }\n\n  onOkClick() {\n    this.drawerRef.dismiss(this.data.animal);\n  }\n}\n"}}]);