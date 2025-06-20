// import React from "react";
// import useWindowWidth from "./customhook";

// function CustomComponent() {
//   const width = useWindowWidth();

//   return (
//     <div>
//       <h1>Window width is: {width}px</h1>
//     </div>
//   );
// }

// export default CustomComponent;


// below is the example of fetching api
import React from "react";
import useFetch from "./customhook";

function CustomComponent() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomComponent;
