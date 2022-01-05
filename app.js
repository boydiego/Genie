const express = require('express');
const contactRouter = require('./routes/contacts')
const app = express();
const port = 8080;

app.set('view engine', 'ejs')

app.use('/contacts', contactRouter)

app.get('/', function (req, res) {
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

app.listen(port, () => {
  console.log(`Let's go Genie at http://localhost:${port}`)
});