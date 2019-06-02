import React, { Component } from 'react'
import $ from 'jquery'
import './NavMember.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

class NavMember extends Component {
  componentDidCatch = () => {
    $('.nav-item').click(function() {
      $(this)
        .siblings()
        .toggleClass('active')
    })
  }
  render() {
    const navFix = {
      position: 'fixed',
      width: '100%',
    }
    const navCenter = {
      margin: '0 auto',
    }
    return (
      <div className="navSize">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light "
          style={navFix}
        >
          <div className="container_nav row">
            <a className="navbar-brand" href="#">
              <img
                src="http://localhost:3000/images/vehicleLogo/logo.png"
                alt=""
                className="navLogo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse row ml-3"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link className="nav-item nav-link " href="#">
                  首頁 <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-item nav-link" href="#">
                  會員專區
                </Link>
                <Link className="nav-item nav-link" to={'/productList'}>
                  開始租車
                </Link>
                <Link className="nav-item nav-link" href="#">
                  尋找代駕
                </Link>
                <Link className="nav-item nav-link" href="#">
                  關於我們
                </Link>
                <Link className="nav-item nav-link" href="#">
                  註冊/登入
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default NavMember
