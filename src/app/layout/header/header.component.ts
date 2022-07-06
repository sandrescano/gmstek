import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() user: User;
  placeholder = 'Search transactions, invoices, cards or merchants';

  constructor() { }

  ngOnInit(): void {
  }

}
