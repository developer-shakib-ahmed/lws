import React from 'react';

export default class Emoji extends React.Component {
  wrapEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render() {
    const { children } = this.props;
    return children({ wrapEmoji: this.wrapEmoji });
  }
}
