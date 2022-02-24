import React from 'react';

class Button extends React.Component {
  render() {
    console.log('Button component renderd');
    const { change, btnText, btnClass } = this.props;
    return (
      <div>
        <button className={btnClass} onClick={change}>
          {btnText}
        </button>
      </div>
    );
  }
}

export default Button;
