import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BMSService {

 

  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }


  managerLogin(formData: any, httpOptions: any): Observable<HttpEvent<any[]>> {
    return this.http.post<any[]>(`${this.baseUrl}/api/auth/login`, formData, httpOptions);
  }

  supervisorRegister(formData: any, httpOptions: any): Observable<HttpEvent<any[]>> {
    return this.http.post<any[]>(`${this.baseUrl}/api/auth/register/supervisor`, formData, httpOptions);
  }

  

  
}
