import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProductList from './component/ProductList'

class RentCar extends React.Component {
  constructor() {
    super()
    this.state = {
      aaa: [],
    }
  }
  render() {
    return (
      <Router>
        <>
          <h1>1111</h1>
          <Switch>
            <Route path="/productList" component={ProductList} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default RentCar
