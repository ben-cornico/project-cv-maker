import React, { Component } from 'react';
import FormPersonalInfo from './FormPersonalInfo'

export class Form extends Component {
  constructor(props) {
    super();

  }
  render() {
    return (
        <form>
            <fieldset className='personal-info'>
              <legend>Personal Information</legend>

              <div className="form-group">
                  <label htmlFor="fName">First Name</label>
                  <input type="text" id='fName' onChange={() => this.handleChange(this)} />
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
        </form>
    )
  }
}

export default Form