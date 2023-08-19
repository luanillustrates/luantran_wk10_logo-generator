class shapes {
    constructor(colour) {
        this.colour = colour;
    }
    render() {
    }
}

class square extends shapes {
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.colour}`
    }
}

class circle extends shapes {
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.colour}">`
    }
}

class triangle extends shapes {
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.colour}`
    }
}

module.exports = {square, circle, triangle}