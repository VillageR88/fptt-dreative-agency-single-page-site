import FeaturesSection from '../components/FeaturesSection';
import imageTelemetry from '../../assets/images/telemetry.jpg';
import imageNearYou from '../../assets/images/near-you.jpg';
import imagePayments from '../../assets/images/payments.jpg';
import patternLeftDownwardArrow from '../../assets/patterns/left-downward-arrow.svg';
import patternRightArrow from '../../assets/patterns/right-arrow.svg';
import { routes } from '../_lib/const';
import { Link } from 'preact-router';

const boxItems = [
  {
    imageSrc: imageTelemetry as string,
    patternSrc: patternLeftDownwardArrow as string,
    title: 'Easy to use riding telemetry',
    description:
      "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    patternClassExtension: 'md:left-[-140px] md:bottom-0 bottom-[-5px]',
    linkProp: (
      <Link
        aria-labelledby="title1"
        aria-label="Learn more about us"
        className="buttonType1 buttonLearnMore"
        href={routes.about}
      />
    ),
  },
  {
    imageSrc: imageNearYou as string,
    patternSrc: patternRightArrow as string,
    title: 'Coming to a city near you',
    description:
      'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
    patternClassExtension: 'right-[100px] md:right-[260px] mt:top-0 top-[50px]',
    linkProp: (
      <Link
        aria-labelledby="title2"
        aria-label="Learn more about our locations"
        className="buttonType1 buttonLearnMore"
        href={routes.location}
      />
    ),
  },
  {
    imageSrc: imagePayments as string,
    patternSrc: patternLeftDownwardArrow as string,
    title: 'Zero hassle payments',
    description:
      'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
    patternClassExtension: 'md:left-[255px] left-[100px] md:top-[85px] top-[-10px]',
    linkProp: (
      <Link
        aria-labelledby="title3"
        aria-label="Learn more about us"
        className="buttonType1 buttonLearnMore"
        href={routes.about}
      />
    ),
  },
];

export default function Block3() {
  return <FeaturesSection boxItems={boxItems} ulClassExtension="mb-[120px] xl:my-[200px] mt-[145px]" />;
}
