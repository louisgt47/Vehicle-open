import React from 'react'
import Nav from '../basic/NavMember'
import Footer from '../basic/Footer'
import ShopListTopBg from '../../component/ShopListTopBg'
import ShopListCard from '../../component/ShopListCard'
import ShopListCardItemBar from '../../component/ShopListCardItemBar'
import ShopListCardItem from '../../component/ShopListCardItem'
import '../../css/ShopListBg.css'
import NavMember from '../basic/NavMember'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Shop_list extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ShopListEditOn: '',
      commodity: [],
      pNo: '',
      pRent: [],
      pModel: [],
      pBrand: [],
      pImg: [],
      shopName: [],
      Name: '',
    }
  }
  GetpNo = e => {
    console.log('key', e)
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/islogin', {
      credentials: 'include',
      method: 'GET',
    })
    const jsonObject = await response.json()
    await this.setState({ Name: jsonObject.Name })

    try {
      const response = await fetch(
        `http://localhost:4000/commodity1?shopName=${this.state.Name}`,
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
          pImg: jsonObject.data.map(({ pImg }) => pImg),
          // pRent: jsonObject.data.map(({ pRent }) => pRent),
          // pBrand: jsonObject.data.map(({ pBrand }) => pBrand),
          // pModel: jsonObject.data.map(({ pModel }) => pModel),
          // pNo: '',
        },
        () => console.log(this.state.commodity)
      )
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  ShopListEdit = e => this.setState({ ShopListEditOn: e })
  render() {
    const { commodity } = this.state
    // let data = commodity
    let thePNo = this.state.commodity.pNo

    return (
      <>
        <NavMember />
        <ShopListTopBg ShopListEditOn={this.state.ShopListEditOn} />
        <div className="ShopListBg">
          <ShopListCard ShopListEdit={this.ShopListEdit} />
          <ShopListCardItemBar />
          <div className="d-flex card-car justify-content-around">
            {this.state.commodity.map(item => (
              <ShopListCardItem
                key={item.pNo}
                commodity={item.commodity}
                GetpNo={this.GetpNo}
                pNo={item.pNo}
                pBrand={item.pBrand}
                pModel={item.pModel}
                pRent={item.pRent}
                ShopListEditOn={this.state.ShopListEditOn}
                pImg={item.pImg}
                shopName={item.shopName}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Shop_list
