import { Link } from 'preact-router';
import heroImageDesktop from '../../assets/desktop/image-hero.jpg';
import heroImageTablet from '../../assets/tablet/image-hero.jpg';
import heroImageMobile from '../../assets/mobile/image-hero.jpg';

const items = {
  title: 'Branding & website design agency',
  description:
    'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.',
  button: 'Learn More',
};

const linkItems = {
  title: 'Learn More',
  href: '#',
};

export default function Block1() {
  return (
    <div className="relative mb-[96px] flex w-full max-w-[calc(1275px+39px)] flex-col-reverse items-center justify-between md:mb-0 md:h-[606px] md:flex-row md:items-start md:self-end md:pl-[39px] xl:h-[800px]">
      <div className="relative z-[1] mt-[56px] flex w-fit max-w-[730px] flex-col items-center gap-[40px] px-[24px] md:mt-[77px] md:w-full md:items-start md:gap-[48px] md:px-0 xl:mt-[112px]">
        <section className="flex flex-col gap-[20px] md:gap-[39px]">
          <h1 className="w-full md:max-w-[398px] xl:max-w-[680px]">{items.title}</h1>
          <p className="w-full md:max-w-[398px] xl:max-w-[540px]">{items.description}</p>
        </section>
        <Link
          className="flex h-[72px] w-[177px] items-center justify-center self-start bg-[#F94F4F] text-[18px] font-extrabold text-white transition hover:bg-[#FF9393]"
          href={linkItems.href}
        >
          {linkItems.title}
        </Link>
      </div>
      <picture className="right-0 w-full md:absolute md:h-[608px] md:w-fit xl:h-[800px]">
        <source media="(max-width: 768px)" srcSet={heroImageMobile as string} />
        <source media="(max-width: 1024px)" srcSet={heroImageTablet as string} />
        <img
          className="md:object-fit size-full object-cover md:h-[606px] xl:h-[800px]"
          src={heroImageDesktop as string}
          alt="men working on computers"
        />
      </picture>
    </div>
  );
}
