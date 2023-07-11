var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectCallback = function (data) {
    console.log(data.username + " connected to the chat");
}

var disconnectCallback = function (data) {
    console.log(data.username + " disconnected from the chat");
}

var messageCallback = function (data) {
    console.log(data.username + " : " + data.message);
}

eventEmitter.on('connect', connectCallback);
eventEmitter.on('disconnect', disconnectCallback);
eventEmitter.on('message', messageCallback);
eventEmitter.emit('connect', { username: "kiran" });
eventEmitter.emit('message', { username: "kiran", message: "Hello Team, how are you doing today?" });
eventEmitter.emit('disconnect', { username: 'kiran' });

