import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Review } from './review.model';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {
    private _reviews: Review[];

    constructor(private http: HttpClient) {}

    getReviews() {
        this.http
            .get('https://codelabs2021.herokuapp.com/api/v1/reviews/index', {})
            .subscribe((responseData) => {
                if (responseData['success']) {
                    console.log(responseData);
                    this.handleReviewsRepsponse(responseData['payload'] as Review[]);
                } else {
                    console.log(responseData['message']);
                }
            });
    }

    addReview(movieId: number, title: string, body: string, rating: number) {
        this.http
            .post('https://codelabs2021.herokuapp.com/api/v1/reviews/create', {
                title: title,
                body: body,
                movie_id: movieId,
                rating: rating
            })
            .subscribe((responseData) => {
                if (responseData['success']) {
                    console.log(responseData);
                    Swal.fire({
                        icon: 'success',
                        title: 'ok',
                        text: 'thank you for adding a review!',
                        confirmButtonText: 'no problem',
                        customClass: {
                            confirmButton: 'btn',
                            container: 'app-container outer-container'
                        }
                    });
                } else {
                    console.log(responseData['message']);
                    Swal.fire({
                        icon: 'error',
                        title: 'oops...',
                        text: 'something went wrong! see console for details',
                        confirmButtonText: 'ok',
                        customClass: {
                            confirmButton: 'btn',
                            container: 'app-container outer-container'
                        }
                    });
                }
            });
    }

    handleReviewsRepsponse(reviews: Review[]) {
        this._reviews = reviews;
    }
}
