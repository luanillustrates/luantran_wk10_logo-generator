const { Square, Circle, Triangle } = require('./createShapes')

describe('Square', () => {
    it('testing ', () => {
        const logoShape = new Square();
        logoShape.setColour('black');
        expect(logoShape.render()).toEqual('<rect x="50" height="200" width="200" fill="black"/>');
    })
})