module.exports = class Person {
    office
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    addOffice(office) {
        this.office = office;
    }
}