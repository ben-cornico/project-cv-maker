import React, { Component } from 'react';

export class Experience extends Component {
  constructor() {
    super();

    this.state = [
      {
        test: "HELLO WORLD",
        title: <input type="text" name="jobTitle" id="jobTitle" placeholder='Job Title'/>,
        locationDate: <input type="text" name="locationDate" id="locationDate" placeholder='Location / Date'/>,
        info: [
          <input type="text" name="jobInfo" id="jobInfo" placeholder='Job Information'/>
        ]
      }
    ];
    this.addJobDesc = this.addJobDesc.bind(this);
    this.addJob = this.addJob.bind(this)
    this.jobList = this.state.map((job, index) => {
      return (
        <div className="exp">
          <div className="exp-title">
            { job.title }
          </div>

          <p className="exp-location-date">
            {job.locationDate}
          </p>
          <ul className="exp-info">
            { job.info }
          </ul>
          <button className='btn-add-desc' data-key={index} onClick={this.addJobDesc}>Add description</button>
        </div>
      )
      
    })

    
  }

  addJobDesc = (e) => {
    const index = e.target.getAttribute('data-key');
    console.log(e.target.getAttribute('data-key'))
    this.setState(this.state[index].info.concat(<input type="text" name="jobInfo" id="jobInfo" placeholder='Job Information'/>))
    console.log(this.state[index])
  }

  addJob() {
    this.setState.concat({
      title: <input type="text" name="jobTitle" id="jobTitle" />,
      locationDate: <input type="text" name="locationDate" id="locationDate" />,
      info: [
        <input type="text" name="jobInfo" id="jobInfo" />
      ]
    })
  }

  render() {
    return (
      <div className='experience'>
        <h2 className='component-title'>EXPERIENCE</h2>
        <div className="exp-container">
          {
            this.jobList
          }
          <button onClick={this.addJob}>Add Experience</button>
            {/* <div className="exp">
                <p className="exp-title">
                    <input type="text" name="jobTitle" id="jobTitle" placeholder='Job Title'/>
                </p>
                <p className="exp-location-date">
                  <input type="text" name="jobLocationDate" id="jobLocationDate" placeholder='Location / Date' />
                </p>
                    <ul className='exp-info'>
                    </ul>
                    <button className='btn-add-desc' onClick={this.addJobDesc(0)}>Add description</button>
            </div> */}

            <div className="exp">
                <span className="exp-title">
                    TERSTING TESTING
                </span>
                <span className="exp-location-date">Location Location Location / September 2016 - Present</span>
                <ul className="exp-info">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar tortor lectus, vel egestas leo tincidunt non.</li>
                    <li>Donec in gravida quam, quis varius augue. Etiam ut ligula nunc. Aliquam faucibus sit amet justo ac congue.</li>
                    <li>In vestibulum neque turpis, eu mattis felis blandit at. Nullam scelerisque eros leo, in posuere neque finibus quis. Aenean ut sapien ut mauris maximus elementum. Etiam rhoncus vehicula interdum.</li>
                    <li>Duis finibus eleifend congue. Praesent pellentesque velit ut augue eleifend tristique. Sed iaculis turpis tempus odio porttitor, at pulvinar lacus ultricies. Aliquam at justo elit.</li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Experience