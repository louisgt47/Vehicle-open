import React from 'react'
import "./uploadsheader.css"

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
              <Link to="orderList">
              <div class="uploadsheaderpageicon">
                <img src={Icon2}/>
                 <div class="uploadsheaderpagetext">租車訂單查詢</div>
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
    else{
      return(<></>)
    }
  }
}

export default App