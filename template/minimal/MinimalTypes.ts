export interface MinimalHeroType {
  heroImageSrc: string;
  name: {
    man: string;
    woman: string;
  };
  weddingTime: {
    day: string;
    month: string;
    year: string;
  };
  location: {
    city: string;
    country: string;
  };
}

export interface MinimalUsStoryType {
  ourStoryImageSrc: string;
  ourStoryTextStory: string;
  ourStoryTextStory2: string;
}

export interface MinimalDetailsType {
  wedding: {
    weddingTime: string;
    weddingLocation: string;
  };
  festiveDinner: {
    festiveDinnerTime: string;
    festiveDinnerLocation: string;
  };
  dress: {
    dressColor: string[];
    dressText: string;
  };
}

export interface FooterType{
  footerBackgroundImage: string
}
