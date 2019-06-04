import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import $ from 'jquery'

import NavMember from '../basic/NavMember'
import NavShop from '../basic/NavShop'
import Footer from '../basic/Footer'
import ProductListSearch_bar from './component-list/ProductListSearch_bar'

class productSearchList extends React.Component {
  constructor() {
    super()
    this.state = {
      searchList: [],
      collection: [],
      thisPage: '',
      mNo: '',
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    fetch('http://localhost:4000/islogin', {
      credentials: 'include',
      method: 'GET',
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        this.setState({ mNo: obj.No })
      })
    // let key1 = !(searchkey1 = 0) ? searchkey1 : ''
    // let key2 = !(searchkey2 = 0) ? searchkey2 : ''
    // let key3 = !(searchkey3 = 0) ? searchkey3 : ''
    // let key4 = !(searchkey4 = 0) ? searchkey4 : ''
    // let ifAND0 = key1 && key2 && key3 && key4 ? 'AND' : ''
    // let ifAND1 = key2 && key3 && key4 ? 'AND' : ''
    // let ifAND2 = key3 && key4 ? 'AND' : ''
    // let ifAND3 = key4 ? 'AND' : ''
    setTimeout(() => {
      this.searchList()
      this.mCollect()
    }, 200)
  }
  searchList = _ => {
    var searchData = this.props.location.state
    console.log(searchData)
    // var {
    //   inputkey,
    //   searchkey1,
    //   searchkey2,
    //   searchkey3,
    //   searchkey4,
    // } = searchData
    fetch(
      `http://localhost:4000/searchList?inputkey=${
        searchData.inputkey
      }&searchkey1=${searchData.searchkey1}&searchkey2=${
        searchData.searchkey2
      }&searchkey3=${searchData.searchkey3}&searchkey4=${searchData.searchkey4}`
    )
      .then(response => response.json())
      .then(response => this.setState({ searchList: response.data }))
      // .then(console.log(this.state.hotList_car))
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
    var totalProducts = this.state.searchList.length

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
    var perPageRender = this.state.searchList.filter(function(value, index) {
      return index >= (page - 1) * perPage && index < page * perPage
    })
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
    const heart = {
      color: '#6eb7b0',
      fontSize: '24px',
    }
    const padding0 = { padding: '0' }
    const font16 = { fontSize: '16px', color: '#aaa' }
    return (
      <>
        <NavMember />
        <div className="project-area">
          <ProductListSearch_bar product={this.state.product} />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="section-title mt-5">
                  <h2>搜尋結果</h2>
                  <h3>
                    The list of all models
                    <span style={font16} className="ml-3">
                      共{totalProducts}筆資料
                    </span>
                  </h3>
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
                      // product={this.props.product}
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

export default productSearchList
