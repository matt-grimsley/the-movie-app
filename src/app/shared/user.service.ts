import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class UserService {
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
            })            .subscribe((responseData) => {
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
                    this.currentUser = responseData['payload'] as User;
                    console.log(this.currentUser);
                } else {
                    console.log(responseData['message']);
                }
            });
    }

    logout() {
        if (this.currentUser) {
            this.http
                .delete('https://codelabs2021.herokuapp.com/api/v1/users/logout', {})
                .subscribe((responseData) => {
                    if (responseData['success']) {
                        this.currentUser = null;
                        console.log(`Logged out. this.currentUser:${this.currentUser}`);
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
        throw new Error('Method not implemented.');
    }
}
