import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Enter from './pages/home/Enter'
import Login from './pages/log_in/LogIn'
import SignUp from './pages/sign_up/SignUp'
import RentCar from './pages/rent_car/RentCar'
import Agent from './pages/agent/Agent'
import QA from './pages/qa/QA'
import AboutMe from './pages/about_me/AboutMe'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Enter} />
            <Route path="/log_in" component={Login} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/rent_car" component={RentCar} />
            <Route path="/agent" component={Agent} />
            <Route path="/qa" component={QA} />
            <Route path="/about_me" component={AboutMe} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App