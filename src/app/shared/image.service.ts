import { Injectable } from '@angular/core';
// Import environment for API key and url
import { environment } from '../../environments/environment';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
    private query: string;

    // private strings that together make complete an API endpoint, once a query has been made
    private API_KEY: string = environment.PIXABAY_API_KEY;
    private API_URL: string = environment.PIXABAY_API_URL;
    private URL: string = this.API_URL + this.API_KEY + '&q=';
    private perPage: string = "&per_page=10"

    constructor(private http: Http) { }

    getImage(query) {
        return this.http.get(this.URL + query + this.perPage).map(res => res.json());
    }

}
