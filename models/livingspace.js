const Room = require('./room').Room;
class Livingspace extends Room {
    maxMembers = 4;

    myLivingSpaceMethod() {
        console.log('.myLivingSpaceMethod();')

    }
}

module.exports = {
    Livingspace
}
