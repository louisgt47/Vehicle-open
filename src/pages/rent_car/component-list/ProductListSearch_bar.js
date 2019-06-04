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
import './searchbox.css'

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
    $('.searchboxinput').focus(function() {
      $('.top').css('left', '-250px')
      $('.addline2').css('height', '250px')
      $('.addline2').css('right', '267px')
      $('.bottom').css('left', '250px')
      $('.addline').css('height', '250px')
      $('.addline').css('right', 'calc(50% - 232px)')
      setTimeout(function() {
        $('.top2').css('opacity', 1)
      }, 800)
      setTimeout(function() {
        $('.bottom2').css('opacity', 1)
      }, 800)
      $('.searchboxinput').css('left', 'calc(50% - 250px)')
      $('.linemiddle1').css('width', '25%')
      $('.linemiddle2').css('width', '25%')
      $('.searchboxinput').css('width', '500px')
      $('.search-icon').css('opacity', '0')
      setTimeout(function() {
        $('.searchboxinput').css('opacity', 1)
      }, 800)
    })
    $('.searchboxinput').blur(function() {
      setTimeout(function() {
        $('.search-icon').css('opacity', '1')
      }, 300)
      setTimeout(function() {
        $('.top').css('left', '0px')
      }, 300)
      setTimeout(function() {
        $('.addline2').css('height', '50px')
      }, 300)
      setTimeout(function() {
        $('.addline2').css('right', 'calc(50% + 17px)')
      }, 300)
      setTimeout(function() {
        $('.bottom').css('left', '0')
      }, 300)
      setTimeout(function() {
        $('.addline').css('height', '50px')
      }, 300)
      setTimeout(function() {
        $('.addline').css('right', 'calc(50% - 32px)')
      }, 300)
      $('.top2').css('opacity', 0)
      $('.bottom2').css('opacity', 0)
      setTimeout(function() {
        $('.searchboxinput').css('left', 'calc(50% - 40%)')
      }, 300)
      setTimeout(function() {
        $('.linemiddle2').css('width', '40%')
      }, 300)
      setTimeout(function() {
        $('.linemiddle1').css('width', '40%')
      }, 300)
      setTimeout(function() {
        $('.searchboxinput').css('width', '80%')
      }, 300)
      $('.searchboxinput').css('opacity', 0)
    })
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
      switch (
        $(this)
          .parent()
          .parent()
          .attr('id')
      ) {
        case 's1':
          that.setState({ searchkey1: txt })
          break
        case 's2':
          that.setState({ searchkey2: txt })
          break
        case 's3':
          that.setState({ searchkey3: txt })
          break
        case 's4':
          that.setState({ searchkey4: txt })
          break
      }

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
        <div class="newsearchnav">
          <div class="searchnav">
            <div class="linemiddle1" />
            <div class="linemiddle2" />
            <div class="searchbox">
              <i class="fas search-icon fa-search" />
              <input
                type="text"
                class="searchboxinput"
                placeholder="關鍵字搜尋"
                onChange={this.inputKeySetState}
                id="inputkey"
              />
              <div class="linebox">
                <div class="top">
                  <div class="addline" />
                  <div class="topline1" />
                  <div class="topline2" />
                </div>
                <div class="top2">
                  <div class="top2line1" />

                  <div class="top2line2" />
                </div>
                <div class="bottom">
                  <div class="addline2" />
                  <div class="bottomline2" />
                  <div class="bottomline3" />
                </div>
                <div class="bottom2">
                  <div class="bottom2line1" />
                  <div class="bottom2line2" />
                </div>
              </div>
            </div>
          </div>
          <div className="productList-container search_bar">
            <div className="d-flex justify-content-center" />
          </div>
          <div className="d-flex justify-content-center">
            <div style={selectSize} className="sel sel--black-panther" id="s1">
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
                <option style={center}>台北</option>
                <option style={center}>新竹</option>
                <option style={center}>台中</option>
                <option style={center}>高雄</option>
              </select>
            </div>
            <div style={selectSize} className="sel sel--black-panther" id="s2">
              <select
                name="select-profession2"
                id="searchkey1"
                style={center}
                onChange={this.searchKey2SetState}
              >
                <option style={center} value={0}>
                  廠牌
                </option>
                <option style={center}>TOYOTA</option>
                <option style={center}>BENZ</option>
                <option style={center}>FORD</option>
                <option style={center}>三菱</option>
                <option style={center}>中華汽車</option>
              </select>
            </div>
            <div style={selectSize} className="sel sel--black-panther" id="s3">
              <select
                name="select-profession3"
                id="searchkey4"
                style={center}
                onChange={this.searchKey3SetState}
              >
                <option style={center} value={0}>
                  價位/每日
                </option>
                <option style={center} value="1000">
                  1000以內
                </option>
                <option style={center} value="2000">
                  1000～2000
                </option>
                <option style={center} value="3000">
                  2000～3000
                </option>
                <option style={center} value="4000">
                  3000以上
                </option>
              </select>
            </div>
            <div style={selectSize} className="sel sel--black-panther" id="s4">
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
