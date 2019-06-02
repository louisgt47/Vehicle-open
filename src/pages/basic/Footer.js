import React, { Component } from 'react'

// import './App.css'
class Footer extends Component {
  render() {
    const FooterBgColor = {
      background: '#434948',
      color: '#fff',
    }
    const FooterFColorG = {
      color: ' #6eb7b0',
    }
    const FooterFColorW = {
      color: ' #fff',
    }
    const footerLogo = {
      height: '150px',
    }
    return (
      <footer className="footer-area">
        <div className="footer-top bg-1 " style={FooterBgColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-widget footer-logo">
                  <img
                    src="http://localhost:3000/images/vehicleLogo/logo-w.png"
                    alt=""
                    className="footerLogo"
                    style={footerLogo}
                  />
                  <p>為您提供最便捷的租車與第三方代駕服務</p>
                  <h4>工作時間: </h4>
                  <span>Mon - Sat 8:00 - 18:00 (Sunday off)</span>
                  <ul>
                    <li>
                      <a href="#" style={FooterFColorG}>
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={FooterFColorG}>
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={FooterFColorG}>
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={FooterFColorG}>
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer-widget footer-contact">
                  <h4 className="widget-title">聯絡資訊</h4>
                  <ul>
                    <li>
                      <i className="fa fa-home" /> 台北市大安區復興南路一段390號
                      2,3號
                    </li>
                    <li>
                      <i className="fa fa-phone" /> 02-2257-7575
                    </li>
                    <li>
                      <i className="fa fa-fax" /> vehicle@email.com
                    </li>
                    <li>
                      <i className="fa fa-envelope" /> linus@email.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-12">
                <div className="footer-widget footer-menu">
                  <h4 className="widget-title">網站服務</h4>
                  <ul>
                    <li>
                      <a href="#" style={FooterFColorW}>
                        首頁
                      </a>
                    </li>
                    <li>
                      <a href="about.html" style={FooterFColorW}>
                        關於我們
                      </a>
                    </li>
                    <li>
                      <a href="service.html" style={FooterFColorW}>
                        開始租車
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" style={FooterFColorW}>
                        尋找代駕
                      </a>
                    </li>
                    <li>
                      <a href="#" style={FooterFColorW}>
                        Q&A專區
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer-widget newsletter">
                  <h4 className="widget-title">其他資訊</h4>
                  <ul>
                    <li>
                      <a href="#" style={FooterFColorW}>
                        全台據點
                      </a>
                    </li>
                    <li>
                      <a href="#" style={FooterFColorW}>
                        服務條款
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bootem">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p style={FooterFColorW}>
                  ©{' '}
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | Vehicle
                  <a href="https://colorlib.com" target="_blank" />
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
