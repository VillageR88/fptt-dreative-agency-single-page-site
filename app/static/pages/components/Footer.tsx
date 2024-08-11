import { Link } from 'preact-router';
import IconFacebook from './IconFacebook';
import IconTwitter from './IconTwitter';
import IconInstagram from './IconInstagram';
import NavbarBlock1 from './NavbarBlock1';
import IconAppStore from '../../assets/icons/iconApple.svg';
import IconGooglePlay from '../../assets/icons/iconGooglePlay.svg';
import patternSemiCircles from '../../assets/patterns/semi-circles.svg';

const storeIcons = [
  {
    imageSrc: IconAppStore as string,
    key: 'app-store',
    span: 'Available on the',
    title: 'AppStore',
    href: 'https://www.apple.com/app-store/',
  },
  {
    imageSrc: IconGooglePlay as string,
    key: 'google-play',
    span: 'Get it on',
    title: 'GooglePlay',
    href: 'https://play.google.com/store',
  },
];

const socialIcons = [
  { component: <IconFacebook />, key: 'facebook' },
  { component: <IconTwitter />, key: 'twitter' },
  { component: <IconInstagram />, key: 'instagram' },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col overflow-x-clip">
      <div className="relative flex min-h-[320px] w-full items-center justify-center bg-[#495567] px-[40px]  py-[24px] md:min-h-[300px]">
        <img
          src={patternSemiCircles as string}
          alt=""
          className="pointer-events-none absolute bottom-0 mr-[450px] h-auto min-w-fit md:mr-0 xl:mr-[-600px]"
        />
        <div className="flex w-full max-w-[1100px] flex-col items-center justify-between gap-[40px] text-center xl:flex-row xl:text-left">
          <h2 className="max-w-[415px] text-white">Sign up and Scoot off today</h2>
          <ul className="flex flex-wrap justify-center gap-[18px]">
            {storeIcons.map((item) => (
              <li key={item.key}>
                <Link
                  title={item.key}
                  type="button"
                  className="buttonStore flex items-center justify-center gap-[11px]"
                  href={item.href}
                >
                  <img src={item.imageSrc} alt="" />
                  <section className="flex flex-col text-left">
                    <span className="text-[10px]">{item.span}</span>
                    <h2 className="text-[20px] leading-[24px] tracking-[-0.89px] text-[#495567]">{item.title}</h2>
                  </section>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex h-[438px] w-full items-center bg-[#333A44] px-[40px] md:h-[96px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-[85px] md:flex-row">
          <NavbarBlock1 />
          <ul className="flex w-fit items-center gap-[18px]">
            {socialIcons.map(({ component, key }) => (
              <li className="transition" key={key}>
                {component}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
