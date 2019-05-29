import React, { Component } from 'react'

import './Footer.css'
export default class extends Component {
  render() {
    return (
      
        <div className="footer  ">
          <div className="set1 ">
            <img className="F-logo" src={require('./images/logo.svg')} />
            
          </div>
          <div className="set1text1-1   ">
              <p className="text1-1">聯絡我們</p>
              <p className="text1-2">客服專線：(02)29xx-xxx-xxx</p>
              <p className="text1-3">客服信箱：(02)29xx-xxx-xxx</p>
            </div>

            <div className="set1text1-2 ">
              <p className="text1-1">關於我們</p>
              <p className="text1-2">提供服務</p>
              
            </div>
            <div className="set1text1-3 ">
            <img className="fb-logo" src={require('./images/fb-logo.svg')} />
            </div>
            <div className="set1text1-4 ">
            <img className="tt-logo" src={require('./images/tt-logo.svg')} />
            </div>
        </div>

        
    
      
    
     
    )
  };
}
