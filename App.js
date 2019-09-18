import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import burguersReducer from './store/reducers/burguers';
import CardapioNavigator from './navigation/CardapioNavigator';

const rootReducer = combineReducers({
  burguer: burguersReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <CardapioNavigator />
    </Provider>
  );
}
