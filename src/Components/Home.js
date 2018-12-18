import React, {Component} from 'react' 
import Nav from './Nav'
import Footer from './Footer'

class Home extends Component {
  constructor(props) {
    super(props)

    this.stat={

    }
  }

  

  render() {
    let corpImage = 'https://nbc.clientmediaserver.com/20170306_pyeongchang_countdown/images/gen_logo.jpg'
    return (
      <div>
        <Nav/>
        {/* <img src={corpImage} alt="Mojave Corp Image"/> */}
        <div className="banner_img"><span>Some cool image here</span></div>
        <section>
          <h1>Mojave Corporation Values</h1>

          <ul>
            <li>Honor God in all we do.</li>
            <li>Persue exelence</li>
            <li>Help people to imporve themselves</li>
            <li>Grow Profitably</li>
          </ul>
        </section>
        <article>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae libero odio placeat minima, praesentium cumque ipsam reiciendis ab adipisci, temporibus nisi expedita modi, in quae explicabo saepe recusandae sed!
          Illum, quisquam maxime? Corrupti vel, minima harum quas ipsa earum est voluptatem. Cumque hic magni facere repellat fugit totam consequatur ipsam molestiae ipsum. Quidem laborum sequi maxime fugit perspiciatis sunt.
          In incidunt harum dolore dicta necessitatibus eveniet alias? Corrupti temporibus molestias, dolore libero in aliquid rem fugiat, natus unde magnam sit voluptates culpa possimus, deserunt sed! Fugiat minima magnam ab?
          Earum provident enim quos incidunt ad repellat ab veniam eligendi, quae aspernatur harum iusto optio quisquam beatae culpa. Nihil excepturi nisi ex ab voluptatum rerum placeat ratione totam, quibusdam non.
          Rem assumenda similique temporibus, alias, reprehenderit harum quos ea quas non autem accusantium exercitationem ab itaque nobis enim cupiditate maiores officia libero, quidem eius? Dignissimos est neque quaerat. Eius, impedit!
          Totam assumenda maxime eveniet dicta exercitationem, saepe at ad mollitia aperiam, tempora velit quasi ab voluptate dignissimos maiores soluta, quibusdam vel nulla! Itaque cumque qui possimus porro odio optio molestiae!
          Mollitia odit molestiae consequuntur vel, id quis. Alias numquam veritatis perferendis eius neque commodi unde ratione! Adipisci facere accusantium nam placeat eius voluptatem a qui odio ut, libero excepturi facilis.</p>
        </article>
        <Footer/>
      </div>
    )
  }
}

export default Home