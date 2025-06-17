import React from 'react';
import { UserContext } from '../ContextAPI/UserContext';

const Dashboard = () => {

  return (
    <UserContext.Consumer>
       {({ setUser }) => {
        const updateName = () => { 
          setUser((prev) => ({ ...prev, name: 'Jane Smith' }));
        };

        return (
          <div>
            <h2>Dashboard</h2>
            <button onClick={updateName}>Change Name</button>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Dashboard;



//  // below is using useContextHook
// import React, { useContext } from 'react';
// import { UserContext } from '../ContextAPI/UserContext';

// const Dashboard = () => {
//   const { setUser } = useContext(UserContext);

//   const updateName = () => {
//     setUser((prev) => ({ ...prev, name: 'Jane Smith' }));
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <button onClick={updateName}>Change Name</button>
//     </div>
//   );
// };

// export default Dashboard;
