import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layouts/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

let render = () => {
    ReactDOM.render( < App / > , rootElement)
}
if (module.hot) {
    module.hot.accept('./app/layouts/App', () => {
        setTimeout(render)

    })
}

render();

registerServiceWorker();