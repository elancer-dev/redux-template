import { IState } from './../../utils/types';
// import Helper from './../../lib/helper';

export const runningLabelActionsHandler = {

    shiftLabel: (state: IState, data: {}): IState => {

        var newState = { ...state };

        newState.label = newState.label.substr(1) + newState.label.substr(0, 1)

        return newState;

    },

}