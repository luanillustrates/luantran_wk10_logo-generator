const createLogo = (shape) => {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="120" font-size="50" text-anchor="middle" fill="${shape.textColour}">${shape.logoName}</text>        
        </svg>
        `
    };


module.exports = createLogo
