export type Tag = {
  label: string;
  color: "pink" | "green" | "purple" | "blue" | "yellow";
};

export type Resource = {
  icon: string;
  label: string;
  url: string;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  resources: Resource[];
};

export type Phase = {
  id: string;
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
  lessons: Lesson[];
};

export type CodeTab = {
  id: string;
  label: string;
  code: string;
  explanation: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  correctFeedback: string;
  wrongFeedback: string;
};

export const phases: Phase[] = [
  {
    id: "phase-1",
    icon: "🖥️",
    iconBg: "bg-rose-100",
    title: "Phase 1 — Getting Comfortable with Computers",
    subtitle: "Before coding, let's make sure you feel at home with your machine",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Learn your way around the keyboard and mouse",
        description:
          "Practice typing, clicking, right-clicking, scrolling, and dragging. Knowing your tools makes everything faster later.",
        tags: [
          { label: "Beginner", color: "pink" },
          { label: "~1 week", color: "yellow" },
        ],
        resources: [
          {
            icon: "⌨️",
            label: "typing.com — free typing practice (fun lessons!)",
            url: "https://www.typing.com",
          },
          {
            icon: "🎯",
            label: "keybr.com — gets you typing faster",
            url: "https://www.keybr.com",
          },
        ],
      },
      {
        id: "lesson-1-2",
        title: "Understand files, folders, and your desktop",
        description:
          "Learn how to create folders, move files, rename things, and find stuff. Think of it like organising a messy room.",
        tags: [
          { label: "Beginner", color: "pink" },
          { label: "~2 days", color: "yellow" },
        ],
        resources: [
          {
            icon: "🏫",
            label: "GCF Global — Computer Basics (super friendly!)",
            url: "https://edu.gcfglobal.org/en/computerbasics/",
          },
        ],
      },
      {
        id: "lesson-1-3",
        title: "Get comfortable using a browser and the internet",
        description:
          "Search things on Google, open tabs, bookmark pages, and use YouTube. The internet is your best friend for learning.",
        tags: [
          { label: "Beginner", color: "pink" },
          { label: "~1 day", color: "yellow" },
        ],
        resources: [
          {
            icon: "🔍",
            label: "Google Search tips for beginners",
            url: "https://support.google.com/websearch/answer/134479",
          },
        ],
      },
      {
        id: "lesson-1-4",
        title: "Install Python on your computer",
        description:
          "Go to python.org, download Python 3, and install it. This is the language you'll learn! Don't worry, it's just a few clicks.",
        tags: [
          { label: "Setup", color: "pink" },
          { label: "~30 mins", color: "yellow" },
        ],
        resources: [
          {
            icon: "🐍",
            label: "python.org/downloads — official download page",
            url: "https://www.python.org/downloads/",
          },
          {
            icon: "▶️",
            label: "YouTube — \"How to install Python\" (5 min video)",
            url: "https://www.youtube.com/watch?v=YYXdXT2l-Gg",
          },
        ],
      },
      {
        id: "lesson-1-5",
        title: "Install VS Code — your coding home",
        description:
          "VS Code is a free app where you'll write all your code. It's like a fancy notebook for programmers — and it has a pink theme too!",
        tags: [
          { label: "Setup", color: "pink" },
          { label: "~20 mins", color: "yellow" },
        ],
        resources: [
          {
            icon: "💻",
            label: "code.visualstudio.com — free download",
            url: "https://code.visualstudio.com",
          },
          {
            icon: "🎨",
            label: "\"Synthwave '84\" or \"One Dark Pro\" — pretty themes",
            url: "https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode",
          },
        ],
      },
    ],
  },
  {
    id: "phase-2",
    icon: "🐍",
    iconBg: "bg-green-100",
    title: "Phase 2 — Python Basics",
    subtitle: "Python is the friendliest coding language — it almost reads like English",
    lessons: [
      {
        id: "lesson-2-1",
        title: 'Your very first program: "Hello World"',
        description:
          "Every coder's first program is printing \"Hello, World!\" to the screen. It's a tradition, and you'll do it in about 5 seconds.",
        tags: [
          { label: "Python", color: "green" },
          { label: "Day 1", color: "yellow" },
        ],
        resources: [
          {
            icon: "🐍",
            label: "Python.org official tutorial — The Informal Introduction",
            url: "https://docs.python.org/3/tutorial/introduction.html",
          },
        ],
      },
      {
        id: "lesson-2-2",
        title: "Variables — giving names to things",
        description:
          "A variable is just a box with a name. You put something in it, and you can use it later. Like: name = \"Anu\"",
        tags: [
          { label: "Python", color: "green" },
          { label: "Week 1", color: "yellow" },
        ],
        resources: [
          {
            icon: "📖",
            label: "W3Schools — Python Variables (beginner friendly)",
            url: "https://www.w3schools.com/python/python_variables.asp",
          },
        ],
      },
      {
        id: "lesson-2-3",
        title: "If / Else — making decisions in code",
        description:
          "Code can make choices! \"If it's raining, take an umbrella. Else, wear sunglasses.\" You'll write this kind of logic for everything.",
        tags: [
          { label: "Python", color: "green" },
          { label: "Week 1", color: "yellow" },
        ],
        resources: [
          {
            icon: "📖",
            label: "W3Schools — Python If...Else",
            url: "https://www.w3schools.com/python/python_conditions.asp",
          },
        ],
      },
      {
        id: "lesson-2-4",
        title: "Loops — repeating things without re-typing",
        description:
          "Instead of writing \"print\" 100 times, you can say \"do this 100 times\" in 2 lines. Loops are magical!",
        tags: [
          { label: "Python", color: "green" },
          { label: "Week 2", color: "yellow" },
        ],
        resources: [
          {
            icon: "📖",
            label: "W3Schools — Python For Loops",
            url: "https://www.w3schools.com/python/python_for_loops.asp",
          },
          {
            icon: "▶️",
            label: "YouTube — Python loops explained visually",
            url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ",
          },
        ],
      },
      {
        id: "lesson-2-5",
        title: "Functions — making reusable little machines",
        description:
          "A function is a mini-program inside your program. You define it once, call it whenever you need it.",
        tags: [
          { label: "Python", color: "green" },
          { label: "Week 2–3", color: "yellow" },
        ],
        resources: [
          {
            icon: "📖",
            label: "Real Python — Defining Functions",
            url: "https://realpython.com/defining-your-own-python-function/",
          },
        ],
      },
      {
        id: "lesson-2-6",
        title: "Lists and Dictionaries — storing lots of data",
        description:
          "A list is like a shopping list. A dictionary is like a contact book — a name mapped to a number. Both are super useful.",
        tags: [
          { label: "Python", color: "green" },
          { label: "Week 3", color: "yellow" },
        ],
        resources: [
          {
            icon: "🏅",
            label: "freeCodeCamp — Scientific Computing with Python (free!)",
            url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
          },
          {
            icon: "🎓",
            label: "CS50P — Harvard's free Python course (very beginner friendly)",
            url: "https://cs50.harvard.edu/python/",
          },
          {
            icon: "💻",
            label: "Codecademy Learn Python 3 (interactive)",
            url: "https://www.codecademy.com/learn/learn-python-3",
          },
        ],
      },
    ],
  },
  {
    id: "phase-3",
    icon: "🤖",
    iconBg: "bg-purple-100",
    title: "Phase 3 — AI & Machine Learning",
    subtitle: "The exciting part — teaching computers to think and learn",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Learn what AI and Machine Learning actually mean",
        description:
          "No code yet — just understand the big picture. What is a model? What is training? What is a dataset? You'll get a feel for the field first.",
        tags: [
          { label: "AI/ML", color: "purple" },
          { label: "Week 1", color: "yellow" },
        ],
        resources: [
          {
            icon: "🎓",
            label: "Elements of AI — free beginner AI course (no coding needed!)",
            url: "https://www.elementsofai.com",
          },
          {
            icon: "▶️",
            label: "YouTube — \"Machine Learning for Beginners\" (visual, fun)",
            url: "https://www.youtube.com/watch?v=mJeNghZXtMo",
          },
        ],
      },
      {
        id: "lesson-3-2",
        title: "Learn NumPy and Pandas — working with data",
        description:
          "Before ML, you need to handle data. NumPy handles numbers, Pandas handles tables (like Excel, but in Python). These are everywhere in AI.",
        tags: [
          { label: "AI/ML", color: "purple" },
          { label: "Libraries", color: "blue" },
          { label: "Month 2", color: "yellow" },
        ],
        resources: [
          {
            icon: "🐼",
            label: "Kaggle — free Pandas course (interactive!)",
            url: "https://www.kaggle.com/learn/pandas",
          },
          {
            icon: "📖",
            label: "NumPy official quickstart tutorial",
            url: "https://numpy.org/doc/stable/user/quickstart.html",
          },
        ],
      },
      {
        id: "lesson-3-3",
        title: "Matplotlib — drawing graphs from data",
        description:
          "Visualising data is huge in AI/ML. You'll learn to make pretty charts and graphs from your data with just a few lines of code.",
        tags: [
          { label: "AI/ML", color: "purple" },
          { label: "Libraries", color: "blue" },
          { label: "Month 2", color: "yellow" },
        ],
        resources: [
          {
            icon: "📊",
            label: "Matplotlib official tutorials — beginner friendly",
            url: "https://matplotlib.org/stable/tutorials/index.html",
          },
        ],
      },
      {
        id: "lesson-3-4",
        title: "Scikit-learn — your first machine learning models",
        description:
          "This library lets you train your first real ML models! You'll build things like \"predict house prices\" or \"is this email spam?\" — without writing ML math yourself.",
        tags: [
          { label: "AI/ML", color: "purple" },
          { label: "Libraries", color: "blue" },
          { label: "Month 3", color: "yellow" },
        ],
        resources: [
          {
            icon: "🤖",
            label: "Kaggle — Intro to Machine Learning (free, beginner!)",
            url: "https://www.kaggle.com/learn/intro-to-machine-learning",
          },
          {
            icon: "📖",
            label: "Scikit-learn official tutorial",
            url: "https://scikit-learn.org/stable/tutorial/basic/tutorial.html",
          },
        ],
      },
      {
        id: "lesson-3-5",
        title: "Deep Learning with TensorFlow or PyTorch",
        description:
          "This is the \"deep\" end of AI — neural networks, the technology behind ChatGPT and image recognition. It's advanced but very exciting!",
        tags: [
          { label: "AI/ML", color: "purple" },
          { label: "Advanced", color: "blue" },
          { label: "Month 4–6", color: "yellow" },
        ],
        resources: [
          {
            icon: "🧠",
            label: "TensorFlow Tutorials — official, beginner-friendly",
            url: "https://www.tensorflow.org/tutorials",
          },
          {
            icon: "🚀",
            label: "fast.ai — free deep learning course (amazing!)",
            url: "https://course.fast.ai",
          },
        ],
      },
      {
        id: "lesson-3-6",
        title: "Build your first real AI project!",
        description:
          "Pick something you care about — a sentiment analyser, an image classifier, a chatbot — and build it. Your first real project is the most important milestone.",
        tags: [
          { label: "AI/ML", color: "purple" },
          { label: "Milestone", color: "pink" },
          { label: "Month 6+", color: "yellow" },
        ],
        resources: [
          {
            icon: "🏆",
            label: "Kaggle Competitions — join beginner competitions for practice",
            url: "https://www.kaggle.com/competitions",
          },
          {
            icon: "💡",
            label: "Hugging Face — explore pre-built AI models",
            url: "https://huggingface.co",
          },
        ],
      },
    ],
  },
  {
    id: "phase-4",
    icon: "📊",
    iconBg: "bg-blue-100",
    title: "Phase 4 — Data Analysis",
    subtitle: "Turn raw numbers into beautiful charts and real insights",
    lessons: [
      {
        id: "lesson-4-1",
        title: "What is data analysis, and why does it matter?",
        description:
          "Before writing code, understand what data analysts actually do and why Python is the #1 tool for it. You'll see how data powers every app, business, and AI system.",
        tags: [
          { label: "Data", color: "blue" },
          { label: "Concepts", color: "yellow" },
        ],
        resources: [
          {
            icon: "📖",
            label: "Kaggle — What is Data Analysis? (beginner guide)",
            url: "https://www.kaggle.com/learn/data-visualization",
          },
        ],
      },
      {
        id: "lesson-4-2",
        title: "NumPy — crunching numbers fast",
        description:
          "NumPy lets you work with huge lists of numbers at lightning speed. It's the foundation of almost all data science and AI in Python.",
        tags: [
          { label: "Data", color: "blue" },
          { label: "NumPy", color: "green" },
          { label: "Libraries", color: "yellow" },
        ],
        resources: [
          {
            icon: "📖",
            label: "NumPy official quickstart — highly readable",
            url: "https://numpy.org/doc/stable/user/quickstart.html",
          },
          {
            icon: "🎓",
            label: "Kaggle — NumPy exercises (hands-on!)",
            url: "https://www.kaggle.com/learn/intro-to-programming",
          },
        ],
      },
      {
        id: "lesson-4-3",
        title: "Pandas — spreadsheets, but in Python",
        description:
          "Pandas lets you load, filter, sort, and transform data like a supercharged Excel. You'll use it in almost every data project you ever build.",
        tags: [
          { label: "Data", color: "blue" },
          { label: "Pandas", color: "green" },
          { label: "Libraries", color: "yellow" },
        ],
        resources: [
          {
            icon: "🐼",
            label: "Kaggle — free Pandas course (interactive!)",
            url: "https://www.kaggle.com/learn/pandas",
          },
          {
            icon: "📖",
            label: "Pandas official 10-minute intro",
            url: "https://pandas.pydata.org/docs/user_guide/10min.html",
          },
        ],
      },
      {
        id: "lesson-4-4",
        title: "Matplotlib — turning data into beautiful charts",
        description:
          "A picture is worth a thousand numbers. Learn to create line charts, bar charts, and scatter plots that make your data tell a story.",
        tags: [
          { label: "Data", color: "blue" },
          { label: "Charts", color: "purple" },
          { label: "Libraries", color: "yellow" },
        ],
        resources: [
          {
            icon: "📊",
            label: "Matplotlib — official beginner tutorials",
            url: "https://matplotlib.org/stable/tutorials/index.html",
          },
          {
            icon: "🎓",
            label: "Kaggle — Data Visualisation course (free)",
            url: "https://www.kaggle.com/learn/data-visualization",
          },
        ],
      },
      {
        id: "lesson-4-5",
        title: "Mini project — analyse a real dataset",
        description:
          "Put it all together: load a real-world dataset, clean it with Pandas, and visualise what you find with Matplotlib. This is exactly what data scientists do every day.",
        tags: [
          { label: "Data", color: "blue" },
          { label: "Project", color: "pink" },
          { label: "Milestone", color: "yellow" },
        ],
        resources: [
          {
            icon: "🏆",
            label: "Kaggle Datasets — thousands of free real-world datasets",
            url: "https://www.kaggle.com/datasets",
          },
          {
            icon: "💡",
            label: "Google Colab — free cloud notebook to run your code",
            url: "https://colab.research.google.com",
          },
        ],
      },
    ],
  },
  {
    id: "phase-5",
    icon: "💬",
    iconBg: "bg-yellow-100",
    title: "Phase 5 — Build a Chatbot",
    subtitle: "Create your own AI-powered chatbot from scratch",
    lessons: [
      {
        id: "lesson-5-1",
        title: "How chatbots work — from rules to AI",
        description:
          "Understand the two types of chatbots: rule-based (follows scripts) and AI-powered (understands natural language). You'll learn what makes modern chatbots like ChatGPT so impressive.",
        tags: [
          { label: "Chatbot", color: "yellow" },
          { label: "Concepts", color: "purple" },
        ],
        resources: [
          {
            icon: "📖",
            label: "IBM — What is a chatbot? (clear explainer)",
            url: "https://www.ibm.com/topics/chatbots",
          },
        ],
      },
      {
        id: "lesson-5-2",
        title: "Build a rule-based chatbot in Python",
        description:
          "Your first chatbot! It will respond to messages using if/else logic. Simple, but a great way to see how conversations are structured in code.",
        tags: [
          { label: "Chatbot", color: "yellow" },
          { label: "Python", color: "green" },
          { label: "Project", color: "pink" },
        ],
        resources: [
          {
            icon: "📖",
            label: "Real Python — Build a Chatbot in Python",
            url: "https://realpython.com/build-a-chatbot-python-chatterbot/",
          },
        ],
      },
      {
        id: "lesson-5-3",
        title: "Introduction to the OpenAI API",
        description:
          "Learn to use the same API that powers ChatGPT. You'll send messages to GPT and get intelligent responses back — with just a few lines of Python.",
        tags: [
          { label: "Chatbot", color: "yellow" },
          { label: "AI/ML", color: "purple" },
          { label: "API", color: "blue" },
        ],
        resources: [
          {
            icon: "🤖",
            label: "OpenAI API documentation — quickstart",
            url: "https://platform.openai.com/docs/quickstart",
          },
          {
            icon: "▶️",
            label: "YouTube — OpenAI API for Beginners",
            url: "https://www.youtube.com/watch?v=pGOyw_M1mNE",
          },
        ],
      },
      {
        id: "lesson-5-4",
        title: "Build an AI chatbot with memory",
        description:
          "Level up your chatbot so it remembers what was said earlier in the conversation. This is how ChatGPT keeps context — and you'll build the same thing.",
        tags: [
          { label: "Chatbot", color: "yellow" },
          { label: "AI/ML", color: "purple" },
          { label: "Project", color: "pink" },
        ],
        resources: [
          {
            icon: "📖",
            label: "OpenAI — Chat completions guide",
            url: "https://platform.openai.com/docs/guides/chat-completions",
          },
        ],
      },
      {
        id: "lesson-5-5",
        title: "Give your chatbot a personality 🌸",
        description:
          "Customise your chatbot with a system prompt so it has a name, a tone, and a purpose. Build something uniquely yours — a study buddy, a recipe assistant, anything!",
        tags: [
          { label: "Chatbot", color: "yellow" },
          { label: "Project", color: "pink" },
          { label: "Milestone", color: "purple" },
        ],
        resources: [
          {
            icon: "💡",
            label: "OpenAI Prompt Engineering guide",
            url: "https://platform.openai.com/docs/guides/prompt-engineering",
          },
          {
            icon: "🚀",
            label: "Streamlit — make your chatbot a real web app for free",
            url: "https://streamlit.io",
          },
        ],
      },
    ],
  },
];

