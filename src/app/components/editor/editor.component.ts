import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ad } from '../main/content/ads-list/ad/ad.model';
import { AdsService } from 'src/app/services/ads.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  private today = new Date();
  private randomId = Math.floor(Math.random() * 1000);

  public ad: Ad;
  public mode = 'create';
  private id: string;

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.id = paramMap.get('id');
        this.adsService.getAd(this.id).subscribe(data => {
          this.ad = data;
        });
      } else {
        this.mode = 'create';
        this.id = null;
      }
    });
  }

  saveAd(form: NgForm) {
    const ad: Ad = {
      id: this.randomId + '',
      type: form.value.type,
      title: form.value.title,
      price: form.value.price,
      description: form.value.description,
      image: form.value.image,
      date: this.setCurrentDate()
    };
    if (this.mode === 'create') {
      this.adsService.addAd(ad);
    } else {
      this.adsService.updateAd(this.id, ad);
    }
  }

  onDeleteAd(id: string) {
    this.adsService.deleteAd(id);
  }

  private setCurrentDate() {
    return (
      this.today.getFullYear() +
      '-' +
      (this.today.getMonth() + 1) +
      '-' +
      this.today.getDate()
    );
  }
}
