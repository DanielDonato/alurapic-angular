import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { VMessageComponent } from "./vmessage.component";

@NgModule({
    declarations: [
        VMessageComponent
    ],
    exports: [
        VMessageComponent
    ]
})
export class VMessageModule { }
