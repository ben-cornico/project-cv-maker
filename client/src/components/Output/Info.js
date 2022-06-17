import React, { Component } from 'react';
import '../components.css';

export class Info extends Component {
  constructor(props) {
    super()

    console.log(props.data.address)
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className='info'>
        
        <p className="info-email">
          <span className="mdi mdi-email"></span>
          <div>
            {this.props.data.email}
          </div>

        </p>
        <p className="info-phone">
          <span className="mdi mdi-phone"></span>
          <div>
            {this.props.data.pNumber}
          </div>
          
        </p>
        <p className="info-address">
          <span class="mdi mdi-map-marker"></span>
          <div className='div-address'>
            <p className="addressline">
              {this.props.data.address.addressLine1}
            </p>

            <p className="address-city">
              {this.props.data.address.city}
            </p>
            <p className="address-state-province">
              {this.props.data.address.stateProvince}
            </p>
            <p className="address-zip-postal">
              {this.props.data.address.zipPostal.toUpperCase()}
            </p>
            
          </div>
          
        </p>
        <p className="info-linkedin">
          <span class="mdi mdi-linkedin"></span>
          <div>
            {this.props.data.linkedin}
          </div>
        </p>
      </div>
    )
  }
}

export default Info