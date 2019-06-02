import React from 'react'
import Logo from './LogoSvg/LogoSvg.js'
import EnterText from './EnterText/EnterText.js'
import EnterButton from './EnterButton/EnterButton.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './EnterBox.css'
class App extends React.Component {
  render() {
    return (
      <>
      <div class="EnterBox">
        <Logo/> 
        <EnterText/>
        <Link to="IndexPage">
        <EnterButton/>
        </Link>
        </div>  
      </>
    )
  }
}

export default App