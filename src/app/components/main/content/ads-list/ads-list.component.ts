import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ad } from './ad/ad.model';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})

export class AdsListComponent implements OnInit {
  private type: string;
  public ads: Ad[];
  isLoadingItems: boolean;

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.isLoadingItems = true;
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('type')) {
          this.type = paramMap.get('type');
          this.adsService.getAds(this.type).subscribe(adData => {
            this.ads = adData;
          });
        }
      });
      this.isLoadingItems = false;
    }, 1000);
  }
}
