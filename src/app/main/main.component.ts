import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/home">Inicio</a></li>
        <li><a routerLink="/sales">Ventas</a></li>
      </ul>
    </nav>
    <a id="logo">
       <img src="assets/img/logo.svg" title="Logo Play&Stars">
    </a>
  `,
})
export class MainComponent { }
