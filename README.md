# ImLazy backend API

ImLazy was at the beggining only a Node.js bot using Puppeteer module to invite workaway members in the area to meetup.
Then it evolved with a ReactJs UI and now taking a "SAAS template" form. (auth, user management...)

This project correspond to the backend API for the [**ImLazy** app frontend](https://github.com/baptistesx/im-lazy-frontend).
**Node.js** framework is used with **Express** module for the server.
**PostgreSQL** is used for the database.
[**Sequelize**](https://sequelize.org/) is used as an interface for the db.
[**PassportJs**](https://www.passportjs.org/) is used for local and Google OAuth2 authentication.
## 1: Setup PostgreSQL

> **TODO:** To fill up this part
- To fill up the db

## 2: Setup project

- ### `git clone git@github.com:baptistesx/im-lazy-backend.git`
- ### `cd im-lazy-backend`
- Ask for .env file to Baptiste
- Replace .env.dist with .env received
- ### `npm i`
- ### `sequelize db:create`
- ### `sequelize db:migrate`

- # `npm start`

## Various TODOs

- Setup error handler and backend logs save in file
- Use typescript strict
- Check  Todos in the code