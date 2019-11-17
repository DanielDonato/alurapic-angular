import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {path: 'user/:username', component: PhotoListComponent, resolve: {photos: PhotoListResolver}},
    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent} // ** qualquer outra rota que nao seja as listadas
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //forRoot => qualquer coisa dps de http://localhost:4200/
        //RouterModule.forRoot(routes, { useHash: true }) => Ativar a navigação com #; exemplo: localhost:4200/#/home 
    ],
    exports: [RouterModule]
})
export class AppRoutingModuele { }
