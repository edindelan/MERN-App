import './assets/stylesheets/base.scss';
import './assets/stylesheets/navigation.scss';
import './assets/stylesheets/lemonade.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.querySelector('#app'));