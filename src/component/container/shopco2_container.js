import React, { Component } from 'react'
import './shopco2_containercss.css'
import $ from 'jquery'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      commodity: [],
      commodity2: [],
      commodity3: [],
      searchText: '',
      singleNo: '',
      singleOrder: [],
      Name: '',
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
        this.setState({ Name: obj.Name }, () => {
          this.getOrdering()
          this.getOrdered()
        })
      })

    // await this.getSingleOrder()
    // jq
    // $('#exampleModalCenter').on('show.bs.modal', function(event) {
    //   var button = $(event.relatedTarget) // Button that triggered the modal
    //   var recipient = button.data('whatever') // Extract info from data-* attributes
    //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //   var modal = $(this)
    //   modal.find('.modal-title').text('New message to ' + recipient)
    //   modal.find('.modal-body input').val(recipient)
    // })
  }

  getOrderIndex = index => {
    // console.log(index)
    this.setState({ singleNo: index }, () => this.getSingleOrder())
  }
  getSingleOrder = () => {
    console.log(this.state.commodity[this.state.singleNo])
    this.setState({ singleOrder: this.state.commodity[this.state.singleNo] })
  }
  getOrdering = async _ => {
    console.log(this.state.Name)
    try {
      const response = await fetch(
        `http://localhost:4000/OrderListing?shopName=${this.state.Name}`,
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
          commodity: jsonObject.data,
        },
        () => console.log(this.state.commodity)
      )
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
  getOrdered = async _ => {
    try {
      const response = await fetch(
        `http://localhost:4000/OrderListed?shopName=${this.state.Name}`,
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
          commodity2: jsonObject.data,
        },
        () => console.log(this.state.commodity)
      )
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
  getshopratting = async orderNo => {
    try {
      console.log(orderNo)
      const response = await fetch(
        `http://localhost:4000/israted?orderNo=${orderNo}`,
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
          commodity3: jsonObject.data,
        },
        () => console.log(this.state.commodity3)
      )
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  finish = async () => {
    try {
      console.log(this.state.singleOrder)
      const response = await fetch(
        `http://localhost:4000/OrderFinish?orderNo=${
          this.state.singleOrder.orderNo
        }`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      // const jsonObject = await response.json()
    } catch (e) {
      console.log(e)
    } finally {
      this.getOrdering()
      this.getOrdered()
    }
  }
  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.value })
  }

  render() {
    //搜尋先過濾

    //[{},{}]
    let data = this.state.commodity
    console.log(this.state.commodity)

    if (this.state.searchText && this.state.searchText.trim() !== '') {
      data = this.state.commodity.filter(
        item =>
          // console.log(item.Vehicle_name)
          item.shopName.includes(this.state.searchText)

        // console.log(data)

        // item.agentStartLoc.includes(this.state.searchText) ||
        // item.agentEndLoc.includes(this.state.searchText) ||
        // toString(item.mNo).includes(this.state.searchText)
      )
      // console.log(data)
    }

    const { commodity } = this.state

    const { commodity2 } = this.state

    let data2 = this.state.commodity2
    console.log(data2)
    if (this.state.searchText && this.state.searchText.trim() !== '') {
      data = this.state.commodity.filter(
        item =>
          // console.log(item.Vehicle_name)
          item.shopName.includes(this.state.searchText)
        // console.log(data)

        // item.agentStartLoc.includes(this.state.searchText) ||
        // item.agentEndLoc.includes(this.state.searchText) ||
        // toString(item.mNo).includes(this.state.searchText)
      )
      // console.log(data)
    }
    const top = {
      paddingTop: '195px',
    }
    console.log(data)
    return (
      <div className="orc2-set1" style={top}>
        <div className="orcon2-set1">
          <p className="orcon2-text1-1"> 訂單紀錄</p>
          <div className="orcon-input">
            <img className="orcon2-img" src={require('./images/d.svg')} />
            <input
              className="orinput1"
              placeholder="資料查詢"
              value={this.state.searchText}
              // onkeydown="if(event.keyCode==13){return false;}"
              onChange={this.handleSearchTextChange}
            />
          </div>
        </div>
        <div className="orcon2-set1-2">
          <p className="orcon2-text1-2">List</p>
        </div>
        <div className="bbb table-borderless">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">進行中訂單</th>
                <th scope="col">訂單編號</th>
                <th scope="col">車輛名稱</th>
                <th scope="col">租車日期</th>
                <th scope="col">還車日期</th>
                <th scope="col">總金額</th>
                <th scope="col">租借會員</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.orderNo}>
                  <th>
                    <button
                      type="button"
                      class="btn btn-primary "
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => {
                        console.log(item.orderNo)
                        this.getOrderIndex(index)
                      }}
                    >
                      訂單完成
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered "
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              詳細資料
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            訂單確認後將移至評價階段．
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-dismiss="modal"
                              onClick={
                                // console.log(order_no)
                                this.finish
                              }
                            >
                              確認
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>

                  <th>{item.orderNo}</th>
                  <td>{item.pBrand}</td>
                  <td>{item.startDate.slice(0, 10)}</td>
                  <td>{item.endDate.slice(0, 10)}</td>
                  <td>{item.total}</td>
                  <td>{item.mName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div class="orbor1-1" />
        </div>
        <div className="aaa">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">歷史訂單</th>
                <th scope="col">訂單編號</th>
                <th scope="col">車輛名稱</th>
                <th scope="col">租車日期</th>
                <th scope="col">還車日期</th>
                <th scope="col">總金額</th>
                <th scope="col">租借會員</th>
              </tr>
            </thead>
            <tbody>
              {data2.map(item => (
                <tr key={item.orderNo}>
                  <th>
                    <button
                      type="button"
                      class="btn btn-primary "
                      data-toggle="modal"
                      data-target="#exampleModalCenter2"
                      onClick={() => {
                        console.log(item)
                        this.getshopratting(item.orderNo)
                      }}
                    >
                      確認評價
                    </button>
                    {this.state.commodity3.map(item => (
                      <div
                        class="modal fade "
                        id="exampleModalCenter2"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalLongTitle"
                              >
                                評價狀況
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                  <p className="orlitext1-2">訂單編號：</p>
                                  <li class="orlitext1-1">{item.orderNo}</li>
                                </li>
                                <li class="list-group-item">
                                  <p className="orlitext1-2">會員編號：</p>

                                  <li class="orlitext1-1">{item.mNo}</li>
                                </li>
                                <li class="list-group-item">
                                  <p className="orlitext1-2">評價分數：</p>

                                  <li class="orlitext1-1">{item.rate}</li>
                                </li>
                                <li class="list-group-item">
                                  <p className="orlitext1-2">會員評論：</p>

                                  <li class="orlitext1-1">{item.rateText}</li>
                                </li>
                              </ul>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                確認
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </th>
                  <th>{item.orderNo}</th>
                  <td>{item.pBrand}</td>
                  <td>{item.startDate.slice(0, 10)}</td>
                  <td>{item.endDate.slice(0, 10)}</td>
                  <td>{item.total}</td>
                  <td>{item.mName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
