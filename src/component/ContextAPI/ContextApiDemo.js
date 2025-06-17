// Context API = createContext() + Provider + Consumer (old way)
// useContext Hook = createContext() + Provider + useContext()

import React from 'react';
import { UserProvider } from '../ContextAPI/UserContext';
import UserInfo from './UserInfo';
import Dashboard from './Dashboard';

const ContextApiDemo = () => {
  return (
    <UserProvider>
      <div>
        <h1>React Context API Example</h1>
        <UserInfo />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default ContextApiDemo;



