import React from 'react'
import "./uploadsheader.css"

import '../Login/LoginBox/LoginBox.css'
import login1 from '../Login/LoginBox/Loginicon/Login1.gif'
import login2 from '../Login/LoginBox/Loginicon/Login2.gif'
import login3 from '../Login/LoginBox/Loginicon/Login3.gif'
import NavMember from '../../pages/basic/NavMember'
import Footer from '../../pages/basic/Footer'

import Icon1 from './images/icon1.gif'
import Icon2 from './images/icon2.gif'
import Icon3 from './images/icon3.gif'
import Icon4 from './images/icon4.gif'
import Icon5 from './images/icon5.gif'
import Icon6 from './images/icon6.gif'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
class App extends React.Component {
   constructor(props) {
    super(props);
    this.state={
        loginUser:'',
        userNo:'',
        Loginman: '',
        IsLogined:'',
        Img:'',
        Name:'',
    }
   
  }
componentDidMount=()=>{
  fetch("http://localhost:4000/islogin",{
        credentials: 'include',
      method: 'GET'})
     .then(res=>res.json())
     .then(obj=>{
        console.log(obj)
         this.setState({Account:obj.Account})
         this.setState({No:obj.No})
         this.setState({Loginman:obj.Loginman})
         this.setState({IsLogined:obj.IsLogined})
         this.setState({Img:obj.Img})
         this.setState({Name:obj.Name})
     }
     )
}


  render() {
      if(this.state.Loginman=='driver'){
    return (

    <>
        <NavMember/>
    <div>
    <div class="uploadsheader">
          <div class="uploadsheaderimghome">
            <div class="uploadsheaderimgbox">
          <img src={this.state.Img} width="100%" class="uploadsheaderimg"/>
          </div>
        
            <div class="uploadsheadertext">{this.state.Name}</div>
          </div>
        </div>
        <div>
          <div class="uploadsheaderpage">
            <div class="uploadsheaderpagetop">
              <Link to='Edituser'>
              <div class="uploadsheaderpageicon">
                <img src={Icon1}/>
                <div class="uploadsheaderpagetext">個人資料編輯</div>
              </div>
              </Link>
              <Link to="orderList">
              <div class="uploadsheaderpageicon">
                <img src={Icon2}/>
                 <div class="uploadsheaderpagetext">租車訂單查詢</div>
              </div>
              </Link>
              <div class="uploadsheaderpageicon">
                <img src={Icon3}/>
                 <div class="uploadsheaderpagetext">代駕訂單查詢</div>
              </div>
            </div>
            <div class="uploadsheaderpagebottom">
              <div class="uploadsheaderpageicon">
                <img src={Icon4}/>
                 <div class="uploadsheaderpagetext">信用卡設定</div>
              </div>
              <Link to='MemberList'>
              <div class="uploadsheaderpageicon">
                <img src={Icon5}/>
                 <div class="uploadsheaderpagetext">我的收藏</div>
              </div>
              </Link>
              <div class="uploadsheaderpageicon">
                <img src={Icon6}/>
                 <div class="uploadsheaderpagetext">優惠活動</div>
              </div>
            </div>
          </div>
        </div>
    </div><Footer/>
    </>

    )
    }
    if(this.state.Loginman=='user'){
      return(
 
    <> <NavMember/>
    <div>
        <div class="uploadsheader">
          <div class="uploadsheaderimghome">
            <div class="uploadsheaderimgbox">
          <img src={this.state.Img} width="100%" class="uploadsheaderimg"/>
          </div>
        
            <div class="uploadsheadertext">{this.state.Name}</div>
          </div>
        </div>
        <div>
          <div class="uploadsheaderpage">
            <div class="uploadsheaderpagetop">
            <Link to='Edituser'>
              <div class="uploadsheaderpageicon">
                <img src={Icon1}/>
                <div class="uploadsheaderpagetext">個人資料編輯</div>
              </div>
              </Link>
              <Link to="orderList">
              <div class="uploadsheaderpageicon">
                <img src={Icon2}/>
                 <div class="uploadsheaderpagetext">租車訂單查詢</div>
              </div>
              </Link>
              <div class="uploadsheaderpageicon">
                <img src={Icon3}/>
                 <div class="uploadsheaderpagetext">代駕訂單查詢</div>
              </div>
            </div>
            <div class="uploadsheaderpagebottom">
              <div class="uploadsheaderpageicon">
                <img src={Icon4}/>
                 <div class="uploadsheaderpagetext">信用卡設定</div>
              </div>
              <Link to='MemberList'>
              <div class="uploadsheaderpageicon">
                <img src={Icon5}/>
                 <div class="uploadsheaderpagetext">我的收藏</div>
              </div>
              </Link>
              <div class="uploadsheaderpageicon">
                <img src={Icon6}/>
                 <div class="uploadsheaderpagetext">優惠活動</div>
              </div>
            </div>
          </div>
        </div>
    </div><Footer/>
    </>
)

    }
      if(this.state.Loginman=='store'){
      return(
 
    <> <NavMember/>
    <div>
    <div class="uploadsheader">
          <div class="uploadsheaderimghome">
            <div class="uploadsheaderimgbox">
          <img src={this.state.Img} width="100%" class="uploadsheaderimg"/>
          </div>
        
            <div class="uploadsheadertext">{this.state.Name}</div>
          </div>
        </div>
        <div>
          <div class="uploadsheaderpage">
            <div class="uploadsheaderpagetop">
            <Link to='Edituser'>
              <div class="uploadsheaderpageicon">
                <img src={Icon1}/>
                <div class="uploadsheaderpagetext">車商資料編輯</div>
              </div>
              </Link>
              <Link to="StoreOrderList">
              <div class="uploadsheaderpageicon">
                <img src={Icon2}/>
                 <div class="uploadsheaderpagetext">訂單查詢</div>
              </div>
              </Link>
              <div class="uploadsheaderpageiconnone">
                <img src={Icon3}/>
                 <div class="uploadsheaderpagetext">代駕訂單查詢</div>
              </div>
            </div>
            <div class="uploadsheaderpagebottom">
              <div class="uploadsheaderpageicon">
                <img src={Icon4}/>
                 <div class="uploadsheaderpagetext">信用卡設定</div>
              </div>
              <Link to='Shop_List'>
              <div class="uploadsheaderpageicon">
                <img src={Icon5}/>
                 <div class="uploadsheaderpagetext">車輛清單</div>
              </div>
              </Link>
              <div class="uploadsheaderpageicon">
                <img src={Icon6}/>
                 <div class="uploadsheaderpagetext">優惠活動</div>
              </div>
            </div>
          </div>
        </div>
    </div><Footer/>
      </>
    )

    }
    else{
      return(<>
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
      </div></>)
    }
  }
}

export default App