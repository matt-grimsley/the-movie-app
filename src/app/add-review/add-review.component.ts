import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { ReviewService } from '../shared/review.service';
import { title } from 'process';

@Component({
    selector: 'app-add-review',
    templateUrl: './add-review.component.html',
    styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
    @Input() movie: Movie;
    @Output() closeEvent: EventEmitter<void> = new EventEmitter();

    addReviewForm: FormGroup;
    ratings = ['0', '1', '2', '3', '4', '5'];

    constructor(private reviewService: ReviewService) {}

    ngOnInit(): void {
        this.addReviewForm = new FormGroup({
            title: new FormControl(null, [Validators.required]),
            body: new FormControl(null, [Validators.required]),
            rating: new FormControl(null, [Validators.required])
        });
    }

    onSubmit() {
        this.reviewService.addReview(
            this.movie.id,
            this.addReviewForm.value.title,
            this.addReviewForm.value.body,
            this.addReviewForm.value.rating
        );
        this.closeEvent.emit();
    }
}
