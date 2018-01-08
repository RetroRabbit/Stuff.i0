import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './registration/StepTwo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
