import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewUser } from "./new-user";

import { environment } from '../../../environments/environment';

const API_URL = environment.ApiUrl;

@Injectable()
export class SingupService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(username: string) {
        return this.http.get(API_URL + '/user/exists/' + username);
    }

    singup(newUser: NewUser) {
        return this.http.post(API_URL + '/user/signup', newUser);
    }
}
