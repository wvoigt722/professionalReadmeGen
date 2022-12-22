// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input

const questions =   [ 
                    'What is the title of your project?',
                    'Provide a link to your project screenshot.',
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
            message: questions[0],
            name: 'projTitle'
        },
        {              
            type: 'input',
            message: questions[1],
            name: 'projImg'
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
            type: 'list',
            message: questions[5],
            name: 'projLicense',
            choices: ['MIT', 'Apache,', 'ISC']
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
            ])
        

        .then((response) => {

            fs.writeFile('README.md', 

                `# ${response.projTitle}

                ----------------------


                ![alt text]${response.projImg})
            

                ## Description: 

                ${response.projDesc}

                ## Installation:

                ${response.projInstal}

                ## Usage:

                ${response.projUse}

                ## License:

                ${response.projLicense}

                ## Contributors:

                ${response.projContrib}

                ## Tests:

                ${response.Tests}

                ## Questions:

                ${response.Questions}`



            
            
            
            
            
            
            , (err) => err ? console.log(err) : console.log('Success!')) 


        });


// // TODO: Create a function to write READMEfile
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
