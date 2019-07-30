export interface IState {
    score: number;
}

export interface IAction {
    type: string;
    data: IActionData;
}

export interface IActionData {
    [item: string]: any;
}