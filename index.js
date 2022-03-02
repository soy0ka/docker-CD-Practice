'use strict'
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 2323

const app = express()
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, '0.0.0.0',() => {
    if(process.env.ENVIORMENT === 'CI'){
        console.log('CI mode detected, exiting process with 0')
        process.exit(0)
    }
})