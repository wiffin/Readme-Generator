// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = data => {
    console.log(`
    ==================
    Create a Readme.md
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a description!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step of how to get the project running'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need on this project?',
            choices: ['none', 'MIT', 'GNU']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add any contributers to the project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests for your application and examples on how to run them'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Whats your Github?',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your github!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Whats your email?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email!');
                  return false;
                }
            }
        }
    ]);
};

questions()
.then(data => {
   const pageReadme = generateMarkdown(data);

   fs.writeFile('readme.md', pageReadme, err => {
       if (err) throw err;
       console.log('readme created');
    });
});