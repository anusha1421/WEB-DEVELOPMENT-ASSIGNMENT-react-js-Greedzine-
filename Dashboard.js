// Dashboard.js
import React from 'react';
import './Dashboard.css';
function Dashboard({ goToDashboard, goToUserListView }) {
  return (
    <div className="dashboard">
      <button onClick={goToDashboard}>Home</button>
      <button onClick={goToUserListView}>User</button>
      <h2>Welcome to Dashboard</h2>
    </div>
  );
}

export default Dashboard;
