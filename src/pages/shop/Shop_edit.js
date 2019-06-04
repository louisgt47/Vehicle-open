import React from 'react'
import NavMember from '../basic/NavMember'
import Footer from '../basic/Footer'
import BgGreenTop from '../../component/BgGreenTop'
import BgGreenBot from '../../component/BgGreenBot'
import { Container, Row, Col } from 'react-bootstrap'
import BotRowEdit from '../../component/BotRowEdit'
import '../../css/Shop_addEditTopRow.css'

class Shop_edit extends React.Component {
  constructor() {
    super()
    this.state = {
      pNo: '',
      pBrand: '',
      pModel: '',
      pSit: '',
      pType: '',
      pOdo: '',
      pCc: '',
      pAgeYear: '',
      pAgeMon: '',
      pRent: '',
      rentState: '',
      rentAssign: '',
      shopAddressSelect: '',
      pState: '',
      pIntro: '',
    }
  }

  async componentDidMount() {
    var itemPno = localStorage.getItem('pNo')
    var data = {
      key: itemPno,
    }
    console.log(data.key)
    try {
      const response = await fetch('http://localhost:4000/commodity/pNo', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      console.log('jsonObject', jsonObject)
      await this.setState(
        {
          commodity: jsonObject.data,
          pNo: jsonObject.pNo,
          pBrand: jsonObject.pBrand,
          pModel: jsonObject.pModel,
          pSit: jsonObject.pSit,
          pType: jsonObject.pType,
          pOdo: jsonObject.pOdo,
          pCc: jsonObject.pCc,
          pAgeYear: jsonObject.pAgeYear,
          pAgeMon: jsonObject.pAgeMon,
          pRent: jsonObject.pRent,
          rentState: jsonObject.rentState,
          rentAssign: jsonObject.rentAssign,
          shopAddressSelect: jsonObject.shopAddressSelect,
          pState: jsonObject.pState,
          pIntro: jsonObject.pIntro,
          pImg: jsonObject.pImg,
        }
        //, localStorage.clear()
      )
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  render() {
    return (
      <>
        <NavMember />
        <div className="shop_addBg">
          <BgGreenTop />
          <Container>
            <Row>
              <Col>
                <BotRowEdit
                  key={this.state.pNo}
                  pBrand={this.state.pBrand}
                  pNo={this.state.pNo}
                  pModel={this.state.pModel}
                  pSit={this.state.pSit}
                  pType={this.state.pType}
                  pOdo={this.state.pOdo}
                  pCc={this.state.pCc}
                  pAgeYear={this.state.pAgeYear}
                  pAgeMon={this.state.pAgeMon}
                  pRent={this.state.pRent}
                  rentState={this.state.rentState}
                  rentAssign={this.state.rentAssign}
                  shopAddressSelect={this.state.shopAddressSelect}
                  pState={this.state.pState}
                  pIntro={this.state.pIntro}
                  pImg={this.state.pImg}
                />
              </Col>
            </Row>
          </Container>
          <BgGreenBot />
        </div>{' '}
        <Footer />
      </>
    )
  }
}

export default Shop_edit
