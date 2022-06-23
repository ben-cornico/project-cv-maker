import React, { Component } from 'react'

export class PersonalInfo extends Component {
    
  render() {
    return (
        <fieldset className='personal-info'>
            <legend>Personal Information</legend>

            <div className="form-group">
                <label htmlFor="fName">Full Name</label>
                <input type="text" id='fName' name='name' onChange={this.props.infoChange} />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={this.props.infoChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="pNumber">Phone Number</label>
                <input type="text" id='pNumber' name='pNumber' onChange={this.props.infoChange}/>
            </div>

            <div className="form-address">
                <label htmlFor="address">Address</label>
                <div className="input-group-address">
                    <input type="text" id="address" name='addressLine1' placeholder='Address Line 1' onChange={this.props.addressChange}/>
                    <input type="text" id="city" placeholder='City' name='city' onChange={this.props.addressChange}/>
                    <input type="text" placeholder='State/Province' name='stateProvince' onChange={this.props.addressChange}/>
                    <input type="text" placeholder='Zip/Postal Code' name='zipPostal' onChange={this.props.addressChange}/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="text" id='linkedin' name='linkedin' onChange={this.props.infoChange}/>
            </div>
        </fieldset>
    )
  }
}

export default PersonalInfo