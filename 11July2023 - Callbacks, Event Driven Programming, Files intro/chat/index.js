var events = require('events');
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('status', function (data) {
    console.log(data.username + ":" + data.status);
})

eventsEmitter.on('send', function (data) {
    console.log(data.username + ":" + data.message);
})

eventsEmitter.on('typing', function (data) {
    console.log(data.username + " is typing........")
})

eventsEmitter.emit('status', { username: "kiran", status: 'active' });
eventsEmitter.emit('status', { username: "rajesh", status: 'active' });
eventsEmitter.emit('typing', { username: "kiran" });
eventsEmitter.emit('send', { username: 'kiran', message: "How is your week going on?" });
eventsEmitter.emit('send', { username: 'rajesh', message: "Too busy with meetings!" });
eventsEmitter.emit('typing', { username: "kiran" });
eventsEmitter.emit('typing', { username: "kiran" });
eventsEmitter.emit('typing', { username: "kiran" });
eventsEmitter.emit('typing', { username: "kiran" });
eventsEmitter.emit('typing', { username: "kiran" });
eventsEmitter.emit('send', { username: 'kiran', message: "Take a break. I need to join a call. will ping you later" });
eventsEmitter.emit('send', { username: 'rajesh', message: "Takecare Bye" });



