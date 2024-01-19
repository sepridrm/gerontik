import React from 'react';
import { useFonts } from 'expo-font';
import Router from './src/router';
import reducers from './src/reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducers)

function App() {
  const [isReady, setisReady] = useFonts({
    'black': require('./assets/fonts/Poppins-Black.ttf'),
    'black-italic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'bold-italic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
    'extra-bold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'extra-bold-italic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'extra-light': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'extra-light-italic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    'italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
    'light-italic': require('./assets/fonts/Poppins-LightItalic.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'medium-italic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'semi-bold-italic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'thin-italic': require('./assets/fonts/Poppins-ThinItalic.ttf')
  })

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;