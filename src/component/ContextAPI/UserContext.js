import React, { createContext, useState } from 'react';

// 1. Create the context
export const UserContext = createContext();

// 2. Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe', age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
