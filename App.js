import 'react-native-gesture-handler';
import React from 'react';
import MainNavigator from './src/navigator';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <MainNavigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
