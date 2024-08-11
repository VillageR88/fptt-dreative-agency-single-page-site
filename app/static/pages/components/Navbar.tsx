import ButtonGetScootin from './ButtonGetScootin';
import NavbarBlock1 from './NavbarBlock1';
import MobileMenuList from './MobileMenuList';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'preact/hooks';

export default function Navbar() {
  const { menuButtonRef } = useContext(DataContext);
  function handleOpen() {
    if (menuButtonRef.current) {
      menuButtonRef.current.classList.toggle('open');
    }
  }
  return (
    <nav className="z-[2] flex h-[64px] w-full items-center justify-center overflow-x-clip px-[32px] md:h-[96px] md:px-[40px]">
      <button
        ref={menuButtonRef}
        onClick={handleOpen}
        className="absolute left-[32px] flex md:hidden"
        id="mobileMenu"
        type="button"
        title="mobile menu"
      />
      <MobileMenuList handleOpen={handleOpen} />
      <div className="flex w-full max-w-[1106px] items-center justify-center md:justify-between">
        <NavbarBlock1 />
        <ButtonGetScootin />
      </div>
    </nav>
  );
}
