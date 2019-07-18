import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { Ad } from './ad/ad.model';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  ads: Ad[];

  constructor(private adsService: AdsService) {}

  ngOnInit() {
    this.adsService.getAds().subscribe(adData => {
      this.ads = adData;
    });
  }


}
