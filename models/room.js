class Room {
    oldName = ''
    members = []
    maxMembers = 0
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

}

module.exports = {
    Room
}