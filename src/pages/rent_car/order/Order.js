import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  ButtonGroup,
  Form,
  Image,
  Card,
} from 'react-bootstrap'
import NavMember from '../../basic/NavMember'
import Footer from '../../basic/Footer'
import img1 from './img/img1.svg'
import { async } from 'q'
class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: [],
      commoditydata: [],
      mNo: 0,
      mName: '',
      shopName: '',
      shopAddress: [],
      pBrand: '',
      pModel: '',
      pRent: 3000,
      orderNo: '',
      orderDate: +new Date(),
      startDate: '',
      endDate: '',
      rentcarStatus: '',

      rentAddress: '',
      endPlace: '',
      deliveryFee: '',
      total: '',
      orderstate: 0,
      orderFinish: 0,
      // startPlace: false,
      startPlace: '',
      rentAddressState: false,
    }
    this.routeChange = this.routeChange.bind(this)
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:4000/member', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject5 = await response.json()

      console.log(jsonObject5)
      // await this.setState({ commoditydata: jsonObject2 })
      await this.setState({
        mNo: jsonObject5.member[0].mNo,
        mName: jsonObject5.member[0].mName,
      })
    } catch (e) {
      console.log(e)
    } finally {
    }

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
      await this.setState({
        orderNo: jsonObject.order[jsonObject.order.length - 1].orderNo + 1,
      })
    } catch (e) {
      console.log(e)
    } finally {
    }

    try {
      const response = await fetch(
        `http://localhost:4000/commoditydata?pNo=${+this.props.match.params
          .pNo}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject2 = await response.json()

      // console.log(jsonObject2)
      // await this.setState({ commoditydata: jsonObject2 })
      await this.setState({
        pNo: jsonObject2.data[0].pNo,
        pBrand: jsonObject2.data[0].pBrand,
        shopName: jsonObject2.data[0].shopName,
        pModel: jsonObject2.data[0].pModel,
        pRent: jsonObject2.data[0].pRent,
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
    try {
      const response = await fetch('http://localhost:4000/shopAddress', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject3 = await response.json()

      console.log(jsonObject3)
      // await this.setState({ shopAddress: jsonObject3 })
      await this.setState({
        shopAddress: jsonObject3,
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  handleInputChange = async event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    let deliveryFee = 0

    if (name === 'rentcarStatus') {
      if (+value === 1) {
        deliveryFee = 500
        this.setState({ startPlace: '' })
        this.setState({ rentAddressState: true })
      } else {
        this.setState({ startPlace: true })
        this.setState({ rentAddressState: '' })
      }
      await this.setState({
        deliveryFee: deliveryFee,
      })
    }

    await this.setState({
      [name]: value,
    })

    if (
      name === 'startDate' ||
      name === 'endDate' ||
      name === 'rentcarStatus'
    ) {
      let d1 = +new Date(this.state.startDate)
      let d2 = +new Date(this.state.endDate)
      let d3 = Math.floor((d2 - d1) / 86400000)
      let total = 0
      let pRent = this.state.pRent
      console.log(d1, d2, d3, pRent)
      if (
        this.state.startDate !== '' &&
        this.state.endDate !== '' &&
        this.state.rentcarStatus !== '' &&
        this.state.endDate > this.state.startDate
      )
        this.setState({
          total: +pRent * d3 + deliveryFee,
        })
    }
  }

  routeChange = async () => {
    let path = '/Pay'
    let od = new Date(this.state.orderDate)
    let orderDate =
      od.getFullYear() + '-' + (od.getMonth() + 1) + '-' + od.getDate()
    const data = {
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
      deliveryFee: this.state.deliveryFee,
      total: this.state.total,

      mNo: this.state.mNo,
      mName: this.state.mName,
      // orderDate: this.state.orderDate,
      orderDate: orderDate,
      pNo: this.state.pNo,
      pRent: this.state.pRent,
      orderstate: this.state.orderstate,
      orderFinish: this.state.orderFinish,
    }
    try {
      const response = await fetch('http://localhost:4000/orderAdd', {
        body: JSON.stringify(data),
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject4 = await response.json()

      console.log(jsonObject4)
      // await this.setState({ shopAddress: jsonObject3 })
    } catch (e) {
      console.log(e)
    } finally {
    }

    const location = {
      pathname: '/Pay',
      state: {
        orderNo: this.state.orderNo,
        total: this.state.total,
        orderDate: orderDate,

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

  routeChange2 = () => {
    let path = '/productList'
    this.props.history.push(path)
  }

  render() {
    // 取車地點還車地點取資料塞進頁面
    let options = this.state.shopAddress.map(val => {
      return <option>{val}</option>
    })
    const size = {
      marginTop: '120px',
      marginBottom: '50px',
    }
    return (
      <>
        <NavMember />
        <Container style={size}>
          <Row className="justify-content-md-center">
            <Col md="auto" sm={12}>
              <h1>租車訂單</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Form name="form1" action="/Pay" method="POST">
                      <Form.Group as={Row} controlId="orderNo">
                        <Form.Label column sm={2}>
                          訂單編號 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Label column sm={2} name="orderNo">
                            {this.state.orderNo}
                          </Form.Label>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="pBrand">
                        <Form.Label column sm={2}>
                          廠牌 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Label column sm={10} name="pBrand">
                            {this.state.pBrand}
                          </Form.Label>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="shopName">
                        <Form.Label column sm={2}>
                          車商 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Label column sm={10} name="shopName">
                            {this.state.shopName}
                          </Form.Label>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="pModel">
                        <Form.Label column sm={2}>
                          車型 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Label column sm={10} name="pModel">
                            {this.state.pModel}
                          </Form.Label>
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        controlId="startDate"
                        onChange={this.handleInputChange}
                      >
                        <Form.Label column sm={2}>
                          取車時間 :
                        </Form.Label>
                        <Col sm={10}>
                          <input type="date" name="startDate" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        controlId="endDate"
                        onChange={this.handleInputChange}
                      >
                        <Form.Label column sm={2}>
                          還車時間 :
                        </Form.Label>
                        <Col sm={10}>
                          <input type="date" name="endDate" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="rentcarStatus">
                        <Form.Label column sm={2}>
                          取車方式 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Group
                            as={Col}
                            controlId="rentcarStatus"
                            name="rentcarStatus"
                          >
                            <Form.Control
                              as="select"
                              name="rentcarStatus"
                              onChange={this.handleInputChange}
                            >
                              <option value="">請選擇取車方式</option>
                              <option name="rentcarStatus" value="0">
                                自取車
                              </option>
                              <option name="rentcarStatus" value="1">
                                代駕取車
                              </option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="startPlace"
                        onChange={this.handleInputChange}
                        style={{
                          display: this.state.startPlace ? 'block' : 'none',
                        }}
                      >
                        <Form.Label column sm={2}>
                          取車地點 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control as="select" name="startPlace">
                            <option value="">請選擇取車地點</option>
                            {options}
                          </Form.Control>
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="rentAddress"
                        onChange={this.handleInputChange}
                        style={{
                          display: this.state.rentAddressState
                            ? 'block'
                            : 'none',
                        }}
                      >
                        <Form.Label column sm={2}>
                          指定地點 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="請輸入指定取車地點"
                            name="rentAddress"
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        controlId="endPlace"
                        onChange={this.handleInputChange}
                      >
                        <Form.Label column sm={2}>
                          還車地點 :
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control as="select" name="endPlace">
                            <option value="">請選擇還車地點</option>
                            {options}
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        controlId="deliveryFee"
                        name="deliveryFee"
                        onChange={this.handleInputChange}
                      >
                        <Form.Label column sm={2}>
                          車輛送達費用 :
                        </Form.Label>
                        <Col>
                          <input
                            type="text"
                            name="deliveryFee"
                            value={this.state.deliveryFee}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        controlId="total"
                        name="total"
                        onChange={this.handleInputChange}
                      >
                        <Form.Label column sm={2}>
                          總金額 :
                        </Form.Label>
                        <Col>
                          <input
                            type="text"
                            name="total"
                            value={
                              isNaN(this.state.total) ? '' : this.state.total
                            }
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="mNo"
                        name="mNo"
                        onChange={this.handleInputChange}
                      >
                        <Col>
                          <input
                            type="hidden"
                            name="mNo"
                            value={this.state.mNo}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="mName"
                        name="mName"
                        onChange={this.handleInputChange}
                      >
                        <Col>
                          <input
                            type="hidden"
                            name="mName"
                            value={this.state.mName}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="pNo"
                        name="pNo"
                        onChange={this.handleInputChange}
                      >
                        <Col>
                          <input
                            type="hidden"
                            name="pNo"
                            value={this.state.pNo}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="pRent"
                        name="pRent"
                        onChange={this.handleInputChange}
                      >
                        <Col>
                          <input
                            type="hidden"
                            name="pRent"
                            value={this.state.pRent}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="orderDate"
                        name="orderDate"
                        onChange={this.handleInputChange}
                      >
                        <Col />
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="orderstate"
                        name="orderstate"
                        onChange={this.handleInputChange}
                      >
                        <Col>
                          <input
                            type="hidden"
                            name="orderstate"
                            value={this.state.orderstate}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="orderFinish"
                        name="orderFinish"
                        onChange={this.handleInputChange}
                      >
                        <Col>
                          <input
                            type="hidden"
                            name="orderFinish"
                            value={this.state.orderFinish}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Col sm={{ span: 18, offset: 1 }}>
                          <Button
                            type="button"
                            className="submit"
                            onClick={this.routeChange}
                          >
                            送出訂單
                          </Button>
                        </Col>
                        <Col sm={{ offset: 1 }}>
                          <Button
                            type="button"
                            name="cancel"
                            onClick={this.routeChange2}
                          >
                            取消租車
                          </Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={5}>
              <Image src={img1} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  }
}

export default Order
