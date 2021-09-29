import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Button } from './Button'

ReactDOM.render(
  <React.StrictMode>
    <Button showAlert={() => window.alert("clicked by props")}/>
  </React.StrictMode>,
  document.getElementById('root')
)
