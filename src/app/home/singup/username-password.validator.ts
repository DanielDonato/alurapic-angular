import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePasswordValidator: ValidatorFn = (formGroup: FormGroup)  => {
    const username = formGroup.get('userName').value;
    const passowrd = formGroup.get('password').value;
    if(!(username.trim() + passowrd.trim()) ) {
        return null;
    }

    return username != passowrd 
        ? null
        : { userNamePassword: true };
}