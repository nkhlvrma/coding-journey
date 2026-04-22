"use client";

import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

type Term = {
  term: string;
  category: string;
  definition: string;
  example?: string;
};

const TERMS: Term[] = [
  // Fundamentals
  { term: "Variable", category: "Fundamentals", definition: "A named container that stores a value in your program. Think of it like a labelled box.", example: "name = \"Anu\"" },
  { term: "String", category: "Fundamentals", definition: "A piece of text surrounded by quotes. Strings can hold any characters.", example: "greeting = \"Hello, world!\"" },
  { term: "Integer", category: "Fundamentals", definition: "A whole number with no decimal point, like 5, -3, or 100.", example: "age = 25" },
  { term: "Float", category: "Fundamentals", definition: "A number with a decimal point, used for precise values.", example: "price = 9.99" },
  { term: "Boolean", category: "Fundamentals", definition: "A value that is either True or False. Used in conditions.", example: "is_raining = True" },
  { term: "Print", category: "Fundamentals", definition: "A built-in function that displays output to the screen.", example: "print(\"Hello!\")" },
  { term: "Comment", category: "Fundamentals", definition: "A note in your code that Python ignores. Starts with #.", example: "# This is a comment" },
  { term: "Input", category: "Fundamentals", definition: "A function that asks the user to type something and returns it as a string.", example: "name = input(\"What is your name? \")" },

  // Control flow
  { term: "If statement", category: "Control Flow", definition: "Runs a block of code only when a condition is True.", example: "if age >= 18:\n    print(\"Adult\")" },
  { term: "Else", category: "Control Flow", definition: "The block that runs when an if condition is False.", example: "else:\n    print(\"Not adult\")" },
  { term: "Elif", category: "Control Flow", definition: "Short for 'else if' — checks another condition if the first was False.", example: "elif age == 18:\n    print(\"Just turned 18!\")" },
  { term: "For loop", category: "Control Flow", definition: "Repeats a block of code for each item in a list or range.", example: "for i in range(5):\n    print(i)" },
  { term: "While loop", category: "Control Flow", definition: "Repeats a block of code as long as a condition stays True.", example: "while count < 10:\n    count += 1" },
  { term: "Break", category: "Control Flow", definition: "Exits a loop immediately, even if the condition is still True.", example: "if x == 5:\n    break" },
  { term: "Continue", category: "Control Flow", definition: "Skips the rest of the current loop iteration and moves to the next.", example: "if x == 3:\n    continue" },

  // Data structures
  { term: "List", category: "Data Structures", definition: "An ordered, changeable collection of items, written in square brackets.", example: "fruits = [\"apple\", \"mango\", \"banana\"]" },
  { term: "Dictionary", category: "Data Structures", definition: "A collection of key-value pairs, like a real dictionary where each word has a meaning.", example: "person = {\"name\": \"Anu\", \"age\": 25}" },
  { term: "Tuple", category: "Data Structures", definition: "Like a list but cannot be changed after creation. Written in parentheses.", example: "coords = (28.6, 77.2)" },
  { term: "Set", category: "Data Structures", definition: "A collection of unique items with no duplicates, written in curly braces.", example: "unique = {1, 2, 3, 2}  # → {1, 2, 3}" },
  { term: "Index", category: "Data Structures", definition: "The position of an item in a list. Python counts from 0.", example: "fruits[0]  # → 'apple'" },

  // Functions
  { term: "Function", category: "Functions", definition: "A reusable block of code that does a specific task. Defined with def.", example: "def greet(name):\n    print(\"Hi\", name)" },
  { term: "Parameter", category: "Functions", definition: "A variable listed in a function's definition that receives a value when called.", example: "def greet(name):  # name is a parameter" },
  { term: "Argument", category: "Functions", definition: "The actual value you pass to a function when calling it.", example: "greet(\"Anu\")  # \"Anu\" is the argument" },
  { term: "Return", category: "Functions", definition: "Sends a value back from a function to wherever it was called.", example: "def add(a, b):\n    return a + b" },
  { term: "Scope", category: "Functions", definition: "Where a variable can be seen and used. Variables inside a function are local.", example: "# x inside a function can't be used outside it" },

  // OOP
  { term: "Class", category: "OOP", definition: "A blueprint for creating objects. Defines their attributes and methods.", example: "class Dog:\n    def bark(self):\n        print(\"Woof!\")" },
  { term: "Object", category: "OOP", definition: "An instance of a class — a real 'thing' created from the blueprint.", example: "my_dog = Dog()" },
  { term: "Method", category: "OOP", definition: "A function that belongs to a class and can access its data.", example: "my_dog.bark()" },
  { term: "Attribute", category: "OOP", definition: "A variable that belongs to an object, describing its properties.", example: "my_dog.name = \"Bruno\"" },

  // Libraries
  { term: "Library", category: "Libraries", definition: "A collection of pre-written code you can import and use in your programs.", example: "import random" },
  { term: "Module", category: "Libraries", definition: "A single Python file that contains functions, classes, or variables you can import.", example: "import math\nmath.sqrt(16)" },
  { term: "NumPy", category: "Libraries", definition: "A library for fast mathematical operations on large arrays of numbers.", example: "import numpy as np\nnp.mean([1, 2, 3])" },
  { term: "Pandas", category: "Libraries", definition: "A library for working with tabular data — like spreadsheets — using DataFrames.", example: "import pandas as pd\ndf = pd.DataFrame(data)" },
  { term: "Matplotlib", category: "Libraries", definition: "A library for creating charts and graphs in Python.", example: "import matplotlib.pyplot as plt\nplt.plot(x, y)" },

  // AI / ML
  { term: "Machine Learning", category: "AI / ML", definition: "A type of AI where computers learn patterns from data instead of being told exact rules.", example: "# Show the model thousands of cat photos → it learns what a cat looks like" },
  { term: "Model", category: "AI / ML", definition: "The result of training an algorithm on data. It can then make predictions on new data.", example: "# A spam filter is a trained model" },
  { term: "Training data", category: "AI / ML", definition: "The dataset used to teach a machine learning model.", example: "# Thousands of emails labelled 'spam' or 'not spam'" },
  { term: "Feature", category: "AI / ML", definition: "An individual measurable property used as input to a machine learning model.", example: "# Email features: word count, sender, subject line" },
  { term: "Label", category: "AI / ML", definition: "The correct answer for a training example that the model is trying to predict.", example: "# 'spam' or 'not spam' are labels" },
  { term: "API", category: "AI / ML", definition: "Application Programming Interface — a way for your code to talk to another service over the internet.", example: "# OpenAI API lets you send a message and get a reply from GPT" },
  { term: "LLM", category: "AI / ML", definition: "Large Language Model — an AI trained on massive amounts of text that can understand and generate language. ChatGPT is an example.", example: "# GPT-4, Claude, Gemini are all LLMs" },
  { term: "Prompt", category: "AI / ML", definition: "The message or instruction you send to an LLM to get a response.", example: "\"Explain machine learning in simple terms\"" },
  { term: "System prompt", category: "AI / ML", definition: "A hidden instruction given to an LLM at the start that shapes its personality and behaviour.", example: "\"You are a helpful, friendly tutor for beginners.\"" },
  { term: "Token", category: "AI / ML", definition: "A chunk of text (roughly a word or word-part) that LLMs process. APIs charge per token.", example: "# \"Hello world\" = ~2 tokens" },
];

