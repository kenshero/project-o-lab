var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(client) {
  console.log('Client connected...');
  client.on('join', function(data) {
    console.log(data);
    client.emit('messages', 'Hello from server');
  });


  client.on('walk_right', function(data) {
    console.log(data);
    client.emit('walk_right', 'walk_right');
  });


});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
