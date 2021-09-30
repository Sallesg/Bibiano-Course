import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TrafficLight } from './components/TrafficLight'

ReactDOM.render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>,
  document.getElementById('root')
)
