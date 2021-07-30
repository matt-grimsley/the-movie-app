import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptorService } from './shared/auth-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { AddReviewComponent } from './add-review/add-review.component';

@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        SignInComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        AlertComponent,
        ProfileComponent,
        PageNotFoundComponent,
        MovieCardComponent,
        ReviewsComponent,
        MoviesComponent,
        AddMovieComponent,
        ReviewCardComponent,
        AddReviewComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
