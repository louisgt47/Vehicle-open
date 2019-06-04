import React from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
class ShowModalInfoBox extends React.Component {
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
      shopInfo: this.state.shopInfo,
    }
    console.log(data)
    fetch('http://localhost:4000/user_shop/cardInfoEdit', {
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
    const style = {
      height: '200px',
    }
    return (
      <>
        <Modal show={this.props.show2} onHide={this.props.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>會員介紹編輯</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="p-1">
              <FormControl
                style={style}
                name="shopInfo"
                as="textarea"
                aria-label="With textarea"
                value={this.state.shopInfo}
                onChange={this.logChange}
              />
            </InputGroup>
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

export default ShowModalInfoBox
