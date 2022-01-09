const mongodb = require('mongodb').MongoClient;


const contactSchema = new mongodb.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongodb.model('Contact', contactSchema)
