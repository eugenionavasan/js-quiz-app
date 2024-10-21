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
  typescript: QuizCategory;
  reactNative: QuizCategory;
  gitGithub: QuizCategory;
  html: QuizCategory;
  css: QuizCategory;
  nextjs: QuizCategory;
  angular: QuizCategory;
  astro: QuizCategory;
}