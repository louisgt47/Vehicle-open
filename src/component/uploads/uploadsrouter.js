import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loginBox from './LoginBox/LoginBox.js'
import loginDriver from './u/LoginDriver.js'
import LoginStore from './LoginBox/LoginStore.js'
import LoginUser from './LoginBox/LoginUser.js'
import RegisteredDriver from './LoginBox/Registered/RegisteredDriver.js'
import RegisteredStore from './LoginBox/Registered/RegisteredStore.js'
import RegisteredUser from './LoginBox/Registered/RegisteredUser.js'
import './LoginBox/LoginBox.css'
class App extends React.Component {



  render() {
    return (


       <Router>
        <>

          <Switch>
            <Route exact path="/" component={loginBox} />
            <Route path="/LoginDriver" component={loginDriver} />
            <Route path="/LoginStore" component={LoginStore} />
            <Route path="/LoginUser" component={LoginUser} />
            <Route path="/RegisteredDriver" component={RegisteredDriver} />
            <Route path="/RegisteredStore" component={RegisteredStore} />
            <Route path="/RegisteredUser" component={RegisteredUser} />
          </Switch>
  
        </>
      </Router>      
    )
  }
}

export default App