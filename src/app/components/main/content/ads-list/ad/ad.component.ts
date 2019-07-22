import { Component, OnInit, Input } from '@angular/core';
import { newDaysPeriod, today } from 'src/app/services/constants';
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

  itemIsNew(): boolean {
    const finalDate = new Date(this.ad.date);
    finalDate.setDate(finalDate.getDate() + newDaysPeriod);
    return today <= finalDate;
  }
}
