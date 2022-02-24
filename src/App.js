// eslint-disable-next-line import/no-named-as-default-member
import HOC from './hoc/HigherOrderComponent';

function App() {
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

      <HOC />
    </div>
  );
}

export default App;
