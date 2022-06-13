import React, { Component } from 'react'
import Layout from './components/Output/Layout'
import Form from './components/Form/Form'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        <Layout />
      </div>
    )
  }
}

export default App

