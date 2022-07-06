import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Data, Transaction, User } from 'src/app/core/models/response';
import * as layoutReducer from '../core/reducers/layout.reducer';
import * as layoutActions from '../core/actions/layout.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  user$: Observable<User>;
  transactions$: Observable<Transaction[]>;
  isLoading$: Observable<boolean>;
  
  /**
   * Constructor
   * @param store NgRx Store 
   */
  constructor(private store: Store) {
    this.isLoading$ = this.store.select(layoutReducer.getIsLoading);
    this.user$ = this.store.select(layoutReducer.getUser);
    this.transactions$ = this.store.select(layoutReducer.getTransactions);
    this.store.dispatch(layoutActions.getData());
  }

  ngOnInit(): void {
  }

}
