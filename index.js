const express = require('express')
const app = express()
const bodypanser = require('body-parser') 
const mongoose = require('mongoose')
const e = require('express')

mongoose.connect('mongodb://localhost:27017/latihan', {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
}).then(() => {
    console.log('berhasil konek ke database')
}).catch((e) => {
    console.log(e)
    console.log('gagal konek kedatabase')    
})


app.use(bodypanser.json({
    extends: true,
    limit: '20mb' 
}))

app.use(bodypanser.urlencoded({
    extends: true,
    limit: '20mb'
}))

app.get('/', (req, res) => {
  res.send('<h1>paizal pelando</h1>')
})

app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namadaerah = req.params.namadaerah
    const iddaerah = req.params.id
  res.send('Anda Di : ' + namadaerah + ' Id Daerah : ' + iddaerah)  
})
 
//app.post('/register', (req, res) =>{
    //console.log(req.body)
    //res.json(req.body)
    
//})

app.use('/user', require('./routes/user'))

app.listen(3000, () => {
    console.log('server Startet')
})


