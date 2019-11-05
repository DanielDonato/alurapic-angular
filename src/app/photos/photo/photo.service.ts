import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

@Injectable({providedIn: 'root'})
export class PhotoService {
    constructor(
        private http: HttpClient
    ) {}

    listFromUser(username: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(`http://localhost:3000/${username}/photos`);
    }

}
