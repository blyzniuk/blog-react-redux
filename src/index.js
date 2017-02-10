import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; 

import Blog from './containers/Blog';
import store from './store';

import css from './app.styl';

ReactDOM.render(<Provider store={store}>
    <Blog />
</Provider>, document.getElementById('root'));
