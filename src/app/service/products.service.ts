import { Injectable } from '@angular/core';
import { Observable, range, throwError } from 'rxjs';
import { IProduct } from '../product-list/product.model';
import { map, filter, delay,tap, catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  testObservable(): Observable<number>{
    const elem$: Observable<number>= range(0,10);
    return elem$.pipe(map(n=> n*n),
                      filter( x => x%2 ===0));
  }
   
  getProducts(): Observable<IProduct[]>{
   return this.http.get<IProduct[]>('http://localhost:4200/assets/product-list.json')
   .pipe(
     delay(1000),
     tap(data => {console.log("data:", data)}),
     catchError(this.handleError)
   );
  }

  handleError(err: HttpErrorResponse){
    let msg = '';
    if(err.error instanceof HttpErrorResponse){
      //client side error
      msg = 'client side error' + err.error.message;
    }
    else {
      //server side error
      msg = 'server side error' + err.status + ' ->' + err.message;
    }
    return throwError(msg);
    }
 }



