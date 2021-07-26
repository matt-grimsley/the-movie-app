import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {

  }

  isHomeRoute() {
    return this.router.url === '/movies';
  }

  ngOnDestroy(): void {
  }

}
