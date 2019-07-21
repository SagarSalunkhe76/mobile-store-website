import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products = [
    {
     id: 101,
     name: 'Samsung',
     description: 'Galaxy',
     price: 4500
    },
    {
      id: 102,
      name: 'OnePlus',
      description: 'AndriodOne',
      price: 5500
    },
    {
      id: 103,
      name: 'Nokia',
      description: 'Lumia',
      price: 5500
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
