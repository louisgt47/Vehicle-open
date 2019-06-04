import React from 'react'
import { Link } from 'react-router-dom'
// import './css/normalize.css'
// import '../../pages/rent_car/css/productMain.css'
// import '../../pages/rent_car/shopList.css'
// import '../../pages/rent_car/basic.css'
import $ from 'jquery'

import NavMember from '../../pages/basic/NavMember'
import Footer from '../../pages/basic/Footer'

class shopMainProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productMain: [],
      hotProduct: [],
      collection: [],
      mNo: '',
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:4000/islogin', {
      credentials: 'include',
      method: 'GET',
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)

        this.setState({ mNo: obj.No })
      })
    setTimeout(() => {
      this.productMain()
    }, 200)
    // $('.toTop').scroll(0)
  }
  productMain = _ => {
    var itemPno = localStorage.getItem('pNo')
    var data = {
      key: itemPno,
    }
    console.log(data)

    fetch(
      `http://localhost:4000/productMain?pNo=${data}`
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

  render() {
    const { productMain } = this.state
    const padding0 = {
      padding: '0',
    }
    const collection = {
      fontSize: '32px',
      color: '#6eb7b0',
      right: '10px',
      top: '-45px',
      zIndex: '9',
    }
    let collects = []

    for (let i = 0; i < this.state.collection.length; i++) {
      collects[i] = this.state.collection[i].pNo
    }
    console.log(collects)
    for (let i = 0; i < collects.length; i++) {
      collects[i] = Number(collects[i])
    }
    const topMargin = {
      marginTop: '106px',
    }
    const cursor = {
      cursor: 'pointer',
    }
    return (
      <>
        {/* {productMain.map(this.renderProduct)}
        {productMain.map(this.renderLinkOder)} */}
        <NavMember />
        {productMain.map(item => (
          <div className="productList-wrap" style={topMargin}>
            {/* nav */}

            {/* main */}
            <div className="main d-flex">
              <div className="mainImg position_r col-10" style={padding0}>
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
                      marginTop: '5px',
                    }}
                  />
                  <div className="t36 mt-5">評價</div>
                  <div className="evaluate t60">十分良好/4.5</div>
                  <div
                    style={{
                      height: '10px',
                      width: '300px',
                      background: '#fff',
                      marginTop: '30px',
                    }}
                  />
                  <div className="t36 mt-5">座位數</div>
                  <div className="sit t60">{item.pSit}人座</div>
                  <div
                    style={{
                      height: '5px',
                      width: '200px',
                      background: '#fff',
                      marginTop: '25px',
                    }}
                  />
                  <div className="t36 mt-5">耗油量</div>
                  <div className="cc t60">{item.pCc}/c.c</div>
                  <div
                    style={{
                      height: '8px',
                      width: '150px',
                      background: '#fff',
                      marginTop: '30px',
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
              <div className="contentArea d-flex col-2">
                <div className="textArea pt-5">
                  <div className="shopName px-4 ">{item.shopName}</div>
                  <div className="rent px-4 mt-5">
                    {item.pRent}
                    <span>/日</span>
                  </div>
                  <div className="pModel px-4 mt-5">Benz-512012</div>
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
                  <Link
                    key={item.pNo}
                    to={'/Order/' + item.pNo}
                    product={this.props.product}
                  >
                    <div className="my-2 rentButton py-2 px-3">
                      編輯租車資訊
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Footer />
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

export default shopMainProduct
