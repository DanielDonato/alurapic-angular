import { Component, OnInit, Input } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';
import { Observable } from 'rxjs';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input()
  photoId: number;

  comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService
    ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
  }

}
