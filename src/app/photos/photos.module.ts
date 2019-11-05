import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [PhotoComponent],
    exports: [ PhotoComponent ] //torna o component acessível a quem importar o module
})
export class PhotosModule {}
