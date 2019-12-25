import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionQuery: string) {
        // primeiro parametro: variavel que será aplicada o pipe
        // segundo parametro: valor de parametros recebido pelo pipe
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if (descriptionQuery) {
            return photos.filter(photo =>
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }

}
