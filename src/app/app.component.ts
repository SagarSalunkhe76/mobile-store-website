import { Component ,OnInit} from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from './service/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mobile-Store';
  faMobileAlt = faMobileAlt;

  constructor(public productlist: ProductsService){

  }
  
  ngOnInit(){
    console.log(this.productlist.getProducts());
  }
  
}
