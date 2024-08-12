const title = 'Our approach for creating a winning brand';
const items = [
  {
    title: 'Brand Strategy',
    description:
      'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
  },
  {
    title: 'Brand Design',
    description:
      'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.',
  },
  {
    title: 'Web Design',
    description:
      'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues. ',
  },
];

export default function Block3() {
  return (
    <div className="flex w-full justify-between xl:justify-end xl:pl-[39px]">
      <div className="relative z-[2] flex  w-full justify-center px-[24px] lg:px-0 xl:mr-[-160px] xl:w-fit">
        <h2 className="z-[2] mt-[120px] h-fit w-full max-w-[281px] lg:mt-0 xl:mt-[200px] xl:max-w-[540px] xl:pl-0">
          {title}
        </h2>
      </div>
      <div className="z-[1] flex h-[797px] w-[1400px] items-center justify-center bg-[#F94F4F] md:mt-[-120px] lg:mt-[-200px] xl:h-[1100px] xl:w-[895px] xl:justify-end xl:pr-[106px]">
        <ul className="flex flex-col gap-[40px] xl:gap-[56px]">
          {items.map((item, index) => (
            <li key={item} className="flex h-[200px] w-[355px] flex-col gap-[24px] xl:w-[504px]">
              <span className="absolute text-[80px] font-extrabold leading-[88px] text-white/25">
                {(index + 1).toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>
              <section className="ml-[59px] mt-[44px] flex flex-col gap-[24px]">
                <h3 className="text-white">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
