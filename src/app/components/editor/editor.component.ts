import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ad } from '../main/content/ads-list/ad/ad.model';
import { AdsService } from 'src/app/services/ads.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { today } from 'src/app/services/constants';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  private randomId = Math.floor(Math.random() * 1000);

  ad: Ad;
  createMode: boolean;
  private id: string;

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // this.ad = new Ad();
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.createMode = false;
        this.id = paramMap.get('id');
        this.adsService.getAd(this.id).subscribe(data => {
          this.ad = data;
        });
      } else {
        this.createMode = true;
        this.id = null;
      }
    });
  }

  saveAd(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const ad: Ad = {
      id: this.randomId + '',
      type: form.value.type,
      title: form.value.title,
      price: form.value.price,
      description: form.value.description,
      image: form.value.image,
      date: this.setCurrentDate()
    };

    const save = this.createMode
      ? this.adsService.addAd(ad)
      : this.adsService.updateAd(this.id, ad);
    save.subscribe(() => {
      this.backToHomePage();
    });
  }

  onDeleteAd(id: string) {
    this.adsService.deleteAd(id).subscribe(() => {
      this.backToHomePage();
    });
  }

  private backToHomePage() {
    this.router.navigate(['/']);
  }

  private setCurrentDate() {
    return (
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    );
  }
}
