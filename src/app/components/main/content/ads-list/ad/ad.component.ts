import { Component, OnInit, Input } from '@angular/core';
import { Ad } from './ad.model';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {
  @Input() ad: Ad;

  constructor() {}

  ngOnInit() {}

  itemIsNewerThan3Days = () => {
    const today = new Date();
    const finalDate = new Date(this.ad.date);
    finalDate.setDate(finalDate.getDate() + 3);
    if (today <= finalDate) { return; }
  }
}
