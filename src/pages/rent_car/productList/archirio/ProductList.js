import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import Radium from 'radium'

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
      thisPage: '',
      searchState: 0,
      hotProduct: [],
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
  // hotProduct = _ => {
  //   fetch('http://localhost:4000/hotproduct')
  //     .then(response => response.json())
  //     .then(response => this.setState({ hotProduct: response.data.splice(6) }))
  //     // .then(console.log(this.state.hotList_car))
  //     .catch(err => console.error(err))
  // }
  //分類搜索
  all = () => {
    this.setState({ searchState: 0 })
  }
  sSearch = key => {
    let data = this.state.product.filter(item => item.pType.includes(key))
    this.setState({ sProduct: data, searchState: 1 })
  }
  bSearch = key => {
    let data = this.state.product.filter(item => item.pType.includes(key))
    this.setState({ bProduct: data, searchState: 2 })
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
    }
    const pageStyle = {
      ':active': { backgrounColor: '#6eb7b0', borderColor: '#6eb7b0' },
    }
    //每頁總數
    const perPage = 12
    //總筆數
    const totalProducts = this.state.product.length
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
    return (
      <>
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
                    src="http://localhost:3000/images/car-1376190.jpg"
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
                    src="http://localhost:3000/images/car-1376190.jpg"
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
          <div className="about-area about-area2 ptb-120">
            <div className="container">
              <div className="row" />
            </div>
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
                <div className="col-sm-6 col-12 col-lg-4">
                  <div className="service-wrap">
                    <div className="service-img">
                      <img
                        src="http://localhost:3000/images/car-1376190.jpg"
                        alt=""
                      />
                    </div>
                    <div className="service-content position_r">
                      <h4>Residential Design</h4>
                      <p>
                        It has survived not only five centui but the leap into
                        electronic typesetting remain essentially unchanged.
                      </p>
                      <a href="servic-details.html">詳細</a>
                      <i
                        className="far fa-bookmark position_a"
                        style={collection}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 col-lg-4">
                  <div className="service-wrap">
                    <div className="service-img">
                      <img src="assets/images/service/2.jpg" alt />
                    </div>
                    <div className="service-content">
                      <h4>corporate Design</h4>
                      <p>
                        It has survived not only five centui but the leap into
                        electronic typesetting remain essentially unchanged.
                      </p>
                      <a href="servic-details.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 col-lg-4">
                  <div className="service-wrap">
                    <div className="service-img">
                      <img src="assets/images/service/3.jpg" alt />
                    </div>
                    <div className="service-content">
                      <h4>Commercial design</h4>
                      <p>
                        It has survived not only five centui but the leap into
                        electronic typesetting remain essentially unchanged.
                      </p>
                      <a href="servic-details.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 col-lg-4">
                  <div className="service-wrap">
                    <div className="service-img">
                      <img src="assets/images/service/4.jpg" alt />
                    </div>
                    <div className="service-content">
                      <h4>Hospitality Design</h4>
                      <p>
                        It has survived not only five centui but the leap into
                        electronic typesetting remain essentially unchanged.
                      </p>
                      <a href="servic-details.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 col-lg-4">
                  <div className="service-wrap">
                    <div className="service-img">
                      <img src="assets/images/service/5.jpg" alt />
                    </div>
                    <div className="service-content">
                      <h4>Restaurent Design</h4>
                      <p>
                        It has survived not only five centui but the leap into
                        electronic typesetting remain essentially unchanged.
                      </p>
                      <a href="servic-details.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 col-lg-4">
                  <div className="service-wrap">
                    <div className="service-img">
                      <img src="assets/images/service/6.jpg" alt />
                    </div>
                    <div className="service-content">
                      <h4>Industrial design</h4>
                      <p>
                        It has survived not only five centui but the leap into
                        electronic typesetting remain essentially unchanged.
                      </p>
                      <a href="servic-details.html">Read More</a>
                    </div>
                  </div>
                </div>
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
                      className="active"
                      data-filter="*"
                      onClick={this.all}
                    >
                      全部
                    </button>
                    <button
                      data-filter=".cat1"
                      onClick={() => this.sSearch('小客車')}
                    >
                      小客車
                    </button>
                    <button
                      data-filter=".cat2"
                      onClick={() => this.bSearch('休旅車')}
                    >
                      休旅車
                    </button>
                    <button data-filter=".cat3">xxxx</button>
                    {/* <button data-filter=".cat4">Industrial</button> */}
                  </div>
                </div>
              </div>
              <div className="row grid">
                {perPageRender.map(item => (
                  <div className="col-lg-3 col-sm-6 col-12 project cat2 cat3">
                    <Link
                      key={item.pNo}
                      to={'/productMain/' + item.pNo}
                      product={this.props.product}
                    >
                      <div className="project-wrap">
                        <img
                          src="http://localhost:3000/images/car-1376190.jpg"
                          alt=""
                        />
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
                  </div>
                ))}
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
                    style={pageStyle}
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
      </>
    )
  }
}

export default Radium(ProductList)
