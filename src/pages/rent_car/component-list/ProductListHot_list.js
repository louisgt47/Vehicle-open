import React from 'react'

//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'

class ProductListHot_list extends React.Component {
  render() {
    const gray = {
      background: '#bfbfbf',
    }
    const listimg = {
      display: 'flex',
      justifContent: 'end',
      alignContent: 'center',
      flexFlow: 'column',
    }
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
                      休旅車
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
              <div className=" mt-5 mx-1" style={gray}>
                <a href className="d-flex p-3 item justify-content-between">
                  <div className="itemimg">
                    <img
                      src="http://localhost:3000/images/mobile01-a69eafa4cdb564fcb0ac0755f8a1698e.png"
                      alt=""
                      style={{ height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="massage" style={listimg}>
                    <p className="pr-3">gray</p>
                    <p className="pr-3">$price/日</p>
                    <div style={{ height: '50px' }}>
                      <img
                        src="http://localhost:3000/images/brandlogo/Toyota-Logo-w.png"
                        alt=""
                        style={{ height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className=" mt-5 mx-1" style={gray}>
                <a href className="d-flex p-3 item justify-content-between">
                  <div className="itemimg">
                    <img
                      src="http://localhost:3000/images/mobile01-a69eafa4cdb564fcb0ac0755f8a1698e.png"
                      alt=""
                      style={{ height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="massage" style={listimg}>
                    <p className="pr-3">gray</p>
                    <p className="pr-3">$price/日</p>
                    <div style={{ height: '50px' }}>
                      <img
                        src="http://localhost:3000/images/brandlogo/Toyota-Logo-w.png"
                        alt=""
                        style={{ height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className=" mt-5 mx-1" style={gray}>
                <a href className="d-flex p-3 item justify-content-between">
                  <div className="itemimg">
                    <img
                      src="http://localhost:3000/images/mobile01-a69eafa4cdb564fcb0ac0755f8a1698e.png"
                      alt=""
                      style={{ height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="massage" style={listimg}>
                    <p className="pr-3">gray</p>
                    <p className="pr-3">$price/日</p>
                    <div style={{ height: '50px' }}>
                      <img
                        src="http://localhost:3000/images/brandlogo/Toyota-Logo-w.png"
                        alt=""
                        style={{ height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductListHot_list
