import React from 'react'
import './Registered.css'
import { Link } from 'react-router-dom'
// import login3 from './Loginicon/Login3.gif'
class App extends React.Component {
  constructor(props) {
        super(props)
        this.state={
          imgsrc:'',
          Info:'',
          Name:'',
          Account:'',
          Password:'',
          Checkpassword:'',
          Phone:'',
          Email:'',
          ShopAddressUrl:'',
          ID:'',
          Address:'',
          ImgFile:'',
          ShopOwner:'',
          ShopAgent:'',
        }  
    }

SetState=(e)=>{
  const name =e.target.name
  this.setState({[name]:e.target.value})
}
CheckAccount=(e) => {
  if(e.target.value==="")
  {
            document.querySelector('#RegisteredPageInputAccountHelp').innerHTML='請輸入帳號!!!';
            document.querySelector('#RegisteredPageInputAccount').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputAccountHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputAccountHelp').style.color='red';
            document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
            document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
  }else{
          document.querySelector('#RegisteredPageInputAccountHelp').style.color='#aaa';;
          document.querySelector('#RegisteredPageInputAccount').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputAccountHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
  var data = {"account":e.target.value}
      fetch("http://localhost:4000/registeredstoreaccountcheck",{
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })})
      .then(res=>res.json())
      .then(obj => {
        if(obj.data.find)
        {
          
          document.querySelector('#RegisteredPageInputAccountHelp').innerHTML='帳號重複!!!';
          document.querySelector('#RegisteredPageInputAccount').style.borderBottomColor='red';
          document.querySelector('#RegisteredPageInputAccountHelp').style.color='red';
          document.querySelector('#RegisteredPageInputAccountHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
          document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
        }
        else{
          document.querySelector('#RegisteredPageInputAccountHelp').style.color='#aaa';
          document.querySelector('#RegisteredPageInputAccountHelp').innerHTML='帳號無人使用';
          document.querySelector('#RegisteredPageInputAccount').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputAccountHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
        }
      })
}
}
CheckPhone=(e) => {
  if(e.target.value==="")
  {
            document.querySelector('#RegisteredPageInputPhoneHelp').innerHTML='請輸入電話號碼!!!';
            document.querySelector('#RegisteredPageInputPhone').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputPhoneHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputPhoneHelp').style.color='red';
            document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
            document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
  }else{
           document.querySelector('#RegisteredPageInputPhoneHelp').style.color='#aaa';;
          document.querySelector('#RegisteredPageInputPhone').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputPhoneHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
  var data = {"phone":e.target.value}
      fetch("http://localhost:4000/registeredstorephonecheck",{
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })})
      .then(res=>res.json())
      .then(obj => {
        if(obj.data.find)
        {
          
          document.querySelector('#RegisteredPageInputPhoneHelp').innerHTML='電話號碼重複!!!';
          document.querySelector('#RegisteredPageInputPhone').style.borderBottomColor='red';
          document.querySelector('#RegisteredPageInputPhoneHelp').style.color='red';
          document.querySelector('#RegisteredPageInputPhoneHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
          document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
        }
        else{
          document.querySelector('#RegisteredPageInputPhoneHelp').style.color='#aaa';
          document.querySelector('#RegisteredPageInputPhoneHelp').innerHTML='電話號碼無人使用';
          document.querySelector('#RegisteredPageInputPhone').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputPhoneHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
        }
      })
}
}
CheckEmail=(e) => {
  if(e.target.value==="")
  {
            document.querySelector('#RegisteredPageInputEmailHelp').innerHTML='請輸入Email!!!';
            document.querySelector('#RegisteredPageInputEmail').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputEmailHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputEmailHelp').style.color='red';
            document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
            document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
  }else{
           document.querySelector('#RegisteredPageInputEmailHelp').style.color='#aaa';;
          document.querySelector('#RegisteredPageInputEmail').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputEmailHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
  var data = {"email":e.target.value}
      fetch("http://localhost:4000/registeredstoreemailcheck",{
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })})
      .then(res=>res.json())
      .then(obj => {
        if(obj.data.find)
        {
          
          document.querySelector('#RegisteredPageInputEmailHelp').innerHTML='Email重複!!!';
          document.querySelector('#RegisteredPageInputEmail').style.borderBottomColor='red';
          document.querySelector('#RegisteredPageInputEmailHelp').style.color='red';
          document.querySelector('#RegisteredPageInputEmailHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
          document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
        }
        else{
          document.querySelector('#RegisteredPageInputEmailHelp').style.color='#aaa';
          document.querySelector('#RegisteredPageInputEmailHelp').innerHTML='Email無人使用';
          document.querySelector('#RegisteredPageInputEmail').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputEmailHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
        }
      })
}
}
CheckID=(e) => {
  
  if(e.target.value==="")
  {
            document.querySelector('#RegisteredPageInputIDHelp').innerHTML='請輸入統一編號!!!';
            document.querySelector('#RegisteredPageInputID').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputIDHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputIDHelp').style.color='red';
            document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
            document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
  }else{
          document.querySelector('#RegisteredPageInputIDHelp').style.color='#aaa';;
          document.querySelector('#RegisteredPageInputID').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputIDHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
  var data = {"ID":e.target.value}
      fetch("http://localhost:4000/registeredstoreidcheck",{
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })})
      .then(res=>res.json())
      .then(obj => {
        if(obj.data.find)
        {
          
          document.querySelector('#RegisteredPageInputIDHelp').innerHTML='統一編號重複!!!';
          document.querySelector('#RegisteredPageInputID').style.borderBottomColor='red';
          document.querySelector('#RegisteredPageInputIDHelp').style.color='red';
          document.querySelector('#RegisteredPageInputIDHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='none';
          document.querySelector('#RegisteredPageInputButton').style.opacity=.4;
        }
        else{
          document.querySelector('#RegisteredPageInputIDHelp').style.color='#aaa';
          document.querySelector('#RegisteredPageInputIDHelp').innerHTML='統一編號無人使用';
          document.querySelector('#RegisteredPageInputID').style.borderBottomColor='#6EB7B0';
          document.querySelector('#RegisteredPageInputIDHelp').style.opacity=1;
          document.querySelector('#RegisteredPageInputButton').style.pointerEvents='auto';
          document.querySelector('#RegisteredPageInputButton').style.opacity=1;
        }
      })
}
}
readURLIMG=(e)=>{
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.setState({imgsrc:reader.result})
        this.setState({ImgFile:file})
        }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }
    text=()=>{
      console.log(this.state.account)
    }
