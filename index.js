const express = require('express');
const log = require('./middleware/log');
const path = require('path')
const port = 3000

const Dojo = require("./models/dojo.js").Dojo;

const app = express();

const dojo = new Dojo('Andela dojo');

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Set  static folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',  (req, res) => {
  res.send('Andela project')
})

app.post('/room', (req, res) => {
  const newRoom = dojo.addRoom(req.body.type, req.body.name)
  res.send({msg: newRoom}, 201)
})

app.get('/room', (req, res) => {
  // TODO: return created room with number of people sample response {'name': 'room_name', 'number_of_people': 0}
  // const number_of_people = person.addPerson(req.body.name, req.body.number_of_people)
  res.send(number_of_people)
})

app.put('/room', (req, res) => {
  // TODO: implement updating room name response {'newName': 'new_room_name', 'oldRoomName': 'old_room_name'}
  const newName = dojo.renameRoom(req.body.oldname, req.body.newname)
  res.json(newName)
})

app.delete('/room/:name', (req, res) => {
  //TODO: delete room. Response: {'msg': 'room_name deleted succesfully'}, {'msg': 'room_name not found'}
  const deletedRoom = dojo.delRoom(req.params.name)
  res.send(deletedRoom)
})


app.get('/rooms', (req, res) => {
  rooms = dojo.rooms.map(room => room.name);

  res.send(`${rooms.join(' ,')} rooms available`)
})

app.post('/add_person', (req, res) => {
  person = dojo.addPerson(req.body.firstName, req.body.lastName, req.body.type, req.body.wantsAccomodation);
  res.send({msg: person})
})

app.post('/print_room/:roomName', (req, res) => {
  printroom = dojo.printRoom(req.params.roomName);
  res.send(printroom)
})

app.post('/print_allocation', (req, res) => {
  printallocation = dojo.printAllocation();
  res.send(printallocation)
})

app.listen(port, () => {console.log(`Running on port: ${port}`)});


