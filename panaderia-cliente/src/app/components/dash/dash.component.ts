import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array(50).fill(0).map(() =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 950px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    iconRegistry.addSvgIcon(
      'pan-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/pan-icon.svg'));
    iconRegistry.addSvgIcon(
      'inventory',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/inventory.svg'));
    iconRegistry.addSvgIcon(
      'panaderia',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/panaderia.svg'));
    iconRegistry.addSvgIcon(
      'pedido',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/order.svg'));
    iconRegistry.addSvgIcon(
      'ver-order',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ver-order.svg'));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

}
