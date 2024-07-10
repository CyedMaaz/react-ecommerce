import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const Users = () => {
  const { data, error, isLoading } = useQuery(['users'], fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
