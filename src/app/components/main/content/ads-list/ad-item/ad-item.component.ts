import { Component, Input } from '@angular/core';
import { newDaysPeriod, today } from 'src/app/constants';
import { Ad } from './ad.model';

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.scss']
})
export class AdItemComponent {
  @Input() ad: Ad;

  itemIsNew(): boolean {
    const finalDate = new Date(this.ad.date);
    finalDate.setDate(finalDate.getDate() + newDaysPeriod);
    return today <= finalDate;
  }
}
