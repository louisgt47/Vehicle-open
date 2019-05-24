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
  //中間單頁創建函式
  creatPage = (totalPage, page) => {
    let i
    for (i = 1; i <= totalPage; i++) {
      if (i == page)
        return (
          <li className="page-item active">
            <a className="page-link" href="#">
              {i}
            </a>
          </li>
        )
      else
        return (
          <li className="page-item ">
            <a className="page-link" href="#">
              {i}
            </a>
          </li>
        )
    }
  }
  render() {
    console.log(this.props.product)
    //每頁總數
    const perPage = 9
    //總筆數
    const totalProducts = this.props.product.length
    //總頁數
    const totalPage = Math.ceil(totalProducts / perPage)
    //現在頁數
    const page = 1

    //跳頁函式
    function myFunctionB() {
      window.location.href =
        '?page=<?= $page-1 ?>' + '&key=<?= $key ?>&searchKey=<?= $searchKey?>'
      console.log(window.location.href)
    }

    function myFunction() {
      window.location.href =
        '?page=<?= $i ?>' + '&key=<?= $key ?>&searchKey=<?= $searchKey?>'
      console.log(window.location.href)
    }

    function myFunctionC() {
      window.location.href =
        '?page=<?= $page+1 ?>' + '&key=<?= $key ?>&searchKey=<?= $searchKey?>'
      console.log(window.location.href)
    }

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
            className="list_item d-flex flex-wrap"
            style={{ marginTop: '100px' }}
          >
            {this.props.product.map(item => (
              <div className="card my-5 mx-2" style={{ width: '520px' }}>
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
            <li className="page-item ifDisable ifMyFunctionB">
              <a className="page-link" id="p2" href="#">
                &lt;
              </a>
            </li>
            {/* 中間單頁 */}
            {this.creatPage(totalPage, page)}
            {/* 下一頁 */}
            <li className="page-item ifDisable ifMyFunctionC">
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
