import React, { Component } from 'react';
import Header from '../Output/Header';

export class FormPersonalInfo extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log('agaga')
        this.setState({
            name: e.target.value,
        })
    }
  render() {
    return (
        <fieldset className='personal-info'>
            <legend>Personal Information</legend>

            <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input type="text" id='fName' onChange={this.handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="fName">Last Name</label>
                <input type="text" id='lName' />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>

            <div className="form-group">
                <label htmlFor="pNumber">Phone Number</label>
                <input type="text" id='pNumber' name='pNumber' />
            </div>

            <div className="form-address">
                <label htmlFor="address">Address</label>
                <div className="input-group">
                    <input type="text" id="address" placeholder='Address Line 1'/>
                    <input type="text" id="address2" placeholder='Address Line 2 (Optional)'/>
                    <input type="text" id="city" placeholder='City'/>
                    <input type="text" placeholder='State/Province' />
                    <input type="text" placeholder='Zip/Postal Code' />
                </div>
            </div>
        
        </fieldset>
    )
  }
}

export default FormPersonalInfo