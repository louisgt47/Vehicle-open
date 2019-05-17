import React, { Component } from 'react'
import '../images/logo3.svg'
import '../css/Footer.css'
import Icons from '../component/LogoSvgFooter.js'
export default class extends Component {
  render() {
    return (
      <>
        <div className="Footer col-sm-12 ">
          <div className="container d-flex align-items-center justify-content-sm-center">
            <div className="col-sm-2">
              <Icons height={50} />
            </div>
            <div className="rwdsize">
              <div className="d-flex ">
                <div className="Footerleft">
                  <div className="Footerlefttop">聯絡我們</div>
                  <div className="Footerleftbottom">
                    <div className="Footer-Text1-3 ">
                      客服信箱 : adadadad@iii.com.tw
                    </div>
                    <div className="Footer-Text1-2">
                      客服專線 : (02)29xx-xxx-xxx
                    </div>
                  </div>
                </div>
                <div className="Footerright">
                  <div className="Footerrighttop">關於我們</div>
                  <div className="Footerrightbottom">
                    <div className="Footer-Text2-3">提供服務</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex col-sm-2">
              <div className="Footer-fbLogo">
                <img
                  className="fbLogo"
                  src={require('../images/fb-logo.svg')}
                />
              </div>
              <div className="Footer-ttLogo">
                <img
                  className="ttLogo"
                  src={require('../images/tt-logo.svg')}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
