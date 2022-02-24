import React from 'react';
import BoilingResult from './BoilingResult';
import { toCelcius, toFahrenheit } from './lib/Converter';
import TemperatureInput from './TemperatureInput';

export default class BoilingVerdict extends React.Component {
  state = {
    temp: '0',
    scale: 'c',
  };

  handleChange = (e) => {
    this.setState({
      temp: e.target.value,
      scale: e.target.name,
    });
  };

  render() {
    const { temp, scale } = this.state;
    const celcius = scale === 'f' ? toCelcius(temp) : temp;
    const fahrenheit = scale === 'c' ? toFahrenheit(temp) : temp;
    return (
      <div>
        <TemperatureInput name="c" value={celcius} handle={this.handleChange} />
        <br />
        <TemperatureInput name="f" value={fahrenheit} handle={this.handleChange} />
        <BoilingResult temp={celcius} />
      </div>
    );
  }
}
