import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
    movies: Movie[] = [];
    collectionSize: number;
    currentPage: number;
    movieSub: Subscription;

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.movieSub = this.movieService.movieSubject.subscribe((movies) => {
            this.movies = movies;
            this.collectionSize = this.movieService.movieCount;
            this.currentPage = 1;
        });
        this.fetchMovies();
    }

    fetchMovies() {
        this.movieService.showMovies();
    }

    ngOnDestroy() {
        this.movieSub.unsubscribe();
    }
}
