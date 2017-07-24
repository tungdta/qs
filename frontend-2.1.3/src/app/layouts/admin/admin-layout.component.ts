import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { Subscription } from 'rxjs/Subscription';

import { TranslateService } from '@ngx-translate/core';
import * as Ps from 'perfect-scrollbar';
// AuthService
import {AuthService} from '../../shared/auth/auth.service';
// ConfirmService
import { ConfirmService } from '../../shared/service/confirm/confirm.service';

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  private _router: Subscription;

  today: number = Date.now();
  url: string;
  showSettings = false;
  dark: boolean;
  boxed: boolean;
  collapseSidebar: boolean;
  compactSidebar: boolean;
  currentLang = 'vi';

  @ViewChild('sidemenu') sidemenu;
  @ViewChild('root') root;

  constructor(private router: Router, public menuItems: MenuItems, public translate: TranslateService, private auth: AuthService,
    private confirmService: ConfirmService) {
    // const browserLang: string = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|vi/) ? browserLang : 'vi');
  }

  ngOnInit(): void {
    const elemSidebar = <HTMLElement>document.querySelector('.app-inner > .sidebar-panel');
    const elemContent = <HTMLElement>document.querySelector('.app-inner > .mat-sidenav-content');

    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar) {
      Ps.initialize(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
      Ps.initialize(elemContent, { wheelSpeed: 2, suppressScrollX: true });
    }

    this.url = this.router.url;

    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      this.url = event.url;
      this.runOnRouteChange();
    });

    // TueLD
    this.compactSidebar = true;
  }

  ngAfterViewInit(): void {
    this.root.dir = 'ltr';
    this.runOnRouteChange();
  }

  ngOnDestroy(): void {
    this._router.unsubscribe();
  }

  runOnRouteChange(): void {
    if (this.isOver()) {
      this.sidemenu.close();
    }

    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar) {
      const elemContent = <HTMLElement>document.querySelector('.app-inner > .mat-sidenav-content');
      Ps.update(elemContent);
    }
  }

  isOver(): boolean {
    if (this.url === '/apps/messages' ||
      this.url === '/apps/calendar' ||
      this.url === '/apps/media' ||
      this.url === '/maps/leaflet' ||
      this.url === '/taskboard') {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  menuMouseOver(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'over';
    }
  }

  menuMouseOut(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'side';
    }
  }

  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar) {
      const elemSidebar = <HTMLElement>document.querySelector('.app-inner > .sidebar-panel');
      setTimeout(() => { Ps.update(elemSidebar) }, 350);
    }
  }

  addMenuItem(): void {
    this.menuItems.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        { state: 'menu', name: 'MENU' },
        { state: 'timelmenuine', name: 'MENU' }
      ]
    });
  }

  signOut(): void {
    this.confirmService.confirm('confirm.logout', () => {
      console.log('Log out');
      this.auth.logout();
      this.router.navigate(['/session/signin']);
    });

  }
}
