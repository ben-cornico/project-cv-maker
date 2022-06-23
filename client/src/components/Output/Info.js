import React, { Component } from 'react';
import '../components.css';

export class Info extends Component {
  constructor(props) {
    super()

    console.log(props.data.address)
  }
  render() {
    return (
      <div className='info'>
        
        <p className="info-mdi email">
          <span className="mdi mdi-email"></span>
          <div>
            {this.props.data.email ? this.props.data.email : 'Your Email'}
          </div>

        </p>
        <p className="info-mdi phone">
          <span className="mdi mdi-phone"></span>
          <div>
            {this.props.data.pNumber ? this.props.data.pNumber : 'Phone Number'}
          </div>
          
        </p>
        <p className="info-mdi address">
          <span class="mdi mdi-map-marker"></span>
          <div className='div-address'>
            <p className="addressline">
              {this.props.data.address.addressLine1 ? this.props.data.address.addressLine1 : 'Address Line'}
            </p>

            <p className="address-city">
              {this.props.data.address.city ? this.props.data.address.city : 'City'}
            </p>
            <p className="address-state-province">
              {this.props.data.address.stateProvince ? this.props.data.address.stateProvince : "State/Province"}
            </p>
            <p className="address-zip-postal">
              {this.props.data.address.zipPostal.toUpperCase() ? this.props.data.address.zipPostal.toUpperCase() : 'Zip / Postal Code'}
            </p>
            
          </div>
          
        </p>
        <p className="info-mdi linkedin">
          <span class="mdi mdi-linkedin"></span>
          <div>
            {this.props.data.linkedin ? this.props.data.linkedin : 'linkedin/profile'}
          </div>
        </p>
      </div>
    )
  }
}

export default Info