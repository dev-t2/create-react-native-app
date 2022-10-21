# Setup Create React Native App

## [Create React Native App](https://github.com/expo/create-react-native-app)

```
npx create-react-native-app
```

- How would you like to start » Default new app

## [Adding TypeScript to an Existing Project](https://reactnative.dev/docs/typescript#adding-typescript-to-an-existing-project)

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
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

## [ESLint](https://eslint.org)

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

## [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

```
npm install eslint-plugin-react-hooks --save-dev
```

```
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

## Clean up project-wide file codes
