import backgroundAboutDesktop from '../../assets/images/about-hero-desktop.jpg';
import backgroundAboutTablet from '../../assets/images/about-hero-tablet.jpg';
import backgroundAboutMobile from '../../assets/images/about-hero-mobile.jpg';
import backgroundCareersDesktop from '../../assets/images/careers-locations-hero-desktop.jpg';
import backgroundCareersTablet from '../../assets/images/careers-locations-hero-tablet.jpg';
import backgroundCareersMobile from '../../assets/images/careers-location-hero-mobile.jpg';
import patternWhiteCircles from '../../assets/patterns/white-circles.svg';
import { routes } from '../_lib/const';

export default function InnerHeader({ path }: { path?: string }) {
  function processPathToTitle(path: string) {
    switch (path) {
      case routes.about:
        return 'About';
      case routes.location:
        return 'Locations';
      case routes.careers:
        return 'Careers';
    }
  }

  function processPathToSrc(path: string): string[] {
    switch (path) {
      case routes.about:
        return [backgroundAboutDesktop, backgroundAboutTablet, backgroundAboutMobile] as string[];
      case routes.location:
        return [backgroundCareersDesktop, backgroundCareersTablet, backgroundCareersMobile] as string[];
      case routes.careers:
        return [backgroundCareersDesktop, backgroundCareersTablet, backgroundCareersMobile] as string[];
    }
    return [];
  }

  return (
    <div className="relative flex h-[160px] w-full max-w-[1440px] items-center justify-center md:h-[200px]">
      <picture className="absolute size-full object-cover">
        <source media="(max-width: 960px)" srcSet={processPathToSrc(path ? path : '')[2]} />
        <source media="(max-width: 640px)" srcSet={processPathToSrc(path ? path : '')[1]} />
        <img className="size-full object-cover object-left" src={processPathToSrc(path ? path : '')[0]} alt="" />
      </picture>
      <div className="mx-[32px] flex w-full max-w-[1106px] justify-center md:justify-start">
        <h1 className="relative">{processPathToTitle(path ? path : '')}</h1>
        <img className="absolute right-[-31px] hidden md:block" src={patternWhiteCircles as string} alt="" />
      </div>
    </div>
  );
}
