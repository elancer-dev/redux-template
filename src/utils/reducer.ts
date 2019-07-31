import { IState, IAction, IActionsHandler } from './types';
import { actionsHandler } from './actions';

const initialState: IState = {
    score: 0,
}

export function reducer(state: IState = initialState, action: IAction<any>): IState {

    if (typeof actionsHandler[action.type] === 'function') {
        return actionsHandler[action.type](state, action.data);
    } else {
        return state;
    }

}

export function action<T extends keyof IActionsHandler, D>(type: T, data: D): IAction<D> {
    return { type: type, data: data }
}