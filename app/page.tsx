'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import './styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faGitAlt,
  faHtml5,
  faCss3Alt,
  faAngular,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons'; // Added faRocket for Astro

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
      <div className="container max-w-4xl mx-auto bg-white shadow-md rounded-lg p-12">
        <h1 className="text-6xl font-bold text-center text-black mb-8 font-pixel">
          The tech interview quiz 👨🏻‍💻
        </h1>
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8 font-pixel">
          Select a Quiz
        </h1>

        {/* Quiz Topic Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setQuizTopic("javaScript")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "javaScript"
                ? "bg-blue-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Javascript <FontAwesomeIcon icon={faJs} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("react")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "react"
                ? "bg-green-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            React <FontAwesomeIcon icon={faReact} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("typescript")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "typescript"
                ? "bg-purple-600"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            TypeScript <FontAwesomeIcon icon={faLaptopCode} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("reactNative")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "reactNative"
                ? "bg-pink-600"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            React Native <FontAwesomeIcon icon={faReact} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("gitGithub")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "gitGithub"
                ? "bg-red-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Git/GitHub <FontAwesomeIcon icon={faGitAlt} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("html")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "html"
                ? "bg-yellow-600"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            HTML <FontAwesomeIcon icon={faHtml5} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("css")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "css"
                ? "bg-blue-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            CSS <FontAwesomeIcon icon={faCss3Alt} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("nextjs")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "nextjs"
                ? "bg-gray-600"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            Next.js <FontAwesomeIcon icon={faNodeJs} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("angular")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "angular"
                ? "bg-orange-600"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Angular <FontAwesomeIcon icon={faAngular} className="ml-2" />
          </button>
          <button
            onClick={() => setQuizTopic("astro")}
            className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
              quizTopic === "astro"
                ? "bg-indigo-600"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            Astro <FontAwesomeIcon icon={faRocket} className="ml-2" />
          </button>
        </div>

        {quizTopic && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4 font-pixel">
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
              Start Quiz⚡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;