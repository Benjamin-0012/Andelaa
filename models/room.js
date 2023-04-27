class Room {
    oldName = ''
    members = []
    maxMembers = 0
    currentNumberOfMembers = this.members.length
    constructor(name) {
        this.name = name;
    }

    addMembers(member) {
        if (this.members.length < this.maxMembers) {
            this.members.push(member);
            return
        }
        throw new Error(`Maximum number of people ${this.name} room reached`)
    }

    listMembers() {
        console.log(this.members)
    }
    renameRoom(name) {
        this.oldName = this.name,
        this.name = name
    }

    isFull() {
        return this.maxMembers === this.members.length;
    }

    addPerson(person) {
        this.members.push(person)
    }

}

module.exports = {
    Room
}