import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly domain: string;
  constructor(private http: HttpClient) {
    this.domain = 'https://localhost:7083/api/';
  }

  get(url: string): Observable<any> {
    return this.http
      .get(`${this.domain}${url}`)
      .pipe(catchError(this.handleError));
  }

  post(url: string, object: object): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const httpOptions = { headers: headers };

    return this.http
      .post(`${this.domain}${url}`, JSON.stringify(object), httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
