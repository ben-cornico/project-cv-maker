import React, { Component } from 'react';
import AutoHeightTextArea from './AutoHeightTextArea';
export class ExperienceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobInfo: []
        }

    }


  render() {
    return (
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
    )
  }
}

export default ExperienceForm