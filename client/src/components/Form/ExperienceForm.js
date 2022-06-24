import React, { Component } from 'react';
export class ExperienceForm extends Component {
    constructor(props) {
        super();
        
        this.state = {
            jobInfo: [<li className='info-list-item'><input type='text' id="info" name="info" data-key='0' onChange={props.onInfoChange}/></li>]
        }
        console.log(props)

    }

    addInfo = (e) => {
        e.preventDefault();
        this.setState({
            jobInfo: [...this.state.jobInfo, <li className='info-list-item'><input type='text' id="info" name="info" data-key={this.state.jobInfo.length} onChange={this.props.onInfoChange} /></li>]
        })
        this.props.addInfo(e)
    }

    deleteInfo = (e) => {
        e.preventDefault();
        this.setState({
            jobInfo: this.state.jobInfo.slice(0, -1),
        })

        this.props.deleteInfo(e);
    }

  render() {
    return (
        <div className="div-experience" data-key={this.props.keyIndex}>
            <div className="form-group">
                <label htmlFor="expTitle">Title</label>
                <input type="text" name="name" id="expTitle" onChange={this.props.onChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="locationYear">Location / Year</label>
                <input type="text" name="locationYear" id="locationYear" onChange={this.props.onChange}/>
            </div>

            <div className="exp-info-list">
                <label>Info</label>
                <div className="list">
                    <ul>
                        {this.state.jobInfo}
                    </ul>
                    <div className="btn-group">
                        <button className='btn-list-add' onClick={this.addInfo} ><span className='mdi mdi-plus'></span></button>
                        <button className='btn-list-delete' onClick={this.deleteInfo}><span className='mdi mdi-minus'></span></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
  }
}

export default ExperienceForm