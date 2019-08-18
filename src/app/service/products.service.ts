import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';
import { IProduct } from '../product-list/product.model';
import { map, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  testObservable(): Observable<number>{
    const elem$: Observable<number>= range(0,10);
    return elem$.pipe(map(n=> n*n),
                      filter( x => x%2 ===0));
  }
   
  getProducts(): IProduct[]{
    return [
      {
       code: 'MOB-101',
       name: 'Samsung',
       description: 'Samsung   Galaxy S9 is rumored to feature a 5.80-inch touchscreen display with a resolution of 1440 pixels by 2960 pixels at a PPI of 568 pixels per inch. The phone is expected to be powered by octa-core Qualcomm Snapdragon 845 processor and come with 4GB of RAM. Moreover, it is rumored to run on Android 8.0.',
       price: 4500,
       imageUrl:'assets/samsung-galaxy.jpg',
       featured: true,
       rating: 2.5
       
      },
      {
        code: 'MOB-102',
        name: 'OnePlus',
        description: 'OnePlus  The phone is available with 64 GB of internal storage. The Smartphone is powered by 2.5 GHz Quad core Qualcomm Snapdragon 801 Processor. ... OnePlus One comes with a 13 megapixel rear Camera and 5 megapixel front Camera.',
        price: 5500,
        imageUrl:'assets/oneplus.jpg',
        featured: false,
        rating: 4
        
      },
      {
        code: 'MOB-103',
        name: 'Nokia',
        description: 'Nokia A300 is Nokia s Series 40 offering that combines a keypad and a touchscreen. The phone has 1 GHz processor, 3G connectivity and preloaded with Angry Birds, the first time the game has been offered on non-smartphones. Nokia A303 is a phone with QWERTY keypad input and a touchscreen.',
        price: 8500,
        imageUrl:'assets/Nokia.jpg',
        featured: false,
        rating: 3
      },
    ]
  }
}
