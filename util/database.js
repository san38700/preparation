const Sequelize = require('sequelize')

const sequelize = new Sequelize('sample-database','root','mysql123',{
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize