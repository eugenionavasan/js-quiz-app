import { QuizData } from "../../types/quiz";

export const quizData: QuizData = {
  javaScript: {
    easy: [
      { question: "What is the purpose of `let` and `const` in JavaScript?", options: ["Declare functions", "Declare variables", "Define CSS styles", "Create HTML elements"], answer: 1 },
      { question: "What is `NaN` in JavaScript?", options: ["A function", "An undefined value", "Not a Number", "Null value"], answer: 2 },
      { question: "What does `typeof` operator do in JavaScript?", options: ["Returns data type", "Returns function name", "Creates a new array", "Modifies a string"], answer: 0 },
      { question: "What is a closure in JavaScript?", options: ["A data type", "An error", "A function inside another function that has access to the outer function's variables", "A class instance"], answer: 2 },
      { question: "What is the default value of `undefined` in JavaScript?", options: ["null", "false", "undefined", "0"], answer: 2 },
    ],
    medium: [
      { question: "What is the difference between `==` and `===` in JavaScript?", options: ["Both compare values equally", "`==` checks type and value, `===` only checks value", "`===` checks type and value, `==` only checks value", "`==` checks length, `===` checks value"], answer: 2 },
      { question: "How does event delegation work in JavaScript?", options: ["A parent element handles events triggered by its child elements", "An element passes events to its parent", "Events are delegated to the closest element", "Events are delegated based on the event type"], answer: 0 },
      { question: "What are promises in JavaScript?", options: ["A way to delay code execution", "A placeholder for a value that will eventually resolve", "A type of loop", "A method to fetch data"], answer: 1 },
      { question: "What is `this` keyword in JavaScript?", options: ["Refers to the current function", "Refers to the global object", "Refers to the current object in which the code is running", "Refers to an event handler"], answer: 2 },
      { question: "What is the purpose of `Array.prototype.map()`?", options: ["Iterates through an array and modifies it", "Creates a new array with results from a callback function", "Deletes elements from an array", "Sorts an array"], answer: 1 },
    ],
    hard: [
      { question: "What is the event loop in JavaScript?", options: ["A function that triggers events", "A concurrency model to handle asynchronous tasks", "A loop that runs over event listeners", "A way to schedule tasks in JavaScript"], answer: 1 },
      { question: "What are generator functions in JavaScript?", options: ["Functions that create objects", "Functions that can be paused and resumed", "Asynchronous functions", "Functions that trigger events"], answer: 1 },
      { question: "Explain the concept of 'hoisting' in JavaScript.", options: ["Functions and variables are moved to the top of their scope", "An object can inherit properties", "Event handlers are prioritized", "Data types are converted automatically"], answer: 0 },
      { question: "What is the purpose of the `Proxy` object in JavaScript?", options: ["Allows direct control over the behavior of an object", "Creates a shallow copy of an object", "Handles promises in a clean way", "Allows for data binding in templates"], answer: 0 },
      { question: "What are modules in JavaScript?", options: ["A way to encapsulate data", "A way to create classes", "Files or pieces of code that are reusable and exportable", "A type of object"], answer: 2 },
    ]
  },
  react: {
    easy: [
      { question: "What is React?", options: ["A CSS framework", "A JavaScript library for building user interfaces", "A database system", "A templat]e engine"], answer: 1 },
      { question: "What is JSX in React?", options: ["A JavaScript function", "A CSS framework", "A syntax extension for JavaScript", "A type of API"], answer: 2 },
      { question: "How do you create a React component?", options: ["By using a class or a function", "By using an array", "By creating a variable", "By importing CSS files"], answer: 0 },
      { question: "What is the purpose of `state` in React?", options: ["To store and manage data in components", "To define styles", "To handle routing", "To make API calls"], answer: 0 },
      { question: "How do you pass data between components in React?", options: ["Using state", "Using functions", "Using props", "Using events"], answer: 2 },
    ],
    medium: [
      { question: "What is the difference between state and props in React?", options: ["State is immutable, props are mutable", "Props are for passing data between components, state is for managing local data", "State is for passing data, props manage local data", "Props can only be used in functional components"], answer: 1 },
      { question: "What is the virtual DOM in React?", options: ["A copy of the real DOM that React uses to optimize rendering", "A new type of DOM", "A database", "A caching mechanism for JavaScript"], answer: 0 },
      { question: "How do you handle events in React?", options: ["Using inline event handlers", "Using `addEventListener`", "Using synthetic events in JSX", "By creating event listeners manually"], answer: 2 },
      { question: "What are React hooks?", options: ["Functions that let you use state and other React features in functional components", "Classes that store data", "Tools for handling HTTP requests", "Methods for lifecycle management"], answer: 0 },
      { question: "What does `useEffect` hook do in React?", options: ["Handles component side effects, like data fetching", "Handles state updates", "Initializes component data", "Binds event handlers"], answer: 0 },
    ],
    hard: [
      { question: "What is reconciliation in React?", options: ["A method to reset the state", "A process that React uses to update the DOM", "A way to merge component data", "A lifecycle method"], answer: 1 },
      { question: "What is code splitting in React?", options: ["A way to divide functions", "A method to load components on demand", "A way to handle API requests", "A process to optimize CSS"], answer: 1 },
      { question: "How do React context and hooks work together?", options: ["Using hooks to access and update context data", "Hooks provide context automatically", "They cannot be used together", "Context initializes hooks"], answer: 0 },
      { question: "What is `useMemo` in React?", options: ["A hook to optimize performance by memoizing expensive calculations", "A way to handle state changes", "A lifecycle method", "A method to handle user input"], answer: 0 },
      { question: "How does React’s `key` attribute help in rendering lists?", options: ["It helps identify elements uniquely to update the DOM efficiently", "It assigns event handlers", "It controls state changes", "It manages styles"], answer: 0 },
    ],
  },
};