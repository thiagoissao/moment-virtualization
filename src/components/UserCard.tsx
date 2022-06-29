import React from 'react';
import { User } from '../user.types';

interface Props {
  user: User;
  onClickRemove: (uuid: string) => void;
}

const rootStyle: React.CSSProperties = {
  width: 500,
  borderRadius: 16,
  border: `solid 1px #ccc`,
  padding: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const descriptionStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
};

const pictureStyle: React.CSSProperties = {
  borderRadius: 100,
};

const UserCard = ({ user, onClickRemove }: Props) => {
  return (
    <div style={rootStyle}>
      <img
        style={pictureStyle}
        src={user.picture.large}
        alt={user.email}
        width={100}
        height={100}
      />
      <div style={descriptionStyle}>
        <p>
          <b>{`${user.name.first} ${user.name.last}`}</b>
        </p>
        <p>{user.email}</p>
        <p>{user.cell}</p>
      </div>
      <button onClick={() => onClickRemove(user.login.uuid)}>remover</button>
    </div>
  );
};

export default UserCard;
