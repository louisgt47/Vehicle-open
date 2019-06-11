import React, { Component } from 'react'
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './Agent_00_About.css'
import $ from 'jquery'
import NavMember from '../basic/NavMember'
import Footer from '../basic/Footer'

class Agent_00_About extends Component {
  state = {}

  componentWillMount = async () => {}
  componentDidMount = async () => {
    // var picPosition = $('#fixBtnToAgent').offset().top
    // $(window).scroll(function() {
    //   console.log(picPosition)
    //   var scrollTop = $(this).scrollTop()
    //   if (scrollTop > picPosition - 400) {
    //     $('#fixBtnToAgent').addClass('active')
    //   } else {
    //     $('#fixBtnToAgent').removeClass('active')
    //   }
    // })
  }
  gotoAgent = () => {
    this.props.history.push('/agent_01')
  }
  //--------------------------------------------------------------------------------

  render() {
    const top = {
      marginTop: '195px',
    }
    return (
      <>
        <NavMember />

        {/* <section className="sectionAll"> */}
        <section className="sectionInfo" style={top}>
          <div className="containerInfo">
            <div className="rowInfo">
              <div className="InfoTitle">
                <h1>代駕服務說明</h1>
              </div>
              <div className="InfoImg">
                <p className="putImg">
                  {' '}
                  <img
                    src="http://localhost:3000/image/agentInfo/張明明5c945a08a9ff6.jpg"
                    className="agentInfoImg"
                    alt="代駕介紹頁"
                  />
                </p>
                <p className="putText">
                  <h3 className="InfoText">
                    代駕服務系提供專業的司機，駕駛您的愛車，
                    為您連人帶車送往指定地點。
                  </h3>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionFlow">
          <div className="containerFlow">
            <div className="rowFlow">
              <div className="FlowTitle">
                <h1>代駕服務流程</h1>
              </div>
              <div className="FlowImg">
                <div className="putImg1-outer">
                  <p className="putImg1">
                    {' '}
                    <img
                      src="http://localhost:3000/image/agentInfo/代駕介紹頁-02.png"
                      className="agentFlowImg"
                      alt="流程A"
                    />
                    <span className="agentFlowText">
                      打開手機版網頁，填寫代駕 訂單，選擇司機，發送請求。
                      <br />
                    </span>
                  </p>
                  <p className="putImg1">
                    {' '}
                    <img
                      src="http://localhost:3000/image/agentInfo/代駕介紹頁-03.png"
                      className="agentFlowImg"
                      alt="流程A"
                    />
                    <span className="agentFlowText">
                      司機接收訂單後，將主動與您 連絡，確認您的所在位置，並
                      於抵達時連絡以確認身分。{' '}
                    </span>
                  </p>
                </div>
                <div className="putImg1-outer">
                  <p className="putImg1">
                    {' '}
                    <img
                      src="http://localhost:3000/image/agentInfo/代駕介紹頁-04.png"
                      className="agentFlowImg"
                      alt="流程A"
                    />
                    <span className="agentFlowText">
                      為確保雙方權益，將先檢查車 況，隨後便可安心將鑰匙交付
                      司機，開車載您前往目的地。{' '}
                    </span>
                  </p>
                  <p className="putImg1">
                    {' '}
                    <img
                      src="http://localhost:3000/image/agentInfo/代駕介紹頁-05.png"
                      className="agentFlowImg"
                      alt="流程A"
                    />
                    <span className="agentFlowText">
                      抵達地點後，系統將顯示里 程與金額，並確認付款，讓
                      您與愛車，一起平安 到家。{' '}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionInfo">
          <div className="containerInfo">
            <div className="rowInfo">
              <div className="InfoTitle">
                <h1>代駕計費標準</h1>
              </div>
              <div className="InfoImg">
                <p className="putImg">
                  {' '}
                  <img
                    src="http://localhost:3000/image/agentInfo/代駕介紹頁-計費.png"
                    className="agentInfoImg"
                    alt="代駕介紹頁"
                  />
                </p>
                <p className="putText">
                  <h3 className="InfoText">
                    1. 行駛未超過10公里，一律以450元計費。
                    <br />
                    2. 行駛超過10公里，每公里加收40元。
                  </h3>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionWarning">
          <div className="containerWarning">
            <div className="rowInfo">
              <div className="InfoTitle2">
                <h1>代駕服務注意事項</h1>
              </div>
              <div className="agentWarning">
                <h3 className="warningText">
                  1. 如需使用代駕服務，請使用手機進行操作。
                  <br />
                  2. 使用手機登入時，請先開啟定位功能。
                  <br />
                  3. 請遵守本服務之一切規範。
                  <br />
                  4. 如有其他問題，請洽客服專線，我們有專人為您服務。
                </h3>
              </div>
              <div className="wantToAgent" />
            </div>
          </div>
        </section>

        {/* <div className="putBtnGoToAgent">
              {' '}
              <button
                id="fixBtnToAgent"
                className="position-absolute btn btn-success"
                // className="fixBtnToAgent btn btn-success"
                onClick={this.gotoAgent}
              >
                尋找代駕
              </button>
            </div> */}
        {/* </section> */}
        {/* </section> */}
        <Footer />
      </>
    )
  }
}

export default Agent_00_About
