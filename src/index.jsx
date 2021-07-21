/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from '../tests/reportWebVitals';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

reportWebVitals(console.log);
