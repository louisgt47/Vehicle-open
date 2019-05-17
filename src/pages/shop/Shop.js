import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import Shop_add from '../shop/Shop_add'
import Shop_edit from '../shop/Shop_edit'
import Shop_list from '../shop/Shop_list'

class Shop extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <>
          <Route path="/Shop/Shop_add" component={Shop_add} />
          <Route path="/Shop/Shop_edit" component={Shop_edit} />
          <Route path="/Shop/Shop_list" component={Shop_list} />
        </>
      </Router>
    )
  }
}

export default Shop
