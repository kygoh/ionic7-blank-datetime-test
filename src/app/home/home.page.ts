import {Component, OnInit} from '@angular/core';
import type { DatetimeChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  maxDate = '';
  value = '';

  constructor(
  ) {
  }

  ngOnInit() {
    const OFFSET = 100;
    const today = new Date();
    const futureDate = new Date(today.getFullYear() + OFFSET, 12);
    this.maxDate = futureDate.toISOString().substring(0, 10);
  }

  onDatetimeChange($event: Event) {
  }

}
