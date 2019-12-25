import { Component, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'app-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {


  private _url = '';
  @Input()
  description = '';

  @Input()
  set url(url: string) { // inbound properties em no set
    if (!url.startsWith('data')){
        this._url = CLOUD + url; // regra da api atual
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }
}
