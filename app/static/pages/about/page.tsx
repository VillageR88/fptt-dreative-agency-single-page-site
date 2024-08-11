import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';
import Block1 from './Block1';
import Block2 from '../components/ValuesSection';
import Block3 from './Block3';

const title = 'Our values';
const About: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
      <Block1 />
      <Block2 title={title} />
      <Block3 />
    </>
  );
};

export default About;
