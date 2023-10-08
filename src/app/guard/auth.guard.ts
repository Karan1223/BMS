// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service'; // Assuming you have an AuthService to check authentication status

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      const expectedRole: string = next.data['expectedRole'];
  
      if (this.authService.hasRole(expectedRole)) {
        // User has the required role, allow access
        return true;
      } else {
        // User doesn't have the required role, redirect to unauthorized page or handle accordingly
        this.router.navigate(['/unauthorized']);
        
        return false;
      }
    } else {
      // User is not logged in, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }  
}
