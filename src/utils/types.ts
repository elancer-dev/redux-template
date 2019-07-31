import { actionsHandler } from './actions';

export interface IState {
    score: number;
}

export interface IAction {
    type: IActionsHandlerKeys;
    data: any;
}

export interface IActionData {
    [item: string]: any;
}

export type IActionsHandler = typeof actionsHandler;
export type IActionsHandlerKeys = keyof IActionsHandler;

export interface actionsHandlerSchema {
    changeScore: { score: number; };
    clearScore: {};
}
