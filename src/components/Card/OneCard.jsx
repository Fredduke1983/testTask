import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BgPicture,
  FrameCircle,
  BtnFollow,
  BtnFollowing,
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
          <Counter>{tweets} tweets</Counter>
          <Counter>{followers} Followers</Counter>
        </CounterList>

        {isFollowing ? (
          <BtnFollow onClick={handleOnClick}>Follow</BtnFollow>
        ) : (
          <BtnFollowing onClick={handleOnClick}>Following</BtnFollowing>
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
