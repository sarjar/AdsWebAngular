import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ad } from '../main/content/ads-list/ad/ad.model';
import { AdsService } from 'src/app/services/ads.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { today } from 'src/app/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  private randomId = Math.floor(Math.random() * 1000);

  ad: Ad;
  createMode: boolean;
  private id: string;

  getAdSub: Subscription;
  saveAdSub: Subscription;
  deleteAdSub: Subscription;

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ad = new Ad();

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.createMode = false;
        this.id = paramMap.get('id');
        this.getAdSub = this.adsService.getAd(this.id).subscribe(data => {
          this.ad = data;
        });
      } else {
        this.createMode = true;
        this.id = null;
      }
    });
  }

  saveAd(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // workaround
    this.ad.id = this.randomId + '';
    this.ad.date = this.currentDateFormatter();

    const save = this.createMode
      ? this.adsService.addAd(this.ad)
      : this.adsService.updateAd(this.id, this.ad);

    this.saveAdSub = save.subscribe(() => {
      this.backToHomePage();
    });
  }

  onDeleteAd(id: string): void {
    this.deleteAdSub = this.adsService.deleteAd(id).subscribe(() => {
      this.backToHomePage();
    });
  }

  private backToHomePage() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.getAdSub) {
      this.getAdSub.unsubscribe();
    }
    if (this.saveAdSub) {
      this.saveAdSub.unsubscribe();
    }
    if (this.deleteAdSub) {
      this.deleteAdSub.unsubscribe();
    }
  }

  private currentDateFormatter(): string {
    return (
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    );
  }
}
