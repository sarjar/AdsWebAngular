import { Component, Input } from '@angular/core';
import { Ad } from '../ad-item/ad.model';

@Component({
  selector: 'app-pages-paginator',
  templateUrl: './pages-paginator.component.html',
  styleUrls: ['./pages-paginator.component.scss']
})
export class PagesPaginatorComponent {
  @Input() ads: Ad[];
}
