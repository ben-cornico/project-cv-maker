import React, { Component } from 'react';
import Layout from './Output/Layout';

export class MainOutput extends Component {
    constructor() {
        super();

        this.state = {
            info: {
                name: '',
                email: '',
                pNumber: '',
                linkedin: '',
                address: {
                    addressLine1: '',
                    city: '',
                    stateProvince: '',
                    zipPostal: ''
                }
            }
            
        }

        this.addressHandleChange = this.addressHandleChange.bind(this)
        this.infoHandleChange = this.infoHandleChange.bind(this)
    }

    infoHandleChange = (e) => {
        
        this.setState({
            info: {
                ...this.state.info, [e.target.name]: e.target.value
            }
        })
    }

    addressHandleChange = (e) => {

        this.setState({
            info: {
                ...this.state.info, 
                address: {
                    ...this.state.info.address, [e.target.name]: e.target.value
                }
            }
        })
    }
  render() {
    return (
      <>
        <form>
            <fieldset className='personal-info'>
            <legend>Personal Information</legend>

            <div className="form-group">
                <label htmlFor="fName">Full Name</label>
                <input type="text" id='fName' name='name' value={this.state.info.name} onChange={this.infoHandleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={this.infoHandleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="pNumber">Phone Number</label>
                <input type="text" id='pNumber' name='pNumber' onChange={this.infoHandleChange}/>
            </div>

            <div className="form-address">
                <label htmlFor="address">Address</label>
                <div className="input-group">
                    <input type="text" id="address" name='addressLine1' placeholder='Address Line 1' onChange={this.addressHandleChange}/>
                    <input type="text" id="city" placeholder='City' name='city' onChange={this.addressHandleChange}/>
                    <input type="text" placeholder='State/Province' name='stateProvince' onChange={this.addressHandleChange}/>
                    <input type="text" placeholder='Zip/Postal Code' name='zipPostal' onChange={this.addressHandleChange}/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="text" id='linkedin' name='linkedin' onChange={this.infoHandleChange}/>
            </div>
        
            </fieldset>
        </form>
<button onClick={console.log(this.state)}>CLICK</button>
        <Layout data={this.state}/>
      </>
    )
  }
}

export default MainOutput