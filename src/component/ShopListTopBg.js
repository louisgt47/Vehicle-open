import React from 'react'
import '../css/ShopListTopBg.css'
import { FaEdit } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'

class ShopListTopBg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ShopListEditOn: this.props.ShopListEditOn,
      shopNo: '',
      shopName: '',
      shopPhone: '',
      shopEmail: '',
      shopInfo: '',
      shopBgImg: [],
      ImgFile: '',
      rate: [],
      count: '',
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
          shopBgImg: jsonObject.shopBgImg,
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
        try {
          var data = {
            shopName: '佳昇汽車',
          }
          const response = await fetch(
            'http://localhost:4000/commodity/count',
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
            count: jsonObject.count,
          })
        } catch (e) {
          console.log(e)
        } finally {
          // console.log(this.state.rate)
        }
        // console.log(this.state.rate)
      }
    }
  }
  ShopListEditOn = () => {
    this.setState({
      ShopListEditOn: true,
    })
  }

  ShopListEditOff = () => {
    this.setState({
      ShopListEditOn: false,
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
    console.log(file)
    var formData = new FormData()
    formData.append('File', this.state.ImgFile)
    formData.append('File', this.state.shopNo)

    const response = await fetch('http://localhost:4000/shoplistbgpic', {
      method: 'POST',
      body: formData,
    })
    if (response.statusText === 'OK') {
      alert('背景圖片更新完成')
    } else {
      alert('背景圖片更新失敗')
      throw new Error(response.statusText)
    }
  }
  render() {
    return (
      <>
        <div
          className="ShopListTopBg align-items-center "
          style={{
            backgroundImage: `url(${this.state.shopBgImg})`,
          }}
        >
          {this.props.ShopListEditOn ? (
            <div className="ShopListCardTopEditButton">
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
          <div className="container d-flex justify-content-between h-100">
            <div className="col align-self-center">
              <p>{this.state.shopName}</p>
              {this.state.shopEmail}
            </div>
            <div className="col align-self-center ShopListTopBgTopRightText ">
              <div className="mb-2 mt-2">
                <p>總車數</p>
                {this.state.count}台車
              </div>
              <div className="mb-2 mt-2">
                <p>客戶評價</p>
                {this.state.rate}
              </div>
              {/* <div className="mb-2 mt-2">
                <p>總成交數</p>
                1500
              </div> */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ShopListTopBg
