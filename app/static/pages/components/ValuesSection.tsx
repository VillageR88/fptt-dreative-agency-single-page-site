import imageOurTech from '../../assets/images/our-tech.jpg';
import imageOurIntegrity from '../../assets/images/our-integrity.jpg';
import imageOurCommunity from '../../assets/images/our-community.jpg';

const items = [
  {
    src: imageOurTech as string,
    title: 'Our tech',
    description:
      'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
  },
  {
    src: imageOurIntegrity as string,
    title: 'Our integrity',
    description:
      'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
  },
  {
    src: imageOurCommunity as string,
    title: 'Our community',
    description:
      'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
  },
];
export default function Block2({ title }: { title: string }) {
  return (
    <div className="mb-[145px] flex w-full max-w-[1110px] flex-col items-center gap-[48px] px-[32px] md:mb-[120px] md:px-0">
      <h2 className="text-[#495567]">{title}</h2>
      <ul className="flex w-full flex-col items-center justify-between gap-[56px] xl:flex-row xl:gap-[30px]">
        {items.map((item, index) => (
          <li key={item.title} className="flex max-w-[350px] flex-col items-center">
            <img
              width={240}
              height={240}
              className="size-[240px] min-w-[240px] rounded-full object-cover"
              src={item.src}
              alt=""
            />
            <div className="mt-[-41px] flex size-[96px] items-center justify-center rounded-full bg-[#FCB72B] font-mono text-[24px] font-bold leading-[28px] tracking-[-1.07px] text-[#495567]">
              {(index + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </div>
            <section className="mt-[32px] flex w-full flex-col items-center gap-[24px] text-center">
              <h3 className="w-full text-[#495567]">{item.title}</h3>
              <p className="w-full text-[#939CAA]">{item.description}</p>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
