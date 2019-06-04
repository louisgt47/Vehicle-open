import React from 'react'
import '../css/HeadPic.css'
import '../css/ShopListCardBotBg.css'
import '../css/ShopListCardTopBg.css'
import '../css/ShopListEditButton.css'
import { FaHeart, FaEdit } from 'react-icons/fa'
import ShowModalInfoBox from './ShowModalInfoBox'
import ShowModalDataBox from './ShowModalDataBox'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'

class ShopListCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ShopListEditOn: '',
      shopNo: this.props.shopNo,
      shopName: this.props.shopName,
      shopPhone: this.props.shopPhone,
      shopEmail: this.props.shopEmail,
      shopInfo: this.props.shopInfo,
      showModalInfo: false,
      showModalData: false,
      shopImg: [],
      ImgFile: '',
      imgsrc: '',
      rate: [],
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
          shopImg: jsonObject.shopImg,
        }
        //, localStorage.clear()
      )
    } catch (e) {
      console.log(e)
    } finally {
      try {
        const response = await fetch(
          'http://localhost:4000/user_shop/cardrate',
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }),
          }
        )

        if (!response.ok) throw new Error(response.statusText)

        const jsonObject = await response.json()

        console.log('jsonObject', jsonObject)

        await this.setState({
          rate: jsonObject.avg,
        })
      } catch (e) {
        console.log(e)
      } finally {
        // console.log(this.state.rate)
      }
    }
  }
  handleModalInfoClose = () => {
    this.setState({ showModalInfo: false })
  }
  handleModalInfoShow = () => {
    this.setState({ showModalInfo: true })
  }
  handleModalDataClose = () => {
    this.setState({ showModalData: false })
  }
  handleModalDataShow = () => {
    this.setState({ showModalData: true })
  }

  ShopListEditOff = () => {
    this.setState(
      {
        ShopListEditOn: false,
      },
      () => {
        const e = this.state.ShopListEditOn
        this.props.ShopListEdit(e)
      }
    )
  }
  ShopListEditOn = () => {
    this.setState(
      {
        ShopListEditOn: true,
      },
      () => {
        const e = this.state.ShopListEditOn
        this.props.ShopListEdit(e)
      }
    )
  }
  handleModalDataInputChange = event => {
    let value = event.target.value
    const name = event.target.name

    this.setState({
      shopName: event.target.shopName.value,
      shopEmail: event.target.shopEmail.value,
      shopPhone: event.target.shopPhone.value,
    })
  }

  uploadPic = async e => {
    var file = e.target.files[0]
    let reader = new FileReader()
    // await reader.readAsDataURL(file)
    // reader.onload = () => {
    //   this.setState({ ImgFile: file })
    // }

    await this.setState({ ImgFile: file })
    var formData = new FormData()
    formData.append('File', this.state.ImgFile)
    formData.append('File', this.state.shopNo)

    const response = await fetch('http://localhost:4000/shoplistcardpic', {
      method: 'POST',
      body: formData,
    })
    if (response.statusText === 'OK') {
      alert('圖片更新完成')
    } else {
      alert('圖片更新失敗')
      throw new Error(response.statusText)
    }
  }

  render() {
    return (
      <>
        <ShowModalInfoBox
          shopNo={this.state.shopNo}
          shopName={this.state.shopName}
          shopPhone={this.state.shopPhone}
          shopEmail={this.state.shopEmail}
          shopInfo={this.state.shopInfo}
          showModalInfo={this.state.showModalInfo}
          show2={this.state.showModalInfo}
          handleClose2={this.handleModalInfoClose}
        />
        <ShowModalDataBox
          shopNo={this.state.shopNo}
          shopName={this.state.shopName}
          shopPhone={this.state.shopPhone}
          shopEmail={this.state.shopEmail}
          shopInfo={this.state.shopInfo}
          show={this.state.showModalData}
          showModalData={this.state.showModalData}
          handleClose={this.handleModalDataClose}
        />
        <div className="ShopListCard container">
          <div className="col-md-10 offset-md-1">
            <div className="d-flex ShopListCardTopBg justify-content-between ">
              <div className="col-md-2 row align-items-center justify-content-center">
                {this.state.ShopListEditOn ? (
                  <div className="ShopListCardEditButton">
                    <label className="upload_cover">
                      <input
                        className="upload_input "
                        type="file"
                        onChange={this.uploadPic.bind(this)}
                        accept="image/jpeg,image/jpg,image/gif,image/png"
                        encType="multipart/form-data"
                        name="File"
                      />
                      <FaEdit />
                    </label>
                  </div>
                ) : (
                  ''
                )}
                <img className="ShopListTHeadPic " src={this.state.shopImg} />
              </div>
              <div className="col-md-4 row align-items-center  ">
                <div className="ShopListCardEditButton">
                  {this.state.ShopListEditOn ? (
                    <div className="ShopListCardEditButton">
                      <FaEdit onClick={this.handleModalDataShow} />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="ShopListCardTopShopInfo textEllipsis">
                  {this.state.shopName}
                  <br />
                  {this.state.shopEmail}
                  <br />
                  {this.state.shopPhone}
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="ShopListCardEditButton">
                  {this.state.ShopListEditOn ? (
                    <div className="ShopListCardEditButton">
                      <FaEdit onClick={this.handleModalInfoShow} />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="ShopListCardTopShopInfo2 h-100 w-100">
                  {this.state.shopInfo}
                </div>
              </div>
            </div>
            <div className="ShopListCardBotBg">
              <p>評價/RATINGS</p>
              <div className="d-flex row justify-content-around">
                {/* <div className="d-flex align-items-baseline">
                  本周_4.1<p>(負評:2)</p>
                </div>
                <div className="d-flex align-items-baseline">
                  本月_4.3<p>(負評:2)</p>
                </div> */}
                <div className="d-flex align-items-baseline">
                  平均評價:{this.state.rate}
                  {/* {this.state.rate.map(item => (
                    <p>{item.rate}</p>
                  ))} */}
                  {/* <p>(負評:102)</p> */}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              {this.state.ShopListEditOn ? (
                <button
                  className="ShopListEditButton  col-sm-2 offset-sm-5 p-1 m-4 "
                  onClick={this.ShopListEditOff}
                >
                  關閉編輯
                </button>
              ) : (
                <button
                  className="ShopListEditButton  col-sm-2 offset-sm-5 p-1 m-4 "
                  onClick={this.ShopListEditOn}
                >
                  編輯資料
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ShopListCard
