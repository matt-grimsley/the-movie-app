import { NgModule } from '@angular/core';
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

@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        SignInComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [RouterModule, BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
