import React from 'react'

//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'

//需要state紀錄各條件

// 搜尋:重抓資料庫,SELECT * FROM Store_Information WHERE (* LIKE 'inputkey') AND (篩選條件1 LIKE '%selectkey1%') ifAND1 (篩選條件2 LIKE '%selectkey2%') ifAND2 (篩選條件3 LIKE '%selectkey3%');
// const ifAND0(inputkey後面的OR存在與否) = (篩選條件1 && 篩選條件2 && 篩選條件3) ? '' : AND
// const searchkey1 = 篩選條件1 LIKE '%selectkey1%'
// const ifAND1(篩選條件1後面的OR存在與否) = (篩選條件2 && 篩選條件3) ? '' : AND
// const searchkey2 = 篩選條件2 LIKE '%selectkey2%'
// const ifAND2(篩選條件2後面的OR存在與否) = 篩選條件3  ? '' : AND
// const searchkey3 = 篩選條件3 LIKE '%selectkey3%'

//最終導向(link to)SearchList.js(傳入搜尋出的商品編號)

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
