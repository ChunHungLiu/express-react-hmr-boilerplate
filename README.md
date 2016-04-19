# Express-React-HMR-Boilerplate

This is a boilerplate for scaffolding MERN stack projects with livereload feature supported.

## Demo

<https://express-react-hmr-boilerplate.herokuapp.com/>

## Installation

```
npm install -g gulp
npm install -g jscs
npm install
```

## Add `config/credentials.js`

This is where credentials are stored, so you have to provide your own. Here is the example format:

```js
export default {
  mongoDbUri: 'mongodb://<user>:<password>@<domain>:<port>/<db>',
};
```

## Build & Run

For development:
```
gulp
```

For production:
```
gulp build:production
npm start
```

## Test

```
npm test
```

## Deploy on heroku

Please login heroku first, and run the command

```
gulp build:production
gulp deploy [--app=<heroku_app_name>] [--create]
```

### Options

- `-a`, `--app`

  Specify new or existing app name of heroku. Default will be package name inside `package.json`.

- `-c`, `--create`

  If you want to create new app on heroku, please use this switch.

## Roadmap

- [x] Livereload
- [x] Heroku Deploy Script
- [x] Travis CI
- [ ] React-Router
- [ ] SSR
- [ ] Isomorphic