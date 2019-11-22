import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => { // notificara a cada mudança na url
        this.username = params.username;
        this.photos = this.activatedRoute.snapshot.data.photos; // photos => nome da propriedade definida em app.routing.module.ts
      });
    }

    load() {
      this.photoService
        .listFromUserPaginated(this.username, ++this.currentPage)
        .subscribe(photos => {
          this.filter = '';
          this.photos = this.photos.concat(photos);
          if (!photos.length) this.hasMore = false;
        });
    }

}
