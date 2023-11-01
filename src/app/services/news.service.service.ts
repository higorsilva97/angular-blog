import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;
  private url: string = `${this.apiUrl}${this.apiKey}`;

  constructor(private httpClient: HttpClient) {
    
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getNews(): Observable<any> {
    console.log(this.url); 
    return this.httpClient.get(this.url).pipe(retry(2));
  }
 
}
