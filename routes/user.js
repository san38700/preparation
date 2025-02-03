const express = require('express')
const router = express.Router()

const userController = require('../controller/user')

router.post('/register', userController.registration)
//router.post('user/login', userController.login)

module.exports = router