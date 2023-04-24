module.exports = class Person {
    persons = [];
    constructor(staff, fellow){
        this.staff = staff;
        this.fellow = fellow;
    }
    addPerson(name, number_of_people) {
        let person = number_of_people === 'office' ? new Office(name) : new Livingspace(name);
        this.persons.push(person)
        return `name: ${name}, number_of_people: ${number_of_people}`
    }
}