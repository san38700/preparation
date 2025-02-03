// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const userSchema = new mongoose.Schema({
//     email : {
//         type: String,
//         required : true,
//         unique : true
//     },
//     password : {
//         type : String,
//         required : true
//     }
// })

// module.exports = mongoose.model('User', userSchema)


const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('users', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    email : {
        type : Sequelize.STRING,
        unique : true
    },
    password : {
        type : Sequelize.STRING,
        unique : false

    }
})

module.exports = User