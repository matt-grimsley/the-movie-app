import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: User;
    userSubject = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router) {}

    public get user() {
      return this._user;
    }

    signUp(
        email: string,
        firstName: string,
        lastName: string,
        nickname: string,
        password: string,
        passwordConfirmation: string
    ) {
        this.http
            .post('https://codelabs2021.herokuapp.com/api/v1/users/signup', {
                email: email,
                first_name: firstName,
                last_name: lastName,
                nickname: nickname,
                password: password,
                password_confirmation: passwordConfirmation
            })            .subscribe((responseData) => {
                if (responseData['success']) {
                  this.handleAuthentication(responseData['payload'] as User);
                } else {
                    console.log(responseData['message']);
                }
            });
    }

    login(email: string, password: string) {
        this.http
            .post('https://codelabs2021.herokuapp.com/api/v1/users/login', {
                email: email,
                password: password
            })
            .subscribe((responseData) => {
                if (responseData['success']) {
                    this.handleAuthentication(responseData['payload'] as User);
                } else {
                    console.log(responseData['message']);
                }
            });
    }

    logout() {
        if (this.user) {
            this.http
                .delete('https://codelabs2021.herokuapp.com/api/v1/users/logout', {})
                .subscribe((responseData) => {
                    if (responseData['success']) {
                        this._user = null;
                        console.log(`Logged out. this.user:${this.user}`);
                        this.userSubject.next(this.user);
                        this.router.navigate(['/home']);
                    } else {
                        console.log('Well this is strange... failed to log out.');
                    }
                });
        }
    }

    handleError(errorResponse: HttpErrorResponse) {
        return throwError('Method not implemented.');
    }

    private handleAuthentication(user: User) {
         this._user = user;
         console.log(this.user);
         this.userSubject.next(this.user);
         this.router.navigate(['/home']);
    }
}
