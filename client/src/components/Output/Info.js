import React, { Component } from 'react';
import '../components.css';

export class Info extends Component {
  render() {
    return (
      <div className='info'>
        
        <p className="info-email">
          <span className="mdi mdi-email"></span>
          <div>
            youremail@gmail.com
          </div>

        </p>
        <p className="info-phone">
          <span className="mdi mdi-phone"></span>
          <div>
            778 555 5555
          </div>
          
        </p>
        <p className="info-address">
          <span class="mdi mdi-map-marker"></span>
          <div>
            1234 Abc Street, City, A1B C2D
          </div>
          
        </p>
        <p className="info-linkedin">
          <span class="mdi mdi-linkedin"></span>
          <div>
            linkedin.com/in/yourprofile
          </div>
        </p>
      </div>
    )
  }
}

export default Info