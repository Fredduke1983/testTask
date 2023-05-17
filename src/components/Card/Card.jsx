import { useState } from 'react';
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

const Cards = ({ avatar, tweets, followers, id }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleOnClick = e => {
    setIsFollowing(!isFollowing);
    console.log(id);
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

export { Cards };
