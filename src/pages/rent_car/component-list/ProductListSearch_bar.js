import React from 'react'

//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'

// 搜尋:重抓資料庫,SELECT * FROM Store_Information WHERE (篩選條件1 LIKE '%inputkey%') ifOR1 (篩選條件2 LIKE '%inputkey%') ifOR2 (篩選條件3 LIKE '%inputkey%');
//const searchkey1 = 篩選條件1 LIKE '%inputkey%'
//const ifOR1(篩選條件1後面的OR存在與否) = (篩選條件2 && 篩選條件3) ? '' : OR
//const searchkey2 = 篩選條件2 LIKE '%inputkey%'
//const ifOR2(篩選條件2後面的OR存在與否) = 篩選條件3  ? '' : OR
//const searchkey3 = 篩選條件3 LIKE '%inputkey%'

class ProductListSearch_bar extends React.Component {
  render() {
    return (
      <div class="productList-search_bar">
        <div class="productList-container" />
      </div>
    )
  }
}
export default ProductListSearch_bar
