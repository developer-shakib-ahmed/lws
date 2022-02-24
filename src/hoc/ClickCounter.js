// eslint-disable-next-line import/no-named-as-default-member
import withCounter from './withCounter';

function ClickCounter(props) {
  const { count, handle } = props;
  return (
    <div className="click-counter">
      <button onClick={handle}>Clicked {count} Times</button>
    </div>
  );
}

export default withCounter(ClickCounter);
