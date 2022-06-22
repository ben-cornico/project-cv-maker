import React, { Component } from 'react'

export class ProfileSummary extends Component {
  render() {
    return (
        <fieldset className='fieldset-profile'>
            <legend>Profile</legend>
            <div className="form-group">
                <label htmlFor="profSummary">Profile Summary</label>
                <textarea name="profSummary" id="profSummary" onChange={this.props.profChange}></textarea>
            </div>
        </fieldset>
    )
  }
}

export default ProfileSummary