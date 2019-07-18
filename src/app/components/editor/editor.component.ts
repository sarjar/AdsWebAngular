import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ad } from '../main/content/ads-list/ad/ad.model';
import { AdsService } from 'src/app/services/ads.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  private today = new Date();

  constructor(private adsService: AdsService) {}

  ngOnInit() {}

  saveAd(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const ad: Ad = {
      id: null,
      type: form.value.type,
      title: form.value.title,
      price: form.value.price,
      description: form.value.description,
      image: form.value.image,
      date: this.setCurrentDate()
    };

    this.adsService.addAd(ad);
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
