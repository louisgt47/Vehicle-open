import React from 'react'
import './Edituser.css'

import NavMember from '../../../pages/basic/NavMember'
import Footer from '../../../pages/basic/Footer'

class App extends React.Component {
     constructor(props) {
        super(props)
        this.state={
        Account:'',
        No:'',
        Loginman: '',
        IsLogined:'',
        Name:'',
        Gender:'',
        Pwd:'',
        Phone:'',
        Email:'',
        Address:'',
        Birthday:'',
        Id:'',
        Img:'',
        Owner:'',
        Agent:'',
        AddressUrl:'',
        Info:'',  
        CheckPwd:'',
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
         this.setState({Name:obj.Name})
         this.setState({Gender:obj.Gender})
         this.setState({Pwd:obj.Pwd})
         this.setState({Phone:obj.Phone})
         this.setState({Email:obj.Email})
         this.setState({Address:obj.Address})
         this.setState({Birthday:obj.Birthday})
         this.setState({Id:obj.Id})
         this.setState({Owner:obj.Owner})
         this.setState({Agent:obj.Agent})
         this.setState({AddressUrl:obj.AddressUrl})
         this.setState({Info:obj.Info})
         this.setState({CheckPwd:obj.Pwd})
         this.setState({Img:obj.Img})
            
     }
     )
}
readURLIMG=(e)=>{
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.setState({imgsrc:reader.result})
        this.setState({Img:file})
        }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }
    CheckFormNo=()=>{
        window.history.go(-1);
    }
