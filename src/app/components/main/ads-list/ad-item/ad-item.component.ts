import { Component, Input } from '@angular/core';
import { Ad } from './ad.model';
import { newDaysPeriod, today } from 'src/app/shared/constants';

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
