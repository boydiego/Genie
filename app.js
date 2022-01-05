const express = require('express')
const mongoose = require('mongoose')
const contactRouter = require('./routes/contacts')
const app = express()
const port = 8080

mongoose.connect('mongodb://localhost/genie')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

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