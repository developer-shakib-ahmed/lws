import { useReducer } from 'react';

const initialState = 1;

const reducer = (state, action) => {
  switch (action) {
    case 'plus':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
};

export default function WorkWithUseReducer1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="quantity">
      <h3>Qty: {count}</h3>
      <button onClick={() => dispatch('plus')}>+</button>
      <button onClick={() => dispatch('minus')}> - </button>
    </div>
  );
}
