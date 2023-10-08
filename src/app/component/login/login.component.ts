import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BMSService } from 'src/app/service/bms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';


 constructor(private bms: BMSService, private router: Router){}


  login() {
   
    const formData = new URLSearchParams();
    formData.set('username', this.username);
    formData.set('password', this.password);
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    this.bms.managerLogin(formData.toString(), httpOptions).subscribe(
      (response: any) => {
   
        console.log(response)
        if(response.role === 'manager')
        {
          
          localStorage.setItem('managerToken', response.token);
          this.router.navigate(['/manager'])
        }
        else if(response.role === 'supervisor')
        {
          localStorage.setItem('supervisorToken', response.token)
          this.router.navigate(['/supervisor'])
        }
        else if(response.role === 'resident')
        {
          localStorage.setItem('residentToken', response.token)
          this.router.navigate(['/resident'])
        }
        else if(response.role === 'security')
        {
          localStorage.setItem('securityToken', response.token)
          this.router.navigate(['/security'])
        }
       
      },
      (error) => {
        // Handle error from the server
        console.error('Login failed', error);
        this.errorMsg = error.error;
      }
    )
    
  }
}
