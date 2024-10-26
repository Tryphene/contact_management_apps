// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }

import { Component, Input, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
  trigger('simpleFade', [
    state('visible', style({ opacity: 1 })),
    state('hidden', style({ opacity: 0 })),
    transition('visible <=> hidden', [
      animate('1s')
    ])
  ])
]

})
export class HeaderComponent {
  isVisible = true;
  @Input() title: any;
  links: string[] = ["Accueil", "Liste"]
  

  toggle() {
    this.isVisible = !this.isVisible;
  }
}

