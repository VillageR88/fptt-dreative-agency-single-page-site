import type { JSXInternal } from 'preact/src/jsx';

interface FeaturesSectionProps {
  boxItems: {
    imageSrc: string;
    patternSrc: string;
    title: string;
    description: string;
    patternClassExtension: string;
    linkProp?: JSXInternal.Element;
  }[];
}

export default function FeaturesSection({
  boxItems,
  ulClassExtension,
}: {
  boxItems: FeaturesSectionProps['boxItems'];
  ulClassExtension: string;
}) {
  return (
    <ul
      className={`${ulClassExtension} flex w-fit flex-col items-center gap-[128px] md:mb-[104px] xl:mx-auto xl:gap-[160px]`}
    >
      {boxItems.map((item, index) => (
        <li
          className={`${index % 2 ? 'flex-col-reverse self-start xl:mr-[165px] xl:flex-row-reverse' : 'flex-col-reverse self-end xl:ml-[165px] xl:flex-row'} flex max-w-[1275px] items-center gap-[56px] xl:gap-[16%]`}
          key={item.title}
        >
          <div className="flex flex-col items-center gap-[40px] xl:items-start">
            <section className="flex w-full max-w-[573px] flex-col items-center gap-[24px] px-[32px] text-center md:px-0 xl:mx-0 xl:w-[445px] xl:gap-[27px] xl:text-left">
              <h2 className="w-full text-[#495567] md:w-[450px] xl:w-[445px]">{item.title}</h2>
              <p className="text-[#939CAA]">{item.description}</p>
            </section>
            {item.linkProp}
          </div>
          <div
            className={`${index % 2 ? 'flex-row-reverse md:ml-[350px] md:mr-[410px]' : 'flex-row md:ml-[410px] md:mr-[350px]'} relative flex gap-[64px] xl:mx-0`}
          >
            <img
              width={445}
              height={445}
              className="size-[311px] min-w-[313px] rounded-full md:size-[445px] md:min-w-fit"
              src={item.imageSrc}
              alt=""
            />
            <div className="hidden size-[445px] min-w-[445px] rounded-full bg-[#E5ECF4] md:block" />
            <img className={`absolute ${item.patternClassExtension} h-auto min-w-fit`} src={item.patternSrc} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
}
