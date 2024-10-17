// types/quiz.d.ts
export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface QuizCategory {
  easy: QuizQuestion[];
  medium: QuizQuestion[];
  hard: QuizQuestion[];
}

export interface QuizData {
  javaScript: QuizCategory;
  react: QuizCategory;
}