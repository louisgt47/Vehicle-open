const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM commodity'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asd97169',
  database: 'car_rental',
})

connection.connect(err => {
  if (err) {
    return err
  }
})

// console.log(connection)

app.use(cors())

app.get('/', (req, res) => {
  res.send('go to /products to see products')
})

app.get('/products/add', (req, res) => {
  // console.log('req:' + req.query) //req.query==={name:xxx, price:xxx}
  const { name, price } = req.query
  console.log(name, price)
  const INSERT_PRODUCTS_QUERY = `INSERT INTO products (name, price) VALUES('${name}',${price})`
  connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send('successfully added product')
    }
  })
})
// 商品清單
app.get('/product', (req, res) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results,
      })
    }
  })
})
// 商品頁面(單一商品)
app.get('/productMain', (req, res) => {
  const { pNo } = req.query
  console.log(pNo)
  const SELECT_ONE_PRODUCTS_QUERY = `SELECT * FROM commodity WHERE pNo = ${pNo}`
  connection.query(SELECT_ONE_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results,
      })
    }
  })
})

// app.get('./products', (req, res) => {})

app.listen(4000, () => {
  console.log(`Products server listening on port 4000`)
})
