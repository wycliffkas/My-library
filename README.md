# My-library
A web application that manages a list of books

## Features

- Add books
- Display saved books
- Display details of a book
- Edit book details
- Add Authors
- Display saved authors
- Edit author details

## How to run the application

#### requirements

- Before you run the application make sure the following are installed
- `Node, npm or yarn`

#### installation

- Clone the repository on the local environment by running:
  `git clone https://github.com/wycliffkas/My-library.git`
  `cd My-library`
  
#### configure
- Change to server directory by running`cd server`  
- Create a .env file and add a variable `MONGO_DB_CONNECTION_STRING=<your database connection string>`
- Run `npm install` if you use npm or `yarn` if you use yarn inorder to install the dependencies
- Run `yarn start` to launch the server.
- Change to client directory by running `cd client` 
- Run `npm install` if you use npm or `yarn` if you use yarn inorder to install the dependencies
- Run `yarn start` to launch the app which will automatically launch the app in the browser.

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
