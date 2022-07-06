import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/models/response';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() transactions: Transaction[];
  placeholder = 'Search transactions by Merchant Invoice, Card,ICAO, Tail # or DoDAAC';
  expandSet = new Set<number>();
  checkSet = new Set<number>();
  listOfData: readonly Transaction[] = [];
  allChecked = false;
  indeterminate = false;  

  currentPageDataChange($event: readonly Transaction[]): void {
    this.listOfData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.listOfData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(({id}) => this.checkSet.has(id));
    const allUnChecked = validData.some(({id}) => this.checkSet.has(id));
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && allUnChecked;
  }

  checkAll(value: boolean): void {
    this.listOfData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, value));
    this.refreshStatus();
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshStatus();
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.checkSet.add(id);
    } else {
      this.checkSet.delete(id);
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.listOfData = this.transactions;
  }

}
