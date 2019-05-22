import React from 'react'

//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'

class ProductListHot_list extends React.Component {
  render() {
    return (
      <div className="productList-hot_list">
        <div className="hotList">
          <div className="productList-container">
            <div className="d-flex justify-content-between">
              <div className="type_button">
                <div className="d-flex">
                  <a href className="t-center d-flex justify-content-center">
                    <div
                      className="button_type py-2 px-3"
                      style={{ width: '100px' }}
                    >
                      小客車
                    </div>
                  </a>
                  <a href className="t-center d-flex justify-content-center">
                    <div
                      className="button_type py-2 px-3"
                      style={{ width: '100px' }}
                    >
                      小客車
                    </div>
                  </a>
                  <a href className="t-center d-flex justify-content-center">
                    <div
                      className="button_type py-2 px-3"
                      style={{ width: '100px' }}
                    >
                      小客車
                    </div>
                  </a>
                </div>
              </div>
              <a href className="t-center d-flex justify-content-center">
                <div
                  className="button_insert py-2 px-3"
                  style={{ width: '100px' }}
                >
                  加入收藏
                </div>
              </a>
            </div>
          </div>
          <div className="list">
            <div className="productList-container d-flex justify-content-between">
              <a href className="d-flex p-3 item justify-content-between mt-5">
                <div className="itemimg">
                  <img src="" alt="" />
                </div>
                <div className="massage">
                  <p>gray</p>
                  <p>$price/日</p>
                  <img src="" alt="" />
                </div>
              </a>
              <a href className="d-flex p-3 item justify-content-between mt-5">
                <div className="itemimg">
                  <img src="" alt="" />
                </div>
                <div className="massage">
                  <p>gray</p>
                  <p>$price/日</p>
                  <img src="" alt="" />
                </div>
              </a>
              <a href className="d-flex p-3 item justify-content-between mt-5">
                <div className="itemimg">
                  <img src="" alt="" />
                </div>
                <div className="massage">
                  <p>gray</p>
                  <p>$price/日</p>
                  <img src="" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductListHot_list
