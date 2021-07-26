import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;
  userSub: Subscription;

  constructor(private userService: UserService, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.userSub = this.userService.userSubject.subscribe((user) => {
        this.user = user;
    });
}
  isHomeRoute() {
    return this.router.url === '/movies';
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
