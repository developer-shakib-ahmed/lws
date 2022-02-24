import React from 'react';
// eslint-disable-next-line import/no-named-as-default-member
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default class HOC extends React.Component {
  render() {
    return (
      <div className="hoc">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}
