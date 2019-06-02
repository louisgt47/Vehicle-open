import { Link } from 'react-router-dom'
import React from 'react'
import './LoginBox.css'
import login1 from './Loginicon/Login1.gif'
import login2 from './Loginicon/Login2.gif'
import login3 from './Loginicon/Login3.gif'
class App extends React.Component {

  render() {
    return (
      <>
<div class="LoginDriverPageback">

            <div class="loginpage">
                <div class="logintop">
                    <div class="logintopc">登入</div>
                    <div class="logintope">Welcome to Vehicle</div>
                </div>
                <div class="loginbottom">
                <div class="loginbottomtext">請選擇登入身分</div>
                <div class="loginbottombutton">
                  <Link to="loginDriver">
                  <div class="loginbottomDriver">
                    <div><img src={login1} width="70px" alt=""/></div>
                    <div class="loginbottomtexticon">代理駕駛</div>
                  </div>
                  </Link>
                  <Link to="loginUser">
                  <div class="loginbottomuser">
                    <div><img src={login2} width="70px"alt=""/></div>
                    <div  class="loginbottomtexticon">一般會員</div>
                  </div>
                  </Link>
                  <Link to="loginStore">
                  <div class="loginbottomstore">
                    <div><img src={login3} width="70px"alt=""/></div>
                    <div  class="loginbottomtexticon">車商</div>
                  </div>
                  </Link>
                </div>
                </div>
            </div>
            </div>
      </>
    )
  }
}

export default App