import FeaturesSection from '../components/FeaturesSection';
import imageDigitalEra from '../../assets/images/digital-era.jpg';
import imageBetterLiving from '../../assets/images/better-living.jpg';
import patternLeftUpwardArrow from '../../assets/patterns/left-upward-arrow.svg';
import patternRightArrow from '../../assets/patterns/right-arrow.svg';

const boxItems = [
  {
    imageSrc: imageDigitalEra as string,
    patternSrc: patternLeftUpwardArrow as string,
    title: 'Mobility for the digital era',
    description:
      'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
    patternClassExtension: 'md:left-[-130px] md:bottom-[30px] bottom-[20px]',
  },
  {
    imageSrc: imageBetterLiving as string,
    patternSrc: patternRightArrow as string,
    title: 'Better urban living',
    description:
      'We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.',
    patternClassExtension: 'right-[0px] md:right-[260px] mt:top-0 top-[-15px]',
  },
];

export default function Block1() {
  return <FeaturesSection boxItems={boxItems} ulClassExtension="mb-[120px] xl:my-[129px] mt-[72px] md:mt-[145px]" />;
}
