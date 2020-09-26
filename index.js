const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');

// validation function for required inpus by user
const validateFcn = input => {
    if(input) {
        return true;
    } else {
        console.log('Please enter valid text, you are entering the appropriate content for the md file!');
    };
}

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: validateFcn
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description(Required)',
        validate: validateFcn
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions (Required)',
        validate: validateFcn
    },
    {
        type: 'input',
        name: 'usage',
        messgae: 'Enter your usage parameters here, provide example screenshots to page if no instructions to give (Required)',
        validate: validateFcn
    }, 
    {
        type: 'input',
        name: 'contributions',
        message: 'please enter the list of contributers and collaborators here (Required)',
        validate: validateFcn
    },
    {
        type: 'input',
        name: 'tests',
        message: 'please enter testing that you have completed on this application (Required)',
        validate: validateFcn
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose your licences used",
        choices: ['MIT', 'ISC', 'Apache-2.0', 'MPL-2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username (Required)',
        validate: validateFcn
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


