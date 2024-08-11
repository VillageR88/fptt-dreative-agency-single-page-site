import imagePattern from '../../assets/desktop/bg-pattern-wave-red.svg';

export default function Footer() {
  return (
    <footer className="mx-auto mb-[115px] ml-[-67px] mt-[120px] flex w-full max-w-[1342px] items-center">
      <img alt="pattern" src={imagePattern as string} width={134} height={60} />
      <div className="ml-[98px] flex w-full items-center justify-between">
        <h2 className="max-w-[635px]">Let's build something great together.</h2>
        <button
          type="button"
          className="h-[64px] w-[199px] bg-[#F94F4F] text-[16px] font-extrabold text-white transition hover:bg-[#FF9393]"
        >
          Schedule a Call
        </button>
      </div>
    </footer>
  );
}
