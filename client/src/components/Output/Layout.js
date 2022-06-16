import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

import '../components.css';

import React, { Component } from 'react'

export class Layout extends Component {
    constructor(props) {
        super(props);
    }

    test(e) {
      e.preventDefault();
      console.log(e)
    }

  render() {
    return (
      <form className='cv-layout' onSubmit={this.test} >
        <Header name={this.props.name}/>

        <div className="cv-body">
          <Main />
          <Sidebar />
        </div>


      </form>
    )
  }
}

export default Layout