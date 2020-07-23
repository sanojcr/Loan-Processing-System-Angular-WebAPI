import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  // interceptor method for  handles a given http request.
  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    let userToken;
    if (localStorage.getItem('userToken')) {
      userToken = localStorage.getItem('userToken');
    } else {
      // console.log('Token is not there in local storage');
    }
    if (userToken) {
      console.log("The interceptors gets called");
      let latestRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + userToken,
        }
      })
      return handler.handle(latestRequest);
    } else {
      return handler.handle(request);
    }
  }
}