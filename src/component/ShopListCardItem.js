import React from 'react'
import '../css/ShopListCardItem.css'
import { Card, Button } from 'react-bootstrap'
import { mapContextToProps } from 'react-context-toolbox'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Shop_edit from '../pages/shop/Shop_edit'
import { start } from 'pretty-error'
import { withRouter } from 'react-router-dom'
// d-flex justify-content-around

class ShopListCardItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ShopListEditOn: '',
      key: '',
      pNo: '',
      pss: '',
      pImg: [],
      shopName: [],
      shouldUpated: this.props.location.state
        ? this.props.location.state.update
        : 0,
    }
  }
  componentDidMount() {
    console.log('111111111:' + this.props.pImg)
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

  deleteItem(event) {
    var data = {
      pNo: this.props.pNo,
    }
    console.log(data)
    fetch('http://localhost:4000/commodity/shopDelete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj.message)
        if (obj.success === true) {
          alert(obj.message)
          window.location.reload()
        } else {
          alert(obj.message)
        }
      })
  }

  GetpNo = event => {
    if (event.target) {
      console.log('event.target:', event.target)
      const pnokey = event.target.getAttribute('pno')
      console.log(pnokey)
      localStorage.setItem('pNo', pnokey)
    }
    this.props.history.push('/Shop_edit')
  }
  myrefresh = () => {
    {
      window.location.reload()
    }
    setTimeout('myrefresh()', 5000)
  }

  render() {
    this.props.location.state
      ? console.log(
          'this.props.location.state.update',
          this.props.location.state.update
        )
      : console.log('no location state')
    return (
      <>
        <div className=" d-flex justify-content-around">
          <Card className=" m-5" style={{ width: '18rem' }}>
            <div className="cardImg">
              {/* <Card.Img
                className="cardBrandImg "
                src={require('../images/brand.png')}
              /> */}
              {this.props.pImg === '' ? (
                <Card.Img
                  className="carImg"
                  variant="top"
                  src={require('../images/defaultPic.png')}
                />
              ) : (
                <Link
                  to="/shopMainProduct"
                  className="edit"
                  variant="info"
                  pNo={this.props.pNo}
                  onClick={this.GetpNo}
                >
                  <Card.Img
                    className="carImg"
                    variant="top"
                    src={require(`../../public/uploads/${
                      this.props.pImg.split(',')[0]
                    }`)}
                    
                  />
                </Link>
              )}
              {/* this.props.pImg.split(',')[0] */}
            </div>
            <Card.Body className="h-100">
              <Card.Title>
                {this.props.pBrand}-{this.props.pModel}
              </Card.Title>
              <Card.Text className="carItems d-flex justify-content-between ">
                租金：
                <br />
                {this.props.pRent}/日
                <div className="d-flex align-self-end">
                  <Link
                    to="/Shop_edit"
                    className="edit m-1"
                    variant="info"
                    pNo={this.props.pNo}
                    onClick={this.GetpNo}
                  >
                    修改
                  </Link>

                  <Button
                    className="m-1"
                    variant="danger"
                    onClick={() => {
                      if (window.confirm('Delete the item?')) {
                        this.deleteItem()
                      }
                    }}
                  >
                    刪除
                  </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }
}

export default withRouter(ShopListCardItem)
