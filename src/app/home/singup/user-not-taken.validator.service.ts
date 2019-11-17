import { Injectable } from "@angular/core";
import { SingupService } from "./singup.service";
import { AbstractControl } from "@angular/forms";

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorSerivice {

    constructor(private singupService: SingupService) { }

    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(username => this.singupService.checkUserNameTaken(username)
                ))
                .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
                .pipe(first());
        };
    }
}
