import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
// import Radium from 'radium'
import $ from 'jquery'
import NavMember from '../../../basic/NavMember'
import Footer from '../../../basic/Footer'

import ProductListSearch_bar from '../../component-list/ProductListSearch_bar'

import './assets/css/productList.css'
import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/owl.carousel.css'
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/magnific-popup.css'
import './assets/css/slicknav.min.css'
import './assets/css/slick.css'
import './assets/css/styles.css'
import './assets/css/responsive.css'
import '../../css/basic.css'
// import Wrap from './component-list/Wrap'

class ProductList extends React.Component {
  constructor() {
    super()
    this.state = {
      product: [],
      sProduct: [],
      bProduct: [],
      mProduct: [],
      thisPage: '',
      searchState: 0,
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
      this.product()
      this.hotProduct()
      // this.mAccount()
      this.mCollect()
    }, 500)

    // $('#collect').click(function() {
    //   $(this).removeClass('far fa-bookmark position_a')

    //   $(this).addClass('fas fa-bookmark position_a')
    // })
    // $('#discollect').click(function() {
    //   $(this).removeClass('fas fa-bookmark position_a')

    //   $(this).addClass('far fa-bookmark position_a')
    // })

    //jq
  }
  product = _ => {
    fetch('http://localhost:4000/product')
      .then(response => response.json())
      .then(response => this.setState({ product: response.data }))
      // .then(this.hotProduct)
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }
  hotProduct = _ => {
    fetch('http://localhost:4000/hotproduct')
      .then(response => response.json())
      .then(response => {
        var hot = response.data.sort(function(a, b) {
          return a.pCollect < b.pCollect ? 1 : -1
        })
        hot.length = 6
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
  //會員帳號(session)=>拿到mAccount
  // mAccount = _ =>{

  // }
  //會員收藏判定mCollectPNo  ${this.state.mNo}
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
  //收藏動作
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

  //分類搜索
  all = () => {
    $('#buttonAll').toggleClass('active')
    $('#buttonS').removeClass('active')
    $('#buttonB').removeClass('active')
    $('#buttonM').removeClass('active')

    this.setState({ searchState: 0 })
  }
  sSearch = key => {
    $('#buttonAll').removeClass('active')
    $('#buttonS').addClass('active')
    $('#buttonB').removeClass('active')
    $('#buttonM').removeClass('active')

    let data = this.state.product.filter(item => item.pType.includes(key))
    this.setState({ sProduct: data, searchState: 1 })
  }
  bSearch = key => {
    $('#buttonAll').removeClass('active')
    $('#buttonS').removeClass('active')
    $('#buttonB').addClass('active')
    $('#buttonM').removeClass('active')

    let data = this.state.product.filter(item => item.pType.includes(key))
    this.setState({ bProduct: data, searchState: 2 })
  }
  mSearch = key => {
    $('#buttonAll').removeClass('active')
    $('#buttonS').removeClass('active')
    $('#buttonB').removeClass('active')
    $('#buttonM').addClass('active')
    console.log(key)
    let data = this.state.product.filter(item => item.pType.includes(key))
    this.setState({ mProduct: data, searchState: 3 })
  }

  //跳頁函式
  myFunctionB(page) {
    // window.location.href = `?page=${page - 1}`
    // console.log(window.location.href)
    this.setState({ thisPage: page - 1 })
  }

  myFunction(page) {
    // window.location.href = `?page=${page}`
    // console.log(window.location.href)
    this.setState({ thisPage: page })
  }

  myFunctionC(page) {
    // window.location.href = `?page=${page + 1}`
    // console.log(window.location.href)
    this.setState({ thisPage: page + 1 })
  }

  render() {
    const light = {
      filter: 'brightness(.3)',
      transition: '.5s',
    }
    const line = {
      position: 'absolute',
      width: '610px',
      height: '410px',
      left: '0',
      top: '-40px',
      zIndex: '-9',
      border: 'solid 2px #6eb7b0',
    }
    const fWhite = {
      color: '#fff',
    }
    const collection = {
      fontSize: '32px',
      color: '#6eb7b0',
      right: '10px',
      top: '-45px',
      zIndex: '9',
    }

    const collection2 = {
      fontSize: '32px',
      color: '#fff',
      right: '25px',
      bottom: '40px',
      zIndex: '99',
    }
    // const pageStyle = {
    //   ':active': { backgrounColor: '#6eb7b0', borderColor: '#6eb7b0' },
    // }
    //每頁總數
    const perPage = 12
    //總筆數
    var totalProducts = 0
    switch (this.state.searchState) {
      case 0:
        totalProducts = this.state.product.length
        break
      case 1:
        totalProducts = this.state.sProduct.length
        break
      case 2:
        totalProducts = this.state.bProduct.length
        break
      case 3:
        totalProducts = this.state.mProduct.length
        break
    }
    console.log('totalProducts: ' + totalProducts)

    //總頁數
    const totalPage = Math.ceil(totalProducts / perPage)
    //現在頁數
    // var strUrl = location
    // const page = parseInt(location.search)
    const page = this.state.thisPage ? this.state.thisPage : 1
    //限制9筆資料
    console.log('perPage: ' + perPage)
    console.log('totalProducts: ' + totalProducts)
    console.log('totalPage' + totalPage)
    console.log('page: ' + page)

    //分類搜尋判斷
    switch (this.state.searchState) {
      case 0:
        var searchList = this.state.product
        break
      case 1:
        var searchList = this.state.sProduct
        break
      case 2:
        var searchList = this.state.bProduct
        break
      case 3:
        var searchList = this.state.mProduct
        break
    }
    console.log(searchList)

    var perPageRender = searchList.filter(function(value, index) {
      return index >= (page - 1) * perPage && index < page * perPage
    })
    console.log(perPageRender)
    //中間單頁創建函式
    let PageArray = []

    for (let i = 0; i < totalPage; i++) {
      PageArray[i] = i + 1
    }

    let collects = []

    for (let i = 0; i < this.state.collection.length; i++) {
      collects[i] = this.state.collection[i].pNo
    }
    console.log(collects)
    for (let i = 0; i < collects.length; i++) {
      collects[i] = Number(collects[i])
    }
    console.log(collects)
    const cursor = {
      cursor: 'pointer',
    }
    // this.state.hotProduct.map(item => {
    //   console.log(item.pNo)
    //   // console.log(collects)

    //   console.log(collects.includes(item.pNo))
    // })

    return (
      <>
        <NavMember />
        <a id="scrollUp" href="#top">
          <i className="fa fa-arrow-up" />
        </a>
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="" style={{ height: '990px' }}>
                  <img
                    src="http://localhost:3000/images/car-1376190.jpg"
                    alt=""
                    className="sliderImg"
                  />
                  <div className="slider-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="slider-text">
                            <div className="" style={line} />
                            <h2>
                              <span className="d-block">TOYOYA</span>國豐汽車
                              &nbsp;<span className="color">台北市</span>
                            </h2>
                            <p className="mt-2">
                              4人座 &nbsp;&nbsp;&nbsp;<span>2,000 / 日 </span>
                            </p>
                            <br />
                            <a href="project.html">
                              See Project{' '}
                              <i className="fa fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </div>
              <div className="carousel-item">
                <div className="" style={{ height: '990px' }}>
                  <img
                    src="http://localhost:3000/images/Toyota-Corolla.jpg"
                    alt=""
                    className=""
                    style={light}
                  />
                  <div className="slider-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="slider-text">
                            <div className="" style={line} />
                            <h2>
                              <span className="d-block">TOYOYA</span>國豐汽車
                              &nbsp;<span className="color">台北市</span>
                            </h2>
                            <p className="mt-2">
                              4人座 &nbsp;&nbsp;&nbsp;<span>2,000 / 日 </span>
                            </p>
                            <br />
                            <a href="project.html">
                              See Project{' '}
                              <i className="fa fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </div>
              <div className="carousel-item">
                <div className="" style={{ height: '990px' }}>
                  <img
                    src="http://localhost:3000/images/My Post.jpg"
                    alt=""
                    className=""
                    style={light}
                  />
                  <div className="slider-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="slider-text">
                            <div className="" style={line} />
                            <h2>
                              <span className="d-block">TOYOYA</span>國豐汽車
                              &nbsp;<span className="color">台北市</span>
                            </h2>
                            <p className="mt-2">
                              4人座 &nbsp;&nbsp;&nbsp;<span>2,000 / 日 </span>
                            </p>
                            <br />
                            <a href="project.html">
                              See Project{' '}
                              <i className="fa fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* header-area start */}
          {/* header-area end */}
          {/* slider-area start */}
          <div className="slider-area">
            <div className="slider-active next-prev-style">
              {/* <div className="slider-items" style={{ height: '990px' }}>
                <img
                  src="http://localhost:3000/images/car-1376190.jpg"
                  alt
                  className="slider"
                />
                <div className="slider-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-text">
                          <div className="line" />
                          <h2>
                            <span className="d-block">TOYOYA</span>國豐汽車
                            &nbsp;<span className="color">台北市</span>
                          </h2>
                          <p className="mt-2">
                            4人座 &nbsp;&nbsp;&nbsp;<span>2,000 / 日 </span>
                          </p>
                          <br />
                          <a href="project.html">
                            See Project <i className="fa fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="slider-items" style={{ height: '990px' }}>
                <img
                  src="http://localhost:3000/images/111.png"
                  alt
                  className="slider"
                />
                <div className="slider-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-text">
                          <div className="line" />
                          <h2>
                            <span className="d-block">TOYOYA</span>國豐汽車
                            &nbsp;<span className="color">台北市</span>
                          </h2>
                          <p className="mt-2">
                            4人座 &nbsp;&nbsp;&nbsp;<span>2,000 / 日 </span>
                          </p>
                          <br />
                          <a href="project.html">
                            See Project <i className="fa fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="slider-items" style={{ height: '990px' }}>
                <img
                  src="http://localhost:3000/images/8c2579fc-2019-toyota-86-special-edition-3.jpg"
                  alt
                  className="slider"
                />
                <div className="slider-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-text">
                          <div className="line" />
                          <h2>
                            <span className="d-block">TOYOYA</span>國豐汽車
                            &nbsp;<span className="color">台北市</span>
                          </h2>
                          <p className="mt-2">
                            4人座 &nbsp;&nbsp;&nbsp;<span>2,000 / 日 </span>
                          </p>
                          <br />
                          <a href="project.html">
                            See Project <i className="fa fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* slider-area end */}
          {/* ablout-area start */}
          <div className="about-area about-area2 ptb-120 listsearchbar">
            <ProductListSearch_bar product={this.state.product} />
          </div>
          {/* ablout-area end */}
          {/* service-area start */}
          <div className="service-area bg-1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title text-center">
                    <h2>熱門車款</h2>
                    <h3>The hot list from all members</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {this.state.hotProduct.map(item =>
                  collects.includes(item.pNo) ? (
                    <div className="col-sm-6 col-12 col-lg-4">
                      <div className="service-wrap">
                        <div className="service-img">
                          <div class="prodimg">
                            <img
                              src={require(`../../../../../public/uploads/${
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
                          <a href="servic-details.html">
                            <Link
                              key={item.pNo}
                              to={'/productMain/' + item.pNo}
                              product={this.props.product}
                            >
                              詳細
                            </Link>
                          </a>
                          <i
                            className="fas fa-bookmark position_a"
                            id={'discollect' + item.pNo}
                            style={collection}
                            onClick={() => this.memberItem(item.pNo, collects)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-sm-6 col-12 col-lg-4">
                      <div className="service-wrap">
                        <div className="service-img">
                          <div class="prodimg">
                            <img
                              src={require(`../../../../../public/uploads/${
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
                          <a href="servic-details.html">
                            <Link
                              key={item.pNo}
                              to={'/productMain/' + item.pNo}
                              product={this.props.product}
                            >
                              詳細
                            </Link>
                          </a>
                          <i
                            className="far fa-bookmark position_a"
                            id={'collect' + item.pNo}
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
          {/* service-area end */}
          {/* .project-area start */}
          <div className="project-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="section-title">
                    <h2>所有車款</h2>
                    <h3>The list of all models</h3>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="project-menu text-right">
                    <button
                      className="active mr-1"
                      data-filter="*"
                      onClick={this.all}
                      id="buttonAll"
                      style={cursor}
                    >
                      全部
                    </button>
                    <button
                      className=" mx-1"
                      data-filter=".cat1"
                      onClick={() => this.sSearch('小客車')}
                      id="buttonS"
                      style={cursor}
                    >
                      小客車
                    </button>
                    <button
                      className=" mx-1"
                      data-filter=".cat2"
                      onClick={() => this.bSearch('休旅車')}
                      id="buttonB"
                      style={cursor}
                    >
                      休旅車
                    </button>
                    <button
                      className=" ml-1"
                      data-filter=".cat3"
                      onClick={() => this.mSearch('貨車')}
                      id="buttonM"
                      style={cursor}
                    >
                      貨車
                    </button>
                  </div>
                </div>
              </div>
              <div className="row grid">
                {perPageRender.map(item =>
                  collects.includes(item.pNo) ? (
                    <div className="col-lg-3 col-sm-6 col-12 project cat2 cat3 position_r">
                      <Link
                        key={item.pNo}
                        to={'/productMain/' + item.pNo}
                        product={this.props.product}
                      >
                        <div className="project-wrap">
                          <div class="prodimg">
                            <img
                              src={require(`../../../../../public/uploads/${
                                item.pImg.split(',')[0]
                              }`)}
                              alt=""
                            />
                          </div>
                          <div className="project-content">
                            <a
                              href="assets/images/project/project2/1.jpg"
                              className="popup"
                            >
                              <i className="fa fa-search" />
                            </a>
                            <h3 style={fWhite}>{item.pBrand}</h3>
                          </div>
                        </div>
                      </Link>
                      <i
                        className="fas fa-bookmark position_a"
                        id="discollect"
                        style={collection2}
                        onClick={() => this.memberItem(item.pNo, collects)}
                      />
                    </div>
                  ) : (
                    <div className="col-lg-3 col-sm-6 col-12 project cat2 cat3 position_r">
                      <Link
                        key={item.pNo}
                        to={'/productMain/' + item.pNo}
                        product={this.props.product}
                      >
                        <div className="project-wrap">
                          <div class="prodimg">
                            <img
                              src={require(`../../../../../public/uploads/${
                                item.pImg.split(',')[0]
                              }`)}
                              alt=""
                            />
                          </div>
                          <div className="project-content">
                            <a
                              href="assets/images/project/project2/1.jpg"
                              className="popup"
                            >
                              <i className="fa fa-search" />
                            </a>
                            <h3 style={fWhite}>{item.pBrand}</h3>
                          </div>
                        </div>
                      </Link>
                      <i
                        className="far fa-bookmark position_a"
                        id="collect"
                        style={collection2}
                        onClick={() => this.memberItem(item.pNo, collects)}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            {/* 頁數跳轉 */}
            <ul class="pagination pagination-sm justify-content-center">
              {/* 上一頁 */}
              <li className="page-item">
                <Link
                  to={'/productList/' + (page - 1)}
                  onClick={page <= 1 ? '' : () => this.myFunctionB(page)}
                >
                  <a className="page-link" id="p2">
                    &lt;
                  </a>
                </Link>
              </li>
              {/* 中間單頁 */}
              {PageArray.map(item =>
                item === page ? (
                  <li
                    className="page-item active pageActive"
                    onClick={() => this.myFunction(item)}
                  >
                    <Link
                      to={'/productList/' + item}
                      onClick={() => this.myFunction(item)}
                    >
                      <a className="page-link">{item}</a>
                    </Link>
                  </li>
                ) : (
                  <li className="page-item ">
                    <Link
                      to={'/productList/' + item}
                      onClick={() => this.myFunction(item)}
                    >
                      <a className="page-link">{item}</a>
                    </Link>
                  </li>
                )
              )}
              {/* 下一頁 */}
              <li className="page-item">
                <Link
                  to={'/productList/' + (page + 1)}
                  onClick={
                    page >= totalPage ? '' : () => this.myFunctionC(page)
                  }
                >
                  <a className="page-link" id="p2">
                    &gt;
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default ProductList
