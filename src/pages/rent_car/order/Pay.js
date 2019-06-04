import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col, Button, Form, Card, Image } from 'react-bootstrap'
import img2 from './img/img2.svg'
import NavMember from '../../basic/NavMember'
import Footer from '../../basic/Footer'

class Pay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      formHorizontalRadios: '',
      cardNo1: '',
      cardNo2: '',
      cardNo3: '',
      cardNo4: '',
      cardDate1: '',
      cardDate2: '',
      code: '',
    }
    this.routeChange = this.routeChange.bind(this)
    console.log('props', this.props.location.state.orderNo)
    console.log('props', this.props.location.state.total)
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:4000/order', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      console.log(jsonObject)
      await this.setState({ order: jsonObject })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  handleInputChange = async event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    await this.setState({
      [name]: value,
    })
  }

  routeChange() {
    let path = `/Authorization`

    const data = {
      orderNo: this.props.location.state.orderNo,
      total: this.props.location.state.total,
      formHorizontalRadios: this.state.formHorizontalRadios,
      cardNo1: this.state.cardNo1,
      cardNo2: this.state.cardNo2,
      cardNo3: this.state.cardNo3,
      cardNo4: this.state.cardNo4,
      cardDate1: this.state.cardDate1,
      cardDate2: this.state.cardDate2,
      code: this.state.codcardNo2,
      orderDate: this.props.location.state.orderDate,
    }

    const location = {
      pathname: '/Authorization',
      state: {
        total: this.state.total,
        cardNo1: this.state.cardNo1,
        cardNo2: this.state.cardNo2,
        cardNo3: this.state.cardNo3,
        cardNo4: this.state.cardNo4,
        orderDate: this.state.orderDate,

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
      },
    }
    this.props.history.push(location)
  }

  render() {
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
              <h1>線上付款</h1>
            </Col>
            <Col sm={7}>
              本系統交易已加密認證，您的資料將被安全保護。此外，您輸入的資料除用為租車交易相關作業或因政府執法機關要求外，將不會透露給第三者做商業或其他用途。
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Form>
                      <Form.Group
                        as={Row}
                        controlId="orderNo"
                        className="text-center"
                      >
                        <Form.Label
                          column
                          sm={2}
                          name="orderNo"
                          onChange={this.handleInputChange}
                        >
                          訂單編號 :
                        </Form.Label>
                        {/* <span column sm={5}> */}
                        <Form.Label column sm={1} name="orderNo">
                          {this.state.orderNo}
                        </Form.Label>
                        {/* </span> */}
                      </Form.Group>
                    </Form>
                    <Form.Group as={Row} controlId="total" name="total">
                      <Form.Label column sm={2}>
                        交易金額 :
                      </Form.Label>
                      {/* <Form.Label column sm={2} name="total"> */}
                      <Form.Label column sm={2} name="total">
                        {this.state.total}
                      </Form.Label>
                      {/* </Form.Label> */}
                    </Form.Group>

                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={2}>
                        卡片種類 :
                      </Form.Label>
                      <Form.Label column sm={2}>
                        <Form.Check
                          type="radio"
                          label="Visa"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                          value="1"
                          onClick={this.handleInputChange}
                        />
                      </Form.Label>
                      <Form.Label column sm={2}>
                        <Form.Check
                          type="radio"
                          label="Master"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                          value="2"
                          onClick={this.handleInputChange}
                        />
                      </Form.Label>
                      <Form.Label column sm={2}>
                        <Form.Check
                          type="radio"
                          label="JCB"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios3"
                          value="3"
                          onClick={this.handleInputChange}
                        />
                      </Form.Label>
                    </Form.Group>

                    <Form.Group as={Row} controlId="cardNo" name="cardNo">
                      <Form.Label column sm={2}>
                        信用卡號 :
                      </Form.Label>
                      <Col>
                        <div className="col-xs-12">
                          <input
                            class="col-sm-2"
                            type="text"
                            name="cardNo1"
                            maxLength="4"
                            onChange={this.handleInputChange}
                          />
                          <span class="col-sm">-</span>
                          <input
                            class="col-sm-2"
                            type="text"
                            name="cardNo2"
                            maxLength="4"
                            onChange={this.handleInputChange}
                          />
                          <span class="col-sm">-</span>
                          <input
                            class="col-sm-2"
                            type="text"
                            name="cardNo3"
                            maxLength="4"
                            onChange={this.handleInputChange}
                          />
                          <span class="col-sm">-</span>
                          <input
                            class="col-sm-2"
                            type="text"
                            name="cardNo4"
                            maxLength="4"
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="cardDate" name="cardDate">
                      <Form.Label column sm={2}>
                        有效期限 :
                      </Form.Label>
                      <Col>
                        {/* <input type="text" name="cardDate" /> */}
                        <div className="col-xs-12">
                          <input
                            class="col-sm-2"
                            type="text"
                            name="cardDate1"
                            maxLength="2"
                            onChange={this.handleInputChange}
                          />
                          <span class="col-sm">/</span>
                          <input
                            class="col-sm-2"
                            type="text"
                            name="cardDate2"
                            maxLength="2"
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="code" name="code">
                      <Form.Label column sm={2}>
                        驗證碼 :
                      </Form.Label>
                      <Col>
                        <div className="col-xs-12">
                          <input
                            type="text"
                            name="code"
                            maxLength="3"
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </Col>
                    </Form.Group>
                  </Card.Text>
                  <Button
                    type="button"
                    className="text-center"
                    variant="primary"
                    onClick={this.routeChange}
                  >
                    付款
                  </Button>
                </Card.Body>
              </Card>
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

export default Pay
