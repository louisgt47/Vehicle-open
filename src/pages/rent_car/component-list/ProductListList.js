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
  constructor() {
    super()
    this.state = {
      thisPage: '',
    }
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
  //加入清單
  insertItem = pNo => {
    fetch(`http://localhost:4000/insertItem?mNo=1&pNo=${pNo}`)
      .then(response => response.json())
      .then(response => this.setState({ hotList_car: response.data }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }
  render() {
    //css
    const heart = {
      color: '#6eb7b0',
      fontSize: '32px',
    }
    const heartposition = {
      right: '24px',
      bottom: '36px',
    }
    const padding0 = { padding: '0' }
    //取得網址
    // console.log(window.location.search)
    // var getUrlString = window.location.search
    // console.log('getUrlString:' + getUrlString)

    console.log(this.props.product)
    //每頁總數
    const perPage = 9
    //總筆數
    const totalProducts = this.props.product.length
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

    var perPageRender = this.props.product.filter(function(value, index) {
      return index >= (page - 1) * perPage && index < page * perPage
    })
    console.log(perPageRender)

    //中間單頁創建函式
    let PageArray = []

    for (let i = 0; i < totalPage; i++) {
      PageArray[i] = i + 1
    }
    console.log(PageArray)

    return (
      <div className="productList-list">
        <div className="productList-container ">
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
            className="list_item d-flex flex-wrap justify-content-center"
            style={{ marginTop: '100px' }}
          >
            {perPageRender.map(item => (
              <div
                className="card my-5 mx-4 col-3 position_r p-0"
                style={{ width: '520px' }}
              >
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
                      src="http://localhost:3000/images/car-1376190.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div
                    style={padding0}
                    className="card-body p-4 d-flex justify-content-start"
                  >
                    <div className="card-text">
                      <h5>{item.pBrand}</h5>
                      {item.pSit}人座/{item.pType}
                    </div>
                  </div>
                </Link>
                <div
                  className="t-center  px-2 d-flex align-items-center position_a"
                  style={heartposition}
                  onClick={() => this.insertItem(item.pNo)}
                >
                  <p className="m-0 ">
                    <i className="far fa-heart" style={heart} />
                  </p>
                </div>
              </div>
            ))}
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
                  className="page-item active"
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
                onClick={page >= totalPage ? '' : () => this.myFunctionC(page)}
              >
                <a className="page-link" id="p2">
                  &gt;
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ProductListList