const CATEGORIES = ["All", ...Array.from(new Set(TERMS.map((t) => t.category)))];
const CATEGORY_COLORS: Record<string, string> = {
  Fundamentals: "bg-rose-100 text-rose-600 border-rose-200",
  "Control Flow": "bg-purple-100 text-purple-600 border-purple-200",
  "Data Structures": "bg-blue-100 text-blue-600 border-blue-200",
  Functions: "bg-green-100 text-green-600 border-green-200",
  OOP: "bg-orange-100 text-orange-600 border-orange-200",
  Libraries: "bg-cyan-100 text-cyan-600 border-cyan-200",
  "AI / ML": "bg-yellow-100 text-yellow-700 border-yellow-200",
};

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return TERMS.filter((t) => {
      const matchesCat = activeCategory === "All" || t.category === activeCategory;
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        (t.example ?? "").toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 border-b border-rose-200 px-4 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-5xl mb-3">📖</div>
          <h1 className="font-serif text-3xl sm:text-4xl text-rose-500 mb-2">Coding Glossary</h1>
          <p className="text-soft-rose text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Every programming word you'll encounter on your journey — explained simply.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative max-w-md mx-auto mt-6"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-300 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any term or keyword…"
            className="w-full pl-10 pr-10 py-3 rounded-full border-2 border-rose-200 bg-white/80 text-sm text-text-rose placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-all shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-rose-300 hover:text-rose-500"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                  : "bg-white text-soft-rose border-rose-200 hover:border-rose-300 hover:text-rose-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-soft-rose mb-4">
          {filtered.length} term{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {query ? ` matching "${query}"` : ""}
        </p>

        {/* Terms grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-soft-rose">No terms found. Try a different search!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((term, i) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white rounded-2xl border border-rose-100 p-4 shadow-sm hover:border-rose-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-base text-rose-500 font-semibold leading-tight">{term.term}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold flex-shrink-0 ${CATEGORY_COLORS[term.category] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                    {term.category}
                  </span>
                </div>
                <p className="text-xs text-soft-rose leading-relaxed mb-2">{term.definition}</p>
                {term.example && (
                  <pre className="bg-[#1e1e2e] rounded-lg px-3 py-2 text-[11px] text-[#cdd6f4] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                    {term.example}
                  </pre>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
