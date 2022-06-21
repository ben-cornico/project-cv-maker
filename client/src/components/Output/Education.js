import React, { Component } from 'react'

export class Education extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className='education'>
        <h2 className='component-title'>EDUCATION</h2>

        <ul className="education-list">
          {this.props.edu.map(ed => {
            return (
              <li className="education-container">
                <p className="education-degree">{ed.degreeName ? ed.degreeName : 'DEGREE NAME / MAJOR'}</p>
                <p className="education-location">
                  {ed.universityLocation ? ed.universityLocation : 'University, Location'}
                </p>
                <p className="education-year">
                  {ed.year ? ed.year : 'Year Started - Year Ended'}
                </p>
              </li>  
            )
          })}

            {/* <li className='education-container'>
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
            </li> */}
        </ul>
      </div>
    )
  }
}

export default Education