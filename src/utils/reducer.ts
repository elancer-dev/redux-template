import { IState, IAction, IActionData } from './types';
import { actionsHandler } from './actions';

const initialState: IState = {
    score: 0,
}

export function reducer(state: IState | undefined, action: IAction): IState {

    if (typeof state === 'undefined') { //return initial state and exit
        return initialState;
    }

    if (typeof actionsHandler[action.type] === 'function') {
        return actionsHandler[action.type](state, action.data);
    } else {
        console.log(`function ${action.type} does not exists`);
        console.trace();
        return state;
    }

}

export function action(type: string, data: IActionData): IAction {
    return { type: type, data: data }
}