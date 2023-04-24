const Room = require('./room').Room;

class Office extends Room {
    maxMembers = 6;
}

module.exports = {
    Office
}
