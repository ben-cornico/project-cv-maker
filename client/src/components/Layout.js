import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

import './components.css';

import React, { Component } from 'react'

export class Layout extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className='cv-layout'>
        <Header />

        <div className="cv-body">
          <Main />
          <Sidebar />
        </div>


      </div>
    )
  }
}

export default Layout