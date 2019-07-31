import { IState, IActionData } from './types';

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

}