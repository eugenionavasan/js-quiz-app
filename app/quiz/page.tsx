'use client';

import { useEffect, useState } from "react";
import { quizData } from "../pages/api/quizData";
import { QuizQuestion, QuizData } from "../types/quiz";
import { useSearchParams } from 'next/navigation';

// Shuffle function using Fisher-Yates algorithm
const shuffleArray = (array: QuizQuestion[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Quiz = () => {
  const searchParams = useSearchParams();
  const topic = searchParams.get('topic');
  const difficulty = searchParams.get('difficulty');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    if (topic && difficulty) {
      const topicKey = topic as keyof QuizData;
      const difficultyKey = difficulty as keyof QuizData[keyof QuizData];

      if (quizData[topicKey] && quizData[topicKey][difficultyKey]) {
        // Shuffle the questions after retrieving them
        const selectedQuestions = shuffleArray([...quizData[topicKey][difficultyKey]]);
        setQuestions(selectedQuestions);
      }
    }
  }, [topic, difficulty]);

  const handleAnswerClick = (selectedAnswerIndex: number) => {
    setSelectedAnswer(selectedAnswerIndex);
    const isCorrectAnswer = questions[currentQuestionIndex].answer === selectedAnswerIndex;

    if (isCorrectAnswer) {
      setScore(score + 1);
    }

    setShowCorrectAnswer(true);

    // Automatically move to the next question after 4 seconds so you can read the correct answer
    setTimeout(() => {
      setSelectedAnswer(null);
      setShowCorrectAnswer(false);

      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }, 5000);
  };

  if (!questions.length) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-3xl mx-auto bg-white shadow-md rounded-lg p-12 relative">
        {/* Score Display */}
        <div className="fixed top-6 right-6 bg-blue-600 text-white font-bold px-4 py-2 rounded-full shadow-lg">
          Score: {score} / {questions.length}
        </div>

        {!quizFinished ? (
          <>
            {/* Question Display */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {questions[currentQuestionIndex].question}
            </h2>

            {/* Options Display */}
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestionIndex].options.map((option, index) => {
                let buttonClasses = "px-4 py-2 rounded-lg text-white font-semibold transition";

                // Highlight the correct and wrong answers
                if (showCorrectAnswer) {
                  if (index === questions[currentQuestionIndex].answer) {
                    buttonClasses += " bg-green-500";
                  } else if (index === selectedAnswer && index !== questions[currentQuestionIndex].answer) {
                    buttonClasses += " bg-red-500";
                  } else {
                    buttonClasses += " bg-gray-400";
                  }
                } else {
                  buttonClasses += " bg-blue-500 hover:bg-blue-600";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={showCorrectAnswer}
                    className={buttonClasses}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quiz Finished!</h2>
            <p className="text-lg font-semibold">Your score: {score} / {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
