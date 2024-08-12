import logo from '../../assets/desktop/logo.svg';
import { Link } from 'preact-router';

const items = [
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Service',
    href: '#',
  },
  {
    title: 'Projects',
    href: '#',
  },
];

const buttonTitle = 'Schedule a Call';

export default function Navbar() {
  return (
    <nav className="z-[2] flex h-[64px] w-full max-w-[calc(1275px+39px)] items-center justify-between self-end overflow-x-clip pl-[39px] md:h-[178px]">
      <img src={logo as string} alt="logo" />
      <div className="flex size-full max-w-[438px] items-center gap-[28px] bg-[#F94F4F] pl-[33px] pr-[40px] xl:max-w-[47vw] xl:gap-[48px] xl:pl-[69px] xl:pr-0 screen1500:max-w-[705px]">
        <ul className="flex w-full max-w-[190px] justify-between xl:max-w-[225px]">
          {items.map((item) => (
            <li key={item.title}>
              <Link className=" leading-[32px] text-white transition-all hover:font-bold" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="h-[64px] min-w-[147px] bg-[#191921] text-[16px] font-extrabold text-white transition hover:bg-[#434356] xl:min-w-[199px]"
        >
          {buttonTitle}
        </button>
      </div>
    </nav>
  );
}
