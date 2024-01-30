Q: Is JSX mandatory for React?
A: JSX is not mandatory for React development but is commonly used due to its convenience. It allows for writing HTML in JavaScript, making the creation of React elements more intuitive and cleaner. Although anything achievable with JSX can also be done with plain JavaScript, JSX simplifies the syntax and is preferable for clarity and ease of use.

Example of JSX:
const sample = <h2>Greetings</h2>;

Q: Is ES6 mandatory for React?
A: While ES6 is not strictly required for React, it is highly recommended. Modern React projects heavily utilize ES6 features, such as classes, arrow functions, and new variable declarations like let and const. ES6, the 6th version of ECMAScript, introduces many enhancements that make JavaScript more efficient and easier to work with, particularly in React development.

Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
A:{TitleComponent}: Interprets TitleComponent as a JavaScript expression, variable, or React element. The {} syntax is used to embed JavaScript into JSX.
<TitleComponent/>: Renders TitleComponent, assuming it's a function returning JSX. This syntax is used for components without children.
<TitleComponent></TitleComponent>: The same as <TitleComponent/>, but used when there are child components nested within TitleComponent.
Example:
<TitleComponent>
<FirstChildComponent />
<SecondChildComponent />
<ThirdChildComponent />
</TitleComponent>

Q: How can I write comments in JSX?
A: In JSX, comments are written inside curly braces and use the /_ ... _/ syntax, similar to multi-line comments in JavaScript.

Example:
{/_ A single-line JSX comment _/}
{/_
A multi-line
JSX comment
_/}

Q: What is <React.Fragment> and <>?
A: <React.Fragment> and its shorthand <> are used in React to group multiple elements without adding extra nodes to the DOM. They are especially useful for wrapping adjacent JSX elements. The shorthand <> cannot accept attributes like key, unlike <React.Fragment>.

Example:
return (
<React.Fragment>
<Header />
<Navigation />
<Main />
<Footer />
</React.Fragment>
);

return (
<>
<Header />
<Navigation />
<Main />
<Footer />
</>
);

Q: What is `Reconciliation` in React?
A: Reconciliation is React's mechanism for updating the DOM efficiently. React maintains a Virtual DOM, a lightweight copy of the actual DOM. When component states change, React compares the new Virtual DOM with the previous one using a diffing algorithm and then updates only the changed parts in the actual DOM. This process ensures updates are fast and minimizes direct manipulation of the DOM.

Q: What is `React Fiber`?
A: React Fiber is a reimplementation of React's core reconciliation algorithm, introduced in React 16. It enhances React's ability to handle asynchronous rendering, allowing for pausing, resuming, and prioritizing rendering work. Fiber optimizes rendering and enables the splitting of rendering work into chunks, making React applications more responsive and efficient.

Q: Why do we need keys in React?
A: In React, keys are used in lists to uniquely identify each list item. They help React track which items have changed, been added, or removed, which is crucial for efficient updates. Providing unique keys ensures that only the components that actually change are re-rendered, improving performance.

Example:

<ul>
  <li key={0}>Item 1</li>
  <li key={1}>Item 2</li>
  <li key={2}>Item 3</li>
</ul>

Q: Can we use `index as keys` in React?
A: Using indices as keys in React is possible, but generally not recommended. It can lead to performance issues and bugs, especially if the list can change. If the list order changes, using indices as keys may lead to inefficient updates and inconsistencies in component state.

Q: What are `props` in React?
A: Props (short for properties) in React are used to pass data from parent components to child components. They allow for dynamic data flow and are essential for component reusability and composition in React applications.

Example:

function Tool({ name, tool }) {
return <div>{name} uses {tool}</div>;
}

function App() {
return (
<div className="App">
<Tool name="Chetan Nada" tool="Figma" />
</div>
);
}

Q: What is `Config Driven UI`?
A: Config Driven UI refers to building user interfaces based on configuration data. This approach allows for dynamic UI generation based on configurations, making the application adaptable and scalable. It's particularly useful for forms and other components that require frequent updates or variations.

Q: Difference between `Virtual DOM and Real DOM?
A:Virtual DOM: A lightweight copy of the Real DOM. It allows React to perform diffing to identify changes, updating the Real DOM efficiently.
Real DOM: The actual representation of the UI in the browser. Direct manipulations are slower and less efficient compared to the Virtual DOM.

    Aspect	                    Virtual DOM	                                                Real DOM
    Efficiency	                High, due to minimal direct DOM updates	                    Lower, due to direct and frequent updates
    Memory Usage	            Less, as it only updates changed items	                    More, as it updates even unchanged items
    Update Speed	            Fast	                                                    Slower
    Direct Rendering	        No, updates are batched	                                    Yes, every change renders immediately
