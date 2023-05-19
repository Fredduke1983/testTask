import { useParams } from 'react-router';
import { getUserById } from '../../utils/fetches';
import { useEffect, useState } from 'react';
import { TweetterAvatar, TweetterList, TweetterStyle } from './Tweets.styled';

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
      <TweetterStyle>
        <TweetterAvatar src={tweetter.avatar} />
        <p>{tweetter.user}</p>

        <p>
          He has {tweetter.followers} followers, and {tweetter.tweets.length}{' '}
          tweets
        </p>
        <TweetterList>
          Tweets
          {tweetter.tweets.map(el => {
            return <li key={el}> &quot;{el}&quot;</li>;
          })}
        </TweetterList>
      </TweetterStyle>
    )
  );
};
