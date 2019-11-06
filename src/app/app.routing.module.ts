import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

const routes: Routes = [
    {path: 'user/:username', component: PhotoListComponent},
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
