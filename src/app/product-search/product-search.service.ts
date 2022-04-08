import PRODUCTS from './products.json';

export class ProductSearchService {
  public lastSearchedProduct: string;
  public result: string;
  constructor() {}

  searchProduct(term: string) {
    PRODUCTS.find((item: any) => {
      console.log(item);
      return item.title.toLowerCase().includes(term.toLowerCase())
        ? (this.result = item.title)
        : (this.result = '');
    });
    this.lastSearchedProduct = term;
  }
}
