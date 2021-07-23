import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[];
  movieSub: Subscription

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieSub = this.movieService.movieSubject.subscribe((movies) => this.movies = movies);
    this.fetchMovies();
    debugger
  }

  fetchMovies(){
    this.movieService.showMovies();
  }
  ngOnDestroy(): void {
    this.movieSub.unsubscribe();
  }

}
