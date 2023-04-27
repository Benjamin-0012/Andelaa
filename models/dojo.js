const Office = require('./index').Office;
const Livingspace = require('./index').Livingspace;
const Fellow = require('./index').Fellow;
const Staff = require('./index').Staff;

class Dojo {
    rooms = [];
    roomDictionary = {}
    dojoName = ''
    persons = []
    
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

    addRoom(type, roomNames) {
        let existingRooms = [];
        let createdRooms = [];
        roomNames.forEach(name => {
            let roomExists = false;
            this.rooms.forEach((room) => {
                if(room.name.toLowerCase() == name.toLowerCase()) { roomExists = true}
            })

            if (roomExists) { existingRooms.push(name)}
            else {
                let room = type === 'office' ? new Office(name) : new Livingspace(name);
                this.rooms.push({name, type, room})
                // x = {
                //     name: name,
                //     type: type,
                //     room: room
                // }
                this.rooms.push(x)
                createdRooms.push(name)
            }
        })
        
        console.log(this.rooms)
        return `${createdRooms.length} created, ${existingRooms.length} exist` 

        // if (this.roomDictionary[name.toLowerCase()]) { return `Room Already exists`}
        // let room = type === 'office' ? new Office(name) : new Livingspace(name);
        // this.roomDictionary[name.toLowerCase()] = {name, type, room}
        // console.log(this.roomDictionary)
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
    delRoom(roomName) {
        let roomIndex;
        let roomExists = false;
        this.rooms.forEach((room, index) => {
            if(room.name.toLowerCase() == roomName.toLowerCase()) {
                roomIndex = index;
                roomExists = true
            }
        })
        if(!roomExists) return {'msg': `${roomName} not found`}

        this.rooms.splice(roomIndex, 1);

        return { msg: `${roomName} deleted succesfully. Remain number of rooms is ${this.rooms.length}`}
    }

    addPerson(firstName, lastName, type, wantsAccomodation) {
        let person = type === 'FELLOW' ? new Fellow(firstName, lastName) : new Staff(firstName, lastName)
        this.persons.push({firstName, lastName, person})
        const livingSPaces = this.rooms.filter(room => room.type === 'livingspace')
        const offices = this.rooms.filter(room => room.type === 'office')

        for (let office of offices) {
            if (!office.room.isFull()) {
               // console.log('office PPPPPP')
                office.room.addPerson(person);
               // console.log('office')
                person.addOffice(office.room)
                break;
            }
        }
        if (type === 'FELLOW' && wantsAccomodation) {
            for (let livingSpace of livingSPaces) {
                if (!livingSpace.room.isFull()) {
                    livingSpace.room.addPerson(person);
                    person.addLivingSpace(livingSpace.room)
                    break;
                }
            }
        }

        // console.log(this.rooms)
        // console.log('===============')
        // console.log(this.persons)
        return `${firstName} ${lastName} created successfully`; 
    }
    printRoom(roomName){
        let roomIndex;
        let roomExists = false;
        this.rooms.forEach((room, index) => {
            if(room.name.toLowerCase() == roomName.toLowerCase()) {
                roomIndex = index;
                roomExists = true
            }
        })
        if(!roomExists) return { msg: 'No rooms to print'}
        const room = {
            members: []
        };
        console.log(this.members)
        console.log(this.rooms[roomIndex].room.members)
        

        return { msg: `${roomName} printed succesfully. Printed number of rooms is ${this.rooms.length}`}
    }
    
}

module.exports = {
    Dojo 
}
