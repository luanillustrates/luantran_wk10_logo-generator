const { Square, Circle, Triangle } = require('./createShapes')

describe('Square', () => {
    it('testing for black colour fill', () => {
        const logoShape = new Square();
        logoShape.setColour('black');
        expect(logoShape.render()).toEqual('<rect x="50" height="200" width="200" fill="black"/>');
    })
})
describe('Circle', () => {
    it('testing for hex coded colour fill', () => {
        const logoShape = new Circle();
        logoShape.setColour('#B2BEB5');
        expect(logoShape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#B2BEB5"/>');
    })
})
describe('Triangle', () => {
    it('testing for yellow colour fill', () => {
        const logoShape = new Triangle();
        logoShape.setColour('yellow');
        expect(logoShape.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="yellow"/>');
    })
})
