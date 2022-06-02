import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import ProfileContainer from './containers/ProfileContainer'



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
       <Navigation />
       <Router />
      <ProfileContainer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
