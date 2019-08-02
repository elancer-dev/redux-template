import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './utils/reducer';
import ControlPanel from './components/control-panel/control-panel';
// import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><ControlPanel initTimerInterval={10} /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();