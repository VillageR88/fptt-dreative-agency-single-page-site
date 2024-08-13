import { Link } from 'preact-router';
import imageStrategicDesktop from '../../assets/desktop/image-strategic.jpg';
import imageStrategicTablet from '../../assets/tablet/image-strategic.jpg';
import imageStrategicMobile from '../../assets/mobile/image-strategic.jpg';
import patternRed from '../../assets/desktop/bg-pattern-wave-red.svg';

const items = {
  title: 'Design is strategic.',
  description:
    '“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”',
  linkTitle: 'Schedule a Call',
};

export default function Block2() {
  return (
    <div className="relative flex w-full flex-col md:h-[648px] md:flex-row  md:justify-end lg:h-[750px] xl:h-[984px]">
      <picture>
        <source media="(max-width: 768px)" srcSet={imageStrategicMobile as string} />
        <img
          className="left-0 object-cover md:absolute md:h-[658px] md:w-[735px] md:object-[100%_0%] xl:h-[984px] xl:object-center"
          height={984}
          width={735}
          src={imageStrategicDesktop as string}
          alt="strategic"
        />
      </picture>
      <div className="relative flex items-center bg-[#191921] py-[72px] md:h-[538px] md:w-[390px] md:py-0 md:pl-[69px] md:pr-[40px] lg:h-[560px] lg:w-[530px] lg:pl-[90px] lg:pr-[60px] xl:h-[784px] xl:w-[705px] xl:pl-[154px] xl:pr-[106px]">
        <div className="flex flex-col gap-[48px] px-[24px] md:px-0">
          <img
            className="absolute top-[-15px] h-[28px] w-[62px] md:left-[-31px] md:top-[220px] xl:left-[-67px] xl:top-[234px] xl:h-[61px] xl:w-[135px]"
            width={135}
            height={61}
            src={patternRed as string}
            alt="pattern"
          />
          <section className="flex flex-col gap-[32px] md:max-w-[281px] lg:max-w-full xl:gap-[43px]">
            <h2 className="text-white md:max-w-[250px] lg:max-w-full">
              <span className="text-[#F94F4F]">{items.title.split(' ')[0]}</span>
              {` ${items.title.split(' ').slice(1).join(' ')}`}
            </h2>
            <p className="text-white">{items.description}</p>
          </section>
          <Link
            className="font-extrabold text-[#F94F4F] underline underline-offset-[12px] transition hover:text-[#FF9393]"
            href="#"
          >
            {items.linkTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}
