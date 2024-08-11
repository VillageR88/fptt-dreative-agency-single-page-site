import { Link } from 'preact-router';
import { scrollToTop } from '../_lib/functionsClient';
import { navLinks } from '../_lib/const';
import ButtonGetScootin from './ButtonGetScootin';

export default function MobileMenuList({ handleOpen }: { handleOpen: () => void }) {
  return (
    <div id="mobileMenuList" className="absolute left-0 top-[64px] z-[1] size-full  pb-[64px]">
      <div className="flex max-w-[256px] flex-col justify-between bg-[#333A44] px-[32px] pb-[24px] pt-[64px]">
        <ul className="flex flex-col gap-[24px]">
          {navLinks.map(({ href, text }) => (
            <li key={text}>
              <Link
                className="text-[18px] font-bold leading-[25px] text-[#E5ECF4]"
                onClick={() => {
                  handleOpen();
                  scrollToTop();
                }}
                href={href}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonGetScootin additionalFunction={handleOpen} />
      </div>
    </div>
  );
}
