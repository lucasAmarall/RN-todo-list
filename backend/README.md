
## Description
Todo List Graphql API

## Prerequisites
    - Docker installed locally

## Installation
All the solution runs in docker, but the CLI runs outside, that's why you need to install the dependencies.
```bash
$ cd backend && npm ci
```

```bash
$ docker-compose up
```

## Running migrations and seeds
After the API is up. run the migrations and seeds to insert dummy user
```bash
$ npm run migrate:dev:deploy
$ npm run seed
```
## User Information

```bash
# email: user@test.com
# password: Test1234
```

## Playground

```bash
    # http://localhost:3000/graphql
```

## Troubleshoot
If you're running on Windows and docker-compose fails. check the comment in the file `docker-compose.yml` 