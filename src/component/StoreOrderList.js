import React, { Component } from 'react'
import Header from '../pages/basic/NavMember'

import Container from './container/shopco2_container'
import Footer from '../pages/basic/Footer'

export default class OrderList extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    )
  }
}
