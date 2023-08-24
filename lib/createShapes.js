// constructor class for the shapes' specifics
class Shapes {
    constructor() {
        this.shapeColour = '';
    }
    setColour(shapeColour){
        this.shapeColour=(shapeColour);
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColour}"/>`
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColour}"/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColour}"/>`
    }
}

module.exports = { Square, Circle, Triangle }