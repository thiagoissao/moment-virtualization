import { useCallback, useEffect, useState } from 'react';
import { repository } from '../repository';
import { User } from '../user.types';

const rootStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

type TemplateProps = {
  title: string;
  children: (props: {
    users: User[];
    onClickRemove: (userId: string) => void;
  }) => React.ReactNode;
};

const Template = ({ title, children }: TemplateProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    const items = await repository.getUsers();
    setUsers(items);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onClickRemove = useCallback((userId: string) => {
    setUsers(currentUsers =>
      currentUsers.filter(user => user.login.uuid !== userId)
    );
  }, []);

  return (
    <div style={rootStyle}>
      <h1>{title}</h1>
      {children({ users, onClickRemove })}
    </div>
  );
};

export default Template;
