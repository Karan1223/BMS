
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router){}
  isLoggedIn(): boolean {
    // Check if the user is logged in
    // You can use localStorage or another mechanism to store authentication status
    return !!localStorage.getItem('managerToken') || !!localStorage.getItem('supervisorToken') || 
    !!localStorage.getItem('residentToken') || !!localStorage.getItem('securityToken');
  }

  hasRole(expectedRole: string): boolean {
    const managerToken = localStorage.getItem('managerToken');
    const supervisorToken = localStorage.getItem('supervisorToken');
    const residentToken = localStorage.getItem('residentToken');
    const securityToken = localStorage.getItem('securityToken');
  
    if (managerToken && expectedRole === 'manager') {
      return true;
    }
  
    if (supervisorToken && expectedRole === 'supervisor') {
      return true;
    }
    if (residentToken && expectedRole === 'resident') {
      return true;
    }
  
    if (securityToken && expectedRole === 'security') {
      return true;
    }
  
  
    return false;
  }

  logout(): void {
    localStorage.removeItem('managerToken');
    localStorage.removeItem('supervisorToken');
    localStorage.removeItem('residentToken');
    localStorage.removeItem('securityToken');
    this.router.navigate(['/']);
    
  }
  
}