export const codeTabs: CodeTab[] = [
  {
    id: "hello",
    label: "Hello World",
    code: `# My very first Python program! 🌸
print("Hello, World!")
print("My name is Anu and I am learning to code!")`,
    explanation:
      '<strong>What\'s happening?</strong><br/><code>print()</code> is a built-in Python function that displays text on the screen. Anything inside the quotes <code>" "</code> is just text — it can say anything you want! Try changing it to your name.',
  },
  {
    id: "variables",
    label: "Variables",
    code: `# Variables are like labelled boxes 📦
name = "Anu"
age  = 21
love_coding = True

print("Hi, I'm", name)
print("I am", age, "years old")
print("Do I love coding?", love_coding)

# Output:
# Hi, I'm Anu
# I am 21 years old
# Do I love coding? True`,
    explanation:
      "We created three variables: a text (called a <strong>string</strong>), a number, and a <strong>boolean</strong> (True/False). The <code>=</code> sign means \"store this value in this box\". No math here!",
  },
  {
    id: "loops",
    label: "Loops",
    code: `# Loops repeat things automatically 🔁
for i in range(5):
    print("I love Python! 🌸")

# Output (printed 5 times!):
# I love Python! 🌸
# I love Python! 🌸
# I love Python! 🌸
# I love Python! 🌸
# I love Python! 🌸`,
    explanation:
      "<code>for i in range(5)</code> means \"do this 5 times\". The indented line (shifted right by 4 spaces) is what gets repeated. Indentation is <strong>very important</strong> in Python — it's how Python knows what belongs inside the loop!",
  },
  {
    id: "functions",
    label: "Functions",
    code: `# Functions are reusable mini-programs 🧩
def greet(name):
    print("Hello,", name, "🌷")

greet("Anu")
greet("everyone")
greet("the world")

# Hello, Anu 🌷
# Hello, everyone 🌷
# Hello, the world 🌷`,
    explanation:
      "<code>def</code> defines (creates) a function. We named it <code>greet</code>, and it takes one input called <code>name</code>. We call it 3 times with different names — and each time it does its thing. Write once, use forever!",
  },
  {
    id: "lists",
    label: "Lists",
    code: `# Lists store multiple items 📋
fruits = ["apple", "mango", "banana"]

for fruit in fruits:
    print("I love", fruit, "🍎")

# Add to a list
fruits.append("strawberry")
print("My fav:", fruits[-1])  # Last item

# Output:
# I love apple 🍎
# I love mango 🍎
# I love banana 🍎
# My fav: strawberry`,
    explanation:
      "A list is like a shopping list in square brackets <code>[ ]</code>. You can loop through it, add items with <code>.append()</code>, and access any item by its position number (starting from 0).",
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What does print() do in Python?",
    options: [
      "It prints your screen on paper",
      "It shows text on the screen",
      "It deletes a file",
      "It creates a variable",
    ],
    correctIndex: 1,
    correctFeedback: "Correct! 🌸 print() displays text or values on the screen.",
    wrongFeedback: "Not quite! print() displays text on the screen — not paper!",
  },
  {
    id: "q2",
    question: "What is a variable?",
    options: [
      "A type of loop",
      "A coding error",
      "A named box that stores a value",
      "A Python function",
    ],
    correctIndex: 2,
    correctFeedback:
      "Yes! 💕 A variable is like a labelled box — it stores a value you can use later.",
    wrongFeedback: "Not quite! A variable is a named box that stores a value.",
  },
  {
    id: "q3",
    question: 'What does this code do?\nfor i in range(3): print("Hi")',
    options: [
      "Prints 'Hi' once",
      "Prints 'Hi' 3 times",
      "Creates a function called Hi",
      "Nothing — it's wrong",
    ],
    correctIndex: 1,
    correctFeedback:
      "Spot on! ✨ range(3) means 0,1,2 — three times — so it prints 'Hi' three times.",
    wrongFeedback: "range(3) gives 3 iterations, so it prints 'Hi' three times!",
  },
  {
    id: "q4",
    question: "Which of these is a correct Python string?",
    options: ["hello", '"hello"', "print hello", "123hello"],
    correctIndex: 1,
    correctFeedback: "Perfect! 🎉 Strings (text) in Python are always wrapped in quotes.",
    wrongFeedback: 'Strings in Python need quotes around them — like "hello".',
  },
  {
    id: "q5",
    question: "What keyword do you use to define a function in Python?",
    options: ["function", "make", "def", "create"],
    correctIndex: 2,
    correctFeedback: "Brilliant! 🌷 def is the keyword — short for 'define'.",
    wrongFeedback: "In Python, you use def to define a function — like: def my_function():",
  },
  {
    id: "q6",
    question: "What is Machine Learning?",
    options: [
      "Teaching a computer to play music",
      "A type of keyboard shortcut",
      "Teaching computers to learn patterns from data",
      "A Python error",
    ],
    correctIndex: 2,
    correctFeedback:
      "Yes! 🤖 Machine Learning is about teaching computers to find patterns and make decisions from data.",
    wrongFeedback:
      "Machine Learning = teaching computers to find patterns in data and make decisions!",
  },
  {
    id: "q7",
    question: "Which symbol is used to assign a value to a variable in Python?",
    options: ["==", "=>", "=", ":="],
    correctIndex: 2,
    correctFeedback: "Correct! 🌸 A single = assigns a value. == is used to compare.",
    wrongFeedback: "A single = assigns a value. Double == is for comparing!",
  },
  {
    id: "q8",
    question: "What is a list in Python?",
    options: [
      "A single number",
      "A collection of items in order",
      "A type of if statement",
      "A way to define a function",
    ],
    correctIndex: 1,
    correctFeedback: "Yes! 💕 A list holds multiple items in order — like [1, 2, 3] or ['a', 'b', 'c'].",
    wrongFeedback: "A list is a collection of ordered items, like ['apple', 'mango', 'banana'].",
  },
];

export const motivationalQuotes = [
  '"Every expert was once a beginner."',
  '"The secret to getting ahead is getting started." — Mark Twain',
  '"It\'s not about being the best. It\'s about being better than you were yesterday."',
  '"In the middle of every difficulty lies opportunity." — Einstein',
  '"You are braver than you believe, stronger than you seem, and smarter than you think."',
  '"The best time to start was yesterday. The second best time is now."',
  '"Fall in love with the process and the results will come."',
  '"She believed she could, so she did." 🌸',
];

export const allLessonIds = phases.flatMap((p) => p.lessons.map((l) => l.id));
