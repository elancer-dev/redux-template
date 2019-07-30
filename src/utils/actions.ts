import { IState, IActionData } from './types';

export const actionsHandler: { [item: string]: (state: IState, data: IActionData) => IState } = {

    changeScore: (state: IState, data: IActionData) => {

        var newState = { ...state };

        newState.score = data.score;

        return newState;

    },

    clearScore: (state: IState, data: IActionData): IState => {

        var newState = { ...state };

        newState.score = 0;

        return newState;

    },

}