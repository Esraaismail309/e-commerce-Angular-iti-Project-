import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler):
    Observable<HttpEvent<unknown>> {

    this.loaderService.setLoading(true)

    return next.handle(request).pipe(
      finalize(() =>
        this.loaderService.setLoading(false)))
  }
}
