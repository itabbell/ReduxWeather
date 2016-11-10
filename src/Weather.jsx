import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
        <div className='weatherDisplay'>
            The weather today is <p className='boldFont'>{this.props.weather}</p>
        </div>
    );
  }
}

export default Weather;
