import React, { Component } from 'react'
import DIYF from './assets/DIYFloods.jpg'
import KH from './assets/killerHeat.jpg'
import MS from './assets/mojaveSupply.jpg'


class Home extends Component {
  constructor(props) {
    super(props)

    this.stat = {

    }
  }



  render() {
    let corpImage = 'https://nbc.clientmediaserver.com/20170306_pyeongchang_countdown/images/gen_logo.jpg'
    return (
      <div>

        <h1>Companies in the Mojave Corporation Family</h1>

        <section className="subcids">

          <div className="subcid">
            <a href="http://www.mojavesupply.com/" target="_blank">
              <img src={MS} alt="company logo" className="subcid_image" />
            </a>
            <div className="description">
              <a href="http://www.mojavesupply.com/" target="_blank">
                <h2>Mojave Supply</h2>
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa nam quidem nemo nostrum aperiam fugiat nobis quo voluptatum unde in dolorem repudiandae deserunt rem magni dolor, animi iusto numquam.</p>
            </div>
          </div>

          <div className="subcid">
            <a href="http://www.killerheat.com/" target='_blank'>
              <img src={KH} alt="company logo" className="subcid_image" />
            </a>
            <div className="description">
              <a href="http://www.killerheat.com/" target='_blank'>
                <h2>Killer Heat</h2>
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa nam quidem nemo nostrum aperiam fugiat nobis quo voluptatum unde in dolorem repudiandae deserunt rem magni dolor, animi iusto numquam.</p>
            </div>
          </div>

          <div className="subcid">
            <a href="http://www.testingformeth.com/" target='_blank'>
              <img src='#' alt="company logo" className="subcid_image" />
            </a>
            <div className="description">
              <a href="http://www.testingformeth.com/" target='_blank'>
                <h2>testingformeth</h2>
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa nam quidem nemo nostrum aperiam fugiat nobis quo voluptatum unde in dolorem repudiandae deserunt rem magni dolor, animi iusto numquam.</p>
            </div>
          </div>

          <div className="subcid">
            <a href="http://www.cleaningupmeth.com/" target='_blank'>
              <img src='#' alt="company logo" className="subcid_image" />
            </a>
            <div className="description">
              <a href="http://www.cleaningupmeth.com/" target='_blank'>
                <h2>cleaningupmeth</h2>
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa nam quidem nemo nostrum aperiam fugiat nobis quo voluptatum unde in dolorem repudiandae deserunt rem magni dolor, animi iusto numquam.</p>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Home