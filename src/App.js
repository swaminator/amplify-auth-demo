import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Auth } from 'aws-amplify'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      </header>
    </div>
  )
}

export default App