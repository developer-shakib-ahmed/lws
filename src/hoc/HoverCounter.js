// eslint-disable-next-line import/no-named-as-default-member
import withCounter from './withCounter';

function HoverCounter(props) {
  const { count, handle } = props;
  return (
    <div className="hover-counter">
      <h1 onMouseOver={handle}>Mouse Over {count} Times</h1>
    </div>
  );
}

export default withCounter(HoverCounter);
