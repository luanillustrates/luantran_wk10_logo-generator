const inquirer = require('inquirer');
const createLogo = require('./lib/createLogo.js');

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
                choices: ['square', 'circle', 'triangle'],
                message: 'Pick a shape from the following',
            },
            {
                type: 'input',
                name: 'shapeColour',
                message: 'Enter a colour or hex number for the shape colour',
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("max 3 characters only");
                init();
            } else {
                createLogo('./examples/logo.svg', answers);
                console.log(createLogo, 'logo.svg created suuccessfully');
            }
        });
}

init();