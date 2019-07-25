import { Injectable } from '@angular/core';
import { Ad } from './ad-item/ad.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  urlChuck = 'http://api.icndb.com/jokes/random';

  constructor(private http: HttpClient) {}

  // Get Ads
  getAds(adType: string): Observable<Ad[]> {
    let params = new HttpParams();
    params = params.append('type', adType);
    return this.http.get<Ad[]>(environment.apiUrl, { params });
  }

  // Get Quote
  getQuote(): Observable<any> {
    return this.http.get<any>(this.urlChuck);
  }
}
