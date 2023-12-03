import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { LoadApp } from './LoadApp';
import { store } from './store';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <LoadApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
