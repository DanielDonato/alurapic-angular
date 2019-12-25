import { Directive, ElementRef, HostListener, Renderer, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[appDarkenOnHover]' // entre [] faz ser chamada como atributo nos template
})
export class DarkenOnHoverDirective {

    @Input()
    brightness = '70%';

    constructor(
        private el: ElementRef,
        private render: Renderer2 // faz as alterações no dom
    ) { }

    @HostListener('mouseover') // encapsula um evento e atribui uma função pra ele
    darkenOn() {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }

}
