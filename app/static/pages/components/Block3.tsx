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
    <div className="flex w-full justify-end">
      <h2 className="z-[2] mr-[-160px] mt-[200px] h-fit w-full max-w-[540px]">
        Our approach for creating a winning brand
      </h2>
      <div className="z-[1] mt-[-200px] flex h-[1100px] w-[895px] items-center justify-end bg-[#F94F4F] pr-[106px]">
        <ul className="flex flex-col gap-[56px]">
          {items.map((item, index) => (
            <li key={item} className="flex h-[200px] w-[504px] flex-col gap-[24px]">
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
