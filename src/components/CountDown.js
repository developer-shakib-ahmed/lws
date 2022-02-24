import React from 'react';
import Button from './Button';

class CountDown extends React.Component {
  state = {
    count: 0,
    countEnable: true,
  };

  componentDidMount() {
    this.countTimer = setInterval(() => this.handleCount(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countTimer);
  }

  handleCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  handleClick = () => {
    const { countEnable: isCount } = this.state;
    if (isCount) {
      console.log(`Counter is: ${isCount}`);
      clearInterval(this.countTimer);

      this.setState({
        countEnable: false,
      });
    } else {
      console.log(`Counter is: ${isCount}`);
      this.countTimer = setInterval(() => this.handleCount(), 1000);
      this.setState({
        countEnable: true,
      });
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div className="wrap">
        <h1 className="heading">
          Count: <span className="count">{count}</span>
        </h1>
        {/* <button onClick={() => this.handleClick('Shakib')}>Click Here</button> */}
        <Button change={this.handleClick} btnText="Click Here" btnClass="btn btn-primary" />
      </div>
    );
  }
}

export default CountDown;
