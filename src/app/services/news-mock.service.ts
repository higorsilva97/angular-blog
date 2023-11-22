// src/app/services/news-mock.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsMockService {
  private mockDataUrl = 'assets/mock-data.json';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.mockDataUrl);
  }
  
    
  
}
