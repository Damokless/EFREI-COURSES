import React, { Component } from 'react'
import FetchID from './components/fetchID'
import ToggleButton from './components/ToggleButton'
import './tailwind.output.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <ToggleButton />
        <FetchID />
      </div>
    )
  }
}
