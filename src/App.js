// eslint-disable-next-line import/no-named-as-default-member
// import HOC from './hoc/ClickCounter';
// import WorkWithUseEffect from './hooks/WorkWithUseEffect';
// import { useState } from 'react';
// import WorkWithUseReducer1 from './hooks/WorkWithUseReducer-1';
import WorkWithUseReducer2 from './hooks/WorkWithUseReducer-2';

function App() {
  // const [show, setShow] = useState(true);
  return (
    <div>
      {/* <Clock /> */}
      {/* <CountDown /> */}
      {/* <Form /> */}
      {/* <BoilingVerdict /> */}
      {/* <Emoji>
        {({ wrapEmoji }) => (
          <Bracket>{({ wrapBracket }) => <Text emoji={wrapEmoji} bracket={wrapBracket} />}</Bracket>
        )}
      </Emoji> */}

      {/* <HOC /> */}

      {/* {show && <WorkWithUseEffect />}
      <p>
        <label>
          <input type="checkbox" onChange={() => setShow((prevState) => !prevState)} />
          {show ? 'Hide' : 'Show'} Clock?
        </label>
      </p> */}
      <WorkWithUseReducer2 />
    </div>
  );
}

export default App;
