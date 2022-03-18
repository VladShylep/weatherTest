import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ headers: request.headers.set('x-rapidapi-host', 'api-formula-1.p.rapidapi.com') });
    request = request.clone({ headers: request.headers.set('x-rapidapi-key', environment.apiKey) });
    return next.handle(request);
  }
}