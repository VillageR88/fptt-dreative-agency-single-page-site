import { useRef } from 'preact/hooks';
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  function handleOpen() {
    if (menuButtonRef.current) {
      menuButtonRef.current.classList.toggle('open');
    }
  }
  return (
    <nav className="relative z-[2] flex h-[110px] w-full max-w-[calc(1275px+39px)] items-center justify-between self-end overflow-x-clip pl-[24px] md:h-[178px] md:pl-[39px]">
      <div id="mask" className="fixed left-0 top-0 z-[1] flex size-full" />
      <div
        id="mobileMenu"
        className="absolute right-[26px] top-[110px] z-40 flex h-[292px] w-full max-w-[252px] flex-col items-center gap-[24px] bg-black pt-[32px]"
      >
        <ul className=" relative z-40 flex flex-col items-center gap-[24px]">
          {items.map((item) => (
            <li className="relative z-40" key={item.title}>
              <Link className=" relative z-40 text-[18px] leading-[32px] text-white transition-all" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="relative z-40 h-[64px] w-[199px] bg-[#F94F4F] text-[16px] font-extrabold text-white"
        >
          {buttonTitle}
        </button>
      </div>
      <img className="relative -z-0 flex" src={logo as string} alt="logo" />
      <div className="hidden size-full max-w-[438px] items-center gap-[28px] bg-[#F94F4F] pl-[33px] pr-[40px] md:flex lg:max-w-[530px] lg:gap-[50px] lg:pr-[20px] xl:max-w-[47vw] xl:gap-[48px] xl:pl-[69px] xl:pr-0 screen1500:max-w-[705px]">
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
      <button
        ref={menuButtonRef}
        onClick={() => {
          handleOpen();
        }}
        id="mobileNav"
        title="mobile navigation"
        type="button"
        className="absolute right-[24px] z-[2] md:opacity-0"
      />
    </nav>
  );
}
