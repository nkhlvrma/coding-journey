export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "code"; code: string; language?: string }
  | { type: "tip"; content: string }
  | { type: "warning"; content: string }
  | { type: "steps"; steps: string[] };

export type LessonContent = {
  id: string;
  objectives: string[];
  sections: { heading: string; blocks: ContentBlock[] }[];
  exercise: {
    prompt: string;
    starterCode: string;
    solutionCode: string;
    hints: string[];
    hasCodeEditor: boolean;
  };
  keyTakeaways: string[];
};

export const lessonContent: Record<string, LessonContent> = {

  // ── Phase 1 ──────────────────────────────────────────────

  "lesson-1-1": {
    id: "lesson-1-1",
    objectives: [
      "Navigate your computer using only a keyboard",
      "Type at a comfortable, consistent speed",
      "Use common keyboard shortcuts to work faster",
    ],
    sections: [
      {
        heading: "Why this matters",
        blocks: [
          { type: "text", content: "Before writing any code, you need to feel at home with your keyboard. Programmers type a LOT — not just words, but symbols like `{`, `}`, `(`, `)`, `:`, and `=`. The faster and more accurately you type, the more you can focus on thinking rather than hunting for keys." },
          { type: "tip", content: "Aim for 40+ words per minute before moving on. Don't rush — accuracy first, speed will come naturally." },
        ],
      },
      {
        heading: "Essential keyboard shortcuts",
        blocks: [
          { type: "text", content: "These shortcuts work in almost every app on your computer. Learning them now will save you hours later:" },
          { type: "steps", steps: [
            "**Copy** — Cmd+C (Mac) / Ctrl+C (Windows): Copy selected text",
            "**Paste** — Cmd+V / Ctrl+V: Paste what you copied",
            "**Undo** — Cmd+Z / Ctrl+Z: Undo your last action (use this freely!)",
            "**Save** — Cmd+S / Ctrl+S: Save your file",
            "**Select All** — Cmd+A / Ctrl+A: Select all text",
            "**Find** — Cmd+F / Ctrl+F: Search for text on a page",
            "**New Tab** — Cmd+T / Ctrl+T: Open a new browser tab",
            "**Close Tab** — Cmd+W / Ctrl+W: Close current tab",
          ]},
          { type: "tip", content: "Practice these right now! Open a text editor, type something, select it with Cmd+A, copy with Cmd+C, then paste with Cmd+V. Do it 10 times until it feels natural." },
        ],
      },
      {
        heading: "Touch typing basics",
        blocks: [
          { type: "text", content: "Touch typing means typing without looking at the keyboard. Your fingers rest on the 'home row': **A S D F** for the left hand, **J K L ;** for the right hand. The little bumps on F and J help you find your position without looking." },
          { type: "text", content: "Each finger is responsible for specific keys. It feels slow at first, but within 2–3 weeks of daily practice you'll be faster than before — and you'll never have to look down again." },
          { type: "warning", content: "Don't skip this step! Many beginner programmers regret not learning touch typing early. It makes everything easier." },
        ],
      },
    ],
    exercise: {
      prompt: "Practice time! Open typing.com or keybr.com in a new tab and complete one full lesson. Come back and mark this lesson complete when you're done.",
      starterCode: "",
      solutionCode: "",
      hints: [],
      hasCodeEditor: false,
    },
    keyTakeaways: [
      "The home row (ASDF / JKL;) is the foundation of touch typing",
      "Keyboard shortcuts like Cmd+Z, Cmd+S, Cmd+C are used constantly in coding",
      "15 minutes of daily typing practice is all you need to see improvement",
    ],
  },

  "lesson-1-2": {
    id: "lesson-1-2",
    objectives: [
      "Create, rename, move, and delete files and folders",
      "Understand the difference between a file and a folder",
      "Organise your computer like a tidy workspace",
    ],
    sections: [
      {
        heading: "Files vs Folders",
        blocks: [
          { type: "text", content: "Think of your computer like a filing cabinet. **Folders** are like the drawers and dividers — they hold and organise things. **Files** are the actual documents inside — they contain your data (text, images, code, etc.)." },
          { type: "text", content: "Files always have a **name** and an **extension** that tells the computer what type of file it is:" },
          { type: "steps", steps: [
            "`.txt` — plain text file",
            "`.py` — Python code file (this is what you'll be creating!)",
            "`.jpg` or `.png` — image files",
            "`.pdf` — PDF document",
            "`.html` — web page file",
          ]},
        ],
      },
      {
        heading: "Key file operations",
        blocks: [
          { type: "steps", steps: [
            "**Create a folder** — Right-click on the desktop or in a folder → 'New Folder'",
            "**Rename** — Click once to select, then press Enter (or right-click → Rename)",
            "**Move** — Drag and drop, or Cut (Cmd+X) then Paste (Cmd+V) in the new location",
            "**Delete** — Select it and press Delete/Backspace, or drag to Trash",
            "**Find a file** — Use Spotlight (Cmd+Space on Mac) or Windows Search",
          ]},
          { type: "tip", content: "Create a folder called 'My Coding Projects' on your Desktop right now. This is where all your future code will live!" },
        ],
      },
      {
        heading: "Good naming habits",
        blocks: [
          { type: "text", content: "Programmers are very picky about file names. Here's why:" },
          { type: "steps", steps: [
            "**No spaces** — use underscores or hyphens instead: `my_project` not `my project`",
            "**Lowercase** — `hello.py` not `Hello.py` (some systems are case-sensitive)",
            "**Be descriptive** — `temperature_converter.py` tells you what it does",
            "**No special characters** — avoid `!`, `@`, `#`, etc.",
          ]},
          { type: "warning", content: "Spaces in file names cause problems in programming. Get into the habit of using underscores now!" },
        ],
      },
    ],
    exercise: {
      prompt: "Create this folder structure on your computer:\n\n📁 coding_journey/\n  📁 phase_1_basics/\n  📁 phase_2_python/\n  📁 phase_3_ai/\n\nThen mark this lesson as complete.",
      starterCode: "",
      solutionCode: "",
      hints: [],
      hasCodeEditor: false,
    },
    keyTakeaways: [
      "Folders organise files; files contain data",
      "File extensions tell the computer (and you) what type of file it is",
      "Use lowercase, underscores, and descriptive names for coding files",
    ],
  },

  "lesson-1-3": {
    id: "lesson-1-3",
    objectives: [
      "Search the internet effectively for coding help",
      "Evaluate whether a website is trustworthy",
      "Use browser tabs and bookmarks efficiently",
    ],
    sections: [
      {
        heading: "The internet is your best teacher",
        blocks: [
          { type: "text", content: "Here's a secret: even experienced developers Google things constantly. The skill isn't memorising everything — it's knowing **how to search** for what you need and evaluating what you find." },
          { type: "tip", content: "When you're stuck on code, searching 'Python [your problem] example' almost always finds the answer within the first 3 results." },
        ],
      },
      {
        heading: "How to search like a developer",
        blocks: [
          { type: "steps", steps: [
            "**Be specific** — 'Python print variable' instead of 'how to show something'",
            "**Include the language** — always say 'Python' so you get Python answers",
            "**Add 'example'** — 'Python for loop example' gives you runnable code",
            "**Add 'beginner'** — filters out overly complex results",
            "**Use Stack Overflow** — the Q&A site where millions of coding questions are answered",
          ]},
          { type: "code", code: `# Good searches:
"Python print variable value"
"Python if else statement example"
"Python list how to add item"

# Great resource sites:
# - docs.python.org — official Python docs
# - w3schools.com — beginner friendly
# - stackoverflow.com — Q&A from real developers
# - realpython.com — tutorials written for humans`, language: "python" },
        ],
      },
      {
        heading: "Browser essentials",
        blocks: [
          { type: "steps", steps: [
            "**New tab** — Cmd+T: open multiple pages at once",
            "**Back / Forward** — Alt+Left / Alt+Right arrows",
            "**Refresh** — Cmd+R: reload the current page",
            "**Bookmark** — Cmd+D: save a page to come back to",
            "**Open link in new tab** — Cmd+click a link",
            "**Zoom in/out** — Cmd+Plus / Cmd+Minus",
          ]},
          { type: "tip", content: "Bookmark these sites right now: docs.python.org, w3schools.com/python, stackoverflow.com. You'll visit them hundreds of times." },
        ],
      },
    ],
    exercise: {
      prompt: "Do this search right now: 'Python print hello world tutorial' — read the first result and try to understand it. Then bookmark it. Mark this lesson complete when done.",
      starterCode: "",
      solutionCode: "",
      hints: [],
      hasCodeEditor: false,
    },
    keyTakeaways: [
      "Googling is a core developer skill — always include the language name in searches",
      "Stack Overflow, W3Schools, and the official Python docs are your best friends",
      "Browser shortcuts (Cmd+T, Cmd+D, Cmd+R) save significant time",
    ],
  },

  "lesson-1-4": {
    id: "lesson-1-4",
    objectives: [
      "Download and install Python 3 on your computer",
      "Verify Python is installed and working",
      "Run your first Python command in the terminal",
    ],
    sections: [
      {
        heading: "What is Python and why install it?",
        blocks: [
          { type: "text", content: "Python is the programming language you'll learn. When you write Python code (a `.py` file), your computer needs Python installed to be able to **read and run** that code. Think of it like this: a `.docx` file needs Microsoft Word to open it. A `.py` file needs Python." },
        ],
      },
      {
        heading: "Installation steps",
        blocks: [
          { type: "steps", steps: [
            "Go to **python.org/downloads** in your browser",
            "Click the big yellow 'Download Python 3.x.x' button",
            "Open the downloaded installer file",
            "**IMPORTANT**: Check the box that says 'Add Python to PATH' before clicking Install",
            "Click 'Install Now' and wait for it to finish",
            "Click 'Close' when done",
          ]},
          { type: "warning", content: "The 'Add Python to PATH' checkbox is critical! If you miss it, Python won't work from the terminal. If this happens, uninstall and reinstall Python." },
        ],
      },
      {
        heading: "Verify it's working",
        blocks: [
          { type: "text", content: "Open your **Terminal** (Mac: press Cmd+Space, type 'Terminal', press Enter) or **Command Prompt** (Windows: press Win+R, type 'cmd', press Enter). Then type:" },
          { type: "code", code: `python3 --version
# or on Windows:
python --version

# You should see something like:
# Python 3.12.0`, language: "python" },
          { type: "text", content: "If you see a version number, Python is installed! If you see an error, try the installation steps again with the PATH checkbox checked." },
          { type: "tip", content: "You can also type `python3` (or `python`) and press Enter to open an interactive Python session. Type `exit()` to leave it." },
        ],
      },
    ],
    exercise: {
      prompt: "1. Install Python following the steps above\n2. Open your terminal and run: python3 --version\n3. Then run: python3 and type: print('I installed Python!')\n4. Take a screenshot of the output — you did it! 🎉",
      starterCode: "",
      solutionCode: "",
      hints: [],
      hasCodeEditor: false,
    },
    keyTakeaways: [
      "Python must be installed on your computer to run .py files",
      "Always check 'Add Python to PATH' during installation",
      "The terminal lets you run Python commands directly",
    ],
  },

  "lesson-1-5": {
    id: "lesson-1-5",
    objectives: [
      "Download and install VS Code",
      "Open a folder in VS Code and create your first file",
      "Install the Python extension for VS Code",
    ],
    sections: [
      {
        heading: "What is VS Code?",
        blocks: [
          { type: "text", content: "VS Code (Visual Studio Code) is a free code editor made by Microsoft. It's where you'll write all your Python code. It's like a supercharged Notepad — it colours your code to make it easier to read, catches errors as you type, and has thousands of extensions to add features." },
          { type: "tip", content: "VS Code is used by millions of professional developers. Learning it now gives you the same tools the pros use." },
        ],
      },
      {
        heading: "Installation steps",
        blocks: [
          { type: "steps", steps: [
            "Go to **code.visualstudio.com** in your browser",
            "Click the big download button for your operating system",
            "Open the downloaded installer and follow the prompts",
            "Launch VS Code when the installation is done",
          ]},
        ],
      },
      {
        heading: "Essential setup",
        blocks: [
          { type: "steps", steps: [
            "**Install the Python extension**: Click the Extensions icon (4 squares) in the left sidebar, search 'Python', and install the one from Microsoft",
            "**Open your project folder**: File → Open Folder → select your 'coding_journey' folder",
            "**Create a new file**: Click the new file icon in the sidebar, name it 'hello.py'",
            "**Run the file**: Type `print('Hello!')`, save with Cmd+S, then click the ▶ Run button at the top right",
          ]},
          { type: "tip", content: "Install a fun theme! Go to Extensions, search 'One Dark Pro' or 'Dracula' — pretty colours make coding more enjoyable 🎨" },
        ],
      },
    ],
    exercise: {
      prompt: "1. Install VS Code\n2. Install the Python extension\n3. Open your coding_journey folder\n4. Create 'hello.py' and write: print('Hello from VS Code!')\n5. Run it and see the output in the terminal at the bottom",
      starterCode: "",
      solutionCode: "",
      hints: [],
      hasCodeEditor: false,
    },
    keyTakeaways: [
      "VS Code is a free, powerful code editor used by professional developers",
      "The Python extension adds syntax highlighting and the ability to run Python files",
      "You write code in .py files and run them with the ▶ button or in the terminal",
    ],
  },

  // ── Phase 2 ──────────────────────────────────────────────

  "lesson-2-1": {
    id: "lesson-2-1",
    objectives: [
      "Write and run your first Python program",
      "Understand what the print() function does",
      "Add comments to your code",
    ],
    sections: [
      {
        heading: "Your first line of Python",
        blocks: [
          { type: "text", content: "Every programmer's first program displays 'Hello, World!' on the screen. It's a tradition going back to the 1970s! In Python, it takes exactly one line:" },
          { type: "code", code: `print("Hello, World!")`, language: "python" },
          { type: "text", content: "`print()` is a **function** — a built-in Python command that displays something on the screen. Anything inside the brackets and between quotes is the text you want to display." },
        ],
      },
      {
        heading: "Understanding print()",
        blocks: [
          { type: "code", code: `# You can print anything!
print("Hello, World!")
print("My name is Anu")
print("I am learning Python 🐍")
print(42)
print(3.14)

# You can even do maths inside print
print(10 + 5)
print(100 - 37)`, language: "python" },
          { type: "text", content: "Notice how we can print text (called a **string**, written in quotes) or numbers (no quotes needed). Python handles both!" },
          { type: "tip", content: "Try changing the text in the exercise below. Python will show whatever you put in quotes — it doesn't judge!" },
        ],
      },
      {
        heading: "Comments — notes for yourself",
        blocks: [
          { type: "text", content: "A **comment** starts with `#` and Python completely ignores it. Comments are notes you write for yourself (or other programmers) to explain what code does." },
          { type: "code", code: `# This is a comment — Python ignores this line

print("Hello!")  # You can also put comments at the end of a line

# Comments help you remember what your code does
# when you come back to it weeks later`, language: "python" },
          { type: "tip", content: "Get into the habit of writing comments. Future-you will thank present-you!" },
        ],
      },
    ],
    exercise: {
      prompt: "Write a Python program that prints:\n1. Your name\n2. Your favourite food\n3. The result of 7 × 8 (use * for multiplication)\n\nAdd a comment above each print statement explaining what it does.",
      starterCode: `# My first Python program!

# Print my name
print("Anu")

# Print my favourite food


# Print 7 times 8
`,
      solutionCode: `# My first Python program!

# Print my name
print("Anu")

# Print my favourite food
print("Mango 🥭")

# Print 7 times 8
print(7 * 8)
`,
      hints: [
        "Text must be wrapped in quotes: print(\"your text here\")",
        "For multiplication, use the * symbol: print(7 * 8)",
        "Comments start with # and Python ignores them",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "print() displays text or values on the screen",
      "Text (strings) go in quotes; numbers don't need quotes",
      "Comments start with # and are ignored by Python — they're notes for humans",
    ],
  },

  "lesson-2-2": {
    id: "lesson-2-2",
    objectives: [
      "Create variables to store different types of data",
      "Understand strings, integers, floats, and booleans",
      "Use variables inside print() statements",
    ],
    sections: [
      {
        heading: "What is a variable?",
        blocks: [
          { type: "text", content: "A **variable** is like a labelled box. You put something in it (a value), give it a name, and then use that name whenever you need what's inside. Instead of typing the same value over and over, you store it once and refer to it by name." },
          { type: "code", code: `# Creating variables
name = "Anu"
age = 21
height = 5.4
is_learning = True

# Using them
print(name)       # Anu
print(age)        # 21
print(height)     # 5.4
print(is_learning)  # True`, language: "python" },
          { type: "text", content: "The `=` sign means **assignment** — 'put this value into this variable'. It's not the same as equals in maths!" },
        ],
      },
      {
        heading: "The 4 basic data types",
        blocks: [
          { type: "code", code: `# String (str) — text, always in quotes
name = "Anu"
greeting = 'Hello!'   # single or double quotes both work

# Integer (int) — whole numbers
age = 21
year = 2025

# Float — decimal numbers
height = 5.4
price = 9.99

# Boolean (bool) — True or False only (capital T and F!)
is_learning = True
is_done = False

# Check the type of anything with type()
print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(height))    # <class 'float'>
print(type(is_learning))  # <class 'bool'>`, language: "python" },
        ],
      },
      {
        heading: "Using variables in print()",
        blocks: [
          { type: "code", code: `name = "Anu"
age = 21
city = "Mumbai"

# Method 1: comma-separated (adds a space automatically)
print("Hi, I'm", name, "and I'm", age, "years old")

# Method 2: f-strings (the modern, preferred way!)
print(f"Hi, I'm {name} and I'm from {city}")
print(f"Next year I'll be {age + 1}")`, language: "python" },
          { type: "tip", content: "F-strings (the f before the quote) are the best way to mix variables and text. Just put variable names inside {} and Python fills them in!" },
          { type: "warning", content: "Variable names are case-sensitive! `name` and `Name` are two different variables. Stick to lowercase with underscores." },
        ],
      },
    ],
    exercise: {
      prompt: "Create variables for a person's profile and print a nice summary. Fill in your own details (or make someone up!).",
      starterCode: `# Create your profile variables
name = "Anu"
age = 21
city = "Mumbai"
favourite_food = "mango"
is_learning_python = True

# Print a profile summary using f-strings
# Make it say something like:
# "Name: Anu | Age: 21 | From: Mumbai"
# "Favourite food: mango"
# "Learning Python: True"
print(f"Name: {name} | Age: {age} | From: {city}")

`,
      solutionCode: `name = "Anu"
age = 21
city = "Mumbai"
favourite_food = "mango"
is_learning_python = True

print(f"Name: {name} | Age: {age} | From: {city}")
print(f"Favourite food: {favourite_food}")
print(f"Learning Python: {is_learning_python}")
print(f"In 5 years, {name} will be {age + 5} years old")
`,
      hints: [
        "Use f\"...{variable}...\" to embed variables in strings",
        "You can do maths inside {}: f\"Next year: {age + 1}\"",
        "Make sure strings are in quotes: favourite_food = \"mango\"",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Variables store values — strings, integers, floats, or booleans",
      "= means assignment: put this value in this box",
      "F-strings (f\"...\") are the best way to use variables inside text",
    ],
  },

  "lesson-2-3": {
    id: "lesson-2-3",
    objectives: [
      "Use if/elif/else to make decisions in code",
      "Compare values with ==, !=, >, <, >=, <=",
      "Combine conditions with and / or",
    ],
    sections: [
      {
        heading: "Making decisions",
        blocks: [
          { type: "text", content: "Code can choose what to do based on conditions — just like you do every day. 'If it's raining, take an umbrella. Otherwise, wear sunglasses.' In Python:" },
          { type: "code", code: `weather = "rainy"

if weather == "rainy":
    print("Take an umbrella! ☂️")
else:
    print("Wear your sunglasses! 😎")`, language: "python" },
          { type: "warning", content: "Indentation matters! The code inside an if block must be indented (4 spaces or 1 Tab). Python uses indentation to know what belongs inside the if." },
        ],
      },
      {
        heading: "Comparison operators",
        blocks: [
          { type: "code", code: `# == means "is equal to" (NOT the same as =)
print(5 == 5)    # True
print(5 == 6)    # False

# != means "is NOT equal to"
print(5 != 6)    # True

# > < >= <=
print(10 > 5)    # True
print(3 >= 3)    # True
print(2 < 1)     # False

# Comparing strings
name = "Anu"
print(name == "Anu")   # True
print(name == "anu")   # False — case sensitive!`, language: "python" },
        ],
      },
      {
        heading: "elif and else — multiple options",
        blocks: [
          { type: "code", code: `score = 75

if score >= 90:
    print("Outstanding! 🌟")
elif score >= 70:
    print("Great job! 👏")
elif score >= 50:
    print("Good effort! Keep going 💪")
else:
    print("Don't worry, keep practising! 💕")

# Combining conditions
age = 20
has_ticket = True

if age >= 18 and has_ticket:
    print("You can enter! 🎉")
elif age >= 18 and not has_ticket:
    print("You need a ticket first!")
else:
    print("Sorry, adults only!")`, language: "python" },
          { type: "tip", content: "You can have as many elif blocks as you want, but only one if and one else. Python checks them top to bottom and stops at the first True condition." },
        ],
      },
    ],
    exercise: {
      prompt: "Write a simple 'mood checker'. Based on the hours of sleep, print a different message:\n• 8+ hours → 'Fully charged! Ready to code! ⚡'\n• 6-7 hours → 'Pretty good! Let's go! 💪'\n• 4-5 hours → 'A bit tired... maybe a coffee? ☕'\n• Less than 4 → 'Please sleep more! 😴'",
      starterCode: `hours_of_sleep = 7

# Write your if/elif/else here
if hours_of_sleep >= 8:
    print("Fully charged! Ready to code! ⚡")

`,
      solutionCode: `hours_of_sleep = 7

if hours_of_sleep >= 8:
    print("Fully charged! Ready to code! ⚡")
elif hours_of_sleep >= 6:
    print("Pretty good! Let's go! 💪")
elif hours_of_sleep >= 4:
    print("A bit tired... maybe a coffee? ☕")
else:
    print("Please sleep more! 😴")
`,
      hints: [
        "Use >= for 'greater than or equal to'",
        "elif comes after if and before else",
        "Change hours_of_sleep to test different values",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "if/elif/else lets code make decisions based on conditions",
      "== compares values; = assigns values — don't mix them up!",
      "Indentation (4 spaces) is how Python knows what's inside an if block",
    ],
  },

  "lesson-2-4": {
    id: "lesson-2-4",
    objectives: [
      "Use for loops to repeat code automatically",
      "Loop over ranges of numbers and lists",
      "Use while loops for unknown repetitions",
    ],
    sections: [
      {
        heading: "Why loops?",
        blocks: [
          { type: "text", content: "Imagine you need to print 'Good morning!' 100 times. You could write `print()` 100 times... or you could use a loop and write it once. Loops are one of the most powerful ideas in programming." },
          { type: "code", code: `# Without a loop (bad!)
print("Good morning!")
print("Good morning!")
print("Good morning!")
# ... 97 more times 😩

# With a loop (great!)
for i in range(100):
    print("Good morning!")`, language: "python" },
        ],
      },
      {
        heading: "The for loop",
        blocks: [
          { type: "code", code: `# range(5) gives you: 0, 1, 2, 3, 4
for i in range(5):
    print(f"Count: {i}")

# Output:
# Count: 0
# Count: 1
# Count: 2
# Count: 3
# Count: 4

# range(start, stop) — start is included, stop is NOT
for i in range(1, 6):
    print(i)   # 1, 2, 3, 4, 5

# range(start, stop, step)
for i in range(0, 20, 5):
    print(i)   # 0, 5, 10, 15`, language: "python" },
          { type: "tip", content: "The variable `i` is just a convention — you can name it anything. `for num in range(10)` or `for count in range(10)` both work." },
        ],
      },
      {
        heading: "Looping over lists",
        blocks: [
          { type: "code", code: `fruits = ["apple", "mango", "strawberry", "peach"]

for fruit in fruits:
    print(f"I love {fruit}! 🍓")

# Output:
# I love apple! 🍓
# I love mango! 🍓
# I love strawberry! 🍓
# I love peach! 🍓

# Looping with the index too
for i, fruit in enumerate(fruits):
    print(f"{i+1}. {fruit}")`, language: "python" },
        ],
      },
      {
        heading: "The while loop",
        blocks: [
          { type: "code", code: `# while keeps going as long as the condition is True
count = 1

while count <= 5:
    print(f"Step {count}")
    count = count + 1   # or: count += 1

print("Done!")

# Output: Step 1, Step 2, Step 3, Step 4, Step 5, Done!`, language: "python" },
          { type: "warning", content: "Always make sure the while loop's condition will eventually become False. If it never does, you get an infinite loop — your program hangs forever!" },
        ],
      },
    ],
    exercise: {
      prompt: "Write a multiplication table! Use a for loop to print the 7 times table from 7×1 to 7×10.\nExpected output:\n7 x 1 = 7\n7 x 2 = 14\n...\n7 x 10 = 70",
      starterCode: `# Print the 7 times table using a for loop

for i in range(1, 11):
    result = 7 * i
    print(f"7 x {i} = {result}")
`,
      solutionCode: `for i in range(1, 11):
    result = 7 * i
    print(f"7 x {i} = {result}")
`,
      hints: [
        "range(1, 11) gives you 1 through 10",
        "Use * for multiplication: 7 * i",
        "Use an f-string: f\"7 x {i} = {7 * i}\"",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "for loops repeat code a set number of times or for each item in a list",
      "range(n) gives numbers 0 to n-1; range(a, b) gives a to b-1",
      "while loops keep going until a condition is False",
    ],
  },

  "lesson-2-5": {
    id: "lesson-2-5",
    objectives: [
      "Define and call your own functions",
      "Use parameters to pass data into functions",
      "Return values from functions",
    ],
    sections: [
      {
        heading: "What is a function?",
        blocks: [
          { type: "text", content: "A function is a named block of code that does one specific job. You define it once and call it as many times as you need. It's like a recipe — write it once, cook it whenever you want." },
          { type: "code", code: `# Defining a function
def greet():
    print("Hello! Welcome to Python! 🌸")

# Calling the function
greet()    # Hello! Welcome to Python! 🌸
greet()    # Hello! Welcome to Python! 🌸
greet()    # Hello! Welcome to Python! 🌸`, language: "python" },
          { type: "text", content: "`def` is short for 'define'. After `def`, write the function name, then `():`, then indent the body." },
        ],
      },
      {
        heading: "Parameters — giving functions inputs",
        blocks: [
          { type: "code", code: `# Function with one parameter
def greet(name):
    print(f"Hello, {name}! 🌷")

greet("Anu")        # Hello, Anu! 🌷
greet("everyone")   # Hello, everyone! 🌷
greet("world")      # Hello, world! 🌷

# Function with multiple parameters
def introduce(name, age, city):
    print(f"Hi! I'm {name}, {age} years old, from {city}.")

introduce("Anu", 21, "Mumbai")`, language: "python" },
        ],
      },
      {
        heading: "Return values — getting results back",
        blocks: [
          { type: "code", code: `# A function that calculates and RETURNS a value
def add(a, b):
    return a + b

result = add(5, 3)
print(result)          # 8
print(add(10, 20))     # 30
print(add(100, -5))    # 95

# More useful example
def make_greeting(name):
    greeting = f"Hello, {name}! Happy coding! 💻"
    return greeting

msg = make_greeting("Anu")
print(msg)    # Hello, Anu! Happy coding! 💻`, language: "python" },
          { type: "tip", content: "A function without `return` gives back `None`. A function with `return` gives back a value you can store or use directly." },
        ],
      },
    ],
    exercise: {
      prompt: "Write a function called `describe_pet` that takes a pet's name, type (dog/cat/etc), and age, then prints a description. Also write a function called `celsius_to_fahrenheit` that converts a temperature and returns the result.",
      starterCode: `# Function 1: Describe a pet
def describe_pet(name, pet_type, age):
    print(f"{name} is a {age}-year-old {pet_type}! 🐾")

describe_pet("Buddy", "dog", 3)
describe_pet("Luna", "cat", 2)

# Function 2: Temperature converter
def celsius_to_fahrenheit(celsius):
    # Formula: (celsius * 9/5) + 32
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Test it
print(celsius_to_fahrenheit(0))    # Should print 32.0
print(celsius_to_fahrenheit(100))  # Should print 212.0
`,
      solutionCode: `def describe_pet(name, pet_type, age):
    print(f"{name} is a {age}-year-old {pet_type}! 🐾")

describe_pet("Buddy", "dog", 3)
describe_pet("Luna", "cat", 2)

def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(100))
print(celsius_to_fahrenheit(37))   # body temperature
`,
      hints: [
        "def function_name(param1, param2): — note the colon at the end",
        "return sends a value back: return fahrenheit",
        "Call a function with: function_name(value1, value2)",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "def defines a function; () after the name holds parameters",
      "Parameters are the inputs a function needs to do its job",
      "return sends a value back to whoever called the function",
    ],
  },

  "lesson-2-6": {
    id: "lesson-2-6",
    objectives: [
      "Create and manipulate Python lists",
      "Use dictionaries to store key-value pairs",
      "Access, add, and remove items from both",
    ],
    sections: [
      {
        heading: "Lists — ordered collections",
        blocks: [
          { type: "text", content: "A list stores multiple values in order. It's like a shopping list — items have positions and you can add or remove them." },
          { type: "code", code: `# Creating a list
fruits = ["apple", "mango", "strawberry", "peach"]

# Accessing items (index starts at 0!)
print(fruits[0])   # apple (first item)
print(fruits[1])   # mango
print(fruits[-1])  # peach (last item — negative counts from end)

# List length
print(len(fruits))  # 4

# Adding items
fruits.append("banana")     # add to end
fruits.insert(0, "cherry")  # add at position 0

# Removing items
fruits.remove("apple")   # remove by value
fruits.pop()             # remove last item
fruits.pop(0)            # remove at index 0

# Looping over a list
for fruit in fruits:
    print(f"🍓 {fruit}")`, language: "python" },
        ],
      },
      {
        heading: "Dictionaries — key-value pairs",
        blocks: [
          { type: "text", content: "A dictionary maps **keys** to **values** — like a real dictionary maps words to definitions, or a contact book maps names to phone numbers." },
          { type: "code", code: `# Creating a dictionary
person = {
    "name": "Anu",
    "age": 21,
    "city": "Mumbai",
    "is_learning": True
}

# Accessing values by key
print(person["name"])   # Anu
print(person["age"])    # 21

# Adding / updating
person["hobby"] = "coding"
person["age"] = 22  # update existing

# Safe access with .get() (won't crash if key missing)
print(person.get("email", "no email"))  # no email

# Looping over a dictionary
for key, value in person.items():
    print(f"{key}: {value}")`, language: "python" },
          { type: "tip", content: "Keys must be unique in a dictionary. If you assign the same key twice, the second value overwrites the first." },
        ],
      },
    ],
    exercise: {
      prompt: "Create a dictionary representing your favourite movie, then write a function that prints a nicely formatted movie card. Also create a list of movies and loop through to print each one.",
      starterCode: `# Your favourite movie as a dictionary
movie = {
    "title": "Dilwale Dulhania Le Jayenge",
    "year": 1995,
    "director": "Aditya Chopra",
    "rating": 9.1,
    "genre": "Romance"
}

# Function to print a movie card
def print_movie_card(m):
    print("=" * 30)
    print(f"🎬 {m['title']} ({m['year']})")
    print(f"   Director: {m['director']}")
    print(f"   Genre: {m['genre']}")
    print(f"   Rating: {m['rating']}/10")
    print("=" * 30)

print_movie_card(movie)

# Bonus: list of movie titles and loop through them
watchlist = ["Lagaan", "3 Idiots", "Dangal", "PK"]
print("\\nMy watchlist:")
for i, title in enumerate(watchlist, 1):
    print(f"  {i}. {title}")
`,
      solutionCode: `movie = {
    "title": "Dilwale Dulhania Le Jayenge",
    "year": 1995,
    "director": "Aditya Chopra",
    "rating": 9.1,
    "genre": "Romance"
}

def print_movie_card(m):
    print("=" * 30)
    print(f"🎬 {m['title']} ({m['year']})")
    print(f"   Director: {m['director']}")
    print(f"   Genre: {m['genre']}")
    print(f"   Rating: {m['rating']}/10")
    print("=" * 30)

print_movie_card(movie)

watchlist = ["Lagaan", "3 Idiots", "Dangal", "PK"]
print("\\nMy watchlist:")
for i, title in enumerate(watchlist, 1):
    print(f"  {i}. {title}")
`,
      hints: [
        "Access dict values with dict[\"key\"] or dict.get(\"key\")",
        "enumerate(list, 1) gives you (1, item), (2, item)... starting from 1",
        "\\n in a string adds a new line",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Lists store ordered items; access by index starting at 0",
      "Dictionaries store key-value pairs; access by key name",
      "Use .append() for lists and dict[key] = value for dictionaries to add items",
    ],
  },

  // ── Phase 3 ──────────────────────────────────────────────

  "lesson-3-1": {
    id: "lesson-3-1",
    objectives: [
      "Understand the difference between AI, Machine Learning, and Deep Learning",
      "Know what training data, models, and predictions mean",
      "Recognise AI in everyday products you already use",
    ],
    sections: [
      {
        heading: "AI, ML, and Deep Learning — what's the difference?",
        blocks: [
          { type: "text", content: "These terms get thrown around together, but they're not the same thing. Think of them as nested circles:" },
          { type: "steps", steps: [
            "**AI (Artificial Intelligence)** — the broad idea of making computers smart. Anything that simulates human-like thinking. The biggest circle.",
            "**Machine Learning (ML)** — a subset of AI where computers learn from data, rather than being manually programmed with rules. Instead of telling a computer 'if the email has the word FREE in all caps, it's spam', you show it thousands of spam emails and let it figure out the pattern.",
            "**Deep Learning** — a subset of ML using neural networks inspired by the human brain. Powers things like ChatGPT, image recognition, and voice assistants. The most powerful and complex type.",
          ]},
        ],
      },
      {
        heading: "How Machine Learning actually works",
        blocks: [
          { type: "text", content: "A classic ML workflow has 4 steps:" },
          { type: "steps", steps: [
            "**Collect data** — gather lots of examples. For spam detection: thousands of spam emails and non-spam emails, all labelled.",
            "**Train a model** — feed the data to a learning algorithm. The model finds patterns: what words, sender patterns, etc. indicate spam.",
            "**Evaluate** — test the model on new emails it's never seen. How accurate is it?",
            "**Deploy & predict** — put the model in production. Every new email gets run through it for a spam/not-spam prediction.",
          ]},
          { type: "tip", content: "The model doesn't 'know' anything — it's a mathematical function that maps inputs (email text) to outputs (spam probability). It just got really good at this through training." },
        ],
      },
      {
        heading: "AI you already use every day",
        blocks: [
          { type: "steps", steps: [
            "**YouTube / Netflix recommendations** — ML analyses your watch history to predict what you'll like",
            "**Google Translate** — Deep Learning translates between 100+ languages",
            "**Face ID / Face unlock** — Deep Learning recognises your face",
            "**Autocorrect / Autocomplete** — ML predicts the next word you'll type",
            "**Spam filter** — ML classifies emails as spam or not",
            "**ChatGPT** — a very large Deep Learning model (LLM) trained on most of the internet",
          ]},
          { type: "code", code: `# What a simple ML prediction looks like in pseudocode:
# (You'll write real code like this in later lessons!)

# 1. Load a trained model
model = load_model("spam_classifier")

# 2. Give it new data to analyse
email = "CONGRATULATIONS! You've WON a FREE iPhone!"

# 3. Get a prediction
prediction = model.predict(email)
print(prediction)  # "spam" (with 98.5% confidence)`, language: "python" },
        ],
      },
    ],
    exercise: {
      prompt: "Think about 3 apps on your phone. For each one, write down:\n1. What AI feature it uses\n2. What data it probably trained on\n3. What prediction it makes\n\nJot your answers down — this builds your intuition for AI.",
      starterCode: `# Example:
# App: Spotify
# AI feature: Song recommendations
# Training data: Millions of users' listening history + song audio features
# Prediction: "You'll like this song next" (with some confidence score)

# Your turn! Think of 3 apps:
# App 1: ___
# AI feature: ___
# Training data: ___
# Prediction: ___
`,
      solutionCode: `# Example answers:

# App: Instagram
# AI feature: Feed ranking + Reels recommendations
# Training data: What posts you liked, saved, commented on, how long you watched each Reel
# Prediction: "This Reel will keep you watching" (engagement probability)

# App: Google Maps
# AI feature: Traffic prediction + ETA
# Training data: Historical traffic data from millions of phones + real-time GPS signals
# Prediction: "This route will take 23 minutes at current traffic"

# App: Duolingo
# AI feature: Lesson difficulty adaptation
# Training data: Which exercises cause mistakes for which users, learning patterns
# Prediction: "This user needs to repeat this topic" / "Ready to advance"
`,
      hints: [
        "Think about what makes the app personalised for YOU vs everyone else",
        "The 'input' to the AI is usually your behaviour data",
        "The 'output' is usually a ranking, recommendation, or classification",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "AI > Machine Learning > Deep Learning — each is a more specific subset",
      "ML learns patterns from data rather than following hand-written rules",
      "You already interact with dozens of ML models every day",
    ],
  },

  "lesson-3-2": {
    id: "lesson-3-2",
    objectives: [
      "Use NumPy to work with arrays of numbers",
      "Use Pandas to load and explore tabular data",
      "Calculate basic statistics (mean, max, min) on real data",
    ],
    sections: [
      {
        heading: "Why NumPy and Pandas?",
        blocks: [
          { type: "text", content: "Before you can train an ML model, you need to handle data. **NumPy** is Python's library for fast numerical computation — it handles arrays of numbers like a spreadsheet of numbers. **Pandas** is built on NumPy and adds tables (called DataFrames) — think of it as Python's version of Excel." },
          { type: "warning", content: "These libraries aren't installed by default. In your terminal, run: pip install numpy pandas" },
        ],
      },
      {
        heading: "NumPy arrays",
        blocks: [
          { type: "code", code: `import numpy as np

# Create an array
temperatures = np.array([22, 25, 19, 28, 31, 24, 20])

# Basic stats — one line each!
print(f"Average: {np.mean(temperatures):.1f}°C")
print(f"Highest: {np.max(temperatures)}°C")
print(f"Lowest:  {np.min(temperatures)}°C")

# Maths on the whole array at once
in_fahrenheit = temperatures * 9/5 + 32
print(in_fahrenheit)  # [71.6, 77.0, 66.2, 82.4, 87.8, 75.2, 68.0]

# Filtering — find days above 25°C
hot_days = temperatures[temperatures > 25]
print(hot_days)  # [28, 31]`, language: "python" },
          { type: "tip", content: "NumPy lets you do operations on entire arrays in one line — no loops needed! This is both faster and cleaner." },
        ],
      },
      {
        heading: "Pandas DataFrames",
        blocks: [
          { type: "code", code: `import pandas as pd

# Create a DataFrame (like a spreadsheet)
data = {
    "name":   ["Anu", "Riya", "Priya", "Meera"],
    "score":  [88, 92, 75, 95],
    "grade":  ["A", "A", "B", "A"],
    "passed": [True, True, True, True]
}
df = pd.DataFrame(data)
print(df)

# Explore your data
print(df.shape)          # (4, 4) — 4 rows, 4 columns
print(df.describe())     # stats for numeric columns
print(df["score"].mean())  # average score: 87.5

# Filtering rows
top_students = df[df["score"] >= 90]
print(top_students)

# Sorting
df_sorted = df.sort_values("score", ascending=False)
print(df_sorted)`, language: "python" },
        ],
      },
    ],
    exercise: {
      prompt: "Create a Pandas DataFrame of 5 of your favourite movies with columns: title, year, rating (out of 10). Then:\n1. Print the DataFrame\n2. Find the highest-rated movie\n3. Filter to only show movies rated 8+\n4. Calculate the average rating",
      starterCode: `import pandas as pd

# Create your movies DataFrame
movies = pd.DataFrame({
    "title": ["Dangal", "3 Idiots", "Lagaan", "PK", "Zindagi Na Milegi Dobara"],
    "year":  [2016, 2009, 2001, 2014, 2011],
    "rating": [8.4, 8.4, 8.1, 8.1, 8.2]
})

# 1. Print the DataFrame
print(movies)
print()

# 2. Find the highest-rated movie
best = movies[movies["rating"] == movies["rating"].max()]
print("Highest rated:", best["title"].values[0])

# 3. Filter to 8+ rating (all of them in this case!)
highly_rated = movies[movies["rating"] >= 8.0]
print("\\nHighly rated movies:")
print(highly_rated[["title", "rating"]])

# 4. Average rating
print(f"\\nAverage rating: {movies['rating'].mean():.2f}")
`,
      solutionCode: `import pandas as pd

movies = pd.DataFrame({
    "title": ["Dangal", "3 Idiots", "Lagaan", "PK", "Zindagi Na Milegi Dobara"],
    "year":  [2016, 2009, 2001, 2014, 2011],
    "rating": [8.4, 8.4, 8.1, 8.1, 8.2]
})

print(movies)
print()

best = movies[movies["rating"] == movies["rating"].max()]
print("Highest rated:", best["title"].values[0])

highly_rated = movies[movies["rating"] >= 8.0]
print("\\nHighly rated movies:")
print(highly_rated[["title", "rating"]])

print(f"\\nAverage rating: {movies['rating'].mean():.2f}")
`,
      hints: [
        "pd.DataFrame({}) creates a table from a dictionary",
        "df[df['column'] > value] filters rows",
        "df['column'].mean() calculates the average",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "NumPy handles fast numerical arrays; Pandas adds table-like DataFrames",
      "You can filter, sort, and calculate stats on entire tables in one line",
      "Most ML libraries expect data in NumPy or Pandas format",
    ],
  },

  "lesson-3-3": {
    id: "lesson-3-3",
    objectives: [
      "Create line charts and bar charts with Matplotlib",
      "Label axes and add titles",
      "Visualise data to spot patterns",
    ],
    sections: [
      {
        heading: "Why visualise data?",
        blocks: [
          { type: "text", content: "A table of 1000 numbers is hard to understand. A chart makes patterns obvious instantly. Data visualisation is a critical skill in AI/ML — you need to **understand** your data before you can build models from it." },
          { type: "warning", content: "This playground uses a text-based chart simulation. To see real matplotlib charts, run these examples in VS Code after installing matplotlib: pip install matplotlib" },
        ],
      },
      {
        heading: "Line charts",
        blocks: [
          { type: "code", code: `import matplotlib.pyplot as plt

# Data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
temperature = [18, 20, 24, 28, 32, 31]

# Create chart
plt.figure(figsize=(8, 4))
plt.plot(months, temperature, color="coral", linewidth=2, marker="o")

# Labels and title
plt.title("Mumbai Temperature 2025", fontsize=14)
plt.xlabel("Month")
plt.ylabel("Temperature (°C)")
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`, language: "python" },
        ],
      },
      {
        heading: "Bar charts",
        blocks: [
          { type: "code", code: `import matplotlib.pyplot as plt

languages = ["Python", "JavaScript", "Java", "C++", "TypeScript"]
popularity = [30.3, 22.6, 17.8, 12.1, 9.4]

plt.figure(figsize=(8, 4))
plt.bar(languages, popularity, color=["#e8638a", "#f7a8c4", "#b28fd4", "#89cff0", "#7ecba1"])
plt.title("Most Popular Programming Languages")
plt.xlabel("Language")
plt.ylabel("Usage (%)")
plt.tight_layout()
plt.show()`, language: "python" },
          { type: "tip", content: "Always label your axes and add a title. A chart without labels is useless — nobody knows what they're looking at!" },
        ],
      },
      {
        heading: "Scatter plots — finding correlations",
        blocks: [
          { type: "code", code: `import matplotlib.pyplot as plt
import numpy as np

# Generate some sample data
study_hours = [1, 2, 3, 4, 5, 6, 7, 8]
test_scores = [45, 55, 62, 70, 75, 82, 88, 95]

plt.figure(figsize=(6, 4))
plt.scatter(study_hours, test_scores, color="coral", s=100)
plt.plot(study_hours, test_scores, "r--", alpha=0.5)  # trend line

plt.title("Study Hours vs Test Score")
plt.xlabel("Hours Studied")
plt.ylabel("Test Score")
plt.grid(True, alpha=0.3)
plt.show()

# The correlation is obvious from the chart!`, language: "python" },
        ],
      },
    ],
    exercise: {
      prompt: "Create a simple text-based bar chart using Python (no matplotlib needed). Given a dictionary of scores, print a bar made of █ characters for each person.",
      starterCode: `# Text-based bar chart — works in this playground!
scores = {
    "Anu":   88,
    "Riya":  95,
    "Priya": 72,
    "Meera": 91,
    "Sara":  78
}

print("Test Scores")
print("-" * 40)

for name, score in scores.items():
    # Each █ represents 5 points
    bar = "█" * (score // 5)
    print(f"{name:8} | {bar} {score}")

print("-" * 40)
avg = sum(scores.values()) / len(scores)
print(f"Average: {avg:.1f}")
`,
      solutionCode: `scores = {
    "Anu":   88,
    "Riya":  95,
    "Priya": 72,
    "Meera": 91,
    "Sara":  78
}

print("Test Scores")
print("-" * 40)

for name, score in scores.items():
    bar = "█" * (score // 5)
    print(f"{name:8} | {bar} {score}")

print("-" * 40)
avg = sum(scores.values()) / len(scores)
print(f"Average: {avg:.1f}")
`,
      hints: [
        "score // 5 does integer division (85 // 5 = 17 blocks)",
        "\"█\" * 17 prints 17 block characters",
        "f\"{name:8}\" pads the name to 8 characters wide",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Visualising data reveals patterns that tables hide",
      "Use line charts for trends over time, bar charts for comparisons, scatter plots for correlations",
      "Always label your axes and title your charts",
    ],
  },

  "lesson-3-4": {
    id: "lesson-3-4",
    objectives: [
      "Understand what Scikit-learn does and why it's used",
      "Train a simple classifier on labelled data",
      "Make predictions and measure accuracy",
    ],
    sections: [
      {
        heading: "What is Scikit-learn?",
        blocks: [
          { type: "text", content: "Scikit-learn (sklearn) is the most popular ML library in Python. It gives you ready-made implementations of dozens of ML algorithms. Instead of writing the maths yourself, you call `.fit()` to train and `.predict()` to get results." },
          { type: "warning", content: "Install it in your terminal: pip install scikit-learn" },
        ],
      },
      {
        heading: "A complete ML example",
        blocks: [
          { type: "code", code: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Dataset: fruit measurements
# Features: [weight_grams, sweetness_1_to_10]
# Label: 0=apple, 1=mango, 2=orange
X = [
    [150, 6], [170, 7], [130, 5], [160, 6],   # apples
    [200, 9], [220, 9], [190, 8], [210, 9],   # mangoes
    [180, 6], [170, 5], [190, 6], [175, 6],   # oranges
]
y = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]

# Split into training and testing sets (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train the model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy * 100:.1f}%")

# Predict a new fruit
new_fruit = [[205, 9]]  # heavy and very sweet
result = model.predict(new_fruit)[0]
labels = {0: "apple", 1: "mango", 2: "orange"}
print(f"This fruit is probably a: {labels[result]}")`, language: "python" },
          { type: "tip", content: "You don't need to understand the maths of KNeighborsClassifier — just know it classifies based on which training examples are closest to the new input." },
        ],
      },
      {
        heading: "The universal sklearn pattern",
        blocks: [
          { type: "code", code: `# Every sklearn model follows this pattern:

# 1. Import the model
from sklearn.linear_model import LogisticRegression

# 2. Create the model
model = LogisticRegression()

# 3. Train it on data
model.fit(X_train, y_train)

# 4. Make predictions
predictions = model.predict(X_test)

# 5. Measure accuracy
from sklearn.metrics import accuracy_score
score = accuracy_score(y_test, predictions)
print(f"Accuracy: {score:.2%}")

# Swap LogisticRegression for any other model
# and the code stays exactly the same!`, language: "python" },
          { type: "tip", content: "This consistency is why sklearn is so popular. Learn it once, apply it to any algorithm." },
        ],
      },
    ],
    exercise: {
      prompt: "Classify pass/fail based on study hours and sleep hours. Modify the training data and see how it affects predictions.",
      starterCode: `# Simple pass/fail classifier
# Features: [study_hours, sleep_hours]
# Label: 0=fail, 1=pass

X_train = [
    [1, 4], [2, 5], [3, 6], [1, 5],  # fail cases
    [5, 7], [6, 8], [7, 7], [8, 8],  # pass cases
]
y_train = [0, 0, 0, 0, 1, 1, 1, 1]

# Try to predict these students
X_test = [
    [4, 7],  # studied 4h, slept 7h
    [2, 6],  # studied 2h, slept 6h
    [7, 5],  # studied 7h, slept 5h
]

# Note: sklearn may not be available in this playground
# Run this in VS Code with: pip install scikit-learn
from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

predictions = model.predict(X_test)
for i, pred in enumerate(predictions):
    outcome = "PASS ✅" if pred == 1 else "FAIL ❌"
    print(f"Student {i+1} (study={X_test[i][0]}h, sleep={X_test[i][1]}h): {outcome}")
`,
      solutionCode: `from sklearn.neighbors import KNeighborsClassifier

X_train = [
    [1, 4], [2, 5], [3, 6], [1, 5],
    [5, 7], [6, 8], [7, 7], [8, 8],
]
y_train = [0, 0, 0, 0, 1, 1, 1, 1]

X_test = [
    [4, 7],
    [2, 6],
    [7, 5],
]

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

for i, pred in enumerate(predictions):
    outcome = "PASS ✅" if pred == 1 else "FAIL ❌"
    print(f"Student {i+1}: {outcome}")
`,
      hints: [
        "sklearn may show ImportError in playground — it works in VS Code",
        "The pattern is always: create model → .fit() → .predict()",
        "Try changing n_neighbors=3 to n_neighbors=1 and see if results change",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Scikit-learn gives you ready-made ML algorithms with a consistent API",
      "The pattern: create → .fit(X_train, y_train) → .predict(X_test)",
      "Always split data into training and test sets to measure real accuracy",
    ],
  },

  "lesson-3-5": {
    id: "lesson-3-5",
    objectives: [
      "Understand what a neural network is conceptually",
      "Know the difference between traditional ML and Deep Learning",
      "Recognise when Deep Learning is the right tool",
    ],
    sections: [
      {
        heading: "What is a neural network?",
        blocks: [
          { type: "text", content: "A neural network is loosely inspired by how the brain works. It has layers of 'neurons' (really just numbers) that pass information to each other. The network learns by adjusting the strengths of connections between neurons (called **weights**) until its outputs match the expected answers." },
          { type: "steps", steps: [
            "**Input layer** — takes in raw data (pixel values, text tokens, sensor readings)",
            "**Hidden layers** — process and transform the data, learning patterns",
            "**Output layer** — produces the final answer (a category, a probability, a value)",
          ]},
          { type: "code", code: `# A neural network in pseudocode:

# Layer 1: look at raw pixels of an image
input_pixels = [123, 45, 200, 18, ...]   # 784 pixels for a 28x28 image

# Hidden layers: learn to detect edges, then shapes, then features
hidden_1 = detect_edges(input_pixels)
hidden_2 = detect_shapes(hidden_1)
hidden_3 = detect_features(hidden_2)

# Output: classify as one of 10 digits
output = [0.01, 0.02, 0.90, 0.03, ...]  # 90% sure it's a "2"
prediction = output.index(max(output))  # → 2`, language: "python" },
        ],
      },
      {
        heading: "Traditional ML vs Deep Learning",
        blocks: [
          { type: "steps", steps: [
            "**Traditional ML** (sklearn): you define the features yourself. 'Height, weight, age → disease risk'. Works great with structured data (tables).",
            "**Deep Learning**: the network learns its own features from raw data. 'Raw pixels → face recognition'. Works best with images, audio, text.",
            "**Rule of thumb**: small structured dataset → sklearn. Large unstructured dataset (images, audio, text) → Deep Learning.",
          ]},
          { type: "tip", content: "ChatGPT, Stable Diffusion, Google Translate, Siri — all Deep Learning. Your first models will be traditional ML, and that's perfect for learning." },
        ],
      },
      {
        heading: "A simple neural network with Keras",
        blocks: [
          { type: "code", code: `# This is what real Deep Learning code looks like
# Run in VS Code: pip install tensorflow

import tensorflow as tf
from tensorflow import keras

# Build the network architecture
model = keras.Sequential([
    keras.layers.Dense(128, activation="relu", input_shape=(784,)),  # hidden layer
    keras.layers.Dense(64, activation="relu"),                        # hidden layer
    keras.layers.Dense(10, activation="softmax")                      # output: 10 digits
])

# Compile: tell it how to learn
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

# Train: show it 60,000 handwritten digits
model.fit(X_train, y_train, epochs=5, batch_size=32)

# Evaluate on new images
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f"Test accuracy: {test_accuracy:.2%}")
# → Test accuracy: 97.8%`, language: "python" },
          { type: "tip", content: "Don't be intimidated by this code! It looks complex but follows the same pattern as sklearn. You'll get comfortable with it over time." },
        ],
      },
    ],
    exercise: {
      prompt: "Let's build a mini neural network simulation using pure Python — no libraries needed. This shows you conceptually how neurons compute values.",
      starterCode: `# Mini neural network — one neuron
# A neuron takes inputs, multiplies by weights, adds bias, applies activation

def relu(x):
    """ReLU activation: max(0, x)"""
    return max(0, x)

def sigmoid(x):
    """Sigmoid: squishes any number to 0-1"""
    import math
    return 1 / (1 + math.exp(-x))

def neuron(inputs, weights, bias):
    """One neuron: weighted sum + bias → activation"""
    weighted_sum = sum(i * w for i, w in zip(inputs, weights))
    total = weighted_sum + bias
    return relu(total)

# Test our neuron
# Input: [hours_studied, hours_slept]
inputs = [6, 8]       # studied 6h, slept 8h
weights = [0.7, 0.3]  # studying matters more
bias = -3.0

output = neuron(inputs, weights, bias)
print(f"Neuron output: {output:.3f}")
print(f"Prediction: {'PASS ✅' if output > 0.5 else 'FAIL ❌'}")

# Try different inputs
for study, sleep in [(2, 4), (5, 7), (8, 6)]:
    out = neuron([study, sleep], weights, bias)
    result = "PASS ✅" if out > 0.5 else "FAIL ❌"
    print(f"study={study}h sleep={sleep}h → {out:.2f} → {result}")
`,
      solutionCode: `def relu(x):
    return max(0, x)

def neuron(inputs, weights, bias):
    weighted_sum = sum(i * w for i, w in zip(inputs, weights))
    return relu(weighted_sum + bias)

inputs = [6, 8]
weights = [0.7, 0.3]
bias = -3.0

output = neuron(inputs, weights, bias)
print(f"Neuron output: {output:.3f}")
print(f"Prediction: {'PASS ✅' if output > 0.5 else 'FAIL ❌'}")

for study, sleep in [(2, 4), (5, 7), (8, 6)]:
    out = neuron([study, sleep], weights, bias)
    result = "PASS ✅" if out > 0.5 else "FAIL ❌"
    print(f"study={study}h sleep={sleep}h → {out:.2f} → {result}")
`,
      hints: [
        "zip(inputs, weights) pairs each input with its weight",
        "sum() adds them all up",
        "relu() clamps negative values to 0",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Neural networks learn by adjusting weights through thousands of training examples",
      "Deep Learning excels at images, audio, and text; traditional ML is great for tabular data",
      "Keras/TensorFlow makes building neural networks accessible with just a few lines",
    ],
  },

  "lesson-3-6": {
    id: "lesson-3-6",
    objectives: [
      "Plan and scope a beginner AI project",
      "Pick a dataset appropriate for your first project",
      "Know where to find data and how to get started",
    ],
    sections: [
      {
        heading: "Your first AI project",
        blocks: [
          { type: "text", content: "The best way to learn AI/ML is to **build something real**. Your first project doesn't need to be impressive — it needs to be finished. A simple, completed project teaches you more than an ambitious abandoned one." },
          { type: "tip", content: "Pick something you're genuinely curious about. If you love Bollywood, analyse movie ratings. If you love food, classify recipes. Passion helps you push through the hard parts." },
        ],
      },
      {
        heading: "Good first project ideas",
        blocks: [
          { type: "steps", steps: [
            "**Sentiment analyser** — given a movie review, classify it as positive or negative. Great for learning text classification.",
            "**House price predictor** — predict house prices from features like area and location. Classic regression problem.",
            "**Iris flower classifier** — the 'Hello World' of ML: classify flowers by petal measurements. sklearn has the dataset built in!",
            "**Digit recogniser** — identify handwritten digits (0-9) from the famous MNIST dataset.",
            "**Your own dataset** — collect data you care about and find patterns in it.",
          ]},
        ],
      },
      {
        heading: "Where to find datasets",
        blocks: [
          { type: "steps", steps: [
            "**Kaggle (kaggle.com/datasets)** — thousands of free datasets, many with example notebooks",
            "**sklearn datasets** — built-in toy datasets: iris, digits, boston housing, etc.",
            "**UCI ML Repository (archive.ics.uci.edu)** — classic research datasets",
            "**Google Dataset Search (datasetsearch.research.google.com)** — search engine for datasets",
            "**Your own data** — export a spreadsheet, scrape a website (ethically!), or record your own observations",
          ]},
        ],
      },
      {
        heading: "The complete project workflow",
        blocks: [
          { type: "code", code: `# Your first complete ML project — Iris classifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report

# 1. Load data (built into sklearn — no download needed!)
iris = load_iris()
X, y = iris.data, iris.target
print(f"Dataset: {X.shape[0]} flowers, {X.shape[1]} features")
print(f"Classes: {iris.target_names}")

# 2. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. Train model
model = KNeighborsClassifier(n_neighbors=5)
model.fit(X_train, y_train)

# 4. Evaluate
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2%}")
print(classification_report(y_test, y_pred, target_names=iris.target_names))

# 5. Predict new flowers
new_flower = [[5.1, 3.5, 1.4, 0.2]]
prediction = model.predict(new_flower)[0]
print(f"New flower is: {iris.target_names[prediction]}")`, language: "python" },
          { type: "tip", content: "Run this in VS Code! It's a complete, working ML project you can show people. Add comments explaining each step — that makes a great portfolio piece." },
        ],
      },
    ],
    exercise: {
      prompt: "Plan YOUR first project. Write it out in the code editor as comments — a clear plan is the first step to building.",
      starterCode: `# My First AI Project Plan
# ========================

# Project name:
# What it does:

# Dataset I'll use:
# Where to find it:

# Type of ML problem:
# [ ] Classification (predict a category)
# [ ] Regression (predict a number)

# Features (inputs to my model):
# 1.
# 2.
# 3.

# Target (what I want to predict):
#

# Model I'll try first:
# [ ] KNeighborsClassifier (for classification)
# [ ] LinearRegression (for regression)

# How I'll measure success:
#

# My first small step to start:
#

print("My plan is ready! Time to build 🚀")
`,
      solutionCode: `# My First AI Project Plan
# ========================

# Project name: Bollywood Movie Success Predictor
# What it does: Predicts if a Bollywood movie will be a hit based on budget, cast, etc.

# Dataset I'll use: Box office data scraped from Box Office India
# Where to find it: Kaggle has Bollywood datasets ready to go

# Type of ML problem:
# [X] Classification (predict a category) — hit or flop

# Features:
# 1. Production budget
# 2. Lead actor popularity score
# 3. Release month (festival season = higher chance)
# 4. Genre

# Target: hit (1) or flop (0)

# Model: KNeighborsClassifier for starters, then try RandomForestClassifier

# Measure success: accuracy on test set, plus recall for "hits"

# First step: find a Bollywood dataset on Kaggle and load it with pandas

print("My plan is ready! Time to build 🚀")
`,
      hints: [
        "Classification = predict a category (spam/not spam, pass/fail, hit/flop)",
        "Regression = predict a number (house price, temperature, score)",
        "Start simple — you can always add more features later",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Your first project should be simple and finishable — not impressive",
      "Kaggle and sklearn's built-in datasets are the easiest starting points",
      "The full workflow: load data → split → train → evaluate → predict",
    ],
  },
};
