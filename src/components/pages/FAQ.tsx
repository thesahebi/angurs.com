import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface FAQItem {
  question: string;
  answer: string[];
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is React?",
      answer: [
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
        "React uses a virtual DOM to efficiently update and render only the components that change, improving performance."
      ]
    },
    {
      question: "What is TypeScript?",
      answer: [
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
        "It adds optional static typing to the language, which can help catch errors during development and improve IDE support."
      ]
    },
    {
      question: "What is Tailwind CSS?",
      answer: [
        "Tailwind CSS is a utility-first CSS framework for building custom designs without writing traditional CSS.",
        "Instead of pre-designed components, Tailwind provides low-level utility classes that can be combined to build unique designs.",
        "It allows developers to create consistent and responsive layouts quickly."
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="dark:bg-black pb-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl py-12 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className=" rounded-lg overflow-hidden shadow-md">
              <button
                className="w-full flex items-center justify-between p-4 bg-blue-500 text-white font-medium hover:bg-ubun transition"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                aria-label={`Toggle FAQ: ${item.question}`}
              >
                {/* <FaPlus /> */}
                <span id={`faq-question-${index}`}>{item.question}</span>
                {activeIndex === index ? (
                  <FaMinus className="text-white w-5 h-5" />
                ) : (
                  <FaPlus className="text-white w-5 h-5" />
                )}
              </button>
              {activeIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="p-4 bg-gray-100 text-gray-700 space-y-3"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {item.answer.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
