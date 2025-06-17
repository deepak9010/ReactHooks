import React from 'react';
import { UserContext } from '../ContextAPI/UserContext';

const UserInfo = () => {

  return (
    <UserContext.Consumer>
        {({ user }) => (  
        <div>
          <h2>User Info:</h2>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default UserInfo;


// // below is using useContextHook

// import React, { useContext } from 'react';
// import { UserContext } from '../ContextAPI/UserContext';

// const UserInfo = () => {
//   const { user } = useContext(UserContext);

//   return (
//     <div>
//       <h2>User Info:</h2>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// };

// export default UserInfo;



