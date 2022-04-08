import { Component, OnInit } from '@angular/core';
import { ProductSearchComponent } from './product-search/product-search.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public productSearch: ProductSearchComponent) {}
  ngOnInit() {}

  items = [];

  addSearched(newItem: string) {
    this.items.push(newItem);
  }
}
