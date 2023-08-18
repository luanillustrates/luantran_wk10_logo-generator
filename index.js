const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const logoPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'usage',
            message: 'describe the usage of the project',
        },
        {
            type: 'list',
            name: 'shape',
            choices: ['square', 'circle', 'triangle'],
            message: 'pick a shape',
        },
    ])
}