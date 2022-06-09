import Header from '../Header';
import Objective from '../Objective'
import './Layout.css'
import React, { Component } from 'react'

export class Layout extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className='cv-layout'>
        <Header />
        <Objective />
      </div>
    )
  }
}

export default Layout