SetState=(e)=>{
  const name =e.target.name
  this.setState({[name]:e.target.value})
}
CheckFormUser=()=>{
  
        if(this.state.Pwd===this.state.CheckPwd){
              var formData = new FormData();

              formData.append('No', this.state.No);
              formData.append('Pwd', this.state.Pwd);
              formData.append('Name', this.state.Name);
              formData.append('Account', this.state.Account);
              formData.append('Password', this.state.Password);
              formData.append('Phone', this.state.Phone);
              formData.append('Img', this.state.Img);
              formData.append('Email', this.state.Email);
              formData.append('Address', this.state.Address);
              formData.append('Birthday', this.state.Birthday);
              formData.append('Id', this.state.Id);
              formData.append('Info', this.state.Info);
              formData.append('Gender', this.state.Gender);
              formData.append('Owner', this.state.Owner);
              formData.append('AddressUrl', this.state.AddressUrl);
              formData.append('Agent', this.state.Agent);




              fetch("http://localhost:4000/useredit",{
              method: 'PUT',
              body:formData,
            })
              .then(res=>res.json())
              .then(obj => {
                  console.log(obj.success)
                  
                    if(obj.success)
                    {
                      alert(obj.data.message)
                      window.history.go(-1); 
                    }
                    else{
                      window.history.go(-1);
                      alert(obj.data.message);
                       
                    }
              })
} else{
    alert('密碼有誤!!!');
    this.setState({Pwd:''});
    this.setState({CheckPwd:''});
} }
checkFormDriver=()=>{
    
    if(this.state.Pwd===this.state.CheckPwd){
                  var formData = new FormData();

              formData.append('No', this.state.No);
              formData.append('Pwd', this.state.Pwd);
              formData.append('Name', this.state.Name);
              formData.append('Account', this.state.Account);
              formData.append('Password', this.state.Password);
              formData.append('Phone', this.state.Phone);
              formData.append('Img', this.state.Img);
              formData.append('Email', this.state.Email);
              formData.append('Address', this.state.Address);
              formData.append('Birthday', this.state.Birthday);
              formData.append('Id', this.state.Id);
              formData.append('Info', this.state.Info);
              formData.append('Gender', this.state.Gender);
              formData.append('Owner', this.state.Owner);
              formData.append('AddressUrl', this.state.AddressUrl);
              formData.append('Agent', this.state.Agent);




              fetch("http://localhost:4000/driveredit",{
              method: 'PUT',
              body:formData,
            })
              .then(res=>res.json())
              .then(obj => {
                  console.log(obj)
                    if(obj.success)
                    {
                      alert(obj.data.message)
                      window.history.go(-1); 
                    }
                    else{
                      window.history.go(-1);
                      alert(obj.data.message);
                       
                    }
              })
              
}else{
    alert('密碼有誤!!!');
    this.setState({Pwd:''});
    this.setState({CheckPwd:''});
}}
CheckFormStore=()=>{
    if(this.state.Pwd===this.state.CheckPwd){
                  var formData = new FormData();

              formData.append('No', this.state.No);
              formData.append('Pwd', this.state.Pwd);
              formData.append('Name', this.state.Name);
              formData.append('Account', this.state.Account);
              formData.append('Password', this.state.Password);
              formData.append('Phone', this.state.Phone);
              formData.append('Img', this.state.Img);
              formData.append('Email', this.state.Email);
              formData.append('Address', this.state.Address);
              formData.append('Birthday', this.state.Birthday);
              formData.append('Id', this.state.Id);
              formData.append('Info', this.state.Info);
              formData.append('Gender', this.state.Gender);
              formData.append('Owner', this.state.Owner);
              formData.append('AddressUrl', this.state.AddressUrl);
              formData.append('Agent', this.state.Agent);




              fetch("http://localhost:4000/storeedit",{
              method: 'PUT',
              body:formData,
            })
              .then(res=>res.json())
              .then(obj => {
                  console.log(obj)
                    if(obj.success)
                    {
                      alert(obj.data.message)
                      window.history.go(-1); 
                    }
                    else{
                      window.history.go(-1);
                      alert(obj.data.message);
                       
                      
                    }
              })
              
}else{
    alert('密碼有誤!!!');
    this.setState({Pwd:''});
    this.setState({CheckPwd:''});
}}
  render() {

         if(this.state.Loginman=='driver'){
         return (
            <>
            <NavMember/>
            <div class="Edituserpage">
                <div class="EdituserpageTop">
                    <div class="EdituserpageTitle">代駕資料修改</div>
                </div>
                <div class="EdituserpageMiddle">
                    <div class="EdituserpageMiddleTop">
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">姓名:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="Name" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Name}/>
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">密碼:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="Pwd" placeholder="請輸入密碼"  onChange={this.SetState} value={this.state.Pwd} />
                        <small id="EdituserpageInputPwdHelp" class="form-text  "></small>
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">確認密碼:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="CheckPwd" placeholder="請再次輸入密碼"  onChange={this.SetState}  value={this.state.CheckPwd}/>
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                </div>
                <div class="EdituserpageMiddleTop">
                    <div class="EdituserpageInputTextbox">
                        <div class="EdituserpageInputLine"></div>
                        <div class="EdituserpageInputText">地址:</div>
                    </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Address" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Address} value={this.state.Address} />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                        <div class="EdituserpageInputTextbox">
                            <div class="EdituserpageInputLine"></div>
                            <div class="EdituserpageInputText">連絡電話:</div>
                        </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Phone" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Phone}  />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                       <div class="EdituserpageInputTextbox">
                            <div class="EdituserpageInputLine"></div>
                            <div class="EdituserpageInputText">信箱:</div>
                        </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Email" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Email} />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>

                </div>
                    <div class="EdituserpageMiddleBottom">
                <button class="EdituserpageInputButton" id="EdituserpageInputButton" onClick={this.checkFormDriver}>修{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}改</button>  

                <button class="EdituserpageInputButtonNo" onClick={this.CheckFormNo}>取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>

                </div>
                </div>

               
            </div>
            <Footer/>

            </>
         )
         }
         if(this.state.Loginman=='user'){
      return(<>
      <NavMember/>
            <div class="Edituserpage">
                <div class="EdituserpageTop">
                    <div class="EdituserpageTitle">租賃會員修改</div>
                </div>
               <div class="EdituserpageMiddle">
                    <div class="EdituserpageMiddleTop">
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">姓名:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="Name" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Name}/>
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">密碼:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="Pwd"type="password" placeholder="請輸入密碼"  onChange={this.SetState} value={this.state.Pwd} />
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">確認密碼:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="CheckPwd" type="password" placeholder="請再次輸入密碼"  onChange={this.SetState}  value={this.state.CheckPwd}/>
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                </div>
                <div class="EdituserpageMiddleTop">
                    <div class="EdituserpageInputTextbox">
                        <div class="EdituserpageInputLine"></div>
                        <div class="EdituserpageInputText">地址:</div>
                    </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Address" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Address} value={this.state.Address} />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                        <div class="EdituserpageInputTextbox">
                            <div class="EdituserpageInputLine"></div>
                            <div class="EdituserpageInputText">連絡電話:</div>
                        </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Phone" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Phone}  />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                       <div class="EdituserpageInputTextbox">
                            <div class="EdituserpageInputLine"></div>
                            <div class="EdituserpageInputText">信箱:</div>
                        </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Email" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Email} />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>

                </div>
                    <div class="EdituserpageMiddleBottom">
                <button class="EdituserpageInputButton" id="EdituserpageInputButton" onClick={this.CheckFormUser}>修{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}改</button>  

                <button class="EdituserpageInputButtonNo" onClick={this.CheckFormNo}>取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>

                </div>
                </div>

               
            </div>
            <Footer/>

            </>)}
         if(this.state.Loginman=='store'){
      return(<>
      <NavMember/>
            <div class="Edituserpage">
                <div class="EdituserpageTop">
                    <div class="EdituserpageTitle">車商修改</div>
                </div>
                <div class="EdituserpageMiddle">
                    <div class="EdituserpageMiddleTop">
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">公司名稱:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="Name" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Name}/>
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                            <div class="EdituserpageInput`Textbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">密碼:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="Pwd" placeholder="請輸入密碼"  onChange={this.SetState} value={this.state.Pwd} />
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                            <div class="EdituserpageInputTextbox">
                                <div class="EdituserpageInputLine"></div>
                                <div class="EdituserpageInputText">確認密碼:</div>
                            </div>
                        <input class="EdituserpageInput" id="EdituserpageInputName" name="CheckPwd" placeholder="請再次輸入密碼"  onChange={this.SetState}  value={this.state.CheckPwd}/>
                        <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                </div>
                <div class="EdituserpageMiddleTop">
                    <div class="EdituserpageInputTextbox">
                        <div class="EdituserpageInputLine"></div>
                        <div class="EdituserpageInputText">車商地址:</div>
                    </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Address" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Address} value={this.state.Address} />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                        <div class="EdituserpageInputTextbox">
                            <div class="EdituserpageInputLine"></div>
                            <div class="EdituserpageInputText">連絡電話:</div>
                        </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Phone" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Phone}  />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>
                       <div class="EdituserpageInputTextbox">
                            <div class="EdituserpageInputLine"></div>
                            <div class="EdituserpageInputText">車商簡介:</div>
                        </div>
                    <input class="EdituserpageInput" id="EdituserpageInputName" name="Info" placeholder="請輸入姓名"  onChange={this.SetState} value={this.state.Info} />
                    <small id="EdituserpageInputNameHelp" class="form-text  "></small>

                </div>
                    <div class="EdituserpageMiddleBottom">
                <button class="EdituserpageInputButton" id="EdituserpageInputButton" onClick={this.CheckFormStore}>修{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}改</button>  

                <button class="EdituserpageInputButtonNo" onClick={this.CheckFormNo}>取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>


                </div>
                </div>

               
            </div>
            <Footer/>
            </>)}
      else{
         return(<></>)
      }
      
  }
}

export default App