import React, { Component } from 'react';

class Temp extends Component {
  render() {
    return (
        <div className='tempDisplay'>
            The temperature today is <p className='boldFont'>{this.props.temp}</p>
        </div>
    );
  }
}

export default Temp;
