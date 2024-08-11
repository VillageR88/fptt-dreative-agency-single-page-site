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
    <nav className="z-[2] flex h-[64px] w-full items-center justify-between overflow-x-clip pl-[32px] md:h-[178px] md:pl-[40px]">
      <img src={logo as string} alt="logo" />
      <div className="flex h-full w-[705px] items-center gap-[48px] bg-[#F94F4F] pl-[69px]">
        <ul className="flex gap-[32px]">
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
