import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule //modulo que comtem as diretivas
    ]
})
export class PhotosModule {}
