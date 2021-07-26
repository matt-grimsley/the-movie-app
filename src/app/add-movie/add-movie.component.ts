import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie, MovieBase } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
    addMovieForm: FormGroup;
    ratings: string[]

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.addMovieForm = new FormGroup({
            title: new FormControl(),
            director: new FormControl(),
            year: new FormControl(),
            total_gross: new FormControl(),
            duration: new FormControl(),
            parental_rating: new FormControl()
        });

        this.ratings = this.movieService.ratings;
    }

    onSubmit() {
        const movieToAdd: MovieBase = {
            title: this.addMovieForm.value.title,
            director: this.addMovieForm.value.director,
            year: this.addMovieForm.value.year,
            total_gross: this.addMovieForm.value.total_gross,
            duration: this.addMovieForm.value.duration,
            parental_rating: this.addMovieForm.value.parental_rating
        };
        this.movieService.createMovie(movieToAdd);
    }
}
