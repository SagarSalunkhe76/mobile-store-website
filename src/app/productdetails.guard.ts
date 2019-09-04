import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const id = +next.paramMap.get('id');
     if(isNaN(id)) {
       alert("product id should be number");
       this.router.navigate(['/product']);
       return false;
     }
      return true;
  }
  
}
