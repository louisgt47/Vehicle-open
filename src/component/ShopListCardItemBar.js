import React from 'react'
import '../css/ShopListCardItemBar.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ShopListCardItemBar = () => (
  <>
    <div className="">
      <div className="ShopListCardItem p-1 mt-1 d-flex justify-content-center">
        <div className="ShopListCardItemButton d-flex p-0  col-md-3 justify-content-center align-items-center">
          
            <Link to="/Shop_add" className="addItem m-1">
              新增車輛
            </Link>
         
          <Link to="/StoreOrderList" className="searchItem m-1">
            訂單查詢
          </Link>
        </div>
        <div className="d-flex p-1 mt-1 col-md-6 justify-content-center">
          <p />
          車輛列表
          <p />
        </div>
        <div className="p-1 mt-1 col-md-3 " />
      </div>
    </div>
  </>
)

export default ShopListCardItemBar
