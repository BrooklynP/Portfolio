import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showSideMenu = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  shouldShowSideMenu(): boolean {
    return this.showSideMenu;
  }

  public getActivePage(page: string): string {
    return window.location.pathname.includes(page) ? 'active' : '';
  }

  public navigate(route: string) {
    if (route.includes('mailto')) {
      window.open(route);
    } else if (route === "") {
      window.location.pathname = "";
    }  else {
      this.router.navigate([route]);

    }
  }
}
