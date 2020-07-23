import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // method of route protection by using auth guard canActive
  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
  ): boolean {
    let expectedRoles = activatedRoute.data.expectedRoles;
    let userData = JSON.parse(localStorage.getItem('user'));
    let expectedRole;
    // console.log(userData);
    // console.log(expectedRole);
    if (userData) {
      expectedRoles.forEach(role => {
        if (role == userData.UserRole) {
          expectedRole = userData.UserRole
        }
      });
    }
    if (expectedRole) {
      return true;
    } else {
      return false;
    }
  }
}
