/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { newStore,persistor } from './components/redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

const AppRedux=()=>(
    <Provider store={newStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  )

AppRegistry.registerComponent(appName, () => AppRedux);
