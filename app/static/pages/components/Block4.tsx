import imageSlide1 from '../../assets/desktop/image-slide-1.jpg';
import imagePattern from '../../assets/desktop/bg-pattern-wavy-white.svg';

export default function Block4() {
  return (
    <div className="relative flex h-[728px] w-full justify-start">
      <div className="relative z-[1] flex h-[528px] min-w-[735px] items-center bg-[#191921]">
        <img
          alt="pattern"
          className="absolute right-[-67px] top-[186px] z-[2]"
          src={imagePattern as string}
          width={134}
          height={60}
        />
        <div className="ml-[165px] flex h-[233px] w-[445px] flex-col gap-[51px]">
          <h2 className="text-white">Brand naming & guidelines</h2>
          <div className="flex gap-[16px]">
            <button title="previous slide" type="button" className="previous relative z-40 size-[40px]">
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <title>Previous slide</title>
                <g transform="matrix(-1 0 0 1 40 0)" fill="none" fillRule="evenodd">
                  <circle cx="20" cy="20" r="19.5" />
                  <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
                </g>
              </svg>
            </button>
            <button title="previous slide" type="button" className="previous relative z-40 size-[40px]">
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <title>next slide</title>
                <g fill="none" fillRule="evenodd">
                  <circle cx="20" cy="20" r="19.5" />
                  <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" h-[728px] w-[895px]">
        <img
          className="absolute right-0 h-[728px] w-[895px] object-cover"
          width={895}
          height={728}
          src={imageSlide1 as string}
          alt=""
        />
      </div>
    </div>
  );
}
