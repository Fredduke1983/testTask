import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BgPicture,
  FrameCircle,
  Btn,
  CardBody,
  CardFooter,
  Counter,
  CounterList,
  ImgLogo,
  LineStyle,
  Avatar,
} from './card.styled';
import logo from './img/logoGoit.png';
import bg from './img/bgpicture.png';
import line from './img/centerLine.png';
import frame from './img/frame.png';
import { setUserFollowers } from '../../utils/fetches';
const Card = ({
  avatar,
  tweets,
  followers,
  id,
  changeFollowers,
  user,
  isFollows,
}) => {
  const [isFollowing, setIsFollowing] = useState(isFollows.includes(id));

  const handleOnClick = () => {
    let followersToString = 0;
    isFollowing
      ? (followersToString = followers - 1)
      : (followersToString = followers + 1);

    setIsFollowing(!isFollowing);
    const body = JSON.stringify({
      followers: followersToString.toString(),
    });

    changeFollowers({
      user,
      tweets,
      followers: followersToString.toString(),
      avatar,
      id,
    });
    setUserFollowers(id, body);
  };

  return (
    <CardBody>
      <ImgLogo src={logo} />
      <BgPicture src={bg} />
      <LineStyle src={line} />
      <Avatar src={avatar} />
      <FrameCircle src={frame} />
      <CardFooter>
        <CounterList>
          <Counter>{tweets.toLocaleString('en')} tweets</Counter>
          <Counter>{followers.toLocaleString('en')} Followers</Counter>
        </CounterList>

        {isFollowing ? (
          <Btn onClick={handleOnClick}>Following</Btn>
        ) : (
          <Btn onClick={handleOnClick}>Follow</Btn>
        )}
      </CardFooter>
    </CardBody>
  );
};

export { Card };

Card.propTypes = {
  avatar: PropTypes.string,
  tweets: PropTypes.string,
  followers: PropTypes.number,
  id: PropTypes.string,
  isFollows: PropTypes.array,
  changeFollowers: PropTypes.func,
  user: PropTypes.string,
};
