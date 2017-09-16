import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Main from './pages/main/index.jsx'
import store from './redux/store.js'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
