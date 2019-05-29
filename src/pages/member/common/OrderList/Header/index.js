import React, { Component } from 'react'

import './Header.css'

export default class index extends Component {
  render() {
    return (
      <nav class="navbar   navbar-expand-md navbar-dark fixed-top ">
        <div class="container">
          <a class="navbar-brand" href="#" />
          <div class="logo">
            <img className="logo-svg" src={require('./image/logo.svg')} />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto  ">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  國風汽車
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink-333"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-user" />
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right dropdown-default"
                  aria-labelledby="navbarDropdownMenuLink-333"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item ">
                <img
                  className="nav-link ddd"
                  src={require('./image/ddd.svg')}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
