'use strict'
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 2323

const app = express()
app.get('/', (req, res) => {
  res.send('Bye World')
})

app.get('/hello', (req, res) => {
  res.send('안녕 반가워')
})

app.listen(PORT, '0.0.0.0',() => {
    if(process.env.ENVIORMENT === 'CI'){
        console.log('CI mode detected, exiting process with 0')
        process.exit(0)
    }
})