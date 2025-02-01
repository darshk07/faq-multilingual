export interface FAQ {
  id: number;
  question: string;
  answer: string;
  translations: {
    [key: string]: {
      question: string;
      answer: string;
    };
  };
}