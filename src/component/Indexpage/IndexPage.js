import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './IndexPage.css'
import $ from 'jquery'
class App extends React.Component {
  componentDidMount = () => {
    $('.title1').mouseenter(function() {
      $(this).css('transform', 'scale(1.1)')
      $('.hover1').css({ opacity: '1' })
      $('.title1 .titletopleft,.title1 .titleenglish,.title1 .titletext').css(
        'color',
        '#fff'
      )
      $('.title1 .titletopright,.title1 .titlehr').css('background', '#fff')
    })
    $('.title1').mouseleave(function() {
      $(this).css('transform', 'scale(1)')
      $('.hover1').css({ opacity: '0' })
      $('.title1 .titletopleft,.title1 .titleenglish,.title1 .titletext').css(
        'color',
        '#2d2d2d'
      )
      $('.title1 .titletopright,.title1 .titlehr').css('background', '#2d2d2d')
    })
    $('.title2').mouseenter(function() {
      $(this).css('transform', 'scale(1.1)')
      $('.hover2').css({ opacity: '1' })
      $('.title2 .titletopleft,.title2 .titleenglish,.title2 .titletext').css(
        'color',
        '#fff'
      )
      $('.title2 .titletopright,.title2 .titlehr').css('background', '#fff')
    })
    $('.title2').mouseleave(function() {
      $(this).css('transform', 'scale(1)')
      $('.hover2').css({ opacity: '0' })
      $('.title2 .titletopleft,.title2 .titleenglish,.title2 .titletext').css(
        'color',
        '#2d2d2d'
      )
      $('.title2 .titletopright,.title2 .titlehr').css('background', '#2d2d2d')
    })

    $('.title3').mouseenter(function() {
      $(this).css('transform', 'scale(1.1)')
      $('.hover3').css({ opacity: '1' })
      $('.title3 .titletopleft,.title3 .titleenglish,.title3 .titletext').css(
        'color',
        '#fff'
      )
      $('.title3 .titletopright,.title3 .titlehr').css('background', '#fff')
    })
    $('.title3').mouseleave(function() {
      $(this).css('transform', 'scale(1)')
      $('.hover3').css({ opacity: '0' })
      $('.title3 .titletopleft,.title3 .titleenglish,.title3 .titletext').css(
        'color',
        '#2d2d2d'
      )
      $('.title3 .titletopright,.title3 .titlehr').css('background', '#2d2d2d')
    })
    $('.title4').mouseenter(function() {
      $(this).css('transform', 'scale(1.1)')
      $('.hover4').css({ opacity: '1' })
      $('.title4 .titletopleft,.title4 .titleenglish,.title4 .titletext').css(
        'color',
        '#fff'
      )
      $('.title4 .titletopright,.title4 .titlehr').css('background', '#fff')
    })
    $('.title4').mouseleave(function() {
      $(this).css('transform', 'scale(1)')
      $('.hover4').css({ opacity: '0' })
      $('.title4 .titletopleft,.title4 .titleenglish,.title4 .titletext').css(
        'color',
        '#2d2d2d'
      )
      $('.title4 .titletopright,.title4 .titlehr').css('background', '#2d2d2d')
    })
    $('.title5').mouseenter(function() {
      $(this).css('transform', 'scale(1.1)')
      $('.hover5').css({ opacity: '1' })
      $('.title5 .titletopleft,.title5 .titleenglish,.title5 .titletext').css(
        'color',
        '#fff'
      )
      $('.title5 .titletopright,.title5 .titlehr').css('background', '#fff')
    })
    $('.title5').mouseleave(function() {
      $(this).css('transform', 'scale(1)')
      $('.hover5').css({ opacity: '0' })
      $('.title5 .titletopleft,.title5 .titleenglish,.title5 .titletext').css(
        'color',
        '#2d2d2d'
      )
      $('.title5 .titletopright,.title5 .titlehr').css('background', '#2d2d2d')
    })
    $('.title6').mouseenter(function() {
      $(this).css('transform', 'scale(1.1)')
      $('.hover6').css({ opacity: '1' })
      $('.title6 .titletopleft,.title6 .titleenglish,.title6 .titletext').css(
        'color',
        '#fff'
      )
      $('.title6 .titletopright,.title6 .titlehr').css('background', '#fff')
    })
    $('.title6').mouseleave(function() {
      $(this).css('transform', 'scale(1)')
      $('.hover6').css({ opacity: '0' })
      $('.title6 .titletopleft,.title6 .titleenglish,.title6 .titletext').css(
        'color',
        '#2d2d2d'
      )
      $('.title6 .titletopright,.title6 .titlehr').css('background', '#2d2d2d')
    })
    $('.title7').mouseenter(function() {
      $(this).css('transform', 'scale(1.1)')
      $('.hover7').css({ opacity: '1' })
      $('.title7 .titletopleft,.title7 .titleenglish,.title7 .titletext').css(
        'color',
        '#fff'
      )
      $('.title7 .titletopright,.title7 .titlehr').css('background', '#fff')
    })
    $('.title7').mouseleave(function() {
      $(this).css('transform', 'scale(1)')
      $('.hover7').css({ opacity: '0' })
      $('.title7 .titletopleft,.title7 .titleenglish,.title7 .titletext').css(
        'color',
        '#2d2d2d'
      )
      $('.title7 .titletopright,.title7 .titlehr').css('background', '#2d2d2d')
    })

    for (i = 0; i < 7; i++) {
      $('.titletopleft')
        .eq(i)
        .css({ animation: `animatetitleleft ${4.2 + i * 0.2}s` })
      $()
      console.log(4.6 + i * 0.2)
    }
    var i = 0,
      max = 60
    function rand() {
      var text = ''
      var possible =
        'abcdefghijklmnopqrstiuvwxyz~&|^ç@][{}ù*µ¤$£€°)(+-/<>²`éè1234567890'
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      return text
    }

    function randomtext() {
      $('.ramdomcomde').text(rand())
      $('.ramdomcomde1').text(rand())

      i++
      if (i < max) {
        setTimeout(randomtext, 40)
      } else {
        $('.ramdomcomde,.ramdomcomde1').css('display', 'none')
        $('.titleenglish,.titletext').css('display', 'block')
        $('.titletext').css('opacity', '10')
      }
    }
    randomtext()
  }

