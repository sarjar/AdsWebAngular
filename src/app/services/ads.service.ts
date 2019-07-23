import { Injectable } from '@angular/core';
import { Ad } from '../components/main/content/ads-list/ad/ad.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  url = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  // Get Ads
  getAds(adType: string): Observable<Ad[]> {
    let params = new HttpParams();
    params = params.append('type', adType);
    return this.http.get<Ad[]>(this.url, { params });
  }

  // Get Ad
  getAd(id: string): Observable<Ad> {
    return this.http.get<Ad>(`${this.url}/${id}`);
  }

  // Add Ad
  addAd(ad: Ad): Observable<Ad> {
    return this.http.post<Ad>(`${this.url}/add`, ad, httpOptions);
  }

  // Update Ad
  updateAd(id: string, ad: Ad): Observable<Ad> {
    return this.http.put<Ad>(`${this.url}/${id}`, ad, httpOptions);
  }

  // Delete Ad
  deleteAd(id: string): Observable<Ad> {
    return this.http.delete<Ad>(`${this.url}/${id}`, httpOptions);
  }
}
