import React, { useState } from "react";

// 1️⃣ Type define for Quote
type Quote = {
  text: string;
  author: string;
};

const QuoteGenerator = () => {
  // 2️⃣ Array of quotes
  const quotes: Quote[] = [
    {
      text: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
  ];

  // 3️⃣ State for current quote
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  // 4️⃣ Function to generate random quote
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎯 Random Quote Generator</h1>

      {currentQuote && (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-md text-center mb-4">
          <p className="text-lg italic">"{currentQuote.text}"</p>
          <p className="mt-2 text-yellow-400 font-semibold">
            — {currentQuote.author}
          </p>
        </div>
      )}

      <button
        onClick={generateQuote}
        className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
      >
        Get Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
