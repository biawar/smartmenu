import React from 'react';
import { Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import burguerReducer from './store/reducers/burguer';

const rootReducer = combineReducers({
  burguer: burguerReducer
});

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View>...</View>
    </Provider>
  );
}
