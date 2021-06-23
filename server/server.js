const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')
const cors = require('cors')

app.use(express.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
.then((client) => {
  const db = client.db('hotel_lab')
  const guestsCollection = db.collection('guests')
  const hotelRouter = createRouter(guestsCollection)
  app.use('/api/guests', hotelRouter)
})
.catch(console.error)

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});