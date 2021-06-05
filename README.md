# Abercrombie Skill Assessment-exercise-1

***

## Description

The assessment will query a list of users and print the data to the DOM in an unordered list using a server. Each user will contain its name, avatar, created date, and ID. Created data and ID will be shown for the user using a button.

***

## Setup 
1. Install node and npm on your computer and verify its installation by entering commands "node -v" and "npm -v" in command line 
2. Clone this repository
3. In your project directory, enter command "npm install" in command line
4. You can run test case and launch server by entering command "npm run launch" in command line and app will be delivered to http://localhost:3000
5. You can individually run the test case by entering command "npm run test" in command line
6. You can individually launch server by entering command "npm run start" in command line

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
