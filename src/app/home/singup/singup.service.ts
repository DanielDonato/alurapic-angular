import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class SingupService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(username: string) {
        return this.http.get(API_URL + '/user/exists/' + username);
    }
}
