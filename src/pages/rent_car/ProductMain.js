import React from 'react'
import { Link } from 'react-router-dom'
// import './css/normalize.css'
import './css/productMain.css'
import './css/shopList.css'
import './css/basic.css'

class ProductMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productMain: [],
    }
  }
  componentDidMount() {
    this.productMain()
  }
  productMain = _ => {
    console.log(this.props.match.params.pNo)
    fetch(
      `http://localhost:4000/productMain?pNo=${+this.props.match.params.pNo}`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({ productMain: response.data }, () =>
          console.log({ response_data: response.data })
        )
      )
      .catch(err => console.error(err))
  }
  renderProduct = ({ pNo, pBrand }) => <div key={pNo}>{pBrand}</div>
  renderLinkOder = ({ pNo }) => (
    <Link key={pNo} to={'/order/' + pNo}>
      <h3>order</h3>
    </Link>
  )

  render() {
    const { productMain } = this.state
    return (
      <>
        {/* {productMain.map(this.renderProduct)}
        {productMain.map(this.renderLinkOder)} */}

        {productMain.map(item => (
          <div className="productList-wrap">
            {/* nav */}
            <div className="productList-nav" />
            {/* main */}
            <div className="main d-flex">
              <div className="mainImg position_r">
                <img
                  className="importantImg"
                  src="http://localhost:3000/images/car-1376190.jpg"
                  alt=""
                />
                <div className="mainContent position_a d-flex column align-items-end">
                  <div className="t36">車齡</div>
                  <div className="old">
                    <span className="year t60">13</span>年
                    <span className="month t60">&nbsp;3</span>月
                  </div>
                  <div
                    style={{
                      height: '15px',
                      width: '40px',
                      background: '#fff',
                      marginTop: '-10px',
                    }}
                  />
                  <div className="t36 mt-5">評價</div>
                  <div className="evaluate t60">十分良好/4.5</div>
                  <div
                    style={{
                      height: '10px',
                      width: '300px',
                      background: '#fff',
                      marginTop: '-5px',
                    }}
                  />
                  <div className="t36 mt-5">座位數</div>
                  <div className="sit t60">{item.pSit}人座</div>
                  <div
                    style={{
                      height: '5px',
                      width: '200px',
                      background: '#fff',
                      marginTop: '-5px',
                    }}
                  />
                  <div className="t36 mt-5">耗油量</div>
                  <div className="cc t60">{item.pCc}/c.c</div>
                  <div
                    style={{
                      height: '8px',
                      width: '150px',
                      background: '#fff',
                      marginTop: '-5px',
                    }}
                  />
                </div>
                <div className="mainLogo position_a">
                  <img
                    src="http://localhost:3000/images/brandlogo/Toyota-Logo-w.png"
                    alt=""
                  />
                </div>
                <div className="address position_a">
                  台北市&nbsp;&nbsp;{item.rentState}
                </div>
              </div>
              {/* contentArea */}
              <div className="contentArea d-flex">
                <div className="textArea pt-5">
                  <div className="shopName px-4 ">{item.shopName}</div>
                  <div className="rent px-4">
                    {item.pRent}
                    <span>/日</span>
                  </div>
                  <div className="pModel px-4">Benz-512012</div>
                  <div className="twoPlace px-4 mt-3">接受甲租乙還</div>
                  <div className="toHome px-4 mb-4">接受代駕到府服務</div>
                  <div className="carIntro px-4 mb-3">車款介紹</div>
                  <div className="text px-4 px-4">
                    2019年式QX60採豪華款，新年式改搭VQ35DD
                    3.5升V6自然進氣汽油引擎，最大輸出為295hp/37.3kgm，較先前提升了40hp/4.4kgm。2019年式QX60採豪華款，新年式改搭VQ35DD
                    3.5升V6自然進氣汽油引擎，最大輸出為295hp/37.3kgm，較先前提升了40hp/4.4kgm。2019年式QX60採豪華款，新年式改搭VQ35DD
                    3.5升V6自然進氣汽油引擎，最大輸出為295hp/37.3kgm，較先前提升了40hp/4.4kgm。
                  </div>
                </div>
                <div className="buttonArea d-flex column justify-content-end align-items-center pr-4">
                  <div className="my-2 rentButton py-2 px-3">我要租車</div>
                  <div className="my-2 collectButton py-2 px-3">加入收藏</div>
                  <div className="my-2 toShopButton py-2 px-3">關於車商</div>
                </div>
              </div>
            </div>
            <div className="s_tittle">
              <div className="d-flex justify-content-start align-items-center s_tittle">
                <div>其他推薦車款_</div>
              </div>
            </div>
            {/* recommend */}
            <div className="recommend">
              <div className="card-deck">
                <div className="card mr-4">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
                <div className="card mx-4">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                  </div>
                </div>
                <div className="card mx-4">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                </div>
                <div className="card ml-4">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="productList-footer" />
          </div>
        ))}
      </>
    )
  }
}

// const ProductMain = props => {
//   console.log(props)

//   // 1.用props.match.params.id抓取參數
//   // 2.props.match.params.id 資料類型字串
//   // 3.find方法，沒找到是回傳undefined
//   //   const product = props.product.find(
//   //     item => item.pNo === +props.match.params.pNo
//   //   )

// //   console.log(+props.match.params.pNo)
//   componentDidMount(){
//     this.product()
//   }
//   return <></>
// }

export default ProductMain
