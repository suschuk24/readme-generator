const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description'
    },
    // {
    //     type: 'checkbox',
    //     name: 'contents',   
    //     message: 'Choose which elements to include in Table of Contents',
    //     choices: [
    //         'Project Title',
    //         'Description/Overview',
    //         'Table of Contents',
    //         'Installation Instructions',
    //         'Usage',
    //         'License',
    //         'Contributing',
    //         'Tests',
    //         'Questions',
    //         'Technologies Used'
    //         ] 
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        messgae: 'Enter your usage parameters here, provide example screenshots to page if no instructions to give'
    }, 
    {
        type: 'input',
        name: 'contributions',
        message: 'please enter the list of contributers and collaborators here'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'please enter testing that you have compelted on this application'
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose your licences used",
        choices: ['MIT', 'MPL-2.0', 'ISC', 'Apache-2.0','None']
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
    .then (userData => {
        const readMeFile = generateMarkdown(userData);
        return writeToFile(readMeFile);
    })
    .catch (err => {
        console.log(err);
    });
}
// function to write README file
function writeToFile(userData) {
    const fileName = './dist/README.md'

    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, userData, err => {
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


