import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
            title: new FormControl(null,[Validators.required]),
            director: new FormControl(null,[Validators.required]),
            year: new FormControl(null,[Validators.required]),
            total_gross: new FormControl(null,[Validators.required]),
            duration: new FormControl(null,[Validators.required]),
            parental_rating: new FormControl(null,[Validators.required])
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
