const mongodb = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars')
const dbo = require('./db')

const app = express()

// Handlebars setup
app.engine('hbs', exhbs.engine({
    defaultLayout: false,
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', 'viewsfold')

// Middleware
app.use(bodyParser.urlencoded({extended: true}))

// GET - Display books
app.get('/', async(req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    const cursor = collection.find({})
    let mydata = await cursor.toArray()

    let message = 'siva'
    if (req.query.status == '1') {
        message = "inserted successfully"
    } else if (req.query.status == '2') {
        message = "updated successfully"
    }
    
    res.render('main', {message, mydata})
})

// POST - Add book
app.post('/store_book', async(req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    let bookdata = {title: req.body.title, author: req.body.author}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})


// GET - Edit book form
app.get('/edit/:id', async(req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    let book = await collection.findOne({_id: new mongodb.ObjectId(req.params.id)})
    res.render('edit', {book})
})

// POST - Update book
app.post('/update_book/:id', async(req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    await collection.updateOne(
        {_id: new mongodb.ObjectId(req.params.id)},
        {$set: {title: req.body.title, author: req.body.author}}
    )
    return res.redirect('/?status=2')
})

//Delete 
app.get('/delete_book/:id', async(req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    await collection.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    return res.redirect('/?status=3')
})

//Port
app.listen(8000, () => {
    console.log('Server running on port 8000')
})

