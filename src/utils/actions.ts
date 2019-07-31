import { IState } from './types';
import Helper from '../lib/helper';

export const actionsHandler = {

    changeScore: (state: IState, data: { score: number }): IState => {

        var newState = { ...state };

        newState.score = data.score;

        return newState;

    },

    clearScore: (state: IState, data: {}): IState => {

        var newState = { ...state };

        newState.score = 0;

        return newState;

    },

    someAnotherFunctionWithLongLongName: (state: IState, data: { add: number, mult?: number }): IState => {

        var newState = { ...state };

        newState.score += data.add;

        if (Helper.isSet(data.mult)) {
            newState.score *= data.mult;
        }

        return newState;

    },

}