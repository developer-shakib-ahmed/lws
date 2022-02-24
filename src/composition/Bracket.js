import React from 'react';

export default class Bracket extends React.Component {
  wrapBracket = (text) => `[ ${text} ]`;

  render() {
    const { children } = this.props;
    return children({ wrapBracket: this.wrapBracket });
  }
}
