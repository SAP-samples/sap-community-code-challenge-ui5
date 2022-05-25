# SAP Community Code Challenge - UI5

## Description

This repository is the starting point for the SAP Community Code Challenge for UI5 (see [SAP Community Coffee Corner Thread]() and corresponding [blog post]()). The repository contains an empty OpenUI5 project and a series of [end-to-end tests](/webapp/test/e2e/) written with [wdi5](https://js-soft.github.io/wdi5/#/). In order to take part in the challenge it is your job to develop the OpenUI5 app and make the tests pass (following the process of [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)). The purpose of the challenge is to get familiar with the **wdi5**, which will be [UI5's official end-to-end testing framework](https://blogs.sap.com/2022/02/12/the-king-is-dead-long-live-the-king-wdi5-as-uiveri5-successor/) in the future.

## Participation

Complete the following steps to take part in the challenge:

1. Fork this repository.
1. Clone the forked repository into your development environment.
1. Execute `npm install` to install the project's dependencies.
1. Execute `npm start` to start the web server.
1. Develop the OpenUI5 app to make the [tests](/webapp/test/e2e/) pass (execute `npm run test` to run the tests locally during development).
1. Once the tests pass, push your changes to your forked repository on GitHub.
1. Open a pull request to the base repository. This will automatically trigger the execution of the tests via a [GitHub action](/.github/workflows/test.yml).
1. Copy the URL of your pull request and paste it into the [SAP Community Coffee Corner Thread]().

As this challenge focuses on test-driven development and the wdi5 testing framework, there are no requirements in terms of what your application has to looks like or its content, as long as it passes the tests. Feel free to get creative.