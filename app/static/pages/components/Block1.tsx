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
    <div className="relative flex h-[606px] w-full max-w-[calc(1275px+39px)] items-start justify-between self-end pl-[39px] xl:h-[800px]">
      <div className="relative z-[1] mt-[77px] flex w-full max-w-[730px] flex-col gap-[48px] xl:mt-[112px]">
        <section className="flex flex-col gap-[39px]">
          <h1 className="w-full max-w-[398px] xl:max-w-[680]">{items.title}</h1>
          <p className="w-full max-w-[398px] xl:max-w-[540px]">{items.description}</p>
        </section>
        <Link
          className="flex h-[72px] w-[177px] items-center justify-center bg-[#F94F4F] text-[18px] font-extrabold text-white transition hover:bg-[#FF9393]"
          href={linkItems.href}
        >
          {linkItems.title}
        </Link>
      </div>
      <picture className="absolute right-0 h-[608px] w-fit xl:h-[800px]">
        <source media="(max-width: 640px)" srcSet={heroImageMobile as string} />
        <source media="(max-width: 1024px)" srcSet={heroImageTablet as string} />
        <img
          className="md:object-fit object-cover md:h-[606px] xl:h-[800px]"
          src={heroImageDesktop as string}
          alt="men working on computers"
        />
      </picture>
    </div>
  );
}
