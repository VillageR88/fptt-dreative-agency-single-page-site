import { Link } from 'preact-router';
import { scrollToTop } from '../_lib/functionsClient';
import { navLinks } from '../_lib/const';
import Logo from './Logo';

export default function NavbarBlock1() {
  return (
    <div className="flex flex-col items-center gap-[41px] text-center md:flex-row md:gap-[58px]">
      <Logo />
      <ul className="navLinks mg:gap-[32px] flex flex-col gap-[16px] font-bold leading-[25px] text-[#939CAA] *:transition hover:*:text-[#FCB72B] md:flex-row">
        {navLinks.map(({ href, text }) => (
          <li key={text}>
            <Link onClick={scrollToTop} href={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
