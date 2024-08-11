import imageWorldMapDesktop from '../../assets/images/world-map-desktop.png';
import imageWorldMapMobile from '../../assets/images/world-map-mobile.png';
import patternTriangle from '../../assets/patterns/triangle.svg';
import { Link } from 'preact-router';

const items = {
  'New York': {
    title: 'New York',
    link: 'https://www.google.com/maps/place/New+York,+NY,+USA',
    mapPosition: 'xl:top-[74px] xl:left-[144px] top-[52px] left-[95px]',
  },
  London: {
    title: 'London',
    link: 'https://www.google.com/maps/place/London,+UK',
    mapPosition: 'xl:top-[18px] xl:left-[392px] top-[23px] left-[244px]',
  },
  Jakarta: {
    title: 'Jakarta',
    link: 'https://www.google.com/maps/place/Jakarta,+Indonesia',
    mapPosition: 'xl:top-[250px] xl:left-[777px] top-[169px] left-[480px]',
  },
  Yokohama: {
    title: 'Yokohama',
    link: 'https://www.google.com/maps/place/Yokohama,+Kanagawa,+Japan',
    mapPosition: 'xl:top-[80px] xl:left-[856px] top-[64px] left-[530px]',
  },
};

const PinBox = ({ title, link, mapPosition }: { title: string; link: string; mapPosition: string }) => {
  return (
    <Link
      className={`${mapPosition} absolute hidden h-[40px] w-[120px] flex-col items-center md:flex xl:h-[88px] xl:w-[189px]`}
      href={link}
    >
      <div className="relative z-[1] flex h-[32px] w-full items-center justify-center bg-[#FCB72B] font-mono text-[13px] font-bold leading-[28px] tracking-[-0.58px] text-[#495567] xl:h-[72px] xl:text-[24px] xl:tracking-[-1.07px]">
        {title}
      </div>
      <img className="relative z-[1] h-[8px] w-[16px] xl:h-[16px] xl:w-[32px]" src={patternTriangle as string} alt="" />
    </Link>
  );
};

export default function Block1() {
  return (
    <div className="relative flex size-full h-fit flex-col items-center gap-[40px] md:block md:h-[337px] md:max-h-full md:w-[689px] md:max-w-full xl:h-[543px] xl:w-full">
      <PinBox
        title={items['New York'].title}
        link={items['New York'].link}
        mapPosition={items['New York'].mapPosition}
      />
      <PinBox title={items.London.title} link={items.London.link} mapPosition={items.London.mapPosition} />
      <PinBox title={items.Jakarta.title} link={items.Jakarta.link} mapPosition={items.Jakarta.mapPosition} />
      <PinBox title={items.Yokohama.title} link={items.Yokohama.link} mapPosition={items.Yokohama.mapPosition} />
      <picture className="top-0 md:absolute">
        <source media="(max-width: 768px)" srcSet={imageWorldMapMobile as string} />
        <img src={imageWorldMapDesktop as string} alt="world map" />
      </picture>
      <ul className="flex w-full flex-col gap-[16px] md:hidden">
        {Object.keys(items).map((key) => (
          <li className="flex size-full items-center justify-center  bg-[#FCB72B]/15" key={key}>
            <Link
              className="flex size-full h-[72px] items-center justify-center text-center"
              href={items[key as keyof typeof items].link}
            >
              <span className="text-[24px] font-bold leading-[28px] tracking-[-1.07px] text-[#495567]">
                {items[key as keyof typeof items].title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
