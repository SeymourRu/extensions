(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[785],{24785:(c,i,n)=>{"use strict";n.r(i),n.d(i,{TooltipApiComponent:()=>A,TooltipModule:()=>E,TooltipOverviewComponent:()=>b});var s=n(4521),f=n(38622),r=n(93075),t=n(5e3),u=n(67322),v=n(74107),g=n(69808),T=n(90508),j=n(47423),C=n(34220);function _(a,p){if(1&a&&(t.TgZ(0,"mat-option",5),t._uU(1),t.qZA()),2&a){const o=p.$implicit;t.Q6J("value",o),t.xp6(1),t.hij(" ",o," ")}}function w(a,p){1&a&&(t.TgZ(0,"div"),t._uU(1,"This is a template!"),t.qZA(),t.TgZ(2,"div"),t._uU(3,"Ceci est un mod\xe8le!"),t.qZA(),t.TgZ(4,"div"),t._uU(5,"\u8fd9\u662f\u4e00\u4e2a\u6a21\u677f!"),t.qZA(),t.TgZ(6,"div"),t._uU(7,"\u3053\u308c\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059!"),t.qZA(),t.TgZ(8,"div",6),t._uU(9,"\u0647\u0630\u0627 \u0642\u0627\u0644\u0628!"),t.qZA())}const O={title:"Tooltip with template",component:(()=>{class a{constructor(){this.positionOptions=["after","before","above","below","left","right"],this.position=new r.NI(this.positionOptions[0])}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["tooltip-example"]],decls:11,vars:4,consts:[[1,"example-user-input"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","aria-label","Button that displays a tooltip in various positions",3,"mtxTooltip","mtxTooltipPosition"],["tooltipTpl",""],[3,"value"],[1,"text-right"]],template:function(o,x){if(1&o&&(t.TgZ(0,"h2"),t._uU(1,"Tooltip with template"),t.qZA(),t.TgZ(2,"mat-form-field",0)(3,"mat-label"),t._uU(4,"Tooltip position"),t.qZA(),t.TgZ(5,"mat-select",1),t.YNc(6,_,2,2,"mat-option",2),t.qZA()(),t.TgZ(7,"button",3),t._uU(8," Action\n"),t.qZA(),t.YNc(9,w,10,0,"ng-template",null,4,t.W1O)),2&o){const P=t.MAs(10);t.xp6(5),t.Q6J("formControl",x.position),t.xp6(1),t.Q6J("ngForOf",x.positionOptions),t.xp6(1),t.Q6J("mtxTooltip",P)("mtxTooltipPosition",x.position.value)}},directives:[u.KE,u.hX,v.gD,r.JJ,r.oH,g.sg,T.ey,j.lW,C.Yv],styles:[".mat-button-base[_ngcontent-%COMP%]{margin:0 .5rem}.text-right[_ngcontent-%COMP%]{text-align:right}"]}),a})(),files:[{file:"app.component.html",content:n(19410),filecontent:n(47440)},{file:"app.component.ts",content:n(27847),filecontent:n(23494)},{file:"app.component.scss",content:n(8959),filecontent:n(49503)}]};var l=n(22281),d=n(29241);function e(a,p){if(1&a&&(t.ynx(0),t._UZ(1,"example-viewer",2),t.BQk()),2&a){const o=p.$implicit;t.xp6(1),t.Q6J("exampleData",o)}}function m(a,p){if(1&a&&(t.ynx(0),t.YNc(1,e,2,1,"ng-container",1),t.BQk()),2&a){const o=p.ngIf;t.xp6(1),t.Q6J("ngForOf",o.examples)}}function h(a,p){if(1&a&&(t.ynx(0),t._UZ(1,"doc-viewer",1),t.BQk()),2&a){const o=p.ngIf;t.xp6(1),t.Q6J("textContent",o.content.default)}}let b=(()=>{class a{constructor(o){this.route=o}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(s.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tooltip-overview"]],decls:10,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(o,x){1&o&&(t.TgZ(0,"p"),t._uU(1," The extensions tooltip supports rich content, its APIs are exactly the same as material tooltip. You should use prefix "),t.TgZ(2,"code"),t._uU(3,"mtx"),t.qZA(),t._uU(4," instead of "),t.TgZ(5,"code"),t._uU(6,"mat"),t.qZA(),t._uU(7,".\n"),t.qZA(),t.YNc(8,m,2,1,"ng-container",0),t.ALo(9,"async")),2&o&&(t.xp6(8),t.Q6J("ngIf",t.lcZ(9,1,x.route.data)))},directives:[g.O5,g.sg,l.B],pipes:[g.Ov],encapsulation:2}),a})(),A=(()=>{class a{constructor(o){this.route=o}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(s.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tooltip-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(o,x){1&o&&(t.YNc(0,h,2,1,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,x.route.data))},directives:[g.O5,d.z],pipes:[g.Ov],encapsulation:2}),a})(),E=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[f.m8,s.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:b,pathMatch:"full",data:{examples:[O]}},{path:"api",component:A,pathMatch:"full",data:{content:n(26922)}},{path:"**",redirectTo:"overview"}])]]}),a})()},29241:(c,i,n)=>{"use strict";n.d(i,{z:()=>f});var s=n(5e3);let f=(()=>{class r{constructor(){this.textContent=""}ngOnDestroy(){}}return r.\u0275fac=function(u){return new(u||r)},r.\u0275cmp=s.Xpm({type:r,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(u,v){1&u&&s._UZ(0,"div",0),2&u&&s.Q6J("innerHTML",v.textContent,s.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),r})()},22281:(c,i,n)=>{"use strict";n.d(i,{B:()=>O});var s=n(5e3),f=n(57261),r=n(27163),t=n(47423),u=n(87238),v=n(25245),g=n(69808),T=n(53251);const j=["demo"];function C(l,d){if(1&l){const e=s.EpF();s.TgZ(0,"mat-tab",10)(1,"div",11)(2,"div",12)(3,"button",13),s.NdJ("click",function(){s.CHM(e);const h=s.MAs(8);return s.oxw(2).copySource(h)}),s.TgZ(4,"mat-icon"),s._uU(5,"content_copy"),s.qZA()()(),s.TgZ(6,"div",14),s._UZ(7,"pre",15,16),s.qZA()()()}if(2&l){const e=d.$implicit;s.Q6J("label",e.file),s.xp6(3),s.Q6J("matTooltip","Copy example source"),s.xp6(4),s.Q6J("innerHtml",e.content,s.oJD)}}function _(l,d){if(1&l&&(s.TgZ(0,"div",8)(1,"mat-tab-group"),s.YNc(2,C,9,3,"mat-tab",9),s.qZA()()),2&l){const e=s.oxw();s.xp6(2),s.Q6J("ngForOf",e.exampleData.files)}}function w(l,d){if(1&l&&s._UZ(0,"div",17),2&l){const e=s.oxw();s.Q6J("innerHtml",e.exampleData.description,s.oJD)}}function y(l,d){}let O=(()=>{class l{constructor(e,m,h){this.snackbar=e,this.copier=m,this.componentFactoryResolver=h,this.showSource=!1}ngOnInit(){const e=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(e)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(e){this.copier.copyText(e.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return l.\u0275fac=function(e){return new(e||l)(s.Y36(f.ux),s.Y36(r.u),s.Y36(s._Vd))},l.\u0275cmp=s.Xpm({type:l,selectors:[["example-viewer"]],viewQuery:function(e,m){if(1&e&&s.Gf(j,7,s.s_b),2&e){let h;s.iGM(h=s.CRH())&&(m.demoRef=h.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(e,m){1&e&&(s.TgZ(0,"div",0)(1,"div",1)(2,"span"),s._uU(3),s.qZA(),s._UZ(4,"div",2),s.TgZ(5,"button",3),s.NdJ("click",function(){return m.toggleSourceView()}),s.TgZ(6,"mat-icon"),s._uU(7,"code"),s.qZA()()(),s.YNc(8,_,3,1,"div",4),s.TgZ(9,"div",5),s.YNc(10,w,1,1,"div",6),s.YNc(11,y,0,0,"ng-template",null,7,s.W1O),s.qZA()()),2&e&&(s.xp6(3),s.Oqu(m.exampleData.title),s.xp6(2),s.Q6J("matTooltip","View source"),s.xp6(3),s.Q6J("ngIf",m.showSource),s.xp6(2),s.Q6J("ngIf",m.exampleData.description))},directives:[t.lW,u.gM,v.Hw,g.O5,T.SP,g.sg,T.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),l})()},19410:c=>{c.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Tooltip with template<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-user-input&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Tooltip position<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-select</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;position&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let positionOption of positionOptions&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;positionOption&quot;</span>&gt;</span>\n      {{positionOption}}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-select</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span>\n        [<span class="hljs-attr">mtxTooltip</span>]=<span class="hljs-string">&quot;tooltipTpl&quot;</span>\n        [<span class="hljs-attr">mtxTooltipPosition</span>]=<span class="hljs-string">&quot;position.value&quot;</span>\n        <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Button that displays a tooltip in various positions&quot;</span>&gt;</span>\n  Action\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">tooltipTpl</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>This is a template!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Ceci est un mod\xe8le!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u8fd9\u662f\u4e00\u4e2a\u6a21\u677f!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u3053\u308c\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-right&quot;</span>&gt;</span>\u0647\u0630\u0627 \u0642\u0627\u0644\u0628!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n'},27847:c=>{c.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TooltipPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/tooltip&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;tooltip-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">positionOptions</span>: <span class="hljs-title class_">TooltipPosition</span>[] = [<span class="hljs-string">&#x27;after&#x27;</span>, <span class="hljs-string">&#x27;before&#x27;</span>, <span class="hljs-string">&#x27;above&#x27;</span>, <span class="hljs-string">&#x27;below&#x27;</span>, <span class="hljs-string">&#x27;left&#x27;</span>, <span class="hljs-string">&#x27;right&#x27;</span>];\n  position = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">positionOptions</span>[<span class="hljs-number">0</span>]);\n}\n'},26922:(c,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>s});const s='<h1 id="tooltip">Tooltip</h1>\n<h2 id="api-reference-for-material-extensions-tooltip">API reference for Material Extensions Tooltip</h2>\n<p><code>import { MtxTooltipModule } from &apos;@ng-matero/extensions/tooltip&apos;;</code></p>\n<h3 id="apis">APIs</h3>\n<p>The APIs are similar with <a href="https://material.angular.io/components/tooltip/api">Material Tooltip</a>, just replace the prefix <code>mat</code> with <code>mtx</code>.</p>\n'},47440:(c,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>s});const s='<h2>Tooltip with template</h2>\n\n<mat-form-field class="example-user-input">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]="position">\n    <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        [mtxTooltip]="tooltipTpl"\n        [mtxTooltipPosition]="position.value"\n        aria-label="Button that displays a tooltip in various positions">\n  Action\n</button>\n\n<ng-template #tooltipTpl>\n  <div>This is a template!</div>\n  <div>Ceci est un mod\xe8le!</div>\n  <div>\u8fd9\u662f\u4e00\u4e2a\u6a21\u677f!</div>\n  <div>\u3053\u308c\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059!</div>\n  <div class="text-right">\u0647\u0630\u0627 \u0642\u0627\u0644\u0628!</div>\n</ng-template>\n'},23494:(c,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\nimport { FormControl } from '@angular/forms';\nimport { TooltipPosition } from '@ng-matero/extensions/tooltip';\n\n@Component({\n  selector: 'tooltip-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];\n  position = new FormControl(this.positionOptions[0]);\n}\n"},8959:c=>{"use strict";c.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-button-base</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">0</span> .<span class=\\"hljs-number\\">5rem</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.text-right</span> {\\n  <span class=\\"hljs-attribute\\">text-align</span>: right;\\n}\\n"'},49503:c=>{"use strict";c.exports='export default ".mat-button-base {\\n  margin: 0 .5rem;\\n}\\n\\n.text-right {\\n  text-align: right;\\n}\\n";'}}]);