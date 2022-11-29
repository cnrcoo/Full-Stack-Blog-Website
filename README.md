# Full Stack Blog Website

A blog website created with MERN Stack + GraphQL API

## Introduction

This is a full stack blog website created with MongoDB, Express.js, React, Node.js, and GraphQL API.
There is also an admin dashboard to add new authors, new posts, and to edit existing posts.
Same functionality could also be achieved with REST API as well, but due to personal preferences I used GraphQl API.

## Tech Stack
Project is created with:
* React version: 18.2.0
* MongoDB Atlas
* Express version: 4.18.2
* GraphQL versin: 15.8.0
* Apollo cersion: 3.7.1

## Setup
To install the dependencies for this project, after cloning the repo run the command:
```
$ npm install
```
for each of the folder below:
* ./backend
* ./frontend/user
* ./frontend/admin

To run this project, after creating the .env file as it is shown in the .envexample file
#### For user and admin folder run the command:
```
$ npm run start
```
#### For backend folder run the command (you need to have [nodemon](https://www.npmjs.com/package/nodemon) package installed globally)
```
$ npm run nodemon
$ npm run start (alternative)
```

