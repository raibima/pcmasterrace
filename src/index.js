import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Accio } from 'react-accio';
import mockResolver from './shared/mockResolver';

Accio.defaults.resolver = mockResolver;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
