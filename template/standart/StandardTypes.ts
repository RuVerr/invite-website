export interface StandardHeroTypes {
  standardHeroImageSrc: string;
  logoHeroes: {
    man: string;
    woman: string;
  };
  heroesParagraph: string[];
  heroHeading: {
    heroHeadingParagraph: string;
    heroHeroesNames: {
      heroHeadingWomanName: string;
      heroHeadingManName: string;
    };
    heroHeadingDateTime: {
      day: string;
      month: string;
      year: string;
    };
    heroHeadingLocation: {
      city: string;
      country: string;
    };
  };
}

export interface StandardOurStoryTypes {
  ourStoryHeading: string;
  ourStoryParagraph: string;
  ourStoryImageSrc: string;
  ourStoryImageSrc2: string;
}

interface theDayItem {
  theDayIcons: string;
  theDayTime: string;
  theDayHeadings: string;
  theDayLocationsOrInfo: string;
  theDayCityOrInfo: string;
}

export interface StandardTheDayTypes {
  theDayData: theDayItem[];
}

export interface StandardCountdownTypes {
  CountDownYear: string;
  CountDownMonth: string;
  CountDownDay: string;
}

export interface StandardDressCodeTypes {
  dressColors: string[];
}

export interface FooterType {
  footerBackgroundImage: string;
}
