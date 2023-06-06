# My Portfolio

## Description

This is my portfolio. It contains some information about me, my current skills, some projects and a contact form.

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Enviroment Variables](#enviroment-variables)
* [Built With](#built-with)
* [Contact](#contact)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of `nodejs` and `npm`.

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the project folder: `cd Portfolio`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:5173` to see the project running

## Enviroment Variables

To run properly, be sure to create a `.env` file in the root of the project with the following variables:

``` bash
VITE_SEND_EMAIL_AUTH_KEY=
VITE_SEND_EMAIL_SOURCE_NAME=
VITE_SEND_EMAIL_SOURCE_EMAIL=
```

- `VITE_SEND_EMAIL_AUTH_KEY` is the API key to access
  the [SEND EMAILS API](https://github.com/TiagoRibeiro25/Send-Email-REST-API)
- `VITE_SEND_EMAIL_SOURCE_NAME` is the name that will appear in the email sent
- `VITE_SEND_EMAIL_SOURCE_EMAIL` is the email that will appear in the email sent

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [React Router](https://reactrouter.com/) - Declarative routing for React
* [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
* [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
* [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
* [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js
* [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code

## Contact

If you want to contact me you can reach me through an [email](mailto:tiago.d.ribeiro@hotmail.com)
