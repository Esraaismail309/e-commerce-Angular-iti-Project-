import { LogInService } from './log-in.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private logInService: LogInService) { }
  isLoggin;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.logInService.getLoggedIn().subscribe((value) => {
      this.isLoggin = value
    })
    if (this.isLoggin) {
      return true
    }
    else {
    alert("You don't have permission to view this page")
      return this.router.navigate(["/log-in"])
    }
  }

}
