import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [PhotoComponent],
    exports: [ PhotoComponent ], //torna o component acessível a quem importar o module
    imports: [ HttpClientModule ]
})
export class PhotosModule {}
