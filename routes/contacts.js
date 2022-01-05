const express = require('express')
const Contact = require('./../models/contact')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('contacts/new', { contact: new Contact() })
});

router.get('/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (contact == null) res.redirect('/')
  res.render('contacts/show', { contact: contact })
})

router.post('/', async (req, res) => {
  let contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
  })
  try {
    contact = await contact.save()
    res.redirect(`/contacts/${contact.id}`)
  } catch (e) {
    console.log(e)
    console.error("something went wrong")
    res.render('contacts/new', { contact: contact })
  }
});

module.exports = router