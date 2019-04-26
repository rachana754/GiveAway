import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Home Page!</h1>

    </div>
    </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/hands.jpg') !important;
      background-size: auto;
      background-position: center center;
      background-color: white;
      background-repeat: no-repeat;
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
