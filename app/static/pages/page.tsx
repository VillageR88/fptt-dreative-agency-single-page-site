import type { FunctionComponent } from 'preact';
import Block1 from './home/Block1';
import Block2 from './home/Block2';
import Block3 from './home/Block3';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: FunctionComponent = ({ path }) => {
  return (
    <>
      <Block1 />
      <Block2 />
      <Block3 />
    </>
  );
};

export default Home;
