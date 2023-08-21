const fs = require('fs');
const { Square, Circle, Triangle } = require('./createShapes.js');

function createLogo(logoName, answers) {

    let svgString = ``;
    
    svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    if (answers.logoShape === 'Square') {
        logoShape = new Square();
        svgString += `<rect x="50" height="200" width="200" fill="${answers.shapeColour}"/>`
    } else if (answers.logoShape === 'Circle') {
        logoShape = new Circle();
        svgString += `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${answers.shapeColour}"/>`
    } else {
        logoShape = new Triangle();
        svgString += `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${answers.shapeColour}"/>`
    }

    svgString += `<text x="150" y="120" font-size="50" text-anchor="middle" fill="${answers.textColour}">${answers.logoName}</text></svg>`
    ;

    fs.writeFile(logoName, svgString, (err) => {
        err ? console.log(err) : console.log("logo successfully generated");
    });
}


module.exports = createLogo