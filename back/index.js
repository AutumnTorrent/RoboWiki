const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const front_path = path.join(__dirname,'../front');
// const puppeteer = require('puppeteer');

app.use(express.urlencoded({extended: true}))

const students_routes = require('./routes/students');
app.use('/api/v1/students', students_routes);

app.use(express.static(front_path));

const users_routes = require('./routes/users');
app.use('/api/users', users_routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
