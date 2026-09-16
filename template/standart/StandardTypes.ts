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

// export interface StandardTheDayTypes {
//   theWedding: {
//     theDayIcons: string;
//     theDayTime: string[];
//     theDayHeadings: string[];
//     theDayLocationsOrInfo: string[];
//     theDayCityOrInfo: string[];
//   };
// }

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
