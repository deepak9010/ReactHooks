// ParentComponent.js
import React, { useState, useCallback } from "react";
import Child from "./Child";

function ParentUseCallback() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  // const handleClick = () => {
  //   console.log("Child clicked");
  // };

  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default ParentUseCallback;
