import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './sass/style.scss';
// import rootReducer from './store/root-reducer';
// import { getGuitars } from './store/actions';
// import guitars from './mocks/guitars';
import rootReducer from './store/reducer';

const store = configureStore({
  reducer: rootReducer,
});

// store.dispatch(getGuitars(guitars));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
