import { Link } from 'preact-router';
import imageStrategic from '../../assets/desktop/image-strategic.jpg';
import patternRed from '../../assets/desktop/bg-pattern-wave-red.svg';

export default function Block2() {
  return (
    <div className="relative flex h-[984px] w-full justify-end">
      <img
        className="absolute left-0 h-[984px] w-[735px]"
        height={984}
        width={735}
        src={imageStrategic as string}
        alt="strategic"
      />
      <div className="relative flex h-[784px] w-[705px] items-center bg-[#191921] pl-[154px] pr-[106px]">
        <div className="flex flex-col gap-[48px] ">
          <img
            className="absolute left-[-67px] top-[234px]"
            width={135}
            height={61}
            src={patternRed as string}
            alt="pattern"
          />
          <section className="flex flex-col gap-[43px]">
            <h2 className="text-white">
              <span className="text-[#F94F4F]">Design</span> is strategic.
            </h2>
            <p className="text-white">
              “A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm
              believers that success lies in creative collaboration with our clients.”
            </p>
          </section>
          <Link
            className="font-extrabold text-[#F94F4F] underline underline-offset-[12px] transition hover:text-[#FF9393]"
            href="#"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
