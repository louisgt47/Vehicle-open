import React, { Component } from 'react'
import Header from './common/CollectList/Header/index'

import Container from './common/OrderList/index'
import Footer from './common/CollectList/Footer/index'
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
