[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=24139915)
# React + Webpack Practice Project

This project builds a React app with Webpack and Babel.

## Prerequisites

- Node.js (recommended: current LTS)
- npm

## Install Dependencies

```bash
npm install
```

## Build the Project

```bash
npm run build
```

This creates the bundle at:

- `dist/assets/bundle.js`

## Start the Project Locally

After building, serve the `dist` folder:

```bash
npx serve dist
```

Then open the local URL shown in your terminal (usually http://localhost:3000).

## Project Structure

```text
src/
  index.js
  components/
    Ingredients.js
    IngredientsList.js
    Instructions.js
    Menu.js
    Recipe.js
  data/
    recipes.json
```

## Available npm Scripts

- `npm run build` - builds the app for production using Webpack
