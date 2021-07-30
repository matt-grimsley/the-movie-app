import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { Review } from '../shared/review.model';

@Component({
    selector: 'app-review-card',
    templateUrl: './review-card.component.html',
    styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit, OnChanges {
    @Input() movie: Movie;
    reviews: Review[]
    constructor() {}

    ngOnInit(): void {
    }

    ngOnChanges() : void {
      if (this.movie && this.movie.reviews && this.movie.reviews.length > 0) {
        this.reviews = this.movie.reviews
      } else {
        this.reviews = []
      }
    }
}
