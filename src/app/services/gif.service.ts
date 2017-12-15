import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()

export class GifService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    console.log('posts service initialized')
  }

  sendSearch(searchQuery: string) {
    let baseURL = 'http://api.giphy.com/v1/gifs/search?api_key=' + environment.api_key + '&q=' + searchQuery + '&limit20'
    return this.http.get(baseURL)
      .map(res => res.json())
  }
}
