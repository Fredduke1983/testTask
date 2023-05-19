import { useParams } from 'react-router';
import { getUserById } from '../utils/fetches';
import { useEffect, useState } from 'react';

export const Tweets = () => {
  const { id } = useParams();
  const [tweetter, setTweetter] = useState(null);

  useEffect(() => {
    if (!id) return;

    getUserById(id).then(({ data }) => {
      setTweetter(data);
    });
  }, [id]);

  console.log(tweetter);

  return (
    tweetter && (
      <div>
        <img src={tweetter.avatar} />
        <ul>
          {tweetter.tweets.map(el => {
            return <li key={el}> {el}</li>;
          })}
        </ul>
      </div>
    )
  );
};
