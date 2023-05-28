import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2
  },
  wordsPerSentence: {
    max: 10,
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
