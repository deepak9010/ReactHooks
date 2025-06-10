// import React, { useState } from 'react';

// function factorial(n) {
//   console.log('Calculating factorial...');
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// }

// function WithoutUseMemo() {
//   const [number, setNumber] = useState(5);
//   const [count, setCount] = useState(0);

//   // factorial will be recalculated on every render
//   const fact = factorial(number);

//   return (
//     <div>
//       <h2>Factorial of {number} is {fact}</h2>
//       <button onClick={() => setNumber(number + 1)}>Increase Number</button>
//       <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
//     </div>
//   );
// }

// export default WithoutUseMemo;



// using useMemo hook

import React, { useMemo, useState } from 'react';

function factorial(n) {
  console.log('Calculating factorial...');
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function WithoutUseMemo() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

 
  const fact = useMemo(()=>{
    return factorial(number)
  },[number])

  // const fact = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>Factorial of {number} is {fact}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
    </div>
  );
}

export default WithoutUseMemo;
