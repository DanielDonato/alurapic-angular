import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { SignInComponent } from "./home/signin/signin.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { SingupComponent } from "./home/singup/singup.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [
            AuthGuard
        ],
        children: [
            {path: '', component: SignInComponent},
            {path: 'singup', component: SingupComponent},
        ]
    },
    {path: 'user/:username', component: PhotoListComponent, resolve: {photos: PhotoListResolver}},
    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent} // ** qualquer outra rota que nao seja as listadas
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //forRoot => qualquer coisa dps de http://localhost:4200/
    ],
    exports: [RouterModule]
})
export class AppRoutingModuele { }
