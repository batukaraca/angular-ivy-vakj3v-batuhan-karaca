import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductSearchService } from './product-search/product-search.service';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [AppComponent, ProductSearchComponent],
  providers: [ProductSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
