"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{41710:(d,c,s)=>{s.d(c,{_:()=>o});var t=s(94650),_=s(11481);class o{constructor(e){this.bodyTitle=e,this._title="",this._originalTitle="Angular Material Extensions library"}get title(){return this._title}set title(e){this._title=e&&this.capitalizeTitle(e),this.bodyTitle.setTitle(e=""!==e?`${this._title} | Angular Material Extensions`:this._originalTitle)}capitalizeTitle(e){return e.split("-").join(" ").replace(/\b\w+\b/g,i=>i.substring(0,1).toUpperCase()+i.substring(1))}static#t=this.\u0275fac=function(i){return new(i||o)(t.LFG(_.Dx))};static#i=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}},72084:(d,c,s)=>{s.d(c,{y:()=>l});var t=s(94650),_=s(31387);let o=0;class l{constructor(i,r){this.el=i,this.navigationFocusService=r,this.tabindex="-1",this.outline="none",i.nativeElement.id||(i.nativeElement.id="skip-link-target-"+o++),this.navigationFocusService.requestFocusOnNavigation(i.nativeElement),this.navigationFocusService.requestSkipLinkFocus(i.nativeElement)}ngOnDestroy(){this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement),this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement)}static#t=this.\u0275fac=function(r){return new(r||l)(t.Y36(t.SBq),t.Y36(_.Y))};static#i=this.\u0275dir=t.lG2({type:l,selectors:[["","focusOnNavigation",""]],hostVars:3,hostBindings:function(r,n){2&r&&(t.Ikx("tabindex",n.tabindex),t.Udp("outline",n.outline))}})}},41108:(d,c,s)=>{s.d(c,{P:()=>i});var t=s(94650),_=s(21281),o=s(36895);function l(r,n){if(1&r){const a=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){t.CHM(a);const h=t.oxw();return t.KtG(h._onClosed())}),t.TgZ(1,"span",2),t._uU(2,"\xd7"),t.qZA()()}}const e=["*"];class i{constructor(n){this._changeDetectorRef=n,this.type="default",this._dismissible=!1,this.elevation=0,this.closed=new t.vpe}get _hostClassList(){return`mtx-alert-${this.type} mat-elevation-z${this.elevation}`}get dismissible(){return this._dismissible}set dismissible(n){this._dismissible=(0,_.Ig)(n)}_onClosed(){this._changeDetectorRef.markForCheck(),this.closed.emit(this)}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(t.sBO))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["mtx-alert"]],hostAttrs:["role","alert"],hostVars:6,hostBindings:function(a,u){2&a&&(t.Tol(u._hostClassList),t.ekj("mtx-alert",!0)("mtx-alert-dismissible",u.dismissible))},inputs:{type:"type",dismissible:"dismissible",elevation:"elevation"},outputs:{closed:"closed"},exportAs:["mtxAlert"],ngContentSelectors:e,decls:2,vars:1,consts:[[3,"ngIf"],["type","button","aria-label","Close",1,"mtx-alert-close",3,"click"],["aria-hidden","true"]],template:function(a,u){1&a&&(t.F$t(),t.Hsn(0),t.YNc(1,l,3,0,"ng-template",0)),2&a&&(t.xp6(1),t.Q6J("ngIf",u.dismissible))},dependencies:[o.O5],styles:[".mtx-alert{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.mtx-alert-close{position:absolute;top:0;bottom:0;right:0;padding:0 1.25rem;font-size:1.5rem;line-height:1;color:inherit;opacity:.5;background-color:transparent;border:0;cursor:pointer}[dir=rtl] .mtx-alert-close{right:auto;left:0}.mtx-alert-close:hover{opacity:.75}.mtx-alert-dismissible{padding-right:4rem}\n"],encapsulation:2,changeDetection:0})}}}]);