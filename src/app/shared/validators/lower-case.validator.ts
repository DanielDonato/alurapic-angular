import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {

    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return {lowerCase: true}; // se tiver erro, nome do obj é o nome que deve ser acessado no template
    }
    return null; // sem erros
}
