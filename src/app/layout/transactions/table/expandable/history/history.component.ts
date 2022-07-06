import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { History } from 'src/app/core/models/response';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  @Input() history: History[];

  constructor() { }

  ngOnInit(): void {
  }

}
