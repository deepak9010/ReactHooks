import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import User from './User';

function ParamsHook() {
  return (
    <Router>
      <div>
        <h1>useParams Example</h1>
        <nav>
          <Link to="/user/1">User 1</Link> | 
          <Link to="/user/2">User 2</Link>
        </nav>

        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default ParamsHook;
