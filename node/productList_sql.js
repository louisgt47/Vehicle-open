const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM commodity'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'linus',
  password: '',
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
//加入收藏
// app.get('/insertItem', (req, res) => {
//   // console.log('req:' + req.query) //req.query==={name:xxx, price:xxx}
//   const { pNo } = req.query
//   console.log(pNo)
//   const INSERT_MEMBERITEM_QUERY = `INSERT INTO memberTtem pNo VALUES '${pNo}'`
//   connection.query(INSERT_MEMBERITEM_QUERY, (err, results) => {
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
//   SELECT SUM(Sales) FROM Store_Information
// WHERE Store_Name IN
// (SELECT Store_Name FROM Geography
// WHERE Region_Name = 'West');
//SELECT * FROM Store_Information WHERE (* LIKE 'inputkey') AND (篩選條件1 LIKE '%selectkey1%') ifAND1 (篩選條件2 LIKE '%selectkey2%') ifAND2 (篩選條件3 LIKE '%selectkey3%');
// app.get('/productList/searchList', (req, res) => {
//   const { inputkey, searchkey1, searchkey2, searchkey3, searchkey4 } = req.query
//   let placeKey = !(searchkey1 = 0) ? searchkey1 : ''
//   let key1 = !(searchkey2 = 0) ? searchkey2 : ''
//   let key2 = !(searchkey3 = 0) ? searchkey3 : ''
//   let key3 = !(searchkey4 = 0) ? searchkey4 : ''
//   let ifAND0 = key1 && key2 && key3 ? 'AND' : ''
//   let ifAND1 = key2 && key3 ? 'AND' : ''
//   let ifAND2 = key3 ? 'AND' : ''

//   const childQuery = placeKey
//     ? `AND WHERE shop_name IN (SELECT shop_name FROM shop_member WHERE shop_place LIKE %${placeKey}%)`
//     : ''
//   const SELECT_SEARCH_PRODUCTS_QUERY = `SELECT * FROM commodity WHERE (* LIKE %${inputkey}%) ${ifAND0} (pBrand LIKE %${key1}%) ${ifAND1} (pRent LIKE %${key2}%) ${ifAND2} (pAge LIKE %${key3}%)`
//   connection.query(
//     SELECT_SEARCH_PRODUCTS_QUERY + childQuery,
//     (err, results) => {
//       if (err) {
//         return res.send(err)
//       } else {
//         return res.json({
//           data: results,
//         })
//       }
//     }
//   )
// })
// app.get('./products', (req, res) => {})

app.listen(4000, () => {
  console.log(`Products server listening on port 4000`)
})
