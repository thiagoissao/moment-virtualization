import type { NextPage } from 'next';
import Template from '../src/components/Template';
import UserCard from '../src/components/UserCard';
import { cardContainerStyle } from '../styles/cardContainerStyles';

const Svcm: NextPage = () => {
  return (
    <Template title="sem virtualização e com memoização">
      {({ users, onClickRemove }) => {
        return (
          <>
            {users.map(user => (
              <div key={`${user.login.uuid}`} style={cardContainerStyle}>
                <UserCard user={user} onClickRemove={onClickRemove} />
              </div>
            ))}
          </>
        );
      }}
    </Template>
  );
};

export default Svcm;
