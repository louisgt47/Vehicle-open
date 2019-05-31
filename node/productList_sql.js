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
//加入收藏
app.get('/insertItem', (req, res) => {
  // console.log('req:' + req.query) //req.query==={name:xxx, price:xxx}
  const { pNo } = req.query
  console.log(pNo)
  const INSERT_MEMBERITEM_QUERY = `INSERT INTO lessee_item (mNo,pNo) VALUES (1,${pNo})`
  connection.query(INSERT_MEMBERITEM_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send('successfully added product')
    }
  })
})

// 收藏清單
app.get('/memberCollection', (req, res) => {
  const { mNo } = req.query
  console.log(mNo)
  const SELECT_ONE_PRODUCTS_QUERY = `SELECT * FROM lessee_item WHERE mNo = ${mNo}`
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

app.get('/memberCollectionList', (req, res) => {
  const { pNo } = req.query
  console.log(req.query)
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
//收藏判定用
app.get('/mCollectPNo', (req, res) => {
  const { mNo } = req.query
  const SELECT_M_COLLECT_QUERY = `SELECT * FROM lessee_item WHERE mNo = ${mNo}`
  connection.query(SELECT_M_COLLECT_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results,
      })
    }
  })
})
//加入收藏(商品頁面)
app.get('/insertCollect', (req, res) => {
  // console.log('req:' + req.query) //req.query==={name:xxx, price:xxx}
  const { pNo } = req.query
  console.log(pNo)
  const UPDATE_MEMBERITEM_QUERY = `UPDATE lessee_item SET state = 'fas' WHERE pNo = ${pNo}`
  connection.query(UPDATE_MEMBERITEM_QUERY, (err, results) => {
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
//熱門
app.get('/hotproduct', (req, res) => {
  const SELECT_HOT_PRODUCTS_QUERY =
    'SELECT * FROM commodity ORDER BY pCollect DESC'
  connection.query(SELECT_HOT_PRODUCTS_QUERY, (err, results) => {
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

app.get('/searchList', (req, res) => {
  let { inputkey, searchkey1, searchkey2, searchkey3, searchkey4 } = req.query
  console.log('inputkey:' + inputkey)
  let input = !(inputkey == 0)
    ? `((pType LIKE '%${inputkey}%') OR (pNo LIKE '%${inputkey}%') OR (pBrand LIKE '%${inputkey}%') OR (pModel LIKE '%${inputkey}%') OR (pSit LIKE '%${inputkey}%') OR (pCc LIKE '%${inputkey}%'))`
    : ''
  console.log(input)
  let placeKey = !(searchkey1 == 0) ? searchkey1 : ''
  console.log('placeKey:' + placeKey)
  let key1 = !(searchkey2 == 0) ? `(pBrand LIKE '%${searchkey2}%')` : ''
  console.log('key1:' + key1)
  let key2 = !(searchkey3 == 0) ? `(pRent LIKE '%${searchkey3}%')` : ''
  console.log('key2:' + key2)
  let key3 = !(searchkey4 == 0) ? `(pAge LIKE '%${searchkey4}%')` : ''
  console.log('key3:' + key3)
  // let ifAND0 = input && key1 && key2 && key3 ? 'AND' : ''
  // console.log('ifAND0:' + ifAND0)
  // let ifAND1 = key1 && key2 && key3 ? 'AND' : ''
  // console.log('ifAND1:' + ifAND1)
  // let ifAND2 = key2 && key3 ? 'AND' : ''
  // console.log('ifAND2:' + ifAND2)

  const childQuery = placeKey
    ? `AND shopName IN (SELECT shopName FROM user_shop WHERE shopAddress LIKE '%${placeKey}%')`
    : ''
  // console.log(childQuery)
  //const  SELECT_SEARCHPLACE_QUERY= `SELECT * FROM commodity WHERE shopName IN (SELECT shopName FROM user_shop WHERE shopAddress LIKE '%${placeKey}%')`

  //const SELECT_SEARCH_PRODUCTS_QUERY = `SELECT * FROM commodity WHERE (* LIKE %${inputkey}%) ${ifAND0} (pBrand LIKE %${key1}%) ${ifAND1} (pRent LIKE %${key2}%) ${ifAND2} (pAge LIKE %${key3}%)`
  //`SELECT * FROM commodity WHERE ${input} ${ifAND0} ${key1} ${ifAND1} ${key2} ${ifAND2} ${key3}`
  console.log(
    ''.concat(
      `${Boolean(inputkey)}`,
      `${Boolean(key1)}`,
      `${Boolean(key2)}`,
      `${Boolean(key3)}`
    )
  )
  switch (
    ''.concat(
      `${Boolean(inputkey)}`,
      `${Boolean(key1)}`,
      `${Boolean(key2)}`,
      `${Boolean(key3)}`
    )
  ) {
    case 'truetruetruetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input} AND ${key1} AND ${key2} AND ${key3}`
      break
    case 'truetruetruefalse':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input} AND ${key1} AND ${key2}`
      break
    case 'truetruefalsetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input} AND ${key1} AND ${key3}`
      break
    case 'truefalsetruetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input} AND ${key2} AND ${key3}`
      break
    case 'falsetruetruetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${key1} AND ${key2} AND ${key3}`
      break
    case 'truetruefalsefalse':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input} AND ${key1}`
      break
    case 'truefalsetruefalse':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input} AND ${key2}`
      break
    case 'truefalsefalsetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input} AND ${key3}`
      break
    case 'falsetruetruefalse':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${key1} AND ${key2}`
      break
    case 'falsetruefalsetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${key1} AND ${key3}`
      break
    case 'falsefalsetruetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${key2} AND ${key3}`
      break
    case 'truefalsefalsefalse':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${input}`
      break
    case 'falsetruefalsefalse':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${key1}`
      break
    case 'falsefalsetruefalse':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${key2}`
      break
    case 'falsefalsefalsetrue':
      var SEARCH_QUERY = `SELECT * FROM commodity WHERE ${key3}`
      break
  }
  console.log('SEARCH_QUERY:' + SEARCH_QUERY)
  const SELECT_SEARCH_QUERY = !(
    inputkey == 0 &&
    searchkey2 == 0 &&
    searchkey3 == 0 &&
    searchkey4 == 0
  )
    ? SEARCH_QUERY
    : `SELECT * FROM commodity WHERE shopName IN (SELECT shopName FROM user_shop WHERE shopAddress LIKE '%${placeKey}%')`
  console.log(SELECT_SEARCH_QUERY)
  connection.query(SELECT_SEARCH_QUERY + childQuery, (err, results) => {
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
