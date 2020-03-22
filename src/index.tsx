import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
Sentry.init({dsn: "https://5a2446637f2244988fd646a0c06a1c1c@sentry.io/5170931"});

ReactDOM.render(<App />, document.getElementById('root'));
defineCustomElements(window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
