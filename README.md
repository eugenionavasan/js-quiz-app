
# Quiz App

This is a simple quiz application built with **Next.js** and **TypeScript** that allows users to answer quiz questions from different categories and difficulties. It is styled using **Tailwind CSS**.

## Features

- Select a quiz topic and difficulty.
- Answer questions, and get feedback on whether your answer was correct or incorrect.
- Score is displayed throughout the quiz.
- Questions are shuffled each time a quiz starts.

## Getting Started

### Prerequisites

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn** (v1.x or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quiz-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Adding New Quiz Data

To add new questions and categories, follow these steps:

### 1. Add Questions to `quizData.ts`

Go to the `pages/api/quizData.ts` file and add your questions following this structure:

```ts
CATEGORY_NAME: {
  DIFFICULTY: [
    {
      question: "Your question goes here",
      options: [
        "1ST OPTION",
        "2ND OPTION",
        "3RD OPTION",
        "4TH OPTION"
      ],
      answer: NUMBER // Index of the correct answer (0 to 3)
    },
    // More questions...
  ],
},
```

#### Example

```ts
science: {
  easy: [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "N2"],
      answer: 0, // H2O is the correct answer
    },
  ],
  medium: [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: 1, // Mars is the correct answer
    },
  ],
  hard: [
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      answer: 1, // Mitochondria is the correct answer
    },
  ],
},
```

### 2. Add New Category to `page.tsx`

If you're adding a **new category**, you need to add it to the quiz selection page.

1. Open `app/page.tsx`.
2. Add the following code **below** the `div` that contains the `<h1>Select a Quiz</h1>`.

```tsx
<button
  onClick={() => setQuizTopic("NEW_CATEGORY_NAME")}
  className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
    quizTopic === "NEW_CATEGORY_NAME"
      ? "bg-green-600"
      : "bg-green-500 hover:bg-green-600"
  }`}
>
  NEW_CATEGORY_NAME
</button>
```

#### Example:

If you're adding a new category called **"math"**, the code would look like this:

```tsx
<button
  onClick={() => setQuizTopic("math")}
  className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
    quizTopic === "math"
      ? "bg-green-600"
      : "bg-green-500 hover:bg-green-600"
  }`}
>
  Math
</button>
```

### 3. Save the file and restart the development server if necessary:

```bash
npm run dev
# or
yarn dev
```

Now your new category and questions should appear in the quiz selection screen, and you can answer the newly added questions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
