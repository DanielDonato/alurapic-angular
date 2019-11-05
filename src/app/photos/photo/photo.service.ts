import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PhotoService {
    constructor(
        private http: HttpClient
    ) {}

    listFromUser(username: string): Observable<Object[]> {
        return this.http.get<Object[]>(`http://localhost:3000/${username}/photos`);
    }

}
