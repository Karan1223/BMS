import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BMSService } from 'src/app/service/bms.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  username: string = '';
  password: string = '';
  name: string = '';
  type: string = '';
  errorMsg: String = '';


 constructor(private bms: BMSService, private router: Router){}


  login() {
   
    const formData = new URLSearchParams();
    formData.set('username', this.username);
    formData.set('password', this.password);
    formData.set('name', this.name);
    formData.set('type', this.type)


    const token = localStorage.getItem('managerToken')
    console.log(token)
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `${token}`,
      }),
    };
    this.bms.supervisorRegister(formData.toString(), httpOptions).subscribe(
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
        this.errorMsg = error.error.text;
      }
    )
    
  }

}
