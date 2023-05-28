import { LoremIpsum } from "lorem-ipsum";

export const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2
  },
  wordsPerSentence: {
    max: 10,
    min: 3
  }
});