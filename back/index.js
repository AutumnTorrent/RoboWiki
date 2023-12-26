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
app.use('/', users_routes);

// app.get('/getweb', (req, res) => {
//   (async () => {
//     const browser = await puppeteer.launch({
//       headless: false,
//       defaultViewport: null
//     })
//     const page = await browser.newPage();
//     await page.goto('https://roboquest.miraheze.org/wiki/Weapons')
//     await browser.close();
//     res.send(`что то произошло`);
//   })
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
