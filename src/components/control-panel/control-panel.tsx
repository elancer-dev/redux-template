import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IState, IAction, DataArgumentType } from './../../utils/types';
import { action, actionsHandler } from './../../utils/actions';
import Helper from '../../lib/helper';
import RunningLabel from './../running-label/running-label';

interface IProps {
    initTimerInterval?: number;
}

interface IPS extends IProps {
    timerInterval: number;
    action: <H extends object, T extends keyof H>(handler: H, type: T, data: DataArgumentType<H[T]>) => IAction<H, DataArgumentType<H[T]>>;
}

class ControlPanel extends React.PureComponent<IPS> {

    constructor(props: IPS) {
        super(props);

        if (Helper.isSet(this.props.initTimerInterval) && this.props.initTimerInterval >= 0) {
            this.props.action(actionsHandler, 'setInterval', { val: this.props.initTimerInterval });
        }
    }

    buttonAddClickHandler(inc: number) {
        if (this.props.timerInterval + inc >= 0) {
            this.props.action(actionsHandler, 'addInterval', { add: inc });
        }
    }

    buttonMultClickHandler(mult: number) {
        if (this.props.timerInterval > 0) {
            this.props.action(actionsHandler, 'multInterval', { mult: mult });
        }
    }

    buttonClearClickHandler() {
        if (this.props.timerInterval > 0) {
            this.props.action(actionsHandler, 'clearInterval', {});
        }
    }

    render() {

        return (
            <div>
                <RunningLabel />
                <div style={{ 'display': 'flex' }}>
                    <div>Interval: {this.props.timerInterval / 10} sec.</div>
                    <input type="button" onClick={() => { this.buttonAddClickHandler(1) }} value="+" />
                    <input type="button" onClick={() => { this.buttonAddClickHandler(-1) }} value="-" />
                    <input type="button" onClick={() => { this.buttonMultClickHandler(2) }} value="x2" />
                    <input type="button" onClick={() => { this.buttonClearClickHandler() }} value="stop" />
                </div>
            </div>
        )

    }

}

const mapStateToProps = (state: IState, props: IProps) => {
    return { timerInterval: state.timerInterval };
};

const mapDispatchToProps = (dispatch: Dispatch, props: IProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);