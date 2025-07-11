export const jsTopicsData = [
  {
    id: "js-home",
    title: "JS HOME",
    emoji: "📜",
    description: `Welcome to your JavaScript journey! JavaScript is the language of interactivity on the web. Use the sidebar to explore topics from the basics to advanced concepts.`,
    proTip: "Bookmark this page for quick reference. Try code examples in your browser's console (F12).",
    didYouKnow: "JavaScript was created in just 10 days by Brendan Eich in 1995.",
    inputs: null,
    code: `// No code here, just a warm welcome!`,
    output: `// Select a topic from the sidebar to begin.`
  },
  {
    id: "js-intro",
    title: "JS Introduction",
    emoji: "📖",
    description: "JavaScript is a versatile scripting language used to create dynamic and interactive web content.",
    inputs: null,
    code: `console.log("Welcome to Modern JavaScript!");`,
    output: `Welcome to Modern JavaScript!`,
    proTip: "You can run JavaScript directly in your browser's developer console (F12 or Ctrl+Shift+I).",
    didYouKnow: "Despite its name, JavaScript has no direct relationship with the Java programming language.",
  },
  {
    id: "js-syntax",
    title: "JS Syntax",
    emoji: "✍️",
    description: "JavaScript syntax is the set of rules that define a correctly structured JavaScript program. Statements are typically separated by semicolons.",
    inputs: null,
    code: `// A variable declaration and a function call.\nlet message = "Hello, World!";\nconsole.log(message);`,
    output: `Hello, World!`,
    proTip: "While semicolons can be optional due to Automatic Semicolon Insertion (ASI), it's a best practice to use them to prevent subtle bugs.",
    didYouKnow: "JavaScript ignores extra whitespace and line breaks, which you can use to format your code for readability.",
  },
  {
    id: "js-variables",
    title: "JS Variables",
    emoji: "🔢",
    description: "Variables store data values. Use `let` for variables that can be reassigned and `const` for constants that cannot.",
    inputs: null,
    code: `const name = "Alex"; // Cannot be changed
let age = 30; // Can be changed

// Using a template literal for easier string formatting
console.log(\`\${name} is \${age} years old.\`);`,
    output: `Alex is 30 years old.`,
    proTip: "Prefer `const` by default. Only use `let` when you know you'll need to reassign the variable. Avoid `var` in modern codebases.",
    didYouKnow: "`var` is function-scoped, while `let` and `const` are block-scoped, which is more intuitive and helps prevent bugs.",
  },
  {
    id: "js-operators",
    title: "JS Operators",
    emoji: "➕",
    description: "Operators perform operations on variables and values, like arithmetic, assignment, comparison, and logic.",
    inputs: `const initialValue = 10;\nconst multiplier = 2.5;`,
    code: `const initialValue = 10;\nconst multiplier = 2.5;\nlet finalValue = initialValue * multiplier; // Arithmetic: 25\n\n// Ternary operator for a conditional check\nconst status = (finalValue > 20) ? "High" : "Low";\n\nconsole.log(\`Final value: \${finalValue}\`);\nconsole.log(\`Status: \${status}\`);`,
    output: `Final value: 25\nStatus: High`,
    proTip: "Always use the strict equality operator `===` instead of `==` to avoid unexpected type coercion issues.",
    didYouKnow: "The nullish coalescing operator `??` provides a default value for `null` or `undefined`, e.g., `let name = receivedName ?? 'Guest';`",
  },
  {
    id: "js-datatypes",
    title: "JS Data Types",
    emoji: "📦",
    description: "JavaScript has several primitive types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) and one complex type (Object).",
    inputs: null,
    code: `const name = "Alice";       // String\nconst score = 95.5;         // Number\nconst isActive = true;      // Boolean\nlet notAssigned;            // Undefined\n\nconsole.log(typeof name);\nconsole.log(typeof score);\nconsole.log(typeof notAssigned);`,
    output: `string\nnumber\nundefined`,
    proTip: "Use the `typeof` operator to check a variable's data type, but be aware that `typeof null` surprisingly returns 'object', a long-standing quirk in the language.",
    didYouKnow: "JavaScript is a dynamically-typed language, so a variable's type is determined at runtime and can change.",
  },
  {
    id: "js-functions",
    title: "JS Functions",
    emoji: "🛠️",
    description: "Functions are reusable blocks of code. Modern JS heavily uses arrow functions for their concise syntax.",
    inputs: `// Input 1: "Maria"\n// Input 2: (no argument)`,
    code: `// Modern arrow function with a default parameter\nconst createGreeting = (name = "Guest") => {\n  return \`Hello, \${name}! Welcome.\`;\n};\n\nconsole.log(createGreeting("Maria"));\nconsole.log(createGreeting()); // Uses the default value`,
    output: `Hello, Maria! Welcome.\nHello, Guest! Welcome.`,
    proTip: "Functions are 'first-class citizens', meaning they can be passed as arguments, returned from other functions, and assigned to variables.",
    didYouKnow: "Arrow functions do not have their own `this` binding, they inherit it from the surrounding code, which is very useful in classes and event handlers.",
  },
  {
    id: "js-objects",
    title: "JS Objects",
    emoji: "🧩",
    description: "Objects are collections of key-value pairs, used to group related data and functionality.",
    inputs: `const userProfile = { ... }`,
    code: `const userProfile = {\n  username: "dev_jane",\n  followers: 402,\n  isActive: true,\n  getInfo: function() {\n    return \`\${this.username} has \${this.followers} followers.\`;\n  }\n};\n\n// Destructuring to extract values into variables\nconst { username } = userProfile;\n\nconsole.log(username);\nconsole.log(userProfile.getInfo());`,
    output: `dev_jane\ndev_jane has 402 followers.`,
    proTip: "Use destructuring (`const { key1, key2 } = myObject;`) to cleanly extract properties from objects into variables.",
    didYouKnow: "Almost everything in JavaScript that isn't a primitive is an object, including arrays and functions.",
  },
  {
    id: "js-arrays",
    title: "JS Arrays",
    emoji: "📚",
    description: "Arrays hold ordered lists of values. Modern array methods like `.map()` and `.filter()` are essential for data manipulation.",
    inputs: `const numbers = [10, 20, 30, 40];`,
    code: `const numbers = [10, 20, 30, 40];\n\n// Use the .map() method to create a new array\n// by applying a function to each element.\nconst doubledNumbers = numbers.map(num => num * 2);\n\nconsole.log(doubledNumbers);`,
    output: `[ 20, 40, 60, 80 ]`,
    proTip: "Chain array methods for powerful, readable data transformations: `myArray.filter(...).map(...)`.",
    didYouKnow: "The `.reduce()` method can be used to boil an array down to a single value, like summing all numbers or building a complex object.",
  },
  {
    id: "js-loops",
    title: "JS Loops",
    emoji: "🔁",
    description: "Loops run the same code multiple times. The `for...of` loop is the modern standard for iterating over arrays.",
    inputs: `const fruits = ["Apple", "Banana", "Cherry"];`,
    code: `const fruits = ["Apple", "Banana", "Cherry"];\n\n// The modern for...of loop is best for iterating over array values\nfor (const fruit of fruits) {\n  console.log(\`I love to eat \${fruit}s!\`);\n}`,
    output: `I love to eat Apples!\nI love to eat Bananas!\nI love to eat Cherrys!`,
    proTip: "Use `for...in` to loop over the keys of an object, and `for...of` to loop over the values of an iterable (like an Array or String).",
    didYouKnow: "You can use `break` to exit a loop early or `continue` to skip to the next iteration.",
  },
  {
    id: "js-conditionals",
    title: "JS Conditionals",
    emoji: "🚦",
    description: "Use `if`, `else if`, and `else` to execute different blocks of code based on conditions.",
    inputs: `const temperature = 22;`,
    code: `const temperature = 22; // Celsius\nlet weatherAdvice;\n\nif (temperature > 30) {\n  weatherAdvice = "It's hot! Wear shorts.";\n} else if (temperature > 15) {\n  weatherAdvice = "It's pleasant. A light jacket is a good idea.";\n} else {\n  weatherAdvice = "It's cold! Wear a warm coat.";\n}\nconsole.log(weatherAdvice);`,
    output: `It's pleasant. A light jacket is a good idea.`,
    proTip: "The ternary operator `(condition ? exprIfTrue : exprIfFalse)` is a concise one-line alternative for simple if-else statements.",
    didYouKnow: "Falsy values in JavaScript are `false`, `0`, `''`, `null`, `undefined`, and `NaN`. All other values are truthy in a boolean context.",
  },
  {
    id: "js-dom",
    title: "JS DOM",
    emoji: "🌳",
    description: "The DOM represents a webpage as a tree of objects that JavaScript can modify to create dynamic content.",
    inputs: `// In HTML: <div id="app"><h1>Loading...</h1></div>`,
    code: `// In your JS file:\nconst appContainer = document.querySelector("#app");\n\n// Change the content inside the selected element\nappContainer.innerHTML = \`\n  <h2>Content Loaded!</h2>\n  <p>This content was generated by JavaScript.</p>\n\`;`,
    output: `The HTML inside the div with id="app" is replaced with the new h2 and p elements.`,
    proTip: "Use `querySelector` and `querySelectorAll` with CSS selectors to flexibly select any element(s) on the page.",
    didYouKnow: "Manipulating the DOM can be slow. For performance-critical apps, frameworks like React use a 'Virtual DOM' to minimize direct DOM changes.",
  },
  {
    id: "js-events",
    title: "JS Events",
    emoji: "🎉",
    description: "Events allow your code to react to user actions. The modern approach is using `addEventListener`.",
    inputs: `A user click on the HTML button with id="actionBtn".`,
    code: `// In HTML: <button id="actionBtn">Click Me</button>\n// In your JS file:\nconst button = document.getElementById("actionBtn");\n\nbutton.addEventListener("click", () => {\n  document.body.style.backgroundColor = "lightblue";\n  console.log("Event triggered: Page background changed!");\n});`,
    output: `The page background turns light blue.\nconsole.log: "Event triggered: Page background changed!"`,
    proTip: "`addEventListener` is preferred over HTML `onclick` attributes because it separates your JavaScript from your HTML and allows multiple event handlers on one element.",
    didYouKnow: "Events can 'bubble' up from a child element to its parents, or 'capture' down from parent to child. You can control this with `addEventListener` options.",
  },
  {
    id: "js-async-await",
    title: "JS Async/Await",
    emoji: "⏳",
    description: "`async/await` is modern syntax for handling asynchronous operations, like fetching data, making code look synchronous and easier to read.",
    inputs: `API Endpoint: 'https://jsonplaceholder.typicode.com/users/1'`,
    code: `async function fetchUser() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\n    if (!response.ok) throw new Error("Network response was not ok.");\n    \n    const userData = await response.json();\n    console.log(userData.name);\n\n  } catch (error) {\n    console.error("Fetch error:", error.message);\n  }\n}\n\nfetchUser();`,
    output: `// After a short delay:\nLeanne Graham\n// Or if it fails:\nFetch error: Network response was not ok.`,
    proTip: "Any function declared with `async` automatically returns a Promise. `await` can only be used inside an `async` function.",
    didYouKnow: "Top-level `await` is a new feature that allows you to use the `await` keyword outside of an `async` function in ES modules.",
  },
  {
    id: "js-promises",
    title: "JS Promises",
    emoji: "🤝",
    description: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.",
    inputs: null,
    code: `const fetchData = new Promise((resolve, reject) => {\n  const isSuccess = Math.random() > 0.5; // 50% chance of success\n  setTimeout(() => {\n    if (isSuccess) {\n      resolve({ data: "Here is your data!", status: 200 });\n    } else {\n      reject(new Error("Failed to fetch data."));\n    }\n  }, 1500);\n});\n\nfetchData\n  .then(response => console.log("Success:", response.data))\n  .catch(error => console.error("Error:", error.message))\n  .finally(() => console.log("Operation finished."));`,
    output: `(After 1.5s, one of these will appear)\nSuccess: Here is your data!\nOperation finished.\n\n// OR\n\nError: Failed to fetch data.\nOperation finished.`,
    proTip: "`Promise.all()` is great for running multiple promises in parallel and waiting for all to complete. `Promise.race()` resolves or rejects as soon as the first promise in an array settles.",
    didYouKnow: "Before Promises, JavaScript developers relied on 'callback hell'—deeply nested callback functions—to handle asynchronous code, which was much harder to read.",
  },
  {
    id: "js-classes",
    title: "JS Classes",
    emoji: "🏛️",
    description: "Classes are templates for creating objects, providing a cleaner syntax for prototypal inheritance and object-oriented patterns.",
    inputs: `new Product("Laptop", 1200)`,
    code: `class Product {\n  // Private field (newer syntax)\n  #taxRate = 0.07;\n\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n\n  getPriceWithTax() {\n    return this.price * (1 + this.#taxRate);\n  }\n\n  display() {\n    console.log(\`\${this.name}: $\${this.getPriceWithTax().toFixed(2)} (incl. tax)\`);\n  }\n}\n\nconst laptop = new Product("Laptop", 1200);\nlaptop.display();`,
    output: `Laptop: $1284.00 (incl. tax)`,
    proTip: "Use the `extends` keyword to create a child class that inherits from a parent, and `super()` to call the parent's constructor.",
    didYouKnow: "JavaScript classes are primarily 'syntactic sugar' over the existing prototype-based inheritance. They don't introduce a new object-oriented model.",
  },
  {
    id: "js-modules",
    title: "JS Modules",
    emoji: "📦",
    description: "Modules allow you to split code into separate, reusable files. Use `export` to expose functionality and `import` to use it.",
    inputs: `// File 1: utils.js\n// File 2: main.js`,
    code: `// In file: utils.js\nexport const PI = 3.14;\nexport function greet(name) { return \`Hello, \${name}\`; }\n\n// In file: main.js\nimport { PI, greet } from './utils.js';\nconsole.log(greet('World'));\nconsole.log(\`PI is approx: \${PI}\`);`,
    output: `Hello, World\nPI is approx: 3.14`,
    proTip: "Use `export default` for the primary, single export of a module, and named `export`s (like in the example) for secondary utilities.",
    didYouKnow: "To use ES Modules natively in a browser, you must add `type=\"module\"` to your `<script>` tag.",
  },
  {
    id: "js-json",
    title: "JS JSON",
    emoji: "🗂️",
    description: "JSON (JavaScript Object Notation) is a lightweight text-based format for exchanging data between a server and a web application.",
    inputs: `const user = { id: 1, name: "John Doe", isAdmin: false };`,
    code: `const user = { id: 1, name: "John Doe", isAdmin: false };\n\n// Convert a JS object to a JSON string\nconst jsonString = JSON.stringify(user, null, 2); // 2 = pretty-print\nconsole.log("JSON String:\\n" + jsonString);\n\n// Convert a JSON string back to a JS object\nconst parsedObject = JSON.parse(jsonString);\nconsole.log("Parsed Object Name:", parsedObject.name);`,
    output: `JSON String:\n{\n  "id": 1,\n  "name": "John Doe",\n  "isAdmin": false\n}\nParsed Object Name: John Doe`,
    proTip: "The second and third arguments of `JSON.stringify` can be used as a replacer function and for spacing/indentation, respectively, to customize the output.",
    didYouKnow: "JSON syntax is a subset of JavaScript's object literal syntax but is stricter: keys must be double-quoted strings, and no functions or comments are allowed.",
  },
];