import React from 'react'
import './LoginDriverBox.css'
import login1 from './Loginicon/Login1.gif'
import { Link } from 'react-router-dom'
class App extends React.Component {
  constructor() {
  super()
  this.state={
    account:'',
    password:'',
    success:'',
  }
}

SetAccount=evt=>{
this.setState({account:evt.target.value})

}
SetPassword=evt=>{
this.setState({password:evt.target.value})

}

LoginDriverSubmit= evt=>{

var data = {"account":this.state.account,"password":this.state.password}
console.log(data)
      fetch("http://localhost:4000/driverlogin",{
        credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })})
      .then(res=>res.json())
      .then(obj => {
        console.log(obj)
        if(obj.data.success)
        {
           window.history.go(-2);
          alert(obj.data.message)
          console.log(obj.data)
          localStorage.setItem('account',obj.data.body.account)
        }
        else{
          alert(obj.data.message)
          document.querySelector('#LoginDriverPageBottomInputpwd').value="";
        }
      })
}
LoginDriverNO=()=>{
  window.history.go(-2); 
  
}
  render() {
    return (
      <>
<div class="LoginDriverPageback">

            <div class="LoginDriverPage">
              <div class="LoginDriverPageTop">
                <div class="LoginDriverTextbox">
                  <div class="LoginDriverTextboxTop">代理駕駛登入</div>
                  <div class="LoginDriverTextboxBottom">Welcome to Vehicle</div>
                </div>
                <div class="LoginDriverPageIcon">
                  <img class="LoginDriverPageIconImg" src={login1} alt=""/>
                </div>
              </div>
              <div class="LoginDriverPageBottom">
                    <div class="LoginDriverPageBottomInputBox">
                    <div class="LoginDriverPageBottomInputTextbox">
                      <div class="LoginDriverPageBottomInputLine"></div>
                      <div class="LoginDriverPageBottomInputText">帳號</div>
                      </div>
                    <input class="LoginDriverPageBottomInput" placeholder="請輸入帳號" onBlur={this.SetAccount} />
                    <div class="LoginDriverPageBottomInputTextbox">
                      <div class="LoginDriverPageBottomInputLine"></div>
                      <div class="LoginDriverPageBottomInputText">密碼</div>
                      </div>
                    
                    <input id="LoginDriverPageBottomInputpwd" class="LoginDriverPageBottomInput" placeholder="請輸入密碼" type="password" onBlur={this.SetPassword}/>
                  
                </div>
                
                 <Link to="RegisteredDriver">
                <div class="LoginDriverPageRegistered">我要註冊</div>
                </Link>
                <button class="LoginDriverPageButton" onClick={this.LoginDriverSubmit}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;入</button>

                <button class="LoginDriverPageButtonNo"onClick={this.LoginDriverNO}>取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>
              </div>
            </div>
             
            
            </div>
      </>
    )
  }
}

export default App