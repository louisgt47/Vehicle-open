import React, { Component } from 'react'
import NavMember from '../basic/NavMember'

import Container from './common/CollectList/container/index'
import Footer from '../basic/Footer'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMember />
        <Container />
        <Footer />
      </div>
    )
  }
}
