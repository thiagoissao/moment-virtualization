import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { repository } from '../src/repository';
import { User } from '../src/user.types';

const Svsm: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const items = await repository.getUsers();
    setUsers(items);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id.value}>{user.name.first}</p>
      ))}
    </div>
  );
};

export default Svsm;
