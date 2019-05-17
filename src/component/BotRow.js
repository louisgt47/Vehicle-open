import React from 'react'
import '../css/BotRow.css'
import BotRowAddButton from './BotRowAddButton'
import BotRowEditButton from './BotRowEditButton'

const BotRow = () => (
  <div className="BotRow d-flex justify-content-center">
    <div className="">
      <div>
        商品名稱
        <br />
        <input placeholder="請輸入商品名稱" />
      </div>
      <div>
        廠牌
        <br />
        <input placeholder="請輸入廠牌" />
      </div>
      <div>
        車型
        <br />
        <input placeholder="請輸入車型" />
      </div>
      <div>
        幾人座
        <br />
        {/* <select name="請選擇">
            {map(for(let i=1;i<=7;i++){
                <option key="${i}" value="${i}">{i}</option>
            })}
         </select> */}
        <select name="請選擇">
          <option value="1">1</option>
        </select>
      </div>
      <div>
        車種
        <br />
        <select name="請選擇">
          <option value="小客車">小客車</option>
        </select>
      </div>
    </div>
    <div className="bar2">
      <div>
        里程數(km)
        <br />
        <input placeholder="請輸入商品里程數" />
      </div>
      <div>
        排氣量
        <br />
        <input placeholder="請輸入商品排氣量" />
      </div>
      <div className="carOld">
        車齡
        <br />
        <select name="請選擇">
          <option value="4">4</option>
        </select>
        年
        <select name="請選擇">
          <option value="4">4</option>
        </select>
        月
      </div>
      <div>
        租金/日
        <br />
        <input placeholder="請輸入租金/日" />
      </div>
      <div>
        商品介紹
        <br />
        <input placeholder="請輸入商品介紹" />
      </div>
    </div>
    <div className="bar3">
      <div>
        租借狀態
        <br />
        <select name="未借出">
          <option value="未借出">未借出</option>
        </select>
      </div>
      <div>
        是否提供指定地點取車
        <br />
        <select name="請選擇">
          <option value="是">是</option>
        </select>
      </div>
      <div>
        是否提供甲地乙還
        <br />
        <select name="請選擇">
          <option value="是">是</option>
        </select>
      </div>
      <div>
        上架狀態
        <br />
        <select name="請選擇">
          <option value="上架">上架</option>
        </select>
      </div>
      <button className="ShopButton">新增商品</button>
    </div>
  </div>
)

export default BotRow
