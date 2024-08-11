import background from '../../assets/images/home-hero-desktop.jpg';
import ButtonGetScootin from '../components/ButtonGetScootin';
import patternLine from '../../assets/patterns/line.svg';
import patternRightArrow from '../../assets/patterns/right-arrow.svg';
import patternWhiteCircles from '../../assets/patterns/white-circles.svg';

const boxItems = {
  title: 'Scooter sharing made simple',
  description:
    'Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!',
};

export default function Block1() {
  return (
    <div className="relative flex min-h-[650px] w-full max-w-[1440px] flex-col items-center justify-start gap-[40px] pt-[115px] md:min-h-[700px] md:pt-[137px] xl:min-h-[650px] xl:flex-row xl:justify-between xl:pt-0">
      <picture className="absolute right-0 top-0 size-full">
        {/* <source media="(max-width: 480px)" srcSet="./static/assets/images/home-hero-mobile.jpg" /> */}
        {/* <source media="(max-width: 540px)" srcSet="./static/assets/images/home-hero-tablet.jpg" /> */}
        <img className="size-full object-cover object-[100%_100%] " src={background as string} alt="" />
      </picture>
      <div className="relative flex w-full max-w-[665px] flex-col items-center gap-[40px]  text-center md:px-0 xl:flex-[80%] xl:text-left">
        <h1 className="max-w-[500px] xl:self-end">{boxItems.title}</h1>
        <div className="flex w-fit items-center gap-[57px] xl:mr-[40px]">
          <img className="hidden h-fit w-full max-w-[203px] xl:block" src={patternLine as string} alt="" />
          <p className="max-w-[405px] text-white">{boxItems.description}</p>
        </div>
        <ButtonGetScootin />
      </div>
      <div className="relative mb-[32px] flex w-full items-end justify-center gap-[245px] xl:mb-[calc(157px+8px)] xl:mr-[-48px] xl:max-w-[783px] xl:flex-[80%] xl:gap-[100px] xl:self-end xl:pl-[10px]">
        <img className="h-[137px] w-[446px]" src={patternRightArrow as string} alt="" />
        <img className="h-[63px] w-[234px]" src={patternWhiteCircles as string} alt="" />
      </div>
    </div>
  );
}
