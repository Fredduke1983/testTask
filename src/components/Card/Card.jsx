import {
  BgPicture,
  FrameCircle,
  Button,
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

// eslint-disable-next-line react/prop-types
export const Card = ({ avatar, tweets, followers }) => {
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

        <Button>Follow</Button>
      </CardFooter>
    </CardBody>
  );
};
