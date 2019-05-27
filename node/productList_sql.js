const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM commodity'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'linus',
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

// app.get('/products/add', (req, res) => {
//   // console.log('req:' + req.query) //req.query==={name:xxx, price:xxx}
//   const { name, price } = req.query
//   console.log(name, price)
//   const INSERT_PRODUCTS_QUERY = `INSERT INTO products (name, price) VALUES('${name}',${price})`
//   connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
//     if (err) {
//       return res.send(err)
//     } else {
//       return res.send('successfully added product')
//     }
//   })
// })
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
//搜尋清單
app.get('/productList/searchList', (req, res) => {
  const { inputkey, searchkey1, searchkey2, searchkey3, searchkey4 } = req.query
  let key1 = !(searchkey1 = 0) ? searchkey1 : ''
  let key2 = !(searchkey2 = 0) ? searchkey2 : ''
  let key3 = !(searchkey3 = 0) ? searchkey3 : ''
  let key4 = !(searchkey4 = 0) ? searchkey4 : ''
  let ifAND0 = key1 && key2 && key3 && key4 ? 'AND' : ''
  let ifAND1 = key2 && key3 && key4 ? 'AND' : ''
  let ifAND2 = key3 && key4 ? 'AND' : ''
  let ifAND3 = key4 ? 'AND' : ''
  //   SELECT SUM(Sales) FROM Store_Information
  // WHERE Store_Name IN
  // (SELECT Store_Name FROM Geography
  // WHERE Region_Name = 'West');
  //SELECT * FROM Store_Information WHERE (* LIKE 'inputkey') AND (篩選條件1 LIKE '%selectkey1%') ifAND1 (篩選條件2 LIKE '%selectkey2%') ifAND2 (篩選條件3 LIKE '%selectkey3%');
  const SELECT_ONE_PRODUCTS_QUERY = `SELECT * FROM commodity WHERE (* LIKE 'inputkey') ${ifAND0} `
})
// app.get('./products', (req, res) => {})

app.listen(4000, () => {
  console.log(`Products server listening on port 4000`)
})
