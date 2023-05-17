import {
  BgPicture,
  Boy,
  Button,
  CardBody,
  CardFooter,
  Counter,
  CounterList,
  ImgLogo,
  Line,
} from './card.styled';
import logo from './img/logoGoit.png';
import bg from './img/bgpicture.png';
import line from './img/centerLine.png';
import boy from './img/boy.png';

export const Card = () => {
  return (
    <CardBody>
      <ImgLogo src={logo} />
      <BgPicture src={bg} />
      <Line src={line} />
      <Boy src={boy} />
      <CardFooter>
        <CounterList>
          <Counter>777 tweets</Counter>
          <Counter>100,500 Followers</Counter>
        </CounterList>

        <Button>Follow</Button>
      </CardFooter>
    </CardBody>
  );
};
