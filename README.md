# Setup Create React Native App

## 1. [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

## 2. [Create React Native App](https://github.com/expo/create-react-native-app)

- [Introducing Create React Native App](https://reactnative.dev/blog/2017/03/13/introducing-create-react-native-app)

```
npx create-react-native-app
```

- How would you like to start » Default new app

## 3. [Adding TypeScript to an Existing Project](https://reactnative.dev/docs/typescript#adding-typescript-to-an-existing-project)

```
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

```
tsconfig.json

{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "types": ["react-native", "jest"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

- Rename a JavaScript file to be \*.tsx
- You should leave the ./index.js entrypoint file as it is otherwise you may run into an issue when it comes to bundling a production build.

## 4. [ESLint](https://eslint.org)

```
npm init @eslint/config
```

1. How would you like to use ESLint? · To check syntax only
2. What type of modules does your project use? · JavaScript Modules
3. Which framework does your project use? · React
4. Does your project use TypeScript? · Yes
5. Where does your code run? · Node
6. What format do you want your config file to be in? · JSON
7. Would you like to install them now? · Yes
8. Which package manager do you want to use? · NPM

## 5. [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

```
npm install eslint-plugin-react-hooks --save-dev
```

```
.eslintrc.json

{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```

## 6. Finally, clean up project-wide file codes 🚀
