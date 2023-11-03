const express = require('express')
app = express();
const logger = require('morgan')
app.set('view engine', 'ejs');
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config();
const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'public')))
app.set('layout', 'layout/layout.ejs')
app.use(expressLayouts);

app.use(logger('dev'))


app.get('/', (req, res)=>{
        res.render('index', {title: 'Main Page'})
})

app.get('/home', (req, res)=>{
        res.render('home', {title: 'Home Page'})
})
app.get('/about', (req, res)=>{
        res.render('about', {title: 'About Page'})
})
app.get('/service', (req, res)=>{
        res.render('service', {title: 'Service Page'})
})
app.get('/contact', (req, res)=>{
        res.render('contact', {title: 'Contact Page'})
})
app.listen(PORT, () => {
        console.log(`server is runing on Port No. ${PORT}`)
}
);
