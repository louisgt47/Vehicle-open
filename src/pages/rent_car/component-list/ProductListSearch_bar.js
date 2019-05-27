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

//需要state紀錄各條件

// 搜尋:重抓資料庫,SELECT * FROM Store_Information WHERE (* LIKE 'inputkey') AND (篩選條件1 LIKE '%selectkey1%') ifAND1 (篩選條件2 LIKE '%selectkey2%') ifAND2 (篩選條件3 LIKE '%selectkey3%');
// const ifAND0(inputkey後面的OR存在與否) = (篩選條件1 && 篩選條件2 && 篩選條件3) ? '' : AND
// const searchkey1 = 篩選條件1 LIKE '%selectkey1%'
// const ifAND1(篩選條件1後面的OR存在與否) = (篩選條件2 && 篩選條件3) ? '' : AND
// const searchkey2 = 篩選條件2 LIKE '%selectkey2%'
// const ifAND2(篩選條件2後面的OR存在與否) = 篩選條件3  ? '' : AND
// const searchkey3 = 篩選條件3 LIKE '%selectkey3%'

//最終導向(link to)SearchList.js(傳入搜尋出的商品編號)

class ProductListSearch_bar extends React.Component {
  constructor() {
    super()
    this.state = {
      inputkey: '',
      searchkey1: 0,
      searchkey2: 0,
      searchkey3: 0,
      searchkey4: 0,
    }
  }
  inputKeySetState = event => {
    this.setState({ inputkey: event.target.value })
  }
  searchKey1SetState = event => {
    this.setState({ searchkey1: event.target.value })
  }
  searchKey2SetState = event => {
    this.setState({ searchkey2: event.target.value })
  }
  searchKey3SetState = event => {
    this.setState({ searchkey3: event.target.value })
  }
  searchKey4SetState = event => {
    this.setState({ searchkey4: event.target.value })
  }
  render() {
    const selectSize = {
      width: '215px',
    }
    const center = {
      textAlign: 'center',
      textAlignLast: 'center',
    }
    const inputSize = {
      width: '975px',
      margin: '0 auto',
    }
    //傳值
    let searchData = {
      inputkey: this.state.inputkey,
      searchkey1: this.state.searchkey1,
      searchkey2: this.state.searchkey2,
      searchkey3: this.state.searchkey3,
      searchkey4: this.state.searchkey4,
    }
    var path = {
      pathname: '/productSearchList',
      state: searchData,
    }
    return (
      <div className="productList-search_bar">
        <div className="productList-container">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              id="inputkey"
              aria-describedby="emailHelp"
              placeholder="關鍵字搜尋"
              style={inputSize}
              onChange={this.inputKeySetState}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div style={selectSize}>
              <select
                className="form-control"
                id="searchkey1"
                style={center}
                onChange={this.searchKey1SetState}
              >
                <option style={center} value={0}>
                  地點
                </option>
                <option style={center}>台北</option>
                <option style={center}>新竹</option>
                <option style={center}>台中</option>
                <option style={center}>高雄</option>
              </select>
            </div>
            <div style={selectSize}>
              <select
                className="form-control"
                id="searchkey1"
                style={center}
                onChange={this.searchKey2SetState}
              >
                <option style={center} value={0}>
                  廠牌
                </option>
                <option style={center}>TOYOTA</option>
                <option style={center}>3</option>
                <option style={center}>4</option>
                <option style={center}>5</option>
              </select>
            </div>
            <div style={selectSize}>
              <select
                className="form-control"
                id="searchkey1"
                style={center}
                onChange={this.searchKey3SetState}
              >
                <option style={center} value={0}>
                  價位
                </option>
                <option style={center}>'1,000以下'</option>
                <option style={center}>'1000～2000'</option>
                <option style={center}>4</option>
                <option style={center}>5</option>
              </select>
            </div>
            <div style={selectSize}>
              <select
                className="form-control"
                id="searchkey1"
                style={center}
                onChange={this.searchKey4SetState}
              >
                <option style={center} value={0}>
                  車齡
                </option>
                <option style={center}>'一年內'</option>
                <option style={center}>3</option>
                <option style={center}>4</option>
                <option style={center}>5</option>
              </select>
            </div>
          </div>
          <div>
            <Link className="d-flex justify-content-center" to={path}>
              搜尋
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductListSearch_bar
