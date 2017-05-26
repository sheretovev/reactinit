import React from 'react';
import { render } from 'react-dom';

import App from './App';
import './style.less';

render(
    <App name="Web Application"/>, 
    document.getElementById('container'));

