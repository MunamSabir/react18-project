Q: What is the difference between `Named export, Default export, and * as export`?
A: ES6 introduces various ways to export modules from a file:

`Named Export`:
Multiple named exports per file are possible.
Import syntax requires the exact name of the exported module, wrapped in {}.
Syntax for export: export const MyComponent = () => {};
Syntax for import:
Single import: import { MyComponent } from "./MyComponent";
Multiple imports: import { MyComponent, MyComponent2 } from "./MyComponent";
Renaming: import { MyComponent2 as MyNewComponent } from "./MyComponent";

`Default Export`:
Only one default export per file.
Import name can differ from the exported module's name.

`Syntax for export`:
const MyComponent = () => {};
export default MyComponent;

`Syntax for import`: import MyComponent from "./MyComponent";

- as Export:

Used to import all exports from a module as a single object.
Syntax for export is the same as named exports.
Syntax for import: import \* as MainComponents from "./MyComponent";
Usage in JSX: <MainComponents.MyComponent />, <MainComponents.MyComponent2 />
Named and Default exports can be used together, allowing a mix of import styles.

Q: What is the importance of `config.js` file?
A: config.js files are used for storing configuration settings for applications. They typically contain key-value pairs and are easily editable, allowing for user customization and flexibility in application settings. Configuration files simplify managing and updating various settings without altering the application's code.

Q: What are `React Hooks`?
A: React Hooks, introduced in React 16.8, allow functional components to manage state and side-effects, previously only possible in class components. They enable the reuse of stateful logic across components and contribute to a cleaner, more modular codebase.

`Standard Hooks provided by React`:
`useState`: Manages state within a component.
`useEffect`: Handles side-effects like API calls, subscriptions, etc.
`useContext`: Accesses the current value of a context.
`useReducer`: An alternative to useState for complex state logic.
`useCallback`: Returns a memoized callback function.
`useMemo`: Returns a memoized value for performance optimization.
`useRef`: Accesses DOM elements or stores mutable values.
`useLayoutEffect`: Similar to useEffect, but fires synchronously after all DOM mutations.
`useDebugValue`: Labels custom hooks in React DevTools.

Q: Why do we need `useState Hook`?
A: The useState hook is essential in React for managing local state in functional components. It replaces the need for state management in class components, offering a more straightforward and functional approach. useState provides a way to declare state variables in functional components, track their updates, and re-render the component when the state changes.

`Syntax of useState Hook`:

const [state, setState] = useState(initialState);

Usage:
To use useState, import it from React: import React, { useState } from "react";
Suitable for managing independent state variables in functional components.
Promotes component reusability and readability.
