const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017/");

client.connect();

var db = client.db("amazon");

db.createCollection('test2');

const collection = db.collection('test2');

collection.insertOne({ id: 101, name: 'kiran' });

//db.dropCollection('test2');


