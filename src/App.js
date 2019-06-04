import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Enter from './component/Enter/Enter.js'
import IndexPage from './component/Indexpage/IndexPage.js'

import SignUp from './pages/sign_up/SignUp'
// import RentCar from './pages/rent_car/RentCar'
// import Agent from './pages/agent/Agent'
import QA from './pages/qa/QA'
import AboutMe from './pages/about_me/AboutMe'

import ProductList from './pages/rent_car/productList/archirio/ProductList'
import ProductMain from './pages/rent_car/ProductMain'
import productSearchList from './pages/rent_car/productSearchList'
import Order from './pages/rent_car/order/Order'
import Authorization from './pages/rent_car/order/Authorization'
import Pay from './pages/rent_car/order/Pay'
import Order_Finish from './pages/rent_car/order/Order_Finish'

//member
import MemberList from './pages/member/MemberList'
import OrderList from './pages/member/OrderList'
import searchbox from './component/searchbox/searchbox.js'
import uploads from './component/uploads/uploads'
import Edituser from './component/uploads/Edituser/Edituser'
import StoreOrderList from './component/StoreOrderList.js'
import shopMainProduct from './component/container/shopMainProduct.js'

//login
import loginBox from './component/Login/LoginBox/LoginBox.js'
import loginDriver from './component/Login/LoginBox/LoginDriver.js'
import LoginStore from './component/Login/LoginBox/LoginStore.js'
import LoginUser from './component/Login/LoginBox/LoginUser.js'
import RegisteredDriver from './component/Login/LoginBox/Registered/RegisteredDriver.js'
import RegisteredStore from './component/Login/LoginBox/Registered/RegisteredStore.js'
import RegisteredUser from './component/Login/LoginBox/Registered/RegisteredUser.js'
import Shop_add from './pages/shop/Shop_add'
import Shop_edit from './pages/shop/Shop_edit'
import Shop_list from './pages/shop/Shop_list'

//agent
import Agent_00_About from './pages/agent/Agent_00_About'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
    }
  }
  handleDataChange = data => {
    this.setState({ data })
  }
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Enter} />
            <Route exact path="/searchbox" component={searchbox} />
            <Route exact path="/IndexPage" component={IndexPage} />
            //Login
            <Route exact path="/loginbox" component={loginBox} />
            <Route path="/LoginDriver" component={loginDriver} />
            <Route path="/LoginStore" component={LoginStore} />
            <Route path="/LoginUser" component={LoginUser} />
            <Route path="/RegisteredDriver" component={RegisteredDriver} />
            <Route path="/RegisteredStore" component={RegisteredStore} />
            <Route path="/RegisteredUser" component={RegisteredUser} />
            <Route path="/sign_up" component={SignUp} />
            //member
            <Route path="/memberList" component={MemberList} />
            <Route path="/orderList" component={OrderList} />
            <Route path="/uploadss" component={uploads} />
            <Route path="/Edituser" component={Edituser} />
            <Route path="/StoreOrderList" component={StoreOrderList} />
            <Route path="/shopMainProduct" component={shopMainProduct} />
            //rentCar
            <Route path="/productList" component={ProductList} />
            <Route path="/productList/:page" component={ProductList} />
            <Route path="/productMain/:pNo" component={ProductMain} />
            <Route path="/productSearchList" component={productSearchList} />
            {/* <Route path="/agent" component={Agent} /> */}
            <Route path="/qa" component={QA} />
            <Route path="/about_me" component={AboutMe} />
            <Route path="/Order/:pNo" component={Order} />
            <Route path="/Authorization" component={Authorization} />
            <Route path="/Pay" component={Pay} />
            <Route path="/Order_Finish" component={Order_Finish} />
            <Route path="/Shop_add" component={Shop_add} />
            <Route
              path="/Shop_edit"
              component={() => (
                <Shop_edit
                  data={this.state.data}
                  handleDataChange={this.handleDataChange}
                />
              )}
            />
            <Route
              path="/Shop_list"
              component={() => (
                <Shop_list
                  data={this.state.data}
                  handleDataChange={this.handleDataChange}
                />
              )}
            />
            {/* agent */}
            <Route path="/agentAbout" component={Agent_00_About} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App
