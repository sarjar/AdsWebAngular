import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from '../main/ads-list/ad-item/ad.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EditCreateService {
  constructor(private http: HttpClient) {}

  // Get Ad
  getAd(id: string): Observable<Ad> {
    return this.http.get<Ad>(`${environment.apiUrl}/${id}`);
  }

  // Add Ad
  addAd(ad: Ad): Observable<Ad> {
    return this.http.post<Ad>(`${environment.apiUrl}/add`, ad, httpOptions);
  }

  // Update Ad
  updateAd(id: string, ad: Ad): Observable<Ad> {
    return this.http.put<Ad>(`${environment.apiUrl}/${id}`, ad, httpOptions);
  }

  // Delete Ad
  deleteAd(id: string): Observable<Ad> {
    return this.http.delete<Ad>(`${environment.apiUrl}/${id}`, httpOptions);
  }
}
