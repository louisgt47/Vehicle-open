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
    this.setState(
      { thisPage: page - 1 },
      () => (window.location.href = `?page=${page - 1}`)
    )
    console.log(window.location.href)
  }

  myFunction(page) {
    // window.location.href = `?page=${page}`
    // console.log(window.location.href)
    console.log(page)
    this.setState(
      { thisPage: page },
      () => (window.location.href = `?page=${page}`)
    )
  }

  myFunctionC(page) {
    // window.location.href = `?page=${page + 1}`
    // console.log(window.location.href)
    this.setState(
      { thisPage: page + 1 },
      () => (window.location.href = `?page=${page + 1}`)
    )
  }
  render() {
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
    console.log(page)

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
            className="list_item d-flex flex-wrap justify-content-center"
            style={{ marginTop: '100px' }}
          >
            {perPageRender.map(item => (
              <div className="card my-5 mx-2 col-3" style={{ width: '520px' }}>
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
          {/* 頁數跳轉 */}
          <ul class="pagination pagination-sm justify-content-center">
            {/* 上一頁 */}
            <li
              className="page-item"
              onClick={page <= 1 ? '' : () => this.myFunctionB(page)}
            >
              <a className="page-link" id="p2" href="#">
                &lt;
              </a>
            </li>
            {/* 中間單頁 */}
            {PageArray.map(item =>
              item === page ? (
                <li
                  className="page-item active"
                  onClick={() => this.myFunction(item)}
                >
                  <a className="page-link" href="#">
                    {item}
                  </a>
                </li>
              ) : (
                <li
                  className="page-item "
                  onClick={() => this.myFunction(item)}
                >
                  <a className="page-link" href="#">
                    {item}
                  </a>
                </li>
              )
            )}
            {/* 下一頁 */}
            <li
              className="page-item"
              onClick={page <= 1 ? '' : () => this.myFunctionB(page)}
            >
              <a className="page-link" id="p2" href="#">
                &gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ProductListList
