import React from 'react';
import { render } from 'react-dom';

import  { App } from './Components/App';
import './style.less';

render(
    <App name="hui"/>, 
    document.getElementById('container'));

