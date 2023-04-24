const Person = require('./person');
module.exports = class Fellow extends Person {
    constructor(office, livingspace){
        this.office = office;
        this.livingspace = livingspace;
    }
}