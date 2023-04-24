
# API Testing Framework

This is a Node.js-based API testing framework that uses Mocha for unit testing and Cucumber for integration testing. The framework is designed to test RESTful APIs and supports HTTP requests and responses.

## Requirements 

- Node.js
- NPM 


## Installation 

To install the framework and its dependencies, run the following command in your terminal:

```bash
  npm install
```

## Configuration 

The framework configuration is located in the config directory. The config.js file contains the base URL. The endpoints.json contains API endpoint URLs.


## Project Structure

- **config**  This directory contains configuration files for the project.
- **features** This directory holds the Gherkin feature files for the project. There are also steps/ directories that contain the step definition files for each feature file. These step definition files map the steps defined in the feature files to actual code that implements the steps.
- **src** This directory contains the source code for the project. There is a helpers/ directory that contains utility functions used throughout the project, a models/ directory that holds the data models for the project (in this case, there is a register.js file that defines the structure of a registration payload), and a wrapper/ directory that holds the wrapper code for the API.
- **tests** This directory holds the test code for the project. There is a testData/ directory that holds test data (in this case, there is a registerPayload.js file that defines valid and invalid registration payloads), and spec.js files that define the tests for the registration and user API endpoints.

## Usage

### Running Unit Tests
To run the unit tests, use the following command:

```bash
   npm run test
```
This will run all the tests in the tests directory that end with .spec.js.

### Running Integration Tests
To run the integration tests, use the following command:

```bash
   npm run test:features
```
This will run all the tests in the features directory that end with .feature. The cucumber-pretty formatter is used to display the test results in a human-readable format.

