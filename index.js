const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://inkeun:1qaz2wsx@cluster0.0wasn.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello world, 안녕 인근님!'))
app.listen(port, () => console.log('Example app listening on port ${port}!'))

