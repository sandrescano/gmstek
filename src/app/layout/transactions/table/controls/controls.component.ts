import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent implements OnInit {
  
  placeholder = 'Search transactions by Merchant Invoice, Card,ICAO, Tail # or DoDAAC';

  constructor() { }

  ngOnInit(): void {
  }

}
