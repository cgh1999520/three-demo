import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less'
import Router from './router/index'

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);
