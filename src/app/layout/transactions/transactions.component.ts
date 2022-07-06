import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Transaction } from 'src/app/core/models/response';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent implements OnInit, OnChanges {

  @Input() transactions: Transaction[];
  transactionToAcceptTitle = '';
  transactionToReviewTitle = '42 Transactionsto Review';

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    let transactions = this.transactions.length;
    this.transactionToAcceptTitle = `${transactions} Transactions to Accept`
  }
}
