import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

    movies: Movie[];
    collectionSize: number;
    page: number;
    movieSub: Subscription;

    constructor(private movieService: MovieService, private config: NgbPaginationConfig) {
      config.size = 'sm';
      config.boundaryLinks = false;
      config.pageSize = 1;
      config.maxSize = 5;
      config.ellipses = true;
      config.rotate = true;
    }

    ngOnInit(): void {
        this.movieSub = this.movieService.movieSubject.subscribe((movies) => {
            this.movies = movies;
            this.collectionSize = this.movieService.movieCount;
            this.page = 1;
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
