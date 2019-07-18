import { Injectable } from '@angular/core';
import { Ad } from '../components/main/content/ads-list/ad/ad.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private ads: Ad[] = [];
  private adsEdited = new Subject<Ad[]>();

  // url = 'http://localhost:3000/';
  url = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  // Get Ads
  // getAds(): Observable<Ad[]> {
  //   return this.http.get<Ad[]>(this.url);
  // }
  getAds() {
    return this.http.get<Ad[]>(this.url);
  }

  addAd(ad: Ad) {
    this.ads.push(ad);
    this.adsEdited.next([...this.ads]);
  }
}
