import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/product.model';
import { ProductsService } from '../service/products.service';
import { Observable } from 'rxjs';

  

@Component({
  
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

//product: IProduct;
product$: Observable<IProduct>;

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) { }

  ngOnInit() {

    const id =  +this.route.snapshot.paramMap.get('id');
    //console.log("id"+id);
    //this.ProductsService.getProductsById(id).subscribe(p => this.product = p);

    this.product$ = this.ProductsService.getProductsById(id);
  }

}
