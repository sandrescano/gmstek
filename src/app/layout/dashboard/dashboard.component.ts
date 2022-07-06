import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TransactionStatus } from 'src/app/core/models/enums/transaction.status';
import { Transaction } from 'src/app/core/models/response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnChanges {

  @Input() transactions: Transaction[];
  acceptTransactions = 0;
  acceptTransactionsNew = 0;
  acceptTransactionsDisputed = 0;
  
  invoiceTasks = 4;
  invoiceTaskNew = 3;
  invoiceTaskDelinquent = 0;
  invoiceTaskDisputed = 1;
  invoiceTaskRejected = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.acceptTransactions = this.transactions.length;
    this.acceptTransactionsNew = this.transactions.filter(trans => trans.status === TransactionStatus.NEW).length;
  }

}