  render() {
    return (
      <>
        <div class="indexbackground">
          <div class="hover1">
            <div class="hover1box">
              <img src={require('./images/2.jpg')} alt="" class="hover1img" />
            </div>
          </div>

          <div class="hover2">
            <div class="hover2box">
              <img
                src={require('./images/1.jpg')}
                alt=""
                width="100%"
                class="hover2img"
              />
            </div>
          </div>
          <div class="hover3">
            <div class="hover3box">
              <img
                src={require('./images/3.jpg')}
                alt=""
                width="100%"
                class="hover3img"
              />
            </div>
          </div>
          <div class="hover4">
            <div class="hover4box">
              <img src={require('./images/4.jpg')} alt="" class="hover4img" />
            </div>
          </div>
          <div class="hover5">
            <div class="hover5box">
              <img src={require('./images/5.jpg')} alt="" class="hover5img" />
            </div>
          </div>
          <div class="hover6">
            <div class="hover6box">
              <img src={require('./images/6.jpg')} alt="" class="hover6img" />
            </div>
          </div>
          <div class="hover7">
            <div class="hover7box">
              <img src={require('./images/7.png')} alt="" class="hover7img" />
            </div>
          </div>

          <Link to="uploadss">
            <div class="title1">
              <div class="titletop">
                <div class="titletopleftbox">
                  <div class="titletopleft">1</div>
                </div>
                <div class="titletopright" />
              </div>
              <div class="titlehr" />
              <div class="ramdomcomde" />
              <div class="titleenglish">MEMBER LOGIN</div>
              <div class="ramdomcomde1" />
              <div class="titletext">會員專區</div>
            </div>
          </Link>
          <Link to="loginbox">
            <div class="title2">
              <div class="titletop">
                <div class="titletopleftbox">
                  <div class="titletopleft">2</div>
                </div>
                <div class="titletopright" />
              </div>
              <div class="titlehr" />
              <div class="ramdomcomde" />
              <div class="titleenglish">MEMBER LOGIN</div>
              <div class="ramdomcomde1" />
              <div class="titletext">會員登入</div>
            </div>
          </Link>
          <div class="title3">
            <div class="titletop">
              <div class="titletopleftbox">
                <div class="titletopleft">3</div>
              </div>
              <div class="titletopright" />
            </div>
            <div class="titlehr" />
            <div class="ramdomcomde" />
            <div class="titleenglish">MEMBER LOGIN</div>
            <div class="ramdomcomde1" />
            <div class="titletext">問與答</div>
          </div>
          <Link to="productList">
            <div class="title4">
              <div class="titletop">
                <div class="titletopleftbox">
                  <div class="titletopleft">4</div>
                </div>
                <div class="titletopright" />
              </div>
              <div class="titlehr" />
              <div class="ramdomcomde" />
              <div class="titleenglish">MEMBER LOGIN</div>
              <div class="ramdomcomde1" />
              <div class="titletext">開始租車 </div>
            </div>
          </Link>
          <Link to={'/agentAbout'}>
            <div class="title5">
              <div class="titletop">
                <div class="titletopleftbox">
                  <div class="titletopleft">5</div>
                </div>
                <div class="titletopright" />
              </div>
              <div class="titlehr" />
              <div class="ramdomcomde" />
              <div class="titleenglish">MEMBER LOGIN</div>
              <div class="ramdomcomde1" />
              <div class="titletext">代駕服務</div>
            </div>
          </Link>
          <div class="title6">
            <div class="titletop">
              <div class="titletopleftbox">
                <div class="titletopleft">6</div>
              </div>
              <div class="titletopright" />
            </div>
            <div class="titlehr" />
            <div class="ramdomcomde" />
            <div class="titleenglish">MEMBER LOGIN</div>
            <div class="ramdomcomde1" />
            <div class="titletext">成為車商</div>
          </div>
          <div class="title7">
            <div class="titletop">
              <div class="titletopleftbox">
                <div class="titletopleft">7</div>
              </div>
              <div class="titletopright" />
            </div>
            <div class="titlehr" />
            <div class="ramdomcomde" />
            <div class="titleenglish">MEMBER LOGIN</div>
            <div class="ramdomcomde1" />
            <div class="titletext">關於我們</div>
          </div>
        </div>
      </>
    )
  }
}
export default App
