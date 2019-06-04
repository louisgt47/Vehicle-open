import React from 'react'
import Nav from '../basic/NavMember'
import BgGreenTop from '../../component/BgGreenTop'
import BgGreenBot from '../../component/BgGreenBot'
import { Container, Row, Col } from 'react-bootstrap'
import BotRowAdd from '../../component/BotRowAdd'
import '../../css/Shop_addEditTopRow.css'
import CarPic1 from '../../images/car1.jpg'
import CarPic2 from '../../images/car1.jpg'

class Shop_add extends React.Component {
  constructor() {
    super()
    this.state = {
      preViewImgs: [],
    }
  }

  render() {
    return (
      <div className="">
        <Nav />
        <div className="shop_addBg">
          <BgGreenTop />
          <Container>
            <Row>
              <Col />
            </Row>
            <Row>
              <Col>
                <BotRowAdd />
              </Col>
            </Row>
          </Container>
          <BgGreenBot />
        </div>
      </div>
    )
  }
}

export default Shop_add
