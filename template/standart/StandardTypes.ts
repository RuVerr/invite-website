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
