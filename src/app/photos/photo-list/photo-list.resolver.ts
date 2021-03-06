import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
    // RESOLVER => Faz com que a rota não seja renderizada até que o resolver seja concluido
    constructor(private service: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const username = route.params.username;
        return this.service.listFromUserPaginated(username, 1);
    }

}
