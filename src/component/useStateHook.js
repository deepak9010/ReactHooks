import React, {useState, useEffect} from "react";

function Counter (){
   const [count, setCount] = useState(0);

   const increment =()=>{
    setCount(count+1);
   }

   useEffect(()=>{
    document.title=`you clicked ${count} time`;
   },[count]);

   return(
    <div>
         <h2>Count: {count}</h2>
         <button onClick={increment}>Increment</button>
    </div>
   )
}


export default Counter;