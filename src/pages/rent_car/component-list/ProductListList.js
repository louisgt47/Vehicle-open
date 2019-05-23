import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'

class ProductListList extends React.Component {
  render() {
    return (
      <div className="productList-list">
        <div className="productList-container">
          <div className="list_search d-flex justify-content-center mb-5">
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依車種</div>
            </a>
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依價錢</div>
            </a>
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依時間</div>
            </a>
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依地點</div>
            </a>
          </div>
          <div
            className="list_item d-flex flex-wrap"
            style={{ marginTop: '100px' }}
          >
            {this.props.product.map(item => (
              <div className="card my-5 mx-2" style={{ width: '520px' }}>
                <Link
                  key={item.pNo}
                  to={'/productMain/' + item.pNo}
                  product={this.props.product}
                >
                  <div className="card_img relative">
                    <img
                      src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                      className="card-img-logo absolute"
                      alt="..."
                    />
                    <img
                      src="http://localhost:3000/images/6-1.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body py-2 d-flex justify-content-between">
                    <div className="card-text">
                      <h5>{item.pBrand}</h5>
                      {item.pSit}人座/{item.pType}
                    </div>
                    <a href className="mx-2 d-flex">
                      <div className="t-center  px-2 d-flex align-items-center">
                        <p className="m-0 ">依價錢</p>
                      </div>
                    </a>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default ProductListList
