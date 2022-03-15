import { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return {
        loading: false,
        error: '',
        post: action.data,
      };
    case 'fail':
      return {
        loading: false,
        error: 'There was a problem!!',
        post: {},
      };
    default:
      return state;
  }
};

export default function WorkWithUseReducer2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'success',
          data,
        });
      })
      .catch(() => {
        dispatch({
          type: 'fail',
        });
      });
  }, []);

  return (
    <>
      <h1>Get Post From JSON Placeholder</h1>

      {state.loading && <h3>Loading...</h3>}

      {!state.loading && state.error && (
        <div className="error">
          <h3>{state.error}</h3>
        </div>
      )}

      {!state.loading && !state.error && (
        <div className="post">
          <h3>{state.post.title}</h3>
        </div>
      )}
    </>
  );
}
