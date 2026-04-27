# Eloquent JavaScript Study Roadmap

This roadmap is designed to guide you through the study of JavaScript using the book **"Eloquent JavaScript, 3rd Edition"** by Marijn Haverbeke.

## Part 1: Language
Focus on the fundamental logic and data structures of the language.

### Chapter 1: Values, Types, and Operators
*   **Concepts:** Bits, Numbers (Arithmetic, Special numbers), Strings, Unary operators, Boolean values (Comparison, Logical operators), Empty values (`null`, `undefined`), Automatic type conversion (Type coercion).
*   **Exercises:** None (Introduction to basics).

### Chapter 2: Program Structure
*   **Concepts:** Expressions and Statements, Bindings (Variables), Keywords, The Environment, Functions (`console.log`, `prompt`), Return values, Control Flow (Conditional execution, `while`, `do`, `for` loops), Indentation, Comments.
*   **Exercises:**
    *   Looping a triangle
    *   FizzBuzz
    *   Chessboard

### Chapter 3: Functions
*   **Concepts:** Defining functions, Bindings and Scopes (Global vs Local), Nested Scope, Functions as values, Declaration notation, Arrow functions, The call stack, Optional Arguments, Closure, Recursion.
*   **Exercises:**
    *   Minimum
    *   Recursion
    *   Bean counting

### Chapter 4: Data Structures: Objects and Arrays
*   **Concepts:** Data sets, Arrays, Properties, Methods, Objects, Mutability, Array loops, Destructuring, JSON.
*   **Exercises:**
    *   The sum of a range
    *   Reversing an array
    *   A list
    *   Deep comparison

### Chapter 5: Higher-Order Functions
*   **Concepts:** Abstraction, Abstracting repetition, Higher-order functions, Filtering arrays, Transforming with `map`, Summarizing with `reduce`, Composability, Strings and character codes.
*   **Exercises:**
    *   Flattening
    *   Your own loop
    *   Everything
    *   Dominant writing direction

### Chapter 6: The Secret Life of Objects
*   **Concepts:** Encapsulation, Methods, Prototypes, Classes, Class notation, Overriding derived properties, Maps, Polymorphism, Symbols, The iterator interface, Getters/Setters, Inheritance, The `instanceof` operator.
*   **Exercises:**
    *   A vector type
    *   Groups
    *   Iterable groups
    *   Borrowing a method

### Chapter 7: Project: A Robot
*   **Concepts:** Building an automaton, Persistent data structures (Immutability), Pathfinding, Simulation.
*   **Exercises:**
    *   Measuring a robot
    *   Robot efficiency
    *   Persistent group

### Chapter 8: Bugs and Errors
*   **Concepts:** Strict mode, Types (TypeScript mention), Testing, Debugging, Error propagation, Exceptions (`try/catch/finally`), Assertions.
*   **Exercises:**
    *   Retry
    *   The locked box

### Chapter 9: Regular Expressions
*   **Concepts:** Creating Regex, Testing for matches, Character sets, Repeating patterns, Grouping, Matches and groups, The Date class, Word/String boundaries, Choice patterns, Backtracking, The `replace` method, Greed.
*   **Exercises:**
    *   Regexp golf
    *   Quoting style
    *   Numbers again

### Chapter 10: Modules
*   **Concepts:** Modular programming, Packages (NPM), Improvised modules, CommonJS, ECMAScript modules, Building and Bundling.
*   **Exercises:**
    *   A modular robot
    *   Roads module
    *   Circular dependencies

### Chapter 11: Asynchronous Programming
*   **Concepts:** Asynchronicity, Callbacks, Promises, Failure handling, Networks, `async` functions, `await`, Generators, The Event Loop.
*   **Exercises:**
    *   Tracking the scalpel
    *   Building Promise.all

### Chapter 12: Project: A Programming Language
*   **Concepts:** Parsing, The evaluator, Special forms, The environment, Functions, Compilation.
*   **Exercises:**
    *   Arrays
    *   Closure
    *   Comments
    *   Fixing scope

---

## Part 2: Browser
Learn how JavaScript interacts with web pages.

### Chapter 13: JavaScript and the Browser
*   **Concepts:** Networks and the Internet, The Web, HTML, HTML and JavaScript, Security (Sandboxing), Compatibility.
*   **Exercises:** None (Conceptual overview).

### Chapter 14: The Document Object Model (DOM)
*   **Concepts:** Document structure, Trees, Node types, Moving through the tree, Finding elements, Changing the document, Attributes, Layout, Styling, Query selectors, Positioning and Animating.
*   **Exercises:**
    *   Build a table
    *   Elements by tag name
    *   The cat's hat

### Chapter 15: Handling Events
*   **Concepts:** Event handlers, Event objects, Propagation, Default actions, Key events, Pointer events (Mouse, Touch), Scroll events, Focus events, Load event, Timers, Debouncing.
*   **Exercises:**
    *   Balloon
    *   Mouse trail
    *   Tabs

### Chapter 16: Project: A Platform Game
*   **Concepts:** Game state, Actor updates, Motion and Collision, Tracking keys, Running the game.
*   **Exercises:**
    *   Game over
    *   Pausing the game
    *   A monster

### Chapter 17: Drawing on Canvas
*   **Concepts:** SVG vs Canvas, The canvas element, Lines/Surfaces, Paths, Curves, Text, Images, Transformations, Storing/Clearing transformations.
*   **Exercises:**
    *   Shapes
    *   The pie chart
    *   A bouncing ball
    *   Precomputed mirroring

### Chapter 18: HTTP and Forms
*   **Concepts:** The HTTP protocol (Methods, Status codes, Headers), Fetch API, HTTP sandboxing, Form fields, Focus, Disabled fields, Form submission, Text fields, Checkboxes/Radio buttons, Select fields, File fields, Storing data client-side (`localStorage`).
*   **Exercises:**
    *   Content negotiation
    *   A JavaScript workbench
    *   Conway's Game of Life

### Chapter 19: Project: A Pixel Art Editor
*   **Concepts:** Component-based architecture, Application state, DOM building, Drawing tools, Undo history, Saving and Loading.
*   **Exercises:**
    *   Keyboard bindings
    *   Efficient drawing
    *   Circles
    *   Proper lines

---

## Part 3: Node.js
Building server-side applications.

### Chapter 20: Node.js
*   **Concepts:** Background, The `node` command, Node modules, NPM, The file system module (`fs`), The HTTP module, Streams, Creating a file server.
*   **Exercises:**
    *   Search tool
    *   Directory creation
    *   A public space on the web

### Chapter 21: Project: Skill-Sharing Website
*   **Concepts:** System design, Long polling, HTTP interface, The Server, The Client.
*   **Exercises:**
    *   Disk persistence
    *   Comment field resets
