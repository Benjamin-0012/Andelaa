const Office = require('./index').Office;
const Livingspace = require('./index').Livingspace

class Dojo {
    rooms = [];
    dojoName = ''
    constructor(name) {
        this.dojoName = name;
    }
    // addRoom(type, names){
    //     names.forEach(name => {
    //         let room = type === 'office'? new Office(name): new Livingspace(name);
    //         this.rooms.push(room);
    //         console.log(`An office called ${name} has been successfully created`);
    //     })       
    // }

    addRoom(type, name) {
        let room = type === 'office' ? new Office(name) : new Livingspace(name);
        this.rooms.push({name, type, room})
        return `An ${type} called ${name} has been successfully created!`
    }
    renameRoom(oldname, newname) {
        let renameRoom
        this.rooms.forEach((room) => {
            if(room.name == oldname) {
                renameRoom = room
            }
        })

        if (!renameRoom) return {msg: 'room not found'}
        renameRoom.room.renameRoom(newname)
        renameRoom.name = newname
        return {newName: renameRoom.room.name, oldRoomName: renameRoom.room.oldName}
    }
    delRoom() {
        let delRoom
        if(rooms.splice([])) {
            return {'msg': 'room_name deleted successfully'}
        }
        if(!rooms.splice)
        return {'msg': 'room_name not found'}
    }
    
}

module.exports = {
    Dojo 
}
