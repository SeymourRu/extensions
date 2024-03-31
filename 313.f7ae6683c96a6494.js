"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[313],{4840:(R,b,r)=>{r.d(b,{T:()=>f});var t=r(54438);let f=(()=>{class h{constructor(){this.textContent=""}ngOnDestroy(){}static#t=this.\u0275fac=function(l){return new(l||h)};static#e=this.\u0275cmp=t.VBU({type:h,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},standalone:!0,features:[t.aNF],decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(l,x){1&l&&t.nrm(0,"div",0),2&l&&t.Y8G("innerHTML",x.textContent,t.npT)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px}.docs-markdown h4 code{padding:0;background:none;border:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0}.docs-markdown table code{padding:0;background-color:transparent;border-color:transparent}.docs-markdown th{max-width:100px;padding:13px 16px;font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;border-radius:5px;white-space:pre-wrap;background:#00000003;border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2})}return h})()},91526:(R,b,r)=>{r.d(b,{v:()=>Q});var t=r(54438),f=r(88834),h=r(99213),g=r(96850),k=r(14823),l=r(21413),x=r(60177),m=r(49969),u=r(76939),T=r(36860),D=r(18617),y=r(99327),w=r(66969),E=r(56977);function O(i,d){if(1&i){const e=t.RV6();t.j41(0,"div",1)(1,"button",2),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.action())}),t.EFF(2),t.k0s()()}if(2&i){const e=t.XpG();t.R7$(2),t.SpI(" ",e.data.action," ")}}const F=["label"];function V(i,d){}const I=Math.pow(2,31)-1;class v{constructor(d,e){this._overlayRef=e,this._afterDismissed=new l.B,this._afterOpened=new l.B,this._onAction=new l.B,this._dismissedByAction=!1,this.containerInstance=d,d._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(d){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(d,I))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}const S=new t.nKC("MatSnackBarData");class _{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}let A=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275dir=t.FsC({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0})}return i})(),C=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275dir=t.FsC({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0})}return i})(),M=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275dir=t.FsC({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0})}return i})(),P=(()=>{class i{constructor(e,a){this.snackBarRef=e,this.data=a}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static#t=this.\u0275fac=function(a){return new(a||i)(t.rXU(v),t.rXU(S))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[t.aNF],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(a,n){1&a&&(t.j41(0,"div",0),t.EFF(1),t.k0s(),t.DNE(2,O,3,1,"div",1)),2&a&&(t.R7$(),t.SpI(" ",n.data.message,"\n"),t.R7$(),t.vxM(2,n.hasAction?2:-1))},dependencies:[f.$z,A,C,M],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}return i})();const j={snackBarState:(0,m.hZ)("state",[(0,m.wk)("void, hidden",(0,m.iF)({transform:"scale(0.8)",opacity:0})),(0,m.wk)("visible",(0,m.iF)({transform:"scale(1)",opacity:1})),(0,m.kY)("* => visible",(0,m.i0)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,m.kY)("* => void, * => hidden",(0,m.i0)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,m.iF)({opacity:0})))])};let z=0,B=(()=>{class i extends u.lb{constructor(e,a,n,s,o){super(),this._ngZone=e,this._elementRef=a,this._changeDetectorRef=n,this._platform=s,this.snackBarConfig=o,this._document=(0,t.WQX)(x.qQ),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new l.B,this._onExit=new l.B,this._onEnter=new l.B,this._animationState="void",this._liveElementId="mat-snack-bar-container-live-"+z++,this.attachDomPortal=c=>{this._assertNotAttached();const p=this._portalOutlet.attachDomPortal(c);return this._afterPortalAttached(),p},this._live="assertive"!==o.politeness||o.announcementMessage?"off"===o.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();const a=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),a}attachTemplatePortal(e){this._assertNotAttached();const a=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),a}onAnimationEnd(e){const{fromState:a,toState:n}=e;if(("void"===n&&"void"!==a||"hidden"===n)&&this._completeExit(),"visible"===n){const s=this._onEnter;this._ngZone.run(()=>{s.next(),s.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){const e=this._elementRef.nativeElement,a=this.snackBarConfig.panelClass;a&&(Array.isArray(a)?a.forEach(o=>e.classList.add(o)):e.classList.add(a)),this._exposeToModals();const n=this._label.nativeElement,s="mdc-snackbar__label";n.classList.toggle(s,!n.querySelector(`.${s}`))}_exposeToModals(){const e=this._liveElementId,a=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<a.length;n++){const s=a[n],o=s.getAttribute("aria-owns");this._trackedModals.add(s),o?-1===o.indexOf(e)&&s.setAttribute("aria-owns",o+" "+e):s.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{const a=e.getAttribute("aria-owns");if(a){const n=a.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),a=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&a){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(n=document.activeElement),e.removeAttribute("aria-hidden"),a.appendChild(e),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static#t=this.\u0275fac=function(a){return new(a||i)(t.rXU(t.SKi),t.rXU(t.aKT),t.rXU(t.gRc),t.rXU(T.OD),t.rXU(_))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(a,n){if(1&a&&(t.GBs(u.I3,7),t.GBs(F,7)),2&a){let s;t.mGM(s=t.lsd())&&(n._portalOutlet=s.first),t.mGM(s=t.lsd())&&(n._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(a,n){1&a&&t.Kam("@state.done",function(o){return n.onAnimationEnd(o)}),2&a&&t.zvX("@state",n._animationState)},standalone:!0,features:[t.Vt3,t.aNF],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(a,n){1&a&&(t.j41(0,"div",1)(1,"div",2,0)(3,"div",3),t.DNE(4,V,0,0,"ng-template",4),t.k0s(),t.nrm(5,"div"),t.k0s()()),2&a&&(t.R7$(5),t.BMQ("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[u.I3],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[j.snackBarState]}})}return i})();const L=new t.nKC("mat-snack-bar-default-options",{providedIn:"root",factory:function N(){return new _}});let X=(()=>{class i{get _openedSnackBarRef(){const e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(e,a,n,s,o,c){this._overlay=e,this._live=a,this._injector=n,this._breakpointObserver=s,this._parentSnackBar=o,this._defaultConfig=c,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=P,this.snackBarContainerComponent=B,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(e,a){return this._attach(e,a)}openFromTemplate(e,a){return this._attach(e,a)}open(e,a="",n){const s={...this._defaultConfig,...n};return s.data={message:e,action:a},s.announcementMessage===e&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,a){const s=t.zZn.create({parent:a&&a.viewContainerRef&&a.viewContainerRef.injector||this._injector,providers:[{provide:_,useValue:a}]}),o=new u.A8(this.snackBarContainerComponent,a.viewContainerRef,s),c=e.attach(o);return c.instance.snackBarConfig=a,c.instance}_attach(e,a){const n={...new _,...this._defaultConfig,...a},s=this._createOverlay(n),o=this._attachSnackBarContainer(s,n),c=new v(o,s);if(e instanceof t.C4Q){const p=new u.VA(e,null,{$implicit:n.data,snackBarRef:c});c.instance=o.attachTemplatePortal(p)}else{const p=this._createInjector(n,c),Z=new u.A8(e,void 0,p),W=o.attachComponentPortal(Z);c.instance=W.instance}return this._breakpointObserver.observe(y.Rp.HandsetPortrait).pipe((0,E.Q)(s.detachments())).subscribe(p=>{s.overlayElement.classList.toggle(this.handsetCssClass,p.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(c,n),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,a){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),a.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),a.duration&&a.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(a.duration))}_createOverlay(e){const a=new w.rR;a.direction=e.direction;let n=this._overlay.position().global();const s="rtl"===e.direction,o="left"===e.horizontalPosition||"start"===e.horizontalPosition&&!s||"end"===e.horizontalPosition&&s,c=!o&&"center"!==e.horizontalPosition;return o?n.left("0"):c?n.right("0"):n.centerHorizontally(),"top"===e.verticalPosition?n.top("0"):n.bottom("0"),a.positionStrategy=n,this._overlay.create(a)}_createInjector(e,a){return t.zZn.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:v,useValue:a},{provide:S,useValue:e.data}]})}static#t=this.\u0275fac=function(a){return new(a||i)(t.KVO(w.hJ),t.KVO(D.Ai),t.KVO(t.zZn),t.KVO(y.QP),t.KVO(i,12),t.KVO(L))};static#e=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),U=(()=>{class i{copyText(e){this.createTextareaAndSelect(e);const a=document.execCommand("copy");return this.removeFake(),a}createTextareaAndSelect(e){this.textarea=document.createElement("textarea"),this.textarea.style.fontSize="12pt",this.textarea.classList.add("cdk-visually-hidden");const a=window.pageYOffset||document.documentElement.scrollTop;this.textarea.style.top=a+"px",this.textarea.setAttribute("readonly",""),this.textarea.value=e,document.body.appendChild(this.textarea),this.textarea.select(),this.textarea.setSelectionRange(0,this.textarea.value.length)}removeFake(){this.textarea&&(document.body.removeChild(this.textarea),delete this.textarea)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const G=["demo"];function $(i,d){if(1&i){const e=t.RV6();t.j41(0,"mat-tab",9)(1,"div",10)(2,"div",11)(3,"button",12),t.bIt("click",function(){t.eBV(e);const n=t.sdS(8),s=t.XpG(2);return t.Njj(s.copySource(n))}),t.j41(4,"mat-icon"),t.EFF(5,"content_copy"),t.k0s()()(),t.j41(6,"div",13),t.nrm(7,"pre",14,1),t.k0s()()()}if(2&i){const e=d.$implicit;t.Y8G("label",e.file),t.R7$(3),t.Y8G("matTooltip","Copy example source"),t.R7$(4),t.Y8G("innerHtml",e.content,t.npT)}}function K(i,d){if(1&i&&(t.j41(0,"div",6)(1,"mat-tab-group",8),t.Z7z(2,$,9,3,"mat-tab",null,t.fX1),t.k0s()()),2&i){const e=t.XpG();t.R7$(2),t.Dyx(e.exampleData.files)}}function H(i,d){if(1&i&&t.nrm(0,"div",15),2&i){const e=t.XpG();t.Y8G("innerHtml",e.exampleData.description,t.npT)}}function Y(i,d){}let Q=(()=>{class i{constructor(e,a,n){this.snackbar=e,this.copier=a,this.componentFactoryResolver=n,this.showSource=!1}ngOnInit(){const e=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(e)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(e){this.copier.copyText(e.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}static#t=this.\u0275fac=function(a){return new(a||i)(t.rXU(X),t.rXU(U),t.rXU(t.OM3))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["example-viewer"]],viewQuery:function(a,n){if(1&a&&t.GBs(G,7,t.c1b),2&a){let s;t.mGM(s=t.lsd())&&(n.demoRef=s.first)}},inputs:{type:"type",exampleData:"exampleData"},standalone:!0,features:[t.aNF],decls:13,vars:4,consts:[["demo",""],["textContent",""],[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button","aria-label","View source",3,"click","matTooltip"],[1,"docs-example-viewer-source"],[1,"docs-example-viewer-body"],["animationDuration","0ms","mat-stretch-tabs","false"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"click","matTooltip"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],[3,"innerHtml"]],template:function(a,n){if(1&a){const s=t.RV6();t.j41(0,"div",2)(1,"div",3)(2,"span"),t.EFF(3),t.k0s(),t.nrm(4,"div",4),t.j41(5,"button",5),t.bIt("click",function(){return t.eBV(s),t.Njj(n.toggleSourceView())}),t.j41(6,"mat-icon"),t.EFF(7,"code"),t.k0s()()(),t.DNE(8,K,4,0,"div",6),t.j41(9,"div",7),t.DNE(10,H,1,1,"div")(11,Y,0,0,"ng-template",null,0,t.C5r),t.k0s()()}2&a&&(t.R7$(3),t.JRh(n.exampleData.title),t.R7$(2),t.Y8G("matTooltip","View source"),t.R7$(3),t.vxM(8,n.showSource?8:-1),t.R7$(2),t.vxM(10,n.exampleData.description?10:-1))},dependencies:[f.iY,k.oV,h.An,g.T8,g.mq],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]})}return i})()}}]);