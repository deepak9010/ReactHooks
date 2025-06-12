// import React from 'react';

// function FruitList() {
//   const fruits = ['Apple', 'Banana', 'Cherry'];

//   return (
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// export default FruitList;



// another example

import React from 'react';

function FruitList() {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Mango' }
  ];

  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}

export default FruitList;
