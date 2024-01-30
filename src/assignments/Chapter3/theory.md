Q: What is `JSX`?
A: JSX, which stands for JavaScript XML, is a syntax extension for JavaScript commonly used with React. It allows developers to write HTML-like code directly within JavaScript files, making it more convenient to describe the structure of UI components. JSX simplifies the process of creating and adding HTML to the DOM in React applications by eliminating the need for createElement() and appendChild() methods, as it automatically converts HTML tags into React elements.

Example 1 with JSX:

const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

Example 2 without JSX:

const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

Q: What are the `superpowers of JSX`?
A: JSX allows you to integrate HTML markup directly within JavaScript code, providing a powerful tool for developing React components. This integration simplifies the process of coding, making components easier to write, maintain, and debug. It seamlessly combines UI structure with JavaScript logic in a single .jsx file.

Example:

function greeting(user) {
// Using JSX
return <h1>{user}, How are you!!!</h1>;
}

Q: What is the role of the `type attribute in a script tag`? What options are available?
A: The type attribute in a <script> tag specifies the scripting language type of the content. By default, it is text/javascript, but it can have other values based on the scripting language used:

text/javascript: Standard type for JavaScript code.
html

<script type="text/javascript"></script>

text/ecmascript: Indicates compliance with the EcmaScript standards.
module: Specifies that the script should be treated as an ES6 module, allowing import/export syntax.
text/babel: For scripts written with Babel that need to be transpiled.
text/typescript: For TypeScript scripts.

Q: `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX`.
A: These syntax variations in JSX serve different purposes:

{TitleComponent}: Treats TitleComponent as a JavaScript expression or variable. It's used when you want to reference a component without rendering it.
<TitleComponent/>: Represents a self-closing JSX element. It's equivalent to a function call returning JSX, used for rendering a component.
<TitleComponent></TitleComponent>: Used when TitleComponent needs to encapsulate child components. The opening and closing tags allow nesting other components within.

Example:
<TitleComponent>
<FirstChildComponent />
<SecondChildComponent />
<ThirdChildComponent />
</TitleComponent>
This format is necessary when TitleComponent acts as a container for other components.
