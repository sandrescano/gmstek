import { InjectionToken } from "@angular/core";
import { Action, ActionReducerMap } from "@ngrx/store";
import * as fromLayout from './core/reducers/layout.reducer';

export interface State {
    [fromLayout.layoutFeatureKey]: fromLayout.State;
}

export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<State, Action>
>('Root reducers token', {
    factory: () => ({
        [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    }),
});