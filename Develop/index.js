const { rejects } = require('assert');
const fs = require('fs')
const inquirer = require('inquirer');
const { resolve } = require('path');
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project-title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description'
    },
    {
        type: 'checkbox',
        name: 'contents',   
        message: 'Choose which elements to include in Table of Contents',
        choices: [
            'Project Title',
            'Description/Overview',
            'Table of Contents',
            'Installation Instructions',
            'Usage',
            'License',
            'Contributing',
            'Tests',
            'Questions',
            'Technologies Used'
            ] 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        messgae: 'Enter your usage parameters here'
    }, 
    {
        type: 'input',
        name: 'contributions',
        message: 'please enter the list of contributers here'
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'please enter testing instructions for user'
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose your licences used",
        choices: ['Babel', '.NET Core', 'Rails', 'Ansible', 'Bash', 'GIMP', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions)
}
// function to write README file
function writeToFile(fileName, data) {
    const mdFile = './dist/README.md'

    return new fs.promises((resolve, reject) => {
        fs.writeFile(fileName, userResponse, err => {
            if(err) {
            reject(err) 
            return;
            }
            resolve({
                ok: true,
                message: 'Congratulations! MD File Created' 
            });
        });
    });
};

// function to initialize program
function init() {
    const userResponse = promptUser();

}

// function call to initialize program
init();


