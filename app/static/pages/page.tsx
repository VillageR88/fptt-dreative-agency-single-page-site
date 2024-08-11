import type { FunctionComponent } from 'preact';
import Block1 from './components/Block1';
import Block2 from './components/Block2';

const Home: FunctionComponent = () => {
  return (
    <>
      <Block1 />
      <Block2 />
    </>
  );
};

export default Home;
