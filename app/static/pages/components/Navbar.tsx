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

export default function Navbar() {
  return (
    <nav className="z-[2] flex h-[64px] w-full items-center justify-between overflow-x-clip px-[32px] md:h-[178px] md:px-[40px]">
      <div>LOGO</div>
      <div className="flex h-full w-[705px] items-center bg-[#F94F4F] pl-[69px]">
        <ul className="flex gap-[32px] text-white">
          {items.map((item) => (
            <li key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
