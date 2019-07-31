import { actionsHandler } from './actions';

export interface IState {
    score: number;
}

export interface IAction<D> {
    type: keyof IActionsHandler;
    data: D;
}

export type IActionsHandler = typeof actionsHandler;

export type DataArgumentType<F extends Function> = F extends (s: IState, d: infer D) => any ? D : never;

export type IActionsHandlerSchema<T extends keyof IActionsHandler> = DataArgumentType<IActionsHandler[T]>;
