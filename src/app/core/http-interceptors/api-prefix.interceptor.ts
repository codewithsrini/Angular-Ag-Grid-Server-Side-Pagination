import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
    intercept( req: HttpRequest<any>, next: HttpHandler) {

        // req = req.clone({url: 'prefix-your-url-here'})

        // Ensure HTTPS 
        // const secureReq = req.clone({
        //     url: req.url.replace('http://', 'https://')
        // });

        return next.handle(req);
    }
}