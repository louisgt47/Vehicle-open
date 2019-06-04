import React from 'react'
import NavMember from '../basic/NavMember'
import Footer from '../basic/Footer'
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
      <>
        <div className="">
          <NavMember />
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
        <Footer />
      </>
    )
  }
}

export default Shop_add
