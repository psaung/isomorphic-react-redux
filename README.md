# Isomorphic-React-Redux

## What's all about
A simple react-redux frontend and expressjs backend workflow. All of the technolgies used in this project are followings. 

[Yarn](https://www.yarnpkg.com) Dependency Management
[React](https://www.github.com/facebook/react)
[React Router](https://www.github.com/ReactTraining/react-router)
[Express](https://www.expressjs.com) 
[Babel](https://www.babeljs.io) ES6 transpiling 
[Webpack](https://webpack.github.io) Module Bundling
[Webpack Dev Middleware](https://www.webpack.github.io/docs/webpack-dev-middleware.html)
[Redux](https://www.github.com/reactjs/redux)
[Redux Dev Tools](https://www.github.com/gaeron/redux-devtools)
[React Router Redux](https://www.github.com/reactjs/react-router-redux] Handling route and Redux/React Router binding
[ESLint](https://www.github.com/elsint/eslint) linting and maintaining code consistency
[ESLint config airbnb](https://www.github.com/airbnb/javascript)  A mostly reasonable approach to Javascript
[Jest](https://www.github.com/facebook/jest) Testing 
[Thunk](https://www.github.com/gaeron/redux-thunk) allows you to write action creators that returns a function instead of an action
[Style Loader](https://www.github.com/webpack-contrib/style-loader)Adds Css to the DOM by injecting a <style> tag
[Nodejs Dashboard](https://github.com/FormidableLabs/nodejs-dashboard) Dashboard for node.js app from the terminal
[Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard) A CLI Dashboard for webpack from the terminal

## Installation

`yarn install`
or
`npm install`

## Running Backend(Api-Server)

You can start api server by running `npm run api-server`. Api Server will be spawn at port `3000` with [Nodejs Dashboard](https://github.com/FormidableLabs/nodejs-dashboard)  cli. 
![http://g.recordit.co/WIUvKhXqnp.gif](http://g.recordit.co/WIUvKhXqnp.gif)

### Database Implementation
This boilerplate ship without any database logic. All of the data in models are implemented as the temporary data which will only available at run time and did not persist. Database implemention is as your own choices.

## Running Frontend(React Redux App)

You can start webpack server by running `npm run open-src`. A webpack dashboard will be spawned and webpack server will be automatically opend at port 8080. 
![http://i.imgur.com/5BWa1hB.png](http://i.imgur.com/5BWa1hB.png)


### Using Redux DevTools

CTRL+H Toggle DevTools Dock
CTRL+Q Move DevTools Dock Position

If you want to disable the dev tools during development, set __DEVTOOLS__ to false in /webpack.dev.config.js. FYI, DevTools are not enabled at production.

## Testing

Facebook Jest to run unit tests on both client and api side. All of test reside in __test__ folder of app and src/js folder.

### Testing the api

You can test expressjs code by running these command. :watch flag for test watching purposes.

```bash
npm run api-test
npm run api-test:watch
```

### Testing the React app

You can test reactjs code by running this command. :watch flag for test watching purposes.

```bash
npm run react-test
npm run react-test:watching
```

### Testing both api and React app
You can test both expresjs and react app by running this command. :watch flag for test watching pruposes.

```bash
npm run test
npm run test:watch
```

## Linting

Use eslint-config-airbnb for maitaining javascript code consistency for both frontend and backend api.
```bash
npm run lint
npm run lint:watch
```

## Stylesheet

There's no css preprocesser is shipped with this boilerplate. You can define style property in src/css directory. All of the style will be exported to the dist/ folder with css map file. 


## Production Build

``` bash
npm run build
npm run build-html
npm start
```
## Credits
This project 

## Contributing

Plese feel free to contribute to this project, either by fixing bugs or other additional features.

## License
MIT
