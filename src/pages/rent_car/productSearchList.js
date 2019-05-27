import React from 'react'

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
    var {
      inputkey,
      searchkey1,
      searchkey2,
      searchkey3,
      searchkey4,
    } = searchData
    fetch(
      `http://localhost:4000/productList/searchList?inputkey=${inputkey}&searchkey1=${searchkey1}&searchkey2=${searchkey2}&searchkey3=${searchkey3}&searchkey4=${searchkey4}`
    )
      .then(response => response.json())
      .then(response => this.setState({ searchList: response.data }))
      // .then(console.log(this.state.hotList_car))
      .catch(err => console.error(err))
  }
  render() {
    return <></>
  }
}

export default productSearchList
