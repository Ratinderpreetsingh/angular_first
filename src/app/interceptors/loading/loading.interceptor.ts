import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, finalize, Observable } from 'rxjs';
import { LoadingService } from '../../Services/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.show();

    return next.handle(request).pipe(
      // Hide loading indicator when the request finishes or fails
      finalize(() => this.loadingService.hide()),
      catchError((error) => {
        this.loadingService.hide(); // Ensure loading is hidden on error
        throw error; // Rethrow the error so it can be handled by other parts of the app
      })
    );
  }
}
