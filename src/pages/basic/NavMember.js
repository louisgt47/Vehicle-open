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

class NavMember extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Account: '',
      No: '',
      Loginman: '',
      IsLogined: '',
      Name: '',
      Gender: '',
      Pwd: '',
      Phone: '',
      Email: '',
      Address: '',
      Birthday: '',
      Id: '',
      Img: '',
      Owner: '',
      Agent: '',
      AddressUrl: '',
      Info: '',
      CheckPwd: '',
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:4000/islogin', {
      credentials: 'include',
      method: 'GET',
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        this.setState({ Account: obj.Account })
        this.setState({ No: obj.No })
        this.setState({ Loginman: obj.Loginman })
        this.setState({ IsLogined: obj.IsLogined })
        this.setState({ Name: obj.Name })
        this.setState({ Gender: obj.Gender })
        this.setState({ Pwd: obj.Pwd })
        this.setState({ Phone: obj.Phone })
        this.setState({ Email: obj.Email })
        this.setState({ Address: obj.Address })
        this.setState({ Birthday: obj.Birthday })
        this.setState({ Id: obj.Id })
        this.setState({ Owner: obj.Owner })
        this.setState({ Agent: obj.Agent })
        this.setState({ AddressUrl: obj.AddressUrl })
        this.setState({ Info: obj.Info })
        this.setState({ CheckPwd: obj.Pwd })
        this.setState({ Img: obj.Img })
      })
  }
  componentDidCatch = () => {
    $('.nav-item').click(function() {
      $(this)
        .siblings()
        .toggleClass('active')
    })
  }
  logout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'GET',
    }).then(res => res.json())
    window.location = 'http://localhost:3000/IndexPage'
  }
  render() {
    const navFix = {
      position: 'fixed',
      width: '100%',
    }
    const navCenter = {
      margin: '0 auto',
    }
    if ((this.state.IsLogined = false)) {
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
                  <Link className="nav-item nav-link " to="Indexpage">
                    首頁 <span className="sr-only">(current)</span>
                  </Link>
                  <Link className="nav-item nav-link" to="uploadss">
                    會員專區
                  </Link>
                  <Link className="nav-item nav-link" to={'/productList'}>
                    開始租車
                  </Link>
                  <Link className="nav-item nav-link" to={'/agentAbout'}>
                    尋找代駕
                  </Link>
                  <Link className="nav-item nav-link" href="#">
                    關於我們
                  </Link>
                  <Link className="nav-item nav-link" href="Login">
                    註冊/登入
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    }
    if ((this.state.IsLogined = true)) {
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
                  <Link className="nav-item nav-link " to="/Indexpage">
                    首頁 <span className="sr-only">(current)</span>
                  </Link>
                  <Link className="nav-item nav-link" to="/uploadss">
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
                  <div class="loginname">HI~{this.state.Name}</div>
                </div>
                <div className="logoutbuton" onClick={this.logout}>
                  登出
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }
}
export default NavMember
