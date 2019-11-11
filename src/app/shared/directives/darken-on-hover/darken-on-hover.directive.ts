import { Directive, ElementRef, HostListener, Renderer, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input()
    brightness = '70%';

    constructor(
        private el: ElementRef,
        private render: Renderer2 // faz as alterações no dom    
    ) { }

    @HostListener('mouseover') // encapsula qual evento em que deve ser chamado a função
    darkenOn() {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }

}
