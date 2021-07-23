import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Movie } from './movie.model';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class MovieService implements OnInit, OnDestroy {
    private _movies: Movie[];
    movieSubject = new BehaviorSubject<Movie[]>(null);
    user: User;
    userSub: Subscription;

    constructor(private http: HttpClient, private userService: UserService) {}

    ngOnInit() {
        this.userSub = this.userService.userSubject.subscribe((user) => {
            this.user = user;
        });
    }

    showMovies() {
        this.http
            .get('https://codelabs2021.herokuapp.com/api/v1/movies/index', {})
            .subscribe((responseData) => {
                if (responseData['success']) {
                    this.handleMovies(responseData['payload'] as Movie[]);
                } else {
                    console.log(responseData['message']);
                }
            });
    }

    handleMovies(movies: Movie[]) {
        this._movies = movies;
        console.log(this._movies);
        this.movieSubject.next(this._movies);
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
