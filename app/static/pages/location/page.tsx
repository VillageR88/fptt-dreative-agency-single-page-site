import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';
import Block1 from './Block1';
import Block2 from './Block2';

const Location: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
      <div className="my-[72px] flex w-full max-w-[1110px] flex-col items-center gap-[64px] px-[32px] md:my-[120px] xl:gap-[120px]">
        <Block1 />
        <Block2 />
      </div>
    </>
  );
};

export default Location;
