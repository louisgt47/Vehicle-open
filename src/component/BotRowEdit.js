import React from 'react'
import '../css/Shop_addEditBotRow.css'
import BotRowAddButton from './BotRowAddButton'
import BotRowEditButton from './BotRowEditButton'
import { Form, Button } from 'react-bootstrap'
class BotRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ShopListEditOn: '',
      commodity: '',
      pNo: this.props.pNo,
      pBrand: this.props.pBrand,
      pModel: this.props.pModel,
      pSit: this.props.pSit,
      pType: this.props.pType,
      pOdo: this.props.pOdo,
      pCc: this.props.pCc,
      pAgeYear: this.props.pAgeYear,
      pAgeMon: this.props.pAgeMon,
      pRent: this.props.pRent,
      rentState: this.props.rentState,
      rentAssign: this.props.rentAssign,
      shopAddressSelect: this.props.shopAddressSelect,
      pState: this.props.pState,
      pIntro: this.props.pIntro,
      preViewImgs: [],
      reload: '',
      pImg: [],
    }
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
  handleEditSubmit = event => {
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
    data.append('pNo', this.state.pNo)
    for (let i = 0; i < this.inputFiles.files.length; i++) {
      data.append('pImg', this.inputFiles.files[i])
    }

    fetch('http://localhost:4000/commodity/shopEdit', {
      method: 'POST',
      body: data,
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj.message)
        if (obj.success === true) {
          alert(obj.message)
          window.history.go(-2)
        } else {
          alert(obj.message)
        }
      })
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
  logChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  goBackPage = e => {
    e.preventDefault()
    this.props.history.goBack()
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

            <Button className="uploadPic">
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
          <form onSubmit={event => this.handleEditSubmit(event)}>
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
                    value={this.state.pBrand}
                    onChange={this.logChange}
                  />
                </div>
                <div>
                  車型
                  <br />
                  <Form.Control
                    required
                    name="pModel"
                    type="text"
                    placeholder="請輸入車型"
                    value={this.state.pModel}
                    onChange={this.logChange}
                  />
                </div>
                <div>
                  幾人座
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      name="pSit"
                      as="select"
                      value={this.state.pSit}
                      onChange={this.logChange}
                    >
                      {this.buildOptions(8)}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div>
                  車種
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      required
                      name="pType"
                      as="select"
                      value={this.state.pType}
                      onChange={this.logChange}
                    >
                      <option value="小客車">小客車</option>
                      <option value="休旅車">休旅車</option>
                      <option value="貨車">貨車</option>
                      <option value="吉普車">吉普車</option>
                    </Form.Control>
                  </Form.Group>
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
                    value={this.state.pOdo}
                    onChange={this.logChange}
                  />
                </div>
                <div>
                  排氣量
                  <br />
                  <Form.Control
                    required
                    name="pCc"
                    type="number"
                    placeholder="請輸入商品排氣量"
                    value={this.state.pCc}
                    onChange={this.logChange}
                  />
                </div>
                <div className="carOld">
                  車齡
                  <br />
                  <div />
                  <div className="d-flex m-0">
                    <Form.Group
                      required
                      controlId="exampleForm.ControlSelect1 "
                    >
                      <Form.Control
                        name="pAgeYear"
                        as="select"
                        value={this.state.pAgeYear}
                        onChange={this.logChange}
                      >
                        {this.buildOptions2(99)}
                      </Form.Control>
                    </Form.Group>
                    <div className="dayText">年</div>

                    <Form.Group
                      required
                      controlId="exampleForm.ControlSelect1 "
                    >
                      <Form.Control
                        name="pAgeMon"
                        as="select"
                        value={this.state.pAgeMon}
                        onChange={this.logChange}
                      >
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
                    value={this.state.pRent}
                    onChange={this.logChange}
                  />
                </div>
              </div>
              <div className="bar3">
                <div>
                  租借狀態
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      disabled
                      name="rentState"
                      as="select"
                      value={this.state.rentState}
                      onChange={this.logChange}
                    >
                      <option value="未借出">未借出</option>
                      <option value="已借出">已借出</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div>
                  是否提供指定地點取車
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      name="rentAssign"
                      as="select"
                      value={this.state.rentAssign}
                      onChange={this.logChange}
                    >
                      <option value="否">否</option>
                      <option value="是">是</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div>
                  是否提供甲地乙還
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      name="shopAddressSelect"
                      as="select"
                      value={this.state.shopAddressSelect}
                      onChange={this.logChange}
                    >
                      <option value="否">否</option>
                      <option value="是">是</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div>
                  上架狀態
                  <br />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      name="pState"
                      as="select"
                      value={this.state.pState}
                      onChange={this.logChange}
                    >
                      <option value="上架">上架</option>
                      <option value="下架">下架</option>
                    </Form.Control>
                  </Form.Group>
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
                      value={this.state.pIntro}
                      onChange={this.logChange}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <BotRowEditButton type="submit" onClick={this.goBackPage} />
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default BotRow
