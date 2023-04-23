import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reactRedux/redux';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //@ts-ignore
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);


reportWebVitals();
