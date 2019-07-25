import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Ad } from './ad-item/ad.model';
import { AdsService } from './ads.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {
  ads: Ad[];
  quote: string;
  isLoading = true;

  constructor(private adsService: AdsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('type')) {
        const type: string = paramMap.get('type');

        const items: Observable<Ad[]> = this.loadItems(type);
        const quote: Observable<any> = this.loadQuote();

        /* forkJoin runs all observable sequences in parallel and collect their last elements. */
        forkJoin([items, quote])
          .pipe(
            /* Tap operator takes a config object that allows us to hook onto the next,
            error and complete event state of an Observable,
            very much like we can do in the subscribe. - NOT USING IT THIS TIME*/
            tap(result => console.log('tap', result)),
            /* Finalize operator adds a callback to the teardown of the Observable,
            via subscription.add(fn). This guarantees it will be called on
            error, complete, and unsubscription. */
            finalize(() => {
              this.isLoading = false;
            })
          )
          .subscribe(
            result => {
              this.ads = result[0];
              this.quote = result[1].value.joke;
            },
            err => {
              console.error(err);
            }
          );
      }
    });
  }

  loadItems(type: string): Observable<Ad[]> {
    return this.adsService.getAds(type);
  }

  loadQuote(): Observable<any> {
    return this.adsService.getQuote();
  }
}
