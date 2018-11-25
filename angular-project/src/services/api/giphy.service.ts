import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class GiphyService {
    apiKey = 'Q4GKr4s0Z5KCmqpu2jSpmCiZ0UHqm9QG';

    constructor(
        private _httpClient: HttpClient
        ) {}

        // q:string  required
        // Search query term or prhase.
        
        // limit:int32
        // The maximum number of records to return.
        
        // offset:int32
        // An optional results offset.
        
        // rating:string
        // Filters results by specified rating.
        
        // lang:string
        // Specify default language for regional content; use a 2-letter ISO 639-1 language code.

    getGifs(q:string, limit = 25, offset = 0) {
        const URL_GET_GIPHY =  'http://api.giphy.com/v1/gifs/search';
        let params = new HttpParams().set('api_key', this.apiKey).set('q', q).set('limit', limit.toString()).set('offset', offset.toString());
        return this._httpClient.get(URL_GET_GIPHY, { params });
    }
}