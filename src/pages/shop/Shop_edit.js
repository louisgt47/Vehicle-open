import React from 'react'
import Nav from '../../component/Nav'
import BgGreenTop from '../../component/BgGreenTop'
import BgGreenBot from '../../component/BgGreenBot'
import { Container, Row, Col } from 'react-bootstrap'
import TopRow from '../../component/TopRow'
import BotRowEdit from '../../component/BotRowEdit'

class Shop_add extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <Nav />
        <div className="">
          <BgGreenTop />
          <Container>
            <Row>
              <Col>
                <TopRow />
              </Col>
            </Row>
            <Row>
              <Col>
                <BotRowEdit />
              </Col>
            </Row>
          </Container>
          <BgGreenBot />
        </div>
      </>
    )
  }
}

export default Shop_add
