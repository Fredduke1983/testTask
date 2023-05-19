import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/OneCard';
import { getUsers } from '../../utils/fetches';
import { UsersStyle } from './Users.styled';

function Users() {
  const [users, setUsers] = useState([]);
  const [localUsers, setLocalUsers] = useState([]);
  const [isFollows, setIsFollows] = useState(
    localStorage.getItem('user') ? localStorage.getItem('user').split(',') : []
  );

  const changeFollowers = data => {
    if (isFollows.includes(data.id)) {
      setIsFollows(
        isFollows.filter(el => {
          return el !== data.id;
        })
      );
    } else {
      setIsFollows([...isFollows, data.id]);
    }

    setUsers([
      ...users.map(user => {
        const currentId = Object.values(user.id);
        if (currentId[0] === data.id) {
          return data;
        }
        return user;
      }),
    ]);
  };

  useEffect(() => {
    if (users.length < 1) {
      getUsers().then(({ data }) => {
        setUsers(data);
      });
    }

    localStorage.setItem('user', [isFollows]);
    const localFlag = localStorage.getItem('user').split(',');
    users.map(user => {
      for (const iterator of localFlag) {
        if (user.id === iterator) {
        }
      }
    });
  }, [isFollows, users, users.length]);

  return (
    <>
      <UsersStyle>
        {users &&
          users.map(user => {
            return (
              <Card
                key={user.id}
                user={user.user}
                id={user.id}
                avatar={user.avatar}
                tweets={user.tweets}
                followers={Number(user.followers)}
                changeFollowers={changeFollowers}
                isFollows={isFollows}
              />
            );
          })}
      </UsersStyle>
    </>
  );
}

export default Users;
