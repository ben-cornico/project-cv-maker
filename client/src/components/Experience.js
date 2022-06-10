import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <h2 className='component-title'>EXPERIENCE</h2>
        <div className="exp-container">
            <div className="exp">
                <p className="exp-title">
                    ADMINISTRATIVE ASSISTANT
                </p>
                <p className="exp-location-date">Location Location Location / September 2016 - Present</p>
                    <ul className='exp-info'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar tortor lectus, vel egestas leo tincidunt non.</li>
                        <li>Donec in gravida quam, quis varius augue. Etiam ut ligula nunc. Aliquam faucibus sit amet justo ac congue.</li>
                        <li>In vestibulum neque turpis, eu mattis felis blandit at. Nullam scelerisque eros leo, in posuere neque finibus quis. Aenean ut sapien ut mauris maximus elementum. Etiam rhoncus vehicula interdum.</li>
                        <li>Duis finibus eleifend congue. Praesent pellentesque velit ut augue eleifend tristique. Sed iaculis turpis tempus odio porttitor, at pulvinar lacus ultricies. Aliquam at justo elit.</li>
                    </ul>
            </div>

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