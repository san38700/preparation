const express = require('express')

const fs = require('fs')
const { arrayBuffer, json } = require('stream/consumers')



const app = express()

app.use(express.json())



// const products = [
//     { name: "Wireless Mouse", price: 15.99, category: "Electronics", rating: 4.2, stock: 120 },
//     { name: "Bluetooth Headphones", price: 29.99, category: "Electronics", rating: 4.5, stock: 80 },
//     { name: "Smartphone", price: 199.99, category: "Electronics", rating: 4.7, stock: 50 },
//     { name: "Laptop", price: 899.99, category: "Electronics", rating: 4.8, stock: 30 },
//     { name: "Desk Chair", price: 85.00, category: "Furniture", rating: 4.3, stock: 45 },
//     { name: "Table Lamp", price: 25.50, category: "Furniture", rating: 4.1, stock: 70 },
//     { name: "Bookshelf", price: 120.99, category: "Furniture", rating: 4.6, stock: 25 }
// ];

// app.get('/products', (req, res) => {
//     const page = (req.query.page) || 1
//     const limit = (req.query.limit) || 1

//     const startIndex = (page - 1) * limit
//     const endIndex = page * limit

//     paginatedProducts = products.slice(startIndex, endIndex)

//     res.status(200).json({
//         page : page,
//         limit: limit,
//         totalProducts : products.length,
//         totalPages : Math.ceil(products.length/limit),
//         products : paginatedProducts

//     })
// })

// app.delete('/delete-product', (req, res) => {
//     //const deleteitem = req.query.product
//     const index = products.find(item => item.name == "Laptop")
//     console.log(index)
//     res.status(200).json({products : products})
// })

// const sequelize = require('./util/database')
// // const mongoose = require('mongoose')

// const User = require('./model/user')
// const userRoutes = require('./routes/user')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const { error } = require('console')
// const { where } = require('sequelize')

// app.use(userRoutes)

// app.post('/register', async (req, res) => {
//     const {email, password} = req.body
//     try{
//         const existingUser = await User.findOne({email});
//         if (existingUser){
//         return res.status(400).json({message : "User already exists", existingUser})
//     }

//     const saltRounds = 10
//     const hashedPassword = await bcrypt.hash(password, saltRounds)
//     const user = await User.create({email, password : hashedPassword})
//     res.status(200).json({message : "User registered successfully", User : user})
//     }catch(error){
//         console.log(error)
//         res.status(500).json({message : "Server error", error : error})
//     }
// }) 


// app.get('/login', async (req, res) => {
//     const {email, password} = req.body
//     try{
//         const user = await User.findOne({where: {email : email}})
//         console.log(user)
//         if (!user){
//             return res.status(404).json({message : 'User does not exist'})
//         }
//         const passwordCheck = await bcrypt.compare(password, user.password)
//         if (!passwordCheck){
//             return res.status(404).json({message : 'Password not match'})
//         }
//         return res.status(201).json({jwtToken : generatejwtToken(user.email)})
//     }catch(err){
//         console.log(err)
//     }
// })

// app.delete('/delete/:id', async (req, res) => {
//     const id = req.params.id
//     try{
//         const deleteUser = await User.destroy({where: {id : id}})
//         return res.status(200).json({message : "user deleted"})
//     }catch(err){
//         console.log(err)
//     }
    
// })

// const auth = async (req, res, next) => {
//     const token = req.header('Authorization')
//     try{
//         const user = jwt.verify(token, '4kKtkeTLkbODvCiw6SI0obLUi6xeUhwlg5gs3Uu3AvGOSHGvRwb76u4XpZf96pDl')
//         console.log(user)
//         req.user = user
//         next()
//     }catch(err){
//         console.log(err)
//     }
    
// }

// app.get('/protected', auth, (req, res) => {
//     res.status(200).json({user : req.user})
// })
  
// function generatejwtToken(email){
//     const jwtToken = jwt.sign({email : email}, '4kKtkeTLkbODvCiw6SI0obLUi6xeUhwlg5gs3Uu3AvGOSHGvRwb76u4XpZf96pDl')
//     return jwtToken
// }


const items = require('../todolist.json')

app.get('/items', (req, res) => {
    res.status(200).json(items)
})

// app.post('/add-item', (req, res) => {
//     const item = {
//         id : items.length + 1,
//         item : req.body.item,
//         description : req.body.description
//     }

//     items.push(item)
//     fs.writeFileSync('./todolist.json', JSON.stringify(items))
//     res.status(201).json({
//         message : 'Item added',
//         addedItem : item
//     })
// })

// app.put('/items/:id',(req, res) => {
//     const item = items.find(item => item.id === parseInt(req.params.id))

//     item.item = req.body.item
//     item.description = req.body.description
//     fs.writeFileSync('./todolist.json', JSON.stringify(items))
//     res.status(201).json({
//         message: 'Item updated',
//         updatedItem : item
//     })

// })

// app.delete('/delete-item/:id', (req, res) => {
//     const itemId = items.findIndex(item => item.id === parseInt(req.params.id))
//     it
//     items.splice(itemId, 1)
//     fs.writeFileSync('./todolist.json', JSON.stringify(items))
//     res.status(200).json({
//         deletedItem : itemId
//     })
// })

// sequelize
// //.sync({force: true})
// .sync()
// .then(result => app.listen(3000))
// .catch(err => console.log(err))

// mongoose
// .connect('mongodb+srv://sandeepkumar:bkrhgfM67EfWQIk9@cluster0.br5anyu.mongodb.net/sample-database?retryWrites=true&w=majority&appName=Cluster0')
// .then(result => {
//     console.log('connected')
//     app.listen(3000)
// })
// .catch(err => console.log(err))


app.listen(3000, () => {
    console.log('server is running')
})