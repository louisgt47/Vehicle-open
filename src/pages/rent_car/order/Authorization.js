import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col, Button, Form, Card, Image } from 'react-bootstrap'
import NavMember from '../../basic/NavMember'
import Footer from '../../basic/Footer'

import img2 from './img/img2.svg'

class Authorization extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderDate: this.props.location.state.orderDate,
      total: this.props.location.state.total,

      orderNo: this.props.location.state.orderNo,
      total: this.props.location.state.total,
      orderDate: this.props.location.state.orderDate,
      pBrand: this.props.location.state.pBrand,
      shopName: this.props.location.state.shopName,
      pModel: this.props.location.state.pModel,
      startDate: this.props.location.state.startDate,
      endDate: this.props.location.state.endDate,
      rentcarStatus: this.props.location.state.rentcarStatus,
      startPlace: this.props.location.state.startPlace,
      rentAddress: this.props.location.state.rentAddress,
      endPlace: this.props.location.state.endPlace,

      cardNo1: this.props.location.state.cardNo1,
      cardNo2: this.props.location.state.cardNo2,
      cardNo3: this.props.location.state.cardNo3,
      cardNo4: this.props.location.state.cardNo4,
      code: 0,
    }

    this.routeChange = this.routeChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = async event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    // if(name==='orderDate'){
    //   let d = new Date()
    //   let year = d.getFullYear()
    //   let month = d.getMonth()+1
    //   let day = d.getDate()

    //   let output = year + '-' +  month + '-' + day
    //   //  console.log(output)

    //   this.setState({
    //     orderDate: 'output',
    //   })
    // }

    if (name === 'createCode') {
      let mem = Math.floor(Math.random() * 9000) + 1000
      await this.setState({
        code: mem,
      })
    }
    // 分別更新不同 name 欄位的 state
    await this.setState({
      [name]: value,
    })
  }

  routeChange = async () => {
    let path = `/Order_Finish`
    const location = {
      pathname: '/Order_Finish',
      state: {
        orderNo: this.state.orderNo,
        pBrand: this.state.pBrand,
        shopName: this.state.shopName,
        pModel: this.state.pModel,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        rentcarStatus: this.state.rentcarStatus,
        startPlace: this.state.startPlace,
        rentAddress: this.state.rentAddress,
        endPlace: this.state.endPlace,
        total: this.state.total,
        orderDate: this.state.orderDate,
      },
    }

    const data = {
      orderNo: this.state.orderNo,
    }
    try {
      const response = await fetch('http://localhost:4000/orderUpdate', {
        body: JSON.stringify(data),
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject6 = await response.json()

      console.log(jsonObject6)
      // await this.setState({ shopAddress: jsonObject3 })
    } catch (e) {
      console.log(e)
    } finally {
    }
    this.props.history.push(location)
  }

  render() {
    // let d = new Date(this.state.orderDate)
    // let year = d.getFullYear()
    // let month = d.getMonth() + 1
    // let day = d.getDate()

    // const output = year + '-' + month + '-' + day
    const size = {
      marginTop: '120px',
      marginBottom: '50px',
    }
    return (
      <>
        <NavMember />
        <Container style={size}>
          <Row>
            <Col sm={12}>
              <h1>線上付款-信用卡授權驗證</h1>
            </Col>
            <Col sm={7}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Form>
                      <Form.Group as={Row} controlId="Vehicle" name="Vehicle">
                        <Form.Label column sm={2}>
                          特約商店 :
                        </Form.Label>
                        <Form.Label column sm={2}>
                          Vehicle
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="total" name="total">
                        <Form.Label column sm={2}>
                          交易金額 :
                        </Form.Label>
                        <Form.Label column sm={2} name="total">
                          {this.state.total}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        controlId="orderDate"
                        name="orderDate"
                      >
                        <Form.Label column sm={2}>
                          交易日期 :
                        </Form.Label>
                        {/* <Form.Label column sm={5} name="orderDate" onChange = "this.handleInputChange">
                        {this.state.date.toLocaleTimeString()}
                        </Form.Label> */}
                        {/* <input
                          name="orderDate"
                          value={this.state.orderDate}
                          onChange={this.handleInputChange}
                        /> */}
                        <Form.Label column sm={2} name="orderDate">
                          {/* {output} */}
                          {this.state.orderDate}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="cardNo" name="cardNo">
                        <Form.Label column sm={2}>
                          信用卡號 :
                        </Form.Label>
                        <Form.Label column sm={10} name="cardNo1" maxLength="4">
                          {this.state.cardNo1}-{this.state.cardNo2}-
                          {this.state.cardNo3}-{this.state.cardNo4}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="code" name="code">
                        <Form.Label column sm={2}>
                          交易碼 :
                        </Form.Label>
                        <Form.Label>
                          <input
                            type="password"
                            name="code"
                            width="10px"
                            value={this.state.code ? this.state.code : ''}
                          />

                          <div>
                            <Button
                              name="createCode"
                              className="text-center"
                              variant="primary"
                              onClick={this.handleInputChange}
                            >
                              簡訊傳送交易碼
                            </Button>
                          </div>
                        </Form.Label>
                      </Form.Group>
                    </Form>
                  </Card.Text>
                  <Button
                    type="button"
                    className="text-center"
                    variant="primary"
                    onClick={this.routeChange}
                  >
                    送出
                  </Button>
                </Card.Body>
              </Card>
              <div>注意事項 ：</div>
              <div>
                請點選「簡訊傳送交易碼」，系統將於1~2分鐘內以簡訊傳送動態交易碼
                。 請檢視留存手機以取得動態交易認證碼並輸入送出 。
                若您無法完成交易或是未收到認證密碼，請與客服中心聯絡 。
              </div>
            </Col>
            <Col sm={5}>
              <Image src={img2} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  }
}

export default Authorization
