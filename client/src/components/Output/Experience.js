import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';

export class Experience extends Component {
  constructor() {
    super();
    this.state = {
      jobList: [<ExperienceForm />],
    }

    this.addJob = this.addJob.bind(this)
  }


  addJob(e) {
    e.preventDefault()
    this.setState({
      jobList: [...this.state.jobList, <ExperienceForm />]
    })
  }

  render() {
    return (
      <div className='experience'>
        <h2 className='component-title'>EXPERIENCE</h2>
        <div className="exp-container">
          <div className="exp">
              <p className="exp-title">
                  LOREM IPSUM
              </p>
              <p className="exp-location-date">
                  Location Location / 2013 - 2016
              </p>
              <div className='info-container'>
              <ul className='exp-info'>
                  <li>
                      Etiam ultrices ex non magna aliquam, nec mollis velit venenatis.
                  </li>
                  <li>
                      Duis sit amet metus eget lacus laoreet congue et ac ante.
                  </li>
                  <li>
                  Nullam augue odio, pellentesque luctus rutrum vel, cursus ut nisl. Donec suscipit orci non neque bibendum malesuada.
                  </li>
              </ul>
              </div>  
          </div>

          <div className="exp">
              <p className="exp-title">
                  LOREM IPSUM
              </p>
              <p className="exp-location-date">
                  Location Location / 2013 - 2016
              </p>
              <div className='info-container'>
              <ul className='exp-info'>
                  <li>
                      Etiam ultrices ex non magna aliquam, nec mollis velit venenatis.
                  </li>
                  <li>
                      Duis sit amet metus eget lacus laoreet congue et ac ante.
                  </li>
                  <li>
                  Nullam augue odio, pellentesque luctus rutrum vel, cursus ut nisl. Donec suscipit orci non neque bibendum malesuada.
                  </li>
              </ul>
              </div>  
          </div>

          <div className="exp">
              <p className="exp-title">
                  LOREM IPSUM
              </p>
              <p className="exp-location-date">
                  Location Location / 2013 - 2016
              </p>
              <div className='info-container'>
              <ul className='exp-info'>
                  <li>
                      Etiam ultrices ex non magna aliquam, nec mollis velit venenatis.
                  </li>
                  <li>
                      Duis sit amet metus eget lacus laoreet congue et ac ante.
                  </li>
                  <li>
                  Nullam augue odio, pellentesque luctus rutrum vel, cursus ut nisl. Donec suscipit orci non neque bibendum malesuada.
                  </li>
              </ul>
              </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default Experience