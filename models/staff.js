const Person = require('./person');

module.exports = class Staff extends Person {
    constructor(office, livingspace){
        this.office = office;
        this.livingspace = livingspace;
    }
}