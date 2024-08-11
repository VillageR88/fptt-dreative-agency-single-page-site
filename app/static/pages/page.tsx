import type { FunctionComponent } from 'preact';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';
import Block4 from './components/Block4';

const Home: FunctionComponent = () => {
  return (
    <>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </>
  );
};

export default Home;
