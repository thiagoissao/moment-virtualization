import type { NextPage } from 'next';
import Template from '../src/components/Template';
import { Virtuoso } from 'react-virtuoso';
import { cardContainerStyle } from '../styles/cardContainerStyles';
import UserCard from '../src/components/UserCard';

const Cvcm: NextPage = () => {
  return (
    <Template title="com virtualização e com memoização">
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
            itemContent={(_, user) => {
              return (
                <div key={`${user.login.uuid}`} style={cardContainerStyle}>
                  <UserCard user={user} onClickRemove={onClickRemove} />
                </div>
              );
            }}
          />
        );
      }}
    </Template>
  );
};

export default Cvcm;
