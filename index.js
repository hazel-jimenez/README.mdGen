// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdowns")

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?'
    },
    {
      type: 'input',
      message: 'Describe your project:',
      name: 'description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can someone contribute to this project?'
    }
    
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), err =>
        err ? console.log(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
function init() {   
    inquirer
    .prompt(questions)
    .then(data => {
  console.log(data)
      writeToFile('README.md', generateMarkdown(data))
    });
}

// Function call to initialize app
init();





