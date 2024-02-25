const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = new express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})


module.exports = app;

