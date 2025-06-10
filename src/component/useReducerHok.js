// import React, { useState } from 'react';

// function CounterReducer() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// }

// export default CounterReducer;


// with useReducer hhok
import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}


function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type : 'DECREMENT'})}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  );
}

export default CounterReducer;
