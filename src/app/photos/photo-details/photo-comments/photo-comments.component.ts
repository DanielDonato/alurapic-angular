import { Component, OnInit, Input } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';
import { Observable } from 'rxjs';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input()
  photoId: number;
  commentForm: FormGroup;
  comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.photoService.addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId))) // switchMap troca o observable atual para o chamado no metodo
      .pipe(tap(() => { // tap => faz algo antes de retornar o observable
        this.commentForm.reset();
      }));
  }
}
