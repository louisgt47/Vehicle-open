import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App
