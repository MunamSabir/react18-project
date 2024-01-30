- What is `Emmet`?
  Ans: Emmet is a vital toolkit for web developers, offering a way to rapidly expand abbreviations into complete HTML and CSS code. It's based on a shorthand notation that many developers are familiar with, which gets translated into full HTML and CSS, streamlining the coding process.

- Difference between a `Library and Framework`?
  Ans: A library consists of a set of tools that perform specific functions and can be selectively used by developers in their code. React.js is an example of a library. A framework, such as Angular, provides a more comprehensive structure for software development, dictating the overall flow and architecture of the application. While a library offers specific methods that can be called as needed, a framework outlines the software's flow and calls upon the developer's code according to its framework.

- What is `CDN`? Why do we `use` it?
  Ans: A Content Delivery Network (CDN) is a network of servers distributed geographically to facilitate faster and more secure delivery of internet content. Its primary purpose is to enhance performance by serving content from locations closer to the user.

- Why is `React known as React`?
  Ans: The name React aptly describes its functionality, as it's designed to respond to data changes in an application, enabling the automatic and efficient update of user interfaces. It's a JavaScript UI development library managed by Facebook and an open-source community, offering a declarative and flexible approach to UI design.

- What is `crossorigin in script tag`?
  Ans: The crossorigin attribute in a script tag is used to configure CORS (Cross-Origin Resource Sharing) requests. It allows resources to be shared safely between different domains. Essentially, it ensures the security of resource sharing across domains by managing CORS requests.

- What is difference between `React and ReactDOM`?
  Ans: React is a JavaScript library for building user interfaces, containing core functionalities like React.createElement() and React.Component. ReactDOM, on the other hand, enables React to interact with the DOM and includes methods like ReactDOM.render() for rendering components. It also supports server-side rendering with functionalities like ReactDOMServer.renderToString().

- What is difference between `react.development.js` and `react.production.js` files via CDN?
  Ans: The react.development.js is used during the development phase of an application, providing a slower, more detailed coding experience ideal for debugging. The react.production.js is optimized for public release, focusing on speed and efficiency, making it significantly faster than its development counterpart.

- What is `async and defer`?
  Ans: Async is an attribute that allows a script to load in parallel to the page parsing and executes it as soon as it's downloaded. It’s useful for scripts that don’t depend on other scripts or DOM readiness.
  <script src="demo_async.js" async></script>

  Defer, meanwhile, also loads the script alongside the parsing of the page but executes it only after the entire page has been parsed. This is beneficial for scripts that need the full HTML DOM to be available
  <script src="demo_defer.js" defer></script>

  Using type="module" in script tags enhances code organization and enforces strict mode, among other benefits. It also ensures asynchronous loading and execution after DOM initialization.
  <script type="module" src="main.js"></script>

  A nomodule tag can serve as a fallback for legacy systems.
  <script defer nomodule></script>
