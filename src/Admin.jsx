import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
        <div className='adminPanel'>
            <ul className='adminWeather'>
                <li className="weatherTools" onClick={() => this.props.weather('Cloudy')}>Cloudy</li>
                <li className="weatherTools" onClick={() => this.props.weather('Sunny')}>Sunny</li>
                <li className="weatherTools" onClick={() => this.props.weather('Stormy')}>Stormy</li>
            </ul>
            <ul className='adminTemp'>
                <li className="weatherTools" onClick={this.props.increase}>Increase</li>
                <li className="weatherTools" onClick={this.props.decrease}>Decrease</li>
            </ul>
        </div>
    );
  }
}

export default Admin;
