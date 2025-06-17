import React, { useEffect, useState } from 'react';
import withLoading from './withLoading';
import UserList from './UserList';

// here we wrap our userlist in hoc- withloading 
const UserListWithLoading = withLoading(UserList);

const UserListWithLoadingDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>User List Demo (withLoading HOC)</h2>
      <UserListWithLoading isLoading={loading} users={users} />
    </div>
  );
};

export default UserListWithLoadingDemo;
