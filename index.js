const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./lib/createLogo.js');
const createShapes = require('./lib/createShapes.js');

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
            const generatedLogo = createShapes(answers);

            fs.writeFile('./examples/logo.svg', createLogo(generatedLogo), (err) => err ? console.error(err) : console.log('generated logo.sgv')
            );

        })
        .catch((err) => console.error(err));
}

init();