import React, { useState } from 'react';

function ControlledInput() {
  const [name, setName] = useState('');

  return (
    <div>
       <h3>Controlled Input</h3>
       <input
         type='text'
         value={name}
         onChange={(e)=> setName(e.target.value)}
         />
         <p>You types: {name} </p>
    </div>
  );
}

export default ControlledInput;
