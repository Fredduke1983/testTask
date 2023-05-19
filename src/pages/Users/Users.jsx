import { useEffect, useState } from 'react';

import { Card } from '../../components/Card/OneCard';
import { getUsers } from '../../utils/fetches';
import { LoadMore, UsersStyle } from './Users.styled';

function Users() {
  const [users, setUsers] = useState([]);
  const [isFollows, setIsFollows] = useState(
    localStorage.getItem('user') ? localStorage.getItem('user').split(',') : []
  );
  const [page, setpage] = useState(1);

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
      getUsers(page).then(({ data }) => {
        setUsers(data);
      });
      setpage(2);
    }

    localStorage.setItem('user', [isFollows]);
    const localFlag = localStorage.getItem('user').split(',');
    users.map(user => {
      for (const iterator of localFlag) {
        if (user.id === iterator) {
        }
      }
    });
  }, [isFollows, page, users, users.length]);

  const handleOnMore = () => {
    let p = page;
    getUsers(page).then(({ data }) => {
      if (data.length !== 0) {
        setUsers([...users, ...data]);
        setpage((p += 1));
      } else {
        console.log('NO MORE');
      }
    });
  };

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
      <LoadMore onClick={handleOnMore}>Load More</LoadMore>
    </>
  );
}

export default Users;
