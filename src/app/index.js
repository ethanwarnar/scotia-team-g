
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Profile, Resources, Login } from '../pages'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { RouterLogic } from '../components'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../redux/store';

const { persistor, store } = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterLogic />
      </PersistGate>
    </Provider>
  )
}

export default App
