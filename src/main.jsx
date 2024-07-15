import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// Use ReactDOM.createRoot().render instead of ReactDOM.render
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <App />
    </Provider>
);
