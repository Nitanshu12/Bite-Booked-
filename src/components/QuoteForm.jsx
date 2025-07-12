import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    key: "eventType",
    label: "What type of event is this?",
    options: ["Wedding", "Birthday", "Corporate", "Other"]
  },
  {
    key: "date",
    label: "When is your event?",
    type: "date"
  },
  {
    key: "guests",
    label: "How many guests?",
    options: ["0-50", "50-100", "100-200", "200+"]
  },
  {
    key: "cuisine",
    label: "Cuisine Preferences",
    options: ["Indian", "Chinese", "Continental", "South Indian", "Vegan"],
    multi: true
  },
  {
    key: "veg",
    label: "Veg/Non-Veg?",
    options: ["Veg", "Non-Veg", "Both"]
  },
  {
    key: "budget",
    label: "Budget per plate (₹)",
    options: ["200", "300", "400", "500"]
  }
];

export default function QuoteForm({ caterers, filterCaterers }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const q = questions[step];

  const handleNext = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Final step: filter caterers and redirect
      const filteredList = filterCaterers({ ...answers, [key]: value });
      navigate("/caterers", {
        state: { filtered: filteredList, criteria: { ...answers, [key]: value } }
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-4 bg-white rounded-2xl shadow-2xl px-6 py-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-orange-500 mb-2 text-center">Request a Quote</h2>
      <div className="my-8">
        <div className="font-semibold text-lg mb-6 text-gray-800 text-center">{q.label}</div>
        {q.options ? (
          q.multi ? (
            <MultiSelectOptions
              q={q}
              answers={answers}
              onNext={(value) => handleNext(q.key, value)}
            />
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  className="px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-orange-100 hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-150 shadow-sm"
                  onClick={() => handleNext(q.key, opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )
        ) : q.type === "date" ? (
          <input
            type="date"
            className="block mx-auto text-center text-gray-800 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-150"
            onChange={e => handleNext(q.key, e.target.value)}
          />
        ) : null}
        {step > 0 && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all duration-150 shadow"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Multi-select helper component
function MultiSelectOptions({ q, answers, onNext }) {
  const [selected, setSelected] = useState(answers[q.key] || []);

  const toggle = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((x) => x !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {q.options.map((opt) => (
          <label
            key={opt}
            className={`px-4 py-2 rounded-lg border cursor-pointer transition-all duration-150 shadow-sm flex items-center gap-2
              ${selected.includes(opt)
                ? 'bg-orange-400 border-orange-500 text-white'
                : 'bg-white border-gray-300 text-gray-800 hover:bg-orange-100 hover:border-orange-400'}
            `}
          >
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
              className="accent-orange-500"
            />
            {opt}
          </label>
        ))}
      </div>
      <button
        disabled={selected.length === 0}
        className={`mt-2 px-6 py-2 rounded-lg font-semibold transition-all duration-150 shadow
          ${selected.length
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
        `}
        onClick={() => onNext(selected)}
      >
        Next
      </button>
    </div>
  );
}
