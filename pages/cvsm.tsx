import type { NextPage } from 'next';
import { Virtuoso } from 'react-virtuoso';
import Template from '../src/components/Template';
import UserCard from '../src/components/UserCard';
import { cardContainerStyle } from '../styles/cardContainerStyles';

const Cvsm: NextPage = () => {
  return (
    <Template title="com virtualização e sem memoização">
      {({ users, onClickRemove }) => {
        return (
          <Virtuoso
            style={{
              height: '100%',
              width: 500,
            }}
            useWindowScroll
            totalCount={users.length}
            data={users}
            itemContent={(index, user) => {
              return (
                <div key={`${user.login.uuid}`} style={cardContainerStyle}>
                  <UserCard
                    user={user}
                    onClickRemove={() => onClickRemove(user.login.uuid)}
                  />
                </div>
              );
            }}
          />
        );
      }}
    </Template>
  );
};

export default Cvsm;
