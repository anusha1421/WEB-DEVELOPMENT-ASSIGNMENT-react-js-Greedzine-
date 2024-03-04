// UserListView.js
import React, { useState } from 'react';
import './UserListView.css';

function UserListView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Sample employee data
  const employees = [
    { id: 1, name: 'anusha' },
    { id: 2, name: 'sujay' },
    { id: 3, name: 'anu' },
    { id: 4, name: 'bujji' },
    { id: 5, name: 'manu' },
  ];

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="user-list-view">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserListView;
