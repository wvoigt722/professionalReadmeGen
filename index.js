// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input

const questions =   [ 
                    'What is the title of your project?',
                    'Give a brief description of your project: ',
                    'Are there are installation requirements?',
                    'How do you use this project?',
                    'What is the license used for this prject?',
                    'Who were the contributors to this projects?',
                    'Where there any tests for this projects?', 
                    'Do you have any questions?'
                    ];





 inquirer
    .prompt([
        {
            type: 'input',
            message: questions[1],
            name: 'projTitle'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'projDesc'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'projInstal'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'projUse'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'projLicense'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'projContrib'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'projTests'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'projQuest'
        }
            ]);



// TODO: Create a function to write READMEfile
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
