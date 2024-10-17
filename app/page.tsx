'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import './styles/globals.css';

const Home = () => {
  const [quizTopic, setQuizTopic] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const router = useRouter();

  const handleStartQuiz = () => {
    if (quizTopic && difficulty) {
      router.push(`/quiz?topic=${quizTopic}&difficulty=${difficulty}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Select a Quiz
        </h1>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setQuizTopic("javaScript")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "javaScript"
                ? "bg-blue-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Javascript
          </button>
          <button
            onClick={() => setQuizTopic("react")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "react"
                ? "bg-green-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            React
          </button>
        </div>

        {quizTopic && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
              Select Difficulty
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setDifficulty("easy")}
                className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
                  difficulty === "easy"
                    ? "bg-yellow-600"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                Easy
              </button>
              <button
                onClick={() => setDifficulty("medium")}
                className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
                  difficulty === "medium"
                    ? "bg-orange-600"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                Medium
              </button>
              <button
                onClick={() => setDifficulty("hard")}
                className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
                  difficulty === "hard"
                    ? "bg-red-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                Hard
              </button>
            </div>
          </>
        )}

        {difficulty && (
          <div className="flex justify-center">
            <button
              onClick={handleStartQuiz}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Start Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;