import FeaturesSection from '../components/FeaturesSection';
import { Link } from 'preact-router';
import imageJoinUs from '../../assets/images/join-us.jpg';
import patternLeftDownwardArrow from '../../assets/patterns/left-downward-arrow.svg';

const boxItems = [
  {
    imageSrc: imageJoinUs as string,
    patternSrc: patternLeftDownwardArrow as string,
    title: 'Care to join our mission?',
    description:
      'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!',
    patternClassExtension: 'md:left-[-130px] left-[-5px] bottom-[-5px]',
    linkProp: (
      <Link className="buttonType1" href="#">
        Say Hello
      </Link>
    ),
  },
];

export default function Block1() {
  return <FeaturesSection boxItems={boxItems} ulClassExtension="mb-[120px] xl:my-[129px] mt-[72px] md:mt-[145px]" />;
}
