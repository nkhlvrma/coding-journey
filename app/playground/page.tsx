"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import CodeEditor from "@/components/CodeEditor";

const EXAMPLES = [
  {
    label: "Hello World",
    code: `# Your first Python program!
print("Hello, World!")
print("My name is Anu 🌸")`,
  },
  {
    label: "Variables",
    code: `# Variables store information
name = "Anu"
age = 25
is_learning = True

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Learning Python: {is_learning}")`,
  },
  {
    label: "Lists & Loops",
    code: `# Lists hold multiple items
fruits = ["apple", "mango", "strawberry", "cherry"]

# Loop through each item
for fruit in fruits:
    print(f"I love {fruit}! 🍓")

print(f"\\nTotal fruits: {len(fruits)}")`,
  },
  {
    label: "Functions",
    code: `# Functions are reusable blocks of code
def greet(name, emoji="🌸"):
    return f"Hello, {name}! {emoji}"

def add(a, b):
    return a + b

print(greet("Anu"))
print(greet("World", "✨"))
print(f"5 + 3 = {add(5, 3)}")`,
  },
  {
    label: "Blank",
    code: `# Write your own code here!
`,
  },
];

export default function PlaygroundPage() {
  const [selected, setSelected] = useState(0);
  const [key, setKey] = useState(0);

  const loadExample = (idx: number) => {
    setSelected(idx);
    setKey((k) => k + 1); // remount editor with new starter code
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-50 to-purple-50 text-center px-4 py-10">
        <h1 className="font-serif text-2xl sm:text-4xl text-rose-500 mb-2">
          Python Playground 🐍✨
        </h1>
        <p className="text-soft-rose text-base max-w-lg mx-auto leading-relaxed">
          Write and run Python code right here in your browser — no installs needed!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Example selector */}
        <div className="mb-4">
          <p className="text-xs font-bold text-soft-rose uppercase tracking-wider mb-2">
            Quick start examples
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((ex, idx) => (
              <button
                key={ex.label}
                onClick={() => loadExample(idx)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all min-h-[40px] active:scale-95 ${
                  selected === idx
                    ? "bg-rose-500 text-white border-rose-500"
                    : "bg-white text-soft-rose border-rose-200 hover:bg-rose-50 hover:text-rose-500"
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editor */}
        <CodeEditor
          key={key}
          starterCode={EXAMPLES[selected].code}
        />

        {/* Tips */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {[
            { icon: "⌨️", tip: "Press ⌘↵ (or Ctrl+Enter) to run your code instantly" },
            { icon: "🔄", tip: "Click the reset button to go back to the starter code" },
            { icon: "💡", tip: "Try changing the examples — breaking things is how you learn!" },
          ].map((item) => (
            <div key={item.tip} className="bg-white border border-rose-100 rounded-xl p-3 flex gap-2 items-start text-xs text-soft-rose">
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <span>{item.tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
