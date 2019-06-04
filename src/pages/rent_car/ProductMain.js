import React from 'react'
import { Link } from 'react-router-dom'
// import './css/normalize.css'
import './css/productMain.css'
import './css/shopList.css'
import './css/basic.css'
import $ from 'jquery'

import NavMember from '../basic/NavMember'
import Footer from '../basic/Footer'

class ProductMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productMain: [],
      hotProduct: [],
      collection: [],
      mNo: '',
      productRate: [],
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
      this.hotProduct()
      this.mCollect()
    }, 200)
    // $('.toTop').scroll(0)
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
  productMainTo = pNo => {
    $('#linkTo').scrollTop(0)
    fetch(`http://localhost:4000/productMain?pNo=${pNo}`)
      .then(response => response.json())
      .then(response =>
        this.setState({ productMain: response.data }, () =>
          window.history.go(0)
        )
      )
      .catch(err => console.error(err))
  }
  //取評價
  // getRate = () => {
  //   fetch(
  //     `http://localhost:4000/mainProductGetRate?pNo=${+this.props.match.params
  //       .pNo}`
  //   )
  //     .then(response => response.json())
  //     .then(response =>
  //       this.setState({ productRate: response.data }, () =>
  //         console.log({ productRate: response.data })
  //       )
  //     )
  //     .catch(err => console.error(err))
  // }
  hotProduct = _ => {
    fetch('http://localhost:4000/hotproduct')
      .then(response => response.json())
      .then(response => {
        var hot = response.data.sort(function(a, b) {
          return a.pCollect < b.pCollect ? 1 : -1
        })
        hot.length = 4
        this.setState(
          {
            hotProduct: hot,
          },
          () => console.log(this.state.hotProduct)
        )
      })
      // .then(console.log(this.state.hotProduct))
      .catch(err => console.error(err))
  }
  renderProduct = ({ pNo, pBrand }) => <div key={pNo}>{pBrand}</div>
  renderLinkOder = ({ pNo }) => (
    <Link key={pNo} to={'/order/' + pNo}>
      <h3>order</h3>
    </Link>
  )
  //會員收藏判定mCollectPNo  mNo=${this.state.mNo}
  mCollect = _ => {
    fetch(`http://localhost:4000/mCollectPNo?mNo=${this.state.mNo}`)
      .then(response => response.json())
      // .then(response => console.log(response.data))

      .then(response =>
        this.setState({ collection: response.data }, () =>
          console.log(response.data)
        )
      )

      // .then(console.log(this.state.hotProduct))
      .catch(err => console.error(err))
  }
  memberItem = (pNo, collects) => {
    console.log(pNo)
    console.log(collects)
    if (!collects.includes(pNo)) {
      $(`#collect${pNo}`).removeClass('far fa-bookmark position_a')

      $(`#collect${pNo}`).addClass('fas fa-bookmark position_a')

      fetch(`http://localhost:4000/insertItem?mNo=${this.state.mNo}&pNo=${pNo}`)
        .then(response => response.json())
        .then(response => this.setState({ hotList_car: response.data }))
        // .then(console.log(this.state.hotList_car))
        .catch(err => console.error(err))
    } else {
      $(`#discollect${pNo}`).removeClass('fas fa-bookmark position_a')

      $(`#discollect${pNo}`).addClass('far fa-bookmark position_a')

      fetch(`http://localhost:4000/deleteItem?mNo=${this.state.mNo}&pNo=${pNo}`)
        .then(response => response.json())
        .then(response => this.setState({ hotList_car: response.data }))
        // .then(console.log(this.state.hotList_car))
        .catch(err => console.error(err))
    }
    this.mCollect()
  }
  top = () => {
    window.location.reload()
  }
  render() {
    console.log(this.state.productMain)
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
    const overflow = {
      overflow: 'hidden',
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
                  src={require(`../../../public/uploads/${
                    item.pImg.split(',')[0]
                  }`)}
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
                  <div className="text1 px-4 px-4" style={overflow}>
                    {item.pIntro}
                  </div>
                </div>
                <div className="buttonArea d-flex column justify-content-end align-items-center pr-4">
                  <Link
                    key={item.pNo}
                    to={'/Order/' + item.pNo}
                    product={this.props.product}
                  >
                    <div className="my-2 rentButton py-2 px-3">我要租車</div>
                  </Link>
                  {collects.includes(item.pNo) ? (
                    <div
                      className="my-2 collectButton py-2 px-3 "
                      style={cursor}
                      onClick={() => this.memberItem(item.pNo, collects)}
                    >
                      取消收藏
                    </div>
                  ) : (
                    <div
                      className="my-2  py-2 px-3 rentButton"
                      style={cursor}
                      onClick={() => this.memberItem(item.pNo, collects)}
                    >
                      加入收藏
                    </div>
                  )}
                  <div className="my-2 toShopButton py-2 px-3">關於車商</div>
                </div>
              </div>
            </div>
            <div className="s_tittle">
              <div className="d-flex justify-content-start align-items-center s_tittle">
                <h3>其他推薦車款_</h3>
              </div>
            </div>
            {/* recommend */}
            <div className="container">
              <div className="row">
                {this.state.hotProduct.map(item =>
                  collects.includes(item.pNo) ? (
                    <div className="col-sm-6 col-12 col-lg-3">
                      <div className="service-wrap">
                        <div className="service-img">
                          <div className="prodimg">
                            <img
                              src={require(`../../../public/uploads/${
                                item.pImg.split(',')[0]
                              }`)}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="service-content position_r">
                          <h4>{item.pBrand}</h4>
                          <p>{item.pSit}</p>
                          <p>{item.pRent} /日</p>
                          <a href="#top" className="toTop">
                            <Link
                              key={item.pNo}
                              to={'/productMain/' + item.pNo}
                              product={this.props.product}
                              onClick={() => this.productMainTo(item.pNo)}
                            >
                              詳細
                            </Link>
                          </a>
                          <i
                            className="fas fa-bookmark position_a"
                            id="discollect"
                            style={collection}
                            onClick={() => this.memberItem(item.pNo, collects)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-sm-6 col-12 col-lg-3">
                      <div className="service-wrap">
                        <div className="service-img">
                          <div className="prodimg">
                            <img
                              src={require(`../../../public/uploads/${
                                item.pImg.split(',')[0]
                              }`)}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="service-content position_r">
                          <h4>{item.pBrand}</h4>
                          <p>{item.pSit}</p>
                          <p>{item.pRent} /日</p>
                          <a href="#top">
                            <Link
                              key={item.pNo}
                              to={'/productMain/' + item.pNo}
                              product={this.props.product}
                              onClick={() => this.productMainTo(item.pNo)}
                              id="linkTo"
                            >
                              詳細
                            </Link>
                          </a>
                          <i
                            className="far fa-bookmark position_a"
                            id="collect"
                            style={collection}
                            onClick={() => this.memberItem(item.pNo, collects)}
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
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

export default ProductMain
