import React, { Component } from 'react';


export class Experience extends Component {
  constructor(props) {
    super();
    console.log(props)
  }



  render() {
    return (
      <div className='experience'>
        <h2 className='component-title'>EXPERIENCE</h2>
        <div className="exp-container">

        {this.props.exp.map(x => {
          return (
            <div className="exp">
              <p className="exp-title">
                {x.name ? x.name : 'Job Title'}
              </p>

              <p className="exp-location-date">
                {x.locationYear ? x.locationYear : 'Location / Year'}
              </p>

              <div className="info-container">
                <ul className="exp-info">
                  {x.info.map(y => {
                    return <li>{y ? y : 'Job description'}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Experience