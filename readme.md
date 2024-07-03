# Salon App

## Features

-  Register And Login
-  Post a Review
-  Booked a service
-  Multiple branches

## Installation

Salon server requires [Node.js](https://nodejs.org/) v10+ to run.
Salon server requires [Postgre Database](https://www.postgresql.org/)

Install the dependencies and start the server.

```sh
cd salon-backend
npm i
```

```sh
cp env.example .env
npm i
```

Create the Database and Migrate

```sh
npm run db-create
npm run db-migrate
npm run db-seed
```

for running the server

```sh
npm start
```
