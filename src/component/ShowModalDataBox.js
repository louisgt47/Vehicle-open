import React from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
class ShowModalDataBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ShopListEditOn: '',
      shopNo: '',
      shopName: '',
      shopPhone: '',
      shopEmail: '',
      shopInfo: '',
      showModalInfo: false,
      showModalData: false,
      No: '',
    }
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:4000/islogin', {
      credentials: 'include',
      method: 'GET',
    })
    const jsonObject = await response.json()
    await this.setState({ No: jsonObject.No })
    var data = {
      shopNo: this.state.No,
    }
    console.log(data.key)
    try {
      const response = await fetch('http://localhost:4000/user_shop/card', {
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
          shopNo: jsonObject.shopNo,
          shopName: jsonObject.shopName,
          shopPhone: jsonObject.shopPhone,
          shopEmail: jsonObject.shopEmail,
          shopInfo: jsonObject.shopInfo,

          ori_commodity: jsonObject.data,
          ori_shopNo: jsonObject.shopNo,
          ori_shopName: jsonObject.shopName,
          ori_shopPhone: jsonObject.shopPhone,
          ori_shopEmail: jsonObject.shopEmail,
          ori_shopInfo: jsonObject.shopInfo,
        }
        //, localStorage.clear()
      )
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
  handleEditCardSubmit = event => {
    event.preventDefault()
    var data = {
      shopNo: this.state.shopNo,
      shopName: this.state.shopName,
      shopPhone: this.state.shopPhone,
      shopEmail: this.state.shopEmail,
    }
    console.log(data)
    fetch('http://localhost:4000/user_shop/cardDataEdit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj.message)
        if (obj.success === true) {
          alert(obj.message)
        } else {
          alert(obj.message)
        }
      })
      .then(window.location.reload())
  }

  logChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>會員資料編輯</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="p-1">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  車商名稱
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="shopName"
                value={this.state.shopName}
                onChange={this.logChange}
              />
            </InputGroup>
            <br />
            <InputGroup className="p-1">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  商家E-MAIL
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="shopEmail"
                value={this.state.shopEmail}
                onChange={this.logChange}
              />
            </InputGroup>
            <br />
            <InputGroup className="p-1">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  商家電話
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="shopPhone"
                value={this.state.shopPhone}
                onChange={this.logChange}
              />
            </InputGroup>
            <br />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" data-dismiss="modal">
            關閉
          </Button> */}
            <Button variant="primary" onClick={this.handleEditCardSubmit}>
              儲存
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ShowModalDataBox
