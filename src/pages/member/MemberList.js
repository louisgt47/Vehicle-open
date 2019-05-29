import React, { Component } from 'react'
import Header from './common/OrderList/Header/index'

import Container from './common/OrderList/container/index'
import Footer from './common/OrderList/Footer/index'
import './App.css'
export default class App extends Component {
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
