const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const front_path = path.join(__dirname,'../front');
// const puppeteer = require('puppeteer');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(front_path));

const students_routes = require('./routes/students');
app.use('/api/v1/students', students_routes);

const users_routes = require('./routes/users');
app.use('/api/users', users_routes);

const page_data = require('./routes/pagedata');
app.use('/api/getdata/', page_data)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
