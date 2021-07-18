import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'sign-in', component: SignInComponent }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
