import type { NextPage } from 'next';
import UserCard from '../src/components/UserCard';
import Template from '../src/components/Template';
import { cardContainerStyle } from '../styles/cardContainerStyles';

const Svsm: NextPage = () => {
  return (
    <Template title="sem virtualização e sem memoização">
      {({ users, onClickRemove }) => {
        return (
          <>
            {users.map(user => (
              <div key={`${user.login.uuid}`} style={cardContainerStyle}>
                <UserCard
                  user={user}
                  onClickRemove={() => onClickRemove(user.login.uuid)}
                />
              </div>
            ))}
          </>
        );
      }}
    </Template>
  );
};

export default Svsm;
