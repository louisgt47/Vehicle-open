import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import $ from 'jquery'

//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'
import '../css/search.css'

//需要state紀錄各條件

// 搜尋:重抓資料庫,SELECT * FROM Store_Information WHERE (* LIKE 'inputkey') AND (篩選條件1 LIKE '%selectkey1%') ifAND1 (篩選條件2 LIKE '%selectkey2%') ifAND2 (篩選條件3 LIKE '%selectkey3%');
// const ifAND0(inputkey後面的OR存在與否) = (篩選條件1 && 篩選條件2 && 篩選條件3) ? '' : AND
// const searchkey1 = 篩選條件1 LIKE '%selectkey1%'
// const ifAND1(篩選條件1後面的OR存在與否) = (篩選條件2 && 篩選條件3) ? '' : AND
// const searchkey2 = 篩選條件2 LIKE '%selectkey2%'
// const ifAND2(篩選條件2後面的OR存在與否) = 篩選條件3  ? '' : AND
// const searchkey3 = 篩選條件3 LIKE '%selectkey3%'

//最終導向(link to)SearchList.js(傳入搜尋出的商品編號)

class ProductListSearch_bar extends React.Component {
  constructor() {
    super()
    this.state = {
      inputkey: '',
      searchkey1: 0,
      searchkey2: 0,
      searchkey3: 0,
      searchkey4: 0,
    }
  }
  componentDidMount = () => {
    $('.sel').each(function() {
      $(this)
        .children('select')
        .css('display', 'none')

      var $current = $(this)

      $(this)
        .find('option')
        .each(function(i) {
          if (i == 0) {
            $current.prepend(
              $('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box'),
              })
            )

            var placeholder = $(this).text()
            $current.prepend(
              $('<span>', {
                class: $current
                  .attr('class')
                  .replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder,
              })
            )

            return
          }

          $current.children('div').append(
            $('<span>', {
              class: $current
                .attr('class')
                .replace(/sel/g, 'sel__box__options'),
              text: $(this).text(),
            })
          )
        })
    })

    // Toggling the `.active` state on the `.sel`.
    $('.sel').click(function() {
      $(this).toggleClass('active')
    })

    // Toggling the `.selected` state on the options.
    const that = this
    $('.sel__box__options').click(function() {
      var txt = $(this).text()
      var index = $(this).index()
      console.log($(this).parent())
      that.setState({searchkey2:txt})

      $(this)
        .siblings('.sel__box__options')
        .removeClass('selected')
      $(this).addClass('selected')

      var $currentSel = $(this).closest('.sel')
      $currentSel.children('.sel__placeholder').text(txt)
      $currentSel.children('select').prop('selectedIndex', index + 1)
    })
  }
  inputKeySetState = event => {
    console.log(event.target.value)
    this.setState({ inputkey: event.target.value })
  }
  searchKey1SetState = event => {
    console.log(event.target.value)

    this.setState({ searchkey1: event.target.value })
  }
  searchKey2SetState = event => {
    this.setState({ searchkey2: event.target.value })
  }
  searchKey3SetState = event => {
    this.setState({ searchkey3: event.target.value })
  }
  searchKey4SetState = event => {
    this.setState({ searchkey4: event.target.value })
  }
  render() {
    const barButtonSize = {
      // width: '50px',
    }
    const selectSize = {
      width: '215px',
    }
    const center = {
      textAlign: 'center',
      textAlignLast: 'center',
      zIndex: '99',
    }
    const inputSize = {
      width: '975px',
      margin: '0 auto',
    }
    //傳值
    let searchData = {
      inputkey: this.state.inputkey,
      searchkey1: this.state.searchkey1,
      searchkey2: this.state.searchkey2,
      searchkey3: this.state.searchkey3,
      searchkey4: this.state.searchkey4,
    }
    var path = {
      pathname: '/productSearchList',
      state: searchData,
    }
    return (
      <div className="productList-search_bar">
        <div className="productList-container search_bar">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              id="inputkey"
              placeholder="關鍵字搜尋"
              style={inputSize}
              onChange={this.inputKeySetState}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div style={selectSize} className="sel sel--black-panther" id='s1'>
              <select
                name="select-profession1"
                className="form-control"
                id="searchkey1"
                style={center}
                onChange={this.searchKey1SetState}

              >
                <option style={center} value={0}>
                  地點
                </option>
                <option style={center} >台北</option>
                <option style={center}>新竹</option>
                <option style={center}>台中</option>
                <option style={center}>高雄</option>
              </select>
            </div>
            <div style={selectSize} className="sel sel--black-panther" id='s2'>
              <select
                name="select-profession2"
                id="searchkey1"
                style={center}
                onChange={this.searchKey2SetState}
              >
                <option style={center} value={0}>
                  廠牌
                </option>
                <option
                  style={center}
                  onChange={() => this.searchKey2SetState('TOYOTA')}
                >
                  TOYOTA
                </option>
                <option style={center}>3</option>
                <option style={center}>4</option>
                <option style={center}>5</option>
              </select>
            </div>
            <div style={selectSize} className="sel sel--black-panther" id='s3'>
              <select
                name="select-profession3"
                id="searchkey4"
                style={center}
                onChange={this.searchKey3SetState}
              >
                <option style={center} value={0}>
                  價位
                </option>
                <option style={center}>1000</option>
                <option style={center}>1000～2000</option>
                <option style={center}>2000～3000</option>
                <option style={center}>3000以上</option>
              </select>
            </div>
            <div style={selectSize} className="sel sel--black-panther" id='s4'>
              <select
                name="select-profession4"
                id="searchkey4"
                style={center}
                onChange={this.searchKey4SetState}
              >
                <option style={center} value={0}>
                  座位數
                </option>
                <option style={center}>4</option>
                <option style={center}>5</option>
                <option style={center}>6</option>
                <option style={center}>7</option>
                <option style={center}>8</option>
                <option style={center}>9</option>
              </select>
            </div>
          </div>
          <div style={barButtonSize}>
            <Link className="d-flex justify-content-center" to={path}>
              <div className="sButton py-2 px-3">
                <i className="fas fa-search" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductListSearch_bar
