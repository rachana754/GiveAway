import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">  
      <h1 class="title">About Us!</h1>  
    </div>
    </div>
    </section>
    <section class="section">
    <div class="container">
    <p class="bold"> Welcome to the about us page of Give Away.</p>
    <p>This website will help common people or people working at different grocery stores or clothing stores to use it as a medium to donate food and clothes to poor people and the needy.
    </p>
    </div>
    </section>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
