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

  // ── Phase 4 ──────────────────────────────────────────────

  "lesson-4-1": {
    id: "lesson-4-1",
    objectives: [
      "Understand what data analysis is and why it matters",
      "Know the typical data analyst workflow",
      "Recognise common data formats like CSV and JSON",
    ],
    sections: [
      {
        heading: "What do data analysts actually do?",
        blocks: [
          { type: "text", content: "Data analysts collect raw data, clean it up, and turn it into answers. A business might ask: *\"Which product sells best on Sundays?\"* or *\"Are our customers getting younger?\"* — and a data analyst figures it out using code." },
          { type: "tip", content: "Data analysis is one of the most in-demand skills in tech. And Python is the #1 language for it — so you're already on the right path!" },
          { type: "steps", steps: [
            "**Collect** — get data from a file, database, or API",
            "**Clean** — fix missing values, typos, wrong formats",
            "**Explore** — look for patterns and interesting facts",
            "**Visualise** — turn findings into charts anyone can understand",
            "**Share** — present your insights to others",
          ]},
        ],
      },
      {
        heading: "Common data formats",
        blocks: [
          { type: "text", content: "Data comes in many shapes. The most common formats you'll work with are:" },
          { type: "steps", steps: [
            "**CSV** — Comma-Separated Values. Like a simple spreadsheet. Example: `name,age,city\\nAnu,25,Mumbai`",
            "**JSON** — JavaScript Object Notation. Nested data, like Python dictionaries. Used everywhere in APIs.",
            "**Excel (.xlsx)** — Spreadsheet files. Pandas can read these directly.",
            "**SQL databases** — Structured data stored in rows and tables. You query it with SQL.",
          ]},
          { type: "code", code: `# A CSV file looks like this when opened:
# name,age,city
# Anu,25,Mumbai
# Ravi,30,Delhi

# In Python (with pandas), you load it like this:
import pandas as pd

df = pd.read_csv("people.csv")
print(df.head())   # Shows first 5 rows` },
        ],
      },
      {
        heading: "The Python data science stack",
        blocks: [
          { type: "text", content: "Three libraries do almost everything you need:" },
          { type: "steps", steps: [
            "**NumPy** — fast number crunching, arrays and maths",
            "**Pandas** — loading, cleaning and exploring table data",
            "**Matplotlib** — drawing charts and visualisations",
          ]},
          { type: "tip", content: "These three libraries work together constantly. By the end of Phase 4 you'll be comfortable using all of them." },
        ],
      },
    ],
    exercise: {
      prompt: "Think of a question you'd like to answer with data — about anything you care about (movies, food, cricket scores, weather). Write it down. Then think: what data would you need, and where might you find it?",
      starterCode: `# Imagine you have this simple dataset about your favourite films
films = [
    {"title": "Dilwale Dulhania Le Jayenge", "year": 1995, "rating": 9.1},
    {"title": "3 Idiots", "year": 2009, "rating": 8.4},
    {"title": "Dangal", "year": 2016, "rating": 8.3},
    {"title": "Lagaan", "year": 2001, "rating": 8.1},
]

# Print each film's title and rating
for film in films:
    print(film["title"], "—", film["rating"])

# What's the average rating?
ratings = [f["rating"] for f in films]
avg = sum(ratings) / len(ratings)
print(f"\\nAverage rating: {avg:.1f}")`,
      solutionCode: "",
      hints: ["Use a for loop to go through the list", "Use sum() and len() to calculate the average"],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Data analysis turns raw numbers into useful answers",
      "The core workflow: collect → clean → explore → visualise → share",
      "NumPy, Pandas, and Matplotlib are the essential Python data tools",
    ],
  },

  "lesson-4-2": {
    id: "lesson-4-2",
    objectives: [
      "Create and manipulate NumPy arrays",
      "Understand why NumPy is faster than regular Python lists",
      "Use common NumPy operations: mean, sum, min, max",
    ],
    sections: [
      {
        heading: "What is NumPy?",
        blocks: [
          { type: "text", content: "NumPy (Numerical Python) is a library that gives Python superfast number-crunching abilities. When you have thousands or millions of numbers to process, regular Python lists are too slow. NumPy **arrays** handle this in a fraction of the time." },
          { type: "code", code: `import numpy as np

# Create an array of numbers
scores = np.array([85, 92, 78, 95, 88, 76, 91])

print("Scores:", scores)
print("Average:", np.mean(scores))
print("Highest:", np.max(scores))
print("Lowest:", np.min(scores))
print("Total:", np.sum(scores))` },
          { type: "tip", content: "Notice how np.mean(), np.max() etc. are much simpler than writing a loop yourself. NumPy does the heavy lifting." },
        ],
      },
      {
        heading: "Arrays vs Python lists",
        blocks: [
          { type: "text", content: "NumPy arrays look like Python lists but are much more powerful. The key differences:" },
          { type: "steps", steps: [
            "**Speed** — NumPy is up to 100× faster for maths on large datasets",
            "**Maths** — you can add/multiply entire arrays at once without loops",
            "**One type** — all items in an array must be the same type (e.g. all numbers)",
          ]},
          { type: "code", code: `import numpy as np

# With a Python list, you'd need a loop:
prices = [100, 200, 150, 300]
discounted = [p * 0.9 for p in prices]

# With NumPy, no loop needed!
prices_arr = np.array([100, 200, 150, 300])
discounted_arr = prices_arr * 0.9   # applies to ALL elements

print("Discounted prices:", discounted_arr)` },
        ],
      },
      {
        heading: "Useful NumPy operations",
        blocks: [
          { type: "code", code: `import numpy as np

data = np.array([3, 7, 2, 9, 4, 6, 8, 1, 5])

# Statistical operations
print("Mean:", np.mean(data))       # average
print("Std dev:", np.std(data))     # how spread out the data is
print("Median:", np.median(data))   # middle value

# Filtering — find values above 5
above_5 = data[data > 5]
print("Above 5:", above_5)

# Sorting
sorted_data = np.sort(data)
print("Sorted:", sorted_data)` },
          { type: "tip", content: "The filtering trick `data[data > 5]` is called boolean indexing. It's one of NumPy's most useful features — and Pandas uses the same trick!" },
        ],
      },
    ],
    exercise: {
      prompt: "You have a list of daily temperatures for a week. Use NumPy to find the average, the hottest day, the coldest day, and any days hotter than 30°C.",
      starterCode: `import numpy as np

# Daily temperatures in Celsius for one week
temperatures = np.array([28, 31, 25, 33, 29, 27, 35])
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

# TODO: Find the average temperature
average = # your code here

# TODO: Find the hottest temperature
hottest = # your code here

# TODO: Find the coldest temperature
coldest = # your code here

print(f"Average: {average:.1f}°C")
print(f"Hottest: {hottest}°C")
print(f"Coldest: {coldest}°C")

# TODO: Print which days were hotter than 30°C
# Hint: use a boolean filter like temperatures[temperatures > 30]`,
      solutionCode: `import numpy as np

temperatures = np.array([28, 31, 25, 33, 29, 27, 35])
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

average = np.mean(temperatures)
hottest = np.max(temperatures)
coldest = np.min(temperatures)

print(f"Average: {average:.1f}°C")
print(f"Hottest: {hottest}°C")
print(f"Coldest: {coldest}°C")

hot_days = [days[i] for i, t in enumerate(temperatures) if t > 30]
print(f"Hot days (>30°C): {hot_days}")`,
      hints: [
        "Use np.mean(temperatures) for the average",
        "Use np.max() and np.min() for hottest and coldest",
        "For days above 30°C, try: temperatures[temperatures > 30]",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "NumPy arrays are faster than Python lists for maths and number crunching",
      "np.mean(), np.max(), np.min(), np.sum() work on entire arrays instantly",
      "Boolean indexing (arr[arr > value]) is a powerful way to filter data",
    ],
  },

  "lesson-4-3": {
    id: "lesson-4-3",
    objectives: [
      "Load a CSV file into a Pandas DataFrame",
      "Explore data with .head(), .info(), .describe()",
      "Filter, sort, and select columns from a DataFrame",
    ],
    sections: [
      {
        heading: "What is Pandas?",
        blocks: [
          { type: "text", content: "Pandas is the most popular library for working with table data in Python. Think of it like a supercharged spreadsheet — but you control it with code. The main object is called a **DataFrame**, which is just a table with rows and columns." },
          { type: "code", code: `import pandas as pd

# Create a simple DataFrame from a dictionary
data = {
    "name": ["Anu", "Ravi", "Priya", "Dev"],
    "age":  [25, 30, 27, 22],
    "city": ["Mumbai", "Delhi", "Pune", "Chennai"],
}

df = pd.DataFrame(data)
print(df)` },
        ],
      },
      {
        heading: "Loading and exploring data",
        blocks: [
          { type: "code", code: `import pandas as pd

# Load a CSV file (most common way to get data)
df = pd.read_csv("data.csv")

# First look at the data
print(df.head())       # first 5 rows
print(df.tail(3))      # last 3 rows
print(df.shape)        # (rows, columns)
print(df.columns)      # column names
print(df.info())       # data types + missing values
print(df.describe())   # statistics for number columns` },
          { type: "tip", content: "Always start with `.head()` and `.info()` when you load a new dataset. It tells you what you're working with before you do anything else." },
        ],
      },
      {
        heading: "Selecting, filtering, and sorting",
        blocks: [
          { type: "code", code: `import pandas as pd

data = {
    "name": ["Anu", "Ravi", "Priya", "Dev", "Meera"],
    "score": [88, 72, 95, 61, 84],
    "city": ["Mumbai", "Delhi", "Mumbai", "Chennai", "Pune"],
}
df = pd.DataFrame(data)

# Select one column
print(df["name"])

# Select multiple columns
print(df[["name", "score"]])

# Filter rows — only Mumbai students
mumbai = df[df["city"] == "Mumbai"]
print(mumbai)

# Sort by score (highest first)
sorted_df = df.sort_values("score", ascending=False)
print(sorted_df)` },
          { type: "tip", content: "The filter syntax `df[df['column'] == value]` looks strange at first but you'll use it constantly. Read it as: 'give me all rows where city equals Mumbai'." },
        ],
      },
    ],
    exercise: {
      prompt: "You have a small dataset of students and their exam scores. Use Pandas to: (1) find all students who scored above 80, (2) find the average score, and (3) sort by score from highest to lowest.",
      starterCode: `import pandas as pd

# Student data
data = {
    "name": ["Anu", "Ravi", "Priya", "Dev", "Meera", "Kiran"],
    "score": [88, 72, 95, 61, 84, 79],
    "subject": ["Maths", "Science", "Maths", "English", "Science", "English"],
}
df = pd.DataFrame(data)

print("All students:")
print(df)
print()

# TODO 1: Find students who scored above 80
high_scorers = # your code here
print("Scored above 80:")
print(high_scorers)
print()

# TODO 2: Find the average score
average = # your code here
print(f"Class average: {average:.1f}")
print()

# TODO 3: Sort by score, highest first
sorted_df = # your code here
print("Ranked by score:")
print(sorted_df)`,
      solutionCode: `import pandas as pd

data = {
    "name": ["Anu", "Ravi", "Priya", "Dev", "Meera", "Kiran"],
    "score": [88, 72, 95, 61, 84, 79],
    "subject": ["Maths", "Science", "Maths", "English", "Science", "English"],
}
df = pd.DataFrame(data)

high_scorers = df[df["score"] > 80]
average = df["score"].mean()
sorted_df = df.sort_values("score", ascending=False)

print("Scored above 80:")
print(high_scorers)
print(f"\\nClass average: {average:.1f}")
print("\\nRanked by score:")
print(sorted_df)`,
      hints: [
        "Filter with: df[df['score'] > 80]",
        "Get the average with: df['score'].mean()",
        "Sort with: df.sort_values('score', ascending=False)",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "A Pandas DataFrame is a table with rows and columns, like a spreadsheet in Python",
      "Use .head(), .info(), .describe() to understand a new dataset quickly",
      "Filter rows with df[df['column'] condition] and sort with .sort_values()",
    ],
  },

  "lesson-4-4": {
    id: "lesson-4-4",
    objectives: [
      "Create line charts, bar charts, and scatter plots with Matplotlib",
      "Add titles, labels, and legends to your charts",
      "Choose the right chart type for your data",
    ],
    sections: [
      {
        heading: "Why visualise data?",
        blocks: [
          { type: "text", content: "Numbers in a table are hard to understand at a glance. A well-made chart can reveal a trend, pattern, or outlier in seconds. Visualisation is how data analysts communicate their findings to everyone else — including people who don't code." },
          { type: "tip", content: "In real data science jobs, creating clear charts is just as important as writing correct code. A brilliant insight no one can understand is useless!" },
        ],
      },
      {
        heading: "Your first chart — line chart",
        blocks: [
          { type: "code", code: `import matplotlib.pyplot as plt

# Data: monthly sales figures
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales  = [1200, 1800, 1500, 2200, 1900, 2500]

# Create the chart
plt.figure(figsize=(8, 4))
plt.plot(months, sales, marker="o", color="hotpink", linewidth=2)

# Labels and title
plt.title("Monthly Sales 2024")
plt.xlabel("Month")
plt.ylabel("Sales (₹)")
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()` },
          { type: "tip", content: "Line charts are best for data that changes over time — sales, temperature, stock prices, etc." },
        ],
      },
      {
        heading: "Bar charts and scatter plots",
        blocks: [
          { type: "code", code: `import matplotlib.pyplot as plt

# Bar chart — comparing categories
subjects = ["Maths", "Science", "English", "History"]
scores   = [88, 92, 75, 81]

plt.figure(figsize=(7, 4))
plt.bar(subjects, scores, color=["hotpink", "violet", "plum", "orchid"])
plt.title("Exam Scores by Subject")
plt.ylabel("Score")
plt.ylim(0, 100)
plt.show()` },
          { type: "code", code: `import matplotlib.pyplot as plt

# Scatter plot — finding relationships between two variables
study_hours = [1, 2, 3, 4, 5, 6, 7, 8]
exam_scores = [55, 60, 65, 72, 78, 85, 88, 95]

plt.figure(figsize=(7, 4))
plt.scatter(study_hours, exam_scores, color="hotpink", s=80)
plt.title("Study Hours vs Exam Score")
plt.xlabel("Hours studied")
plt.ylabel("Score")
plt.show()` },
          { type: "tip", content: "Bar charts compare categories. Scatter plots reveal relationships between two numeric variables — like 'do students who study more score higher?'" },
        ],
      },
    ],
    exercise: {
      prompt: "Create a bar chart showing the population of 5 Indian cities. Add a title, axis labels, and use different colours for each bar.",
      starterCode: `import matplotlib.pyplot as plt

# Population of major Indian cities (in millions)
cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"]
population = [20.7, 32.9, 13.2, 10.5, 11.5]

# TODO: Create a bar chart
# 1. Create a figure: plt.figure(figsize=(8, 5))
# 2. Plot bars: plt.bar(cities, population, color=[...])
# 3. Add title: plt.title("...")
# 4. Add axis labels: plt.xlabel("..."), plt.ylabel("...")
# 5. Show it: plt.show()

# Your code here:`,
      solutionCode: `import matplotlib.pyplot as plt

cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"]
population = [20.7, 32.9, 13.2, 10.5, 11.5]

plt.figure(figsize=(8, 5))
plt.bar(cities, population, color=["hotpink", "violet", "plum", "orchid", "pink"])
plt.title("Population of Major Indian Cities (Millions)")
plt.xlabel("City")
plt.ylabel("Population (Millions)")
plt.tight_layout()
plt.show()`,
      hints: [
        "Start with plt.figure(figsize=(8,5)) to set the size",
        "Use plt.bar(cities, population) for the bars",
        "Add plt.title(), plt.xlabel(), plt.ylabel() for labels",
        "End with plt.show() to display the chart",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Line charts show trends over time; bar charts compare categories; scatter plots find relationships",
      "Always add titles and axis labels — a chart without labels is meaningless to others",
      "plt.figure(), plt.plot/bar/scatter(), then plt.show() is the basic Matplotlib workflow",
    ],
  },

  "lesson-4-5": {
    id: "lesson-4-5",
    objectives: [
      "Load and explore a real-world dataset end to end",
      "Clean and summarise the data using Pandas",
      "Create at least two meaningful charts from the data",
    ],
    sections: [
      {
        heading: "The full data analysis workflow",
        blocks: [
          { type: "text", content: "You've learned NumPy, Pandas, and Matplotlib separately. Now it's time to combine them into a real project. Data scientists follow this same workflow every single time:" },
          { type: "steps", steps: [
            "**Load** — read a CSV file into a DataFrame",
            "**Inspect** — use .head(), .info(), .describe() to understand what you have",
            "**Clean** — handle missing values, fix data types",
            "**Explore** — ask questions and compute answers",
            "**Visualise** — make charts to show what you found",
          ]},
        ],
      },
      {
        heading: "Cleaning data — the most important skill",
        blocks: [
          { type: "text", content: "Real data is messy. Values are missing, columns have wrong types, text has typos. Cleaning data is usually 60–80% of a data analyst's job." },
          { type: "code", code: `import pandas as pd

# Simulate a messy dataset
data = {
    "name":  ["Anu", "Ravi", None, "Dev", "Priya"],
    "score": [88, None, 79, 61, 95],
    "grade": ["A", "B", "B", "C", "A"],
}
df = pd.DataFrame(data)

# Check for missing values
print(df.isnull().sum())

# Fill missing score with the average
avg_score = df["score"].mean()
df["score"] = df["score"].fillna(avg_score)

# Drop rows where name is missing
df = df.dropna(subset=["name"])

print(df)` },
          { type: "tip", content: "fillna() replaces missing values. dropna() removes rows with missing values. Which one you use depends on the situation." },
        ],
      },
      {
        heading: "A complete mini-analysis",
        blocks: [
          { type: "code", code: `import pandas as pd
import matplotlib.pyplot as plt

# Sample dataset: student results
data = {
    "subject": ["Maths", "Science", "English", "History", "Maths",
                 "Science", "English", "History"],
    "score":   [88, 92, 75, 81, 95, 78, 82, 69],
    "term":    ["Term 1"] * 4 + ["Term 2"] * 4,
}
df = pd.DataFrame(data)

# Average score by subject
avg_by_subject = df.groupby("subject")["score"].mean()
print("Average by subject:")
print(avg_by_subject)

# Bar chart
avg_by_subject.plot(kind="bar", color="hotpink", figsize=(6, 4))
plt.title("Average Score by Subject")
plt.ylabel("Score")
plt.xticks(rotation=0)
plt.tight_layout()
plt.show()` },
        ],
      },
    ],
    exercise: {
      prompt: "Analyse the sample book dataset below. Find: (1) the most popular genre, (2) the average rating by genre, and (3) create a bar chart of average ratings. Use what you've learned from the whole phase!",
      starterCode: `import pandas as pd
import matplotlib.pyplot as plt

# Sample dataset: books
data = {
    "title": [
        "The Alchemist", "Sapiens", "Atomic Habits",
        "Dune", "1984", "Educated", "Thinking Fast and Slow"
    ],
    "genre": [
        "Fiction", "Non-Fiction", "Self-Help",
        "Fiction", "Fiction", "Non-Fiction", "Self-Help"
    ],
    "rating": [4.7, 4.4, 4.8, 4.6, 4.5, 4.7, 4.3],
}
df = pd.DataFrame(data)

print(df)
print()

# TODO 1: Which genre has the most books?
# Hint: df["genre"].value_counts()
genre_counts = # your code
print("Books per genre:")
print(genre_counts)

# TODO 2: Average rating by genre
# Hint: df.groupby("genre")["rating"].mean()
avg_ratings = # your code
print("\\nAverage rating by genre:")
print(avg_ratings)

# TODO 3: Bar chart of average ratings
# avg_ratings.plot(kind="bar", ...) then plt.show()`,
      solutionCode: `import pandas as pd
import matplotlib.pyplot as plt

data = {
    "title": ["The Alchemist","Sapiens","Atomic Habits","Dune","1984","Educated","Thinking Fast and Slow"],
    "genre": ["Fiction","Non-Fiction","Self-Help","Fiction","Fiction","Non-Fiction","Self-Help"],
    "rating": [4.7, 4.4, 4.8, 4.6, 4.5, 4.7, 4.3],
}
df = pd.DataFrame(data)

genre_counts = df["genre"].value_counts()
avg_ratings = df.groupby("genre")["rating"].mean()

print("Books per genre:")
print(genre_counts)
print("\\nAverage rating by genre:")
print(avg_ratings)

avg_ratings.plot(kind="bar", color=["hotpink","violet","plum"], figsize=(6,4))
plt.title("Average Book Rating by Genre")
plt.ylabel("Rating")
plt.xticks(rotation=0)
plt.tight_layout()
plt.show()`,
      hints: [
        "Use df['genre'].value_counts() to count books per genre",
        "Use df.groupby('genre')['rating'].mean() for average ratings",
        "Call avg_ratings.plot(kind='bar') — Pandas DataFrames can plot directly!",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "The full data workflow: load → inspect → clean → explore → visualise",
      "Real data is always messy — cleaning is 60–80% of the job",
      "groupby() is one of Pandas' most powerful tools for summarising data",
    ],
  },

  // ── Phase 5 ──────────────────────────────────────────────

  "lesson-5-1": {
    id: "lesson-5-1",
    objectives: [
      "Understand the difference between rule-based and AI-powered chatbots",
      "Know how large language models (LLMs) like ChatGPT work at a high level",
      "Recognise where chatbots are used in real life",
    ],
    sections: [
      {
        heading: "Two types of chatbots",
        blocks: [
          { type: "text", content: "Not all chatbots are the same. They fall into two big categories:" },
          { type: "steps", steps: [
            "**Rule-based** — the bot follows a script. If the user says X, reply with Y. Simple, predictable, but limited.",
            "**AI-powered** — the bot uses a language model that understands natural language. It can handle anything you throw at it.",
          ]},
          { type: "tip", content: "WhatsApp business bots and customer service menus are often rule-based. ChatGPT, Gemini, and Claude are AI-powered." },
        ],
      },
      {
        heading: "How LLMs work (simply)",
        blocks: [
          { type: "text", content: "A Large Language Model (LLM) is trained on billions of pieces of text from the internet, books, and code. It learns patterns: what words tend to follow other words, how sentences are structured, how questions are typically answered." },
          { type: "text", content: "When you send a message, the model predicts the most likely next words — over and over — until it forms a complete, useful reply. It's not \"thinking\" the way humans do, but the results are remarkably good." },
          { type: "tip", content: "You don't need to understand the maths behind LLMs to use them. The OpenAI API lets you call GPT-4 with just a few lines of Python — exactly what you'll do in Lesson 5-3." },
        ],
      },
      {
        heading: "Chatbots you interact with every day",
        blocks: [
          { type: "steps", steps: [
            "**Customer support** — websites use chatbots to answer FAQs instantly",
            "**Virtual assistants** — Siri, Google Assistant, Alexa",
            "**Study tools** — Khan Academy's Khanmigo tutor",
            "**Coding help** — GitHub Copilot, Cursor",
            "**Health** — some hospitals use chatbots for appointment booking and symptom checking",
          ]},
          { type: "text", content: "By the end of this phase, you'll have built your own version of all of the above — a chatbot you can have a real conversation with." },
        ],
      },
    ],
    exercise: {
      prompt: "Think of three chatbot ideas you'd personally find useful. Write them below as comments in the code editor. Then try to classify each as: would this need rule-based logic, AI, or both?",
      starterCode: `# My chatbot ideas:

# Idea 1:
# Description:
# Type (rule-based / AI / both):

# Idea 2:
# Description:
# Type (rule-based / AI / both):

# Idea 3:
# Description:
# Type (rule-based / AI / both):

# Example:
# Idea: A recipe chatbot that suggests dishes based on ingredients I have at home
# Type: AI — because it needs to understand natural language and be creative`,
      solutionCode: "",
      hints: [],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Rule-based chatbots follow scripts; AI chatbots understand natural language",
      "LLMs work by predicting the most likely next words based on training data",
      "You don't need to understand the maths — you just need to know how to use the API",
    ],
  },

  "lesson-5-2": {
    id: "lesson-5-2",
    objectives: [
      "Build a working chatbot using if/else logic",
      "Handle user input and produce appropriate responses",
      "Understand the limitations of rule-based chatbots",
    ],
    sections: [
      {
        heading: "Your first chatbot",
        blocks: [
          { type: "text", content: "A rule-based chatbot is just a program that checks what the user said and picks a response. It's not intelligent — but it's a great way to learn how conversation flow works in code." },
          { type: "code", code: `def chatbot(message):
    message = message.lower().strip()

    if "hello" in message or "hi" in message:
        return "Hello! 🌸 How can I help you today?"

    elif "your name" in message:
        return "I'm RosieBot — your friendly study assistant!"

    elif "help" in message:
        return "I can answer questions about Python and AI. What would you like to know?"

    elif "bye" in message or "goodbye" in message:
        return "Goodbye! Happy coding! 💻"

    else:
        return "Hmm, I'm not sure about that. Try asking something else!"

# Test the chatbot
print(chatbot("Hello there!"))
print(chatbot("What is your name?"))
print(chatbot("I need help"))
print(chatbot("See you later!"))` },
        ],
      },
      {
        heading: "Making it more conversational",
        blocks: [
          { type: "code", code: `import random

def chatbot(message):
    message = message.lower().strip()

    greetings = ["Hello! 🌸", "Hi there! 👋", "Hey! Great to see you!"]
    farewells  = ["Bye! Happy coding! 💻", "See you soon! 🌷", "Goodbye! Keep learning!"]

    if any(word in message for word in ["hi", "hello", "hey"]):
        return random.choice(greetings)

    elif any(word in message for word in ["bye", "goodbye", "see you"]):
        return random.choice(farewells)

    elif "python" in message:
        return "Python is amazing! 🐍 It's the best language for beginners and AI."

    elif "ai" in message or "machine learning" in message:
        return "AI is the future! 🤖 And you're already on your way to learning it."

    else:
        return "Interesting! Tell me more... 🤔"

# Try it
messages = ["Hello!", "Tell me about Python", "What about AI?", "Goodbye!"]
for msg in messages:
    print(f"You: {msg}")
    print(f"Bot: {chatbot(msg)}")
    print()` },
          { type: "tip", content: "`random.choice()` picks a random item from a list — great for making your bot feel less robotic!" },
        ],
      },
      {
        heading: "The limitations of rule-based bots",
        blocks: [
          { type: "text", content: "Rule-based chatbots break the moment someone says something you didn't anticipate. They can't handle:" },
          { type: "steps", steps: [
            "Typos — 'helo' won't match 'hello'",
            "Synonyms — 'Hey' might work, but 'Howdy' won't",
            "Complex questions — 'What's the best way to learn Python for AI?' has no scripted answer",
            "Context — the bot forgets what was said earlier",
          ]},
          { type: "text", content: "This is exactly why we need AI-powered chatbots. In Lesson 5-3, you'll use the OpenAI API to handle all of this automatically." },
        ],
      },
    ],
    exercise: {
      prompt: "Build your own rule-based chatbot below. Give it at least 5 different responses covering: greetings, your name, a topic you care about, a question about coding, and farewells. Make it fun!",
      starterCode: `import random

def my_chatbot(message):
    message = message.lower().strip()

    # TODO: Add at least 5 response rules
    # Greetings
    if "hello" in message or "hi" in message:
        return "Hello! 🌸"

    # Your name
    elif "name" in message:
        return "I'm ..." # give your bot a name!

    # Topic you care about (food, movies, cricket...)
    elif "..." in message:
        return "..."

    # Coding question
    elif "code" in message or "python" in message:
        return "..."

    # Farewell
    elif "bye" in message:
        return "Goodbye! 🌷"

    # Default
    else:
        return "I don't understand that yet! Try something else."

# Test your chatbot here!
test_messages = ["Hello!", "What's your name?", "Tell me about...", "Bye!"]
for msg in test_messages:
    print(f"You: {msg}")
    print(f"Bot: {my_chatbot(msg)}")
    print()`,
      solutionCode: "",
      hints: [
        "Use 'in message' to check if a word appears anywhere in the user's input",
        "random.choice([...]) picks a random reply from a list — makes the bot feel natural",
        "Add more elif branches for more topics",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "A rule-based chatbot uses if/else to match inputs to responses",
      "Use .lower() and .strip() to normalise user input before checking it",
      "Rule-based bots are predictable but brittle — any unexpected input breaks them",
    ],
  },

  "lesson-5-3": {
    id: "lesson-5-3",
    objectives: [
      "Understand what an API is and how to use one",
      "Send a message to OpenAI's API and get a response back",
      "Understand the role of the system prompt",
    ],
    sections: [
      {
        heading: "What is an API?",
        blocks: [
          { type: "text", content: "An API (Application Programming Interface) is a way for your code to talk to someone else's code over the internet. You send a request with some data, and you get a response back — like ordering food via an app." },
          { type: "text", content: "The OpenAI API lets your Python program talk directly to GPT-4. You send it a message; it sends back a reply. That's it. The hard part (training the model) is already done — you just use it." },
          { type: "tip", content: "To use the OpenAI API, you need an API key from platform.openai.com. There's a small cost per request, but it's very cheap for learning (a few pence per conversation)." },
        ],
      },
      {
        heading: "Your first API call",
        blocks: [
          { type: "code", code: `# First: install the library
# pip install openai

from openai import OpenAI

# Your API key goes here (keep it secret!)
client = OpenAI(api_key="your-api-key-here")

# Send a message and get a reply
response = client.chat.completions.create(
    model="gpt-4o-mini",   # cheap and fast model
    messages=[
        {"role": "user", "content": "What is Python in one sentence?"}
    ]
)

# Extract the reply text
reply = response.choices[0].message.content
print(reply)` },
          { type: "warning", content: "Never share your API key publicly or commit it to GitHub. Keep it in a .env file or enter it manually. Anyone with your key can spend your money." },
        ],
      },
      {
        heading: "The system prompt — giving your bot a personality",
        blocks: [
          { type: "text", content: "The **system prompt** is a secret instruction you give the model before the conversation starts. It tells the model who it is, how to behave, and what to focus on. This is how you create a custom chatbot personality." },
          { type: "code", code: `from openai import OpenAI

client = OpenAI(api_key="your-api-key-here")

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "system",
            "content": (
                "You are RosieBot, a friendly and encouraging coding tutor. "
                "You explain things simply, use emojis occasionally, "
                "and always cheer the student on. Keep answers short and clear."
            )
        },
        {
            "role": "user",
            "content": "What is a variable?"
        }
    ]
)

print(response.choices[0].message.content)` },
          { type: "tip", content: "The system prompt is the most powerful tool you have. A well-written system prompt can turn a general AI into a specialist for any topic." },
        ],
      },
    ],
    exercise: {
      prompt: "Write a system prompt for a chatbot with a specific personality and purpose (e.g. a recipe assistant, a study buddy, a movie recommender). Then describe what messages you'd test it with.",
      starterCode: `# Design your chatbot's system prompt
# Think about:
# - What is this bot called?
# - What is its purpose?
# - What tone does it use? (friendly, professional, funny?)
# - What should it NOT do?

MY_SYSTEM_PROMPT = """
You are [NAME], a [description].
Your job is to [purpose].
Your tone is [tone].
Keep your answers [length/style].
"""

# What test messages would you send?
TEST_MESSAGES = [
    "Hello! What can you do?",
    # Add more...
]

for msg in TEST_MESSAGES:
    print(f"Test: {msg}")
    # In Lesson 5-4 you'll connect this to the real API!`,
      solutionCode: "",
      hints: [
        "Be specific in your system prompt — vague instructions give vague results",
        "Include the bot's name, purpose, tone, and any limits (e.g. 'only talk about cooking')",
        "Good system prompts are 2-5 sentences long",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "An API lets your code talk to another service over the internet",
      "The OpenAI API lets you send messages to GPT and get intelligent replies",
      "The system prompt defines your chatbot's personality, purpose, and behaviour",
    ],
  },

  "lesson-5-4": {
    id: "lesson-5-4",
    objectives: [
      "Build a chatbot that remembers the conversation history",
      "Understand why conversation history matters for context",
      "Create a full chat loop in Python",
    ],
    sections: [
      {
        heading: "Why memory matters",
        blocks: [
          { type: "text", content: "If you ask ChatGPT 'Who is the president of France?' and then ask 'How old is he?', it knows what 'he' refers to — because it remembers the previous message. Without memory, each message is treated in isolation and the bot seems forgetful and frustrating." },
          { type: "text", content: "The OpenAI API doesn't store memory for you — you have to pass the full conversation history with every request. This sounds tedious but it's actually simple: just keep a list of all messages and send it each time." },
        ],
      },
      {
        heading: "Building a chatbot with memory",
        blocks: [
          { type: "code", code: `from openai import OpenAI

client = OpenAI(api_key="your-api-key-here")

# Start with the system prompt in the history
conversation = [
    {
        "role": "system",
        "content": "You are a friendly study assistant called RosieBot. Be helpful, warm, and concise."
    }
]

def chat(user_message):
    # Add user message to history
    conversation.append({"role": "user", "content": user_message})

    # Send FULL conversation to the API
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=conversation
    )

    reply = response.choices[0].message.content

    # Add bot reply to history so it's remembered next time
    conversation.append({"role": "assistant", "content": reply})

    return reply

# Conversation with memory
print(chat("Hi! My name is Anu."))
print(chat("What's my name?"))   # It will remember!
print(chat("Can you help me understand loops in Python?"))` },
          { type: "tip", content: "The pattern is always: append user message → call API with full history → append response → repeat. This gives your bot perfect memory." },
        ],
      },
      {
        heading: "A full interactive chat loop",
        blocks: [
          { type: "code", code: `from openai import OpenAI

client = OpenAI(api_key="your-api-key-here")

conversation = [
    {"role": "system", "content": "You are RosieBot, a friendly coding tutor. Be warm, encouraging, and keep answers brief."}
]

print("RosieBot 🌸 — type 'quit' to exit")
print("-" * 40)

while True:
    user_input = input("You: ").strip()

    if not user_input:
        continue
    if user_input.lower() in ["quit", "exit", "bye"]:
        print("RosieBot: Goodbye! Keep coding! 🌷")
        break

    conversation.append({"role": "user", "content": user_input})

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=conversation
    )

    reply = response.choices[0].message.content
    conversation.append({"role": "assistant", "content": reply})

    print(f"RosieBot: {reply}")
    print()` },
          { type: "warning", content: "The conversation list grows with every message. For very long chats you may want to trim old messages to stay within the model's context limit — but for learning purposes this is fine." },
        ],
      },
    ],
    exercise: {
      prompt: "Add a feature to the chatbot below: when the user types 'history', print all the previous messages in the conversation. This is a great way to see how memory works under the hood.",
      starterCode: `from openai import OpenAI

client = OpenAI(api_key="your-api-key-here")

conversation = [
    {"role": "system", "content": "You are a helpful assistant. Be friendly and concise."}
]

def chat(user_message):
    # TODO: Handle the special 'history' command
    if user_message.lower() == "history":
        # Print each message in the conversation (skip the system prompt)
        for msg in conversation[1:]:
            role = "You" if msg["role"] == "user" else "Bot"
            print(f"{role}: {msg['content']}")
        return None   # no API call needed

    conversation.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=conversation
    )
    reply = response.choices[0].message.content
    conversation.append({"role": "assistant", "content": reply})
    return reply

# Test it
reply = chat("Hi! My name is Anu.")
if reply: print(f"Bot: {reply}")

reply = chat("What's 2 + 2?")
if reply: print(f"Bot: {reply}")

# Now check the history!
print("\\n--- Conversation History ---")
chat("history")`,
      solutionCode: "",
      hints: [
        "Check if user_message == 'history' before making the API call",
        "Loop through conversation[1:] to skip the system prompt",
        "Use msg['role'] to tell apart 'user' and 'assistant' messages",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "Chatbot memory = passing the full conversation history with every API call",
      "Keep a list of messages and append each new user/assistant message to it",
      "The roles are: 'system' (personality), 'user' (human), 'assistant' (bot)",
    ],
  },

  "lesson-5-5": {
    id: "lesson-5-5",
    objectives: [
      "Write a powerful system prompt that gives your chatbot a unique personality",
      "Build and test your finished chatbot end to end",
      "Know where to go next to share your chatbot with the world",
    ],
    sections: [
      {
        heading: "The power of a great system prompt",
        blocks: [
          { type: "text", content: "The system prompt is everything. The exact same GPT model can be a warm cooking assistant, a strict grammar teacher, or a hilarious comedian — just by changing a few sentences. This is called **prompt engineering** and it's a genuinely valuable skill." },
          { type: "code", code: `# Example: a recipe chatbot system prompt
RECIPE_BOT_PROMPT = """
You are ChefBot 🍳, an enthusiastic and knowledgeable cooking assistant.
Your job is to help users find recipes, suggest ingredient substitutions,
and explain cooking techniques clearly.

Rules:
- Always suggest recipes based on ingredients the user mentions
- Be warm, encouraging, and use food emojis occasionally
- Keep recipes simple and beginner-friendly
- If asked about non-food topics, gently redirect to cooking
"""

# Example: a study buddy
STUDY_BOT_PROMPT = """
You are Rosie 🌸, a patient and encouraging study companion for someone
learning Python and AI from scratch.

Rules:
- Explain concepts simply, as if talking to a complete beginner
- Use real-life analogies (cooking, shopping, etc.) to explain code concepts
- Always celebrate progress and be kind about mistakes
- Keep explanations short — no more than 3-4 sentences unless asked for more
"""` },
          { type: "tip", content: "Great system prompts include: who the bot is, what it does, what tone it uses, and what it should/shouldn't do. Specific rules produce better results." },
        ],
      },
      {
        heading: "Building your finished chatbot",
        blocks: [
          { type: "code", code: `from openai import OpenAI

# Your completed, personalised chatbot
# Replace the system prompt with YOUR chatbot's personality!

client = OpenAI(api_key="your-api-key-here")

MY_BOT_PROMPT = """
You are [YOUR BOT NAME] 🌸, a [description].
Your purpose is to [main job].
Your tone is [warm/funny/professional/etc].
Keep answers [short/detailed/etc].
"""

conversation = [{"role": "system", "content": MY_BOT_PROMPT}]

def chat(user_message):
    conversation.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=conversation,
        max_tokens=300,
        temperature=0.8,   # 0 = predictable, 1 = creative
    )
    reply = response.choices[0].message.content
    conversation.append({"role": "assistant", "content": reply})
    return reply

# Test your chatbot!
print(chat("Hello! What can you do?"))
print(chat("Give me a quick tip for today."))` },
          { type: "tip", content: "`temperature` controls creativity. 0.0 = very consistent and factual, 1.0 = more varied and creative. For a tutor, use 0.3–0.5. For a creative assistant, use 0.7–0.9." },
        ],
      },
      {
        heading: "What's next — sharing your chatbot",
        blocks: [
          { type: "text", content: "Once you're happy with your chatbot, you can turn it into a real web app that anyone can use — without any coding knowledge." },
          { type: "steps", steps: [
            "**Streamlit** — turn a Python script into a web app in 10 lines of code. Free to deploy.",
            "**Hugging Face Spaces** — free hosting for AI apps, used by millions of developers.",
            "**Gradio** — another quick way to build a chat UI around your Python chatbot.",
          ]},
          { type: "text", content: "Congratulations — you've gone from 'I don't know computers' all the way to building an AI chatbot. That is genuinely impressive. 🌸" },
        ],
      },
    ],
    exercise: {
      prompt: "This is your final project for the whole course! Build your chatbot below with a personality you actually care about. Give it a name, write a detailed system prompt, and test it with at least 5 different messages. Make it yours!",
      starterCode: `from openai import OpenAI

client = OpenAI(api_key="your-api-key-here")

# ✏️ Write your own system prompt!
MY_BOT_NAME = "..."
MY_BOT_PROMPT = """
You are ..., a ...
Your job is to ...
Your tone is ...
"""

conversation = [{"role": "system", "content": MY_BOT_PROMPT}]

def chat(user_message):
    conversation.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=conversation,
        max_tokens=300,
        temperature=0.7,
    )
    reply = response.choices[0].message.content
    conversation.append({"role": "assistant", "content": reply})
    return reply

# 🧪 Test your chatbot with 5+ different messages
test_messages = [
    "Hello! Who are you?",
    # Add more messages here...
]

print(f"=== {MY_BOT_NAME} ===")
for msg in test_messages:
    print(f"You: {msg}")
    print(f"Bot: {chat(msg)}")
    print()`,
      solutionCode: "",
      hints: [
        "Make the system prompt specific — the more detail, the better the personality",
        "Test edge cases: what happens if someone asks something off-topic?",
        "Try different temperature values and see how the responses change",
      ],
      hasCodeEditor: true,
    },
    keyTakeaways: [
      "The system prompt is the most powerful tool for shaping your chatbot's behaviour",
      "temperature controls creativity: lower = consistent, higher = varied",
      "Streamlit and Gradio can turn your Python chatbot into a shareable web app",
    ],
  },
};
