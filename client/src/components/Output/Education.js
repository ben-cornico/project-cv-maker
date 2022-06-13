import React, { Component } from 'react'

export class Education extends Component {
  render() {
    return (
      <div className='education'>
        <h2 className='component-title'>EDUCATION</h2>
        <ul className="education-list">
            <li className='education-container'>
                <p className="education-degree">DEGREE NAME / MAJOR</p>
                <p className="education-location">
                    University, Location
                </p>
                <p className="education-year">
                    2007 - 2013
                </p>
            </li>

            <li className='education-container'>
                <p className="education-degree">DEGREE NAME / MAJOR</p>
                <p className="education-location">
                    University, Location
                </p>
                <p className="education-year">
                    2007 - 2013
                </p>
            </li>
        </ul>
      </div>
    )
  }
}

export default Education