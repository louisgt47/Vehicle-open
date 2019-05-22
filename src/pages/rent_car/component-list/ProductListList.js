import React from 'react'

//css
import '../css/shopList.css'
import '../css/normalize.css'
import '../css/basic.css'

class ProductListList extends React.Component {
  render() {
    return (
      <div className="productList-list">
        <div className="productList-container">
          <div className="list_search d-flex justify-content-center mb-5">
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依車種</div>
            </a>
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依價錢</div>
            </a>
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依時間</div>
            </a>
            <a href className="mx-2">
              <div className="t-center list_search_button px-2 ">依地點</div>
            </a>
          </div>
          <div
            className="list_item d-flex flex-wrap"
            style={{ marginTop: '100px' }}
          >
            {/* <div class="row">
            <div class="col-3 mt-5"></div>
          </div> */}
            {/* <div class="card-group ">
              <div class="card">
                <div class="card_img relative">
                  <img src="./images/Mercedes-Benz-logo-2009-1920x1080.png" class="card-img-logo absolute" alt="...">
                  <img src="./images/6-1.png" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card  mx-2">
                  <div class="card_img relative">
                      <img src="./images/Mercedes-Benz-logo-2009-1920x1080.png" class="card-img-logo absolute" alt="...">
                      <img src="./images/6-1.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
              <div class="card">
                  <div class="card_img relative">
                      <img src="./images/Mercedes-Benz-logo-2009-1920x1080.png" class="card-img-logo absolute" alt="...">
                      <img src="./images/6-1.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
          </div> */}
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card my-5 mx-2" style={{ width: '520px' }}>
              <div className="card_img relative">
                <img
                  src="http://localhost:3000/images/Mercedes-Benz-logo-2009-1920x1080.png"
                  className="card-img-logo absolute"
                  alt="..."
                />
                <img
                  src="http://localhost:3000/images/6-1.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2 d-flex justify-content-between">
                <div className="card-text">
                  <h5>Benz Gray</h5>四人座/小客車
                </div>
                <a href className="mx-2 d-flex">
                  <div className="t-center  px-2 d-flex align-items-center">
                    <p className="m-0 ">依價錢</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductListList
