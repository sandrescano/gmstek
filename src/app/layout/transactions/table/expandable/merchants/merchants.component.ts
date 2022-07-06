import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Merchant } from 'src/app/core/models/response';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MerchantsComponent implements OnInit {

  @Input() merchants: Merchant[];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.merchants.map(merchant => this.total += merchant.amount);    
  }

}
