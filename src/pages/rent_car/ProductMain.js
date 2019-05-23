import React from 'react'
import { Link } from 'react-router-dom'

class ProductMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productMain: [],
    }
  }
  componentDidMount() {
    this.productMain()
  }
  productMain = _ => {
    console.log(this.props.match.params.pNo)
    fetch(
      `http://localhost:4000/productMain?pNo=${+this.props.match.params.pNo}`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({ productMain: response.data }, () =>
          console.log({ response_data: response.data })
        )
      )
      .catch(err => console.error(err))
  }
  renderProduct = ({ pNo, pBrand }) => <div key={pNo}>{pBrand}</div>

  render() {
    const { productMain } = this.state
    return <>{productMain.map(this.renderProduct)}</>
  }
}

// const ProductMain = props => {
//   console.log(props)

//   // 1.用props.match.params.id抓取參數
//   // 2.props.match.params.id 資料類型字串
//   // 3.find方法，沒找到是回傳undefined
//   //   const product = props.product.find(
//   //     item => item.pNo === +props.match.params.pNo
//   //   )

// //   console.log(+props.match.params.pNo)
//   componentDidMount(){
//     this.product()
//   }
//   return <></>
// }

export default ProductMain
