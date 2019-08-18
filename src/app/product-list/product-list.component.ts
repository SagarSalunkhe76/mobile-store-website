import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductsService } from '../service/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  imageWidth: number = 50;

  ShowImage: boolean = false;

  ratingLabel: string;

  tableHeader: {[key: string]: boolean} = {
    'header-bg': true,
    'header-fg': true
  }

  featuredProduct: IProduct[] ;

  products: IProduct[];

  toggleImg(event): void{
    this.ShowImage = !this.ShowImage;
  }

  private _filterBy: string;

  set filterBy(str: string){
    this._filterBy = str;
    this.featuredProduct = this.products.filter(product =>{
      return product.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) >=0;
    });
   }

  get filterBy(): string{
    return this._filterBy;
  }

  ratingChanged(ratingValue: string): void{
     this.ratingLabel = ratingValue;
  }

  constructor(private Ps: ProductsService) {
    
   }

  ngOnInit() { 
    this.Ps.testObservable().subscribe(data => 
      {console.log(data)});
    this.featuredProduct = this.products = this.Ps.getProducts();
  }

}
