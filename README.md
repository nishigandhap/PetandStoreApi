
# Project regarding CRUD operations and E2E test

Tested and confirmed the functionality of the API endpoints for both Pet and Store features.


## Table of Contents

* API Reference
* Installation
* Running Tests
* Git link

## API Reference

#### Get all items

```
  https://petstore.swagger.io/
```




## Installation

Before you start installing Cypress and Node, make sure that you have the following installed on your computer:

```
Node.js
VS code
```
## Installing Node.js

Node.js is a JavaScript runtime environment that is used to run JavaScript code outside of a web browser. To install Node.js, follow these steps:

  1. Go to the Node.js official website: https://nodejs.org/
  2. Click on the “Download” button for the latest version of Node.js.
  3. Follow the instructions for your operating system to install Node.js.
  4. Verify that Node.js has been installed successfully by opening a terminal or command prompt and running the following command:

```
node -v
```
## Installing Cypress

Cypress is a JavaScript-based end-to-end testing framework. To install Cypress, follow these steps:

Open a terminal or command prompt and navigate to the root directory of your project.
Run the following command to install Cypress as a development dependency:

```
npm install --save-dev cypress
```
Verify that Cypress has been installed successfully by running the following command:
```
npx cypress open
```
This should open the Cypress Test Runner in your default web browser.

With these steps, you should have both Node.js and Cypress installed on your computer and ready to use. If you encounter any issues during the installation process, refer to the official documentation for Node.js and Cypress(https://docs.cypress.io/) for more information and support.

## Git clone
```
git clone <repo_url>
```




## Running Tests

To run tests, run the following command

```
  npx cypress run --spec "cypress/e2e/2-advanced-examples/**/*.js" --headed
```
To run specific spec/file

```
npx cypress run --spec "cypress/e2e/2-advanced-examples/E2E Test/*.js" --headed

```
