export interface IState {
    timerInterval: number;
    label: string;
}

export interface IAction<H extends object, D> {
    handler: H;
    type: keyof H;
    data: D;
}

export type DataArgumentType<F> = F extends (s: IState, d: infer D) => IState ? D : never;

// export type IActionsHandlerSchema<H, T extends keyof H> = DataArgumentType<H[T]>;