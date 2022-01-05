const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('contacts/new')
})

routes.post('/', (req, res) => {
  
})

module.exports = router