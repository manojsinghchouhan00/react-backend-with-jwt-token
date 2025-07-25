import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center text-blue-600">JWT Auth App</h1>
      <Register />
      <Login />
      <Profile />
    </div>
  );
}

export default App;