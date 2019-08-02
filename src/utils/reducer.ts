import { IState, IAction } from './types';

const initialState: IState = {
    timerInterval: 0,
    label: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.',
}

export function reducer(state: IState = initialState, action: IAction<any, any>): IState {

    if (action.handler !== undefined && typeof action.handler[action.type] === 'function') {
        return action.handler[action.type](state, action.data);
    } else {
        return state;
    }

}