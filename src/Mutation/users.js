import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const addUser = async (newUser) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
  return data;
};

const AddUser = () => {
  const queryClient = useQueryClient();
  const [name, setName] = useState('');

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
