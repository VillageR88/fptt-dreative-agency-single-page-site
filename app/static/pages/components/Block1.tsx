import { Link } from 'preact-router';
import heroImage from '../../assets/desktop/image-hero.jpg';

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
    <div className="relative flex h-[800px] w-full max-w-[calc(1275px+39px)] items-start justify-between self-end pl-[39px]">
      <div className="relative  z-[1] mt-[112px] flex w-full max-w-[730px] flex-col gap-[48px]">
        <section className="flex flex-col gap-[39px]">
          <h1 className="w-full max-w-[398px] xl:max-w-[720px]">{items.title}</h1>
          <p className="w-full max-w-[398px] xl:max-w-[540px]">{items.description}</p>
        </section>
        <Link
          className="flex h-[72px] w-[177px] items-center justify-center bg-[#F94F4F] text-[18px] font-extrabold text-white transition hover:bg-[#FF9393]"
          href={linkItems.href}
        >
          {linkItems.title}
        </Link>
      </div>
      <img className="absolute right-0" height="800" src={heroImage as string} alt="men working on computers" />
    </div>
  );
}
