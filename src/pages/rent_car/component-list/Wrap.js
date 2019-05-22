import React from 'react'

import Nav from './Nav'
import ProductListSearch_bar from './ProductListSearch_bar'
import ProductListMain_product from './ProductListMain_product'
import ProductListHot_list from './ProductListHot_list'
import ProductListList from './ProductListList'
import ProductListPage_bar from './ProductListPage_bar'
import ProductListFooter from './ProductListFooter'

class Wrap extends React.Component {
  render() {
    return (
      <div className="productList-wrap">
        <Nav />
        <ProductListSearch_bar />
        <ProductListMain_product />
        <ProductListHot_list />
        <ProductListList />
        <ProductListPage_bar />
        <ProductListFooter />
      </div>
    )
  }
}
export default Wrap
