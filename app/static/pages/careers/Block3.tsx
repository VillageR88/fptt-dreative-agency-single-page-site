import { Link } from 'preact-router';

export default function Block3() {
  const linkTitle = 'Apply';
  const items = [
    { title: 'General Manager', description: 'Jakarta, Indonesia' },
    { title: 'UI/UX Designer', description: 'Yokohama, Japan' },
    { title: 'Blog Content Copywriter', description: 'New York, United States' },
    { title: 'Graphic Designer', description: 'New York, United States' },
    { title: 'Fleet Supervisor', description: 'Jakarta, Indonesia' },
    { title: 'UX Analyst', description: 'London, United Kingdom' },
  ];

  return (
    <ul className="mb-[120px] flex w-full flex-col items-center gap-[16px] px-[32px] md:mb-[160px] md:gap-[24px] md:px-[39px]">
      {items.map((item) => (
        <li
          className="flex w-full min-w-[128px] max-w-[1110px] flex-col items-center justify-between gap-[16px] bg-[#F2F5F9] px-[32px] pb-[35px] pt-[32px] text-center md:flex-row md:pl-[40px] md:pr-[64px] md:text-start"
          key={item.title}
        >
          <section className="flex flex-col gap-[8px]">
            <h2 className="h4 text-[#495567]">{item.title}</h2>
            <p className="text-[#495567]">{item.description}</p>
          </section>
          <Link
            className="flex h-[53px] w-full max-w-[247px] items-center justify-center border-2 border-[#FCB72B] bg-[#FCB72B] text-[15px] leading-[25px] text-[#FFFFFF] transition hover:bg-transparent hover:text-[#FCB72B] md:max-w-[180px]"
            href="#"
          >
            {linkTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
}
