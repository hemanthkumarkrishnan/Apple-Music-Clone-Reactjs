import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any CSS or styling here
import App from './App'; // Import your main application component here
 
import { DataLayer } from './DataLayer';
import { initialState, reducer } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
    <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

 
