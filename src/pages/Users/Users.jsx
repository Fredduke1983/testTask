import { useEffect, useState } from 'react';
import { Cards } from '../../components/Card/Card';
import { getUsers } from '../../utils/fetches';
import { UsersStyle } from './Users.styled';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length < 1) {
      getUsers().then(users => {
        return setUsers(users.data);
      });
    }
  }, [users.length]);

  return (
    <>
      <UsersStyle>
        {users &&
          users.map(user => {
            return (
              <Cards
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                tweets={user.tweets}
                followers={user.followers}
              />
            );
          })}
      </UsersStyle>
    </>
  );
}

export default Users;
