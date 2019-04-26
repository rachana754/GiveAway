import { Component, OnInit } from '@angular/core';
import {Items} from "../dummy-data";
import {Item} from "../item";
import {Clothes} from "../dummy-data2";
@Component({
  selector: 'app-catalog',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">  
      <h1 class="title">Catalog!</h1>  
    </div>
    </div>
    </section>
    <section class="section">
    <div class="container">
    <h2 class="category">Food Categories &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Clothes Categories</h2>
<ul class="heroes displayInlineBlock">
  <li *ngFor="let i of items" [class.selected]="i === selectedItem" (click)="onSelect(i)">
    <span class="badge">{{i.id}}</span> {{i.name}}
  </li>
</ul>

<ul class="heroes displayInlineBlock">
  <li *ngFor="let i of clothes"  [class.selected]="i === selectedItem" (click)="onSelect(i)">
    <span class="badge">{{i.id}}</span> {{i.name}}
  </li>
</ul>
<div *ngIf="selectedItem" class="displayInlineBlock details">
<form (ngSubmit)="processForm()">
  <h2 class="category">{{selectedItem.name}} Item Details</h2>
  <div>   <label>Item Name:
  <input placeholder="name"/>
</label></div>
<br>
  <div>
  <label>Quantity:</label>
  <select>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
  </div>
  <br>
 <div>
 <label>Pick Up Location:</label>
 <input placeholder="address"/>
 </div>
 <br>
 <div>
 <button type="submit" class="button is-primary is-normal">Save</button>
 </div>
 </form>
</div>
    </div>
    </section>
  
  
  `,
  styles: [`
  /* HeroesComponent's private CSS styles */
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.heroes {
  margin: 0 0 1em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: 1em;
  padding: .3em 0;
  height: 2.6em;
  border-radius: 4px;
}
.heroes li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.heroes .text {
  position: relative;
  top: -3px;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 3.1em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
 
  `]
})
export class CatalogComponent implements OnInit {

  items = Items;
  selectedItem: Item;
onSelect(i: Item): void {
  this.selectedItem = i;
}
  clothes = Clothes;
  constructor() {}

  ngOnInit() {}
}
