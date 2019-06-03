import React from 'react'
import './searchbox.css'
import $ from 'jquery'

class App extends React.Component {
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
      }, 1000)
      setTimeout(function() {
        $('.bottom2').css('opacity', 1)
      }, 1000)
      $('.searchboxinput').css('left', 'calc(50% - 250px)')
      $('.linemiddle1').css('width', '25%')
      $('.linemiddle2').css('width', '25%')
      $('.searchboxinput').css('width', '500px')
      $('.search-icon').css('opacity', '0')
      setTimeout(function() {
        $('.searchboxinput').css('opacity', 1)
      }, 1000)
    })
    $('.searchboxinput').blur(function() {
      setTimeout(function() {
        $('.search-icon').css('opacity', '1')
      }, 800)
      setTimeout(function() {
        $('.top').css('left', '0px')
      }, 800)
      setTimeout(function() {
        $('.addline2').css('height', '50px')
      }, 800)
      setTimeout(function() {
        $('.addline2').css('right', 'calc(50% + 17px)')
      }, 800)
      setTimeout(function() {
        $('.bottom').css('left', '0')
      }, 800)
      setTimeout(function() {
        $('.addline').css('height', '50px')
      }, 800)
      setTimeout(function() {
        $('.addline').css('right', 'calc(50% - 32px)')
      }, 800)
      $('.top2').css('opacity', 0)
      $('.bottom2').css('opacity', 0)
      setTimeout(function() {
        $('.searchboxinput').css('left', 'calc(50% - 40%)')
      }, 800)
      setTimeout(function() {
        $('.linemiddle2').css('width', '40%')
      }, 800)
      setTimeout(function() {
        $('.linemiddle1').css('width', '40%')
      }, 800)
      setTimeout(function() {
        $('.searchboxinput').css('width', '80%')
      }, 800)
      $('.searchboxinput').css('opacity', 0)
    })
  }

  render() {
    return (
      <>
        <div>
          <div class="searchnav">
            <div class="linemiddle1" />
            <div class="linemiddle2" />
            <div class="searchbox">
              <i class="fas search-icon fa-search" />
              <input
                type="text"
                class="searchboxinput"
                placeholder="關鍵字搜尋?"
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
        </div>
      </>
    )
  }
}

export default App
