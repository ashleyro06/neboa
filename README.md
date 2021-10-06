# neboa

Neboa can be found in https://neboa.netlify.app/

## What is Neboa?

Neboa is a weather api consumer, it is meant to display forecast and climatological information, no matter where you are.
As its functionality is only related with the consumption of an API, Noboa is no responsible of the data displayed here.

## Development tools

Neboa is built in **Vue 3** with **Vue-cli**
As vue-cli documentation states and according to the needs of the development process, there was no need to involve a personal configuration for webpack, however it is not restricted to it and could be added in a future, webpack implementation is not going to make any relevant changes in the structure that is already built.
For linting purposes , this application also uses **Eslint**

### Styling

Noboa uses **Sass** for custom styling and also imports **PrimeVue** with **PrimeFlex** for generic design and components.

### Other

For navigation and state management, the project uses Vue features like **Vuex** and **Vue-router**

## Local deployment

For local deployment, you must have installed **NodeJS** **NPM** and **Vue-cli**
If you already have them, skip the next steps.

### Project setup

1. In a web browser navigate to [NodeJS](https://nodejs.org/es/download/), download the installer for your OS and follow the installation process.
2. Open the terminal and run
   ```
   npm install -g @vue/cli
   ```
3. In the root folder of the project, open the terminal and run
   ```
   npm install
   ```
   ```
   npm run serve
   ```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


