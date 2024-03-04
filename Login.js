// Login.js
import React, { useState } from 'react';
import './Login.css';
function Login({ onLogin }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login authentication logic here
    // For simplicity, just check if username and password are not empty
    if (username && password) {
      setLoggedIn(true);
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
