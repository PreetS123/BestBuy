import React from 'react'
import { Provider } from 'react-redux'
import { AllRoutes } from './AllRoutes'
import { store } from './Redux/store'
import axios from 'axios'



  axios.defaults.baseURL='http://localhost:8080';
  
  // axios.defaults.baseURL="https://energetic-cyan-sea-urchin.cyclic.app";
  axios.defaults.headers.post['Content-Type'] = 'application/json';

export const Main = () => {
  return (
    <>
      <Provider store={store}>
      <AllRoutes/>
      </Provider>
       
    </>
  )
}
