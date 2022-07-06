import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GmstekService } from '../services/gmstek.service';
import * as LayoutActions from "../actions/layout.actions";

@Injectable()
export class LayoutEffects {

  getData$ = createEffect(() => this.actions$.pipe(
    ofType(LayoutActions.getData),
    mergeMap(() => this.gmstekService.getData()
      .pipe(
        map((response) => LayoutActions.getDataSuccess({
          user: response.data.user,
          transactions: response.data.transactions
        })),
        catchError((error) => of(LayoutActions.getDataFail()))
      ))
  ));

  constructor(
    private actions$: Actions,
    private gmstekService: GmstekService
  ) { }
}