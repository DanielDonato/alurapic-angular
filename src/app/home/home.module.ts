import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home.routing.module";
import { SingupService } from "./singup/singup.service";

@NgModule({
    declarations: [
        SignInComponent,
        SingupComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [SingupService]
})
export class HomeModule { }
