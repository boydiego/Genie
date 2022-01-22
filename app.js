const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const contactRouter = require('./routes/contacts');
const cors = require("cors");
const app = express();
const port = 8080;

MongoClient.connect('mongodb://localhost:27017/genie', function (err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
});

// middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  const contacts = [{
    firstName: 'Kyle',
    lastName: 'WebDevSimplified',
    birthday: new Date(),
  },
  {
    firstName: 'Frida',
    lastName: 'Spring',
    birthday: new Date(),
  },
  {
    firstName: 'Cydnie',
    lastName: 'Seelenbinder',
    birthday: new Date(),
  }]
  res.render('contacts/index', { contacts: contacts })
})

app.use('/contacts', contactRouter)

app.listen(port, () => {
  console.log(`Let's go Genie at http://localhost:${port}`)
});