checkForm=()=>{
  if(document.querySelector('#RegisteredPageInputIDHelp').style.color==='red'){
    alert('統一編號錯誤')
  }
  if(document.querySelector('#RegisteredPageInputEmailHelp').style.color==='red'){
    alert('Email錯誤')
  }
  
  if(document.querySelector('#RegisteredPageInputAccountHelp').style.color==='red'){
    alert('帳號錯誤')
  }
  else{
  
        let isPassed = true;
        let email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        
        const fields =[
            'RegisteredPageLeftImg',
            'RegisteredPageInputInfo',
            'RegisteredPageInputName',
            'RegisteredPageInputAccount',
            'RegisteredPageInputPassword',
            'RegisteredPageInputCheckPassword',
            'RegisteredPageInputPhone',
            'RegisteredPageInputEmail',
            'RegisteredPageInputShopAddressUrl',
            'RegisteredPageInputID',
            'RegisteredPageInputShopOwner',
            'RegisteredPageInputShopAgent',
            'RegisteredPageInputAddress',

        ];
        for(let k in fields)
        {
            document.querySelector('#'+fields[k]+'Help').innerHTML='';
            document.querySelector('#'+fields[k]).style.borderBottomColor='#6EB7B0';
        }
        if (this.state.imgsrc===''){
            document.querySelector('#RegisteredPageLeftImgHelp').innerHTML='請選擇圖片';
            document.querySelector('#RegisteredPageLeftImgHelp').style.opacity=1;
            document.querySelector('#RegisteredPageLeftImgHelp').style.fontSize = "x-large";
            isPassed = false;
        };
        if (this.state.Info===''){
            document.querySelector('#RegisteredPageInputInfoHelp').innerHTML='請輸入簡介';
            document.querySelector('#RegisteredPageInputInfo').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputInfoHelp').style.opacity=1;
            isPassed = false;
        };
        if (this.state.Name===''){
            document.querySelector('#RegisteredPageInputNameHelp').innerHTML='請輸入姓名!!!';
            document.querySelector('#RegisteredPageInputName').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputNameHelp').style.opacity=1;
            isPassed = false;
        }
        
        if (this.state.Account===''){
            document.querySelector('#RegisteredPageInputAccountHelp').innerHTML='請輸入帳號!!!';
            document.querySelector('#RegisteredPageInputAccount').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputAccountHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputAccountHelp').style.color='red';
            isPassed = false;
            
        };
        if (this.state.Password===''){
            document.querySelector('#RegisteredPageInputPasswordHelp').innerHTML='請輸入密碼!!!';
            document.querySelector('#RegisteredPageInputPassword').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputPasswordHelp').style.opacity=1;
            isPassed = false;
        };
        if (this.state.Address===''){
            document.querySelector('#RegisteredPageInputAddressHelp').innerHTML='請輸入地址!!!';
            document.querySelector('#RegisteredPageInputAddress').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputAddressHelp').style.opacity=1;
            isPassed = false;
        };
        if (this.state.ShopAgent===''){
            document.querySelector('#RegisteredPageInputShopAgentHelp').innerHTML='請輸入公司管理人!!!';
            document.querySelector('#RegisteredPageInputShopAgent').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputShopAgentHelp').style.opacity=1;
            isPassed = false;
        };
        if (this.state.ShopOwner===''){
            document.querySelector('#RegisteredPageInputShopOwnerHelp').innerHTML='請輸入公司負責人!!!';
            document.querySelector('#RegisteredPageInputShopOwner').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputShopOwnerHelp').style.opacity=1;
            isPassed = false;
        };
        if (this.state.Password!==this.state.CheckPassword){
            document.querySelector('#RegisteredPageInputPasswordHelp').innerHTML='密碼不一致';
            document.querySelector('#RegisteredPageInputCheckPasswordHelp').innerHTML='密碼不一致';
            document.querySelector('#RegisteredPageInputPassword').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputCheckPassword').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputPasswordHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputCheckPasswordHelp').style.opacity=1;
            isPassed = false;
        };
        if (! email_pattern.test(this.state.Email)){
            document.querySelector('#RegisteredPageInputEmailHelp').innerHTML='Email格式錯誤';
            document.querySelector('#RegisteredPageInputEmail').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputEmailHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputEmailHelp').style.color='red';
            isPassed = false;
        };
        if (this.state.ShopAddressUrl===""){
            document.querySelector('#RegisteredPageInputShopAddressUrlHelp').innerHTML='生日格式錯誤，請輸入年(YYYY)-月(MM)-日(DD)';
            document.querySelector('#RegisteredPageInputShopAddressUrl').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputShopAddressUrlHelp').style.opacity=1;
            isPassed = false;
        };
        if (this.state.ID===""){
            document.querySelector('#RegisteredPageInputIDHelp').innerHTML='請輸入統一編號';
            document.querySelector('#RegisteredPageInputID').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputIDHelp').style.opacity=1;
            document.querySelector('#RegisteredPageInputIDHelp').style.color='red';
            isPassed = false;
        };
        if (this.state.Phone===""){
            document.querySelector('#RegisteredPageInputPhoneHelp').innerHTML='請輸入電話號碼';
            document.querySelector('#RegisteredPageInputPhone').style.borderBottomColor='red';
            document.querySelector('#RegisteredPageInputPhoneHelp').style.opacity=1;
            isPassed = false;
        };
        if(isPassed){

              var formData = new FormData();
              formData.append('Name', this.state.Name);
              formData.append('Account', this.state.Account);
              formData.append('Password', this.state.Password);
              formData.append('Phone', this.state.Phone);
              formData.append('File', this.state.ImgFile);
              formData.append('Email', this.state.Email);
              formData.append('Address', this.state.Address);
              formData.append('ShopAddressUrl', this.state.ShopAddressUrl);
              formData.append('ID', this.state.ID);
              formData.append('Info', this.state.Info);
              formData.append('ShopOwner', this.state.ShopOwner);
              formData.append('ShopAgent', this.state.ShopAgent);
              
              fetch("http://localhost:4000/storeregistered",{
              method: 'POST',
              body:formData,
            })
              .then(res=>res.json())
              .then(obj => {

                    if(obj.data.success)
                    {
                      alert(obj.data.message)
                      window.location = 'http://localhost:3000/IndexPage';
                    }
                    else{
                 
                      alert(obj.data.message);
                      window.location = 'http://localhost:3000/IndexPage';
                     
                    }
              })

        }
}
}
LoginDriverNO=()=>{
  window.history.go(-3); 
  
}
  render(){
    return (
<>
<div class="LoginDriverPageback">

            <div class="RegisteredPage">
              <div class="RegisteredPageLeft">
              <div class="RegisteredPageLeftText">
                <div>車商會員註冊</div>
                <div class="RegisteredPageLeftTextEnglish">Welcome to Vehicle</div>
              </div>
                <div class="RegisteredPageLeftMyImgBox">
                  <img  src={this.state.imgsrc} alt="" width="285px" />
                </div>
                  <input 
                  type="file"  
                  onChange={this.readURLIMG.bind(this)} 
                  accept="image/jpeg,image/jpg,image/gif,image/png" 
                  id="RegisteredPageLeftImg"
                  encType = 'multipart/form-data'
                  name="File"
                  />
                  <small id="RegisteredPageLeftImgHelp" class="form-text  "></small>
                </div>
              <div class="RegisteredPageMiddle">
                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">車商簡介:</div>
                  </div>
                      <input class="RegisteredPageInput" id="RegisteredPageInputInfo" name="Info" placeholder="請輸入姓名"  onBlur={this.SetState} />
                      <small id="RegisteredPageInputInfoHelp" class="form-text  "></small>
                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">公司名稱:</div>
                  </div>
                      <input class="RegisteredPageInput" id="RegisteredPageInputName" name="Name" placeholder="請輸入姓名"  onBlur={this.SetState} />
                      <small id="RegisteredPageInputNameHelp" class="form-text  "></small>

                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">帳號:</div>
                  </div>
                    <input class="RegisteredPageInput"  id="RegisteredPageInputAccount" name="Account"  placeholder="請輸入帳號" onChange={this.CheckAccount} onBlur={this.SetState} />
                    <small id="RegisteredPageInputAccountHelp" class="form-text  "></small>
                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">密碼:</div>
                  </div>
                      <input class="RegisteredPageInput" id="RegisteredPageInputPassword" name="Password" type="password" placeholder="請輸入密碼" onBlur={this.SetState} />
                      <small id="RegisteredPageInputPasswordHelp" class="form-text  "></small>

                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">確認密碼:</div>
                  </div>
                    <input class="RegisteredPageInput" id="RegisteredPageInputCheckPassword" name="CheckPassword" type="password" placeholder="請再次輸入密碼" onBlur={this.SetState} />
                    <small id="RegisteredPageInputCheckPasswordHelp" class="form-text  "></small>
                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">車商地址:</div>
                  </div>
                    <input class="RegisteredPageInput" id="RegisteredPageInputAddress" name="Address" placeholder="請輸入地址" onBlur={this.SetState} />
                    <small id="RegisteredPageInputAddressHelp" class="form-text  "></small>
                       <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">統一編號:</div>
                  </div>
                    <input class="RegisteredPageInput" id="RegisteredPageInputID" name="ID" placeholder="請輸入統一編號" onChange={this.CheckID} onBlur={this.SetState} />
                    <small id="RegisteredPageInputIDHelp" class="form-text  "></small>
              </div>
              <div class="RegisteredPageRight">
                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">連絡電話:</div>
                  </div>
                      <input class="RegisteredPageInput"  id="RegisteredPageInputPhone" name="Phone" placeholder="請輸入連絡電話" onBlur={this.SetState} />
                      <small id="RegisteredPageInputPhoneHelp" class="form-text  "></small>

                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">信箱:</div>
                  </div>
                    <input class="RegisteredPageInput"  id="RegisteredPageInputEmail" name="Email" placeholder="請輸入信箱" onChange={this.CheckEmail} onBlur={this.SetState} />
                    <small id="RegisteredPageInputEmailHelp" class="form-text  "></small>
                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">車商官方網站:</div>
                  </div>
                      <input class="RegisteredPageInput"  id="RegisteredPageInputShopAddressUrl" name="ShopAddressUrl" placeholder="車商官方網站" onBlur={this.SetState} />
                      <small id="RegisteredPageInputShopAddressUrlHelp" class="form-text  "></small>

                  <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">公司負責人:</div>
                  </div>
                    <input class="RegisteredPageInput" id="RegisteredPageInputShopOwner" name="ShopOwner" placeholder="請輸入公司負責人"  onBlur={this.SetState} />
                    <small id="RegisteredPageInputShopOwnerHelp" class="form-text  "></small>
                       <div class="RegisteredPageInputTextbox">
                      <div class="RegisteredPageInputLine"></div>
                      <div class="RegisteredPageInputText">公司管理人:</div>
                  </div>
                    <input class="RegisteredPageInput" id="RegisteredPageInputShopAgent" name="ShopAgent" placeholder="請輸入公司管理人"  onBlur={this.SetState} />
                    <small id="RegisteredPageInputShopAgentHelp" class="form-text  "></small>
                    
                  <button class="RegisteredPageInputButton" id="RegisteredPageInputButton" onClick={this.checkForm}>註{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}冊</button>  
                                  <Link to="/">

                <button class="RegisteredPageInputButtonNo"onClick={this.LoginDriverNO}>取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>
                </Link>
                  </div>  
                  
             
                </div>
             
            
                </div>
      </>
    )
  }
}

export default App