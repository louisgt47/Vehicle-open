import React, { Component } from 'react'
import './container.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
export default class index extends Component {
  constructor() {
    super()
    this.state = {
      orderNo: [],
      memberOrderListing: [],
      memberOrderListed: [],
      inputkey: '',
      searchList: [],
    }
  }
  async componentDidMount() {
    this.getCollection1()
    this.getCollection2()
    // this.searchList()
  }
  getCollection1 = async _ => {
    try {
      let mNo = 1
      const response = await fetch(
        `http://localhost:4000/memberOrdering?mNo=${mNo}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      console.log('jsonObject', jsonObject.data)
      await this.setState({
        memberOrderListing: jsonObject.data,
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
  getCollection2 = async _ => {
    try {
      let mNo = 1
      const response = await fetch(
        `http://localhost:4000/memberOrdered?mNo=${mNo}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      console.log('jsonObject', jsonObject.data)
      await this.setState({
        memberOrderListed: jsonObject.data,
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
  inputKeySetState = event => {
    this.setState({ inputkey: event.target.value }, this.searchList())
  }
  searchList = _ => {
    var searchData = this.state.inputkey
    console.log(searchData)
    fetch(`http://localhost:4000/searchList2?inputkey=${searchData}&mNo=1`)
      .then(response => response.json())
      .then(response => this.setState({ searchList: response.data }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }

  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.value })
  }

  // renderProduct = ({ pNo, pBrand }) => <div key={pNo}>{pBrand}</div>
  render() {
    // const { commodity } = this.state.memberCollectionList
    // let data = commodity
    // console.log(this.state.memberCollectionList)
    const listContainer = {
      maxWidth: '1350px',
      margin: '0 auto',
      /* height: 40px; */
    }
    const order_picture = {
      maxHeight: '50px',
    }
    // console.log(this.state.searchList)
    let listData = this.state.memberOrderListing

    let listData2 = this.state.memberOrderListed

    console.log(listData)
    return (
      <div className="con-set1">
        <div style={listContainer}>
          <div className="set-text1">
            <h2 className="set-text1-1">收藏清單</h2>
            <br />
            {/* <h4 className="">List</h4> */}
            <div className="set-input mt-3">
              <div className="position-r">
                <img className="con-img" src={require('./images/d.svg')} />
                <input
                  className="input1"
                  placeholder="資料查詢"
                  type="text"
                  id="inputkey"
                  onKeyPress={this.inputKeySetState}
                />
              </div>
            </div>
          </div>

          <table class="table mt-5">
            <thead>
              <tr>
                <th scope="col">進行中訂單</th>
                <th scope="col">訂單編號</th>
                <th scope="col">車輛名稱</th>
                <th scope="col">租車日期</th>
                <th scope="col">還車日期</th>

                <th scope="col">總金額</th>
                <th scope="col">車商</th>
                <th scope="col">商品圖</th>
              </tr>
            </thead>
            <tbody>
              {listData.map(item => (
                <tr>
                  <th scope="row" />
                  <td>{item.orderNo}</td>
                  <td>{item.pBrand}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.total}</td>
                  <td>{item.shopName}</td>
                  <td>
                    <div style={order_picture}>1</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table class="table mt-5">
            <thead>
              <tr>
                <th scope="col">歷史訂單</th>
                <th scope="col">訂單編號</th>
                <th scope="col">車輛名稱</th>
                <th scope="col">租車日期</th>
                <th scope="col">還車日期</th>

                <th scope="col">總金額</th>
                <th scope="col">車商</th>
                <th scope="col">商品圖</th>
              </tr>
            </thead>
            <tbody>
              {listData2.map(item => (
                <tr>
                  <th scope="row">
                    <a className="buttonToProduct">給予評價</a>
                  </th>
                  <td>{item.orderNo}</td>
                  <td>{item.pBrand}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.total}</td>
                  <td>{item.shopName}</td>
                  <td>
                    <div style={order_picture}>1</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
