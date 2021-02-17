import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map } from '../models/map';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.GOOGLE_API_KEY;
  }

  fetchLocation(location: string): Observable<Map> {
    return this.http.get<Map>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${this.apiKey}`
    );
  }
}
