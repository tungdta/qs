import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const auth = this.auth.current();
    if (auth) {
      // Clone the request to add the new header.
      req = req.clone({ setHeaders: { 'X-Auth-Token': auth.token } });
    }
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // token expired, go to login
          this.router.navigate(['/session/signin']);
        } else if (err.status === 403) {
          // wrong permissions
          // reinit permissions
          this.auth.init();
          // check permissions
          if (!this.auth.checkPermissionForView(this.route.data)) {
            this.router.navigate(['/dashboard']);
          } else {
            alert('403');
          }
        } else {
          alert('Err: ' + err.status);
        }
      }
    });
  }
}
