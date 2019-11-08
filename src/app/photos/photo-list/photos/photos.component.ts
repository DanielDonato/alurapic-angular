import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {

  @Input()
  photos: Photo[] = [];
  rows = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // chamado a cada mudança de valor, se ouve novo valor cria um campo com o mesmo nome da propriedade anotada com @Input
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.splice(index, index + 3));
    }
    return newRows;
  }
}
