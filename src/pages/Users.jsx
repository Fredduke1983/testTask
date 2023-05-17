import { useEffect, useState } from 'react';
import { Card } from '../components/Card/Card';
import { getUsers } from '../utils/fetches';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length < 1) {
      getUsers().then(users => {
        return setUsers(users.data);
      });
    }
  }, [users.length]);
  console.log(users);
  return (
    <>
      <ul>
        {users &&
          users.map(user => {
            return (
              <Card
                key={user.id}
                avatar={user.avatar}
                tweets={user.tweets}
                followers={user.followers}
              />
            );
          })}
      </ul>
      {/* <Card /> */}
    </>
  );
}

export default Users;
