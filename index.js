const inquirer = require('inquirer');
const createLogo = require('./lib/createLogo.js')
const { writeFile } = require('fs').promises;

const logoPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter a name (max 3 characters)',
        },
        {
            type: 'input',
            name: 'textcolour',
            message: 'Enter a colour for the text',
        },        
        {
            type: 'list',
            name: 'shape',
            choices: ['square', 'circle', 'triangle'],
            message: 'Pick a shape from the following',
        },
        {
            type: 'input',
            name: 'shapecolour',
            message: 'Enter a colour for the shape',
        },  
    ])
}

const init = () => {
    logoPrompt()
        .then((answers) => writeFile('./examples/logo.svg', createLogo(answers)))
        .then(() => console.log('successfully created .svg'))
        .catch((err) => console.error(err));
}

init();