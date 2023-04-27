const Person = require('./person');
class Fellow extends Person {
    livingSpace
    addLivingSpace(livingSpace) {
        this.livingSpace = livingSpace
    }
}

module.exports = { Fellow }