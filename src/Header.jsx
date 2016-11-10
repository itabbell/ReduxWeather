import React, { Component } from 'react';
import Weather from './Weather';
import Temp from './Temp';

class Header extends Component {
  render() {
    return (
        <header>
            <Weather weather={this.props.weather} />
            <Temp temp={this.props.temp} />
        </header>
    );
  }
}

export default Header;
