<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A Boilerplate for <b>NodeJS-NESTJS-React</b> for building efficient Monorepo applications.</p>
    <p align="center">
    <a href="https://github.com/facebook/create-react-app" target="_blank"><img src="https://badges.aleen42.com/src/react.svg" alt="React" /></a>
    <a href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" target="_blank"><img src="https://badges.aleen42.com/src/typescript.svg" alt="TypeScript" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository with **React in Front-End**.

System Requirements

1. MongoDB
2. MySQl
3. Node version 14+

## Boiler Plate Features

1. Sample Module for reference with working routes
2. MongoDB connection
3. MySQL connection
4. Centralized configuration and .env files

## Local Boiler Plate Env

```JS
PORT = 3000
API_PREFIX = /api
EXCLUDE_PREFIX = /api/(.*)
MONGO_URI = mongodb://127.0.0.1:27017
MONGO_DATABASE = nest
SQL_DIALECT = mysql
SQL_HOST = 127.0.0.1
SQL_PORT = 3306
SQL_PASSWORD = password
SQL_USER = root
SQL_DATABASE = nest
SPA_1_PATH = client/build
```

## Getting Started With The App

```Bash
npm run monorepo:dev
```

Try hitting below curl to save a user object in mongoDB

```CURL
curl --location 'localhost:3000/api/sample/mongo' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "ken",
    "password": "front",
    "email":"ken@gmail.com",
    "roles":"User"
}'
```

Try hitting below curl to save a user object in MySQL

```CURL
curl --location 'localhost:3000/api/sample/sql' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "ken",
    "password": "front",
    "email":"ken@gmail.com",
    "roles":"User"
}'
```

## Installation Of Monorepo

```bash
$ npm run install:all
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# monorepo dev env
$ npm run monorepo:dev

# monorepo prod env
$ npm run monorepo:prod
```

## Create Nest Components

```bash
# Create Module
nest g module <modulename> --options

# Create Controller
nest g controller <controllername> --options

# Create Service
nest g service <servicename> --options

# Create Guard
nest g guard <gaurdname> --options

# Create Decorator
nest g decorator <decoratorname> --options
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
