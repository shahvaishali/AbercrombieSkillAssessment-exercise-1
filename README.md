# Abercrombie Skill Assessment-exercise-1

***

## Description

The assessment will query a list of users and print the data to the DOM in an unordered list using a server. Each user will contain its name, avatar, created date, and ID. Created data and ID will be shown for the user using a button.

***

## Setup 
1. Clone this repository
2. In your project directory, run "npm install"
3. You can run test case and launch server by "npm run launch" and app will be delivered to http://localhost:3000
4. You can individually run the test case by "npm run test"
5. You can individually launch server by "npm run start"

***

## Exercise 1: Consuming RESTful API data
1. Query https://5dc588200bbd050014fb8ae1.mockapi.io/assessment for a list of users.
2. You may use whatever tool you like for making that request (jQuery AJAX, vanilla jqXHR, ES6 fetch API, etc). But __do not use a JS framework__; that is overkill for this exercise.
3. Print that data to the DOM in an unordered list.
    * Use [Handlebars](https://handlebarsjs.com/) to render the data
    * Each list item must show user name, avatar, created date, and ID
4. Write unit tests for your JS, using the framework of your choice

### Optional Enhancement 1
1. Only show name and avatar by default; add a button that reveals the ID and created-date on click.
2. Set up a simple Node server to deliver the app to http://localhost:3000.

***
