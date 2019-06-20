## Project description

This code need to be tested for production before deployment using jest for react and Mocha for node JS.

This application is just a really fast POC for a client who wants to scrap Data easily from a given website. 

**!WARNING!**
Before Production mode don't forget to add .env file to .gitignore file.

## Requirement 

For this project you need to have installed on your local computer:
- MongoDb --> (Installation guide: https://docs.mongodb.com/manual/administration/install-community/).
- NodeJs (https://nodejs.org/en/).
- Npm (https://www.npmjs.com/get-npm).
- Robo 3T (Software for monitoring NoSql Database https://robomongo.org/download) **[Optional]**.


## Installation

Go to the **backend** folder and run:

```node
npm install --save-dev
```
Then go to the **frontend** folder and do the same.

## Launching app

For launching the app you have different steps:

- Launch your mongoDB database (with mongod and then mongo in 2 different terminals if you have mongo set in you environnement variables).
- Go to backend and launch the server with ```npm start```
- Do the same in the frontend folder

**!WARNING!**
Take care about .env file in the backend folder, you have the Database url and also the frontend url variables used in _./backend/app.js_ for CORS and database connection.

## Next step TODO
Several things needs to be done for a really cleaner and efficient app.

* Scrapping on multiple pages.
* Creating theme with styled components for futur client usecase.
* Refactoring application for Performence/Readability etc ...
* Testing the frontend and the backend with Jest & mocha (for exemple).
   


