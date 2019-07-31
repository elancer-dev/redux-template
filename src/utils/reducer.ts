import { IState, IAction, IActionData } from './types';
import { actionsHandler } from './actions';

const initialState: IState = {
    score: 0,
}

export function reducer(state: IState = initialState, action: IAction): IState {

    return actionsHandler[action.type](state, action.data);

}

export function action(type: any, data: any): IAction {
    return { type: type, data: data }
}