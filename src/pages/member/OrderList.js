import React, { Component } from 'react'
import Header from './common/CollectList/Header/index'

import Container from './common/OrderList/index'
import Footer from './common/CollectList/Footer/index'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-area bg-1" id="sticky-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-9 col-sm-8 col-6">
                <div className="logo">
                  <a href="index.html">
                    <img src="" alt />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 d-none d-lg-block">
                <div className="mainmenu">
                  <ul id="navigation">
                    <li className="active">
                      <a href="javascript:void(0);">首頁</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">關於我</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">會員專區</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">開始租車</a>
                    </li>
                    <li>
                      <a href="">代駕服務</a>
                    </li>
                    <li>
                      <a href="contact.html">註冊/登入</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4">
                <div className="search-wrapper">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" />
                      <ul>
                        <li>
                          <form action="#">
                            <input type="text" placeholder="Search Here..." />
                            <button />
                          </form>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-1 col-sm-1 col-2 d-lg-none d-sm-block">
                <div className="responsive-menu-wrap floatright" />
              </div>
            </div>
          </div>
        </header>
        <Container />
        <Footer />
      </div>
    )
  }
}
