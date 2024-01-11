# Shahir's Portfolio Website

This repository is the codebase for my personal portfolio website, which serves as a professional introduction to me, Shahir, a college student passionate about full-stack development. The website features sections about my interests, a collection of personal projects, a detailed listing of my skills and technologies I'm proficient with, and my resume.

## Live Website

To get to know me and explore my work, visit: [Shahir's Portfolio](https://shahir-47.github.io/Portfolio-Website/)

## Table of Contents

- [Website Overview](#website-overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Configuration Files](#configuration-files)
- [Features](#features)
- [License](#license)

## Website Overview

The portfolio is structured into key sections:

- **Home**: The landing page that welcomes visitors and provides navigation.
- **About**: A personal introduction and my journey in software development.
- **Skills**: A comprehensive list of my technical skillset and tools I use.
- **Projects**: A showcase detailing personal projects I've worked on.
- **Resume**: A downloadable PDF of my professional resume for prospective employers.

## Project Structure

Here's a detailed look at the project organization:

### `dist/`: Production Build

The final, deployable version of the website.

- `img/`: Contains web-optimized versions of the images.
- `index.html`: The primary HTML page loaded when visitors access the site.
- `main.js`: The JavaScript bundle created by Webpack that drives the website's dynamic behavior.

### `src/`: Development Source

The raw codebase for active development.

#### `css/`: Styles

- `normalize.css`: Resets browser defaults to maintain style consistency across different browsers.
- `style.css`: The primary stylesheet defining the custom appearance of the website.

#### `js/`: Scripts

- `about.js`: Powers the 'About' section.
- `homepage.js`: Controls the functionality of the Home section.
- `index.js`: Entry script that ties together different modules and sections.
- `project.js`: Manages the display and functionality of the 'Projects' section.
- `setup.js`: Initializes the shared components like header, footer, and the main content container.

#### `img/`: Original Images

- High-resolution source images for the website.

### `node_modules/`: Third-Party Libraries

- Houses all the libraries and frameworks installed via npm.

### Configuration Files

- `.browserlistrc`: Determines the range of browser versions your projects support, important for tools like Babel and Autoprefixer.
- `.eslintrc.json`: Configures ESLint rules for identifying and reporting on patterns in JavaScript.
- `.gitignore`: Specifies intentionally untracked files to ignore when using Git.
- `.prettierrc`: Defines Prettier code formatting rules for maintaining a consistent style.
- `babel.config.js`: Configures Babel for translating ES6+ JavaScript into backwards compatible versions for older browsers and environments.
- `webpack.config.js`: Provides settings for Webpack, which bundles your JavaScript files and other assets for browser use.
- `LICENSE`: The full text of the MIT License under which this project is made available.
- `package.json`: Lists all dependencies and defines build and development scripts.
- `package-lock.json`: Automatically generated to lock down the versions of a package’s dependencies.

## Technologies Used

- **HTML**: Markup language for creating web pages.
- **CSS**: Styling language for designing web page layouts.
- **JavaScript (ES6+)**: Programming language for web development.
- **Webpack**: Module bundler for JavaScript applications.
- **Babel**: JavaScript compiler for converting ES6+ code down to ES5.
- **ESLint**: Static code analysis tool for identifying problematic patterns in JavaScript code.
- **Prettier**: Opinionated code formatter for maintaining consistent code style.
- **npm**: Package manager for JavaScript and Node.js.

## Features

- A responsive home page that adapts elegantly to different device screens.
- A dynamic projects gallery that highlights my work with detailed descriptions.
- A skills matrix presenting my technical capabilities and tools I've mastered.
- Direct download functionality for my resume, making it easy for potential employers to save and print.

## License

This project is licensed under the [MIT License](LICENSE).
