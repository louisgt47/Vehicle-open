import React from 'react'

import Nav from './Nav'
import ProductListSearch_bar from './ProductListSearch_bar'
import ProductListMain_product from './ProductListMain_product'
import ProductListHot_list from './ProductListHot_list'
import ProductListList from './ProductListList'
import ProductListPage_bar from './ProductListPage_bar'
import ProductListFooter from './ProductListFooter'

class Wrap extends React.Component {
  constructor() {
    super()
    this.state = {
      product: [],
    }
  }
  componentDidMount() {
    this.product()
  }
  product = _ => {
    fetch('http://localhost:4000/product')
      .then(response => response.json())
      .then(response => this.setState({ product: response.data }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div className="productList-wrap">
        <Nav />
        <ProductListSearch_bar product={this.state.product} />
        <ProductListMain_product product={this.state.product} />
        <ProductListHot_list product={this.state.product} />
        <ProductListList product={this.state.product} />
        {/* <ProductListPage_bar product={this.state.product} /> */}
        <ProductListFooter product={this.state.product} />
      </div>
    )
  }
}
export default Wrap
