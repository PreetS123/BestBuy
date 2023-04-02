import React from 'react'
import { Provider } from 'react-redux'
import { AllRoutes } from './AllRoutes'
import { store } from './Redux/store'
import axios from 'axios'



  axios.defaults.baseURL='https://database-bestbuy.herokuapp.com';
  axios.defaults.headers.post['Content-Type'] = 'application/json';

export const Main = () => {
  return (
    <div style={{width:'100%'}}>
      <Provider store={store}>
      <AllRoutes/>
      </Provider>
       
    </div>
  )
}
