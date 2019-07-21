import { Injectable } from '@angular/core';
import { Ad } from '../components/main/content/ads-list/ad/ad.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private ads: Ad[] = [];
  // private adsEdited = new Subject<Ad[]>();

  url = 'http://localhost:3000/items';

  constructor(private http: HttpClient, private router: Router) {}

  // Get Ads
  getAds(adType: string): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${this.url}?type=${adType}`);
  }

  // Get Ad by id
  getAd(id: string): Observable<Ad> {
    return this.http.get<Ad>(`${this.url}/${id}`);
  }

  // Add Ad
  // addAd(ad: Ad): Observable<Ad> {
  //   return this.http.post<Ad>(`${this.url}/add`, ad, httpOptions);
  // }

  addAd(ad: Ad) {
    return this.http
      .post<Ad>(`${this.url}/add`, ad, httpOptions)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  // Update Ad
  // updateAd(id: string, ad: Ad): Observable<Ad> {
  //   return this.http.put<Ad>(`${this.url}/${ad.id}`, ad, httpOptions);
  // }

  // Update Ad
  updateAd(id: string, ad: Ad) {
    return this.http
      .put<Ad>(`${this.url}/${id}`, ad, httpOptions)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  // Delete Ad
  deleteAd(id: string) {
    const url = `${this.url}/${id}`;
    return this.http.delete<Ad>(url, httpOptions).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
