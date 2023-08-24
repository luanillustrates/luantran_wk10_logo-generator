const inquirer = require('inquirer');
// link the svg create script
const createLogo = require('./lib/createLogo.js');

// starts function for questions to create the logo
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoName',
                message: 'Enter a name (max 3 characters)',
            },
            {
                type: 'input',
                name: 'textColour',
                message: 'Enter a colour or hex number for the logo text',
            },
            {
                type: 'list',
                name: 'logoShape',
                choices: ['Square', 'Circle', 'Triangle'],
                message: 'Pick a shape from the following',
            },
            {
                type: 'input',
                name: 'shapeColour',
                message: 'Enter a colour or hex number for the shape colour',
            },
        ])
        .then((answers) => {
            if (answers.logoName.length > 3) {
                console.log("enter max 3 characters only for logo name");
                init();
            } else {
                createLogo('./examples/logo.svg', answers);
                console.log(createLogo, 'logo.svg created successfully');
            }
        });
}

init();