Q: What is `NPM`?
A: NPM It is a tool used for package management and the default package manager for Node projects. When Node.js is installed on a system, NPM is also automatically installed. It provides a Command Line Interface (CLI) to interact with the NPM Registry, a vast database hosting both public and private packages. To add or update these packages in a project, developers use the NPM CLI. An alternative to NPM is Yarn.

How to `initialize` npm?
To initialize npm in a project, the command is npm init. This command starts the setup process. To bypass the setup and create a package.json file with default settings, use npm init -y.

Q: What is `Parcel/Webpack`? Why do we need it?
A: Parcel and Webpack are bundlers for web applications, streamlining development and production by incorporating various functionalities and features. They are known for their fast performance, leveraging multicore processing and often requiring no configuration. Parcel, for instance, can start with any file type, but HTML or JavaScript files are typical starting points.

Features of Parcel:
`HMR (Hot Module Replacement)`: Parcel monitors file changes and updates the application in real-time without needing a full page reload.
`File Watcher Algorithm`: This feature, built with C++, tracks file changes efficiently.
`Minification`: Reduces the size of code and script files.
`Image Optimization`: Optimizes images for better performance.
`Caching in Development`: Enhances development speed by caching assets.
`Zero Configuration`: Requires minimal setup to start.
`Installation Commands`:
`To install Parcel`: npm install -D parcel (-D indicates it's a development dependency).
`For development`: npx parcel <entry_point>
`For production`: npx parcel build <entry_point>

Q: What is `.parcel-cache`?
A: The .parcel-cache directory is used by Parcel to speed up build times. It stores project data from previous builds, allowing Parcel to skip re-parsing and re-analyzing the entire project in subsequent builds.

Q: What is `npx`?
A: NPX is an npm package runner that allows you to execute packages from the NPM registry directly, without needing to install them. It comes with npm version 5.2.0 and higher.

Q: Difference between `dependencies and devDependencies`?
A: In NPM, dependencies are the libraries and frameworks your application relies on to function, like React or Express. devDependencies are tools needed during the development process but not in production, such as bundlers like Parcel or testing tools like Mocha. To install a package as a devDependency, use npm install --save-dev.

Q: What is `Tree Shaking`?
A: Tree shaking is a technique in programming that removes unused code from the final build of an application, optimizing performance and reducing file sizes.

Q: What is `Hot Module Replacement`?
A: Hot Module Replacement (HMR) is a feature that allows for the live updating of modules in a running application without needing a full page reload, helping to maintain application state.

Q: Describe 3 `Parcel superpowers`.
HMR: It allows live updating of modules in the application without full page reload, saving time and preserving application state.
Minification: Reduces file sizes by removing unnecessary characters and spacing from the code, enhancing load times and performance.
Zero Configuration: Parcel requires minimal initial setup, making it easy to start with and efficient for rapid development.

Q: What is `.gitignore`? What should be `included or excluded`?
A: A .gitignore file tells Git which files or directories to ignore during commits. It's essential to add files like environment variables, API keys, and system files (like .DS_store in macOS) to .gitignore for security and relevance reasons. However, package-lock.json should not be ignored as it ensures consistency in dependencies across different setups.

Q: Difference between `package.json and package-lock.json`?
A: package.json is a fundamental file in a project containing project metadata, like the application name, version, and scripts. package-lock.json is automatically generated after an npm install and documents the exact versions of installed packages, ensuring consistency in future installs. The symbols ~ and ^ in package.json dictate how versions are updated in dependency files.

Q: Why should you not modify `package-lock.json`?
A: package-lock.json ensures that the same versions of dependencies are used consistently across different installations and environments. Modifying it can lead to conflicts and inconsistencies, especially in production environments.

Q: What is `node_modules`? Should it be committed to Git?
A: The node_modules folder stores the external modules your project depends on. These are installed via npm and are essential for your project's functionality. However, this folder should not be pushed to Git due to its large size; instead, it can be recreated by running npm install from the package.json file.

Q: What is the `dist` folder?
A: The dist (distribution) folder contains the production-ready, minimized version of your source code, including all compiled modules, optimized for performance and ready for deployment.

Q: What is `browserslist`?
A: Browserslist is a configuration tool that lets you define the range of browser versions your application supports. It's used by various tools and libraries to ensure compatibility and optimize transpiling or prefixing processes.
