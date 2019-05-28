import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

class productSearchList extends React.Component {
  constructor() {
    super()
    this.state = {
      searchList: [],
    }
  }
  componentDidMount() {
    // let key1 = !(searchkey1 = 0) ? searchkey1 : ''
    // let key2 = !(searchkey2 = 0) ? searchkey2 : ''
    // let key3 = !(searchkey3 = 0) ? searchkey3 : ''
    // let key4 = !(searchkey4 = 0) ? searchkey4 : ''
    // let ifAND0 = key1 && key2 && key3 && key4 ? 'AND' : ''
    // let ifAND1 = key2 && key3 && key4 ? 'AND' : ''
    // let ifAND2 = key3 && key4 ? 'AND' : ''
    // let ifAND3 = key4 ? 'AND' : ''
    this.searchList()
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
  render() {
    const heart = {
      color: '#6eb7b0',
      fontSize: '24px',
    }
    const padding0 = { padding: '0' }
    return (
      <>
        <div
          className="list_item d-flex flex-wrap justify-content-center"
          style={{ marginTop: '100px' }}
        >
          {this.state.searchList.map(item => (
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
                <div
                  style={padding0}
                  className="card-body py-2 d-flex justify-content-between"
                >
                  <div className="card-text">
                    <h5>{item.pBrand}</h5>
                    {item.pSit}人座/{item.pType}
                  </div>
                  <a href className="mx-2 d-flex">
                    <div
                      className="t-center  px-2 d-flex align-items-center"
                      onClick={() => this.insertItem(item.pNo)}
                    >
                      <p className="m-0 ">
                        <i className="far fa-heart" style={heart} />
                      </p>
                    </div>
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default productSearchList
