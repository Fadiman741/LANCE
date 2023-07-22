import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://your-email-api.com'; // Replace this with your actual API URL

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<any> {
    // Assuming your email API endpoint is '/send'
    return this.http.post<any>(`${this.apiUrl}/send`, emailData);
  }
}