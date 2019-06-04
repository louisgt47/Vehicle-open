import React from 'react'
import { Container, Row, Col, Button, Form, Image, Card } from 'react-bootstrap'
import img3 from './img/img3.svg'
import NavMember from '../../basic/NavMember'
import Footer from '../../basic/Footer'
class Order_Finish extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderNo: this.props.location.state.orderNo,
      pBrand: this.props.location.state.pBrand,
      shopName: this.props.location.state.shopName,
      pModel: this.props.location.state.pModel,
      startDate: this.props.location.state.startDate,
      endDate: this.props.location.state.endDate,
      rentcarStatus: this.props.location.state.rentcarStatus,
      startPlace: this.props.location.state.startPlace,
      rentAddress: this.props.location.state.rentAddress,
      endPlace: this.props.location.state.endPlace,
      total: this.props.location.state.total,
    }
  }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch('http://localhost:3001/order', {
  //       method: 'GET',
  //       headers: new Headers({
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       }),
  //     })

  //     if (!response.ok) throw new Error(response.statusText)

  //     const jsonObject = await response.json()

  //     console.log(jsonObject)
  //     await this.setState({ order: jsonObject })
  //   } catch (e) {
  //     console.log(e)
  //   } finally {
  //   }
  // }
  routeChange2 = () => {
    let path = '/productList'
    this.props.history.push(path)
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
              <h1>交易完成</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Form>
                      <Form.Group as={Row} controlId="orderNo">
                        <Form.Label column sm={2}>
                          訂單編號 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.orderNo}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="pBrand">
                        <Form.Label column sm={2}>
                          廠牌 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.pBrand}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="shopName">
                        <Form.Label column sm={2}>
                          車商 :
                        </Form.Label>
                        <Form.Label column sm={2}>
                          {this.state.shopName}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="pModel">
                        <Form.Label column sm={2}>
                          車型 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.pModel}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="startDate">
                        <Form.Label column sm={2}>
                          取車時間 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.startDate}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="endDate">
                        <Form.Label column sm={2}>
                          還車時間 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.endDate}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="rentcarStatus">
                        <Form.Label column sm={2}>
                          取車方式 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.rentcarStatus == 0
                            ? '自取車'
                            : '代駕取車'}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="startPlace"
                        style={{
                          display:
                            this.state.rentcarStatus == 0 ? 'block' : 'none',
                        }}
                      >
                        <Form.Label column sm={2}>
                          取車地點 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.startPlace}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="rentAddress"
                        style={{
                          display:
                            this.state.rentcarStatus == 1 ? 'block' : 'none',
                        }}
                      >
                        <Form.Label column sm={2}>
                          指定地點 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.rentAddress}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Row} controlId="endPlace">
                        <Form.Label column sm={2}>
                          還車地點 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.endPlace}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group as={Row} controlId="total" name="total">
                        <Form.Label column sm={2}>
                          總金額 :
                        </Form.Label>
                        <Form.Label column sm={10}>
                          {this.state.total} 元
                        </Form.Label>
                      </Form.Group>
                    </Form>
                    <Form.Group as={Row}>
                      <Col sm={{ span: 18, offset: 1 }}>
                        <Button
                          type="submit"
                          name="submit"
                          className="text-center"
                          variant="primary"
                          onClick={this.routeChange2}
                        >
                          回商品頁
                        </Button>
                      </Col>
                    </Form.Group>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={5}>
              <Image src={img3} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  }
}

export default Order_Finish
