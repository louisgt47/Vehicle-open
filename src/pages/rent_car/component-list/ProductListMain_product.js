import React from 'react'

//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'

class ProductListMain_product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // hotList_car: [],
    }
  }

  componentDidMount() {
    console.log(this.props.product)
    // this.hotList_car()
  }

  // hotList_car = _ => {
  //   fetch('http://localhost:4000/hotList_car')
  //     .then(response => response.json())
  //     .then(response => this.setState({ hotList_car: response.data }))
  //     // .then(console.log(this.state.hotList_car))
  //     .catch(err => console.error(err))
  // }
  Product_pBrand = ({ pBrand }) => <h2 key={0}>{pBrand}</h2>

  render() {
    // const { hotList_car } = this.state.hotList_car
    // var myObj = this.state.hotList_car[0]
    // var myProperty = pBrand

    return (
      <div className="productList-main_product">
        <div className="productList-container">
          <div
            className="productList-container relative"
            style={{ height: '1100px' }}
          >
            <div className="productList-main_logo absolute">
              <img
                src="http://localhost:3000/images/brandlogo/Toyota-Logo.png"
                alt=""
                style={{ height: '100%', objectFit: 'contain' }}
              />
            </div>
            {/* 主圖+按鈕+價錢 */}
            <div className="productList-main_img absolute">
              <img
                src="http://localhost:3000/images/Toyota-Rav4.png"
                alt=""
                style={{ height: '100%', objectFit: 'contain' }}
              />
              <div className="hot-main-price absolute">
                <h2>$1,000/日</h2>
                <div className="d-flex justify-content-center button_insert py-1">
                  <a
                    href
                    className="t-center d-flex justify-content-center button_insert"
                  >
                    加入收藏
                  </a>
                </div>
              </div>
            </div>
            <div className="productList-main_tittle absolute d-flex justify-content-between">
              <div>
                <p style={{ fontSize: '3rem' }}>熱門車款</p>
              </div>
              {/* 商品訊息 */}
              <div>
                {this.props.product.map(this.Product_pBrand)[0]}
                <div className="border_right pr-2" style={{ height: '300px' }}>
                  <div style={{ height: '30px' }} />
                  <p className="t-right mb-2 ">耗油量</p>
                  <p className="t-right my-4 ">座位數</p>
                  <p className="t-right my-4 ">車齡</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductListMain_product
