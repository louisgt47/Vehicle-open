import React, { Component } from 'react'
import './container.css'
// import '../../../rent_car/css/search.css'
import $ from 'jquery'
// import './modal/css/style.css'
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
      shopNo: [],
      ratedList: [],
      rate: '',
      rateText: '',
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
      this.getCollection1()
      this.getCollection2()
      this.rated()
    }, 200)

    // this.searchList()
    $('.sel').each(function() {
      $(this)
        .children('select')
        .css('display', 'none')

      var $current = $(this)

      $(this)
        .find('option')
        .each(function(i) {
          if (i == 0) {
            $current.prepend(
              $('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box'),
              })
            )

            var placeholder = $(this).text()
            $current.prepend(
              $('<span>', {
                class: $current
                  .attr('class')
                  .replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder,
              })
            )

            return
          }

          $current.children('div').append(
            $('<span>', {
              class: $current
                .attr('class')
                .replace(/sel/g, 'sel__box__options'),
              text: $(this).text(),
            })
          )
        })
    })

    // Toggling the `.active` state on the `.sel`.
    $('.sel').click(function() {
      $(this).toggleClass('active')
    })

    // Toggling the `.selected` state on the options.
    $('.sel__box__options').click(function() {
      var txt = $(this).text()
      var index = $(this).index()

      $(this)
        .siblings('.sel__box__options')
        .removeClass('selected')
      $(this).addClass('selected')

      var $currentSel = $(this).closest('.sel')
      $currentSel.children('.sel__placeholder').text(txt)
      $currentSel.children('select').prop('selectedIndex', index + 1)
    })
  }
  rated = _ => {
    let mNo = 1
    fetch(`http://localhost:4000/rated?mNo=${mNo}`)
      .then(response => response.json())
      .then(response => this.setState({ ratedList: response.data }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
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
    fetch(
      `http://localhost:4000/searchList2?inputkey=${searchData}&mNo=${
        this.state.mNo
      }`
    )
      .then(response => response.json())
      .then(response => this.setState({ searchList: response.data }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }

  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.value })
  }
  shopNo = shopName => {
    console.log(shopName)
    fetch(`http://localhost:4000/shopNo?shopName=${shopName}`)
      .then(response => response.json())
      .then(response => this.setState({ shopNo: response.data.shopNo }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }
  rate = (value, shopName) => {
    this.setState({ rate: value })
    fetch(`http://localhost:4000/shopNo?shopName=${shopName}`)
      .then(response => response.json())
      .then(response => this.setState({ shopNo: response.data.shopNo }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }
  rateText = event => {
    this.setState({ rateText: event.target.value })
  }
  sent = (shopName, orderNo) => {
    fetch(
      `http://localhost:4000/insertRate?shopNo=${
        this.state.shopNo
      }&shopName=${shopName}&mNo=${this.state.mNo}&orderNo=${orderNo}&rate=${
        this.state.rate
      }&rateText=${this.state.rateText}`
    )
      .then(response => response.json())
      .then(response => this.setState({ searchList: response.data }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
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
    const thLength = {
      maxWidth: '184px',
    }

    const green = {
      backgroundColor: '#6eb7b0',
      border: '#6eb7b0',
    }

    // console.log(this.state.searchList)
    let listData = this.state.memberOrderListing

    let listData2 = this.state.memberOrderListed
    const cursor = {
      cursor: 'pointer',
    }
    let rattedNo = []

    for (let i = 0; i < this.state.ratedList.length; i++) {
      rattedNo[i] = this.state.ratedList[i].orderNo
    }
    console.log(rattedNo)
    for (let i = 0; i < rattedNo.length; i++) {
      rattedNo[i] = Number(rattedNo[i])
    }
    console.log(listData)
    const top = {
      paddingTop: '250px',
      backgroundColor: '#f8f9fa',
    }
    const color = {
      backgroundColor: '#f8f9fa',
    }
    return (
      <div className="row">
        <div className="col-2" style={top}>
          <div
            className="nav flex-column nav-pills px-5"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
            style={color}
          >
            <h3 className="mb-3">會員專區</h3>
            <a
              className="nav-link  my-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              個人資料編輯
            </a>

            <Link
              to={'/orderList'}
              className="nav-link  my-2 active"
              id="v-pills-profile-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              租車訂單查詢
            </Link>

            <a
              className="nav-link my-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              代駕訂單查詢
            </a>
            <a
              className="nav-link my-2"
              id="v-pills-settings-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              信用卡設定
            </a>
            <a
              className="nav-link my-2 "
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              // onClick={console.log(11111)}
            >
              <Link to={'/memberList'}>收藏清單</Link>
            </a>
            <a
              className="nav-link my-2 "
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              優惠活動
            </a>
          </div>
        </div>
        <div className="con-set1 col-10">
          <div style={listContainer}>
            <div className="set-text1">
              <h2 className="set-text1-1">訂單查詢</h2>
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
                  {/* <th scope="col">商品圖</th> */}
                </tr>
              </thead>
              <tbody>
                {listData.map(item => (
                  <tr>
                    <th scope="row" style={thLength}>
                      <div className="buttonEndRatting1" />
                    </th>
                    <td>{item.orderNo}</td>
                    <td>{item.pBrand}</td>
                    <td>{item.startDate.slice(0, 10)}</td>
                    <td>{item.endDate.slice(0, 10)}</td>
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
                  <th scope="col" style={thLength}>
                    歷史訂單
                  </th>
                  <th scope="col">訂單編號</th>
                  <th scope="col">車輛名稱</th>
                  <th scope="col">租車日期</th>
                  <th scope="col">還車日期</th>

                  <th scope="col">總金額</th>
                  <th scope="col">車商</th>
                  {/* <th scope="col">商品圖</th> */}
                </tr>
              </thead>
              <tbody>
                {listData2.map(item =>
                  rattedNo.includes(item.orderNo) ? (
                    <tr>
                      <th scope="row" style={thLength}>
                        <div
                          className="buttonEndRatting"
                          // class="btn btn-primary"
                          // style={cursor}
                        >
                          已評價
                        </div>
                      </th>
                      <td>{item.orderNo}</td>
                      <td>{item.pBrand}</td>
                      <td>{item.startDate.slice(0, 10)}</td>
                      <td>{item.endDate.slice(0, 10)}</td>
                      <td>{item.total}</td>
                      <td>{item.shopName}</td>
                      {/* <td>
                        <div style={order_picture}>1</div>
                      </td> */}
                    </tr>
                  ) : (
                    <tr>
                      <th scope="row" style={thLength}>
                        <div
                          className="buttonToProduct"
                          // class="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          data-whatever="@mdo"
                          style={cursor}
                          onClick={() => this.shopNo(item.shopName)}
                        >
                          給予評價
                        </div>
                        <div id="main" />
                        {/* 彈出 */}

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  New message
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="form-group">
                                    <label
                                      htmlFor="recipient-name"
                                      className="col-form-label"
                                    >
                                      評分:
                                    </label>
                                    <div
                                      class="btn-toolbar"
                                      role="toolbar"
                                      aria-label="Toolbar with button groups"
                                    >
                                      <div
                                        class="btn-group mr-2"
                                        role="group"
                                        aria-label="First group"
                                      >
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          style={green}
                                          onClick={() =>
                                            this.rate(1, item.shopName)
                                          }
                                        >
                                          1
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          style={green}
                                          onClick={() =>
                                            this.rate(2, item.shopName)
                                          }
                                        >
                                          2
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          style={green}
                                          onClick={() =>
                                            this.rate(3, item.shopName)
                                          }
                                        >
                                          3
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          style={green}
                                          onClick={() =>
                                            this.rate(4, item.shopName)
                                          }
                                        >
                                          4
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          style={green}
                                          onClick={() =>
                                            this.rate(5, item.shopName)
                                          }
                                        >
                                          5
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label
                                      htmlFor="message-text"
                                      className="col-form-label"
                                    >
                                      留言:
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id="message-text"
                                      onChange={this.rateText}
                                    />
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  關閉
                                </button>
                                <a
                                  className="btn sent"
                                  onClick={() =>
                                    this.sent(item.shopName, item.orderNo)
                                  }
                                  href=""
                                >
                                  確認送出
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>{item.orderNo}</td>
                      <td>{item.pBrand}</td>
                      <td>{item.startDate.slice(0, 10)}</td>
                      <td>{item.endDate.slice(0, 10)}</td>
                      <td>{item.total}</td>
                      <td>{item.shopName}</td>
                      {/* <td>
                        <div style={order_picture}>1</div>
                      </td> */}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
