import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { Review } from '../shared/review.model';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
    @Input() movie: Movie;
    reviews: Review[];

    constructor() {}

    ngOnInit(): void {
      debugger
        this.reviews = this.movie.reviews;
    }
}
