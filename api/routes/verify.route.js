const express = require('express')
const controller = require('../controllers/verify.controller')


const router = express.Router()


router.post('/verify', controller.verify)

module.exports = router