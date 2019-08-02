import { IState, IAction } from './types';
// import Helper from '../lib/helper';

export const actionsHandler = {

    setInterval: (state: IState, data: { val: number }): IState => {

        var newState: IState;

        if (data.val >= 0) {
            newState = { ...state };
            newState.timerInterval = data.val;
        } else {
            newState = state;
        }

        return newState;

    },

    clearInterval: (state: IState, data: {}): IState => {

        var newState = { ...state };

        newState.timerInterval = 0;

        return newState;

    },

    addInterval: (state: IState, data: { add: number }): IState => {

        var newState = { ...state };

        newState.timerInterval += data.add;

        if (newState.timerInterval < 0)
            newState.timerInterval = 0;

        return newState;

    },

    multInterval: (state: IState, data: { mult: number }): IState => {

        var newState = { ...state };

        newState.timerInterval *= data.mult;

        return newState;

    },


}

export const action = <H extends object, T extends keyof H, D>(h: H, t: T, d: D): IAction<H, D> => {
    return { type: t, data: d, handler: h }
}