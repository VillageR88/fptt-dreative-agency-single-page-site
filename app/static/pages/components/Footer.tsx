import imagePattern from '../../assets/desktop/bg-pattern-wave-red.svg';

const items = {
  title: 'Let’s build something great together.',
  buttonDescription: 'Schedule a Call',
};

export default function Footer() {
  return (
    <footer className="mx-auto mb-[101px] mt-[100px] flex w-full max-w-[1342px] items-center overflow-hidden px-[24px] md:mt-[70px] md:px-[40px] xl:mb-[115px] xl:ml-[-67px] xl:mt-[120px] xl:px-0">
      <img className="hidden xl:block" alt="pattern" src={imagePattern as string} width={134} height={60} />
      <div className="flex w-full flex-col justify-between gap-[47px] md:flex-row md:items-center xl:ml-[98px]">
        <h2 className="md:max-w-[398px] xl:max-w-[635px]">{items.title}</h2>
        <button
          type="button"
          className="h-[64px] w-[199px] bg-[#F94F4F] text-[16px] font-extrabold text-white transition hover:bg-[#FF9393]"
        >
          {items.buttonDescription}
        </button>
      </div>
    </footer>
  );
}
