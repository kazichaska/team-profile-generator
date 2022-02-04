// all packages need for this application
const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const emailValidator = require('email-validator');
const generateHTML = require('./src/generateHTML.js');
const path = require('path');

// array of the question for user action
const questions = [
    {
        type: 'list',
        name: 'role',
        massage: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        massage: 'Enter your name:'
    },
    {
        type: 'input',
        name: 'id',
        massage: 'Enter the ID of the employee:'
    },
    {
        type: 'input',
        name: 'email',
        massage: 'Enter your email address:',
        // validate: emailValidator
    },  
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), "src", fileName), data);
};

function init() {
    inquirer.prompt(questions)
    .then((returnedData) => {
        writeToFile('index.html', generateHTML({...returnedData}));
    });
};

// function call to initialize app
init();