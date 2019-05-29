import React, { Component } from 'react'
import './container.css'
export default class index extends Component {
  constructor() {
    super()
    this.state = {
      pNo: [],
      memberCollectionList: [],
    }
  }
  async componentDidMount() {
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
  collection = async _ => {
    var totalPNo = this.state.pNo.length
    // console.log('this.state.pNo.length:' + totalPNo)
    for (var i = 0; i < totalPNo; i++) {
      var pNo = this.state.pNo[i].pNo
      // console.log(this.state.pNo[i].pNo)
      await fetch(`http://localhost:4000/memberCollectionList?pNo=${pNo}`)
        .then(response => response.json())
        .then(response => {
          console.log(response.data[0])
          let newList = [...this.state.memberCollectionList, response.data[0]]
          this.setState({ memberCollectionList: newList })
        })
        // .then(console.log(this.state.memberCollectionList))
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
    return (
      <div className="con-set1">
        <div style={listContainer}>
          <div className="set-text1">
            <p className="set-text1-1">訂單紀錄</p>
            <div className="set-input">
              <img className="con-img" src={require('./images/d.svg')} />
              <input className="input1" placeholder="資料查詢" />
            </div>
          </div>

          <div className="set-text2">
            <p className="set-text1-2">List</p>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">TOYOTA</th>
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
              {this.state.memberCollectionList.map(item => (
                <tr>
                  <th scope="row">
                    <button type="button" class="btn btn-success">
                      詳細訂單
                    </button>
                  </th>
                  <td>{item.pBrand}</td>
                  <td>{item.rentState}</td>
                  <td>{item.pType}</td>
                  <td>{item.pRent}</td>
                  <td>{item.shopName}</td>
                  <td>台北市</td>
                  <td>暫缺</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
