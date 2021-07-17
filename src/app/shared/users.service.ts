import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Subscription, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    currentUser: User;

    constructor(private http: HttpClient) {}

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
                    this.currentUser = new User(
                        responseData['payload']['id'],
                        responseData['payload']['email'],
                        responseData['payload']['first_name'],
                        responseData['payload']['last_name'],
                        responseData['payload']['name'],
                        responseData['payload']['nickname'],
                        responseData['payload']['token']
                    );
                    console.log(this.currentUser);
                }
            });
        // .pipe(
        //     catchError(this.handleError),
        //     tap((responseData) => {
        //       if (responseData.success) {
        //         this.handleAuthentication()
        //       }
        //     })
        // );
    }

    login(email: string, password: string) {
        this.http
            .post('https://codelabs2021.herokuapp.com/api/v1/users/signup', {
                email: email,
                password: password
            })
            .subscribe((responseData) => {
                debugger;
                if (responseData['success']) {
                    this.currentUser = new User(
                        responseData['payload']['id'],
                        responseData['payload']['email'],
                        responseData['payload']['first_name'],
                        responseData['payload']['last_name'],
                        responseData['payload']['name'],
                        responseData['payload']['nickname'],
                        responseData['payload']['token']
                    );
                    console.log(this.currentUser);
                }
            });
    }
    handleError(errorResponse: HttpErrorResponse) {
        return throwError('Method not implemented.');
    }

    handleAuthentication() {
        throw new Error('Method not implemented.');
    }
}
