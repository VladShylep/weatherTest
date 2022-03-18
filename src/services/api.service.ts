import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}
  get(path: string, params: any = {}): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + path, {
      params: {
        ...{ apikey: environment.apiKey, language: 'pl-PL' },
        ...params,
      },
    });
  }
}
