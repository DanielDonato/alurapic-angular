import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";
import { PhotoComment } from "./photo-comment";
import { map, catchError } from "rxjs/operators";

import { environment } from '../../../environments/environment';

const API_URL = environment.ApiUrl;

@Injectable({providedIn: 'root'})
export class PhotoService {
    constructor(
        private http: HttpClient
    ) {}

    listFromUser(username: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${API_URL}${username}/photos`);
    }

    listFromUserPaginated(username: string, page: number): Observable<Photo[]> {
        const params = new HttpParams()
            .append('page', page.toString());
        return this.http.get<Photo[]>(`${API_URL}/${username}/photos`,
            { params });
    }

    upload(description: string, allowComments: boolean, file: File){
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);
        return this.http.post(`${API_URL}/photos/upload`, formData);
    }

    findById(id: number) {
        return this.http.get<Photo>(`${API_URL}/photos/${id}`);
    }

    getComments(photoId: number) {
        return this.http.get<PhotoComment[]>(`${API_URL}/photos/${photoId}/comments`);
    }

    addComment(photoId: number, commentText: string) {
        return this.http.post(
            `${API_URL}/photos/${photoId}/comments`,
            { commentText });
    }

    removePhoto(photoId: number) {
        return this.http.delete(`${API_URL}/photos/${photoId}`);
    }

    like(photoId: number) {
        return this.http.post<Boolean>(`${API_URL}/photos/${photoId}/like`, {},
            {observe: 'response'}) //{observe: 'response'} pega os dados da response
            .pipe(map(res => true))
            .pipe(catchError(err => {
                return err.status == '304' ? of(false) : throwError(err);
                //of => cria um novo observable; throwError => Continua executando o erro
            }));
    }
}
