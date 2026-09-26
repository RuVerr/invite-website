import {
  FooterType,
  StandardCountdownTypes,
  StandardDressCodeTypes,
  StandardHeroTypes,
  StandardOurStoryTypes,
  StandardTheDayTypes
} from "./StandardTypes";

export interface StandardTypesData {
  hero: StandardHeroTypes;
  ourStory: StandardOurStoryTypes;
  theDay: StandardTheDayTypes;
  countDown: StandardCountdownTypes;
  dressColor: StandardDressCodeTypes;
  footer: FooterType;
}
