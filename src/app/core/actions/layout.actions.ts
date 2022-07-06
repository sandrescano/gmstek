import { createAction, props } from '@ngrx/store';
import { Data, Transaction, User } from '../models/response';

export const getData = createAction('[Layout] Get Data');

export const getDataSuccess = createAction(
    '[Layout] Get Data Success',
    props<{ user: User, transactions: Transaction[] }>()
  );

export const getDataFail = createAction('[Layout] Get Data Fail');