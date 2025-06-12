import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`You typed: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h3>Uncontrolled Input</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;
