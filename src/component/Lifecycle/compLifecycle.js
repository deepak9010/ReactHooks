// import React, { useState, useEffect } from "react";

// function LifecycleExample() {
//   const [count, setCount] = useState(0);

//   // 🔹 Mounting
//   useEffect(() => {
//     console.log("Component mounted");

//     // 🔹 Unmounting
//     return () => {
//       console.log("Component will unmount");
//     };
//   }, []);

//   // 🔹 Updating (when `count` changes)
//   useEffect(() => {
//     if (count > 0) {
//       console.log("Component updated: count changed to", count);
//     }
//   }, [count]);

//   return (
//     <div>
//       <h1>React Lifecycle Example</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default LifecycleExample;


// class comp
import React, { Component } from "react";

class LifecycleClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Component did update");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div>
        <h1>Class Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleClass;
