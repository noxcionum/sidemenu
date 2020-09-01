import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1>Маршрутизация в Angular 10</h1>
  <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidemenu';
}
