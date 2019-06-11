import React from 'react'
import '../css/Shop_addEditBotRow.css'
import BotRowAddButton from './BotRowAddButton'
import BotRowEditButton from './BotRowEditButton'
import defaultPic from '../images/defaultPic.png'
import CarPic2 from '../images/car1.jpg'
import { Form, Button } from 'react-bootstrap'

class BotRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pBrand: '',
      pModel: '',
      ImgFile: [],
      preViewImgs: [],
      shopName: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:4000/islogin', {
      credentials: 'include',
      method: 'GET',
    })
    const jsonObject = await response.json()
    await this.setState({ shopName: jsonObject.Name })
  }
  handleFilesChange = event => {
    // console.log(event.target.files)
    const files = event.target.files

    var _this = this
    let preViewImgs = [] // 建立新陣列

    for (let i = 0; i < files.length; i++) {
      var reader = new FileReader()
      reader.readAsDataURL(files[i]) //read file data as a base64 encoded string.
      // reader loaded
      reader.addEventListener('load', function(e) {
        // console.log(e.target.result)
        //
        preViewImgs.push(e.target.result)
        _this.setState({ preViewImgs: preViewImgs })
      })
    }
  }
  // handleSubmit = () => {
  //   // 文字或圖片 其中一個有內容 才能送出
  //   if (this.inputText.innerText.trim() || this.inputFiles.files.length > 0) {
  //     // 文字丟進 formData
  //     var formData = new FormData()
  //     formData.append('memberID', this.props.userInfo.body.member_id)
  //     formData.append('content', this.inputText.innerText)
  //     // 圖片丟進 formData
  //     for (let i = 0; i < this.inputFiles.files.length; i++) {
  //       formData.append('photos', this.inputFiles.files[i])
  //     }
  //     // Fetch
  //     fetch('http://localhost:3002/instagram/newStory', {
  //       method: 'POST',
  //       body: formData,
  //       credentials: 'include',
  //     })
  //       .then(res => res.json())
  //       .then(obj => {
  //         // 寫入成功 關閉編輯視窗 清空state
  //         if (obj.success) {
  //           this.inputText.innerText = ''
  //           this.setState(
  //             { isEditing: false, content: '', preViewImgs: [] },
  //             () => {
  //               //刷新父元素頁面
  //               this.props.handleReFresh()
  //             }
  //           )
  //         }
  //       })
  //   }
  // }
  handleSubmit = event => {
    event.preventDefault()
    var data = new FormData()
    data.append('pBrand', event.target.pBrand.value)
    data.append('pModel', event.target.pModel.value)
    data.append('pSit', event.target.pSit.value)
    data.append('pType', event.target.pType.value)
    data.append('pOdo', event.target.pOdo.value)
    data.append('pCc', event.target.pCc.value)
    data.append('pAgeYear', event.target.pAgeYear.value)
    data.append('pAgeMon', event.target.pAgeMon.value)
    data.append('pRent', event.target.pRent.value)
    data.append('rentState', event.target.rentState.value)
    data.append('rentAssign', event.target.rentAssign.value)
    data.append('shopAddressSelect', event.target.shopAddressSelect.value)
    data.append('pState', event.target.pState.value)
    data.append('pIntro', event.target.pIntro.value)
    data.append('shopName', this.state.shopName)
    for (let i = 0; i < this.inputFiles.files.length; i++) {
      data.append('pImg', this.inputFiles.files[i])
    }

    // data = {
    //   pBrand: event.target.pBrand.value,
    //   pModel: event.target.pModel.value,
    //   pSit: event.target.pSit.value,
    //   pType: event.target.pType.value,
    //   pOdo: event.target.pOdo.value,
    //   pCc: event.target.pCc.value,
    //   pAgeYear: event.target.pAgeYear.value,
    //   pAgeMon: event.target.pAgeMon.value,
    //   pRent: event.target.pRent.value,
    //   rentState: event.target.rentState.value,
    //   rentAssign: event.target.rentAssign.value,
    //   shopAddressSelect: event.target.shopAddressSelect.value,
    //   pState: event.target.pState.value,
    //   pIntro: event.target.pIntro.value,
    //   preViewImgs: this.state.preViewImgs,
    // }

    fetch('http://localhost:4000/commodity/shopAdd', {
      method: 'POST',
      body: data,
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj.message)
        if (obj.success === true) {
          alert(obj.message)
          window.history.go(-1)
        } else {
          alert(obj.message)
        }
      })
  }

  logChange(event) {
    this.setState({ [event.target.pBrand]: event.target.value })
  }

  buildOptions(e) {
    var arr = []

    for (var i = 2; i <= e; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }

    return arr
  }
  buildOptions2(e) {
    var arr = []

    for (var i = 0; i <= e; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }

    return arr
  }
  uploadPic = async e => {
    var file = e.target.files
    let reader = new FileReader()
    // await reader.readAsDataURL(file)
    // reader.onload = () => {
    //   this.setState({ ImgFile: file })
    // }

    var ImgFile = Array.from(Object.keys(file), k => file[k])

    await this.setState({ ImgFile: file })
    console.log(this.state.ImgFile)
  }
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div id="preview_progressbarTW_imgs" />
          <div className="CarPic1 d-flex">
            {this.state.preViewImgs.length === 0 ? (
              <img src={require('../images/defaultPic.png')} />
            ) : (
              <img src={this.state.preViewImgs[0]} />
            )}
          </div>

          <div className="CarPic2 d-flex">
            {this.state.preViewImgs.length === 0 ? (
              <img src={require('../images/defaultPic.png')} />
            ) : (
              <img src={this.state.preViewImgs[1]} />
            )}
          </div>
          <div className="CarPic3 ">
            {this.state.preViewImgs.length === 0 ? (
              <img src={require('../images/defaultPic.png')} />
            ) : (
              <img src={this.state.preViewImgs[2]} />
            )}

            <Button className="uploadPic d-flex">
              <label className="upload_cover ">
                <i class="fas fa-cloud-upload-alt" />
                <input
                  className="upload_input "
                  type="file"
                  onChange={this.handleFilesChange}
                  accept="image/jpeg,image/jpg,image/gif,image/png"
                  enctype="multipart/form-data"
                  name="File"
                  multiple="multiple"
                  ref={el => (this.inputFiles = el)}
                />
              </label>
            </Button>
          </div>
        </div>
        <div className="BotRow d-flex justify-content-center">
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className="d-flex">
              <div className="">
                {/* <div>
                商品名稱
                <br />
                <input placeholder="請輸入商品名稱" />
              </div> */}
                <div>
                  廠牌
                  <br />
                  <Form.Control
                    required
                    name="pBrand"
                    type="text"
                    placeholder="請輸入廠牌"
                  />
                  {/* <input required name="pBrand" placeholder="請輸入廠牌" /> */}
                </div>
                <div>
                  車型
                  <br />
                  <Form.Control
                    required
                    name="pModel"
                    type="text"
                    placeholder="請輸入車型"
                  />
                  {/* <input required name="pModel" placeholder="請輸入車型" /> */}
                </div>
                <div>
                  幾人座
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control name="pSit" as="select">
                      {this.buildOptions(8)}
                    </Form.Control>
                  </Form.Group>
                  {/* <select required name="pSit">
                    {this.buildOptions(8)}
                  </select> */}
                </div>
                <div>
                  車種
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control required name="pType" as="select">
                      <option value="小客車">小客車</option>
                      <option value="休旅車">休旅車</option>
                      <option value="貨車">貨車</option>
                      <option value="吉普車">吉普車</option>
                    </Form.Control>
                  </Form.Group>
                  {/* <select required name="pType">
                    <option value="小客車">小客車</option>
                    <option value="休旅車">休旅車</option>
                    <option value="貨車">貨車</option>
                  </select> */}
                </div>
              </div>
              <div className="bar2">
                <div>
                  里程數(km)
                  <br />
                  <Form.Control
                    required
                    name="pOdo"
                    type="text"
                    placeholder="請輸入商品里程數"
                  />
                  {/* <input required name="pOdo" placeholder="請輸入商品里程數" /> */}
                </div>
                <div>
                  排氣量
                  <br />
                  <Form.Control
                    required
                    name="pCc"
                    type="number"
                    placeholder="請輸入商品排氣量"
                  />
                  {/* <input
                    required
                    type="number"
                    name="pCc"
                    placeholder="請輸入商品排氣量"
                  /> */}
                </div>
                <div className="carOld">
                  車齡
                  <br />
                  <div className="d-flex m-0">
                    <Form.Group
                      required
                      controlId="exampleForm.ControlSelect1 "
                    >
                      <Form.Control name="pAgeYear" as="select">
                        {this.buildOptions2(99)}
                      </Form.Control>
                    </Form.Group>
                    <div className="dayText">年</div>

                    <Form.Group
                      required
                      controlId="exampleForm.ControlSelect1 "
                    >
                      <Form.Control name="pAgeMon" as="select">
                        {this.buildOptions2(11)}
                      </Form.Control>
                    </Form.Group>
                    <div className="dayText">月</div>
                    {/* <select required name="pAgeYear">
                    {this.buildOptions2(99)}
                  </select>
                  年
                  <select required name="pAgeMon">
                    {this.buildOptions2(12)}
                  </select>
                  月 */}
                  </div>
                </div>
                <div>
                  租金/日
                  <br />
                  <Form.Control
                    required
                    name="pRent"
                    type="number"
                    placeholder="請輸入租金"
                  />
                  {/* <input
                    required
                    type="number"
                    name="pRent"
                    placeholder="請輸入租金/日"
                  /> */}
                </div>
              </div>
              <div className="bar3">
                <div>
                  租借狀態
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control disabled name="rentState" as="select">
                      <option value="未借出">未借出</option>
                    </Form.Control>
                  </Form.Group>
                  {/* <select disabled name="rentState" /> */}
                </div>
                <div>
                  是否提供指定地點取車
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control name="rentAssign" as="select">
                      <option value="否">否</option>
                      <option value="是">是</option>
                    </Form.Control>
                  </Form.Group>
                  {/* <select name="rentAssign" /> */}
                </div>
                <div>
                  是否提供甲地乙還
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control name="shopAddressSelect" as="select">
                      <option value="否">否</option>
                      <option value="是">是</option>
                    </Form.Control>
                  </Form.Group>
                  {/* <select name="shopAddressSelect">
                    <option value="否">否</option>
                    <option value="是">是</option>
                  </select> */}
                </div>
                <div>
                  上架狀態
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control name="pState" as="select">
                      <option value="上架">上架</option>
                      <option value="下架">下架</option>
                    </Form.Control>
                  </Form.Group>
                  {/* <select name="pState">
                    <option value="上架">上架</option>
                    <option value="下架">下架</option>
                  </select> */}
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center w-100">
                <div className="textarea_bot">
                  商品介紹
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      name="pIntro"
                      as="textarea"
                      placeholder="請輸入商品介紹"
                    />
                  </Form.Group>
                  {/* <textarea
                    name="pIntro"
                    className="w-100"
                    placeholder="請輸入商品介紹"
                  /> */}
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <BotRowAddButton type="submit" />
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default BotRow
