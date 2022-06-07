# SAP Community Code Challenge - UI5
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:-->
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/sap-community-code-challenge-ui5)](https://api.reuse.software/info/github.com/SAP-samples/sap-community-code-challenge-ui5)
[![Visits Badge](https://badges.pufler.dev/visits/SAP-samples/sap-community-code-challenge-ui5)](https://badges.pufler.dev)
[![Updated Badge](https://badges.pufler.dev/updated/SAP-samples/sap-community-code-challenge-ui5)](https://badges.pufler.dev)

[![Contributors Display](https://badges.pufler.dev/contributors/SAP-samples/sap-community-code-challenge-ui5?size=50&padding=5&bots=false)](https://badges.pufler.dev)

The [change log](/CHANGELOG.md) describes notable changes in this package.

## Description
This repository is the starting point for the SAP Community Code Challenge for UI5 (see [SAP Community Coffee Corner Thread]() and corresponding [blog post]()). The repository contains an empty OpenUI5 project and a series of [end-to-end tests](/webapp/test/e2e/) written with [wdi5](https://js-soft.github.io/wdi5/#/). In order to take part in the challenge it is your job to develop the OpenUI5 app and make the tests pass (following the process of [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)). The purpose of the challenge is to get familiar with the **wdi5**, which will be [UI5's official end-to-end testing framework](https://blogs.sap.com/2022/02/12/the-king-is-dead-long-live-the-king-wdi5-as-uiveri5-successor/) in the future.

## Participation
Complete the following steps to take part in the challenge:

1. Fork this repository.
1. Clone the forked repository into your development environment.
1. Execute `npm install` to install the project's dependencies.
1. Execute `npm start` to start the web server.
1. Read the [tests](/webapp/test/e2e/) and try to understand what they test for. What kind of pages and controls do they expect?
1. Develop the OpenUI5 app to make the tests pass (execute `npm run test` to run the tests locally during development).
1. Once the tests pass, push your changes to your forked repository on GitHub.
1. Open a pull request to the base repository. This will automatically trigger the execution of the tests via a [GitHub action](/.github/workflows/wdi5-tests.yml).
1. Copy the URL of your pull request and paste it into the [SAP Community Coffee Corner Thread]().

As this challenge focuses on test-driven development and the wdi5 testing framework, there are no requirements in terms of what your application has to looks like or its content, as long as it passes the tests. Feel free to get creative and build the application you always wanted to build, but don't edit the tests 😉

## Requirements
Node.js version 14.x or 16.x ([https://nodejs.org/en/download/](https://nodejs.org/en/download/)).

## Download and Installation
See [Participation](#participation).

## Known Issues
No known issues.

## How to obtain support
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](/LICENSES/Apache-2.0.txt) file.
