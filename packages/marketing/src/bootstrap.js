import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(<App />, el)
}

// if we are in development mode and running in isolation run mount
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-div-root');
    if (devRoot) {
        mount(devRoot)
    }
}

// if app is running via a container export mount
export { mount };
