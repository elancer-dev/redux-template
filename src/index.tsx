import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './utils/reducer';
import CalcTest from './components/calc-test/calc-test';
// import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><CalcTest initScoreOnMount={2} showRandom={true} /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();