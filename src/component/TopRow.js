import React from 'react'
import '../css/Shop_addEditTopRow.css'
import CarPic1 from '../images/car1.jpg'
import CarPic2 from '../images/car1.jpg'

const TopRow = () => (
  <div className="d-flex justify-content-center">
    <div className="CarPic1 d-flex">
      <img src={CarPic1} />
    </div>
    <div className="CarPic2 d-flex">
      <img src={CarPic2} />
    </div>
    <div className="CarPic3 ">
      <img src={CarPic2} />
      <button className="uploadPic">上傳圖片</button>
    </div>
  </div>
)

export default TopRow
