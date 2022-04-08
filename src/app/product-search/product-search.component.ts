import {
  Component,
  EventEmitter,
  Injectable,
  OnInit,
  Output,
} from '@angular/core';
import { ProductSearchService } from './product-search.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class ProductSearchComponent implements OnInit {
  searchText: string = '';
  ngOnInit() {}

  @Output() lastSearchProducts = new EventEmitter<string>();

  addSearched(value: string) {
    this.lastSearchProducts.emit(value);
  }

  constructor(public service: ProductSearchService) {}

  searchTextFunc(searchText: string) {
    this.service.searchProduct(this.searchText);
    this.addSearched(this.service.lastSearchedProduct);
  }
}
