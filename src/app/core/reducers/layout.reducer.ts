import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import * as LayoutActions from '../actions/layout.actions';
import { Data, Transaction, User } from '../models/response';

export const layoutFeatureKey = 'layout';

export interface State {
    user: User;
    transactions: Transaction[];
    isLoading: boolean;
    isError: boolean
}

const initialState: State = {
    user: undefined,
    transactions: [],
    isError: false,
    isLoading: false
};

export const reducer = createReducer(
    initialState,
    on(LayoutActions.getData, (state) => ({
        ...state,
        isLoading: true
    })),
    on(LayoutActions.getDataSuccess, (state, { user, transactions }) => ({
        ...state,
        user,
        transactions,
        isLoading: false,
    })),
    on(LayoutActions.getDataFail, (state) => ({
        ...state,
        isLoading: false
    })),
);

export const selectLayoutState = createFeatureSelector<State>(layoutFeatureKey);

export const getUser = createSelector(selectLayoutState,(state: State) => state.user);
export const getTransactions = createSelector(selectLayoutState,(state: State) => state.transactions);
export const getIsLoading = createSelector(selectLayoutState,(state: State) => state.isLoading);
