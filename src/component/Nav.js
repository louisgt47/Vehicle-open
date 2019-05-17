import React from 'react'
import '../css/Nav.css'
import Icon from '../component/LogoSvg.js'

const styles = {
  fontFamily: 'sans-serif',
}

const Nav = () => (
  <>
    <div className="container-fluid p-0">
      <div className="nav">
        <p>nav</p>
      </div>
      <div className="LogoBar">
        <Icon height={50} />
      </div>
    </div>
  </>
)

export default Nav
