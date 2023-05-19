import styled from 'styled-components';

const TweetterStyle = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const TweetterAvatar = styled.img`
  display: block;
  border-radius: 15px;
`;

const TweetterList = styled.ol`
  list-style: circle;
`;

export { TweetterStyle, TweetterAvatar, TweetterList };
