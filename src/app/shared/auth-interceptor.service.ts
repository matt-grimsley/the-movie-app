import {
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.userService.user && this.userService.user.token) {
            const header = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.userService.user.token}`
            });

            const modifiedRequest = req.clone({ headers: header });

            return next.handle(modifiedRequest);
        }
        return next.handle(req);
    }
}
