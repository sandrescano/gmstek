import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class GmstekService {

    private URL_BASE = environment.baseUrl;

    /**
     * Constructor
     * @param http HttpClient  
     */
    constructor(private http: HttpClient) { }

    /**
     * Get Data
     * @returns data response 
     */
    getData(): Observable<Response> {
        return this.http.get<Response>(`${this.URL_BASE}/transactions`, { observe: 'body'});
    }
}