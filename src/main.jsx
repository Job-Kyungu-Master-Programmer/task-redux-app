import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducerTask from './reducers/task.js'
import reducerFilter from './reducers/filter.js'

const store = configureStore({
    reducer: {
      filtera: reducerFilter,
      task : reducerTask
    }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)