import { Link } from 'preact-router';
import imageStrategic from '../../assets/desktop/image-strategic.jpg';
import patternRed from '../../assets/desktop/bg-pattern-wave-red.svg';

const items = {
  title: 'Design is strategic.',
  description:
    '“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”',
  linkTitle: 'Schedule a Call',
};

export default function Block2() {
  return (
    <div className="relative flex h-[648px] w-full  justify-end lg:h-[750px] xl:h-[984px]">
      <img
        className="absolute left-0 h-[658px] w-[735px] object-cover object-[100%_0%] xl:h-[984px] xl:object-center"
        height={984}
        width={735}
        src={imageStrategic as string}
        alt="strategic"
      />
      <div className="relative flex h-[538px] w-[390px] items-center bg-[#191921] pl-[69px] pr-[40px] lg:h-[560px] lg:w-[530px] lg:pl-[90px] lg:pr-[60px] xl:h-[784px] xl:w-[705px] xl:pl-[154px] xl:pr-[106px]">
        <div className="flex flex-col gap-[48px] ">
          <img
            className="absolute left-[-31px] top-[220px] h-[28px] w-[62px] xl:left-[-67px] xl:top-[234px] xl:h-[61px] xl:w-[135px]"
            width={135}
            height={61}
            src={patternRed as string}
            alt="pattern"
          />
          <section className="flex max-w-[281px] flex-col gap-[32px] lg:max-w-full xl:gap-[43px]">
            <h2 className="max-w-[250px] text-white lg:max-w-full">
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
