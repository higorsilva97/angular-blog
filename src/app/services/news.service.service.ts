import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  //urls
  private apiUrl: string = environment.apiUrl + "everything?q=technology&language=pt&apiKey=";
  private apiUrlTop: string = environment.apiUrl + "top-headlines?category=technology&apiKey=";

  //key
  private apiKey: string = environment.apiKey;


  private url: string = `${this.apiUrl}${this.apiKey}`;
  private urlTop: string =  `${this.apiUrlTop}${this.apiKey}`;

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

  getNewsTopHeadlines():Observable<any> {
    console.log("URL TOP", this.urlTop); 
    return this.httpClient.get(this.urlTop).pipe(retry(2));
  }
 
}
