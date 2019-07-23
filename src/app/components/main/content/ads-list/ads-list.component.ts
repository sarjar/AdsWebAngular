import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ad } from './ad/ad.model';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit, OnDestroy {
  private type: string;
  ads: Ad[];
  isLoadingItems: boolean;
  getAdsSub: Subscription;

  constructor(private adsService: AdsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isLoadingItems = true;
    setTimeout(() => {
      /** spinner ends after 1.5 seconds */
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('type')) {
          this.type = paramMap.get('type');
          this.getAdsSub = this.adsService
            .getAds(this.type)
            .subscribe(adData => {
              this.ads = adData;
            });
        }
      });
      this.isLoadingItems = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.getAdsSub) {
      this.getAdsSub.unsubscribe();
    }
  }
}
