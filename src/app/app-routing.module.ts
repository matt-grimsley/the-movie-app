import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: HomeComponent},
    { path: 'sign-up', component: SignUpComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'profile', component: ProfileComponent},
    { path: '**', component: PageNotFoundComponent}
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
