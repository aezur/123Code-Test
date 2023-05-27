import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 12,
    min: 4
  },
  wordsPerSentence: {
    max: 20,
    min: 3
  }
});

export const loremIpsum = {
  methods: {
    generateWords: (count: number) =>  lorem.generateWords(count),
    generateSentences: (count: number) =>  lorem.generateSentences(count),
    generateParagraphs: (count: number) =>  lorem.generateParagraphs(count),
  },
};
