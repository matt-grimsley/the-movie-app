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
            })
            .subscribe((responseData) => {
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

    autoLogin() {
        const user = JSON.parse(localStorage.getItem('userData'));
        if (!user) {
            return;
        }
        console.log(`Performing auto login for user: ${user.first_name}`);
        this._user = user;
        this.userSubject.next(user);
    }
    logout() {
        if (this._user) {
            this.http
                .delete('https://codelabs2021.herokuapp.com/api/v1/users/logout', {})
                .subscribe((responseData) => {
                  debugger
                    if (responseData['success']) {
                        this._user = null;
                        console.log(`Logged out. this.user:${this._user}`);
                        this.userSubject.next(this._user);
                        localStorage.removeItem('userData');
                        this.router.navigate(['/home']);
                    } else {
                        console.log('Well this is strange... failed to log out.');
                    }
                },(error)=> {
                  console.log(error);
                  this._user = null;
                  this.userSubject.next(this._user);
                  localStorage.removeItem('userData');
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
        localStorage.setItem('userData', JSON.stringify(user));
        this.router.navigate(['/home']);
    }
}
