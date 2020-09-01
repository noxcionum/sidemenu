import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
    <ng-sidebar-container style = "height: 100vh">
        
    <ng-sidebar
    [(opened)]="_opened"
    [mode]="_MODES[_modeNum]"
    [keyClose]="_keyClose"
    [position]="_POSITIONS[_positionNum]"
    [dock]="_dock"
    [dockedSize]="'500px'"
    [autoCollapseHeight]="_autoCollapseHeight"
    [autoCollapseWidth]="_autoCollapseWidth"
    [closeOnClickOutside]="_closeOnClickOutside"
    [closeOnClickBackdrop]="_closeOnClickBackdrop"
    [showBackdrop]="_showBackdrop"
    [animate]="_animate"
    [trapFocus]="_trapFocus"
    [autoFocus]="_autoFocus"
    [sidebarClass]="'demo-sidebar'"
    [ariaLabel]="'My sidebar'"
    (onOpenStart)="_onOpenStart()"
    (onOpened)="_onOpened()"
    (onCloseStart)="_onCloseStart()"
    (onClosed)="_onClosed()"
    (onTransitionEnd)="_onTransitionEnd()">
    <p>Sidebar contents</p>
    <button class="demo-control" (click)="_toggleOpened()">Close sidebar</button>
    <p><a closeSidebar>This will close the sidebar too</a></p>

  </ng-sidebar>
  <div ng-sidebar-content>
  <header class="demo-header">
    <button (click)="_toggleOpened()" class="demo-header__toggle">Toggle sidebar</button>
    <span>ng-sidebar</span>
  </header>
  <section class="demo-contents">
    <h1>Options</h1>
    <h2>Sidebar</h2>
    <div>
      <button class="demo-control" (click)="_toggleOpened()">opened ({{_opened}})</button>
      <button class="demo-control" (click)="_toggleMode()">mode ({{_MODES[_modeNum]}})</button>
      <button class="demo-control" (click)="_togglePosition()">position ({{_POSITIONS[_positionNum]}})</button>
      <button class="demo-control" (click)="_toggleDock()">dock ({{_dock}})</button>
    </div>
    <div>
      <button class="demo-control" (click)="_toggleAutoCollapseHeight()">Auto collapse at 500px height ({{_autoCollapseHeight ? 'true' : 'false'}})</button>
      <button class="demo-control" (click)="_toggleAutoCollapseWidth()">Auto collapse at 500px width ({{_autoCollapseWidth ? 'true' : 'false'}})</button>
    </div>
    <div>
      <button class="demo-control" (click)="_toggleCloseOnClickOutside()">closeOnClickOutside ({{_closeOnClickOutside}})</button>
      <button class="demo-control" (click)="_toggleCloseOnClickBackdrop()">closeOnClickBackdrop ({{_closeOnClickBackdrop}})</button>
      <button class="demo-control" (click)="_toggleShowBackdrop()">showBackdrop ({{_showBackdrop}})</button>
      <button class="demo-control" (click)="_toggleAnimate()">animate ({{_animate}})</button>
    </div>
    <div>
      <button class="demo-control" (click)="_toggleTrapFocus()">trapFocus ({{_trapFocus}})</button>
      <button class="demo-control" (click)="_toggleAutoFocus()">autoFocus ({{_autoFocus}})</button>
      <button class="demo-control" (click)="_toggleKeyClose()">keyClose ({{_keyClose}})</button>
    </div>
    
  </section>
</div>
      </ng-sidebar-container>
  `
})
export class SidebarComponent {
   _opened: boolean = false;
   _modeNum: number = 1;
   _positionNum: number = 0;
   _dock: boolean = false;
   _closeOnClickOutside: boolean = false;
   _closeOnClickBackdrop: boolean = false;
   _showBackdrop: boolean = false;
   _animate: boolean = true;
   _trapFocus: boolean = true;
   _autoFocus: boolean = true;
   _keyClose: boolean = false;
   _autoCollapseHeight: number = null;
   _autoCollapseWidth: number = null;

   _MODES: Array<string> = ['over', 'push', 'slide'];
   _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

   _toggleOpened(): void {
    this._opened = !this._opened;
  }

   _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

   _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

   _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

   _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

   _toggleDock(): void {
    this._dock = !this._dock;
  }

   _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

   _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

   _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

   _toggleAnimate(): void {
    this._animate = !this._animate;
  }

   _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

   _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

   _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

   _onOpenStart(): void {
    console.info('Sidebar opening');
  }

   _onOpened(): void {
    console.info('Sidebar opened');
  }

   _onCloseStart(): void {
    console.info('Sidebar closing');
  }

   _onClosed(): void {
    console.info('Sidebar closed');
  }

   _onTransitionEnd(): void {
    console.info('Transition ended');
  }

   _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }
}