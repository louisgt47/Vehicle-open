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
      pNo: [],
      memberCollectionList: [],
      inputkey: '',
      searchList: [],
      mNo: '',
    }
  }
  async componentDidMount() {
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
      this.getCollection()
    }, 200)
  }
  getCollection = async _ => {
    try {
      let mNo = 1
      const response = await fetch(
        `http://localhost:4000/memberCollection?mNo=${mNo}`,
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
      await this.setState(
        {
          pNo: jsonObject.data,
        },
        () => this.collection()
      )
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
  itemDelete = pNo => {
    fetch(`http://localhost:4000/deleteItem?mNo=${this.state.mNo}&pNo=${pNo}`)
      .then(response => response.json())
      // .then(response =>
      //   this.setState(
      //     { memberCollectionList: response.data },
      //     console.log(response.data)
      //   )
      // )
      // .then(this.getCollection())
      .catch(err => console.error(err))
  }

  collection = async _ => {
    var totalPNo = this.state.pNo.length
    // console.log('this.state.pNo.length:' + totalPNo)
    for (var i = 0; i < totalPNo; i++) {
      var pNo = this.state.pNo[i].pNo
      console.log(this.state.pNo[i].pNo)
      await fetch(`http://localhost:4000/memberCollectionList?pNo=${pNo}`)
        .then(response => response.json())
        .then(response => {
          console.log(response.data)
          let newList = [...this.state.memberCollectionList, response.data[0]]
          this.setState({ memberCollectionList: newList })
        })
        .then(console.log(this.state.memberCollectionList))
        .catch(err => console.error(err))
    }
    // console.log(this.state.memberCollectionList)
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
    let listData = this.state.inputkey
      ? this.state.searchList
      : this.state.memberCollectionList
    console.log(this.state.pNo)
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
              className="nav-link  my-2"
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
              href="#v-pills-messages"
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
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              信用卡設定
            </a>
            <a
              className="nav-link my-2 active"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              我的收藏
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
                  <th scope="col" />
                  <th scope="col">車款</th>
                  <th scope="col">租借狀態</th>
                  <th scope="col">車種</th>
                  <th scope="col">租金/日</th>

                  <th scope="col">車商</th>
                  <th scope="col">所在地</th>
                  <th scope="col">商品圖</th>
                </tr>
              </thead>
              <tbody>
                {listData.map(item => (
                  <tr>
                    <th scope="row">
                      <Link
                        key={item.pNo}
                        to={'/productMain/' + item.pNo}
                        product={this.props.product}
                      >
                        <a className="buttonToProduct">車輛頁面</a>
                      </Link>
                      <a
                        className="buttonDelete"
                        onClick={() => this.itemDelete(item.pNo)}
                        href=""
                      >
                        移除
                      </a>
                    </th>
                    <td>{item.pBrand}</td>
                    <td>{item.rentState}</td>
                    <td>{item.pType}</td>
                    <td>{item.pRent}</td>
                    <td>{item.shopName}</td>
                    <td>台北市</td>
                    <td>
                      <div style={order_picture}>1</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
