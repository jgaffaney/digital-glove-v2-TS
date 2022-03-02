![License](https://img.shields.io/github/license/jgaffaney/https://github.com/jgaffaney/digital-glove.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/jgaffaney/https://github.com/jgaffaney/digital-glove.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/jgaffaney/https://github.com/jgaffaney/digital-glove.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/jgaffaney/https://github.com/jgaffaney/digital-glove.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/jgaffaney/https://github.com/jgaffaney/digital-glove.svg?style=for-the-badge)
    
# Digital Glove

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Find it Online](#find-it-online)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

Digital Glove is a purposefully simple web app that allows first responders to record treatments and timestamps during an emergency cardiac arrest call.  The app will save all the information for later use when the first responder is documenting their call.  This will lead to more accurate data, which can only lead to better research and better outcomes in cardiac arrest management.

Version 2 is a refactoring of the code into Typescript

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a><a href="https://www.typescriptlang.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" height="40px" width="40px" /></a>

## Getting Started

This web app is written on a Node.js and Express server.  These must be installed before using this app.  

### Prerequisites

What do I need to install before I can run your project

### Installation

1. Fork and clone the repository

2. `npm install`

3.`npm run server`

4.`npm run client`

## Usage

The app starts with the user selecting a new call.  When arriving at the patient's side, the user will click "At Patient" which will initiate a run in the database and be ready to record interventions.  From there, a user can select from one of 4 categories of treatment and then select a treatment.  Selecting the treatment will automatically record that treatment and timestamp and, for medications, display the time so the user can easily recall the time of the last administration

## Find it Online

The app is hosted on heroku at <a href="https://digital-glove.herokuapp.com/#/home">Digital Glove</a>.  Users can log in with username: Guest, pw: guest to look around and see how it works

## License

<a href="https://choosealicense.com/licenses/mit/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/mit.svg" height=40 />MIT License</a>

## Acknowledgements

Who helped you make this project a reality? Friends? Family? Contributors? Instructors?

## Contacts

<a href="https://www.linkedin.com/in/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:john.gaffnaey@icloud.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>
