// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }
  
  sendContactForm(formData: ContactFormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/contact`, formData);
  }
}
