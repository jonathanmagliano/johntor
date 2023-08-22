import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App.js';
import { HashRouter } from 'react-router-dom'


ReactDOM.render(
	<HashRouter><App /></HashRouter>, 
	document.getElementById('root')
)
/**
SUBSTITUIR DEPOIS:
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>, 
	document.getElementById('root')
)
**/