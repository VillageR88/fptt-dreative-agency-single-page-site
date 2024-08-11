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
    <nav className="z-[2] flex h-[64px] w-full max-w-[1275px] items-center justify-between self-end overflow-x-clip md:h-[178px]">
      <img src={logo as string} alt="logo" />
      <div className="flex h-full w-[705px] items-center gap-[48px] bg-[#F94F4F] pl-[69px]">
        <ul className="flex w-full max-w-[225px] justify-between">
          {items.map((item) => (
            <li key={item.title}>
              <Link className="text-[16px] leading-[32px] text-white transition-all hover:font-bold" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="h-[64px] w-[199px] bg-[#191921] text-[16px] font-extrabold text-white transition hover:bg-[#434356]"
        >
          {buttonTitle}
        </button>
      </div>
    </nav>
  );
}
