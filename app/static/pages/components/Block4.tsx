import imageSlide1 from '../../assets/desktop/image-slide-1.jpg';
import imageSlide2 from '../../assets/desktop/image-slide-2.jpg';
import imageSlide3 from '../../assets/desktop/image-slide-3.jpg';
import imagePattern from '../../assets/desktop/bg-pattern-wavy-white.svg';
import { useState, useRef } from 'preact/hooks';

import Flicking from '@egjs/preact-flicking';
import '@egjs/preact-flicking/dist/flicking.css';

enum TitleKey {
  guidelines = 0,
  merchandise = 1,
  design = 2,
}

const title = {
  [TitleKey.guidelines]: {
    mainTitle: 'Brand naming & guidelines',
    title: 'Lean Product Roadmap',
    description: '2019 Project',
  },
  [TitleKey.merchandise]: {
    mainTitle: 'Brand identity & merchandise',
    title: 'New Majestic Hotel',
    description: '2018 Project',
  },
  [TitleKey.design]: {
    mainTitle: 'Brand identity & web design',
    title: 'Crypto Dashboard',
    description: '2016 Project',
  },
};

const titlesButtons = {
  previous: 'previous slide',
  next: 'next slide',
};

export default function Block4() {
  const flicking = useRef<Flicking>();
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<TitleKey>(TitleKey.guidelines);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="relative flex min-h-[728px] w-full justify-start">
      <div className="relative z-[1] flex h-[352px] w-1/2 max-w-[735px] items-center justify-center bg-[#191921] pl-[20px] xl:h-[528px]">
        <img
          alt="pattern"
          className="absolute right-[-31px] top-[126px] z-[2] h-[28px] w-[62px] xl:right-[-67px] xl:top-[186px] xl:h-[60px] xl:w-[134px]"
          src={imagePattern as string}
          width={134}
          height={60}
        />
        <div className="flex h-[233px] w-[390px] flex-col justify-center gap-[51px] xl:w-[445px]">
          <h2 ref={mainTitleRef} className="animationElement max-w-[281px] text-white xl:max-w-full">
            {title[currentSlide].mainTitle}
          </h2>
          <div className="flex gap-[16px]">
            <button
              disabled={isPlaying}
              onClick={(): void => {
                void flicking.current?.prev();
              }}
              title="previous slide"
              type="button"
              className="previous relative z-40 size-[40px]"
            >
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <title>{titlesButtons.previous}</title>
                <g transform="matrix(-1 0 0 1 40 0)" fill="none" fillRule="evenodd">
                  <circle cx="20" cy="20" r="19.5" />
                  <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
                </g>
              </svg>
            </button>
            <button
              disabled={isPlaying}
              onClick={(): void => {
                void flicking.current?.next();
              }}
              title="next slide"
              type="button"
              className="previous relative z-40 size-[40px]"
            >
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <title>{titlesButtons.next}</title>
                <g fill="none" fillRule="evenodd">
                  <circle cx="20" cy="20" r="19.5" />
                  <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 z-0 h-[728px] w-[895px] ">
        <Flicking
          onMoveStart={() => {
            setIsPlaying(true);
            mainTitleRef.current?.classList.add('animateTransition');
            sectionRef.current?.classList.add('animateTransition');
          }}
          onMoveEnd={() => {
            setIsPlaying(false);
            mainTitleRef.current?.classList.remove('animateTransition');
            sectionRef.current?.classList.remove('animateTransition');
          }}
          ref={flicking}
          circular
          onChanged={(e): void => {
            setCurrentSlide(e.index as TitleKey);
          }}
        >
          <div className="panel image-container" key={TitleKey.guidelines}>
            <img className="carouselImage" src={imageSlide1 as string} alt="Slide 1" />
          </div>
          <div className="panel image-container" key={TitleKey.merchandise}>
            <img className="carouselImage" src={imageSlide2 as string} alt="Slide 2" />
          </div>
          <div className="panel image-container" key={TitleKey.design}>
            <img className="carouselImage" src={imageSlide3 as string} alt="Slide 3" />
          </div>
        </Flicking>
        <div className="absolute bottom-[68px] right-[154px] z-[1]">
          <section ref={sectionRef} className="animationElement flex flex-col text-end">
            <h3 className="text-white">{title[currentSlide].title}</h3>
            <p className="text-white">{title[currentSlide].description}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
