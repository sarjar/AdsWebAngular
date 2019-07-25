import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ad } from '../main/content/ads-list/ad-item/ad.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { today } from 'src/app/constants';
import { Subscription } from 'rxjs';
import { EditCreateService } from './edit-create.service';

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss']
})
export class EditCreateComponent implements OnInit, OnDestroy {
  private randomId = Math.floor(Math.random() * 1000);
  private id: string;

  ad: Ad;
  createMode: boolean;

  getAdSub: Subscription;
  saveAdSub: Subscription;
  deleteAdSub: Subscription;

  constructor(
    private editCreateService: EditCreateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ad = new Ad();

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.createMode = false;
        this.id = paramMap.get('id');
        this.getAdSub = this.editCreateService
          .getAd(this.id)
          .subscribe(data => {
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
      ? this.editCreateService.addAd(this.ad)
      : this.editCreateService.updateAd(this.id, this.ad);

    this.saveAdSub = save.subscribe(() => {
      this.backToHomePage();
    });
  }

  onDeleteAd(id: string): void {
    this.deleteAdSub = this.editCreateService.deleteAd(id).subscribe(() => {
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
