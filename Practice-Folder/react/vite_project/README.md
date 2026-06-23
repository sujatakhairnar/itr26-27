# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## React Setup and Folder Structure Notes

### Introduction to React

React is a popular JavaScript library used for building user interfaces (UI). It helps developers create fast, interactive, and reusable web applications using components.

### Key Features of React

* Component-Based Architecture
* Virtual DOM
* Reusable Components
* Fast Rendering
* One-Way Data Flow
* Easy State Management

---

# React Project Setup Using Vite

### Step 1: Create a React Project

Open the terminal and run:

```bash
npm create vite@latest
```

### Step 2: Select Project Configuration

```text
Project Name: my-react-app
Framework: React
Variant: JavaScript
```

### Step 3: Navigate to the Project Folder

```bash
cd my-react-app
```

### Step 4: Install Dependencies

```bash
npm install
```

This command installs all the required packages and dependencies for the project.

### Step 5: Start the Development Server

```bash
npm run dev
```

Output:

```text
Local: http://localhost:5173
```

Open the URL in your browser to view the React application.

---

# React Folder Structure

After creating the project, the following folder structure is generated:

```text
my-react-app/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── .gitignore
```

---

# Important Folders and Files

## 1. node_modules

* Contains all installed packages and dependencies.
* Created automatically after running `npm install`.
* Required for the project to work properly.

---

## 2. public

* Stores static files such as images, icons, and documents.
* Files inside this folder can be accessed directly by the browser.

Example:

```text
public/
 ├── logo.png
 ├── favicon.ico
```

---

## 3. src

* The main source code folder of the React application.
* Most of the development work is done inside this folder.

Example:

```text
src/
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

---

## 4. assets

* Used to store images, icons, fonts, and other resources required by the application.

Example:

```text
assets/
 ├── logo.png
 ├── profile.jpg
```

---

## 5. App.jsx

* The main component of the React application.
* Responsible for displaying the user interface.

Example:

```jsx
function App() {
  return (
    <h1>Hello React</h1>
  );
}

export default App;
```

---

## 6. main.jsx

* Entry point of the React application.
* Connects the React application to the HTML page and renders the main component.

Example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <App />
);
```

---

## 7. package.json

* Contains project information.
* Manages dependencies and scripts.
* Stores package versions and project configuration.

Example:

```json
{
  "name": "my-react-app",
  "version": "1.0.0"
}
```

---

## 8. vite.config.js

* Configuration file for Vite.
* Used to manage project settings and plugins.

---

# Tailwind CSS Overview

After successfully setting up the React project, we explored Tailwind CSS, a utility-first CSS framework used to design modern and responsive user interfaces. Tailwind provides pre-defined utility classes that help developers style elements quickly without writing extensive custom CSS. It improves development speed, maintains consistency in design, and simplifies the process of creating responsive layouts within React applications.

---

# Conclusion

In this session, we learned how to create a React project using Vite, install dependencies, run the development server, and understand the project folder structure. We explored the purpose of important folders and files such as `src`, `public`, `App.jsx`, `main.jsx`, and `package.json`. Additionally, we gained an overview of Tailwind CSS and understood its role in building modern, responsive, and visually appealing user interfaces within React applications.
