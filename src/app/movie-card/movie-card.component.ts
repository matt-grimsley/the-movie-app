import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() user: User;
    @Input() movie: Movie;
    addingReview = false;

    constructor(private movieService: MovieService, private router: Router) {}

    ngOnInit(): void {}

    showDeleteButton() {
        if (this.user) {
            return this.movie.user_id === +this.user.id;
        } else {
            return false;
        }
    }

    showReviewForm() {
      debugger
        return this.user && this.addingReview;
    }

    showAddReviewLink() {
      debugger
        return this.user && !this.addingReview;
    }

    deleteMovie() {
        Swal.fire({
            title: "are you sure you want to delete '" + this.movie.title + "'?",
            showDenyButton: true,
            confirmButtonText: 'do it',
            denyButtonText: 'no, go back!',
            customClass: {
                confirmButton: 'btn',
                denyButton: 'btn',
                container: 'app-container outer-container'
            },
            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                this.movieService.deleteMovie(this.movie.id);
                this.router.navigate(['/movies']);
            }
        });
    }
}
