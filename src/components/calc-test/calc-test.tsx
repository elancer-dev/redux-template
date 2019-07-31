import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IState, IAction, IActionData, IActionsHandler, IActionsHandlerKeys, actionsHandlerSchema } from './../../utils/types';
import { action } from './../../utils/reducer';
import { actionsHandler } from './../../utils/actions';
import Helper from './../../lib/helper';

interface IProps {
    initScoreOnMount: number;
    showRandom?: boolean;
}

interface IPS extends IProps, IState {
    action: <T extends keyof IActionsHandler>(type: T, data: actionsHandlerSchema[T]) => IAction;
}

class CalcTest extends React.PureComponent<IPS> {

    constructor(props: IPS) {
        super(props);
    }

    componentDidMount() {
        this.props.action('changeScore', { score: this.props.showRandom ? Helper.getRandom(0, 10) : this.props.initScoreOnMount });
    }

    buttonClickHandler() {
        this.props.action('clearScore', {});
    }

    render() {

        return (
            <div>
                <div>{this.props.score}</div>
                <input type="button" onClick={() => { this.buttonClickHandler() }} value="clear" />
            </div>
        )

    }

}

const mapStateToProps = (state: IState, props: IProps) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch, props: IProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalcTest);